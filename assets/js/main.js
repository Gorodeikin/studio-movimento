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

  function initContactForm() {
    var form = document.querySelector('[data-contact-form]');
    if (!form) return;

    var submitButton = form.querySelector('[data-form-submit]');
    var status = form.querySelector('[data-form-status]');
    var methodRadios = Array.prototype.slice.call(form.querySelectorAll('[data-contact-method]'));
    var emailGroup = form.querySelector('[data-contact-field="email"]');
    var phoneGroup = form.querySelector('[data-contact-field="phone"]');
    var nameInput = form.querySelector('[data-contact-input="name"]');
    var emailInput = form.querySelector('[data-contact-input="email"]');
    var phoneInput = form.querySelector('[data-contact-input="phone"]');
    var privacyInput = document.getElementById('contact-privacy-consent');
    var preferenceFieldset = methodRadios.length ? methodRadios[0].closest('fieldset') : null;

    if (
      !submitButton || !status || methodRadios.length !== 2 || !emailGroup || !phoneGroup ||
      !nameInput || !emailInput || !phoneInput || !privacyInput || !preferenceFieldset
    ) {
      return;
    }

    var FIELD_ORDER = ['name', 'preference', 'email', 'phone', 'privacy'];
    var originalButtonText = submitButton.textContent;
    var isLoading = false;
    var attemptedSubmit = false;

    var fields = {
      name: {
        control: nameInput,
        invalidTarget: nameInput,
        errorId: 'contact-name-error',
        validate: function () {
          return nameInput.value.trim().length >= 2 ? null : 'Inserisci il tuo nome.';
        }
      },
      preference: {
        control: methodRadios[0],
        invalidTarget: preferenceFieldset,
        errorId: 'contact-preference-error',
        validate: function () {
          var checked = methodRadios.some(function (radio) { return radio.checked; });
          return checked ? null : 'Seleziona come preferisci essere contattato.';
        }
      },
      email: {
        control: emailInput,
        invalidTarget: emailInput,
        errorId: 'contact-email-error',
        validate: function () {
          if (emailInput.disabled) return null;
          var value = emailInput.value.trim();
          return (value && !emailInput.validity.typeMismatch) ? null : 'Inserisci un indirizzo email valido.';
        }
      },
      phone: {
        control: phoneInput,
        invalidTarget: phoneInput,
        errorId: 'contact-phone-error',
        validate: function () {
          if (phoneInput.disabled) return null;
          var value = phoneInput.value.trim();
          var allowedCharacters = /^[0-9+\s()-]+$/;
          var digits = value.replace(/\D/g, '');
          return (
            allowedCharacters.test(value) &&
            digits.length >= 7 &&
            digits.length <= 15
          )
            ? null
            : 'Inserisci un numero di telefono valido.';
        }
      },
      privacy: {
        control: privacyInput,
        invalidTarget: privacyInput,
        errorId: 'contact-privacy-error',
        validate: function () {
          return privacyInput.checked ? null : 'Devi accettare l’informativa sulla privacy per continuare.';
        }
      }
    };

    function showFieldError(key, message) {
      var field = fields[key];
      var errorEl = document.getElementById(field.errorId);
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.hidden = false;
      }
      field.invalidTarget.setAttribute('aria-invalid', 'true');
      var wrapper = field.invalidTarget.closest('.form-field');
      if (wrapper) wrapper.classList.add('form-field--invalid');
    }

    function clearFieldError(key) {
      var field = fields[key];
      var errorEl = document.getElementById(field.errorId);
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.hidden = true;
      }
      field.invalidTarget.removeAttribute('aria-invalid');
      var wrapper = field.invalidTarget.closest('.form-field');
      if (wrapper) wrapper.classList.remove('form-field--invalid');
      maybeClearGeneralErrorStatus();
    }

    function validateField(key) {
      var message = fields[key].validate();
      if (message) {
        showFieldError(key, message);
        return false;
      }
      clearFieldError(key);
      return true;
    }

    function validateForm() {
      var invalidKeys = [];
      FIELD_ORDER.forEach(function (key) {
        if (!validateField(key)) invalidKeys.push(key);
      });
      return invalidKeys;
    }

    function focusFirstInvalid(invalidKeys) {
      var firstKey = FIELD_ORDER.filter(function (key) {
        return invalidKeys.indexOf(key) !== -1;
      })[0];
      if (!firstKey) return;
      fields[firstKey].control.focus();
    }

    function showFormStatus(type, message) {
      status.textContent = message;
      status.hidden = false;
      status.classList.remove('contact-form__status--success', 'contact-form__status--error');
      status.classList.add('contact-form__status--' + type);
    }

    function clearFormStatus() {
      status.textContent = '';
      status.hidden = true;
      status.classList.remove('contact-form__status--success', 'contact-form__status--error');
    }

    function maybeClearGeneralErrorStatus() {
      if (!status.classList.contains('contact-form__status--error')) return;
      var stillInvalid = form.querySelector('.form-field--invalid');
      if (!stillInvalid) clearFormStatus();
    }

    function setLoadingState(loading) {
      isLoading = loading;
      form.classList.toggle('contact-form--loading', loading);
      submitButton.disabled = loading;
      if (loading) {
        submitButton.setAttribute('aria-disabled', 'true');
        submitButton.textContent = 'Invio in corso…';
      } else {
        submitButton.removeAttribute('aria-disabled');
        submitButton.textContent = originalButtonText;
      }
    }

    function setContactMethod(method) {
      var showEmail = method === 'email';
      var showPhone = method === 'telefono';

      emailGroup.hidden = !showEmail;
      emailInput.disabled = !showEmail;
      emailInput.required = showEmail;

      phoneGroup.hidden = !showPhone;
      phoneInput.disabled = !showPhone;
      phoneInput.required = showPhone;

      if (!showEmail) clearFieldError('email');
      if (!showPhone) clearFieldError('phone');
    }

    function resetEnhancedForm() {
      form.reset();
      setContactMethod(null);
      FIELD_ORDER.forEach(clearFieldError);
      attemptedSubmit = false;
    }

    function handleSubmit(event) {
      event.preventDefault();
      if (isLoading) return;
      attemptedSubmit = true;
      clearFormStatus();

      var invalidKeys = validateForm();

      if (invalidKeys.length) {
        showFormStatus('error', 'Controlla i campi indicati prima di continuare.');
        focusFirstInvalid(invalidKeys);
        return;
      }

      setLoadingState(true);

      window.setTimeout(function () {
        try {
          setLoadingState(false);
          resetEnhancedForm();
          showFormStatus('success', 'Richiesta dimostrativa completata. Nessun dato è stato inviato o salvato.');
          status.focus();
        } catch (error) {
          console.error(error);
          setLoadingState(false);
          showFormStatus('error', 'Non è stato possibile completare la dimostrazione. Riprova.');
        }
      }, 700);
    }

    function maybeClearSuccessStatus() {
      if (status.classList.contains('contact-form__status--success')) {
        clearFormStatus();
      }
    }

    methodRadios.forEach(function (radio) {
      radio.addEventListener('change', function () {
        setContactMethod(radio.value);
        clearFieldError('preference');
      });
    });

    [nameInput, emailInput, phoneInput].forEach(function (input) {
      var key = input === nameInput ? 'name' : (input === emailInput ? 'email' : 'phone');
      input.addEventListener('input', function () {
        if (!attemptedSubmit) return;
        if (!fields[key].validate()) clearFieldError(key);
      });
    });

    privacyInput.addEventListener('change', function () {
      clearFieldError('privacy');
    });

    form.addEventListener('input', maybeClearSuccessStatus);
    form.addEventListener('change', maybeClearSuccessStatus);
    form.addEventListener('submit', handleSubmit);

    setContactMethod(null);
    form.noValidate = true;
    submitButton.type = 'submit';
    form.classList.add('contact-form--enhanced');
  }

  initMobileMenu();
  initFaqAccordion();
  initContactForm();
})();
