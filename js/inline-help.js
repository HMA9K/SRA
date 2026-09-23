/* Gemaakt met Codex: gedeelde, niet-modale uitleg naast het aangeklikte begrip. */
(function () {
  'use strict';
  let active = null, frame = null;
  function close(panel, restoreFocus = true) {
    if (!active || (panel && active.panel !== panel)) return;
    const previous = active; active = null;
    previous.panel.hidden = true;
    previous.panel.removeAttribute('open');
    previous.anchor.setAttribute('aria-expanded', 'false');
    if (restoreFocus && previous.anchor.isConnected) previous.anchor.focus({preventScroll:true});
  }
  function position() {
    if (!active) return;
    const {panel, anchor} = active, rect = anchor.getBoundingClientRect();
    const vw = document.documentElement.clientWidth, vh = window.innerHeight, gap = 7, edge = 12;
    if (!anchor.isConnected || rect.bottom < 0 || rect.top > vh || rect.right < 0 || rect.left > vw) { close(panel, false); return; }
    const below = vh - rect.bottom - gap - edge, above = rect.top - gap - edge;
    const placeAbove = below < 150 && above > below;
    panel.style.maxWidth = Math.max(0, vw - 2 * edge) + 'px';
    panel.style.maxHeight = Math.max(100, Math.min(400, placeAbove ? above : below)) + 'px';
    panel.style.left = Math.max(edge, Math.min(rect.left, vw - panel.offsetWidth - edge)) + 'px';
    panel.style.top = (placeAbove ? Math.max(edge, rect.top - gap - panel.offsetHeight) : rect.bottom + gap) + 'px';
    panel.dataset.placement = placeAbove ? 'above' : 'below';
  }
  function schedule(event) {
    if (!active || (event?.type === 'scroll' && active.panel.contains(event.target))) return;
    if (frame !== null) return;
    frame = requestAnimationFrame(() => {frame = null; position();});
  }
  function open(panel, anchor) {
    if (active?.panel === panel && active.anchor === anchor) { close(panel); return; }
    close(null, false);
    active = {panel, anchor};
    panel.hidden = false; panel.setAttribute('open','');
    anchor.setAttribute('aria-expanded','true');
    if (panel.id) anchor.setAttribute('aria-controls',panel.id);
    position();
  }
  document.addEventListener('pointerdown', event => {
    if (active && !active.panel.contains(event.target) && !active.anchor.contains(event.target)) close(null, false);
  }, true);
  document.addEventListener('keydown', event => {
    if (!active) return;
    if (event.key === 'Escape') {event.preventDefault();close(null,true);return;}
    if (event.key !== 'Tab') return;
    const first = active.panel.querySelector('button,a[href],summary');
    if (!event.shiftKey && event.target === active.anchor && first) {event.preventDefault();first.focus({preventScroll:true});}
    else if (event.shiftKey && event.target === first) {event.preventDefault();active.anchor.focus({preventScroll:true});}
  });
  document.addEventListener('focusin', event => {
    if (active && !active.panel.contains(event.target) && event.target !== active.anchor) close(null,false);
  });
  document.addEventListener('scroll',schedule,true);
  document.addEventListener('toggle',event=>{if(active?.panel.contains(event.target))schedule();},true);
  window.addEventListener('resize',schedule);
  window.addEventListener('hashchange',()=>close(null,false));
  window.SRAInlineHelp = {open,close};
})();
