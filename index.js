(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "core-js/modules/es6.object.keys", "core-js/modules/es6.date.now", "core-js/modules/es6.number.is-nan", "core-js/modules/es6.number.constructor", "core-js/modules/es7.symbol.async-iterator", "core-js/modules/es6.symbol", "core-js/modules/es7.object.values", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.starts-with", "core-js/modules/es7.array.includes", "regenerator-runtime/runtime", "core-js/modules/es6.promise", "core-js/modules/es6.object.create", "core-js/modules/es6.map", "core-js/modules/es6.function.bind", "core-js/modules/es6.reflect.construct", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.date.to-string", "core-js/modules/es6.array.index-of", "core-js/modules/es6.object.set-prototype-of", "core-js/modules/es6.string.iterator", "core-js/modules/es6.set", "core-js/modules/es6.object.assign", "core-js/modules/es6.reflect.has", "core-js/modules/web.dom.iterable", "core-js/modules/es6.array.iterator", "core-js/modules/es7.object.entries", "core-js/modules/es6.array.is-array"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("core-js/modules/es6.object.keys"), require("core-js/modules/es6.date.now"), require("core-js/modules/es6.number.is-nan"), require("core-js/modules/es6.number.constructor"), require("core-js/modules/es7.symbol.async-iterator"), require("core-js/modules/es6.symbol"), require("core-js/modules/es7.object.values"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.starts-with"), require("core-js/modules/es7.array.includes"), require("regenerator-runtime/runtime"), require("core-js/modules/es6.promise"), require("core-js/modules/es6.object.create"), require("core-js/modules/es6.map"), require("core-js/modules/es6.function.bind"), require("core-js/modules/es6.reflect.construct"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.date.to-string"), require("core-js/modules/es6.array.index-of"), require("core-js/modules/es6.object.set-prototype-of"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/es6.set"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.reflect.has"), require("core-js/modules/web.dom.iterable"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es7.object.entries"), require("core-js/modules/es6.array.is-array"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.es6Object, global.es6Date, global.es6Number, global.es6Number, global.es7Symbol, global.es6, global.es7Object, global.es6String, global.es6String, global.es7Array, global.runtime, global.es6, global.es6Object, global.es6, global.es6Function, global.es6Reflect, global.es6Regexp, global.es6Date, global.es6Array, global.es6Object, global.es6String, global.es6, global.es6Object, global.es6Reflect, global.webDom, global.es6Array, global.es7Object, global.es6Array);
    global.indexOriginal = mod.exports;
  }
})(this, function (_exports, _es6Object, _es6Date, _es6Number, _es6Number2, _es7Symbol, _es, _es7Object, _es6String, _es6String2, _es7Array, _runtime, _es2, _es6Object2, _es3, _es6Function, _es6Reflect, _es6Regexp, _es6Date2, _es6Array, _es6Object3, _es6String3, _es4, _es6Object4, _es6Reflect2, _webDom, _es6Array2, _es7Object2, _es6Array3) {
  "use strict";

  _exports.__esModule = true;
  _exports.TimeoutError = _exports.HTTPError = _exports.default = void 0;

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  /*! MIT License © Sindre Sorhus */
  var getGlobal = function getGlobal(property) {
    /* istanbul ignore next */
    if (typeof self !== 'undefined' && self && property in self) {
      return self[property];
    }
    /* istanbul ignore next */


    if (typeof window !== 'undefined' && window && property in window) {
      return window[property];
    }

    return global[property];
  };

  var document = getGlobal('document');
  var Headers = getGlobal('Headers');
  var Response = getGlobal('Response');
  var fetch = getGlobal('fetch');

  var isObject = function isObject(value) {
    return value !== null && typeof value === 'object';
  };

  var deepMerge = function deepMerge() {
    var returnValue = {};

    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }

    for (var _i = 0; _i < sources.length; _i++) {
      var source = sources[_i];

      if (Array.isArray(source)) {
        if (!Array.isArray(returnValue)) {
          returnValue = [];
        }

        returnValue = [].concat(returnValue, source);
      } else if (isObject(source)) {
        var _arr = Object.entries(source);

        for (var _i2 = 0; _i2 < _arr.length; _i2++) {
          var _Object$assign;

          var _arr$_i = _arr[_i2],
              key = _arr$_i[0],
              value = _arr$_i[1];

          if (isObject(value) && Reflect.has(returnValue, key)) {
            value = deepMerge(returnValue[key], value);
          }

          returnValue = Object.assign({}, returnValue, (_Object$assign = {}, _Object$assign[key] = value, _Object$assign));
        }
      }
    }

    return returnValue;
  };

  var requestMethods = ['get', 'post', 'put', 'patch', 'head', 'delete'];
  var responseTypes = ['json', 'text', 'formData', 'arrayBuffer', 'blob'];
  var retryMethods = new Set(['get', 'put', 'head', 'delete', 'options', 'trace']);
  var retryStatusCodes = new Set([408, 413, 429, 500, 502, 503, 504]);
  var retryAfterStatusCodes = new Set([413, 429, 503]);

  var HTTPError =
  /*#__PURE__*/
  function (_Error) {
    _inheritsLoose(HTTPError, _Error);

    function HTTPError(response) {
      var _this;

      _this = _Error.call(this, response.statusText) || this;
      _this.name = 'HTTPError';
      _this.response = response;
      return _this;
    }

    return HTTPError;
  }(_wrapNativeSuper(Error));

  _exports.HTTPError = HTTPError;

  var TimeoutError =
  /*#__PURE__*/
  function (_Error2) {
    _inheritsLoose(TimeoutError, _Error2);

    function TimeoutError() {
      var _this2;

      _this2 = _Error2.call(this, 'Request timed out') || this;
      _this2.name = 'TimeoutError';
      return _this2;
    }

    return TimeoutError;
  }(_wrapNativeSuper(Error));

  _exports.TimeoutError = TimeoutError;

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  var timeout = function timeout(promise, ms) {
    return Promise.race([promise, _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return delay(ms);

            case 2:
              throw new TimeoutError();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }))()]);
  };

  var normalizeRequestMethod = function normalizeRequestMethod(input) {
    return requestMethods.includes(input) ? input.toUpperCase() : input;
  };

  var Ky =
  /*#__PURE__*/
  function () {
    function Ky(input, _ref2) {
      var _this3 = this;

      var _ref2$timeout = _ref2.timeout,
          timeout = _ref2$timeout === void 0 ? 10000 : _ref2$timeout,
          hooks = _ref2.hooks,
          _ref2$throwHttpErrors = _ref2.throwHttpErrors,
          throwHttpErrors = _ref2$throwHttpErrors === void 0 ? true : _ref2$throwHttpErrors,
          searchParams = _ref2.searchParams,
          json = _ref2.json,
          otherOptions = _objectWithoutPropertiesLoose(_ref2, ["timeout", "hooks", "throwHttpErrors", "searchParams", "json"]);

      this._retryCount = 0;
      this._options = Object.assign({
        method: 'get',
        credentials: 'same-origin',
        // TODO: This can be removed when the spec change is implemented in all browsers. Context: https://www.chromestatus.com/feature/4539473312350208
        retry: 2
      }, otherOptions);
      this._options.method = normalizeRequestMethod(this._options.method);
      this._options.prefixUrl = String(this._options.prefixUrl || '');
      this._input = String(input || '');

      if (this._options.prefixUrl && this._input.startsWith('/')) {
        throw new Error('`input` must not begin with a slash when using `prefixUrl`');
      }

      if (this._options.prefixUrl && !this._options.prefixUrl.endsWith('/')) {
        this._options.prefixUrl += '/';
      }

      this._input = this._options.prefixUrl + this._input;

      if (searchParams) {
        var url = new URL(this._input, document && document.baseURI);

        if (typeof searchParams === 'string' || URLSearchParams && searchParams instanceof URLSearchParams) {
          url.search = searchParams;
        } else if (Object.values(searchParams).every(function (param) {
          return typeof param === 'number' || typeof param === 'string';
        })) {
          url.search = new URLSearchParams(searchParams).toString();
        } else {
          throw new Error('The `searchParams` option must be either a string, `URLSearchParams` instance or an object with string and number values');
        }

        this._input = url.toString();
      }

      this._timeout = timeout;
      this._hooks = deepMerge({
        beforeRequest: [],
        afterResponse: []
      }, hooks);
      this._throwHttpErrors = throwHttpErrors;
      var headers = new Headers(this._options.headers || {});

      if (json) {
        headers.set('content-type', 'application/json');
        this._options.body = JSON.stringify(json);
      }

      this._options.headers = headers;
      this._response = this._fetch();

      var _loop = function _loop() {
        var type = responseTypes[_i3];
        var isRetriableMethod = retryMethods.has(_this3._options.method.toLowerCase());

        var fn =
        /*#__PURE__*/
        function () {
          var _ref3 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var response, _iterator, _isArray, _i4, _ref4, hook, modifiedResponse;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (_this3._retryCount > 0) {
                      _this3._response = _this3._fetch();
                    }

                    _context2.next = 3;
                    return _this3._response;

                  case 3:
                    response = _context2.sent;
                    _iterator = _this3._hooks.afterResponse, _isArray = Array.isArray(_iterator), _i4 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();

                  case 5:
                    if (!_isArray) {
                      _context2.next = 11;
                      break;
                    }

                    if (!(_i4 >= _iterator.length)) {
                      _context2.next = 8;
                      break;
                    }

                    return _context2.abrupt("break", 22);

                  case 8:
                    _ref4 = _iterator[_i4++];
                    _context2.next = 15;
                    break;

                  case 11:
                    _i4 = _iterator.next();

                    if (!_i4.done) {
                      _context2.next = 14;
                      break;
                    }

                    return _context2.abrupt("break", 22);

                  case 14:
                    _ref4 = _i4.value;

                  case 15:
                    hook = _ref4;
                    _context2.next = 18;
                    return hook(response.clone());

                  case 18:
                    modifiedResponse = _context2.sent;

                    if (modifiedResponse instanceof Response) {
                      response = modifiedResponse;
                    }

                  case 20:
                    _context2.next = 5;
                    break;

                  case 22:
                    if (!(!response.ok && (isRetriableMethod || _this3._throwHttpErrors))) {
                      _context2.next = 24;
                      break;
                    }

                    throw new HTTPError(response);

                  case 24:
                    return _context2.abrupt("return", response.clone()[type]());

                  case 25:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          return function fn() {
            return _ref3.apply(this, arguments);
          };
        }();

        _this3._response[type] = isRetriableMethod ? _this3._retry(fn) : fn;
      };

      for (var _i3 = 0; _i3 < responseTypes.length; _i3++) {
        _loop();
      }

      return this._response;
    }

    var _proto = Ky.prototype;

    _proto._calculateRetryDelay = function _calculateRetryDelay(error) {
      this._retryCount++;

      if (this._retryCount < this._options.retry && !(error instanceof TimeoutError)) {
        if (error instanceof HTTPError) {
          if (!retryStatusCodes.has(error.response.status)) {
            return 0;
          }

          var retryAfter = error.response.headers.get('Retry-After');

          if (retryAfter && retryAfterStatusCodes.has(error.response.status)) {
            var after = Number(retryAfter);

            if (Number.isNaN(after)) {
              after = Date.parse(retryAfter) - Date.now();
            } else {
              after *= 1000;
            }

            return after;
          }

          if (error.response.status === 413) {
            return 0;
          }
        }

        var BACKOFF_FACTOR = 0.3;
        return BACKOFF_FACTOR * Math.pow(2, this._retryCount - 1) * 1000;
      }

      return 0;
    };

    _proto._retry = function _retry(fn) {
      var _this4 = this;

      var retry =
      /*#__PURE__*/
      function () {
        var _ref5 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          var ms;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return fn();

                case 3:
                  return _context3.abrupt("return", _context3.sent);

                case 6:
                  _context3.prev = 6;
                  _context3.t0 = _context3["catch"](0);
                  ms = _this4._calculateRetryDelay(_context3.t0);

                  if (!(ms !== 0)) {
                    _context3.next = 13;
                    break;
                  }

                  _context3.next = 12;
                  return delay(ms);

                case 12:
                  return _context3.abrupt("return", retry());

                case 13:
                  if (!_this4._throwHttpErrors) {
                    _context3.next = 15;
                    break;
                  }

                  throw _context3.t0;

                case 15:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[0, 6]]);
        }));

        return function retry() {
          return _ref5.apply(this, arguments);
        };
      }();

      return retry;
    };

    _proto._fetch =
    /*#__PURE__*/
    function () {
      var _fetch2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var _iterator2, _isArray2, _i5, _ref6, hook;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _iterator2 = this._hooks.beforeRequest, _isArray2 = Array.isArray(_iterator2), _i5 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();

              case 1:
                if (!_isArray2) {
                  _context4.next = 7;
                  break;
                }

                if (!(_i5 >= _iterator2.length)) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("break", 16);

              case 4:
                _ref6 = _iterator2[_i5++];
                _context4.next = 11;
                break;

              case 7:
                _i5 = _iterator2.next();

                if (!_i5.done) {
                  _context4.next = 10;
                  break;
                }

                return _context4.abrupt("break", 16);

              case 10:
                _ref6 = _i5.value;

              case 11:
                hook = _ref6;
                _context4.next = 14;
                return hook(this._options);

              case 14:
                _context4.next = 1;
                break;

              case 16:
                return _context4.abrupt("return", timeout(fetch(this._input, this._options), this._timeout));

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _fetch() {
        return _fetch2.apply(this, arguments);
      }

      return _fetch;
    }();

    return Ky;
  }();

  var createInstance = function createInstance(defaults) {
    if (defaults === void 0) {
      defaults = {};
    }

    if (!isObject(defaults) || Array.isArray(defaults)) {
      throw new TypeError('The `defaultOptions` argument must be an object');
    }

    var ky = function ky(input, options) {
      return new Ky(input, deepMerge({}, defaults, options));
    };

    var _loop2 = function _loop2() {
      var method = requestMethods[_i6];

      ky[method] = function (input, options) {
        return new Ky(input, deepMerge({}, defaults, options, {
          method: method
        }));
      };
    };

    for (var _i6 = 0; _i6 < requestMethods.length; _i6++) {
      _loop2();
    }

    ky.extend = function (defaults) {
      return createInstance(defaults);
    };

    return ky;
  };

  var _default = createInstance();

  _exports.default = _default;
});
