"""Gemaakt met Codex. Scope CAFA2-stijlen zonder externe afhankelijkheden.

``scope(css)`` bewaart declaraties en groepeert alleen gewone CSS-selectoren
onder de actieve Cirrus-omgeving. De scanner respecteert strings, comments,
escapes en gebalanceerde haakjes; selectorfuncties mogen dus komma's bevatten.
"""

from __future__ import annotations

import re

BODY = "body.cirrus-mode"
HTML = "html:has(body.cirrus-mode)"
BODY_STATES = ("exam-dashboard", "exam-running", "exam-surface")
GROUP_RULES = {"media", "supports", "container", "layer", "document", "scope", "starting-style"}
IDENT_END = r"(?![\w-])"


def _comment_end(css: str, start: int) -> int:
    end = css.find("*/", start + 2)
    if end < 0:
        raise ValueError("Niet-afgesloten CSS-commentaar")
    return end + 2


def _string_end(css: str, start: int) -> int:
    quote, i = css[start], start + 1
    while i < len(css):
        if css[i] == "\\":
            i += 2
        elif css[i] == quote:
            return i + 1
        else:
            i += 1
    raise ValueError("Niet-afgesloten CSS-string")


def _skip_token(css: str, i: int) -> int | None:
    if css.startswith("/*", i):
        return _comment_end(css, i)
    if css[i] in "\"'":
        return _string_end(css, i)
    if css[i] == "\\":
        return min(len(css), i + 2)
    return None


def _selector_parts(selector: str) -> list[str]:
    """Split alleen komma's buiten :is(), :has(), strings en attributen."""
    parts, stack, start, i = [], [], 0, 0
    while i < len(selector):
        skipped = _skip_token(selector, i)
        if skipped is not None:
            i = skipped
            continue
        char = selector[i]
        if char in "([":
            stack.append(char)
        elif char in ")]":
            if not stack or stack.pop() != {")": "(", "]": "["}[char]:
                raise ValueError("Ongebalanceerde CSS-selector")
        elif char == "," and not stack:
            parts.append(selector[start:i].strip())
            start = i + 1
        i += 1
    if stack:
        raise ValueError("Ongebalanceerde CSS-selector")
    parts.append(selector[start:].strip())
    if not all(parts):
        raise ValueError("Lege CSS-selector")
    return parts


def _selector_tokens(selector: str) -> str:
    """Map het host-id; laat geciteerde attribuutwaarden volledig intact."""
    pieces, i, attribute_depth = [], 0, 0
    while i < len(selector):
        if selector.startswith("/*", i):
            i = _comment_end(selector, i)
            continue
        skipped = _skip_token(selector, i)
        if skipped is not None:
            pieces.append(selector[i:skipped])
            i = skipped
            continue
        if selector[i] == "[":
            attribute_depth += 1
        elif selector[i] == "]":
            attribute_depth -= 1
        match = None if attribute_depth else re.match(r"#app-content" + IDENT_END, selector[i:])
        if match:
            pieces.append("#main")
            i += match.end()
        else:
            pieces.append(selector[i])
            i += 1
    return "".join(pieces).strip()


def _scope_selector(selector: str) -> str:
    selector = _selector_tokens(selector)
    root = re.match(r"^(?::root|body)" + IDENT_END, selector)
    if root:
        suffix = selector[root.end():]
        # Idempotent voor de body-prefix zelf (zonder regels dubbel te importeren).
        return ("body" if re.match(r"^\.cirrus-mode" + IDENT_END, suffix) else BODY) + suffix
    root = re.match(r"^html" + IDENT_END, selector)
    if root:
        suffix = selector[root.end():]
        # html body ... blijft een bestaande voorouderrelatie; scope de body mee.
        suffix = re.sub(r"^(\s*(?:>\s*)?)body" + IDENT_END, r"\1" + BODY, suffix)
        return HTML + suffix
    state = re.match(r"^\.(?:" + "|".join(BODY_STATES) + r")" + IDENT_END, selector)
    if state:
        return BODY + selector
    # CAFA2 zet deze featureklasse op html, niet op een element binnen body.
    enhanced = re.match(r"^\.enhanced" + IDENT_END, selector)
    if enhanced:
        suffix = selector[enhanced.end():]
        # De bron gebruikt .enhanced als los vooroudercompound.
        if not suffix or suffix[0].isspace() or suffix[0] == ">":
            return "html.enhanced:has(body.cirrus-mode) " + BODY + suffix
    return BODY + " " + selector


def _prelude_end(css: str, start: int) -> int:
    stack, i = [], start
    while i < len(css):
        skipped = _skip_token(css, i)
        if skipped is not None:
            i = skipped
            continue
        char = css[i]
        if char in "([":
            stack.append(char)
        elif char in ")]":
            if not stack or stack.pop() != {")": "(", "]": "["}[char]:
                raise ValueError("Ongebalanceerde CSS-regel")
        elif char in "{;}" and not stack:
            return i
        i += 1
    if stack:
        raise ValueError("Ongebalanceerde CSS-regel")
    return i


def _block_end(css: str, start: int) -> int:
    depth, i = 1, start + 1
    while i < len(css):
        skipped = _skip_token(css, i)
        if skipped is not None:
            i = skipped
            continue
        if css[i] == "{":
            depth += 1
        elif css[i] == "}":
            depth -= 1
            if not depth:
                return i
        i += 1
    raise ValueError("Niet-afgesloten CSS-blok")


def scope(css: str) -> str:
    """Geef CSS terug die alleen in Cirrus geldt, met ongewijzigde declaraties.

    @media, @supports en vergelijkbare groepsregels worden recursief gescoped.
    Declaratie-at-rules (zoals @font-face) en keyframes blijven bytegetrouw
    intact: hun interne namen/declaraties zijn geen elementselectoren.
    """
    output, i = [], 0
    while i < len(css):
        # Bewaar inspringing en comments tussen regels letterlijk.
        start = i
        while i < len(css):
            if css[i].isspace():
                i += 1
            elif css.startswith("/*", i):
                i = _comment_end(css, i)
            else:
                break
        output.append(css[start:i])
        if i == len(css):
            break
        end = _prelude_end(css, i)
        if end == len(css) or css[end] == "}":
            raise ValueError("CSS-regel zonder geldig afsluitend blok")
        prelude = css[i:end]
        if css[end] == ";":
            if not prelude.lstrip().startswith("@"):
                raise ValueError("Losse CSS-declaratie buiten een regel")
            output.append(css[i:end + 1])
            i = end + 1
            continue
        close = _block_end(css, end)
        content = css[end + 1:close]
        at_rule = re.match(r"\s*@([\w-]+)", prelude)
        if at_rule:
            output.append(prelude + "{" + (scope(content) if at_rule[1].lower() in GROUP_RULES else content) + "}")
        else:
            output.append(",".join(_scope_selector(part) for part in _selector_parts(prelude)) + "{" + content + "}")
        i = close + 1
    return "".join(output)
