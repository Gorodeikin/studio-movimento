(function () {
  'use strict';

  function initMobileMenu() {
    var menu = document.querySelector('[data-menu]');
    if (!menu || typeof menu.open === 'undefined') return;

    var toggle = menu.querySelector('[data-menu-toggle]');
    var panel = menu.querySelector('[data-menu-panel]');
    if (!toggle || !panel || !panel.id) return;

    var desktopQuery = window.matchMedia('(min-width: 48em)');

    toggle.setAttribute('aria-controls', panel.id);

    function isMobile() {
      return !desktopQuery.matches;
    }

    function syncState() {
      var isOpen = menu.open;
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('is-menu-open', isOpen && isMobile());
    }

    function closeMenu() {
      if (menu.open) menu.open = false;
    }

    function getFocusable() {
      var elements = [toggle].concat(
        Array.prototype.slice.call(panel.querySelectorAll('a[href], button:not([disabled])'))
      );
      return elements.filter(function (el) {
        return el.offsetParent !== null;
      });
    }

    menu.addEventListener('toggle', syncState);

    panel.addEventListener('click', function (event) {
      var link = event.target.closest('a');
      if (!link || !isMobile()) return;
      closeMenu();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape' || !menu.open || !isMobile()) return;
      closeMenu();
      toggle.focus();
    });

    menu.addEventListener('keydown', function (event) {
      if (event.key !== 'Tab' || !menu.open || !isMobile()) return;
      var focusable = getFocusable();
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    /* Browsers never paint a closed details' non-summary content, so
       the desktop-persistent nav needs details.open genuinely true —
       CSS alone cannot force it. Below 768px the native open/closed
       state is left to the user via the summary toggle. */
    function applyViewportState() {
      if (desktopQuery.matches) {
        document.body.classList.remove('is-menu-open');
        if (!menu.open) menu.open = true;
      } else if (menu.open) {
        menu.open = false;
      }
    }

    if (typeof desktopQuery.addEventListener === 'function') {
      desktopQuery.addEventListener('change', applyViewportState);
    }

    applyViewportState();
    syncState();
  }

  function initFaqAccordion() {
    var list = document.querySelector('[data-faq-list]');
    if (!list) return;

    var items = Array.prototype.slice.call(list.querySelectorAll('[data-faq-item]'));
    if (!items.length) return;

    items.forEach(function (item, index) {
      var question = item.querySelector('[data-faq-question]');
      var answer = item.querySelector('[data-faq-answer]');
      if (!question || !answer) return;

      var answerId = 'faq-answer-' + (index + 1);
      answer.id = answerId;

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'faq-item__button';
      button.textContent = question.textContent.trim();
      button.setAttribute('aria-controls', answerId);

      var icon = document.createElement('span');
      icon.className = 'faq-item__icon';
      icon.setAttribute('aria-hidden', 'true');
      button.appendChild(icon);

      question.textContent = '';
      question.appendChild(button);

      var isFirst = index === 0;
      button.setAttribute('aria-expanded', String(isFirst));
      if (isFirst) {
        answer.removeAttribute('hidden');
      } else {
        answer.setAttribute('hidden', '');
      }

      button.addEventListener('click', function () {
        var expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!expanded));
        if (expanded) {
          answer.setAttribute('hidden', '');
        } else {
          answer.removeAttribute('hidden');
        }
      });
    });

    list.classList.add('faq--enhanced');
  }

  initMobileMenu();
  initFaqAccordion();
})();
