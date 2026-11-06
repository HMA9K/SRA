(function () {
  'use strict';
  var original = window.CafaAnswerEditor;
  if (!original) return;
  var script = document.currentScript;
  var base = new URL('../vendor/tinymce/', script && script.src || new URL('js/tinymce-answer-editor.js', document.baseURI));
  var loading;
  var instances = new Map();
  function moveNode(parent, node, before) {
    if (typeof parent.moveBefore === "function" && node.isConnected && parent.isConnected) { parent.moveBefore(node, before || null); return; }
    var affected = Array.from(instances).filter(function (entry) { return node === entry[0] || node.contains(entry[0]); }).map(function (entry) { return entry[1]; });
    affected.forEach(function (item) { item.suspend(); });
    parent.insertBefore(node, before || null);
    affected.forEach(function (item) { item.resume(); });
  }
  function load() {
    if (window.tinymce) return Promise.resolve(window.tinymce);
    if (!loading) loading = new Promise(function (resolve, reject) {
      var element = document.createElement('script');
      element.src = new URL('tinymce.min.js', base).href;
      element.onload = function () { resolve(window.tinymce); };
      element.onerror = function () { loading = null; reject(new Error('Editor niet geladen')); };
      document.head.appendChild(element);
    });
    return loading;
  }
  // ponytail: de knoppen zitten alleen in TinyMCE; de eenvoudige noodeditor toont bewaarde breuken wel, maar voegt ze niet toe.
  function installFormulas(instance) {
    var doc = instance.getDoc();
    function makeBox(text) {
      var box = doc.createElement('span');
      box.className = 'answer-box'; box.contentEditable = 'true'; box.textContent = text || '';
      return box;
    }
    function place(node, offset) { if (node.focus) node.focus(); instance.selection.setCursorLocation(node, offset); }
    function placeInBox(box, end) { place(box, end ? box.childNodes.length : 0); }
    // Een onzichtbaar teken geeft de cursor naast het blok een plek; bij het bewaren valt het weg.
    function leave(formula, forward) {
      var anchor = doc.createTextNode('\uFEFF'), host = formula.parentElement.closest('.answer-box');
      formula[forward ? 'after' : 'before'](anchor);
      if (host) host.focus(); else instance.getBody().focus();
      instance.selection.setCursorLocation(anchor, forward ? 1 : 0);
    }
    function insert(kind) {
      instance.focus();
      var text = instance.selection.getContent({format: 'text'}).trim();
      if (text.includes('\n')) { instance.selection.collapse(false); text = ''; }
      instance.undoManager.transact(function () {
        var formula = doc.createElement('span'), first = makeBox(text), range = instance.selection.getRng();
        formula.className = 'answer-formula answer-' + kind; formula.contentEditable = 'false';
        formula.append(first);
        if (kind === 'frac') formula.append(makeBox());
        range.deleteContents(); range.insertNode(formula);
        // Bij geselecteerde tekst is de teller al gevuld; dan begint de cursor in de noemer.
        if (text && kind === 'frac') placeInBox(formula.lastChild); else placeInBox(first, true);
      });
    }
    function currentBox() {
      var range = instance.selection.getRng(), node = range.startContainer, element = node.nodeType === 1 ? node : node.parentElement;
      return range.collapsed && element && element.closest('.answer-box');
    }
    function empty(box) { return !box.textContent.replace(/\uFEFF/g, '').length; }
    function atEdge(box, end) {
      var range = instance.selection.getRng(), rest = range.cloneRange();
      rest.selectNodeContents(box);
      if (end) rest.setStart(range.endContainer, range.endOffset); else rest.setEnd(range.startContainer, range.startOffset);
      return !rest.toString().replace(/\uFEFF/g, '').length;
    }
    function step(box, forward) {
      var list = Array.from(box.parentElement.children), next = list[list.indexOf(box) + (forward ? 1 : -1)];
      if (next) placeInBox(next, !forward); else leave(box.parentElement, forward);
    }
    function remove(formula) {
      instance.undoManager.transact(function () {
        var anchor = doc.createTextNode('\uFEFF'), host = formula.parentElement.closest('.answer-box');
        formula.replaceWith(anchor);
        if (host) host.focus(); else instance.getBody().focus();
        instance.selection.setCursorLocation(anchor, 0);
      });
    }
    doc.addEventListener('keydown', function (event) {
      var box = currentBox();
      if (!box || event.isComposing || event.ctrlKey || event.metaKey || event.altKey) return;
      var key = event.key, handled = true;
      if (key === 'Tab' || key === 'Enter') step(box, !event.shiftKey);
      else if (event.shiftKey) handled = false;
      else if (key === 'ArrowDown' || key === 'ArrowUp') step(box, key === 'ArrowDown');
      else if (key === 'ArrowRight' && atEdge(box, true)) step(box, true);
      else if (key === 'ArrowLeft' && atEdge(box, false)) step(box, false);
      else if (key === 'Backspace' && atEdge(box, false)) { if (Array.from(box.parentElement.children).every(empty)) remove(box.parentElement); }
      else if (key === 'Delete' && atEdge(box, true)) { if (Array.from(box.parentElement.children).every(empty)) remove(box.parentElement); }
      else handled = false;
      if (!handled) return;
      event.preventDefault(); event.stopImmediatePropagation();
    }, true);
    return insert;
  }
  // Blijft open onder de knoppenbalk, zodat je tekens kiest en meteen doortypt.
  function installSymbols(instance, changed) {
    var groups = instance.plugins.charmap.getCharMap(), all = groups[0], current = groups.find(function (group) { return group.name === 'Mathematical'; }) || all;
    var panel = document.createElement('div');
    panel.className = 'answer-symbols'; panel.hidden = true;
    panel.setAttribute('role', 'group'); panel.setAttribute('aria-label', 'Speciale tekens');
    panel.innerHTML = '<div class="answer-symbols-head"><div class="answer-symbols-tabs"></div><input type="search" placeholder="Zoeken" aria-label="Speciale tekens zoeken" autocomplete="off"><button type="button" class="answer-symbols-close" aria-label="Speciale tekens sluiten">×</button></div><div class="answer-symbols-grid"></div>';
    var tabs = panel.querySelector('.answer-symbols-tabs'), grid = panel.querySelector('.answer-symbols-grid'), search = panel.querySelector('input');
    groups.forEach(function (group) {
      var tab = document.createElement('button');
      tab.type = 'button'; tab.textContent = instance.translate(group.name); tab.group = group;
      tabs.append(tab);
    });
    function render() {
      var query = search.value.trim().toLowerCase();
      Array.from(tabs.children).forEach(function (tab) { tab.setAttribute('aria-pressed', String(tab.group === current)); });
      grid.replaceChildren.apply(grid, (query ? all : current).characters.filter(function (entry) { return !query || entry[1].toLowerCase().includes(query); }).map(function (entry) {
        var button = document.createElement('button'), character = String.fromCodePoint(entry[0]);
        button.type = 'button'; button.textContent = character; button.title = entry[1];
        button.dataset.char = character; button.setAttribute('aria-label', entry[1]);
        return button;
      }));
    }
    function toggle(open) {
      panel.hidden = !open;
      if (open) render(); else instance.focus();
      changed(open);
    }
    // De cursor blijft in het antwoord staan terwijl je een teken aanklikt.
    panel.addEventListener('mousedown', function (event) { if (event.target !== search) event.preventDefault(); });
    panel.addEventListener('click', function (event) {
      var button = event.target.closest('button');
      if (!button) return;
      if (button.group) { current = button.group; search.value = ''; render(); }
      else if (button.dataset.char) instance.plugins.charmap.insertChar(button.dataset.char);
      else toggle(false);
    });
    panel.addEventListener('keydown', function (event) { if (event.key === 'Escape') toggle(false); });
    search.addEventListener('input', render);
    instance.getContainer().querySelector('.tox-sidebar-wrap').before(panel);
    return function () { toggle(panel.hidden); };
  }
  var contentStyle = '.answer-formula{display:inline-flex;max-width:100%;margin:0 .15em;vertical-align:middle}.answer-frac{flex-direction:column;text-align:center}.answer-root{align-items:flex-start}.answer-root::before{content:"√";font-size:1.25em;line-height:1.1}.answer-box{display:block;min-width:1.3em;min-height:1.3em;padding:0 .25em;line-height:1.3;outline:none}.answer-frac>.answer-box+.answer-box,.answer-root>.answer-box{border-top:1px solid currentColor}.answer-box:empty{background:rgba(0,108,71,.1)}.answer-box:focus{box-shadow:0 0 0 1px #006c47}body[data-editor-theme=dark] .answer-box:empty{background:rgba(158,223,201,.18)}body[data-editor-theme=dark] .answer-box:focus{box-shadow:0 0 0 1px #9edfc9}body{font:14px/1.55 Arial,sans-serif;margin:12px;color:#252b34;background:#fff;overflow-wrap:anywhere}p{margin:0 0 .6em}table{border-collapse:collapse;table-layout:fixed;max-width:100%}body table td,body table th{border:1px solid #afb7c0!important;min-width:30px;padding:6px;vertical-align:top;overflow-wrap:anywhere}th{background:#f4f6f8}body[data-editor-theme=dark]{background:#152129;color:#e0ebf2}body[data-editor-theme=dark] td,body[data-editor-theme=dark] th{border-color:#667681!important}body[data-editor-theme=dark] th{background:#263540}';
  function mount(container, options) {
    options = options || {};
    var fallback = original.mount(container, options);
    if (options.readOnly) return fallback;
    var target = container.querySelector('.cae-content'), wrapper = target.closest('.cafa-answer-editor');
    var editor = null, disposed = false, initialized = false, last = fallback.getHTML(), observer, widthObserver, resizeCleanup, applyingBounds = false, previousWidth = 0, initialization = 0;
    var sizeKey = "learning-answer-editor-size-v2:" + location.hash;
    var widthRatio = 1;
    // Het onzichtbare cursorteken naast een breuk hoort niet in het bewaarde antwoord.
    function editorHTML() { return original.sanitize(editor.getContent()).replace(/\uFEFF/g, ''); }
    function sync() {
      if (!initialized || disposed || !editor) return;
      var value = editorHTML();
      if (value === last) return;
      last = value; fallback.setHTML(value);
      if (typeof options.onChange === 'function') options.onChange(value);
    }
    function theme() {
      var dark = document.documentElement.getAttribute('data-study-theme') === 'dark';
      wrapper.dataset.editorTheme = dark ? 'dark' : 'light';
      if (editor && initialized) editor.getBody().dataset.editorTheme = dark ? 'dark' : 'light';
    }
    function availableWidth() { return Math.max(120, Math.floor(container.getBoundingClientRect().width / (window.StudyScale?.get() || 1) || 600)); }
    function savedSize() {
      try { return JSON.parse(sessionStorage.getItem(sizeKey) || 'null'); } catch (_) { return null; }
    }
    var size = savedSize();
    if (size && Number.isFinite(size.widthRatio)) widthRatio = Math.max(0.1, Math.min(1, size.widthRatio));
    function fullScreen() { return editor && editor.plugins.fullscreen && editor.plugins.fullscreen.isFullscreen(); }
    function installResize(instance) {
      var element=instance.getContainer(),handle=element.querySelector('.tox-statusbar__resize-handle'),drag=null;
      if(!handle)return;
      function dimensions(){var scale=window.StudyScale?.get()||1,r=element.getBoundingClientRect();return {width:r.width/scale,height:r.height/scale,scale:scale};}
      function apply(width,height){
        var limit=availableWidth();
        element.style.width=Math.max(Math.min(260,limit),Math.min(limit,width))+'px';
        element.style.height=Math.max(220,height)+'px';
        instance.dispatch('ResizeEditor');
      }
      function stop(){
        if(!drag)return;
        var previous=drag;drag=null;
        if(previous.pane)previous.pane.style.overflowAnchor=previous.anchor;
        if(handle.hasPointerCapture(previous.pointer))handle.releasePointerCapture(previous.pointer);
      }
      function start(event){
        if(event.button!==0||fullScreen())return;
        event.preventDefault();event.stopImmediatePropagation();
        handle.focus({preventScroll:true});
        var size=dimensions(),pane=element.closest('.exam-question-body');
        if(!pane||getComputedStyle(pane).overflowY==='visible')pane=document.scrollingElement;
        drag={x:event.clientX,y:event.clientY,width:size.width,height:size.height,scale:size.scale,pointer:event.pointerId,pane:pane,anchor:pane&&pane.style.overflowAnchor};
        if(pane)pane.style.overflowAnchor='none';
        handle.setPointerCapture(event.pointerId);
      }
      function move(event){
        if(!drag||event.pointerId!==drag.pointer)return;
        event.preventDefault();event.stopImmediatePropagation();
        apply(drag.width+(event.clientX-drag.x)/drag.scale,drag.height+(event.clientY-drag.y)/drag.scale);
      }
      // TinyMCE's native mouse handler measures zoomed pixels as CSS pixels.
      function blockMouse(event){event.preventDefault();event.stopImmediatePropagation();}
      function keyboard(event){
        if(fullScreen()||!/^Arrow(?:Left|Right|Up|Down)$/.test(event.key))return;
        event.preventDefault();event.stopImmediatePropagation();
        var size=dimensions(),step=event.shiftKey?25:10;
        apply(size.width+(event.key==='ArrowLeft'?-step:event.key==='ArrowRight'?step:0),size.height+(event.key==='ArrowUp'?-step:event.key==='ArrowDown'?step:0));
      }
      handle.tabIndex=0;handle.style.touchAction='none';handle.setAttribute('role','button');handle.setAttribute('aria-label','Antwoordveld vergroten of verkleinen met slepen of pijltjestoetsen');
      handle.addEventListener('pointerdown',start,true);handle.addEventListener('pointermove',move,true);
      handle.addEventListener('pointerup',stop,true);handle.addEventListener('pointercancel',stop,true);handle.addEventListener('lostpointercapture',stop,true);
      handle.addEventListener('mousedown',blockMouse,true);handle.addEventListener('keydown',keyboard,true);
      resizeCleanup=function(){stop();handle.removeEventListener('pointerdown',start,true);handle.removeEventListener('pointermove',move,true);handle.removeEventListener('pointerup',stop,true);handle.removeEventListener('pointercancel',stop,true);handle.removeEventListener('lostpointercapture',stop,true);handle.removeEventListener('mousedown',blockMouse,true);handle.removeEventListener('keydown',keyboard,true);};
    }
    function resizeBounds() {
      if (!initialized || disposed || fullScreen()) return;
      var width = availableWidth();
      editor.options.set('max_width', width); editor.options.set('min_width', Math.min(260, width));
      if (width === previousWidth) return;
      previousWidth = width; applyingBounds = true;
      editor.getContainer().style.width = widthRatio >= 0.995 ? '100%' : Math.max(Math.min(260, width), width * widthRatio) + 'px';
      editor.dispatch('ResizeEditor'); applyingBounds = false;
    }
    function initialize(tiny) {
      var generation = initialization;
      size = savedSize();
      previousWidth = 0;
      if (disposed || !target.isConnected || editor) return;
      var width = availableWidth();
      return tiny.init({
        target: target, base_url: base.href.replace(/\/$/, ''), suffix: '.min', license_key: 'gpl',
        text_patterns: false, menubar: false, elementpath: false, promotion: false, resize: 'both', height: size && Number.isFinite(size.height) ? Math.max(220, Math.min(900, size.height)) : 360,
        width: widthRatio >= 0.995 ? '100%' : Math.max(Math.min(260, width), width * widthRatio), min_height: 220, min_width: Math.min(260, width), max_width: width,
        language: 'nl', language_url: new URL('langs/nl.js', base).href,
        plugins: 'table lists charmap fullscreen',
        toolbar: 'undo redo | blocks | bold italic underline subscript superscript | answerfrac answerroot answersum | bullist numlist | alignleft aligncenter alignright | table answersymbols | removeformat fullscreen',
        toolbar_mode: 'sliding', contextmenu: 'table',
        table_toolbar: 'tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | tablemergecells tablesplitcells tabledelete',
        table_resize_bars: true, table_sizing_mode: 'relative', table_default_attributes: {border: '1'},
        table_default_styles: {'border-collapse': 'collapse', width: '100%'},
        block_formats: 'Normale tekst=p;Kop=h2;Tussenkop=h3;Vaste breedte=pre',
        skin: 'oxide', content_css: false, content_style: contentStyle,
        browser_spellcheck: true, paste_data_images: false, automatic_uploads: false,
        noneditable_class: 'answer-formula', editable_class: 'answer-box',
        valid_elements: 'p[style],div[style],br,strong,b,em,i,u,s,strike,sub,sup,h2[style],h3[style],h4[style],ul,ol[type|start],li,blockquote,pre,code,table[style],colgroup,col[style],thead,tbody,tfoot,tr,td[style|colspan|rowspan],th[style|colspan|rowspan|scope],caption,span[style|class]',
        setup: function (instance) {
          editor = instance;
          var insertFormula, toggleSymbols, symbolButton;
          instance.ui.registry.addToggleButton('answersymbols', {icon: 'insert-character', tooltip: 'Speciale tekens', onAction: function () { toggleSymbols(); }, onSetup: function (api) { symbolButton = api; return function () {}; }});
          instance.ui.registry.addButton('answerfrac', {text: 'Breuk', tooltip: 'Breuk invoegen; Tab gaat naar het volgende vak', onAction: function () { insertFormula('frac'); }});
          // De leerstof schrijft Σw en Σ(...)² zonder grenzen; het teken werkt ook in een vakje.
          instance.ui.registry.addButton('answersum', {text: 'Σ', tooltip: 'Somteken invoegen', onAction: function () { instance.insertContent('Σ'); }});
          instance.ui.registry.addButton('answerroot', {text: 'Wortel', tooltip: 'Wortel invoegen; Tab gaat verder na de wortel', onAction: function () { insertFormula('root'); }});
          instance.on('init', function () {
            if (disposed || generation !== initialization || !target.isConnected) { instance.remove(); return; }
            insertFormula = installFormulas(instance);
            toggleSymbols = installSymbols(instance, function (open) { if (symbolButton) symbolButton.setActive(open); });
            instance.setContent(fallback.getHTML());
            last = editorHTML(); initialized = true;
            wrapper.classList.add('has-tinymce'); theme();
            var count = wrapper.querySelector('.cae-count'), statusbar = instance.getContainer().querySelector('.tox-statusbar__right-container') || instance.getContainer().querySelector('.tox-statusbar');
            if (count && statusbar) statusbar.prepend(count);
            instance.getBody().setAttribute('aria-label', options.label || 'Vul je antwoord in');
            observer = new MutationObserver(theme); observer.observe(document.documentElement, {attributes: true, attributeFilter: ['data-study-theme']});
            if (window.StudyAnswerInput) window.StudyAnswerInput.attachEditor(instance, wrapper);
            resizeBounds();
            installResize(instance);
            if (window.ResizeObserver) { widthObserver = new ResizeObserver(resizeBounds); widthObserver.observe(container); }
            window.addEventListener('resize', resizeBounds);
          });
          instance.on('input change Undo Redo blur', sync);
          instance.on('FullscreenStateChanged', function () { previousWidth = 0; resizeBounds(); });
          instance.on('ResizeEditor', function () {
            if (!initialized || applyingBounds || fullScreen()) return;
            var rect = instance.getContainer().getBoundingClientRect();
            widthRatio = Math.max(0.1, Math.min(1, rect.width / (window.StudyScale?.get() || 1) / availableWidth()));
            try { sessionStorage.setItem(sizeKey, JSON.stringify({widthRatio: widthRatio, height: rect.height / (window.StudyScale?.get() || 1)})); } catch (_) {}
          });
        }
      });
    }
    function unavailable() {
      if (!disposed) wrapper.querySelector('.cae-status').textContent = 'De eenvoudige editor blijft beschikbaar.';
    }
    var record = {
      suspend: function () {
        sync(); initialization++;
        if(resizeCleanup)resizeCleanup();
        if (observer) observer.disconnect(); if (widthObserver) widthObserver.disconnect();
        window.removeEventListener('resize', resizeBounds);
        var count = wrapper.querySelector('.cae-count'); if (count) wrapper.querySelector('.cae-footer').append(count);
        initialized = false; wrapper.classList.remove('has-tinymce');
        if (editor) editor.remove(); editor = null;
      },
      resume: function () { if (!disposed) load().then(initialize).catch(unavailable); }
    };
    instances.set(wrapper, record);
    load().then(initialize).catch(unavailable);
    return {
      getHTML: function () { return initialized && editor ? editorHTML() : fallback.getHTML(); },
      setHTML: function (value) { last = original.sanitize(value); fallback.setHTML(last); if (initialized && editor) editor.setContent(last); },
      focus: function () { if (initialized && editor) editor.focus(); else fallback.focus(); },
      destroy: function () { if (disposed) return; sync(); disposed = true; instances.delete(wrapper); if(resizeCleanup)resizeCleanup();if (observer) observer.disconnect(); if (widthObserver) widthObserver.disconnect(); window.removeEventListener('resize', resizeBounds); if (editor) editor.remove(); fallback.destroy(); }
    };
  }
  window.CafaAnswerEditor = {mount: mount, sanitize: original.sanitize, moveNode: moveNode};
})();
