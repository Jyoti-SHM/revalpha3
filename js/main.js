/* =====================================================================
   RevAlpha — Interaction Engine  |  js/main.js
   Loader, header, mobile menu, cursor, smooth scroll, reveals,
   counters, charts, accordions, tabs, sliders, forms, transitions.
   Depends on: js/data.js  (window.RA)
   Optional CDN: gsap, ScrollTrigger, Lenis, Swiper, SplitType
   ===================================================================== */
(function () {
  'use strict';

  var RA = window.RA || {};
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = window.matchMedia('(hover: none), (max-width: 1024px)').matches;
  var doc = document;

  /* ----------------------------------------------------------------
     ICONS
     ---------------------------------------------------------------- */
  var ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.24 8.02h4.52V23H.24zM8.34 8.02h4.33v2.05h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.92V23h-4.52v-6.7c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V23H8.34z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.2"/><circle cx="12" cy="12" r="4.3"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.29-.04-1.27-.12-2.4-.12-2.38 0-4 1.45-4 4.1v2.3H7.6V14h2.7v8z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5"/></svg>',
    boundary: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M6 6l12 12"/></svg>',
    arrow: '<svg class="arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  /* ----------------------------------------------------------------
     HELPERS
     ---------------------------------------------------------------- */
  function el(tag, cls, html) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function $(s, c) { return (c || doc).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); }
  function currentFile() {
    var p = window.location.pathname.split('/').pop();
    return p && p.length ? p : 'index.html';
  }
  function isCurrent(href) {
    var f = href.split('#')[0];
    if (!f) return false;
    return f === currentFile();
  }

  /* ----------------------------------------------------------------
     HEADER INJECTION
     ---------------------------------------------------------------- */
  function buildHeader() {
    var file = currentFile();
    var navHTML = RA.nav.map(function (item) {
      var cur = isCurrent(item.href) ? ' aria-current="page"' : '';
      if (item.dropdown === 'hotelTypes') {
        var drop = RA.hotelTypes.map(function (t) {
          return '<a href="' + t.href + '">' + t.name + '</a>';
        }).join('');
        return '<div class="nav-item"><a href="' + item.href + '"' + cur + '>' + item.label + '</a>' +
          '<div class="nav-drop"><span class="drop-title">Built for your property type</span>' + drop + '</div></div>';
      }
      return '<a href="' + item.href + '"' + cur + '>' + item.label + '</a>';
    }).join('');

    var mobileNav = RA.nav.map(function (item) {
      return '<a href="' + item.href + '">' + item.label + '</a>';
    }).join('');

    return '' +
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<header class="site-header" id="siteHeader">' +
        '<div class="wrap header-inner">' +
          '<a class="brand" href="index.html" aria-label="RevAlpha home">' +
            '<img src="img/revalpha-logo-light.svg" alt="RevAlpha" width="150" height="30" loading="eager">' +
          '</a>' +
          '<nav class="main-nav" aria-label="Primary">' + navHTML + '</nav>' +
          '<div class="header-actions">' +
            '<a class="btn btn-gold btn-sm" href="' + RA.ctaPrimary.href + '">See what your property could be earning</a>' +
            '<button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu"><span></span></button>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div class="mobile-menu" id="mobileMenu" role="dialog" aria-modal="true" aria-label="Menu">' +
        '<nav aria-label="Mobile">' + mobileNav + '</nav>' +
        '<div class="mm-actions">' +
          '<a class="btn btn-gold" href="' + RA.ctaPrimary.href + '">See what your property could be earning</a>' +
          '<a class="btn btn-outline" href="' + RA.ctaSecondary.href + '">Talk to a revenue specialist</a>' +
        '</div>' +
        '<div class="mm-contact">' + RA.company.phone + '<br>' + RA.company.email + '</div>' +
      '</div>';
  }

  /* ----------------------------------------------------------------
     FOOTER INJECTION
     ---------------------------------------------------------------- */
  function buildFooter() {
    var cols = RA.footer.columns.map(function (col) {
      var links = col.links.map(function (l) {
        return '<li><a href="' + l.href + '">' + l.label + '</a></li>';
      }).join('');
      return '<div class="footer-col"><h5>' + col.title + '</h5><ul>' + links + '</ul></div>';
    }).join('');

    var socials = RA.company.socials.map(function (s) {
      return '<a href="' + s.href + '" target="_blank" rel="noopener" aria-label="' + s.label + '">' + (ICONS[s.icon] || '') + '</a>';
    }).join('');

    return '' +
      '<footer class="site-footer grain" id="siteFooter">' +
        '<div class="wrap footer-top">' +
          '<div class="footer-brand">' +
            '<a class="brand" href="index.html" aria-label="RevAlpha home"><img src="img/revalpha-logo-light.svg" alt="RevAlpha" width="160" height="32" loading="lazy"></a>' +
            '<p class="foot-line">' + RA.footer.line + '</p>' +
            '<p class="foot-sub">' + RA.footer.sub + '</p>' +
          '</div>' +
          cols +
          '<div class="footer-col">' +
            '<h5>Contact</h5>' +
            '<div class="contact-line">' +
              '<a href="' + RA.company.phoneHref + '">' + RA.company.phone + '</a><br>' +
              '<a href="mailto:' + RA.company.email + '">' + RA.company.email + '</a><br><br>' +
              RA.company.address +
            '</div>' +
            '<div class="footer-socials" style="margin-top:18px">' + socials + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="wrap footer-bottom">' +
          '<div class="fb-left">Powered by <strong>Hospitality Minds</strong> &nbsp;·&nbsp; © 2026 Hospitality Minds Private Limited. All rights reserved.</div>' +
          '<div class="footer-marquee">Pricing · Forecasting · Distribution · Revenue Intelligence</div>' +
        '</div>' +
      '</footer>';
  }

  /* ----------------------------------------------------------------
     LOADER + CURSOR + CURTAIN INJECTION
     ---------------------------------------------------------------- */
  function buildChrome() {
    var chrome = el('div');
    chrome.innerHTML =
      '<div id="loader">' +
        '<div class="loader-inner"><div class="loader-mark">Rev<span>Alpha</span></div><div class="loader-sub">Revenue Intelligence for Hotels</div></div>' +
      '</div>' +
      '<div class="loader-curtain" id="loaderCurtain"></div>' +
      '<div class="scroll-progress" aria-hidden="true"><span id="scrollBar"></span></div>' +
      '<div class="cursor-dot" aria-hidden="true"></div>' +
      '<div class="cursor-ring" aria-hidden="true"></div>' +
      '<div class="cursor-label" aria-hidden="true">Explore</div>' +
      '<div class="page-curtain" id="pageCurtain"></div>';
    while (chrome.firstChild) doc.body.appendChild(chrome.firstChild);
  }

  /* ----------------------------------------------------------------
     LOADER LOGIC
     ---------------------------------------------------------------- */
  function runLoader() {
    var loader = $('#loader');
    var curtain = $('#loaderCurtain');
    if (!loader) { doc.body.classList.add('loaded'); return; }
    if (reduceMotion || sessionStorage.getItem('ra_loaded')) {
      loader.remove(); if (curtain) curtain.remove();
      doc.body.classList.add('loaded');
      return;
    }
    doc.body.classList.add('no-scroll');
    window.setTimeout(function () {
      if (curtain) curtain.classList.add('wipe');
      loader.classList.add('is-done');
      doc.body.classList.remove('no-scroll');
      doc.body.classList.add('loaded');
      sessionStorage.setItem('ra_loaded', '1');
      window.setTimeout(function () { loader.remove(); if (curtain) curtain.remove(); }, 900);
      dispatchReveal();
    }, 1050);
  }

  /* ----------------------------------------------------------------
     HEADER SCROLL BEHAVIOUR
     ---------------------------------------------------------------- */
  function initHeader() {
    var header = $('#siteHeader');
    if (!header) return;
    var lastY = window.scrollY;
    var ticking = false;
    function update() {
      var y = window.scrollY;
      if (y > 40) header.classList.add('scrolled'); else header.classList.remove('scrolled');
      if (y > 400 && y > lastY + 4) header.classList.add('hidden');
      else if (y < lastY - 4 || y < 400) header.classList.remove('hidden');
      lastY = y;
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ----------------------------------------------------------------
     MOBILE MENU
     ---------------------------------------------------------------- */
  function initMobileMenu() {
    var toggle = $('#navToggle');
    var menu = $('#mobileMenu');
    if (!toggle || !menu) return;
    function close() {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      doc.body.classList.remove('no-scroll');
    }
    function open() {
      menu.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      doc.body.classList.add('no-scroll');
    }
    toggle.addEventListener('click', function () {
      menu.classList.contains('open') ? close() : open();
    });
    $$('a', menu).forEach(function (a) { a.addEventListener('click', close); });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* ----------------------------------------------------------------
     CUSTOM CURSOR
     ---------------------------------------------------------------- */
  function initCursor() {
    if (isTouch || reduceMotion) return;
    var dot = $('.cursor-dot'), ring = $('.cursor-ring'), label = $('.cursor-label');
    if (!dot || !ring) return;
    var mx = window.innerWidth / 2, my = window.innerHeight / 2;
    var rx = mx, ry = my;
    window.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
      label.style.transform = 'translate(' + mx + 'px,' + my + 'px) scale(' + (label.classList.contains('show') ? 1 : 0.8) + ')';
    }, { passive: true });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
      window.requestAnimationFrame(loop);
    })();
    doc.addEventListener('mouseover', function (e) {
      var t = e.target.closest('[data-cursor], a, button, .card, .swiper-slide');
      if (!t) return;
      ring.classList.add('grow');
      var lbl = t.getAttribute && t.getAttribute('data-cursor');
      if (lbl) { label.textContent = lbl; label.classList.add('show'); }
    });
    doc.addEventListener('mouseout', function (e) {
      var t = e.target.closest('[data-cursor], a, button, .card, .swiper-slide');
      if (!t) return;
      ring.classList.remove('grow');
      label.classList.remove('show');
    });
  }

  /* ----------------------------------------------------------------
     SMOOTH SCROLL (Lenis)
     ---------------------------------------------------------------- */
  var lenis = null;
  function initLenis() {
    if (reduceMotion || isTouch || typeof window.Lenis === 'undefined') return;
    lenis = new window.Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 1, touchMultiplier: 1.4 });
    function raf(t) { lenis.raf(t); window.requestAnimationFrame(raf); }
    window.requestAnimationFrame(raf);
    if (window.gsap && window.ScrollTrigger) {
      lenis.on('scroll', window.ScrollTrigger.update);
      window.gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      window.gsap.ticker.lagSmoothing(0);
    }
    // anchor links
    $$('a[href^="#"], a[href*=".html#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var href = a.getAttribute('href');
        var hash = href.indexOf('#') > -1 ? href.slice(href.indexOf('#')) : '';
        if (!hash || hash === '#') return;
        var samePage = href.indexOf('#') === 0 || isCurrent(href);
        if (!samePage) return;
        var target = doc.querySelector(hash);
        if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -90 }); }
      });
    });
  }

  /* ----------------------------------------------------------------
     SCROLL PROGRESS
     ---------------------------------------------------------------- */
  function initProgress() {
    var bar = $('#scrollBar');
    if (!bar) return;
    function update() {
      var h = doc.documentElement.scrollHeight - window.innerHeight;
      var p = h > 0 ? (window.scrollY / h) * 100 : 0;
      bar.style.width = p + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ----------------------------------------------------------------
     REVEALS (IntersectionObserver fallback + GSAP enhancement)
     ---------------------------------------------------------------- */
  function initReveals() {
    var targets = $$('.reveal, .reveal-line, .chart, .steps');
    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (t) { t.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (t) { io.observe(t); });
  }
  function dispatchReveal() { /* observer handles it; kept for loader hook */ }

  /* ----------------------------------------------------------------
     TEXT SPLITTING (SplitType) + masked reveals
     ----------------------------------------------------------------- */
  function initSplit() {
    if (reduceMotion || typeof window.SplitType === 'undefined') return;
    $$('[data-split]').forEach(function (node) {
      var type = node.getAttribute('data-split') || 'lines';
      var split = new window.SplitType(node, { types: type, lineClass: 'rl-inner' });
      node.classList.add('reveal-line');
      if (window.gsap && window.ScrollTrigger) {
        // Use fromTo with an explicit y:0 so the CSS pre-transform
        // (translateY(110%)) is fully cleared. A plain gsap.from() left a
        // residual translate on the element which kept the lines pushed
        // down and clipped by overflow:hidden, so headings never revealed.
        window.gsap.fromTo(node.querySelectorAll('.rl-inner'),
          { yPercent: 110, y: 0 },
          { yPercent: 0, y: 0, duration: 1, ease: 'power3.out', stagger: 0.08,
            scrollTrigger: { trigger: node, start: 'top 85%' } }
        );
      }
    });
  }

  /* ----------------------------------------------------------------
     PARALLAX (light, transform only)
     ---------------------------------------------------------------- */
  function initParallax() {
    if (reduceMotion) return;
    var nodes = $$('[data-parallax]');
    if (!nodes.length) return;
    var ticking = false;
    function update() {
      var vh = window.innerHeight;
      nodes.forEach(function (n) {
        var rect = n.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > vh + 100) return;
        var speed = parseFloat(n.getAttribute('data-parallax')) || 0.15;
        var center = rect.top + rect.height / 2 - vh / 2;
        n.style.transform = 'translate3d(0,' + (-center * speed).toFixed(2) + 'px,0)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ----------------------------------------------------------------
     COUNTERS
     ---------------------------------------------------------------- */
  function initCounters() {
    var counters = $$('[data-count]');
    if (!counters.length) return;
    function animate(node) {
      var target = parseFloat(node.getAttribute('data-count'));
      var prefix = node.getAttribute('data-prefix') || '';
      var suffix = node.getAttribute('data-suffix') || '';
      var decimals = (node.getAttribute('data-decimals') | 0) || 0;
      if (reduceMotion) { node.textContent = prefix + target.toFixed(decimals) + suffix; return; }
      var start = null, dur = 1600;
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        node.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
        if (p < 1) window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }
    if (!('IntersectionObserver' in window)) { counters.forEach(animate); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animate(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { io.observe(c); });
  }

  /* ----------------------------------------------------------------
     ACCORDIONS (rhythm + FAQ)
     ---------------------------------------------------------------- */
  function initAccordions() {
    $$('.accordion').forEach(function (acc) {
      var single = acc.getAttribute('data-single') !== 'false';
      $$('.acc-trigger, .faq-q', acc).forEach(function (btn) {
        btn.addEventListener('click', function () {
          var item = btn.closest('.acc-item, .faq-item');
          var panel = $('.acc-panel, .faq-a', item);
          var open = item.classList.contains('open');
          if (single) {
            $$('.acc-item, .faq-item', acc).forEach(function (it) {
              it.classList.remove('open');
              var p = $('.acc-panel, .faq-a', it);
              if (p) p.style.maxHeight = '0px';
              var b = $('.acc-trigger, .faq-q', it);
              if (b) b.setAttribute('aria-expanded', 'false');
            });
          }
          if (!open) {
            item.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            btn.setAttribute('aria-expanded', 'true');
          }
        });
      });
    });
  }

  /* ----------------------------------------------------------------
     TABS
     ---------------------------------------------------------------- */
  function initTabs() {
    $$('[data-tabs]').forEach(function (group) {
      var tabs = $$('[role="tab"]', group);
      var panels = $$('[role="tabpanel"]', group);
      tabs.forEach(function (tab, i) {
        tab.addEventListener('click', function () { activate(i); });
        tab.addEventListener('keydown', function (e) {
          var idx = i;
          if (e.key === 'ArrowRight') idx = (i + 1) % tabs.length;
          else if (e.key === 'ArrowLeft') idx = (i - 1 + tabs.length) % tabs.length;
          else if (e.key === 'Home') idx = 0;
          else if (e.key === 'End') idx = tabs.length - 1;
          else return;
          e.preventDefault(); tabs[idx].focus(); activate(idx);
        });
      });
      function activate(i) {
        tabs.forEach(function (t, j) {
          var on = i === j;
          t.setAttribute('aria-selected', on ? 'true' : 'false');
          t.tabIndex = on ? 0 : -1;
          panels[j].hidden = !on;
        });
      }
      activate(0);
    });
  }

  /* ----------------------------------------------------------------
     SLIDERS (Swiper)
     ---------------------------------------------------------------- */
  function initSliders() {
    if (typeof window.Swiper === 'undefined') return;
    $$('.ra-swiper').forEach(function (node) {
      var next = node.parentNode.querySelector('.swiper-next');
      var prev = node.parentNode.querySelector('.swiper-prev');
      var pag = node.parentNode.querySelector('.swiper-pagination');
      new window.Swiper(node, {
        slidesPerView: 1.1,
        spaceBetween: 20,
        grabCursor: true,
        navigation: (next && prev) ? { nextEl: next, prevEl: prev } : undefined,
        pagination: pag ? { el: pag, clickable: true } : undefined,
        breakpoints: {
          640: { slidesPerView: 1.6, spaceBetween: 22 },
          900: { slidesPerView: 2.4, spaceBetween: 24 },
          1200: { slidesPerView: 3.2, spaceBetween: 26 }
        }
      });
    });
  }

  /* ----------------------------------------------------------------
     VIDEO SLIDERS (Swiper)
     ---------------------------------------------------------------- */
  function initVideoSliders() {
    if (typeof window.Swiper === 'undefined') return;
    $$('.ra-video-swiper').forEach(function (node) {
      if (node.swiper) return;
      var next = node.parentNode.querySelector('.swiper-next');
      var prev = node.parentNode.querySelector('.swiper-prev');
      var pag = node.parentNode.querySelector('.swiper-pagination');
      new window.Swiper(node, {
        slidesPerView: 1.1,
        spaceBetween: 20,
        grabCursor: true,
        watchOverflow: true,
        navigation: (next && prev) ? { nextEl: next, prevEl: prev } : undefined,
        pagination: pag ? { el: pag, clickable: true } : undefined,
        breakpoints: {
          640: { slidesPerView: 1.5, spaceBetween: 22 },
          900: { slidesPerView: 2.2, spaceBetween: 24 },
          1200: { slidesPerView: 3, spaceBetween: 26 }
        }
      });
    });
  }

  /* ----------------------------------------------------------------
     VIDEO LIGHTBOX
     ---------------------------------------------------------------- */
  function initVideoLightbox() {
    var modal = el('div', 'video-modal');
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML =
      '<div class="vm-backdrop" data-video-close></div>' +
      '<div class="vm-dialog" role="dialog" aria-modal="true" aria-label="Video player">' +
        '<button class="vm-close" type="button" data-video-close aria-label="Close video">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
        '</button>' +
        '<div class="vm-player">' +
          '<video class="vm-video" controls playsinline preload="none"></video>' +
        '</div>' +
        '<p class="vm-caption" data-video-caption></p>' +
      '</div>';
    doc.body.appendChild(modal);

    var video = $('.vm-video', modal);
    var caption = $('[data-video-caption]', modal);
    var lastTrigger = null;

    function open(trigger) {
      var mp4 = trigger.getAttribute('data-video');
      var webm = trigger.getAttribute('data-video-webm');
      var poster = trigger.getAttribute('data-video-poster') || '';
      var title = trigger.getAttribute('data-video-title') || '';
      if (!mp4) return;
      var sources = '';
      if (webm) sources += '<source src="' + webm + '" type="video/webm">';
      sources += '<source src="' + mp4 + '" type="video/mp4">';
      video.innerHTML = sources;
      if (poster) video.setAttribute('poster', poster); else video.removeAttribute('poster');
      if (title) { caption.innerHTML = '<strong>' + title + '</strong>'; caption.style.display = ''; }
      else { caption.innerHTML = ''; caption.style.display = 'none'; }
      lastTrigger = trigger;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      doc.body.classList.add('no-scroll');
      video.load();
      var p = video.play();
      if (p && typeof p.catch === 'function') p.catch(function () {});
      window.setTimeout(function () { var c = $('.vm-close', modal); if (c) c.focus(); }, 60);
    }

    function close() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      doc.body.classList.remove('no-scroll');
      try { video.pause(); } catch (e) {}
      video.innerHTML = '';
      video.removeAttribute('src');
      try { video.load(); } catch (e) {}
      if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
    }

    doc.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-video]');
      if (trigger) { e.preventDefault(); open(trigger); return; }
      if (e.target.closest('[data-video-close]')) { e.preventDefault(); close(); }
    });

    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) close();
    });
  }

  /* ----------------------------------------------------------------
     TILT + SPOTLIGHT
     ---------------------------------------------------------------- */
  function initTilt() {
    if (isTouch || reduceMotion) return;
    $$('.tilt').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', (px * 100) + '%');
        card.style.setProperty('--my', (py * 100) + '%');
        card.style.transform = 'perspective(900px) rotateX(' + ((0.5 - py) * 6).toFixed(2) + 'deg) rotateY(' + ((px - 0.5) * 6).toFixed(2) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () { card.style.transform = ''; });
    });
  }

  /* ----------------------------------------------------------------
     MARQUEE — duplicate content for seamless loop
     ---------------------------------------------------------------- */
  function initMarquee() {
    $$('.marquee-track').forEach(function (track) {
      if (track.getAttribute('data-cloned')) return;
      track.innerHTML = track.innerHTML + track.innerHTML;
      track.setAttribute('data-cloned', '1');
    });
  }

  /* ----------------------------------------------------------------
     FORMS
     ---------------------------------------------------------------- */
  function initForms() {
    $$('form[data-ra-form]').forEach(function (form) {
      var fields = $$('.field', form);
      fields.forEach(function (f) {
        var input = $('input, select, textarea', f);
        if (!input) return;
        if (input.value) f.classList.add('filled');
        input.addEventListener('input', function () { f.classList.add('filled'); if (f.classList.contains('invalid')) validateField(f); });
        input.addEventListener('change', function () { f.classList.add('filled'); });
        input.addEventListener('blur', function () { validateField(f); });
      });
      function validateField(f) {
        var input = $('input, select, textarea', f);
        if (!input || !input.required) return true;
        var val = (input.value || '').trim();
        var ok = val.length > 0;
        if (ok && input.type === 'email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        if (ok && input.type === 'tel') ok = val.replace(/[^\d]/g, '').length >= 7;
        f.classList.toggle('invalid', !ok);
        input.setAttribute('aria-invalid', ok ? 'false' : 'true');
        return ok;
      }
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var valid = true, firstBad = null;
        fields.forEach(function (f) {
          var input = $('input, select, textarea', f);
          if (input && input.required && !validateField(f)) { valid = false; if (!firstBad) firstBad = input; }
        });
        if (!valid) { if (firstBad) firstBad.focus(); return; }
        var success = form.parentNode.querySelector('.form-success') || $('.form-success', form.parentNode);
        form.style.display = 'none';
        if (success) {
          success.classList.add('show');
          success.setAttribute('role', 'status');
          success.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
        }
      });
    });
  }

  /* ----------------------------------------------------------------
     PAGE TRANSITIONS
     ---------------------------------------------------------------- */
  function initTransitions() {
    if (reduceMotion) return;
    var curtain = $('#pageCurtain');
    if (!curtain) return;
    // reveal in
    window.addEventListener('pageshow', function () { curtain.classList.remove('enter'); curtain.classList.add('exit'); });
    $$('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || href.charAt(0) === '#' || a.target === '_blank' || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0 || href.indexOf('http') === 0) return;
      if (href.indexOf('#') > -1 && isCurrent(href)) return;
      a.addEventListener('click', function (e) {
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        curtain.classList.add('enter');
        window.setTimeout(function () { window.location.href = href; }, 480);
      });
    });
  }

  /* ----------------------------------------------------------------
     HEADER LOGO SWAP (light/dark) — pages can set data-header-logo
     ---------------------------------------------------------------- */
  function initLogoSwap() {
    var light = 'img/revalpha-logo-light.svg';
    var dark = 'img/revalpha-logo-dark.svg';
    $$('[data-logo]').forEach(function (img) {
      img.src = img.getAttribute('data-logo') === 'dark' ? dark : light;
    });
  }

  /* ----------------------------------------------------------------
     BOOT
     ---------------------------------------------------------------- */
  function boot() {
    // Inject shared chrome
    var headerSlot = $('#site-header-slot');
    var footerSlot = $('#site-footer-slot');
    if (headerSlot) headerSlot.outerHTML = buildHeader();
    if (footerSlot) footerSlot.outerHTML = buildFooter();
    buildChrome();

    initLogoSwap();
    initHeader();
    initMobileMenu();
    initCursor();
    initProgress();
    initMarquee();
    initAccordions();
    initTabs();
    initCounters();
    initTilt();
    initForms();
    initSliders();
    initVideoSliders();
    initVideoLightbox();
    initParallax();
    initSplit();
    initReveals();
    initLenis();
    initTransitions();
    runLoader();

    // GSAP ScrollTrigger refresh after layout settles
    if (window.ScrollTrigger) {
      window.setTimeout(function () { window.ScrollTrigger.refresh(); }, 600);
    }
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
