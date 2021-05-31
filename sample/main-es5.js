function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      pathMatch: 'full',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-auth-auth-module */
        "modules-auth-auth-module").then(__webpack_require__.bind(null,
        /*! ./modules/auth/auth.module */
        "./src/app/modules/auth/auth.module.ts")).then(function (m) {
          return m.AuthModule;
        });
      },
      data: {
        title: 'Login'
      }
    }, {
      path: 'user',
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-home-home-module */
        "modules-home-home-module").then(__webpack_require__.bind(null,
        /*! ./modules/home/home.module */
        "./src/app/modules/home/home.module.ts")).then(function (m) {
          return m.HomeModule;
        });
      },
      data: {
        title: 'User'
      }
    }, {
      path: '**',
      redirectTo: '/'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'sample';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
          }

          return true;
        }
      }, {
        key: "canLoad",
        value: function canLoad(route, segments) {
          if (!this.auth.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../shared/services/api.service */
    "./src/app/shared/services/api.service.ts");
    /* harmony import */


    var _shared_services_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../shared/services/jwt.service */
    "./src/app/shared/services/jwt.service.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(api, jwt) {
        _classCallCheck(this, AuthService);

        this.api = api;
        this.jwt = jwt;
        this.path = "api";
        this.isLogin = false;
        this.endpoints = {
          login: "login"
        };
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(data) {
          var _this = this;

          return this.api.post(this.path, this.endpoints.login, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            _this.jwt.setToken(res);

            _this.isLogin = true;
            return res;
          }));
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          if (this.isLogin) {
            return true;
          } else {
            if (this.jwt.getAccessToken()) {
              return true;
            } else {
              return false;
            }
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_jwt_service__WEBPACK_IMPORTED_MODULE_3__["JwtService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _shared_services_jwt_service__WEBPACK_IMPORTED_MODULE_3__["JwtService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/helpers/cookie.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/helpers/cookie.ts ***!
    \******************************************/

  /*! exports provided: get, set, remove */

  /***/
  function srcAppSharedHelpersCookieTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "get", function () {
      return get;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "set", function () {
      return set;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "remove", function () {
      return remove;
    });
    /**
     * Get cookie by key
     *
     * @export
     * @param {*} key
     * @returns
     */


    function get(key) {
      var cookies = document.cookie;
      var array = cookies.split(';').filter(function (str) {
        var arr = str.trim().split('=');
        return arr[0] == key;
      });

      if (!array || array.length <= 0) {
        return '';
      }

      return decodeURIComponent(array[0].trim().split('=')[1]);
    }
    /**
     * Set cookie with key = value;expires=times
     *
     * @export
     * @param {*} name
     * @param {*} value
     * @param {Date} [time=null]
     * @returns {void}
     */


    function set(name, value) {
      var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var cookie = "".concat(name, "=").concat(encodeURIComponent(value));
      var expires = time ? "; expires=".concat(time.toUTCString()) : '';
      var path = "; path =/";
      document.cookie = "".concat(cookie).concat(expires).concat(path);
    }
    /**
     * Remove cookie by key
     *
     * @export
     * @param {*} key
     */


    function remove(key) {
      document.cookie = "".concat(key, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
    }
    /***/

  },

  /***/
  "./src/app/shared/helpers/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/helpers/index.ts ***!
    \*****************************************/

  /*! exports provided: url, cookie, regex */

  /***/
  function srcAppSharedHelpersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./cookie */
    "./src/app/shared/helpers/cookie.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "cookie", function () {
      return _cookie__WEBPACK_IMPORTED_MODULE_0__;
    });
    /* harmony import */


    var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./url */
    "./src/app/shared/helpers/url.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "url", function () {
      return _url__WEBPACK_IMPORTED_MODULE_1__;
    });
    /* harmony import */


    var _regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./regex */
    "./src/app/shared/helpers/regex.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "regex", function () {
      return _regex__WEBPACK_IMPORTED_MODULE_2__;
    });
    /***/

  },

  /***/
  "./src/app/shared/helpers/regex.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/helpers/regex.ts ***!
    \*****************************************/

  /*! exports provided: phone */

  /***/
  function srcAppSharedHelpersRegexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "phone", function () {
      return phone;
    });

    var phone = /[0|+][1-9][0-9]{8,12}/;
    /***/
  },

  /***/
  "./src/app/shared/helpers/url.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/helpers/url.ts ***!
    \***************************************/

  /*! exports provided: query, merge */

  /***/
  function srcAppSharedHelpersUrlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "query", function () {
      return query;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "merge", function () {
      return merge;
    });
    /**
     * Object to Query Stirng
     * @export
     * @param params
     * @returns
     */


    function query() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (params && Object.keys(params).length > 0) {
        return "".concat(Object.keys(params).filter(function (key) {
          return key && params[key] != 'null';
        }).map(function (key) {
          return [key, encodeURIComponent(params[key])].join('=');
        }).join('&'));
      } else {
        return '';
      }
    }
    /**
     * return url: domain/path/endpoint/params
     * @export
     * @param domain
     * @param path
     * @param endpoint
     * @param params
     * @returns
     */


    function merge(domain, path, endpoint) {
      var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      if (params && Object.keys(params).length > 0) {
        return "".concat(domain, "/").concat(path, "/").concat(endpoint, "?").concat(query(params));
      } else {
        return "".concat(domain, "/").concat(path, "/").concat(endpoint);
      }
    }
    /***/

  },

  /***/
  "./src/app/shared/services/api.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/services/api.service.ts ***!
    \************************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppSharedServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../helpers */
    "./src/app/shared/helpers/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http, locale) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.locale = locale;
        this.apiServer = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiServe;
      }
      /**
       * REQUEST API
       * METHOD POST
       *
       * @param {string} path
       * @param {string} endpoint
       * @param {*} [data={}]
       * @returns {Observable<any>}
       * @memberof ApiService
       */


      _createClass(ApiService, [{
        key: "get",
        value: function get(path, endpoint) {
          var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return this.http.get(_helpers__WEBPACK_IMPORTED_MODULE_3__["url"].merge(this.apiServer, path, endpoint, data)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result;
          }));
        }
        /**
         * REQUEST API
         * METHOD POST
         *
         * @param {string} path
         * @param {string} endpoint
         * @param {*} [data={}]
         * @param {*} [options={}]
         * @returns
         * @memberof ApiService
         */

      }, {
        key: "post",
        value: function post(path, endpoint) {
          var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          var httpOptions;

          if (!options || options.type != 'multipart/form-data') {
            httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': options && options.type ? options.type : 'application/json'
              })
            };
          } else {
            httpOptions = {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({})
            };
          }

          return this.http.post(_helpers__WEBPACK_IMPORTED_MODULE_3__["url"].merge(this.apiServer, path, endpoint), data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result;
          }));
        }
        /**
         * REQUEST API
         * METHOD PUT
         * @param {string} path
         * @param {string} endpoint
         * @param {*} data
         * @param {*} [options]
         * @returns {Observable<any>}
         * @memberof ApiService
         */

      }, {
        key: "put",
        value: function put(path, endpoint, data, options) {
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': options && options.type ? options.type : 'application/json'
            })
          };
          return this.http.put(_helpers__WEBPACK_IMPORTED_MODULE_3__["url"].merge(this.apiServer, path, endpoint), data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result;
          }));
        }
        /**
         * REQUEST API FOR FILE DATA
         * METHOD POST
         * @param {string} path
         * @param {string} endpoint
         * @param {*} data
         * @param {*} options
         * @returns {Observable<any>}
         * @memberof ApiService
         */

      }, {
        key: "file",
        value: function file(path, endpoint, data) {
          return this.http.post(_helpers__WEBPACK_IMPORTED_MODULE_3__["url"].merge(this.apiServer, path, endpoint), data, {
            responseType: 'blob'
          });
        }
        /**
         * REQUEST API FOR FILE DATA
         * METHOD POST
         * @param {string} link
         * @memberof ApiService
         */

      }, {
        key: "fileURL",
        value: function fileURL(link) {
          return this.http.get(link, {
            responseType: 'blob'
          });
        }
        /**
         * Convert json to urlencoded
         *
         * @static
         * @param {*} data
         * @returns
         * @memberof ApiService
         */

      }], [{
        key: "convertToFormUrlencoded",
        value: function convertToFormUrlencoded(data) {
          return Object.keys(data).map(function (key) {
            return key + '=' + encodeURIComponent(data[key]);
          }).join('&');
        }
        /**
         * Convert json to query string
         *
         * @static
         * @param {string} url
         * @param {*} data
         * @returns
         * @memberof ApiService
         */

      }, {
        key: "convertToQueryString",
        value: function convertToQueryString(url, data) {
          var query = Object.keys(data).map(function (key) {
            return key + '=' + encodeURIComponent(data[key]);
          }).join('&');
          return url + '?' + query;
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/jwt.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/services/jwt.service.ts ***!
    \************************************************/

  /*! exports provided: JwtService */

  /***/
  function srcAppSharedServicesJwtServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtService", function () {
      return JwtService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../helpers */
    "./src/app/shared/helpers/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var JwtService = /*#__PURE__*/function () {
      function JwtService() {
        _classCallCheck(this, JwtService);

        this.token = '';
        this.tokenType = 'Bearer';
        this.refreshToken = '';
        this.expire = 7200;
        this.tokenUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      }
      /**
       * Get token with format "Token_type token"
       *
       * @returns
       * @memberof JwtService
       */


      _createClass(JwtService, [{
        key: "getToken",
        value: function getToken() {
          if (this.token && this.tokenType) {
            return "".concat(this.tokenType, " ").concat(this.token);
          } else {
            return '';
          }
        }
        /**
         * Set token to cookie
         *
         * @param {IAccessToken} res
         * @memberof JwtService
         */

      }, {
        key: "setToken",
        value: function setToken(res) {
          this.token = res.token;
          this.refreshToken = res.refresh_token;

          _helpers__WEBPACK_IMPORTED_MODULE_1__["cookie"].set('sample', this.token, new Date(res.access_token_expired)); // cookie.set('qr_code_refresh_token', this.refreshToken);


          this.tokenUpdated.next(true);
        }
        /**
         * Remove all token
         *
         * @memberof JwtService
         */

      }, {
        key: "removeToken",
        value: function removeToken() {
          this.token = '';
          this.refreshToken = '';

          _helpers__WEBPACK_IMPORTED_MODULE_1__["cookie"].remove('sample');

          _helpers__WEBPACK_IMPORTED_MODULE_1__["cookie"].remove('qr_code_refresh_token');
        }
        /**
         * Get token if token exists, return false if token does not exists
         *
         * @returns {(boolean | string)}
         * @memberof JwtService
         */

      }, {
        key: "getAccessToken",
        value: function getAccessToken() {
          var accessToken = _helpers__WEBPACK_IMPORTED_MODULE_1__["cookie"].get('sample');

          if (!accessToken) {
            return false;
          }

          this.token = accessToken;
          this.refreshToken = _helpers__WEBPACK_IMPORTED_MODULE_1__["cookie"].get('qr_code_refresh_token');
          return accessToken;
        }
        /**
         * Get refresh token if token exists, return false if refresh token does not exists
         *
         * @returns {(boolean | string)}
         * @memberof JwtService
         */

      }, {
        key: "getRefreshToken",
        value: function getRefreshToken() {
          var refreshToken = _helpers__WEBPACK_IMPORTED_MODULE_1__["cookie"].get('qr_code_refresh_token');

          if (!refreshToken) {
            return false;
          }

          return refreshToken;
        }
      }]);

      return JwtService;
    }();

    JwtService.ɵfac = function JwtService_Factory(t) {
      return new (t || JwtService)();
    };

    JwtService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JwtService,
      factory: JwtService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiServe: "https://reqres.in"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Trung Hien\Desktop\Source_Angular\sample\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map