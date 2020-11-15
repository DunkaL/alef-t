"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  }); // --

  document.querySelector('#hamburger').addEventListener('click', function () {
    document.querySelector('#hamburger').classList.toggle('menu-active');
    document.querySelector('.nav').classList.toggle('nav--active');
  }); // --
  // --

  var anchors = document.querySelectorAll('a.scroll-to');

  var _iterator = _createForOfIteratorHelper(anchors),
      _step;

  try {
    var _loop = function _loop() {
      var anchor = _step.value;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= 100) {
      document.querySelector('.scroll-to').classList.add('active');
    } else {
      document.querySelector('.scroll-to').classList.remove('active');
    }
  }); // --
  // --

  function notification($class, text) {
    document.querySelector(".notification-".concat($class)).innerHTML = text;
    document.querySelector(".notification-".concat($class)).classList.add('notification--active');
    setTimeout(function () {
      document.querySelector(".notification-".concat($class)).classList.remove('notification--active');
    }, 1000);
  }

  function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }

  document.querySelector('.form-validate button').addEventListener('click', function () {
    var email = document.querySelector('.form-validate input[type="email"]').value;

    if (email !== '') {
      if (validateEmail(email)) {
        notification('correctly', "отправлено");
      } else {
        notification('error', email + " не подходит");
      }
    } else {
      notification('error', 'заполните поле ввода');
    }
  }); // --
  // --

  var nodeList = document.querySelectorAll('.products-block'),
      itemsArraySort = [],
      parent = nodeList[0].parentNode;

  function sort(dateid, log) {
    if (log) {
      for (var i = 0; i < nodeList.length; i++) {
        itemsArraySort.push(parent.removeChild(nodeList[i]));
      }

      itemsArraySort.sort(function (nodeA, nodeB) {
        var textA = nodeA.querySelector(":nth-child(2) .products-card__info-".concat(dateid)).getAttribute('data-sort');
        var textB = nodeB.querySelector(":nth-child(2) .products-card__info-".concat(dateid)).getAttribute('data-sort');
        var numberA = parseInt(textA);
        var numberB = parseInt(textB);
        if (numberA < numberB) return -1;
        if (numberA > numberB) return 1;
        return 0;
      }).forEach(function (node) {
        parent.appendChild(node);
      });
    } else {
      itemsArraySort = [];
      nodeList.forEach(function (node) {
        parent.appendChild(node);
      });
    }

    document.querySelectorAll('.filter-dropdown').forEach(function (e) {
      e.classList.remove('active');
    });
  }

  document.querySelector('#filter-price').addEventListener('click', function () {
    if (!document.querySelector('#filter-price').classList.contains('active')) {
      sort('price', true);
      document.querySelector('#filter-price').classList.add('active');
    } else {
      sort('price', false);
    }
  });
  document.querySelector('#filter-age').addEventListener('click', function () {
    if (!document.querySelector('#filter-age').classList.contains('active')) {
      sort('age', true);
      document.querySelector('#filter-age').classList.add('active');
    } else {
      sort('age', false);
    }
  }); // --
  // --

  var favorites = document.querySelectorAll('.heart-js');
  favorites.forEach(function (e) {
    e.addEventListener('click', function () {
      if (!e.classList.contains('active')) {
        e.classList.add('active');
        notification('correctly', "добавлено в избранное");
      } else {
        e.classList.remove('active');
        notification('correctly', "удалено из избранного");
      }
    });
  }); // --
});