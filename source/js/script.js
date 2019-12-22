'use strict';

(function () {
  var pageHeader = document.querySelector('.page-header');
  var headerToggle = pageHeader.querySelector('.js-menu-toggle');
  var abrauDursoInfoToggle = document.querySelector('.js-abrau-durso-button');
  var modalCloseButton = document.querySelector('.modal__close');
  var modal = document.querySelector('.modal');
  var blackout = document.querySelector('.blackout');
  var bodyGlobal = document.querySelector('body');

  var addBlackout = function () {
    bodyGlobal.style.overflow = 'hidden';
    bodyGlobal.style.touchAction = 'none';
  };

  var removeBlackout = function () {
    bodyGlobal.style.overflow = '';
    bodyGlobal.style.touchAction = '';
  };

  var openModal = function () {
    modal.classList.add('modal--visible');
    blackout.classList.remove('blackout--none');

    addBlackout();
  };

  var closeModal = function () {
    modal.classList.remove('modal--visible');
    blackout.classList.add('blackout--none');

    removeBlackout();
  };

  var closeModalWithEsc = function () {
    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modal.classList.contains('modal--visible')) {
          closeModal();
        }
      }
    });
  };

  headerToggle.addEventListener('click', function () {
    pageHeader.classList.toggle('page-header--menu-closed');
  });

  abrauDursoInfoToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('page-header--menu-closed')) {
      openModal();
    } else {
      pageHeader.classList.add('page-header--menu-closed');
      openModal();
    }
  });

  modalCloseButton.addEventListener('click', function () {
    closeModal();
  });

  blackout.addEventListener('click', function () {
    closeModal();
  });

  closeModalWithEsc();
})();
