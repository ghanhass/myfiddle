"use strict";
(self["webpackChunkfiddle"] = self["webpackChunkfiddle"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 3944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: ":id",
  component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
}, {
  path: "**",
  component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AppComponent {
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   loadConfigs: () => (/* binding */ loadConfigs)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ 3944);
/* harmony import */ var _html_part_html_part_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-part/html-part.component */ 5420);
/* harmony import */ var _css_part_css_part_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css-part/css-part.component */ 7292);
/* harmony import */ var _js_part_js_part_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js-part/js-part.component */ 9976);
/* harmony import */ var _iframe_part_iframe_part_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iframe-part/iframe-part.component */ 1284);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader/loader.component */ 7220);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-toastr */ 6371);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/modal.component */ 6388);
/* harmony import */ var _ressources_ressources_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ressources/ressources.component */ 1514);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main.service */ 6592);
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./safe.pipe */ 6175);
/* harmony import */ var _fiddles_history_fiddles_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fiddles-history/fiddles-history.component */ 4872);
/* harmony import */ var _pastebin_pastebin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pastebin/pastebin.component */ 1806);
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ 261);
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ 4388);
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var codemirror_mode_css_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! codemirror/mode/css/css */ 5772);
/* harmony import */ var codemirror_mode_css_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_css_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! codemirror/mode/htmlmixed/htmlmixed */ 8708);
/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_htmlmixed_htmlmixed__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var codemirror_addon_hint_show_hint__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! codemirror/addon/hint/show-hint */ 8363);
/* harmony import */ var codemirror_addon_hint_show_hint__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_show_hint__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var codemirror_addon_hint_html_hint__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! codemirror/addon/hint/html-hint */ 3339);
/* harmony import */ var codemirror_addon_hint_html_hint__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_html_hint__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var codemirror_addon_hint_css_hint__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! codemirror/addon/hint/css-hint */ 9275);
/* harmony import */ var codemirror_addon_hint_css_hint__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_css_hint__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var codemirror_addon_hint_javascript_hint__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! codemirror/addon/hint/javascript-hint */ 5477);
/* harmony import */ var codemirror_addon_hint_javascript_hint__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_javascript_hint__WEBPACK_IMPORTED_MODULE_20__);






























function loadConfigs(mainService) {
  return () => {
    return mainService.initConfig();
  };
}
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_21__.APP_INITIALIZER,
        useFactory: loadConfigs,
        deps: [_main_service__WEBPACK_IMPORTED_MODULE_10__.MainService],
        multi: true
      }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_22__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_22__.withInterceptorsFromDi)())],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_26__.ToastrModule.forRoot(), _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_27__.CodemirrorModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent, _html_part_html_part_component__WEBPACK_IMPORTED_MODULE_3__.HtmlPartComponent, _css_part_css_part_component__WEBPACK_IMPORTED_MODULE_4__.CssPartComponent, _js_part_js_part_component__WEBPACK_IMPORTED_MODULE_5__.JsPartComponent, _iframe_part_iframe_part_component__WEBPACK_IMPORTED_MODULE_6__.IframePartComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__.LoaderComponent, _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__.ModalComponent, _ressources_ressources_component__WEBPACK_IMPORTED_MODULE_9__.RessourcesComponent, _safe_pipe__WEBPACK_IMPORTED_MODULE_11__.SafePipe, _fiddles_history_fiddles_history_component__WEBPACK_IMPORTED_MODULE_12__.FiddlesHistoryComponent, _pastebin_pastebin_component__WEBPACK_IMPORTED_MODULE_13__.PastebinComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_26__.ToastrModule, _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_27__.CodemirrorModule]
  });
})();

/***/ }),

/***/ 7292:
/*!************************************************!*\
  !*** ./src/app/css-part/css-part.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CssPartComponent: () => (/* binding */ CssPartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.service */ 6592);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ 261);





const _c0 = ["codeMirrorEditor"];
class CssPartComponent {
  //aceEditor: AceAjax.Editor;
  constructor(mainService) {
    this.mainService = mainService;
    this.code = "";
    this.theme = "xq-light";
    this.isFullScreenMode = false;
    this.toggleFullScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.runcodemsg = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.savecodemsg = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.canRetrievePositionsAfterLoad = false;
    this.codeMirrorOptions = {
      mode: "css",
      lineNumbers: true,
      theme: 'xq-light',
      spellcheck: true,
      autocorrect: true,
      lineWrapping: true
    };
  }
  ngOnInit() {
    this.code = this.mainService.cssCode;
    console.log("CssPartComponent ngOnInit");
  }
  ngAfterViewInit() {}
  onCodeChanged(value) {
    ////console.log('CODE', value);
    let self = this;
    console.log('HTML onCodeChanged CODE', value);
    this.mainService.cssCode = value;
    this.mainService.setCheckBeforeUnloadListener();
  }
  static {
    this.ɵfac = function CssPartComponent_Factory(t) {
      return new (t || CssPartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CssPartComponent,
      selectors: [["app-css-part"]],
      viewQuery: function CssPartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.codeMirrorEditor = _t.first);
        }
      },
      outputs: {
        toggleFullScreen: "toggleFullScreen",
        runcodemsg: "runcodemsg",
        savecodemsg: "savecodemsg"
      },
      decls: 2,
      vars: 2,
      consts: [["codeMirrorEditor", ""], [3, "ngModelChange", "ngModel", "options"]],
      template: function CssPartComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-codemirror", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function CssPartComponent_Template_ngx_codemirror_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.code, $event) || (ctx.code = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CssPartComponent_Template_ngx_codemirror_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onCodeChanged($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.codeMirrorOptions);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_3__.CodemirrorComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4872:
/*!**************************************************************!*\
  !*** ./src/app/fiddles-history/fiddles-history.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FiddlesHistoryComponent: () => (/* binding */ FiddlesHistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.service */ 6592);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader/loader.component */ 7220);






const _c0 = ["historyLoader"];
const _c1 = (a0, a1) => ({
  "pointer-events": a0,
  "opacity": a1
});
const _c2 = a0 => ({
  "cursor": a0
});
const _c3 = a0 => ({
  "disabled": a0
});
const _c4 = a0 => [a0];
function FiddlesHistoryComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td")(7, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Go");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fiddle_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](fiddle_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, fiddle_r2.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c3, !ctx_r2.canChangePage))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c4, "/" + fiddle_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getFiddleType(fiddle_r2));
  }
}
class FiddlesHistoryComponent {
  constructor(mainService, router) {
    this.mainService = mainService;
    this.router = router;
    this.searchText = "";
    this.fiddlesList = [];
    this.pageNumber = 1;
    this.canChangePage = true;
  }
  getFiddlesList() {
    this.canChangePage = false;
    this.historyLoader.showLoader();
    this.historyLoader.subGlobal = true;
    this.mainService.getFiddlesList(this.pageNumber).subscribe({
      next: res => {
        console.log("getFiddlesList res = ", res);
        this.fiddlesList = res;
        this.historyLoader.hideLoader();
        this.canChangePage = true;
      }
    });
  }
  goToFiddle(fiddle) {
    if (this.canChangePage) {
      let id = fiddle.id;
      if (id) {
        this.router.navigate(["/" + id]);
      }
    }
    console.log("goToFiddle fiddle = ", fiddle);
  }
  ngOnInit() {}
  nextPage() {
    if (this.fiddlesList.length) {
      this.pageNumber++;
      this.getFiddlesList();
    }
  }
  prevPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.getFiddlesList();
    }
  }
  generateFiddlesList() {
    return this.fiddlesList.filter(el => {
      let arr = new Date(el.created_at).toDateString().split(" ");
      arr.splice(0, 1);
      arr[1] += ",";
      let str = arr.join(" ");
      if (this.searchText) {
        return el.title.toUpperCase().includes(this.searchText.toUpperCase()) || str.toUpperCase().includes(this.searchText.toUpperCase());
      }
      return el;
    });
  }
  getLoaderStyle() {
    let obj = {};
    return obj;
  }
  getFiddleType(fiddle) {
    let str;
    let appMode;
    if (location.origin == "https://ghanhass.github.io") {
      str = fiddle.file_name.indexOf("_") > -1 ? fiddle.file_name.split("_")[0] : 'fiddle';
    } else {
      str = fiddle.appmode || 'fiddle';
    }
    return str;
  }
  static {
    this.ɵfac = function FiddlesHistoryComponent_Factory(t) {
      return new (t || FiddlesHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FiddlesHistoryComponent,
      selectors: [["app-fiddles-history"]],
      viewQuery: function FiddlesHistoryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.historyLoader = _t.first);
        }
      },
      decls: 24,
      vars: 19,
      consts: [["historyLoader", ""], [1, "history-container"], [1, "search-table"], ["type", "text", 3, "ngModelChange", "ngModel", "placeholder"], [1, "table-container"], [3, "width", "height"], [3, "ngStyle"], [4, "ngFor", "ngForOf"], [1, "pagination", 3, "ngStyle"], [3, "click", "ngStyle"], [1, "fiddle-link", 3, "ngClass", "routerLink"]],
      template: function FiddlesHistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function FiddlesHistoryComponent_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchText, $event) || (ctx.searchText = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-loader", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "table", 6)(7, "thead")(8, "tr")(9, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Go to fiddle");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, FiddlesHistoryComponent_tr_18_Template, 11, 11, "tr", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8)(20, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FiddlesHistoryComponent_Template_a_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.prevPage());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\u2770");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FiddlesHistoryComponent_Template_a_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.nextPage());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u2771");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", "Filter");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", "100px")("height", "100px");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](9, _c1, ctx.canChangePage ? "all" : "none", ctx.canChangePage ? 1 : 0.3));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.generateFiddlesList());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](12, _c1, ctx.canChangePage ? "all" : "none", ctx.canChangePage ? 1 : 0.3));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c2, ctx.canChangePage ? "pointer" : "not-allowed"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c2, ctx.canChangePage ? "pointer" : "not-allowed"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["table[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n    position: relative;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 33.3%;\n    padding: 5px;\n}\n\n.table-container[_ngcontent-%COMP%] {\n    height: calc(100% - 70px);\n    width: 100%;\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n\n.search-table[_ngcontent-%COMP%] {\n    height: 35px;\n}\n\n.pagination[_ngcontent-%COMP%] {\n    height: 35px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.history-container[_ngcontent-%COMP%] {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\nthead[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 0;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    cursor: pointer;\n    -webkit-user-select: none;\n            user-select: none;\n}\n\n.search-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    padding: 0px 2px;\n    height: calc(100% - 4px);\n    width: 236px;\n    border-width: 1px;\n}\n\n.fiddle-link[_ngcontent-%COMP%] {\n    padding: 4px;\n    border-radius: 5px;\n    -webkit-text-decoration: auto;\n            text-decoration: auto;\n    margin: 1px 0px;\n}\n\n.history-container[_ngcontent-%COMP%]   .search-table[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n    outline :none;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmlkZGxlcy1oaXN0b3J5L2ZpZGRsZXMtaGlzdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLE1BQU07QUFDVjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YseUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtFQUNmIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG50YWJsZSB0ZCwgdGFibGUgdGgge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMzMuMyU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWFyY2gtdGFibGUge1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuLnBhZ2luYXRpb24ge1xuICAgIGhlaWdodDogMzVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGlzdG9yeS1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbnRoZWFkIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbn1cblxuLnBhZ2luYXRpb24gYSB7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc2VhcmNoLXRhYmxlIGlucHV0e1xuICAgIHBhZGRpbmc6IDBweCAycHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0cHgpO1xuICAgIHdpZHRoOiAyMzZweDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbn1cblxuLmZpZGRsZS1saW5rIHtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogYXV0bztcbiAgICBtYXJnaW46IDFweCAwcHg7XG59XG5cbi5oaXN0b3J5LWNvbnRhaW5lciAuc2VhcmNoLXRhYmxlIGlucHV0OmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmUgOm5vbmU7XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 5420:
/*!**************************************************!*\
  !*** ./src/app/html-part/html-part.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlPartComponent: () => (/* binding */ HtmlPartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.service */ 6592);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ 261);





const _c0 = ["codeMirrorEditor"];
class HtmlPartComponent {
  constructor(mainService) {
    this.mainService = mainService;
    this.code = "";
    this.theme = "xq-light";
    this.isFullScreenMode = false;
    this.toggleFullScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.runcodemsg = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.savecodemsg = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.canRetrievePositionsAfterLoad = false;
    this.codeMirrorOptions = {
      mode: "htmlmixed",
      lineNumbers: true,
      theme: 'xq-light',
      spellcheck: true,
      autocorrect: true,
      lineWrapping: true
    };
  }
  ngOnInit() {
    this.code = this.mainService.htmlCode;
    console.log("HtmlPartComponent ngOnInit");
  }
  ngAfterViewInit() {
    console.log("HtmlPartComponent ngAfterViewInit");
    console.log("this.codeMirrorEditor.ref.nativeElement = ", this.codeMirrorEditor.ref.nativeElement);
  }
  //this.mainService.resumeFiddleTheme(this);
  onCodeChanged(value) {
    let self = this;
    console.log('HTML onCodeChanged CODE', value);
    this.mainService.htmlCode = value;
    this.mainService.setCheckBeforeUnloadListener();
  }
  static {
    this.ɵfac = function HtmlPartComponent_Factory(t) {
      return new (t || HtmlPartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HtmlPartComponent,
      selectors: [["app-html-part"]],
      viewQuery: function HtmlPartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.codeMirrorEditor = _t.first);
        }
      },
      outputs: {
        toggleFullScreen: "toggleFullScreen",
        runcodemsg: "runcodemsg",
        savecodemsg: "savecodemsg"
      },
      decls: 2,
      vars: 2,
      consts: [["codeMirrorEditor", ""], [3, "ngModelChange", "ngModel", "options"]],
      template: function HtmlPartComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-codemirror", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function HtmlPartComponent_Template_ngx_codemirror_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.code, $event) || (ctx.code = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HtmlPartComponent_Template_ngx_codemirror_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onCodeChanged($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.codeMirrorOptions);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_3__.CodemirrorComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1284:
/*!******************************************************!*\
  !*** ./src/app/iframe-part/iframe-part.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IframePartComponent: () => (/* binding */ IframePartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ 6592);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 6371);
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../safe.pipe */ 6175);







const _c0 = ["form"];
const _c1 = ["copyInput"];
const _c2 = ["iframe"];
class IframePartComponent {
  constructor(mainService, router, toastrService) {
    this.mainService = mainService;
    this.router = router;
    this.toastrService = toastrService;
    //jsCode: string = "";
    //htmlCode: string = "";
    //cssCode: string = "";
    this.fiddleTitle = "";
    this.showloader = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.hideloader = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.isConsoleOnUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.iframeload = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
    this.isIframeLoadComplete = true;
    this.isFiddleLoadComplete = true;
    this.isAfterViewInitReached = false;
    let self = this;
    window.addEventListener("message", function (event) {
      if (event.data == "sub-iframe-loaded") {
        //console.log("message event from sub iframe = ", event);
        self.isIframeLoadComplete = true;
        if (self.isFiddleLoadComplete && self.isIframeLoadComplete) {
          self.hideloader.emit();
          self.changeConsoleTheme();
          self.switchConsoleMobileMode();
        }
      } else if (event.data == "detected-error") {
        //console.log("message event from sub iframe = ", event);
        self.mainService.isConsoleOn = true;
        self.isConsoleOnUpdate.emit(true);
      }
    });
  }
  runFiddle() {
    this.isIframeLoadComplete = false;
    let data = {
      js: this.mainService.jsCode,
      css: this.mainService.cssCode,
      html: this.mainService.htmlCode,
      isConsoleOn: this.mainService.isConsoleOn
    };
    this.showloader.emit();
    if (this.iframeElement) {
      let iframeElement = this.iframeElement.nativeElement;
      //console.log("inside runFiddle() iframeElement.contentWindow = ", iframeElement.contentWindow);
      if (iframeElement.contentWindow) {
        let fiddleCode = this.mainService.generateFiddleCode(data);
        let obj = {
          type: "run",
          html: fiddleCode,
          currentTheme: this.mainService.selectedTheme.data
        };
        iframeElement.contentWindow.postMessage(JSON.stringify(obj), _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.fiddleIframeOrigin);
      }
    } else {
      //console.log("iframeElement is NOT DEFINED");
    }
  }
  saveFiddle(appMode) {
    this.isFiddleLoadComplete = false;
    //console.log("saving Code");
    const self = this;
    let mobileCodePart = "0";
    let mobileResult = "1";
    if (!this.mainService.showResult) {
      mobileResult = "0";
    }
    if (this.mainService.showHtml) {
      mobileCodePart = "1";
    } else if (this.mainService.showCss) {
      mobileCodePart = "2";
    } else if (this.mainService.showJs) {
      mobileCodePart = "3";
    }
    let fiddleData = {
      js: this.mainService.jsCode,
      html: this.mainService.htmlCode,
      css: this.mainService.cssCode,
      pastebintext: this.mainService.pastebinText,
      js_part_size: this.mainService.jsCodePartSize,
      css_part_size: this.mainService.cssCodePartSize,
      html_part_size: this.mainService.htmlCodePartSize,
      code_parts_size: this.mainService.codePartsSize,
      main_container_width: this.mainService.mainContainerWidth,
      main_container_height: this.mainService.mainContainerHeight,
      title: this.mainService.fiddleTitle,
      layout: this.mainService.layout,
      mobile_layout: mobileCodePart + ":" + mobileResult,
      iframe_resize_value: this.mainService.iframeResizeValue,
      css_code_position_data: this.mainService.cssCodePositionData,
      html_code_position_data: this.mainService.htmlCodePositionData,
      js_code_position_data: this.mainService.jsCodePositionData,
      is_mobile_mode: this.mainService.isMobileMode,
      created_at: new Date().getTime(),
      appmode: appMode
    };
    //console.log("this.mainService.showHtml = ", this.mainService.showHtml);
    //console.log("this.mainService.showCss = ", this.mainService.showCss);
    //console.log("this.mainService.showJs = ", this.mainService.showJs);
    //console.log("this.mainService.showResult = ", this.mainService.showResult);
    this.showloader.emit();
    this.mainService.saveFiddle(fiddleData).subscribe(fiddleId => {
      //console.log("saveFiddle fiddleId = ", fiddleId);
      //this.runFiddle();
      this.isFiddleLoadComplete = true;
      if (this.isFiddleLoadComplete && this.isIframeLoadComplete) {
        this.hideloader.emit();
      }
      if (fiddleId > 0) {
        if (this.copyInput.nativeElement) {
          let input = this.copyInput.nativeElement;
          let hrefValue = window.location.origin;
          if (hrefValue[hrefValue.length - 1] != "/") {
            hrefValue = hrefValue + "/";
          }
          input.value = hrefValue + (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appName ? _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appName + "/" : "") + fiddleId;
          input.select();
          input.setSelectionRange(0, 99999);
          let copyCommand = document.execCommand("copy");
        }
        this.mainService.removeBeforeUnloadListener();
        this.mainService.resetCodeSinceSave();
        this.mainService.redirectAfterSaveMode = true;
        //console.log("gonna navigate now !");
        this.router.navigate(["/" + fiddleId]);
        this.toastrService.success("Fiddle URL copied to clipboard.");
      } else {
        this.toastrService.error("Error saving the fiddle!");
      }
    });
  }
  getIframeSrc() {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
  }
  ngOnInit() {}
  ngAfterViewInit() {
    this.isAfterViewInitReached = true;
  }
  onFormLoad() {
    //console.log("onFormLoad this.iframeElement = ",this.iframeElement);
    if (this.mainService.scheduledRunFiddle && this.iframeElement) {
      this.mainService.scheduledRunFiddle = false;
      this.runFiddle();
    }
  }
  showConsole() {
    let iframeElement = this.iframeElement.nativeElement;
    if (iframeElement.contentWindow) {
      let obj = {
        type: "console-show",
        currentTheme: this.mainService.selectedTheme.data
      };
      iframeElement.contentWindow.postMessage(JSON.stringify(obj), _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.fiddleIframeOrigin);
    }
  }
  switchConsoleMobileMode() {
    let isResponsiveModeOn = window.innerWidth <= 817 || window.innerHeight <= 580;
    let iframeElement = this.iframeElement.nativeElement;
    if (iframeElement.contentWindow) {
      let obj = {
        type: "console-mobile-update",
        isFiddleMobileMode: isResponsiveModeOn
      };
      iframeElement.contentWindow.postMessage(JSON.stringify(obj), _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.fiddleIframeOrigin);
    }
  }
  changeConsoleTheme() {
    let iframeElement = this.iframeElement.nativeElement;
    if (iframeElement.contentWindow) {
      let obj = {
        type: "change-console-theme",
        currentTheme: this.mainService.selectedTheme.data
      };
      iframeElement.contentWindow.postMessage(JSON.stringify(obj), _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.fiddleIframeOrigin);
    }
  }
  hideConsole() {
    let iframeElement = this.iframeElement.nativeElement;
    if (iframeElement.contentWindow) {
      let obj = {
        type: "console-hide"
      };
      iframeElement.contentWindow.postMessage(JSON.stringify(obj), _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.fiddleIframeOrigin);
    }
  }
  static {
    this.ɵfac = function IframePartComponent_Factory(t) {
      return new (t || IframePartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_1__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: IframePartComponent,
      selectors: [["app-iframe-part"]],
      viewQuery: function IframePartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.copyInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.iframeElement = _t.first);
        }
      },
      outputs: {
        showloader: "showloader",
        hideloader: "hideloader",
        isConsoleOnUpdate: "isConsoleOnUpdate",
        iframeload: "iframeload"
      },
      decls: 5,
      vars: 4,
      consts: [["copyInput", ""], ["iframe", ""], ["type", "text", 1, "copy-input"], [3, "load", "src"]],
      template: function IframePartComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 2, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "iframe", 3, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "safe");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("load", function IframePartComponent_Template_iframe_load_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onFormLoad());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 1, ctx.getIframeSrc(), "url"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeResourceUrl"]);
        }
      },
      dependencies: [_safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe],
      styles: ["iframe[_ngcontent-%COMP%]{\n    height:100%;\n    width:100%;\n    border:none;\n    -webkit-user-select: none;\n            user-select: none;\n}\n\n#save-status[_ngcontent-%COMP%]{\n    display:none !important;\n}\n\n.copy-input[_ngcontent-%COMP%]{\n    position:fixed;\n    left:99999px;\n    top:99999px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaWZyYW1lLXBhcnQvaWZyYW1lLXBhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLHlCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7QUFDZiIsInNvdXJjZXNDb250ZW50IjpbImlmcmFtZXtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJvcmRlcjpub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4jc2F2ZS1zdGF0dXN7XG4gICAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jb3B5LWlucHV0e1xuICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgIGxlZnQ6OTk5OTlweDtcbiAgICB0b3A6OTk5OTlweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9976:
/*!**********************************************!*\
  !*** ./src/app/js-part/js-part.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsPartComponent: () => (/* binding */ JsPartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.service */ 6592);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ 261);





const _c0 = ["codeMirrorEditor"];
class JsPartComponent {
  constructor(mainService) {
    this.mainService = mainService;
    this.code = "";
    this.theme = "xq-light";
    this.isFullScreenMode = false;
    this.toggleFullScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.runcodemsg = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.savecodemsg = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.canRetrievePositionsAfterLoad = false;
    this.codeMirrorOptions = {
      mode: "javascript",
      lineNumbers: true,
      theme: 'xq-light',
      spellcheck: true,
      autocorrect: true,
      lineWrapping: true
    };
  }
  ngOnInit() {
    this.code = this.mainService.jsCode;
    console.log("JsPartComponent ngOnInit");
  }
  ngAfterViewInit() {
    console.log("JsPartComponent ngAfterViewInit");
  }
  onCodeChanged(value) {
    //////console.log('CODE', value);
    let self = this;
    this.mainService.jsCode = value;
    this.mainService.setCheckBeforeUnloadListener();
  }
  static {
    this.ɵfac = function JsPartComponent_Factory(t) {
      return new (t || JsPartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: JsPartComponent,
      selectors: [["app-js-part"]],
      viewQuery: function JsPartComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.codeMirrorEditor = _t.first);
        }
      },
      outputs: {
        toggleFullScreen: "toggleFullScreen",
        runcodemsg: "runcodemsg",
        savecodemsg: "savecodemsg"
      },
      decls: 2,
      vars: 2,
      consts: [["codeMirrorEditor", ""], [3, "ngModelChange", "ngModel", "options"]],
      template: function JsPartComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-codemirror", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function JsPartComponent_Template_ngx_codemirror_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.code, $event) || (ctx.code = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JsPartComponent_Template_ngx_codemirror_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onCodeChanged($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.codeMirrorOptions);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_3__.CodemirrorComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7220:
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


const _c0 = (a0, a1) => ({
  "global": a0,
  "sub-global": a1
});
const _c1 = (a0, a1) => ({
  "width": a0,
  "height": a1
});
const _c2 = a0 => ({
  "border-width": a0
});
function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3)(3, "div")(4, "div", 3)(5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx_r0.global, ctx_r0.subGlobal));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, ctx_r0.width, ctx_r0.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx_r0.thickness ? ctx_r0.thickness + "px" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, ctx_r0.thickness ? ctx_r0.thickness + "px" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, ctx_r0.thickness ? ctx_r0.thickness + "px" : ""));
  }
}
class LoaderComponent {
  showLoader() {
    this.show = true;
  }
  getWrapperInlineStyle() {
    let obj = {};
    return obj;
  }
  isLoaderShow() {
    return this.show;
  }
  hideLoader() {
    this.show = false;
  }
  constructor() {
    this.show = false;
    this.global = false;
    this.subGlobal = false;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function LoaderComponent_Factory(t) {
      return new (t || LoaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoaderComponent,
      selectors: [["app-loader"]],
      inputs: {
        global: "global",
        subGlobal: "subGlobal",
        width: "width",
        height: "height",
        thickness: "thickness"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "loader-wrapper", 3, "ngClass", 4, "ngIf"], [1, "loader-wrapper", 3, "ngClass"], [1, "loader-container", 3, "ngStyle"], [3, "ngStyle"]],
      template: function LoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 6, 17, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaderShow());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
      styles: [".loader-wrapper[_ngcontent-%COMP%]{\n  position:relative;\n  height:30px;\n  width:30px;\n  \n\n  display: flex;\n      align-items: center;\n      justify-content: center;\n}\n\n.loader-wrapper[_ngcontent-%COMP%]   .loader-container[_ngcontent-%COMP%]{\n    position:absolute;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    height:30px;\n    width:30px;\n}\n\n.loader-wrapper.global[_ngcontent-%COMP%], .loader-wrapper.sub-global[_ngcontent-%COMP%]{\n  height: 100%;\n  width: 100%;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n}\n\n.loader-wrapper.global[_ngcontent-%COMP%]{\n  position: fixed;\n}\n\n.loader-wrapper.sub-global[_ngcontent-%COMP%]{\n  position: absolute;\n}\n\n.loader-wrapper.global[_ngcontent-%COMP%]   .loader-container[_ngcontent-%COMP%]{\n  position: fixed;\n  top:50%;\n  left:50%;\n  transform: translate(-50%,-50%);\n  width: 100px;\n  height: 100px;\n}\n\n\n.loader-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1){\n    border-top:3px solid #62ad4a;\n    border-left:3px solid #62ad4a;\n    border-top-left-radius: 100%;\n}\n\n.loader-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3){\n    border-bottom:3px solid #62ad4a;\n    border-left:3px solid #62ad4a;\n    border-bottom-left-radius: 100%;\n}\n\n.loader-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4){\n    border-bottom:3px solid #62ad4a;\n    border-right:3px solid #62ad4a;\n    border-bottom-right-radius: 100%;\n}\n\n.loader-wrapper[_ngcontent-%COMP%]   .loader-container[_ngcontent-%COMP%]{\n    animation-name:_ngcontent-%COMP%_rotate-loader;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n    animation-duration: 0.5s;\n}\n\n.loader-wrapper.loader-wrapper.global[_ngcontent-%COMP%]   .loader-container[_ngcontent-%COMP%]{\n  animation-name:_ngcontent-%COMP%_rotate-loader-global;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-duration: 1.2s;\n}\n\n@keyframes _ngcontent-%COMP%_rotate-loader{\n  0%{\n      transform:rotate(0deg)\n  }\n  50%{\n      transform:rotate(180deg)\n  }\n\n  100%{\n      transform:rotate(360deg)\n  }\n}\n\n@keyframes _ngcontent-%COMP%_rotate-loader-global{\n  0%{\n      transform:translate(-50%,-50%) rotate(0deg)\n  }\n  50%{\n      transform:translate(-50%,-50%) rotate(180deg)\n  }\n\n  100%{\n      transform:translate(-50%,-50%) rotate(360deg)\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsR0FBRztFQUNILGFBQWE7TUFDVCxtQkFBbUI7TUFDbkIsdUJBQXVCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7O0FBR0E7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUNuQyx3QkFBd0I7QUFDNUI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsaUNBQWlDO0VBQ2pDLG1DQUFtQztFQUNuQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTtNQUNJO0VBQ0o7RUFDQTtNQUNJO0VBQ0o7O0VBRUE7TUFDSTtFQUNKO0FBQ0Y7O0FBRUE7RUFDRTtNQUNJO0VBQ0o7RUFDQTtNQUNJO0VBQ0o7O0VBRUE7TUFDSTtFQUNKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLXdyYXBwZXJ7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBoZWlnaHQ6MzBweDtcbiAgd2lkdGg6MzBweDtcbiAgLyoqL1xuICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9hZGVyLXdyYXBwZXIgLmxvYWRlci1jb250YWluZXJ7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGhlaWdodDozMHB4O1xuICAgIHdpZHRoOjMwcHg7XG59XG5cbi5sb2FkZXItd3JhcHBlci5nbG9iYWwsXG4ubG9hZGVyLXdyYXBwZXIuc3ViLWdsb2JhbHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4ubG9hZGVyLXdyYXBwZXIuZ2xvYmFse1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5sb2FkZXItd3JhcHBlci5zdWItZ2xvYmFse1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5sb2FkZXItd3JhcHBlci5nbG9iYWwgLmxvYWRlci1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOjUwJTtcbiAgbGVmdDo1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuXG4ubG9hZGVyLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSl7XG4gICAgYm9yZGVyLXRvcDozcHggc29saWQgIzYyYWQ0YTtcbiAgICBib3JkZXItbGVmdDozcHggc29saWQgIzYyYWQ0YTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xufVxuXG4ubG9hZGVyLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMyl7XG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgIzYyYWQ0YTtcbiAgICBib3JkZXItbGVmdDozcHggc29saWQgIzYyYWQ0YTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMDAlO1xufVxuXG4ubG9hZGVyLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoNCl7XG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgIzYyYWQ0YTtcbiAgICBib3JkZXItcmlnaHQ6M3B4IHNvbGlkICM2MmFkNGE7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XG59XG5cbi5sb2FkZXItd3JhcHBlciAubG9hZGVyLWNvbnRhaW5lcntcbiAgICBhbmltYXRpb24tbmFtZTpyb3RhdGUtbG9hZGVyO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG59XG5cbi5sb2FkZXItd3JhcHBlci5sb2FkZXItd3JhcHBlci5nbG9iYWwgLmxvYWRlci1jb250YWluZXJ7XG4gIGFuaW1hdGlvbi1uYW1lOnJvdGF0ZS1sb2FkZXItZ2xvYmFsO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDEuMnM7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlLWxvYWRlcntcbiAgMCV7XG4gICAgICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpXG4gIH1cbiAgNTAle1xuICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpXG4gIH1cblxuICAxMDAle1xuICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpXG4gIH1cbn1cblxuQGtleWZyYW1lcyByb3RhdGUtbG9hZGVyLWdsb2JhbHtcbiAgMCV7XG4gICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDBkZWcpXG4gIH1cbiAgNTAle1xuICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgxODBkZWcpXG4gIH1cblxuICAxMDAle1xuICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgzNjBkZWcpXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6592:
/*!*********************************!*\
  !*** ./src/app/main.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainService: () => (/* binding */ MainService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2561);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 5312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);






let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
headers = headers.set("PRIVATE-TOKEN", window.atob("Z2xwYXQtWXpveENtODZNUXAxT21WM2VHSnBDUkF3ZkVQSEdfMk1rWmZNNldhQUxoQS4xNzF4MDd2aDg="));
headers = headers.set("Content-Type", "application/json");
const gitlabProjectId = "52190204";
const gitlabJsonDbId = "3621546";
class MainService {
  constructor(http) {
    this.http = http;
    this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
    this.appMode = "fiddle";
    this.isFirstTimeFiddle = true;
    this.jsCodeSinceSave = "";
    this.cssCodeSinceSave = "";
    this.htmlCodeSinceSave = "";
    this.pastebinTextSinceSave = "";
    this.layout = 1;
    this.fiddleThemeId = '';
    this.fiddleTitle = "";
    this.redirectAfterSaveMode = false;
    this.codeSavingDate = undefined;
    this.showHtml = true;
    this.showCss = false;
    this.showJs = false;
    this.showResult = true;
    this.isMobileMode = false;
    this.scheduledRunFiddle = false;
    this.isBeforeUnloadEvHandlerSet = false;
    this.htmlCodePositionData = {
      row: 0,
      column: 0,
      focus: false,
      aceRanges: []
    };
    this.cssCodePositionData = {
      row: 0,
      column: 0,
      focus: false,
      aceRanges: []
    };
    this.jsCodePositionData = {
      row: 0,
      column: 0,
      focus: false,
      aceRanges: []
    };
    this.canSaveCodeEditorsPostition = true;
    this.canRetrievePositionsAfterLoad = false;
    this.selectedTheme = {
      name: "VS",
      id: "vs-default",
      data: {
        "base": "vs",
        "inherit": true,
        "rules": [{
          "foreground": "333333",
          "background": "ffffff",
          "token": ""
        }],
        "colors": {
          "editor.foreground": "#333333",
          "editor.background": "#FFFFFF",
          "editor.selectionBackground": "#d2d2d2",
          "editor.lineHighlightBackground": "#FFFFFF",
          "editorCursor.foreground": "#333333",
          "editorWhitespace.foreground": "#333333",
          "editor.cursorBlinkShadow": "#000f867a"
        }
      }
    };
    this.themesList = [{
      "name": "VS",
      "id": "vs-default",
      "data": {
        "base": "vs",
        "inherit": true,
        "rules": [{
          "foreground": "333333",
          "background": "ffffff",
          "token": ""
        }],
        "colors": {
          "editor.foreground": "#333333",
          "editor.background": "#FFFFFF",
          "editor.selectionBackground": "#d2d2d2",
          "editor.lineHighlightBackground": "#FFFFFF",
          "editorCursor.foreground": "#333333",
          "editorWhitespace.foreground": "#333333",
          "editor.cursorBlinkShadow": "#000f867a"
        }
      }
    }, {
      "name": "VS Dark",
      "id": "vs-default-dark",
      "data": {
        "base": "vs-dark",
        "inherit": true,
        "rules": [],
        "colors": {
          "editor.foreground": "#d4d4d4",
          "editor.background": "#1e1e1e",
          "editor.selectionBackground": "#414141",
          "editor.lineHighlightBackground": "#1e1e1e",
          "editorCursor.foreground": "#d4d4d4",
          "editorWhitespace.foreground": "#d4d4d480",
          "editor.cursorBlinkShadow": "#ffffff7a"
        }
      }
    }];
    this.beforeUnloadListener = event => {
      event.preventDefault();
      //console.log("beforeUnload event is set");
      if (this.isCodeChanged()) {
        return event.returnValue = "Are you sure you want to exit?";
      }
    };
    this.jsCode = "";
    this.cssCode = "";
    this.htmlCode = "";
    //console.log("mainService constructor");
  }
  setCheckBeforeUnloadListener() {
    let self = this;
    window.removeEventListener("beforeunload", self.beforeUnloadListener, {
      capture: true
    });
    if (this.isCodeChanged()) {
      //console.log("isCodeChanged = true");
      window.addEventListener("beforeunload", self.beforeUnloadListener, {
        capture: true
      });
    } else {
      //console.log("isCodeChanged = false");
      window.removeEventListener("beforeunload", self.beforeUnloadListener, {
        capture: true
      });
    }
  }
  removeBeforeUnloadListener() {
    let self = this;
    window.removeEventListener("beforeunload", self.beforeUnloadListener, {
      capture: true
    });
  }
  initConfig() {
    return new Promise((resolve, reject) => {
      this.http.get("assets/app-config.json").subscribe(res => {
        this.appConfig = res;
        //console.log("startup this.appConfig = ", this.appConfig);
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }
  getConfig(key) {
    return this.appConfig[key];
  }
  /**
   *
   * @returns boolean: Returns whether the code is changed or not since last save
   */
  isCodeChanged() {
    return this.jsCode !== this.jsCodeSinceSave || this.cssCode !== this.cssCodeSinceSave || this.htmlCode !== this.htmlCodeSinceSave || this.pastebinText !== this.pastebinTextSinceSave;
  }
  /**
   * Reset code marked since last save to the current code
   */
  resetCodeSinceSave() {
    this.jsCodeSinceSave = this.jsCode;
    this.cssCodeSinceSave = this.cssCode;
    this.htmlCodeSinceSave = this.htmlCode;
    this.pastebinTextSinceSave = this.pastebinText;
  }
  resumeFiddleTheme(htmlPartComp, cssPartComp, jsPartComp, pastebinPart) {
    //console.log("param = ", param);
    //console.log("this.mainService.isFiddleThemeDark = ", this.isFiddleThemeDark);
    let savedThemeId = localStorage.getItem("myfiddle-theme");
    if (savedThemeId) {
      this.selectedTheme = this.themesList.find(el => {
        return el.id == savedThemeId;
      });
    }
    //console.log("selectedTheme = ", selectedTheme);
    this.addThemeStylesheet(this.selectedTheme);
    if (htmlPartComp) {
      htmlPartComp.codeMirrorOptions.theme = savedThemeId ? savedThemeId == "vs-default-dark" ? "material-darker" : "xq-light" : "xq-light";
    }
    if (cssPartComp) {
      cssPartComp.codeMirrorOptions.theme = savedThemeId ? savedThemeId == "vs-default-dark" ? "material-darker" : "xq-light" : "xq-light";
    }
    if (jsPartComp) {
      jsPartComp.codeMirrorOptions.theme = savedThemeId ? savedThemeId == "vs-default-dark" ? "material-darker" : "xq-light" : "xq-light";
    }
    if (pastebinPart) {
      pastebinPart.codeMirrorOptions.theme = savedThemeId ? savedThemeId == "vs-default-dark" ? "material-darker" : "xq-light" : "xq-light";
    }
  }
  prepareThemeStyleSheet(theme) {
    let str = `.code-part-title {
        background:${theme.data.colors['editor.background']};
        color: ${theme.data.colors['editor.foreground']};
    }
    
    .gutter[class]
    {
        background-color: ${theme.data.colors['editor.selectionBackground']};
    }
    
    .fiddle-size.fiddle-size-hack{
        color: ${theme.data.colors['editor.background']};
        background: ${theme.data.colors['editor.foreground']};
        box-shadow: 0 0 15px 4px ${theme.data.colors['editor.foreground']};
    }
    
    .iframe-overlay {
        background: ${theme.data.colors['editor.background']};
    }
    
    input.form-control.fiddle-input {
        background: ${theme.data.colors['editor.background']};
        border: 1px solid ${theme.data.colors['editor.foreground']};
        color: ${theme.data.colors['editor.foreground']};
    }
    
    .code-part-title span {
        color: ${theme.data.colors['editor.foreground']} !important;
    }
    
    .layout > div:first-child > div {
        outline: 1px solid ${theme.data.colors['editor.foreground']} !important;
    }
    
    .layout.active > div:first-child > div {
        outline: 1px solid ${theme.data.colors['editor.foreground']} !important;
    }
    
    .layout > div:first-child {
        outline: 2px solid ${theme.data.colors['editor.foreground']} !important;
    }
    
    .layout.active > div:first-child {
        outline: 2px solid ${theme.data.colors['editor.foreground']} !important;
    }
    
    .layout {
        background-color: ${theme.data.colors['editor.background']} !important;
        border-color: ${theme.data.colors['editor.foreground']} !important;
        box-shadow: 0 0 0px 1px ${theme.data.colors['editor.background']} !important;
    }
    
    .layout.active {
        background-color: ${theme.data.colors['editor.selectionBackground']} !important;
        border-color: ${theme.data.colors['editor.foreground']} !important;
        box-shadow: 0 0 6px 2px ${theme.data.colors['editor.foreground']} !important;
    }
    
    .layouts-list {
        background-color: ${theme.data.colors['editor.background']} !important;
        box-shadow: 0px 0px 4px 2px ${theme.data.colors['editor.foreground']} !important;
    }
    
    ul.donations-menu.shown,
    .themes-menu.shown{
        box-shadow: 0px 0px 4px 2px ${theme.data.colors['editor.foreground']} !important;
        background-color: ${theme.data.colors['editor.background']} !important;
    }
    
    .paypal-btn-container ul.donations-menu > li,
    .themes-menu.shown > li {
        color: ${theme.data.colors['editor.foreground']};
    }
    
    .paypal-btn-container ul.donations-menu > li:hover,
    .themes-menu.shown > li:not(.selected):hover {
        background-color: ${this.enhanceThemesMenuColoration(theme, "background-color")};
        color: ${theme.data.colors['editor.foreground']};
    }
    
    .ressources-choices-container {
        background-color: ${theme.data.colors['editor.background']} !important;
    }
    
    .modal {
        background: ${theme.data.colors['editor.background']};
        border: 1px solid ${theme.data.colors['editor.foreground']};
        color: ${theme.data.colors['editor.foreground']};
    }
    
    .ressources-choice 
    .ressource-choice-description {
        color: ${theme.data.colors['editor.foreground']};
    }
    
    .form-control {
        background: ${theme.data.colors['editor.background']};
        color: ${theme.data.colors['editor.foreground']};
        border: 1px solid ${theme.data.colors['editor.foreground']};
    }
    
    button.btn.btn-remove-selected-ressource {
        background-color: ${theme.data.colors['editor.background']};
        color: ${theme.data.colors['editor.foreground']};
    }
    
    .ressources-choice .ressource-choice-description[class] {
        color: ${theme.data.colors['editor.foreground']};
    }
    
    .paypal-btn-container,
    .themes-btn-container {
        color: ${theme.data.colors['editor.foreground']};
    }
    
    button.btn.paypal-btn {
        color: ${theme.data.colors['editor.foreground']};
        background: ${theme.data.colors['editor.background']};
    }
    
    .header-btns-container .btn:hover,
    .logo-title-container .btn:hover {
        color: ${theme.data.colors['editor.foreground']};
        background: ${theme.data.colors['editor.lineHighlightBackground']};
    }

    .header-btns-container .btn,
    .logo-title-container .btn {
        color: ${theme.data.colors['editor.foreground']};
        background: ${theme.data.colors['editor.background']};
        font-family:Arial, sans-serif;
    }
    
    #code-parts-title-mobile a.active {
        background-color: ${theme.data.colors['editor.selectionBackground']};
        color: ${theme.data.colors['editor.foreground']};
    }
    
    .paypal-btn-container ul.donations-menu > li:hover {
        background-color: ${theme.data.colors['editor.lineHighlightBackground']};
        font-weight: 600;
    }
    
    .themes-menu.shown > li:not(.selected):hover {
        /*background-color: ${theme.data.colors['editor.lineHighlightBackground']};*/
    }
    
    .themes-menu li.selected {
        font-weight: bold;
        background-color: ${theme.data.colors['editor.selectionBackground']};
        color: ${theme.data.colors['editor.foreground']};
    }

    .ressources-container > hr{
      border: 1px solid ${theme.data.colors['editor.foreground']};
    }
    
    .ressources-query-container{
      border-bottom: 1px solid ${theme.data.colors['editor.foreground']};
    }
    
    .ressources-choices-container{
      background-color: ${theme.data.colors['editor.background']};
      border: 1px solid ${theme.data.colors['editor.foreground']};
    }
    
    .ressources-choice:first-child ~ .ressources-choice{
      border-top:1px solid ${theme.data.colors['editor.foreground']};
    }
    
    .ressources-choice:last-child{
      border-bottom:1px solid ${theme.data.colors['editor.foreground']};
    }
    
    .ressources-choice .ressource-choice-description {
      color: ${theme.data.colors['editor.foreground']};
    }
    
    .ressources-choice:hover {
      background-color: ${theme.data.colors['editor.lineHighlightBackground']};
    }
    
    .ressources-choice.current-choice {
      background-color: ${theme.data.colors['editor.selectionBackground']};
    }
    
    .ressources-choice-files-container{
      border: 1px solid ${theme.data.colors['editor.foreground']};
    }
    
    .ressources-choice-selected-files-container{
      border: 1px solid ${theme.data.colors['editor.foreground']};
    }
    
    .ressources-choice-files:hover {
      background-color: ${theme.data.colors['editor.lineHighlightBackground']};
    }
    
    .ressources-choice-files.selected {
      background: ${theme.data.colors['editor.selectionBackground']};
    }
    
    .ressources-choice-files:first-child ~ .ressources-choice-files{
      border-top:1px solid ${theme.data.colors['editor.foreground']};
    }
    
    .ressources-choice-files:last-child {
      border-bottom:1px solid ${theme.data.colors['editor.foreground']};
    }
    
    .ressources-choice-files-search{
      border-bottom:1px solid ${theme.data.colors['editor.foreground']};
    }
    
    .ressources-choice-selected-file {
      background-color: ${theme.data.colors['editor.background']};
    }
    
    .ressources-choice-selected-file.placeholder {
      color: ${theme.data.colors['editor.foreground']};
      background-color: ${theme.data.colors['editor.lineHighlightBackground']};
    }
    
    .ressources-choice-selected-file-wrapper.placeholder {
      background-color: ${theme.data.colors['editor.lineHighlightBackground']};
      border: 2px dashed ${theme.data.colors['editor.foreground']};
      border-top: 2px dashed ${theme.data.colors['editor.foreground']};
      border-bottom: 2px dashed ${theme.data.colors['editor.foreground']};
    }
    
    .ressources-choice-selected-file-wrapper {
      border-bottom: 1px solid ${theme.data.colors['editor.foreground']};
    }
    
    .resources-tabs-mobile {
      border-bottom: 1px solid ${theme.data.colors['editor.foreground']};
    }
    
    .resources-tabs-mobile label {
      border:1px solid ${theme.data.colors['editor.foreground']};
    }
    
    .resources-tabs-mobile label.selected{
      background-color:${theme.data.colors['editor.selectionBackground']};
    }
    
    .title{
      border-bottom: 1px solid ${theme.data.colors['editor.foreground']};
    }

    .modal-close-btn{
        border-color: ${theme.data.colors['editor.foreground']};
        color: ${theme.data.colors['editor.foreground']};
        background-color: ${theme.data.colors['editor.background']};
    }

    .modal-close-btn:active{
        color: ${theme.data.colors['editor.foreground']};
        background-color: ${theme.data.colors['editor.selectionBackground']};
    }

    .modal-close-btn:hover{
        background-color: ${theme.data.colors['editor.lineHighlightBackground']};
    }

    app-modal .modal-header .modal-validate-btn{
        background-color: ${theme.data.colors['editor.background']};
        color: ${theme.data.colors['editor.foreground']};
        border-color: ${theme.data.colors['editor.foreground']};
    }

    app-modal .modal-header .modal-validate-btn:hover{
        background-color: ${theme.data.colors['editor.lineHighlightBackground']};
    }

    app-modal .modal-header .modal-validate-btn:active{
        background-color: ${theme.data.colors['editor.selectionBackground']};
    }

    .modal{
        background-color: ${theme.data.colors['editor.background']};
        box-shadow: 0 0px 8px 1px ${theme.data.colors['editor.foreground']};
        border: 1px solid ${theme.data.colors['editor.foreground']};
    }

    .modal-container.shown{
        background-color: ${theme.data.colors['editor.background']};
    }

    .layouts-list-container {
        background-color: ${theme.data.colors['editor.background']};
        color:${theme.data.colors['editor.foreground']};
    }
    
    .layouts-list-container:active{
        color: ${theme.data.colors['editor.foreground']};
        background-color: ${theme.data.colors['editor.selectionBackground']};
    }
    
    .layouts-list-container:hover{
        color: ${theme.data.colors['editor.foreground']};
        background-color: ${theme.data.colors['editor.lineHighlightBackground']};
    }
    
    body{
        background-color: ${theme.data.colors['editor.background']};
        color: ${theme.data.colors['editor.foreground']};
    }

    .code-part-title.half-stretch-mark{
      box-shadow: 0 0 10000px 10000px ${theme.data.colors['editor.selectionBackground']};
      z-index: 1;
      background: ${theme.data.colors['editor.selectionBackground']};
      position: relative;
      opacity:0.5;
    }
    
    .code-part-title.marking-half-stretched-code-part{
        z-index: 1;
        position: relative;
        animation-name: animated-marked-code-part;
        animation-duration:0.5s;
    }

    .code-part-title-btn .fa-arrows-h-vertical > span:first-child {
      width: 100%;
      border-top: 1px solid ${theme.data.colors['editor.foreground']};
    }

    .code-part-title-btn{
      background-color: ${theme.data.colors['editor.background']};
      color: ${theme.data.colors['editor.foreground']};
    }

    .code-part-title-btn.on{
      background-color: ${theme.data.colors['editor.selectionBackground']};
      color: ${theme.data.colors['editor.foreground']};
    }

    .console-btn.console-on,
    .console-btn.console-on:hover
    {
      background-color: ${theme.data.colors['editor.selectionBackground']};
      color: ${theme.data.colors['editor.foreground']};
    }

    button.tools-btn.btn span {
      border: 2px solid ${theme.data.colors['editor.foreground']};
    }

    .fiddle-link {
      border: 1px solid ${theme.data.colors['editor.foreground']};
      color:  ${theme.data.colors['editor.foreground']};
    }

    .history-container table thead{
      box-shadow: 0px 0px 3px 1px ${theme.data.colors['editor.cursorBlinkShadow']};
      background-color: ${theme.data.colors['editor.background']};
    }

    .history-container .pagination a{
      border: 1px solid ${theme.data.colors['editor.cursorBlinkShadow']};
    }

    .history-container .table-container{
      border: 1px solid ${theme.data.colors['editor.foreground']};
    }

    .history-container table td, .history-container table th {
      border: 1px solid ${theme.data.colors['editor.foreground']};
    }

    .history-container .search-table input {
      color: ${theme.data.colors['editor.foreground']};
      background-color: ${theme.data.colors['editor.background']};
      border-color: ${theme.data.colors['editor.cursorBlinkShadow']};
    }

    .history-container .search-table input:focus-visible {
      box-shadow: 0px 0px 3px 1px ${theme.data.colors['editor.foreground']};
    }

    .loader-wrapper{
      background-color: ${theme.data.colors['editor.background']}
    }

    @keyframes blink{
      0%{
        box-shadow: none;
      }
  
      50%{
        box-shadow: inset 0px 0px 6px 3px ${theme.data.colors['editor.cursorBlinkShadow']};
      }
  
      100%{
        box-shadow: none;
      }
    }

    @media (max-width:818px), (max-height:580px) {
      as-split-area.codeparts-container{
        border-bottom: 1px solid ${theme.data.colors['editor.foreground']};
      }

      as-split-area.as-split-area-console{
        border-top: 1px solid ${theme.data.colors['editor.foreground']};
      }
    }
    
    @keyframes animated-marked-code-part{
        
        0%{
            background:${theme.data.colors['editor.selectionBackground']};
            box-shadow: 0 0 10000px 10000px ${theme.data.colors['editor.selectionBackground']};
            opacity:0.5;
        }
      
        100%{
            background:${theme.data.colors['editor.background']};
            box-shadow:none;
            opacity:1;
        }
      
    }

    @keyframes cling{
      0%{
          box-shadow: 0 0 0px 0px ${theme.data.colors['editor.foreground']};
      }
  
      50%{
          box-shadow: 0 0 4px 4px ${theme.data.colors['editor.foreground']};
      }
  
      100%{
          box-shadow: 0 0 0px 0px ${theme.data.colors['editor.foreground']};
      }
  }
    `;
    return str;
  }
  addThemeStylesheet(theme) {
    let themeStylesheet = document.querySelector("style#theme-stylesheet");
    if (themeStylesheet) {
      themeStylesheet.remove();
    }
    themeStylesheet = document.createElement("style");
    themeStylesheet.id = "theme-stylesheet";
    document.head.appendChild(themeStylesheet);
    themeStylesheet.textContent = this.prepareThemeStyleSheet(theme);
  }
  enhanceThemesMenuColoration(theme, cssProperty) {
    if (theme.id == "vs-default") {
      switch (cssProperty) {
        case "background-color":
          return "rgba(128, 128, 128, 0.11)";
      }
    } else if (theme.id == "vs-default-dark") {
      switch (cssProperty) {
        case "background-color":
          return "#333333";
      }
    } else {
      return theme.data.colors['editor.lineHighlightBackground'];
    }
  }
  generateFiddleCode(data) {
    //console.log("generateFiddleCode data.isConsoleOn: ", this.isConsoleOn);
    let htmlCode = data.html ? data.html : "";
    let cssCode = data.css ? data.css : "";
    let jsCode = `
      <script id="fiddle-security">
      if(window.self === window.top){
        document.head.innerHTML = "<meta charset='utf-8'>";
        document.body.innerHTML = "<h1>Running this web page directly is forbidden, good day.</h1>";
      }
      document.querySelector("script#fiddle-security").remove();
      </script>

      <script>
      window.isConsoleOn = ${this.isConsoleOn};
      window.currentTheme = ${JSON.stringify(this.selectedTheme.data)};
      </script>

      <script>
        \n\n ${data.js}\n\n  

      </script>
      `;
    let html = `
    <!DOCTYPE html>
    <html>
        <head>
        </head>
        <body> 
            ${htmlCode}

            <script>
		  	    window.onerror = function(e) {
		  	    	window.detectedError = e;
		  	    };
		        </script>

            ${jsCode}

            <style>
            ${cssCode}
            </style>
        </body>
    </html>`;
    return html;
  }
  retrieveCodePartsCursors(cssPart, htmlPart, jsPart, blink) {
    if (cssPart) {
      //retrieve css code part focus and cursor position
      console.log("called //cssPart.aceEditor.focus()");
      let noSelection = this.cssCodePositionData.aceRanges.length == this.cssCodePositionData.aceRanges.filter(el => {
        return el.start.column == el.end.column && el.start.row == el.start.row;
      }).length;
      ////cssPart.aceEditor.selection.setRange(this.cssCodePositionData.aceRanges[0]);
      let upMostSelection = this.cssCodePositionData.aceRanges.sort((el1, el2) => {
        return el1.start.row - el2.start.row;
      })[0];
      let upMostRow = upMostSelection.start.row;
      this.cssCodePositionData.aceRanges.forEach(el => {
        //cssPart.aceEditor.selection.addRange(new AceAjax.Range(el.start.row, el.start.column, el.end.row, el.end.column));
      });
      ////cssPart.aceEditor.moveCursorTo(upMostSelection.start.row, upMostSelection.start.column);
      if (noSelection) {
        if (this.cssCodePositionData.focus) {
          //cssPart.aceEditor.focus();
        }
        //cssPart.aceEditor.moveCursorTo(this.cssCodePositionData.row, this.cssCodePositionData.column);
      } else if (blink) {
        document.querySelector("app-css-part .custom-layer-marker").classList.add("show");
        setTimeout(() => {
          document.querySelector("app-css-part .custom-layer-marker").classList.remove("show");
        }, 1500);
      }
      //cssPart.aceEditor.scrollToRow();
    }
    if (jsPart) {
      //retrieve js code part focus and cursor position
      console.log("called //jsPart.aceEditor.focus()");
      let noSelection = this.jsCodePositionData.aceRanges.length == this.jsCodePositionData.aceRanges.filter(el => {
        return el.start.column == el.end.column && el.start.row == el.start.row;
      }).length;
      ////jsPart.aceEditor.selection.setRange(this.jsCodePositionData.aceRanges[0]);
      let upMostSelection = this.jsCodePositionData.aceRanges.sort((el1, el2) => {
        return el1.start.row - el2.start.row;
      })[0];
      let upMostRow = upMostSelection.start.row;
      this.jsCodePositionData.aceRanges.forEach(el => {
        //jsPart.aceEditor.selection.addRange(new AceAjax.Range(el.start.row, el.start.column, el.end.row, el.end.column));
      });
      ////jsPart.aceEditor.moveCursorTo(upMostSelection.start.row, upMostSelection.start.column);
      if (noSelection) {
        if (this.jsCodePositionData.focus) {
          //jsPart.aceEditor.focus();
        }
        //jsPart.aceEditor.moveCursorTo(this.jsCodePositionData.row, this.jsCodePositionData.column);
      } else if (blink) {
        document.querySelector("app-js-part .custom-layer-marker").classList.add("show");
        setTimeout(() => {
          document.querySelector("app-js-part .custom-layer-marker").classList.remove("show");
        }, 1500);
      }
      //jsPart.aceEditor.scrollToRow();
    }
    if (htmlPart) {
      //retrieve html code part focus and cursor position
      console.log("called htmlPart.aceEditor.focus()");
      let noSelection = this.htmlCodePositionData.aceRanges.length == this.htmlCodePositionData.aceRanges.filter(el => {
        return el.start.column == el.end.column && el.start.row == el.start.row;
      }).length;
      //htmlPart.aceEditor.selection.setRange(this.htmlCodePositionData.aceRanges[0]);
      let upMostSelection = this.htmlCodePositionData.aceRanges.sort((el1, el2) => {
        return el1.start.row - el2.start.row;
      })[0];
      let upMostRow = upMostSelection.start.row;
      this.htmlCodePositionData.aceRanges.forEach(el => {
        //htmlPart.aceEditor.selection.addRange(new AceAjax.Range(el.start.row, el.start.column, el.end.row, el.end.column));
      });
      //htmlPart.aceEditor.moveCursorTo(upMostSelection.start.row, upMostSelection.start.column);
      if (noSelection) {
        console.log("NO SELECTION !");
        if (this.htmlCodePositionData.focus) {
          //htmlPart.aceEditor.focus();
        }
        //htmlPart.aceEditor.moveCursorTo(this.htmlCodePositionData.row, this.htmlCodePositionData.column);
      } else if (blink) {
        document.querySelector("app-html-part .custom-layer-marker").classList.add("show");
        setTimeout(() => {
          document.querySelector("app-html-part .custom-layer-marker").classList.remove("show");
        }, 1500);
      }
      //htmlPart.aceEditor.scrollToRow();
      console.log("htmlCodePositionData = ", this.htmlCodePositionData);
    }
  }
  getFiddlesList(page) {
    //console.log("getFiddle fiddleId = ",fiddleId);
    let self = this;
    let str;
    if (location.origin == "https://ghanhass.github.io") {
      str = page ? "&page=" + page : "";
      let promise = new Promise((resolve, reject) => {
        let gitlabRawSnippetUrl = `https://gitlab.com/api/v4/projects/${gitlabProjectId}/snippets?per_page=30` + str;
        this.http.get(gitlabRawSnippetUrl, {
          headers: headers
        }).subscribe({
          next: res2 => {
            let result = res2;
            resolve(result);
          },
          error: error2 => {
            resolve({
              status: "not found"
            });
          }
        });
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(promise);
    } else {
      str = page ? "&_page=" + page : "";
      return this.http.get("http://localhost:3000/gists?per_page=30" + str);
    }
  }
  getFiddle(fiddleId) {
    //console.log("getFiddle fiddleId = ",fiddleId);
    let self = this;
    if (location.origin == "https://ghanhass.github.io") {
      let promise = new Promise((resolve, reject) => {
        let gitlabRawSnippetUrl = `https://gitlab.com/api/v4/projects/${gitlabProjectId}/snippets/${fiddleId}/raw`;
        this.http.get(gitlabRawSnippetUrl, {
          headers: headers
        }).subscribe({
          next: res2 => {
            let result;
            if (res2.hasOwnProperty("css") && res2.hasOwnProperty("js") && res2.hasOwnProperty("html")) {
              result = {
                status: "ok",
                fiddleData: res2
              };
            } else {
              result = {
                status: "not found"
              };
            }
            resolve(result);
          },
          error: error2 => {
            resolve({
              status: "not found"
            });
          }
        });
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(promise);
    } else {
      return this.http.get("http://localhost:3000/gists?id=" + fiddleId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(value => {
        if (value.length) {
          return {
            status: "ok",
            fiddleData: value[0]
          };
        } else {
          return {
            status: "not found"
          };
        }
      }));
    }
  }
  saveFiddle(fiddleData) {
    //let html = this.generateFiddleCode(fiddleData);
    let self = this;
    if (location.origin == "https://ghanhass.github.io") {
      let timeStamp = new Date().getTime();
      let body = {
        file_name: fiddleData.appmode + "_" + timeStamp,
        title: fiddleData.title ? fiddleData.title : "Noname",
        visibility: "public",
        "content": JSON.stringify(fiddleData),
        "file_path": timeStamp
      };
      let newSnippetRawUrl;
      let newFiddleId;
      let promise = new Promise((resolve, reject) => {
        this.http.post("https://gitlab.com/api/v4/projects/52190204/snippets", body, {
          headers: headers
        }).subscribe({
          next: res1 => {
            //console.log("res1 = ", res1);
            newSnippetRawUrl = `https://gitlab.com/api/v4/projects/${gitlabProjectId}/snippets/${res1.id}/raw`;
            newFiddleId = res1.id;
            resolve(newFiddleId);
          },
          error: err1 => {
            reject(err1);
          }
        });
      });
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(promise);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(new Promise((resolve, reject) => {
        this.http.get("http://localhost:3000/gists?_sort=id&_order=desc&_limit=1").subscribe(res => {
          let newId;
          if (res.length) {
            let lastId = res[0].id;
            newId = lastId + 1;
          } else {
            newId = 1;
          }
          fiddleData.id = newId;
          this.http.post("http://localhost:3000/gists", fiddleData).subscribe(res2 => {
            resolve(newId);
          });
        }, error => {
          reject(-1);
        });
      }));
    }
  }
  static {
    this.ɵfac = function MainService_Factory(t) {
      return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: MainService,
      factory: MainService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3944:
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainComponent: () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ 6592);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 6371);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _html_part_html_part_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html-part/html-part.component */ 5420);
/* harmony import */ var _css_part_css_part_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css-part/css-part.component */ 7292);
/* harmony import */ var _js_part_js_part_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js-part/js-part.component */ 9976);
/* harmony import */ var _iframe_part_iframe_part_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../iframe-part/iframe-part.component */ 1284);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loader/loader.component */ 7220);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal.component */ 6388);
/* harmony import */ var _ressources_ressources_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ressources/ressources.component */ 1514);
/* harmony import */ var _fiddles_history_fiddles_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fiddles-history/fiddles-history.component */ 4872);
/* harmony import */ var _pastebin_pastebin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pastebin/pastebin.component */ 1806);
















const _c0 = ["mainContainer"];
const _c1 = ["codePartsArea"];
const _c2 = ["htmlPart"];
const _c3 = ["cssPart"];
const _c4 = ["jsPart"];
const _c5 = ["pastebinPart"];
const _c6 = ["iframePart"];
const _c7 = ["layout1"];
const _c8 = ["layout2"];
const _c9 = ["layout3"];
const _c10 = ["layoutsList"];
const _c11 = ["modal"];
const _c12 = ["modalHistory"];
const _c13 = ["ressources"];
const _c14 = ["loader"];
const _c15 = ["customGutter1"];
const _c16 = ["customGutter2"];
const _c17 = ["htmlCssGutter"];
const _c18 = ["emptyArea1"];
const _c19 = ["emptyArea2"];
const _c20 = ["appFiddlesHistory"];
const _c21 = a0 => ({
  display: a0
});
const _c22 = a0 => ({
  "background-image": a0
});
const _c23 = a0 => ({
  "off": a0
});
const _c24 = (a0, a1) => ({
  "full-screen-iframe": a0,
  "off": a1
});
const _c25 = a0 => ({
  "active": a0
});
const _c26 = (a0, a1, a2) => ({
  "no-result-mobile": a0,
  "no-code-mobile": a1,
  "is-dark-mode": a2
});
const _c27 = a0 => ({
  "flex-basis": a0
});
const _c28 = a0 => ({
  "hide-mobile": a0
});
const _c29 = (a0, a1, a2) => ({
  "hide-mobile": a0,
  "fullscreen": a1,
  "vertical-title-mode": a2
});
const _c30 = a0 => ({
  "display": a0
});
const _c31 = a0 => ({
  "vertical": a0
});
const _c32 = a0 => ({
  "vertical-title-mode": a0
});
const _c33 = a0 => ({
  "on": a0
});
const _c34 = (a0, a1, a2) => ({
  "hide-mobile": a0,
  "is-vertical": a1,
  "is-horizontal": a2
});
const _c35 = a0 => ({
  "is-dark-mode": a0
});
const _c36 = a0 => ({
  "flex": a0
});
const _c37 = (a0, a1, a2) => ({
  "is-dark-mode": a0,
  "is-vertical": a1,
  "is-horizontal": a2
});
const _c38 = (a0, a1, a2, a3, a4) => ({
  "hide-mobile": a0,
  "layout-type-1": a1,
  "layout-type-2": a2,
  "layout-type-3": a3,
  "layout-type-4": a4
});
const _c39 = (a0, a1) => ({
  "shown": a0,
  "hidden": a1
});
function MainComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 106)(1, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function MainComponent_div_7_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r2.iframeWidth, $event) || (ctx_r2.iframeWidth = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function MainComponent_div_7_Template_input_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.onFiddleWidthChange($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function MainComponent_div_7_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx_r2.iframeHeight, $event) || (ctx_r2.iframeHeight = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function MainComponent_div_7_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.onFiddeHeightChange($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.iframeWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r2.isFiddleWidthInputDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.iframeHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx_r2.isFiddleHeightInputDisabled);
  }
}
function MainComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.toggleIframeFullscreen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Turn on fullscreen view");
  }
}
function MainComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.stretchVertically());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Stretch view vertically");
  }
}
function MainComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.stretchHorizontally());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Stretch view horizontally");
  }
}
function MainComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.prettifyMobileCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function MainComponent_i_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 116);
  }
}
function MainComponent_i_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 117);
  }
}
function MainComponent_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.ressouresBtnClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function MainComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_div_25_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.toggleLayoutsList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 120)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Layouts");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 121)(5, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 123, 21)(8, "div", 124, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_div_25_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.changeLayout(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "div")(12, "div")(13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 125, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_div_25_Template_div_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.changeLayout(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "div")(19, "div")(20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 126, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_div_25_Template_div_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.changeLayout(3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](25, "div")(26, "div")(27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 127, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_div_25_Template_div_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.changeLayout(4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](32, "div")(33, "div")(34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](5, _c39, ctx_r2.isLayoutsListShown, !ctx_r2.isLayoutsListShown));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](8, _c25, ctx_r2.layout === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](10, _c25, ctx_r2.layout === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](12, _c25, ctx_r2.layout === 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](14, _c25, ctx_r2.layout === 4));
  }
}
function MainComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.runCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Run");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function MainComponent_i_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "i", 111)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "/2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function MainComponent_i_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "i", 113)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "/2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function MainComponent_span_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function MainComponent_i_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 111);
  }
}
function MainComponent_i_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 113);
  }
}
function MainComponent_i_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "i", 111)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "/2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function MainComponent_i_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "i", 113)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "/2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function MainComponent_span_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function MainComponent_i_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 111);
  }
}
function MainComponent_i_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 113);
  }
}
function MainComponent_i_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "i", 111)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "/2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function MainComponent_i_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "i", 113)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "/2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function MainComponent_span_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}
function MainComponent_i_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 111);
  }
}
function MainComponent_i_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "i", 113);
  }
}
class MainComponent {
  onAppModeClick() {
    this.appMode = this.appMode == 'pastebin' ? 'fiddle' : 'pastebin';
    this.mainService.appMode = this.appMode;
  }
  constructor(mainService, activatedRoute, toastrService, ref) {
    this.mainService = mainService;
    this.activatedRoute = activatedRoute;
    this.toastrService = toastrService;
    this.ref = ref;
    this.showHtml = true;
    this.showCss = false;
    this.showJs = false;
    this.showResult = true;
    this.showConsole = false;
    this.showIframeOverlay = false;
    this.isHtmlFullScreen = false;
    this.isCssFullScreen = false;
    this.isJsFullScreen = false;
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
    this.codePartStretchState = {
      state: false,
      index: -1
    };
    this.isLayoutsListShown = false;
    this.isThemesListShown = false;
    this.layout = 1;
    this.fiddleTitle = "";
    this.finalHtmlCodePartSize = 0;
    this.finalCssCodePartSize = 0;
    this.finalJsCodePartSize = 0;
    this.finalCodePartSize = 0;
    this.mainContainerWidth = 0;
    this.mainContainerHeight = 0;
    this.IsAfterViewInitReached = false;
    this.canCallReAdaptCodePartsSizes = true;
    this.emptyArea_1_Size = 0;
    this.emptyArea_2_Size = 0;
    this.isCustomGutter1_dragging = false;
    this.isCustomGutter2_dragging = false;
    this.isMainContainerGutter_dragging = false;
    this.isGutter1_dragging = false;
    this.isGutter2_dragging = false;
    this.isIframeFullScreen = false;
    this.mouseDownXorY = 0;
    this.isFiddleWidthInputDisabled = false;
    this.isFiddleHeightInputDisabled = false;
    this.codeParthHalfStretchFirstIndex = 0;
    this.isConsoleOn = false;
    this.appMode = this.mainService.appMode;
  }
  ngOnInit() {}
  ngAfterViewInit() {
    if (window.PayPal && window.PayPal.Donation) {
      window.PayPal.Donation.Button({
        env: 'production',
        hosted_button_id: 'V8U6U69Y6BLQ6',
        image: {
          src: 'https://pics.paypal.com/00/s/ZGFkMWU1YzMtOGFiOS00OGFhLWFjMjEtMDkzMWU4YWE4M2Vm/file.PNG',
          alt: 'Donate with PayPal button',
          title: 'Donate to MyFiddle'
        }
      }).render('#donate-button');
    }
    //
    let self = this;
    this.IsAfterViewInitReached = true;
    let mainContainerEl = this.mainContainer.nativeElement;
    this.mainContainerWidth = mainContainerEl.offsetWidth;
    this.mainContainerHeight = mainContainerEl.offsetHeight;
    this.activatedRoute.paramMap.subscribe(params => {
      let currentFiddleId = +params.get("id");
      if (this.modalHistory.isShown) {
        this.hideHistoryModal();
      }
      //data retrieval
      if (currentFiddleId && !isNaN(currentFiddleId)) {
        if (this.mainService.redirectAfterSaveMode) {
          //re-retrieve data after recent save ?
          console.log("//re-retrieve data after recent save");
          //console.log("re-retrieve data after recent save ", this.mainService.htmlCode);
          this.htmlPart.code = this.mainService.htmlCode;
          this.cssPart.code = this.mainService.cssCode;
          this.jsPart.code = this.mainService.jsCode;
          this.pastebinPart.text = this.mainService.pastebinText;
          this.appMode = this.mainService.appMode;
          this.fiddleTitle = this.mainService.fiddleTitle;
          this.showHtml = this.mainService.showHtml;
          this.showCss = this.mainService.showCss;
          this.showJs = this.mainService.showJs;
          this.showResult = this.mainService.showResult;
          let obj = {
            css_part_size: this.mainService.cssCodePartSize,
            js_part_size: this.mainService.jsCodePartSize,
            html_part_size: this.mainService.htmlCodePartSize,
            main_container_width: this.mainService.mainContainerWidth,
            main_container_height: this.mainService.mainContainerHeight,
            code_parts_size: this.mainService.codePartsSize,
            layout: this.mainService.layout,
            iframe_resize_value: this.mainService.iframeResizeValue,
            css_code_position_data: this.mainService.cssCodePositionData,
            html_code_position_data: this.mainService.htmlCodePositionData,
            js_code_position_data: this.mainService.jsCodePositionData,
            is_mobile_mode: this.mainService.isMobileMode,
            created_at: this.mainService.fiddleCreatedAt
          };
          this.changeLayout(this.mainService.layout, obj);
          self.mainService.redirectAfterSaveMode = false;
          //console.log("after router path change");
          if (this.mainService.scheduledRunFiddle) {
            this.runCode();
          }
          this.mainService.isFirstTimeFiddle = false;
        } else {
          //retrieve data from backend ?
          console.log("//retrieve data from backend");
          this.loader.showLoader();
          this.mainService.getFiddle(currentFiddleId).subscribe(res => {
            //console.log("getFiddle res = ", res);
            if (res.status == "ok") {
              let fiddleData = res.fiddleData;
              //console.log("getFiddle obj = ", obj);
              this.htmlPart.code = fiddleData.html;
              this.cssPart.code = fiddleData.css;
              this.jsPart.code = fiddleData.js;
              this.pastebinPart.text = fiddleData.pastebintext;
              this.fiddleTitle = fiddleData.title;
              //
              this.mainService.jsCode = fiddleData.js;
              this.mainService.htmlCode = fiddleData.html;
              this.mainService.cssCode = fiddleData.css;
              this.mainService.fiddleTitle = fiddleData.title;
              this.mainService.iframeResizeValue = fiddleData.iframe_resize_value;
              this.mainService.cssCodePositionData = fiddleData.css_code_position_data;
              this.mainService.htmlCodePositionData = fiddleData.html_code_position_data;
              this.mainService.jsCodePositionData = fiddleData.js_code_position_data;
              this.mainService.isMobileMode = fiddleData.is_mobile_mode;
              this.appMode = fiddleData.appmode || 'fiddle';
              if (this.mainService.isMobileMode) {
                this.changeLayout(1);
                //START mobile layout retrieval
                let mobileLayoutArr = fiddleData.mobile_layout.split(':');
                let mobileCodePart = mobileLayoutArr[0];
                let mobileResult = mobileLayoutArr[1];
                switch (true) {
                  case mobileCodePart == '0':
                    this.showHtml = false;
                    this.showCss = false;
                    this.showJs = false;
                    break;
                  case mobileCodePart == '1':
                    this.showHtml = true;
                    this.showCss = false;
                    this.showJs = false;
                    break;
                  case mobileCodePart == '2':
                    this.showHtml = false;
                    this.showCss = true;
                    this.showJs = false;
                    break;
                  case mobileCodePart == '3':
                    this.showHtml = false;
                    this.showCss = false;
                    this.showJs = true;
                    break;
                }
                if (mobileResult == "0") {
                  this.showResult = false;
                } else if (mobileResult == "1") {
                  this.showResult = true;
                }
                this.mainService.showHtml = this.showHtml;
                this.mainService.showCss = this.showCss;
                this.mainService.showJs = this.showJs;
                this.mainService.showResult = this.showResult;
                //END mobile layout retrieval
              } else {
                this.changeLayout(fiddleData.layout, fiddleData);
              }
              this.mainService.scheduledRunFiddle = true;
              this.runCode();
            } else if (res.status == "not found") {
              this.toastrService.warning("Fiddle not found.");
              this.changeLayout(1);
              this.loader.hideLoader();
            }
          });
          this.mainService.isFirstTimeFiddle = false;
        }
      } else {
        this.changeLayout(1);
      }
      this.mainService.resumeFiddleTheme(this.htmlPart, this.cssPart, this.jsPart, this.pastebinPart);
    });
    this.setMainServiceCodepartSizes();
    window.addEventListener("keydown", function (event) {
      //console.log("vanilla keydown");
      if ((window.navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey) && event.code == "KeyS") {
        event.preventDefault();
        event.stopPropagation();
      }
      let evDate = new Date();
      if ((window.navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey) && (event.code == "Enter" || event.code == "NumpadEnter")) {
        event.preventDefault();
        //event.stopPropagation();
        self.runCode();
      } else if ((window.navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey) && event.code == "KeyS") {
        event.preventDefault();
        //event.stopPropagation();
        if (self.mainService.codeSavingDate === undefined || evDate.getTime() - self.mainService.codeSavingDate.getTime() >= 1500) {
          //self.runCode("save");
          document.querySelector(".share-code-btn.btn").click(); //meh a workaround for calling runCode("save")
          self.mainService.codeSavingDate = evDate;
        }
      }
    });
  }
  switchToPastebin() {}
  switchToFiddle() {}
  isConsoleOnUpdate(newValue) {
    this.isConsoleOn = newValue;
  }
  /**
   * Checks if the current theme is dark
   * @returns boolean: true if the current theme is dark or false otherwise
   */
  isFiddleThemeDark() {
    //return this.mainService.isFiddleThemeDark;
    let isThemeDark = this.mainService.selectedTheme ? this.mainService.selectedTheme.data.base == "vs-dark" : false;
    return isThemeDark;
  }
  prettifyCode(type) {
    /*
    switch(type){
      case 'html':
      let prettifiedHtml = this.ngxPrettifyService.prettify(this.mainService.htmlCode.trim());
      this.htmlPart.code = prettifiedHtml;
      break;
           case 'css':
        let alteredCss: string = "<style>"+this.mainService.cssCode+"</style>";
        let prettifiedCss: string = this.ngxPrettifyService.prettify(alteredCss, "css");
        let indStyle = prettifiedCss.lastIndexOf("</style>");
        prettifiedCss = prettifiedCss.slice(7,indStyle).trim();
        this.cssPart.code = prettifiedCss;
      break;
           case 'js':
        let alternateJs: string = "<script>"+this.mainService.jsCode+"</script>";
        let prettifiedJs: string = this.ngxPrettifyService.prettify(alternateJs, "javascript");
        let indScript = prettifiedJs.lastIndexOf("</script>");
        prettifiedJs = prettifiedJs.slice(8,indScript).trim();
        this.jsPart.code = prettifiedJs;
      break;
    }
    */
  }
  selectTheme(theme) {
    if (theme.id != this.mainService.selectedTheme.id) {
      this.mainService.selectedTheme = theme;
      localStorage.setItem("myfiddle-theme", theme.id);
      this.mainService.addThemeStylesheet(theme);
      this.isThemesListShown = false;
    }
  }
  getIframeOrHeaderStyleObject(param) {
    let iframeHeaderStyleObject = {
      'display': param == 'header' ? this.isIframeFullScreen ? '' : 'none' : '',
      'background-color': this.mainService.selectedTheme.data.colors["editor.background"],
      'color': this.mainService.selectedTheme.data.colors["editor.foreground"],
      'border-bottom': param == 'header' ? '1px solid ' + this.mainService.selectedTheme.data.colors["editor.selectionBackground"] : '',
      'flex': param == 'iframe' ? '0 0 ' + this.getIframeAreaSize() : ''
    };
    return iframeHeaderStyleObject;
  }
  getThemesList() {
    return this.mainService.themesList;
  }
  calculateIframeSize(mainContainerEl, sizes) {
    let self = this;
    setTimeout(() => {
      let refElement = mainContainerEl || self.mainContainer.nativeElement || document.documentElement;
      if (sizes !== undefined) {
        self.iframeHeight = sizes.height;
        self.iframeWidth = sizes.width;
      } else {
        self.iframeHeight = refElement.querySelector(".as-split-area-iframe iframe").offsetHeight;
        self.iframeWidth = refElement.querySelector(".as-split-area-iframe iframe").offsetWidth;
      }
      //console.log("self.iframeWidth = ", self.iframeWidth);
      //console.log("self.iframeHeight = ", self.iframeHeight);
    }, 1);
  }
  setMainServiceCodepartSizes() {
    this.mainService.htmlCodePartSize = this.finalHtmlCodePartSize;
    this.mainService.cssCodePartSize = this.finalCssCodePartSize;
    this.mainService.jsCodePartSize = this.finalJsCodePartSize;
    let mainContainerEl = this.mainContainer.nativeElement;
    if (mainContainerEl) {
      this.mainService.mainContainerHeight = mainContainerEl.offsetHeight;
      this.mainService.mainContainerWidth = mainContainerEl.offsetWidth;
    }
    this.mainService.layout = this.layout;
    this.mainService.codePartsSize = this.finalCodePartSize;
  }
  changeLayout(newLayout, param) {
    let self = this;
    this.layout = newLayout;
    this.mainService.layout = newLayout;
    let mainContainerEl = this.mainContainer.nativeElement;
    if (mainContainerEl) {
      window.setTimeout(() => {
        self.mainContainerHeight = mainContainerEl.offsetHeight;
        self.mainContainerWidth = mainContainerEl.offsetWidth;
        if (param !== undefined && param !== null) {
          //backend data retrieval
          self.getAndAdaptSavedCodePartsSizes(param);
          this.onWindowResize();
        } else {
          //new fiddle
          self.emptyArea_1_Size = 0;
          self.emptyArea_2_Size = 0;
          self.mainService.iframeResizeValue = parseInt(self.getIframeAreaSize());
          switch (self.layout) {
            case 1:
              this.finalCodePartSize = 350;
              this.finalHtmlCodePartSize = this.mainContainerHeight / 3 + 5;
              this.finalCssCodePartSize = this.mainContainerHeight / 3 + 5;
              this.finalJsCodePartSize = this.mainContainerHeight / 3;
              //console.log("self.mainContainerHeight = ", self.mainContainerHeight);
              break;
            case 2:
              this.finalCodePartSize = 350;
              this.finalHtmlCodePartSize = this.mainContainerWidth / 3 + 5;
              this.finalCssCodePartSize = this.mainContainerWidth / 3 + 5;
              this.finalJsCodePartSize = this.mainContainerWidth / 3;
              break;
            case 3:
              this.finalCodePartSize = 350;
              this.finalHtmlCodePartSize = this.mainContainerHeight / 3 + 5;
              this.finalCssCodePartSize = this.mainContainerHeight / 3 + 5;
              this.finalJsCodePartSize = this.mainContainerHeight / 3;
              break;
            case 4:
              this.finalCodePartSize = 350;
              this.finalHtmlCodePartSize = this.mainContainerWidth / 3 + 5;
              this.finalCssCodePartSize = this.mainContainerWidth / 3 + 5;
              this.finalJsCodePartSize = this.mainContainerWidth / 3;
              break;
          }
        }
        self.calculateIframeSize(mainContainerEl);
        self.setMainServiceCodepartSizes();
      });
    }
  }
  getAndAdaptSavedCodePartsSizes(param) {
    let savedLayout = param.layout;
    let savedCssCodePartSize = param.css_part_size;
    let savedJsCodePartSize = param.js_part_size;
    let savedHtmlCodePartSize = param.html_part_size;
    let savedMainContainerWidth = param.main_container_width;
    let savedMainContainerHeight = param.main_container_height;
    let savedIframeResizeValue = param.iframe_resize_value;
    let savedMainContainerSize;
    let savedMainContainerSize2;
    let savedCodePartsSize = param.code_parts_size;
    let mainContainerEl = this.mainContainer.nativeElement;
    let currentMainContainerSize;
    let currentMainContainerSize2;
    let codePartsMinLimit;
    if (savedLayout == 1 || savedLayout == 3) {
      currentMainContainerSize = mainContainerEl.offsetHeight;
      savedMainContainerSize = savedMainContainerHeight;
      currentMainContainerSize2 = mainContainerEl.offsetWidth;
      savedMainContainerSize2 = savedMainContainerWidth;
      codePartsMinLimit = 350;
    } else if (savedLayout == 2 || savedLayout == 4) {
      currentMainContainerSize = mainContainerEl.offsetWidth;
      savedMainContainerSize = savedMainContainerWidth;
      currentMainContainerSize2 = mainContainerEl.offsetHeight;
      savedMainContainerSize2 = savedMainContainerHeight;
      codePartsMinLimit = 350;
    }
    //console.log("savedMainContainerSize = ", savedMainContainerSize);
    if (savedIframeResizeValue > currentMainContainerSize - 10 || savedIframeResizeValue == savedMainContainerSize - 10) {
      //custom glutters stretched ?
      //console.log("aaa");
      this.emptyArea_1_Size = 0;
      this.emptyArea_2_Size = 0;
    } else if (savedIframeResizeValue < 0) {
      //custom glutters in contact ?
      //console.log("bbb");
      this.emptyArea_1_Size = currentMainContainerSize / 2 - 5;
      this.emptyArea_2_Size = currentMainContainerSize / 2 - 5;
    } else {
      //retrieve custom glutter positions
      //console.log("ccc");
      this.emptyArea_1_Size = (currentMainContainerSize - savedIframeResizeValue) / 2 - 5;
      this.emptyArea_2_Size = (currentMainContainerSize - savedIframeResizeValue) / 2 - 5;
    }
    this.mainService.iframeResizeValue = parseInt(this.getIframeAreaSize());
    let sizes = [savedHtmlCodePartSize, savedCssCodePartSize, savedJsCodePartSize];
    //console.log("param.data = ", param.data);
    this.reAdaptCodePartsSizes(sizes, currentMainContainerSize - 10, "inner", savedMainContainerSize);
    /****************************************/
    /*START readapt saved sizes to new window size*/
    let ind;
    if (savedLayout == 1 || savedLayout == 2) {
      sizes = [savedCodePartsSize, "*"];
      ind = 0;
    } else if (savedLayout == 3 || savedLayout == 4) {
      sizes = ['*', savedCodePartsSize];
      ind = 1;
    }
    if (savedMainContainerSize > currentMainContainerSize2) {
      //main container size is shrinked ?
      let coef = savedMainContainerSize2 / currentMainContainerSize2;
      sizes[ind] = sizes[ind] / coef > codePartsMinLimit ? sizes[ind] / coef : codePartsMinLimit;
    } else if (savedMainContainerSize2 < currentMainContainerSize2) {
      //main container size got bigger ?
      let coef = currentMainContainerSize2 / savedMainContainerSize2;
      sizes[ind] = sizes[ind] * coef;
    }
    this.reAdaptCodePartsSizes(sizes, currentMainContainerSize2 - 5, "outer", savedMainContainerSize2);
    this.finalCodePartSize = Math.floor(sizes[ind]);
    /*END readapt saved sizes to new window size*/
  }
  getLayoutInfos(name) {
    switch (name) {
      case "htmlAsSplitAreaSize":
        return this.finalHtmlCodePartSize + "px";
        ;
      case "cssAsSplitAreaSize":
        return this.finalCssCodePartSize + "px";
      case "jsAsSplitAreaSize":
        return this.finalJsCodePartSize + "px";
        ;
      case "codePartsAsSplitAreaSize":
        return this.finalCodePartSize + "px";
        ;
    }
    switch (this.layout) {
      case 1:
        switch (name) {
          case "outerAsSplitDirection":
            return "horizontal";
          case "outerAsSplitUnit":
            return "pixel";
          case "codePartsAsSplitAreaOrder":
            return 1;
          case "iframeAsSplitAreaOrder":
            return 2;
          case "codePartsAsSplitAreaMinSize":
            return 350;
          case "innerAsSplitDirection":
            return 'vertical';
          case "innerAsSplitUnit":
            return 'pixel';
          case "emptyAsSplitAreaMinSize":
            return 10;
          case "emptyAsSplitAreaSize":
            return 10;
          case "emptyAsSplitAreaMaxSize":
            return 10;
          case "htmlAsSplitAreaMinSize":
            return 25;
          case "cssAsSplitAreaMinSize":
            return 25;
          case "jsAsSplitAreaMinSize":
            return 25;
          //case "iframeAsSplitAreaMinSize":
          //return 350;
          case "iframeAsSplitAreaSize":
            return "*";
          case "iframeResizer":
            return "vertical";
        }
        break;
      case 2:
        switch (name) {
          case "outerAsSplitDirection":
            return "vertical";
          case "outerAsSplitUnit":
            return "pixel";
          case "codePartsAsSplitAreaOrder":
            return 1;
          case "iframeAsSplitAreaOrder":
            return 2;
          case "codePartsAsSplitAreaMinSize":
            return 350;
          case "innerAsSplitDirection":
            return 'horizontal';
          case "innerAsSplitUnit":
            return 'pixel';
          case "emptyAsSplitAreaMinSize":
            return 10;
          case "emptyAsSplitAreaSize":
            return 10;
          case "emptyAsSplitAreaMaxSize":
            return 10;
          case "htmlAsSplitAreaMinSize":
            return 25;
          case "cssAsSplitAreaMinSize":
            return 25;
          case "jsAsSplitAreaMinSize":
            return 25;
          //case "iframeAsSplitAreaMinSize":
          //return 350;
          case "iframeAsSplitAreaSize":
            return "*";
          case "iframeResizer":
            return "horizontal";
        }
        break;
      case 3:
        switch (name) {
          case "outerAsSplitDirection":
            return "horizontal";
          case "outerAsSplitUnit":
            return "pixel";
          case "codePartsAsSplitAreaOrder":
            return 2;
          case "iframeAsSplitAreaOrder":
            return 1;
          case "codePartsAsSplitAreaMinSize":
            return 350;
          case "innerAsSplitDirection":
            return 'vertical';
          case "innerAsSplitUnit":
            return 'pixel';
          case "emptyAsSplitAreaMinSize":
            return 10;
          case "emptyAsSplitAreaSize":
            return 10;
          case "emptyAsSplitAreaMaxSize":
            return 10;
          case "htmlAsSplitAreaMinSize":
            return 25;
          case "cssAsSplitAreaMinSize":
            return 25;
          case "jsAsSplitAreaMinSize":
            return 25;
          //case "iframeAsSplitAreaMinSize":
          //return 350;
          case "iframeAsSplitAreaSize":
            return "*";
          case "iframeResizer":
            return "vertical";
        }
        break;
      case 4:
        switch (name) {
          case "outerAsSplitDirection":
            return "vertical";
          case "outerAsSplitUnit":
            return "pixel";
          case "codePartsAsSplitAreaOrder":
            return 2;
          case "iframeAsSplitAreaOrder":
            return 1;
          case "codePartsAsSplitAreaMinSize":
            return 350;
          case "innerAsSplitDirection":
            return 'horizontal';
          case "innerAsSplitUnit":
            return 'pixel';
          case "emptyAsSplitAreaMinSize":
            return 10;
          case "emptyAsSplitAreaSize":
            return 10;
          case "emptyAsSplitAreaMaxSize":
            return 10;
          case "htmlAsSplitAreaMinSize":
            return 25;
          case "cssAsSplitAreaMinSize":
            return 25;
          case "jsAsSplitAreaMinSize":
            return 25;
          //case "iframeAsSplitAreaMinSize":
          //return 350;
          case "iframeAsSplitAreaSize":
            return "*";
          case "iframeResizer":
            return "horizontal";
        }
        break;
    }
  }
  toggleLayoutsList() {
    let layout1Element = this.layout1.nativeElement;
    if (layout1Element) {
      let layout1Height = layout1Element.offsetHeight;
      let layoutsListElement = this.layoutsList.nativeElement;
      if (layoutsListElement) {
        this.isLayoutsListShown = !this.isLayoutsListShown;
      }
      //console.log("layout1Element.offsetHeight = ", layout1Element.offsetHeight)
    }
  }
  changeTheme() {
    let isLightTeme = !this.isFiddleThemeDark();
    let ind = isLightTeme ? 1 : 0;
    if (ind === 0) {
      this.htmlPart.codeMirrorOptions.theme = "xq-light";
      this.cssPart.codeMirrorOptions.theme = "xq-light";
      this.jsPart.codeMirrorOptions.theme = "xq-light";
      this.pastebinPart.codeMirrorOptions.theme = "xq-light";
    } else {
      this.htmlPart.codeMirrorOptions.theme = "material-darker";
      this.cssPart.codeMirrorOptions.theme = "material-darker";
      this.jsPart.codeMirrorOptions.theme = "material-darker";
      this.pastebinPart.codeMirrorOptions.theme = "material-darker";
    }
    this.selectTheme(this.mainService.themesList[ind]);
    this.iframePart.changeConsoleTheme();
  }
  toggleFullScreenMode(mode) {
    switch (mode) {
      case 'html':
        this.isHtmlFullScreen = !this.isHtmlFullScreen;
        break;
      case 'css':
        this.isCssFullScreen = !this.isCssFullScreen;
        break;
      case 'js':
        this.isJsFullScreen = !this.isJsFullScreen;
        break;
    }
  }
  toggleIframeFullscreen() {
    this.isIframeFullScreen = !this.isIframeFullScreen;
  }
  stretchVertically() {
    if (this.layout == 1 || this.layout == 3) {
      this.emptyArea_1_Size = 0;
      this.emptyArea_2_Size = 0;
      this.mainService.iframeResizeValue = this.mainContainerWidth - 10;
    } else {
      this.finalCodePartSize = 350;
      this.mainService.codePartsSize = 350;
    }
    this.calculateIframeSize();
  }
  stretchHorizontally() {
    if (this.layout == 1 || this.layout == 3) {
      this.finalCodePartSize = 350;
      this.mainService.codePartsSize = 350;
    } else {
      this.emptyArea_1_Size = 0;
      this.emptyArea_2_Size = 0;
      this.mainService.iframeResizeValue = this.mainContainerWidth - 10;
    }
    this.calculateIframeSize();
  }
  resetCodePartsSize() {
    if (this.IsAfterViewInitReached) {
      this.codePartStretchState.state = false;
      this.codePartStretchState.index = -1;
      this.previousLayout = undefined;
      if (this.layout == 1 || this.layout == 3) {
        this.finalCssCodePartSize = (this.mainContainerHeight - 10) / 3;
        this.finalHtmlCodePartSize = (this.mainContainerHeight - 10) / 3;
        this.finalJsCodePartSize = (this.mainContainerHeight - 10) / 3;
      } else {
        this.finalCssCodePartSize = (this.mainContainerWidth - 10) / 3;
        this.finalHtmlCodePartSize = (this.mainContainerWidth - 10) / 3;
        this.finalJsCodePartSize = (this.mainContainerWidth - 10) / 3;
      }
    }
  }
  halfStretchCodePart(newIndex, event) {
    let currentCodePartTitle = event.target.closest(".code-part-title");
    document.querySelectorAll(".code-part-title [class*='half-stretch-btn']").forEach(el => {
      el.classList.add("clinging");
    });
    if (!this.codeParthHalfStretchFirstIndex) {
      //first marking ? stretch
      this.codeParthHalfStretchFirstIndex = newIndex;
      currentCodePartTitle.classList.add("half-stretch-mark");
    } else if (this.codeParthHalfStretchFirstIndex == newIndex) {
      //first marked codePart is marked again ? remove stretch
      this.codeParthHalfStretchFirstIndex = undefined;
      currentCodePartTitle.classList.remove("half-stretch-mark");
      document.querySelectorAll(".code-part-title [class*='half-stretch-btn']").forEach(el => {
        el.classList.remove("clinging");
      });
    } else {
      //second codePart is the one marked? proceed with resizing the first and second marked codeParts
      let mainContainerSize = this.layout == 1 || this.layout == 3 ? this.mainContainerHeight : this.mainContainerWidth;
      let minCodePartSize = this.layout == 1 || this.layout == 3 ? 25 : 25;
      let arr = ["*", minCodePartSize, minCodePartSize, minCodePartSize];
      arr[this.codeParthHalfStretchFirstIndex] = mainContainerSize / 2 - 5 - minCodePartSize / 2;
      arr[newIndex] = mainContainerSize / 2 - 5 - minCodePartSize / 2;
      this.finalHtmlCodePartSize = arr[1];
      this.finalCssCodePartSize = arr[2];
      this.finalJsCodePartSize = arr[3];
      this.setMainServiceCodepartSizes();
      //console.log("arr = ", arr);
      this.codeParthHalfStretchFirstIndex = undefined; //codeParthHalfStretchFirstIndex not needed anymore
      //reset stretched codepart state as well
      this.codePartStretchState.state = false;
      this.codePartStretchState.index = -1;
      let firstMarkedCodePart = this.codePartsArea.nativeElement.querySelector(".half-stretch-mark");
      firstMarkedCodePart.classList.remove("half-stretch-mark");
      firstMarkedCodePart.classList.add("marking-half-stretched-code-part");
      currentCodePartTitle.classList.add("marking-half-stretched-code-part");
      setTimeout(() => {
        firstMarkedCodePart.classList.remove("marking-half-stretched-code-part");
        currentCodePartTitle.classList.remove("marking-half-stretched-code-part");
      }, 510);
      document.querySelectorAll(".code-part-title [class*='half-stretch-btn']").forEach(el => {
        el.classList.remove("clinging");
      });
    }
  }
  stretchCodePart(codePartType, index) {
    if (this.IsAfterViewInitReached) {
      let mainContainerEl = this.mainContainer.nativeElement;
      let mainContainerSize = this.layout == 1 || this.layout == 3 ? mainContainerEl.offsetHeight : mainContainerEl.offsetWidth;
      let sizes = [];
      if (this.codePartStretchState.state && index == this.codePartStretchState.index) {
        //codepart already stretched ? resume last codepart size
        this.codePartStretchState.state = false;
        this.codePartStretchState.index = -1;
        sizes = [this.previousLayout.htmlSize, this.previousLayout.cssSize, this.previousLayout.jsSize];
        //console.log("sizes before = ", sizes);
        this.reAdaptCodePartsSizes(sizes, mainContainerSize - 10, "inner");
        //console.log("sizes after = ", sizes);
        this.finalHtmlCodePartSize = sizes[0];
        this.finalCssCodePartSize = sizes[1];
        this.finalJsCodePartSize = sizes[2];
      } else {
        //code part not stretched ? stretch it
        this.previousLayout = {
          layout: this.layout,
          htmlSize: this.finalHtmlCodePartSize,
          cssSize: this.finalCssCodePartSize,
          jsSize: this.finalJsCodePartSize,
          mainContainerSize: mainContainerSize
        };
        this.codePartStretchState.state = true;
        this.codePartStretchState.index = index;
        if (this.layout == 1 || this.layout == 3) {
          let totalSize = this.mainContainerHeight - 10;
          //console.log("totalSize = ", totalSize);
          switch (codePartType) {
            case "html":
              this.finalHtmlCodePartSize = totalSize - 50;
              this.finalJsCodePartSize = 25;
              this.finalCssCodePartSize = 25;
              break;
            case "css":
              this.finalHtmlCodePartSize = 25;
              this.finalJsCodePartSize = 25;
              this.finalCssCodePartSize = totalSize - 50;
              break;
            case "js":
              this.finalHtmlCodePartSize = 25;
              this.finalJsCodePartSize = totalSize - 50;
              this.finalCssCodePartSize = 25;
              break;
          }
        } else if (this.layout == 2 || this.layout == 4) {
          let totalSize = this.mainContainerWidth - 10;
          //console.log("totalSize = ", totalSize);
          switch (codePartType) {
            case "html":
              this.finalHtmlCodePartSize = totalSize - 50;
              this.finalJsCodePartSize = 25;
              this.finalCssCodePartSize = 25;
              break;
            case "css":
              this.finalHtmlCodePartSize = 25;
              this.finalJsCodePartSize = 25;
              this.finalCssCodePartSize = totalSize - 50;
              break;
            case "js":
              this.finalHtmlCodePartSize = 25;
              this.finalJsCodePartSize = totalSize - 50;
              this.finalCssCodePartSize = 25;
              break;
          }
        }
      }
      this.setMainServiceCodepartSizes();
    }
  }
  onWindowKeydown(event) {
    //console.log("onWindowKeydown ", event.code);
  }
  onDocumentMouseup(event) {
    if (this.isMainContainerGutter_dragging) {
      this.ref.nativeElement.classList.remove("no-selection");
      this.isMainContainerGutter_dragging = false;
    } else if (this.isCustomGutter1_dragging) {
      this.ref.nativeElement.classList.remove("no-selection");
      this.isCustomGutter1_dragging = false;
      //console.log("isCustomGutter1_dragging == FALSE mouseup.type event = " + event.type);
      //console.log("--------------------------");
    } else if (this.isCustomGutter2_dragging) {
      this.ref.nativeElement.classList.remove("no-selection");
      this.isCustomGutter2_dragging = false;
      //console.log("isCustomGutter2_dragging == FALSE mouseup.type event = " + event.type);
      //console.log("--------------------------");
    } else if (this.isGutter1_dragging) {
      this.ref.nativeElement.classList.remove("no-selection");
      this.isGutter1_dragging = false;
      //console.log("isCustomGutter1_dragging == FALSE mouseup.type event = " + event.type);
      //console.log("--------------------------");
    } else if (this.isGutter2_dragging) {
      this.ref.nativeElement.classList.remove("no-selection");
      this.isGutter2_dragging = false;
      //console.log("isCustomGutter2_dragging == FALSE mouseup.type event = " + event.type);
      //console.log("--------------------------");
    }
    this.isFiddleHeightInputDisabled = false;
    this.isFiddleWidthInputDisabled = false;
    this.showIframeOverlay = false;
    this.setMainServiceCodepartSizes();
  }
  onDocumentClick(event) {
    let evTarget = event.target;
    if (evTarget.parentElement) {
      let bool = !this.getDOMClosest(evTarget, ".layouts-list-container");
      if (bool) {
        this.isLayoutsListShown = false;
      }
    }
  }
  onDocumentTouchend(event) {
    this.onDocumentMouseup(event);
  }
  onDocumentMousemove(event) {
    this.onAsSplitAreaIframeMousemove(event);
  }
  onDocumentTouchmove(event) {
    this.onAsSplitAreaIframeMousemove(event);
  }
  onWindowResize(event) {
    let self = this;
    let mainContainerEl = this.mainContainer.nativeElement;
    let newWindowWidth = window.innerWidth;
    let newWindowHeight = window.innerHeight;
    this.iframePart.switchConsoleMobileMode();
    //(new windowHeight or new windowWidth) and mainContainerEl is truthy ?
    if (mainContainerEl && (newWindowHeight !== this.windowHeight || newWindowWidth !== this.windowWidth)) {
      //console.log("/!\ window resize event: ", event);
      this.windowWidth = newWindowWidth;
      this.windowHeight = newWindowHeight;
      let newMainContainerWidth = mainContainerEl.offsetWidth;
      let newMainContainerHeight = mainContainerEl.offsetHeight;
      //console.log("newMainContainerHeight: ", newMainContainerHeight);
      //console.log("this.mainContainerHeight: ", this.mainContainerHeight);
      //console.log("newMainContainerWidth: ", newMainContainerWidth);
      //console.log("this.mainContainerWidth: ", this.mainContainerWidth);
      let oldMainContainerWidthOrHeight;
      let newMainContainerWidthOrHeight;
      let iframeSize;
      if (this.layout == 1 || this.layout == 3) {
        oldMainContainerWidthOrHeight = this.mainContainerHeight;
        newMainContainerWidthOrHeight = newMainContainerHeight;
        iframeSize = this.iframeHeight;
      } else {
        oldMainContainerWidthOrHeight = this.mainContainerWidth;
        newMainContainerWidthOrHeight = newMainContainerWidth;
        iframeSize = this.iframeWidth;
      }
      /*START readapt code parts sizes*/
      let sizes = [this.finalHtmlCodePartSize, this.finalCssCodePartSize, this.finalJsCodePartSize];
      if (newMainContainerWidthOrHeight > oldMainContainerWidthOrHeight) {
        //window got bigger OR window got zoomed out
        let coef = newMainContainerWidthOrHeight / oldMainContainerWidthOrHeight;
        this.finalHtmlCodePartSize = this.finalHtmlCodePartSize * coef;
        this.finalCssCodePartSize = this.finalCssCodePartSize * coef;
        this.finalJsCodePartSize = this.finalJsCodePartSize * coef;
      } else if (newMainContainerWidthOrHeight < oldMainContainerWidthOrHeight) {
        //window got smaller OR window got zoomed in
        let coef = oldMainContainerWidthOrHeight / newMainContainerWidthOrHeight;
        this.finalHtmlCodePartSize = this.finalHtmlCodePartSize / coef > 25 ? this.finalHtmlCodePartSize / coef : 25;
        this.finalCssCodePartSize = this.finalCssCodePartSize / coef > 25 ? this.finalCssCodePartSize / coef : 25;
        this.finalJsCodePartSize = this.finalJsCodePartSize / coef > 25 ? this.finalJsCodePartSize / coef : 25;
      }
      /*END readapt code parts sizes*/
      self.reAdaptIframeResizeValue(oldMainContainerWidthOrHeight, newMainContainerWidthOrHeight, iframeSize);
      this.mainContainerHeight = newMainContainerHeight;
      this.mainContainerWidth = newMainContainerWidth;
      let newCodePartSize;
      let outerSplitterSizes;
      if (this.layout == 1 || this.layout == 3) {
        if (this.finalCodePartSize > this.mainContainerWidth - 5) {
          newCodePartSize = this.mainContainerWidth - 13;
          this.finalCodePartSize = newCodePartSize;
        }
        if (this.finalCodePartSize < 350) {
          this.finalCodePartSize = 350;
        }
      } else if (this.layout == 2 || this.layout == 4) {
        if (this.finalCodePartSize > this.mainContainerHeight - 5) {
          newCodePartSize = this.mainContainerHeight - 13;
          this.finalCodePartSize = newCodePartSize;
        }
        if (this.finalCodePartSize < 350) {
          this.finalCodePartSize = 350;
        }
      }
      if (this.layout == 1 || this.layout == 2) {
        outerSplitterSizes = [this.finalCodePartSize, "*"];
      } else if (this.layout == 3 || this.layout == 4) {
        outerSplitterSizes = ['*', this.finalCodePartSize];
      }
      this.reAdaptCodePartsSizes(outerSplitterSizes, newMainContainerWidthOrHeight - 5, "outer");
      this.setMainServiceCodepartSizes();
      this.calculateIframeSize(mainContainerEl);
    }
  }
  /**
   * Re-adapts the iframeResizeValue on window resize or after fiddle retrieval by id
   * @param mainContainerWidthOrHeight .main-container-fiddle's width or height depending on the layout
   */
  reAdaptIframeResizeValue(oldMainContainerWidthOrHeight, newMainContainerWidthOrHeight, iframeSize) {
    //console.log("oldMainContainerWidthOrHeight = ", oldMainContainerWidthOrHeight);
    //console.log("iframeSize with gutters = ", iframeSize + 10);
    //console.log("_____________________________");
    let sizeDiff = newMainContainerWidthOrHeight - oldMainContainerWidthOrHeight;
    let newEmptyAreaSize = this.emptyArea_1_Size + sizeDiff / 2;
    if (this.emptyArea_1_Size && this.emptyArea_2_Size) {
      //emptyArea sizes are not 0 ? readapt them
      if (newEmptyAreaSize <= 0) {
        this.emptyArea_1_Size = 0;
        this.emptyArea_2_Size = 0;
      } else if (newEmptyAreaSize > newMainContainerWidthOrHeight / 2 - 5) {
        this.emptyArea_1_Size = newMainContainerWidthOrHeight / 2 - 5;
        this.emptyArea_2_Size = newMainContainerWidthOrHeight / 2 - 5;
      } else {
        this.emptyArea_1_Size = newEmptyAreaSize;
        this.emptyArea_2_Size = newEmptyAreaSize;
      }
    }
    // otherwise keep emptyArea sizes 0 if they are already 0
  }
  /**
   * Corrects the width/height of each code part area when total size of code parts is not equal to newMainContainerWidthOrHeight.
   * @param sizes code parts OR outer area sizes array
   * @param newMainContainerWidthOrHeight offsetWidth or offsetHeight of .main-container-fiddle
   */
  reAdaptCodePartsSizes(sizes, newMainContainerWidthOrHeight, type, oldMainContainerWidthOrHeight) {
    if (type == "inner") {
      let total = sizes[0] + sizes[1] + sizes[2];
      let coef;
      coef = newMainContainerWidthOrHeight / total;
      sizes[0] = sizes[0] * coef;
      sizes[1] = sizes[1] * coef;
      sizes[2] = sizes[2] * coef;
      //console.log("sizes inner = ", sizes);
      this.finalHtmlCodePartSize = Math.floor(sizes[0]);
      this.finalCssCodePartSize = Math.floor(sizes[1]);
      this.finalJsCodePartSize = Math.floor(sizes[2]);
    } else if (type == "outer") {
      let ind;
      if (this.layout == 1 || this.layout == 2) {
        ind = 0;
      } else if (this.layout == 3 || this.layout == 4) {
        ind = 1;
      }
      let minLimit;
      if (this.layout == 1 || this.layout == 3) {
        minLimit = 350;
      } else if (this.layout == 2 || this.layout == 4) {
        minLimit = 350;
      }
      let total = sizes[ind];
      if (total > newMainContainerWidthOrHeight) {
        sizes[ind] = newMainContainerWidthOrHeight;
      } else if (total < minLimit) {
        sizes[ind] = minLimit;
      }
      //console.log("sizes outer = ", sizes);
      this.finalCodePartSize = sizes[ind];
    }
  }
  runCode(param) {
    this.loader.showLoader();
    if (param == "save") {
      //save ?
      if (window.innerWidth <= 767 || window.innerHeight <= 580 || this.mainService.iframeResizeValue === undefined) {
        //mobile mode ? stretch iframeResizeValue
        this.mainService.isMobileMode = true;
        if (this.layout == 1 || this.layout == 3) {
          this.mainService.iframeResizeValue = this.mainContainerHeight - 10;
        } else if (this.layout == 2 || this.layout == 4) {
          this.mainService.iframeResizeValue = this.mainContainerWidth - 10;
        }
      } else {
        this.mainService.isMobileMode = false;
      }
      this.mainService.scheduledRunFiddle = true;
      //START save codePositionData objects in MainService
      this.cssPart.canRetrievePositionsAfterLoad = true;
      /*
             this.mainService.cssCodePositionData.column = this.cssPart.aceEditor?.getCursorPosition().column;
      this.mainService.cssCodePositionData.row = this.cssPart.aceEditor?.getCursorPosition().row;
      this.mainService.cssCodePositionData.aceRanges = this.cssPart.aceEditor?.getSelection().getAllRanges();
             this.htmlPart.canRetrievePositionsAfterLoad = true;
      this.mainService.htmlCodePositionData.column = this.htmlPart.aceEditor?.getCursorPosition().column;
      this.mainService.htmlCodePositionData.row = this.htmlPart.aceEditor?.getCursorPosition().row;
      this.mainService.htmlCodePositionData.aceRanges = this.htmlPart.aceEditor?.getSelection().getAllRanges();
      
      console.log("this.mainService.htmlCodePositionData = ", this.mainService.htmlCodePositionData);
      console.log("getAllRanges() = ", this.htmlPart.aceEditor?.getSelection().getAllRanges());
      
      this.jsPart.canRetrievePositionsAfterLoad = true;
      this.mainService.jsCodePositionData.column = this.jsPart.aceEditor?.getCursorPosition().column;
      this.mainService.jsCodePositionData.row = this.jsPart.aceEditor?.getCursorPosition().row;
      this.mainService.jsCodePositionData.aceRanges = this.jsPart.aceEditor?.getSelection().getAllRanges();
             */
      //END save codePositionData objects in MainService
      if (this.appMode == "pastebin") {
        this.changeLayout(1);
      }
      this.iframePart.saveFiddle(this.appMode);
    } else {
      //run
      //console.log("inside mainComponent.runCode()");
      this.iframePart.runFiddle();
    }
  }
  isMobileMode() {
    return window.innerWidth < 768 || window.innerHeight < 581;
  }
  toggleCodePart(codeType) {
    switch (codeType) {
      case "html":
        this.showHtml = !this.showHtml;
        this.showCss = false;
        this.showJs = false;
        if (!this.showHtml) {
          this.showResult = true;
        }
        break;
      case "css":
        this.showCss = !this.showCss;
        this.showHtml = false;
        this.showJs = false;
        if (!this.showCss) {
          this.showResult = true;
        }
        break;
      case "js":
        this.showJs = !this.showJs;
        this.showHtml = false;
        this.showCss = false;
        if (!this.showJs) {
          this.showResult = true;
        }
        break;
      case "result":
        if (this.showJs || this.showHtml || this.showCss) {
          this.showResult = !this.showResult;
        }
        break;
      case "console":
        this.showConsole = !this.showConsole;
        break;
    }
    this.mainService.showHtml = this.showHtml;
    this.mainService.showCss = this.showCss;
    this.mainService.showJs = this.showJs;
    this.mainService.showResult = this.showResult;
    let self = this;
    //console.log("inside custom interval");
    if (!this.showCss) {
      if (this.codePartsArea.nativeElement.querySelector(".code-component-container-css").classList.contains("hide-mobile")) {
        //window.dispatchEvent(new Event("resize", {bubbles: true, cancelable:false }));
        //clearInterval(editorLayoutFixInterval);
      }
    }
    if (!this.showHtml) {
      if (this.codePartsArea.nativeElement.querySelector(".code-component-container-html").classList.contains("hide-mobile")) {
        //window.dispatchEvent(new Event("resize", {bubbles: true, cancelable:false }));
        //clearInterval(editorLayoutFixInterval);
      }
    }
    if (!this.showJs) {
      if (this.codePartsArea.nativeElement.querySelector(".code-component-container-js").classList.contains("hide-mobile")) {
        //window.dispatchEvent(new Event("resize", {bubbles: true, cancelable:false }));
        //clearInterval(editorLayoutFixInterval);
      }
    }
    if (!this.showResult) {
      if (document.querySelector("app-iframe-part").classList.contains("hide-mobile")) {
        //window.dispatchEvent(new Event("resize", {bubbles: true, cancelable:false }));
        //clearInterval(editorLayoutFixInterval);
      }
    }
  }
  consoleBtnClick() {
    this.isConsoleOn = !this.isConsoleOn;
    this.mainService.isConsoleOn = this.isConsoleOn;
    if (this.isConsoleOn) {
      this.iframePart.showConsole();
    } else {
      this.iframePart.hideConsole();
    }
    this.calculateIframeSize();
  }
  getEmptyAreaSize(areaNum) {
    if (areaNum == 1) {
      return this.emptyArea_1_Size + "px";
    } else if (areaNum == 2) {
      return this.emptyArea_2_Size + "px";
    }
  }
  getIframeAreaSize() {
    if (this.IsAfterViewInitReached) {
      let size = 0;
      let mainContainer = this.mainContainer.nativeElement;
      if (this.layout == 1 || this.layout == 3) {
        size = this.mainContainerHeight;
      } else if (this.layout == 2 || this.layout == 4) {
        size = this.mainContainerWidth;
      }
      return size - this.emptyArea_2_Size * 2 - 10 + 'px';
    } else return "0px";
  }
  /**
   *
   * @param event MouseEvent (mousedown) or TouchEvent (touchstart)
   * @param customGutterNum gutter mumber: 1 || 2 || 3 || 4 || 5
   */
  onGutterCustomMousedown(event, customGutterNum) {
    console.log('onGutterCustomMousedown ev = ', event);
    if (customGutterNum == 3) {
      //Main container gutter ?
      this.isMainContainerGutter_dragging = true;
      //console.log("mousedown customGutterNum = " + customGutterNum);
      //console.log("--------------------------");
    } else if (customGutterNum == 4) {
      //iframe first gutter
      this.isCustomGutter1_dragging = true;
      this.isCustomGutter2_dragging = false;
      //console.log("mousedown event.type = " + event.type);
      //console.log("--------------------------");
    } else if (customGutterNum == 5) {
      //iframe second gutter
      this.isCustomGutter2_dragging = true;
      this.isCustomGutter1_dragging = false;
      //console.log("mousedown event.type = " + event.type);
      //console.log("--------------------------");
    } else if (customGutterNum == 1) {
      //html-css gutter
      this.isGutter1_dragging = true;
      this.mouseDownXorY = this.layout == 1 || this.layout == 3 ? event.clientY : event.clientX;
    } else if (customGutterNum == 2) {
      //css-js gutter
      this.isGutter2_dragging = true;
      this.mouseDownXorY = this.layout == 1 || this.layout == 3 ? event.clientY : event.clientX;
    }
    this.isFiddleHeightInputDisabled = true;
    this.isFiddleWidthInputDisabled = true;
  }
  onAsSplitAreaIframeMousemove(event) {
    /**
     * get the event clientX or clientY according to the gutter type
     */
    let generateCoordinate = gutterNumber => {
      let eventClientXOrY;
      let htmlCssGutter = 1;
      let cssJsGutter = 2;
      let codePartsGutter = 3;
      let customGutter1 = 4;
      let customGutter2 = 5;
      console.log("move event.type = ", event.type);
      if (event.type == "touchmove") {
        if (this.layout == 1 || this.layout == 3) {
          eventClientXOrY = [htmlCssGutter, cssJsGutter, customGutter1, customGutter2].includes(gutterNumber) ? event.touches[0].clientY : event.touches[0].clientX;
        } else if (this.layout == 2 || this.layout == 4) {
          eventClientXOrY = [htmlCssGutter, cssJsGutter, customGutter1, customGutter2].includes(gutterNumber) ? event.touches[0].clientX : event.touches[0].clientY;
        }
      } else {
        if (this.layout == 1 || this.layout == 3) {
          eventClientXOrY = [htmlCssGutter, cssJsGutter, customGutter1, customGutter2].includes(gutterNumber) ? event.clientY : event.clientX;
        } else if (this.layout == 2 || this.layout == 4) {
          eventClientXOrY = [htmlCssGutter, cssJsGutter, customGutter1, customGutter2].includes(gutterNumber) ? event.clientX : event.clientY;
        }
      }
      return eventClientXOrY;
    };
    let evTarget = event.target;
    if (this.IsAfterViewInitReached) {
      let emptyArea1 = this.emptyArea1.nativeElement;
      let emptyArea2 = this.emptyArea2.nativeElement;
      let mainContainer = this.mainContainer.nativeElement;
      let codePartsArea = this.codePartsArea.nativeElement;
      if (this.isCustomGutter1_dragging) {
        this.ref.nativeElement.classList.add("no-selection");
        let eventClientXOrY = generateCoordinate(4);
        if (!this.showIframeOverlay) {
          this.showIframeOverlay = true;
        }
        //console.log("mousemove evTarget = ", evTarget);
        //console.log("isCustomGutter1_dragging is true");
        if (this.layout == 1 || this.layout == 3) {
          //layout 1 or 3 ?
          let emptyArea1_height = emptyArea1.offsetHeight;
          emptyArea1_height = eventClientXOrY - mainContainer.getBoundingClientRect().top; //calculate new emptyArea1_height value
          //make sure emptyArea1_height is between 0 and mainContainer.offsetHeight / 2 - 5
          if (emptyArea1_height < 0) {
            emptyArea1_height = 0;
          } else if (emptyArea1_height > mainContainer.offsetHeight / 2 - 5) {
            emptyArea1_height = mainContainer.offsetHeight / 2 - 5;
          }
          this.emptyArea_1_Size = emptyArea1_height;
          this.emptyArea_2_Size = emptyArea1_height;
        } else if (this.layout == 2 || this.layout == 4) {
          //layout 2 or 4
          let emptyArea1_width = emptyArea1.offsetWidth;
          emptyArea1_width = eventClientXOrY - mainContainer.getBoundingClientRect().left; //calculate new emptyArea1_width value
          //make sure emptyArea1_width is between 0 and mainContainer.offsetWidth / 2 - 5
          if (emptyArea1_width < 0) {
            emptyArea1_width = 0;
          } else if (emptyArea1_width > mainContainer.offsetWidth / 2 - 5) {
            emptyArea1_width = mainContainer.offsetWidth / 2 - 5;
          }
          this.emptyArea_1_Size = emptyArea1_width;
          this.emptyArea_2_Size = emptyArea1_width;
        }
      } else if (this.isCustomGutter2_dragging) {
        this.ref.nativeElement.classList.add("no-selection");
        let eventClientXOrY = generateCoordinate(5);
        if (!this.showIframeOverlay) {
          this.showIframeOverlay = true;
        }
        //console.log("mousemove evTarget = ", evTarget);
        //console.log("isCustomGutter2_dragging is true");
        if (this.layout == 1 || this.layout == 3) {
          let emptyArea2_height = emptyArea2.offsetHeight;
          emptyArea2_height = mainContainer.getBoundingClientRect().bottom - eventClientXOrY;
          if (emptyArea2_height < 0) {
            emptyArea2_height = 0;
          } else if (emptyArea2_height > mainContainer.offsetHeight / 2 - 5) {
            emptyArea2_height = mainContainer.offsetHeight / 2 - 5;
          }
          this.emptyArea_2_Size = emptyArea2_height;
          this.emptyArea_1_Size = emptyArea2_height;
          //console.log("emptyArea2_height = ", emptyArea2_height);
        } else if (this.layout == 2 || this.layout == 4) {
          let emptyArea2_width = emptyArea2.offsetWidth;
          emptyArea2_width = mainContainer.getBoundingClientRect().right - eventClientXOrY;
          if (emptyArea2_width < 0) {
            emptyArea2_width = 0;
          } else if (emptyArea2_width > mainContainer.offsetWidth / 2 - 5) {
            emptyArea2_width = mainContainer.offsetWidth / 2 - 5;
          }
          this.emptyArea_2_Size = emptyArea2_width;
          this.emptyArea_1_Size = emptyArea2_width;
        }
      } else if (this.isMainContainerGutter_dragging) {
        this.ref.nativeElement.classList.add("no-selection");
        let eventClientXOrY = generateCoordinate(3);
        if (!this.showIframeOverlay) {
          this.showIframeOverlay = true;
        }
        //console.log("mousemove evTarget = ", evTarget);
        console.log("eventClientXOrY = ", eventClientXOrY);
        if (this.layout == 1 || this.layout == 3) {
          let codePartsWidth = this.layout == 1 ? eventClientXOrY - mainContainer.getBoundingClientRect().left : Math.abs(eventClientXOrY - mainContainer.getBoundingClientRect().right);
          if (codePartsWidth < 350) {
            codePartsWidth = 350;
          } else if (codePartsWidth > mainContainer.offsetWidth - 5) {
            codePartsWidth = mainContainer.offsetWidth - 5;
          }
          this.finalCodePartSize = codePartsWidth;
          console.log("codePartsWidth = ", codePartsWidth);
        } else if (this.layout == 2 || this.layout == 4) {
          let codePartsHeight = this.layout == 2 ? eventClientXOrY - mainContainer.getBoundingClientRect().top : Math.abs(eventClientXOrY - mainContainer.getBoundingClientRect().bottom);
          if (codePartsHeight < 350) {
            codePartsHeight = 350;
          } else if (codePartsHeight > mainContainer.getBoundingClientRect().height - 5) {
            codePartsHeight = mainContainer.getBoundingClientRect().height - 5;
          }
          this.finalCodePartSize = codePartsHeight;
          console.log("codePartsHeight = ", codePartsHeight);
        }
      } else if (this.isGutter1_dragging) {
        this.ref.nativeElement.classList.add("no-selection");
        let eventClientXOrY = generateCoordinate(1);
        if (!this.showIframeOverlay) {
          this.showIframeOverlay = true;
        }
        //console.log("mousemove evTarget = ", evTarget);
        console.log("eventClientXOrY = ", eventClientXOrY);
        if (this.layout == 1 || this.layout == 3) {
          let htmlPartSize;
          if (eventClientXOrY > codePartsArea.getBoundingClientRect().bottom - 50 - 5) {
            htmlPartSize = codePartsArea.getBoundingClientRect().height - 50 - 5;
          } else if (eventClientXOrY < codePartsArea.getBoundingClientRect().top + 25) {
            htmlPartSize = 25;
          } else {
            htmlPartSize = eventClientXOrY - codePartsArea.getBoundingClientRect().top;
          }
          let sizeDiff = htmlPartSize - this.finalHtmlCodePartSize;
          //let htmlPartSize = this.finalHtmlCodePartSize + sizeDiff;
          console.log("htmlPartSize = ", htmlPartSize);
          if (htmlPartSize < 25) {
            htmlPartSize = 25;
          }
          let newCssSize = this.finalCssCodePartSize - sizeDiff;
          if (newCssSize < 25) {
            newCssSize = 25;
            ///
            let newJsSize = this.finalJsCodePartSize - sizeDiff;
            if (newJsSize < 25) {
              newJsSize = 25;
            }
            this.finalJsCodePartSize = newJsSize;
          }
          this.finalCssCodePartSize = newCssSize;
          this.finalHtmlCodePartSize = htmlPartSize;
        } else if (this.layout == 2 || this.layout == 4) {
          let htmlPartSize;
          if (eventClientXOrY > codePartsArea.getBoundingClientRect().right - 50 - 10) {
            htmlPartSize = codePartsArea.getBoundingClientRect().width - 50 - 10;
          } else if (eventClientXOrY < codePartsArea.getBoundingClientRect().left + 25) {
            htmlPartSize = 25;
          } else {
            htmlPartSize = eventClientXOrY - codePartsArea.getBoundingClientRect().left;
          }
          let sizeDiff = htmlPartSize - this.finalHtmlCodePartSize;
          //let htmlPartSize = this.finalHtmlCodePartSize + sizeDiff;
          console.log("htmlPartSize = ", htmlPartSize);
          if (htmlPartSize < 25) {
            htmlPartSize = 25;
          }
          let newCssSize = this.finalCssCodePartSize - sizeDiff;
          if (newCssSize < 25) {
            newCssSize = 25;
            ///
            let newJsSize = this.finalJsCodePartSize - sizeDiff;
            if (newJsSize < 25) {
              newJsSize = 25;
            }
            this.finalJsCodePartSize = newJsSize;
          }
          this.finalCssCodePartSize = newCssSize;
          this.finalHtmlCodePartSize = htmlPartSize;
        }
      } else if (this.isGutter2_dragging) {
        this.ref.nativeElement.classList.add("no-selection");
        let eventClientXOrY = generateCoordinate(2);
        if (!this.showIframeOverlay) {
          this.showIframeOverlay = true;
        }
        //console.log("mousemove evTarget = ", evTarget);
        console.log("eventClientXOrY = ", eventClientXOrY);
        if (this.layout == 1 || this.layout == 3) {
          let jsPartSize;
          if (eventClientXOrY > codePartsArea.getBoundingClientRect().bottom - 25) {
            //drag is below codepPartsArea bottom point ?
            jsPartSize = 25;
          } else if (eventClientXOrY < codePartsArea.getBoundingClientRect().top + 50 + 5) {
            //drag is above codePartsArea top point ?
            jsPartSize = codePartsArea.getBoundingClientRect().height - 50 - 5;
          } else {
            jsPartSize = codePartsArea.getBoundingClientRect().bottom - eventClientXOrY;
          }
          let sizeDiff = jsPartSize - this.finalJsCodePartSize;
          if (jsPartSize < 25) {
            jsPartSize = 25;
          }
          let newCssSize = this.finalCssCodePartSize - sizeDiff;
          if (newCssSize < 25) {
            newCssSize = 25;
            ///
            let newHtmlSize = this.finalHtmlCodePartSize - sizeDiff;
            if (newHtmlSize < 25) {
              newHtmlSize = 25;
            }
            this.finalHtmlCodePartSize = newHtmlSize;
          }
          this.finalCssCodePartSize = newCssSize;
          this.finalJsCodePartSize = jsPartSize;
        } else if (this.layout == 2 || this.layout == 4) {
          let jsPartSize;
          if (eventClientXOrY > codePartsArea.getBoundingClientRect().right - 25) {
            jsPartSize = 25;
          } else if (eventClientXOrY < codePartsArea.getBoundingClientRect().left + 50 + 10) {
            jsPartSize = codePartsArea.getBoundingClientRect().width - 50 - 5;
          } else {
            jsPartSize = codePartsArea.getBoundingClientRect().right - eventClientXOrY;
          }
          let sizeDiff = jsPartSize - this.finalJsCodePartSize;
          if (jsPartSize < 25) {
            jsPartSize = 25;
          }
          let newCssSize = this.finalCssCodePartSize - sizeDiff;
          if (newCssSize < 25) {
            newCssSize = 25;
            ///
            let newHtmlSize = this.finalHtmlCodePartSize - sizeDiff;
            if (newHtmlSize < 25) {
              newHtmlSize = 25;
            }
            this.finalHtmlCodePartSize = newHtmlSize;
          }
          this.finalCssCodePartSize = newCssSize;
          this.finalJsCodePartSize = jsPartSize;
        }
      }
      this.calculateIframeSize(mainContainer);
      this.mainService.iframeResizeValue = parseInt(this.getIframeAreaSize());
    }
  }
  onFiddleWidthChange(data) {
    let newFiddleWidth = parseInt(data);
    switch (this.layout) {
      case 1:
        if (newFiddleWidth <= this.mainContainerWidth - 350 - 5) {
          this.finalCodePartSize = this.mainContainerWidth - newFiddleWidth - 5;
          this.mainService.codePartsSize = this.finalCodePartSize;
        } else {
          this.calculateIframeSize();
        }
        break;
      case 2:
        if (newFiddleWidth > this.mainContainerWidth - 5) {
          this.calculateIframeSize();
        } else if (newFiddleWidth < 0) {
          this.calculateIframeSize();
        }
        if (newFiddleWidth > this.mainContainerWidth - 10) {
          this.calculateIframeSize();
        } else if (newFiddleWidth < 0) {
          this.calculateIframeSize();
        } else {
          this.emptyArea_1_Size = (this.mainContainerWidth - newFiddleWidth) / 2 - 5;
          this.emptyArea_2_Size = (this.mainContainerWidth - newFiddleWidth) / 2 - 5;
        }
        break;
      case 3:
        if (newFiddleWidth <= this.mainContainerWidth - 350 - 5) {
          this.finalCodePartSize = this.mainContainerWidth - newFiddleWidth - 5;
          this.mainService.codePartsSize = this.finalCodePartSize;
        } else {
          this.calculateIframeSize();
        }
        break;
      case 4:
        if (newFiddleWidth > this.mainContainerWidth - 10) {
          this.calculateIframeSize();
        } else if (newFiddleWidth < 0) {
          this.calculateIframeSize();
        } else {
          this.emptyArea_1_Size = (this.mainContainerWidth - newFiddleWidth) / 2 - 5;
          this.emptyArea_2_Size = (this.mainContainerWidth - newFiddleWidth) / 2 - 5;
        }
        break;
    }
    this.mainService.iframeResizeValue = parseInt(this.getIframeAreaSize());
  }
  onFiddeHeightChange(data) {
    let newFiddleHeight = parseInt(data);
    switch (this.layout) {
      case 1:
        if (newFiddleHeight > this.mainContainerHeight - 10) {
          this.calculateIframeSize();
        } else if (newFiddleHeight < 0) {
          this.calculateIframeSize();
        } else {
          this.emptyArea_1_Size = (this.mainContainerHeight - newFiddleHeight) / 2 - 5;
          this.emptyArea_2_Size = (this.mainContainerHeight - newFiddleHeight) / 2 - 5;
        }
        break;
      case 2:
        if (newFiddleHeight <= this.mainContainerHeight - 350 - 5) {
          this.finalCodePartSize = this.mainContainerHeight - newFiddleHeight - 5;
          this.mainService.codePartsSize = this.finalCodePartSize;
        } else {
          this.calculateIframeSize();
        }
        break;
      case 3:
        if (newFiddleHeight > this.mainContainerHeight - 10) {
          this.calculateIframeSize();
        } else if (newFiddleHeight < 0) {
          this.calculateIframeSize();
        } else {
          this.emptyArea_1_Size = (this.mainContainerHeight - newFiddleHeight) / 2 - 5;
          this.emptyArea_2_Size = (this.mainContainerHeight - newFiddleHeight) / 2 - 5;
        }
        break;
      case 4:
        if (newFiddleHeight <= this.mainContainerHeight - 350 - 5) {
          this.finalCodePartSize = this.mainContainerHeight - newFiddleHeight - 5;
          this.mainService.codePartsSize = this.finalCodePartSize;
        } else {
          this.calculateIframeSize();
        }
        break;
    }
    this.mainService.iframeResizeValue = parseInt(this.getIframeAreaSize());
  }
  hideModal() {
    this.modal.hide();
  }
  hideHistoryModal() {
    this.modalHistory.hide();
  }
  ressouresBtnClick() {
    this.modal.show();
  }
  showHistoryModal() {
    this.modalHistory.show();
    this.appFiddlesHistory.getFiddlesList();
  }
  getCodePartGutterStyle(type) {
    let obj = {
      "flex-basis": "5px"
    };
    if (this.layout == 1 || this.layout == 3) {
      if (type == "main-container") {
        obj.cursor = "col-resize";
      } else if (type == "html-css" || type == "css-js") {
        obj.cursor = "row-resize";
      }
    } else {
      if (type == "main-container") {
        obj.cursor = "row-resize";
      } else if (type == "html-css" || type == "css-js") {
        obj.cursor = "col-resize";
      }
    }
    return obj;
  }
  validateRessources() {
    this.ressourcesComponent.validateRessources();
    this.hideModal();
  }
  onRessourcesValidate(dataEvent) {
    this.htmlPart.code = this.mainService.htmlCode;
    dataEvent.forEach((el, index, arr) => {
      this.htmlPart.code = arr[arr.length - 1 - index] + this.htmlPart.code;
    });
    this.ressourcesComponent.resetCurrentRessourceChoice();
    this.ressourcesComponent.emptySelectedRessourceAssets();
    this.toastrService.success("Ressources prepended to HTML code.");
  }
  getVerticalModeState(codePartType) {
    if (this.layout == 2 || this.layout == 4) {
      switch (codePartType) {
        case "html":
          if (this.finalHtmlCodePartSize < 230) {
            return true;
          } else {
            return false;
          }
        case "js":
          if (this.finalJsCodePartSize < 280) {
            return true;
          } else {
            return false;
          }
        case "css":
          if (this.finalCssCodePartSize < 230) {
            return true;
          } else {
            return false;
          }
      }
    } else {
      return false;
    }
  }
  onFiddeTitleChange(data) {
    this.mainService.fiddleTitle = data;
    //console.log("@onFiddeTitleChange this.mainService.fiddleTitle = ", this.mainService.fiddleTitle);
  }
  onIframePartShowLoader() {
    this.loader.showLoader();
  }
  onIframePartHideLoader() {
    this.loader.hideLoader();
  }
  getHomeUrl() {
    return _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.homeUrl;
  }
  isMatch(el, match) {
    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, match);
  }
  //
  getDOMClosest(elem, selector) {
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (this.isMatch(elem, selector)) return elem;
    }
    return null;
  }
  prettifyMobileCode() {
    if (this.showHtml) {
      this.prettifyCode('html');
    } else if (this.showCss) {
      this.prettifyCode('css');
    } else if (this.showJs) {
      this.prettifyCode('js');
    }
  }
  static {
    this.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_1__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      viewQuery: function MainComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c3, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c4, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c5, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c6, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c7, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c8, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c9, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c10, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c11, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c12, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c13, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c14, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c15, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c16, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c17, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c18, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c19, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c20, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.mainContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.codePartsArea = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.htmlPart = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.cssPart = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.jsPart = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.pastebinPart = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.iframePart = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.layout1 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.layout2 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.layout3 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.layoutsList = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.modalHistory = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.ressourcesComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.loader = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.customGutter1 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.customGutter2 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.htmlCssGutter = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.emptyArea1 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.emptyArea2 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.appFiddlesHistory = _t.first);
        }
      },
      hostBindings: function MainComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keydown", function MainComponent_keydown_HostBindingHandler($event) {
            return ctx.onWindowKeydown($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveWindow"])("mouseup", function MainComponent_mouseup_HostBindingHandler($event) {
            return ctx.onDocumentMouseup($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveDocument"])("click", function MainComponent_click_HostBindingHandler($event) {
            return ctx.onDocumentClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveDocument"])("touchend", function MainComponent_touchend_HostBindingHandler($event) {
            return ctx.onDocumentTouchend($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveDocument"])("mousemove", function MainComponent_mousemove_HostBindingHandler($event) {
            return ctx.onDocumentMousemove($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveDocument"])("touchmove", function MainComponent_touchmove_HostBindingHandler($event) {
            return ctx.onDocumentTouchmove($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveDocument"])("resize", function MainComponent_resize_HostBindingHandler($event) {
            return ctx.onWindowResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveWindow"]);
        }
      },
      decls: 169,
      vars: 224,
      consts: [["loader", ""], ["pastebinPart", ""], ["mainContainer", ""], ["htmlMobileToggle", ""], ["cssMobileToggle", ""], ["jsMobileToggle", ""], ["resultMobileToggle", ""], ["codePartsArea", ""], ["htmlPart", ""], ["htmlCssGutter", ""], ["cssPart", ""], ["jsPart", ""], ["emptyArea1", ""], ["customGutter1", ""], ["iframePart", ""], ["customGutter2", ""], ["emptyArea2", ""], ["modal", ""], ["ressources", ""], ["modalHistory", ""], ["appFiddlesHistory", ""], ["layoutsList", ""], ["layout1", ""], ["layout2", ""], ["layout3", ""], ["layout4", ""], ["id", "main-header"], [1, "logo-title-container"], ["title", "My Fiddle", 1, "fiddle-logo", 3, "href"], [3, "ngStyle", "src"], [1, "fiddle-title"], ["type", "text", "placeholder", "Title", 1, "form-control", "fiddle-input", 3, "ngModelChange", "ngModel"], ["class", "fiddle-size", 4, "ngIf"], ["class", "fullscreen-iframe-btn btn", 3, "title", "click", 4, "ngIf"], ["class", "stretch-v-iframe-btn btn", 3, "title", "click", 4, "ngIf"], ["class", "stretch-h-iframe-btn btn", 3, "title", "click", 4, "ngIf"], [1, "app-loader"], [1, "header-btns-container"], ["class", "prettify-mobile-code btn", 3, "click", 4, "ngIf"], [1, "themes-btn-container"], [1, "themes-btn", "btn", 3, "click", "title"], ["class", "fa fa-sun-o", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-moon-o", "aria-hidden", "true", 4, "ngIf"], [1, "history-btn", "btn", 3, "click", "title"], [3, "ngStyle"], [1, "paypal-btn-container"], ["id", "donate-button-container"], ["id", "donate-button", 1, "btn", 3, "ngStyle"], ["class", "ressources-code-btn btn", 3, "click", 4, "ngIf"], ["class", "layouts-list-container", 3, "ngClass", "click", 4, "ngIf"], [1, "share-code-btn", "btn", 3, "click"], ["class", "share-code-btn btn", 3, "click", 4, "ngIf"], [1, "app-mode-btn", "btn", 2, "width", "44px", 3, "click"], [1, "main-container", "main-container-pastebin", 3, "ngClass"], [1, "pastebin-component-container"], [1, "code-component", 3, "savecodemsg"], [1, "main-container", "main-container-fiddle", 3, "ngClass"], ["id", "code-parts-title-mobile"], [3, "click", "ngClass"], [1, "codeparts-iframe-container", 3, "ngClass"], [1, "codeparts-container", 3, "ngStyle", "ngClass"], [1, "code-component-container", "code-component-container-html", 3, "ngStyle", "ngClass"], [1, "code-part-title"], [1, "code-part-title-btns-container"], [1, "code-part-title-btn", 3, "click", "title", "ngStyle"], ["aria-hidden", "true", 1, "fa", "fa-bars", 3, "ngClass"], [1, "html-half-stretch-btn", "code-part-title-btn", 3, "click", "title", "ngStyle", "ngClass"], ["class", "fa fa-arrows-v", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-arrows-h", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-arrows-h fa-arrows-h-vertical", "aria-hidden", "true", 4, "ngIf"], [1, "html-stretch-btn", "code-part-title-btn", 3, "click", "title", "ngStyle", "ngClass"], [1, "html-fullscreen-btn", "code-part-title-btn", 3, "click", "ngClass", "title"], ["aria-hidden", "true", 1, "fa", "fa-arrows-alt"], [1, "code-component", 3, "runcodemsg", "savecodemsg"], [1, "code-part-gutter", "gutter", 3, "mousedown", "touchstart", "ngStyle"], [1, "code-component-container", "code-component-container-css", 3, "ngStyle", "ngClass"], [1, "css-half-stretch-btn", "code-part-title-btn", 3, "click", "title", "ngStyle", "ngClass"], [1, "css-stretch-btn", "code-part-title-btn", 3, "click", "title", "ngStyle", "ngClass"], [1, "css-fullscreen-btn", "code-part-title-btn", 3, "click", "ngClass", "title"], [1, "code-component-container", "code-component-container-js", 3, "ngStyle", "ngClass"], [1, "js-half-stretch-btn", "code-part-title-btn", 3, "click", "title", "ngStyle", "ngClass"], [1, "js-stretch-btn", "code-part-title-btn", 3, "click", "title", "ngStyle", "ngClass"], [1, "js-fullscreen-btn", "code-part-title-btn", 3, "click", "ngClass", "title"], [1, "main-container-gutter", "gutter", 3, "mousedown", "touchstart", "ngStyle"], [1, "as-split-area-iframe", 2, "position", "relative", 3, "size", "ngClass"], [1, "empty-area", "empty-area-1", 3, "ngClass", "ngStyle"], [1, "as-split-gutter-custom", "gutter", 3, "mousedown", "touchstart", "ngClass"], [1, "as-split-gutter-icon-custom"], [1, "iframe-overlay", 3, "ngStyle"], [1, "fiddle-size", "fiddle-size-hack"], [1, "width"], [1, "x"], [1, "height"], [1, "fullscreen-iframe-header", 3, "ngStyle"], [1, "fullscreen-iframe-btn", "btn", "fullscreen-iframe-btn-secondary", 3, "click", "title"], [1, "iframe-area", 3, "ngStyle"], [1, "iframe-overlay-for-drop", 3, "ngStyle"], [3, "hideloader", "showloader", "isConsoleOnUpdate", "ngClass"], [1, "empty-area", "empty-area-2", 3, "ngClass", "ngStyle"], [1, "modal-header"], [1, "modal-validate-btn", "btn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-check"], [1, "modal-close-btn", 3, "click"], [1, "modal-body"], [3, "hidemodal", "validate"], [1, "modal-footer", 2, "padding", "0px"], [1, "fiddle-size"], ["type", "number", 1, "width", "form-control", 3, "ngModelChange", "change", "min", "ngModel", "disabled"], ["type", "number", 1, "height", "form-control", 3, "ngModelChange", "change", "min", "ngModel", "disabled"], [1, "fullscreen-iframe-btn", "btn", 3, "click", "title"], [1, "stretch-v-iframe-btn", "btn", 3, "click", "title"], ["aria-hidden", "true", 1, "fa", "fa-arrows-v"], [1, "stretch-h-iframe-btn", "btn", 3, "click", "title"], ["aria-hidden", "true", 1, "fa", "fa-arrows-h"], [1, "prettify-mobile-code", "btn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-indent"], ["aria-hidden", "true", 1, "fa", "fa-sun-o"], ["aria-hidden", "true", 1, "fa", "fa-moon-o"], [1, "ressources-code-btn", "btn", 3, "click"], [1, "layouts-list-container", 3, "click", "ngClass"], [1, "layouts-btn", "btn"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc"], ["aria-hidden", "true", 1, "fa", "fa-sort-asc"], [1, "layouts-list"], [1, "layout-1", "layout", 3, "click", "ngClass"], [1, "layout-2", "layout", 3, "click", "ngClass"], [1, "layout-3", "layout", 3, "click", "ngClass"], [1, "layout-4", "layout", 3, "click", "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-arrows-h", "fa-arrows-h-vertical"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "header", 26)(1, "div", 27)(2, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "img", 29)(4, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 30)(6, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayListener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayBindingSet"](ctx.fiddleTitle, $event) || (ctx.fiddleTitle = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onFiddeTitleChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, MainComponent_div_7_Template, 5, 6, "div", 32)(8, MainComponent_button_8_Template, 3, 1, "button", 33)(9, MainComponent_button_9_Template, 3, 1, "button", 34)(10, MainComponent_button_10_Template, 3, 1, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "app-loader", 36, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, MainComponent_button_14_Template, 3, 0, "button", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 39)(16, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.changeTheme());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, MainComponent_i_17_Template, 1, 0, "i", 41)(18, MainComponent_i_18_Template, 1, 0, "i", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "button", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.showHistoryModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "div", 45)(22, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, MainComponent_button_24_Template, 3, 0, "button", 48)(25, MainComponent_div_25_Template, 36, 16, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "button", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_button_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.runCode("save"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "Share");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](29, MainComponent_button_29_Template, 3, 0, "button", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "button", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_button_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onAppModeClick());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "div", 53)(34, "div", 54)(35, "app-pastebin", 55, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("savecodemsg", function MainComponent_Template_app_pastebin_savecodemsg_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.runCode("save"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div", 56, 2)(39, "div", 57)(40, "a", 58, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.toggleCodePart("html"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "HTML");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "a", 58, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.toggleCodePart("css"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45, "CSS");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "a", 58, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.toggleCodePart("js"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "JS");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "a", 58, 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_49_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.toggleCodePart("result"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "Result");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "div", 59)(53, "div", 60, 7)(55, "div", 61)(56, "div", 62)(57, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58, "HTML");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "div", 63)(60, "a", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_60_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.resetCodePartsSize());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](62, "i", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "a", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_63_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.halfStretchCodePart(1, $event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](64, MainComponent_i_64_Template, 3, 0, "i", 67)(65, MainComponent_i_65_Template, 3, 0, "i", 68)(66, MainComponent_span_66_Template, 4, 0, "span", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "a", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_67_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.stretchCodePart("html", 1));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](68, MainComponent_i_68_Template, 1, 0, "i", 67)(69, MainComponent_i_69_Template, 1, 0, "i", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](70, "a", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_70_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.toggleFullScreenMode("html"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](71, "i", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "app-html-part", 73, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("runcodemsg", function MainComponent_Template_app_html_part_runcodemsg_72_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.runCode());
          })("savecodemsg", function MainComponent_Template_app_html_part_savecodemsg_72_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.runCode("save"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "div", 74, 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("mousedown", function MainComponent_Template_div_mousedown_74_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onGutterCustomMousedown($event, 1));
          })("touchstart", function MainComponent_Template_div_touchstart_74_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onGutterCustomMousedown($event, 1));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "div", 75)(77, "div", 62)(78, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](79, "CSS");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "div", 63)(81, "a", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_81_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.resetCodePartsSize());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](83, "i", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "a", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_84_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.halfStretchCodePart(2, $event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](85, MainComponent_i_85_Template, 3, 0, "i", 67)(86, MainComponent_i_86_Template, 3, 0, "i", 68)(87, MainComponent_span_87_Template, 4, 0, "span", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "a", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_88_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.stretchCodePart("css", 2));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](89, MainComponent_i_89_Template, 1, 0, "i", 67)(90, MainComponent_i_90_Template, 1, 0, "i", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "a", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_91_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.toggleFullScreenMode("css"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](92, "i", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](93, "app-css-part", 73, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("runcodemsg", function MainComponent_Template_app_css_part_runcodemsg_93_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.runCode());
          })("savecodemsg", function MainComponent_Template_app_css_part_savecodemsg_93_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.runCode("save"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("mousedown", function MainComponent_Template_div_mousedown_95_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onGutterCustomMousedown($event, 2));
          })("touchstart", function MainComponent_Template_div_touchstart_95_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onGutterCustomMousedown($event, 2));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "div", 79)(97, "div", 62)(98, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](99, "JAVASCRIPT");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "div", 63)(101, "a", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_101_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.resetCodePartsSize());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](103, "i", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](104, "a", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_104_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.halfStretchCodePart(3, $event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](105, MainComponent_i_105_Template, 3, 0, "i", 67)(106, MainComponent_i_106_Template, 3, 0, "i", 68)(107, MainComponent_span_107_Template, 4, 0, "span", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](108, "a", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_108_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.stretchCodePart("js", 3));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](109, MainComponent_i_109_Template, 1, 0, "i", 67)(110, MainComponent_i_110_Template, 1, 0, "i", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "a", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_a_click_111_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.toggleFullScreenMode("js"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](112, "i", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "app-js-part", 73, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("runcodemsg", function MainComponent_Template_app_js_part_runcodemsg_113_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.runCode());
          })("savecodemsg", function MainComponent_Template_app_js_part_savecodemsg_113_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.runCode("save"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](115, "div", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("mousedown", function MainComponent_Template_div_mousedown_115_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onGutterCustomMousedown($event, 3));
          })("touchstart", function MainComponent_Template_div_touchstart_115_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onGutterCustomMousedown($event, 3));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "div", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](117, "div", 85, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](119, "div", 86, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("mousedown", function MainComponent_Template_div_mousedown_119_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onGutterCustomMousedown($event, 4));
          })("touchstart", function MainComponent_Template_div_touchstart_119_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onGutterCustomMousedown($event, 4));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](121, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](122, "div", 88)(123, "div", 89)(124, "span", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](125);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "span", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](127, "x");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](128, "span", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](129);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](130, "div", 93)(131, "button", 94);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_button_click_131_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.toggleIframeFullscreen());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](132, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](133, "i", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](134, "div", 95);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](135, "div", 96);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](136, "app-iframe-part", 97, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("hideloader", function MainComponent_Template_app_iframe_part_hideloader_136_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onIframePartHideLoader());
          })("showloader", function MainComponent_Template_app_iframe_part_showloader_136_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onIframePartShowLoader());
          })("isConsoleOnUpdate", function MainComponent_Template_app_iframe_part_isConsoleOnUpdate_136_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.isConsoleOnUpdate($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](138, "div", 86, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("mousedown", function MainComponent_Template_div_mousedown_138_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onGutterCustomMousedown($event, 5));
          })("touchstart", function MainComponent_Template_div_touchstart_138_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onGutterCustomMousedown($event, 5));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](140, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](141, "div", 98, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](143, "app-modal", null, 17)(145, "div", 99)(146, "button", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_button_click_146_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.validateRessources());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](147, "i", 101);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](148, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](149, "Fiddle resources");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](150, "button", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_button_click_150_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.hideModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](151, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](152, "X");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](153, "div", 103)(154, "app-ressources", 104, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("hidemodal", function MainComponent_Template_app_ressources_hidemodal_154_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.hideModal());
          })("validate", function MainComponent_Template_app_ressources_validate_154_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.onRessourcesValidate($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](156, "div", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](157, "app-modal", null, 19)(159, "div", 99)(160, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](161, "Fiddles history");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](162, "button", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MainComponent_Template_button_click_162_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx.hideHistoryModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](163, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](164, "X");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](165, "div", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](166, "app-fiddles-history", null, 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](168, "div", 105);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("href", ctx.getHomeUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](105, _c21, ctx.isFiddleThemeDark() ? "none" : "block"))("src", "assets/logo.png", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](107, _c21, !ctx.isFiddleThemeDark() ? "none" : "block"))("src", "assets/logo_dark.png", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtwoWayProperty"]("ngModel", ctx.fiddleTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.appMode == "fiddle");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.appMode == "fiddle");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.appMode == "fiddle");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.appMode == "fiddle");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.appMode == "fiddle");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", ctx.isFiddleThemeDark() ? "Daylight theme" : "Night theme");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isFiddleThemeDark());
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.isFiddleThemeDark());
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "History");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](109, _c22, "url(" + ctx.getHomeUrl() + "/assets/" + (ctx.isFiddleThemeDark() ? "history-dark.png" : "history.png") + ")"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](111, _c22, "url(" + ctx.getHomeUrl() + "/assets/paypal-icon.png)"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.appMode == "fiddle");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.appMode == "fiddle");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.appMode == "fiddle");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.appMode == "pastebin" ? "Fiddle" : ctx.appMode == "fiddle" ? "Paste" : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](113, _c23, ctx.appMode == "fiddle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", "layout-type-" + ctx.layout)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](115, _c24, ctx.isIframeFullScreen, ctx.appMode == "pastebin"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](118, _c25, ctx.showHtml));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](120, _c25, ctx.showCss));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](122, _c25, ctx.showJs));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](124, _c25, ctx.showResult));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](126, _c26, !ctx.showResult, !ctx.showHtml && !ctx.showCss && !ctx.showJs, ctx.isFiddleThemeDark()));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("data-layout", ctx.layout);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](130, _c27, ctx.getLayoutInfos("codePartsAsSplitAreaSize")))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](132, _c28, !ctx.showHtml && !ctx.showCss && !ctx.showJs));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](134, _c27, ctx.getLayoutInfos("htmlAsSplitAreaSize")))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](136, _c29, !ctx.showHtml, ctx.isHtmlFullScreen, ctx.getVerticalModeState("html")));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Reset sizes")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](140, _c30, ctx.isHtmlFullScreen ? "none" : ""));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](142, _c31, ctx.layout == 2 || ctx.layout == 4));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Stretch HTML to half")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](144, _c30, ctx.isHtmlFullScreen ? "none" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](146, _c32, ctx.getVerticalModeState("html")));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.layout == 1 || ctx.layout == 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.layout == 2 || ctx.layout == 4) && !ctx.getVerticalModeState("html"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.layout == 2 || ctx.layout == 4) && ctx.getVerticalModeState("html"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Stretch HTML")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](148, _c30, ctx.isHtmlFullScreen ? "none" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](150, _c32, ctx.getVerticalModeState("html")));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.layout == 1 || ctx.layout == 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.layout == 2 || ctx.layout == 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](152, _c33, ctx.isHtmlFullScreen))("title", "Full screen HTML");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", ctx.getCodePartGutterStyle("html-css"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](154, _c27, ctx.getLayoutInfos("cssAsSplitAreaSize")))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](156, _c29, !ctx.showCss, ctx.isCssFullScreen, ctx.getVerticalModeState("css")));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Reset sizes")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](160, _c30, ctx.isCssFullScreen ? "none" : ""));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](162, _c31, ctx.layout == 2 || ctx.layout == 4));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Stretch CSS to half")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](164, _c30, ctx.isCssFullScreen ? "none" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](166, _c32, ctx.getVerticalModeState("css")));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.layout == 1 || ctx.layout == 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.layout == 2 || ctx.layout == 4) && !ctx.getVerticalModeState("css"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.layout == 2 || ctx.layout == 4) && ctx.getVerticalModeState("css"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Stretch CSS")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](168, _c30, ctx.isCssFullScreen ? "none" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](170, _c32, ctx.getVerticalModeState("css")));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.layout == 1 || ctx.layout == 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.layout == 2 || ctx.layout == 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](172, _c33, ctx.isCssFullScreen))("title", "Full screen CSS");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", ctx.getCodePartGutterStyle("css-js"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](174, _c27, ctx.getLayoutInfos("jsAsSplitAreaSize")))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](176, _c29, !ctx.showJs, ctx.isJsFullScreen, ctx.getVerticalModeState("js")));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Reset sizes")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](180, _c30, ctx.isJsFullScreen ? "none" : ""));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](182, _c31, ctx.layout == 2 || ctx.layout == 4));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Stretch JS to half")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](184, _c30, ctx.isJsFullScreen ? "none" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](186, _c32, ctx.getVerticalModeState("js")));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.layout == 1 || ctx.layout == 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.layout == 2 || ctx.layout == 4) && !ctx.getVerticalModeState("js"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx.layout == 2 || ctx.layout == 4) && ctx.getVerticalModeState("js"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Stretch JAVASCRIPT")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](188, _c30, ctx.isJsFullScreen ? "none" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](190, _c32, ctx.getVerticalModeState("js")));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.layout == 1 || ctx.layout == 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.layout == 2 || ctx.layout == 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](192, _c33, ctx.isJsFullScreen))("title", "Full screen JS");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", ctx.getCodePartGutterStyle("main-container"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("size", ctx.getLayoutInfos("iframeAsSplitAreaSize"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](194, _c34, !ctx.showResult, ctx.layout == 1 || ctx.layout == 3, ctx.layout == 2 || ctx.layout == 4));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](198, _c35, ctx.isFiddleThemeDark()))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](200, _c36, "0 0 " + ctx.getEmptyAreaSize(1)));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](202, _c37, ctx.isFiddleThemeDark(), ctx.layout == 1 || ctx.layout == 3, ctx.layout == 2 || ctx.layout == 4));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](206, _c30, ctx.showIframeOverlay ? "" : "none"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.iframeWidth);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.iframeHeight);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", ctx.getIframeOrHeaderStyleObject("header"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Turn off fullscreen view");
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", ctx.getIframeOrHeaderStyleObject("iframe"));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](208, _c30, ctx.isCustomGutter1_dragging || ctx.isCustomGutter2_dragging ? "block" : ctx.isIframeFullScreen ? "none" : ""));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction5"](210, _c38, !ctx.showResult, ctx.layout == 1, ctx.layout == 2, ctx.layout == 3, ctx.layout == 4));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](216, _c37, ctx.isFiddleThemeDark(), ctx.layout == 1 || ctx.layout == 3, ctx.layout == 2 || ctx.layout == 4));
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](220, _c35, ctx.isFiddleThemeDark()))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](222, _c36, "0 0 " + ctx.getEmptyAreaSize(2)));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _html_part_html_part_component__WEBPACK_IMPORTED_MODULE_2__.HtmlPartComponent, _css_part_css_part_component__WEBPACK_IMPORTED_MODULE_3__.CssPartComponent, _js_part_js_part_component__WEBPACK_IMPORTED_MODULE_4__.JsPartComponent, _iframe_part_iframe_part_component__WEBPACK_IMPORTED_MODULE_5__.IframePartComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__.ModalComponent, _ressources_ressources_component__WEBPACK_IMPORTED_MODULE_8__.RessourcesComponent, _fiddles_history_fiddles_history_component__WEBPACK_IMPORTED_MODULE_9__.FiddlesHistoryComponent, _pastebin_pastebin_component__WEBPACK_IMPORTED_MODULE_10__.PastebinComponent],
      styles: [".main-container[_ngcontent-%COMP%]{\n    display: flex;\n    width: calc(100vw - 4px);\n    height: calc(100vh - 38px);\n    box-shadow: 0 0 0 1px #bbb;   \n    position: relative; \n}\n\n.main-container.off[_ngcontent-%COMP%] {\n    opacity: 0;\n    pointer-events: none;\n    z-index: -1;\n    position:absolute;\n}\n\n#main-header[_ngcontent-%COMP%]{\n    height: 34px;\n    width: calc(100% - 10px);\n    display: flex;\n    justify-content: flex-end;\n    padding-right: 5px;\n    padding-left: 5px;\n    box-shadow: 0 0 0 1px #bbb;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n    \n\n    \n\n}\n\n.code-part-title[_ngcontent-%COMP%]{\n    width: 100%;\n    border-bottom: 1px solid #b5b5b5;\n    border-top: 1px solid #b5b5b5;\n    \n\n    text-align: center;\n    height: 20px;\n    display: flex;\n    align-items: center;\n    padding: 1px 0 1px 5px;\n    \n\n    font-size: 15px;\n}\n\n.code-part-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    color: #818181;\n    -webkit-user-select:none;\n            user-select:none;\n    pointer-events: none;\n    font-weight: 500;\n}\n\n.code-part-title-btns-container[_ngcontent-%COMP%]{\n  flex-grow: 1;\n  margin-left: 20px;\n  margin-right: 10px;\n  text-align: right;\n  height: 100%;\n}\n\n.code-part-title-btn[_ngcontent-%COMP%]{\n    cursor: pointer;\n    border: 1px solid #8c8c8c;\n    border-radius: 2px;\n    display: inline-flex;\n    align-items: center;\n    height: 14px;\n    padding: 2px;\n    min-width: 14px;\n    justify-content: center;\n}\n\n.code-part-title-btn[_ngcontent-%COMP%]   .fa-bars.vertical[_ngcontent-%COMP%]{\n    transform: rotate(90deg);\n}\n\n.code-part-title-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n    height: 12px;\n    \n\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    -webkit-user-select: none;\n            user-select: none;\n}\n\n.fullscreen-iframe-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .stretch-v-iframe-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .stretch-h-iframe-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.fullscreen-iframe-btn[_ngcontent-%COMP%], .stretch-v-iframe-btn[_ngcontent-%COMP%], .stretch-h-iframe-btn[_ngcontent-%COMP%] {\n    margin-left: 3px;\n    margin-right: 3px;\n    font-size: 14px;\n    padding: 1px 4px;\n    height: 28px;\n}\n\n.fullscreen-iframe-btn-secondary[_ngcontent-%COMP%]{\n    height: 21px;\n    padding: 0px 3px;\n    margin: 0;\n}\n\n.fullscreen-iframe-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .stretch-v-iframe-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .stretch-h-iframe-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\n    font-size: 19px;\n}\n\n.as-split-area[class][_ngcontent-%COMP%] {\n    \n\n    overflow-y: hidden;\n    overflow-x:hidden;\n}\n\n.code-component-container[_ngcontent-%COMP%]:not(.vertical-title-mode)   .code-part-title-btn[_ngcontent-%COMP%]:nth-last-child(n+2){\n    margin-right: 10px;\n}\n\n@media screen and (min-width:890px) and (min-height:581px){\n\n    .vertical-title-mode[_ngcontent-%COMP%]   .code-part-title-btn[_ngcontent-%COMP%]:not(:last-child) {\n        margin-bottom: 10px;\n    }\n    \n    .code-component-container.vertical-title-mode.fullscreen[_ngcontent-%COMP%]   .code-part-title-btn[_ngcontent-%COMP%]:nth-last-child(n+2){\n        margin-right: 10px;\n    }\n    \n    .code-component-container.vertical-title-mode[_ngcontent-%COMP%]:not(.fullscreen)   .code-part-title-btn[_ngcontent-%COMP%]{\n        width: calc(100% - 2px);\n        padding-left: 0;\n        padding-right: 0;\n        justify-content: center;\n    }\n}\n\n.main-container-fiddle.layout-type-3[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n}\n\n.main-resizer-floor[_ngcontent-%COMP%]{\n    position:absolute;\n    width:100%;\n    height:100%;\n    z-index:100;\n    left:0;\n    top:0;\n}\n#main-resizer[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #b5b5b5;\n    border:none;\n    z-index:101;\n}\n#main-resizer.layout-type-1[_ngcontent-%COMP%], #main-resizer.layout-type-3[_ngcontent-%COMP%]{\n    width: 12px;\n    cursor: col-resize;\n    height:100%;\n}\n\n#main-resizer[_ngcontent-%COMP%]:hover {\n    background-color: #afafaf;\n}\n\napp-iframe-part[_ngcontent-%COMP%]{\n    display:flex;\n    flex-direction:column;\n    flex-grow:1;\n    height: 100%;\n    width: 100%;\n    \n\n}\n\n.iframe-area[_ngcontent-%COMP%]{\n    min-height: 0;\n    position: relative;\n}\n\n#code-parts-title-mobile[_ngcontent-%COMP%]{\n    display:none;\n    height: 35px;\n}\n\n#code-parts-title-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    border:1px solid #8b8b8b;\n    border-radius:2px;\n    font-size: 0.85rem;\n    padding: 3px 0px 3px 0px !important;\n    min-width:54px;\n    text-align:center;\n    cursor:pointer;\n}\n\n#code-parts-title-mobile[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    font-weight: 600;\n}\n\n#code-parts-title-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child) {\n    margin-left:3px;\n}\n\n#code-parts-title-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right:3px;\n}\n\n.share-code-btn[_ngcontent-%COMP%], .ressources-code-btn[_ngcontent-%COMP%], .themes-btn[_ngcontent-%COMP%], .console-btn[_ngcontent-%COMP%]\n{\n    cursor: pointer;\n    display: block;\n    text-align: center;\n    border-width: 1px;\n    border-style: solid;\n    border-color: rgb(118, 118, 118);\n    -webkit-user-select: none;\n            user-select: none;\n    color:rgb(0,0,0);\n    outline: none;\n}\n\n.share-code-btn[_ngcontent-%COMP%], .ressources-code-btn[_ngcontent-%COMP%], .console-btn[_ngcontent-%COMP%]{\n    padding: 1px 6px;\n}\n\n.themes-btn[_ngcontent-%COMP%]{\n    font-size: 24px;\n    padding: 1px 3px;\n}\n\n.themes-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    font-weight: bold;\n}\n\n\n\n\n\n\n\n\n\n.btn[_ngcontent-%COMP%]:active{\n    padding-top: 4px !important;\n}\n.share-code-btn[_ngcontent-%COMP%]:hover, .ressources-code-btn[_ngcontent-%COMP%]:hover, .themes-btn[_ngcontent-%COMP%]:hover, .console-btn[_ngcontent-%COMP%]:hover{\n    background-color: #FFFFFF;\n}\n\n.share-code-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .ressources-code-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .themes-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .console-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    display:block;\n}\n\n.header-btns-container[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.header-btns-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    margin-left:3px;\n    margin-right:3px;\n    padding: 1px 4px;\n}\n  \n.header-btns-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:last-child {\n    margin-right:0px;\n}\n\n.header-btns-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:first-child {\n    margin-left:0px;\n}\n\n.header-btns-container[_ngcontent-%COMP%]    > .ressources-code-btn[_ngcontent-%COMP%], .header-btns-container[_ngcontent-%COMP%]    > .layouts-list-container[_ngcontent-%COMP%], .header-btns-container[_ngcontent-%COMP%]    > .share-code-btn[_ngcontent-%COMP%], .header-btns-container[_ngcontent-%COMP%]    > .themes-btn[_ngcontent-%COMP%], .header-btns-container[_ngcontent-%COMP%]    > .console-btn[_ngcontent-%COMP%]{\n    height:30px;\n}\n\n.header-btns-container[_ngcontent-%COMP%]    > .themes-btn[_ngcontent-%COMP%]{\n    margin-right:6px;\n    padding: 0 6px;\n}\n\n.themes-btn-container[_ngcontent-%COMP%]{\n    position: relative;\n}\n\n.paypal-btn-container[_ngcontent-%COMP%] {\n    height: 30px;\n}\n\n.paypal-btn-container[_ngcontent-%COMP%]   div#donate-button[_ngcontent-%COMP%] {\n    position: relative;\n    font-size: 14px;\n    width: 35px;\n    height: 28px;\n\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: auto 100%;\n}\n\n  div#donate-button img{\n    opacity: 0;\n}\n\ni.fa.fa-sort-desc[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 2px;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 10px;\n    display: flex;\n    align-items: center;\n    right:1px;\n}\n\ni.fa.fa-sort-asc[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    bottom: 0px;\n}\n\n  .paypal-btn-container #donate-button img {\n    position: absolute;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    top: 0;\n}\n\n.paypal-btn-container[_ngcontent-%COMP%]   .btn.paypal-btn[_ngcontent-%COMP%]   button.layouts-btn[_ngcontent-%COMP%] {\n    position: relative;\n    padding-right: 13px;\n    display: flex;\n    align-items: center;\n}\n\n.paypal-btn-container[_ngcontent-%COMP%]   ul.donations-menu[_ngcontent-%COMP%], .themes-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    top: calc(100% + 7px);\n    list-style: none;\n    margin: 0;\n    width: 143px;\n    border-radius: 2px;\n    background-color: #FFFFFF;\n    \n    font-size: 20px;\n    overflow: hidden;\n\n    height: 159px;\n    padding: 8px;\n    box-shadow: none;\n    opacity:0;\n    pointer-events: none;\n    z-index: -1;\n}\n\n.themes-menu[_ngcontent-%COMP%]{\n    width:200px;\n}\n\n.themes-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 1rem;\n}\n\n.paypal-btn-container[_ngcontent-%COMP%]   ul.donations-menu.shown[_ngcontent-%COMP%], .themes-menu.shown[_ngcontent-%COMP%] {\n    height:159px;\n    padding: 8px;\n    box-shadow: 0px 0px 4px 2px #8b8b8b;\n    opacity: 1;\n    pointer-events: all;\n    z-index: 99;\n    overflow:auto;\n}\n\n.paypal-btn-container[_ngcontent-%COMP%]   ul.donations-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child    ~ li[_ngcontent-%COMP%], .themes-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child    ~ li[_ngcontent-%COMP%] {\n    border-top: 1px solid #8b8b8b5e;\n}\n\n.paypal-btn-container[_ngcontent-%COMP%]   ul.donations-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], .themes-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    padding: 8px 4px;\n    cursor: pointer;\n}\n\n.paypal-btn-container[_ngcontent-%COMP%]   ul.donations-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n    background-color: #8b8b8b26;\n    font-weight: 600;\n}\n\n.layouts-list-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 16px;\n    box-sizing: border-box;\n    cursor: pointer;\n    -webkit-user-select: none;\n            user-select: none;\n    outline: none;\n    padding:1px 6px;\n\n    position: relative;\n    padding: 1px 0px;\n    border: none;\n}\n\n.layouts-list-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    position: relative;\n    padding-right: 14px;   \n}\n\n.layouts-list-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%]{\n    position: absolute;\n    right: 0;\n    bottom: 7px;\n}\n\n.shown[_ngcontent-%COMP%]   i.fa-sort-asc[_ngcontent-%COMP%]{\n    bottom: 0px;\n}\n\n.layout[_ngcontent-%COMP%]{\n    cursor: pointer;\n}\n\n.layout[_ngcontent-%COMP%]:hover{\n    background-color: rgba(139,139,139,0.2);\n}\n\n.layout.active[_ngcontent-%COMP%] {\n    background-color:#8b8b8b;\n    border-color: #FFFFFF;\n    box-shadow: 0 0 0px 1px #8b8b8b;\n}\n\n.layout.active[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child{\n    outline: 2px solid #FFFFFF;\n}\n\n.layout.active[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]{\n    outline: 1px solid #FFFFFF;\n}\n\n\n.layout-1[_ngcontent-%COMP%] {\n    border: 2px solid #8b8b8b;\n    width: 65px;\n    height: 41px;\n    display: flex;\n    margin-right: 10px;\n}\n\n.layout-1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    width: 27%;\n    height: 100%;\n    outline: 2px solid #8b8b8b;\n}\n\n.layout-1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 33.5%;\n    outline: 1px solid #8b8b8b;\n}\n\n.layout-1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    flex-grow: 1;\n    height: 100%;\n}\n\n\n.layout-2[_ngcontent-%COMP%] {\n    border: 2px solid #8b8b8b;\n    width: 65px;\n    height: 41px;\n    display: flex;\n    flex-direction:column;\n    margin-right: 10px;\n}\n\n.layout-2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    height: 35%;\n    width: 100%;\n    outline: 2px solid #8b8b8b;\n    display: flex;\n}\n\n.layout-2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 33.5%;\n    outline: 1px solid #8b8b8b;\n}\n\n.layout-2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    flex-grow: 1;\n}\n\n\n.layout-3[_ngcontent-%COMP%] {\n    border: 2px solid #8b8b8b;\n    width: 65px;\n    height: 41px;\n    display: flex;\n    flex-direction:row-reverse;\n    margin-right: 10px;\n}\n\n.layout-3[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    width: 27%;\n    height: 100%;\n    outline: 2px solid #8b8b8b;\n}\n\n.layout-3[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 33.5%;\n    outline: 1px solid #8b8b8b;\n}\n\n.layout-3[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    flex-grow: 1;\n    height: 100%;\n}\n\n\n.layout-4[_ngcontent-%COMP%] {\n    border: 2px solid #8b8b8b;\n    width: 65px;\n    height: 41px;\n    display: flex;\n    flex-direction:column-reverse;\n}\n\n.layout-4[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    height: 35%;\n    width: 100%;\n    outline: 2px solid #8b8b8b;\n    display: flex;\n}\n\n.layout-4[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 33.5%;\n    outline: 1px solid #8b8b8b;\n}\n\n.layout-4[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    flex-grow: 1;\n}\n\n\n\n.layouts-list[_ngcontent-%COMP%]{\n    position: absolute;\n    height: 44px;\n    padding:8px;\n    overflow: hidden;\n    top: calc(100% + 8px);\n    background-color: #FFFFFF;\n    box-shadow: 0px 0px 4px 2px #8b8b8b;\n    z-index: 102;\n    opacity: 0;\n    pointer-events: none;\n    cursor: default;\n    display: flex;\n    right:0px;\n}\n\n@media screen and (min-width:890px) and (min-height:581px){\n    .prettify-mobile-code[_ngcontent-%COMP%]{\n        display:none;\n    }\n\n    .code-component-container.vertical-title-mode[_ngcontent-%COMP%]:not(.fullscreen) {\n        flex-direction: row;\n        border-top:2px solid #b5b5b5;\n    }\n\n    .code-component-container.vertical-title-mode[_ngcontent-%COMP%]:not(.fullscreen)    > .code-part-title[_ngcontent-%COMP%] {\n        flex-direction: column-reverse;\n        height: 100%;\n        width: 20px;\n        padding: 1px 2px 0 2px;\n        border-top: none;\n        border-bottom: none;\n        border-right: 1px solid #b5b5b5;\n    }\n\n    .code-component-container.vertical-title-mode[_ngcontent-%COMP%]:not(.fullscreen)    > app-html-part.code-component[_ngcontent-%COMP%] {\n        width: calc(100% - 30px);\n    }\n\n    .code-component-container.vertical-title-mode[_ngcontent-%COMP%]:not(.fullscreen)    > .code-part-title[_ngcontent-%COMP%]    > .code-part-title-btns-container[_ngcontent-%COMP%] {\n        margin: 0px;\n        height: auto;\n        flex: none;\n    }\n\n    .code-component-container.vertical-title-mode[_ngcontent-%COMP%]:not(.fullscreen)    > .code-part-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n        writing-mode: vertical-lr;\n        margin-bottom: 10px;\n        flex-grow: 1;\n        text-align: left;\n        padding-top: 10px;\n    }\n\n\n    .code-part-title-btn[_ngcontent-%COMP%]   .fa-arrows-h-vertical[_ngcontent-%COMP%] {\n        flex-direction: column;\n        height: auto;\n    }\n\n    .code-part-title-btn[_ngcontent-%COMP%]   .fa-arrows-v[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .code-part-title-btn[_ngcontent-%COMP%]   .fa-arrows-h[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        font-weight: bold;\n    }\n    \n    .code-part-title-btn.vertical-title-mode[_ngcontent-%COMP%] {\n        height: auto;\n    }\n    \n    .code-part-title-btn[_ngcontent-%COMP%]   .fa-arrows-h-vertical[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n        width: 100%;\n    }\n}\n\n.fiddle-title[_ngcontent-%COMP%]   .fiddle-input[_ngcontent-%COMP%]{\n    min-width: 200px;\n    font-size: 14px;\n\n    \n\n\n\n\n\n\n\n\n}\n\n.app-loader[_ngcontent-%COMP%]{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.pastebin-component-container[_ngcontent-%COMP%]{\n    flex-grow: 1;\n}\n\n.fiddle-title[_ngcontent-%COMP%]{\n    margin-left: 60px;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n}\n\n.fiddle-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\n    margin-right:5px;\n}\n\n.fiddle-size[_ngcontent-%COMP%]{\n    margin-left: 7px;\n}\n\n.fiddle-size[_ngcontent-%COMP%]   span.x[_ngcontent-%COMP%]{\n    margin: 0 3px;\n}\n\n.fiddle-size-hack.fiddle-size[_ngcontent-%COMP%]{\n    margin: 0px;\n    opacity: 0.9;\n    color: #c9c9c9;\n    background: #000000;\n    padding: 5px;\n    border-radius: 3px;\n    box-shadow: 0 0 15px 4px #000000;\n    width:auto;\n}\n\n.fiddle-size-hack[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    -webkit-user-select: none;\n            user-select: none;\n}\n\n.fiddle-title[_ngcontent-%COMP%]   .fiddle-size[_ngcontent-%COMP%]   .width[_ngcontent-%COMP%], .fiddle-title[_ngcontent-%COMP%]   .fiddle-size[_ngcontent-%COMP%]   .height[_ngcontent-%COMP%] {\n    font-weight: 600;\n    -moz-appearance:textfield;\n    width: 36px;\n    text-align:center;\n}\n\n.fiddle-title[_ngcontent-%COMP%]   .fiddle-size[_ngcontent-%COMP%]   input.width[_ngcontent-%COMP%]::-webkit-outer-spin-button, .fiddle-title[_ngcontent-%COMP%]   .fiddle-size[_ngcontent-%COMP%]   input.width[_ngcontent-%COMP%]::-webkit-inner-spin-button, .fiddle-title[_ngcontent-%COMP%]   .fiddle-size[_ngcontent-%COMP%]   input.height[_ngcontent-%COMP%]::-webkit-outer-spin-button, .fiddle-title[_ngcontent-%COMP%]   .fiddle-size[_ngcontent-%COMP%]   input.height[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n}\n\n.fiddle-logo[_ngcontent-%COMP%]{\n    width: 50px;\n    position: absolute;\n    left: 4px;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 35px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n.fiddle-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    height: calc(100% - 10px);\n    max-width: 100%;\n}\n\n@media screen and (max-width:550px){\n    .layouts-list[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-rows: auto auto;\n        grid-template-columns: auto auto;\n        align-items: center;\n        justify-items: center;\n    }\n\n    .layouts-list[class][_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]{\n        margin:0px;\n    }\n    \n    .layouts-list[class][_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]:nth-child(2n+1){\n        margin-right:10px;\n    }\n\n    .paypal-btn-container[_ngcontent-%COMP%]   .btn.paypal-btn[_ngcontent-%COMP%]   button.layouts-btn[_ngcontent-%COMP%]{\n        font-size: 0px;\n        position:static;\n    }\n    \n    .paypal-btn-container[_ngcontent-%COMP%]   .btn.paypal-btn[_ngcontent-%COMP%]   button.layouts-btn[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%]{\n        font-size: 16px;\n    }\n\n    .paypal-btn-container[_ngcontent-%COMP%]   .btn.paypal-btn[_ngcontent-%COMP%] {\n        padding-left: 18px !important;\n        padding-right: 14px;\n    }\n}\n\n.layouts-list-container.shown[_ngcontent-%COMP%]   .layouts-list[_ngcontent-%COMP%] {\n    padding: 8px;\n    opacity: 1;\n    pointer-events: all;\n}\n\n.hidden[_ngcontent-%COMP%]   .fa.fa-sort-asc[_ngcontent-%COMP%]{\n    display: none;\n}\n\n.shown[_ngcontent-%COMP%]   .fa.fa-sort-desc[_ngcontent-%COMP%]{\n    display: none;\n}\n\n.as-split-gutter-custom[_ngcontent-%COMP%]{\n    flex:0 0 5px;\n}\n\n.as-split-gutter-custom.is-horizontal[_ngcontent-%COMP%]{\n    height:100%;\n    cursor:col-resize;\n}\n\n.as-split-gutter-custom.is-vertical[_ngcontent-%COMP%]{\n    width:100%;\n    cursor:row-resize;\n}\n\n.iframe-overlay-for-drop[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    background: transparent;\n}\n\n.iframe-area[_ngcontent-%COMP%]:hover   .iframe-overlay-for-drop[_ngcontent-%COMP%]{\n    display: none;\n}\n\n.empty-area[class][_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0) repeating-linear-gradient(45deg,  transparent 15px, rgba(204, 204, 204, 0.38) 30px) repeat scroll 0% 0%;\n}\n\n.empty-area.is-dark-mode[class][_ngcontent-%COMP%]{\n    background: rgba(0, 0, 0, 0) repeating-linear-gradient(45deg,  transparent 15px,rgba(204, 204, 204, 0.2) 30px) repeat scroll 0% 0%;\n}\n\n.as-split-gutter-custom[_ngcontent-%COMP%]    > .as-split-gutter-icon-custom[_ngcontent-%COMP%]{\n    background-position: 50%;\n    background-repeat: no-repeat;\n    height: 100%;\n    width: 100%;\n}\n\n[_nghost-%COMP%]     .codeparts-iframe-container[class] > .as-split-gutter[class], [_nghost-%COMP%]     .codeparts-iframe-container[class] > .as-split-gutter[class], .as-split-gutter-custom[_ngcontent-%COMP%]{\n    border-radius: 10px;\n}\n\n[_nghost-%COMP%]     .codeparts-iframe-container:not(.is-dark-mode)[class] > .as-split-gutter[class], [_nghost-%COMP%]     .codeparts-iframe-container:not(.is-dark-mode)[class] > .as-split-gutter[class], .as-split-gutter-custom[_ngcontent-%COMP%]{\n    box-shadow: inset 0px 0px 0px 1px #00000024;\n}\n\n\n[_nghost-%COMP%]     .codeparts-iframe-container.is-dark-mode[class] > .as-split-gutter[class], [_nghost-%COMP%]     .codeparts-iframe-container.is-dark-mode[class] > .as-split-gutter[class], .as-split-gutter-custom.is-dark-mode[_ngcontent-%COMP%]{\n    box-shadow: inset 0px 0px 0px 1px #FFFFFF24;\n}\n\n[_nghost-%COMP%]     .codeparts-iframe-container:not(.is-dark-mode)[class] .as-horizontal[class] > .as-split-gutter[class] > .as-split-gutter-icon[class], [_nghost-%COMP%]     .codeparts-iframe-container:not(.is-dark-mode)[class].as-horizontal[class] > .as-split-gutter[class] > .as-split-gutter-icon[class], .as-split-gutter-custom.is-horizontal[_ngcontent-%COMP%]    > .as-split-gutter-icon-custom[_ngcontent-%COMP%]{\n    background-image: url(data:image/png;base64,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dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDo2MmIyMGQ2Yy1lNTA3LTRjNzEtODJhMi00M2FhZTJhMGJlMjkiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Zjk1ZDlkMDQtOTFjYi00MGRkLTk5NTMtZDdmZTY3NjlhMDExIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjBlMWVkYzMtNWU3ZS00YzE3LTgxODAtNTI3NzkzM2VkZmJhIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJMaW51eCIKICAgR0lNUDpUaW1lU3RhbXA9IjE2MjgxMjIwNDQ4Mjg2MjIiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4yMiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIj4KICAgPGlwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICA8aXB0Y0V4dDpMb2NhdGlvblNob3duPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25TaG93bj4KICAgPGlwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICA8aXB0Y0V4dDpSZWdpc3RyeUlkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6UmVnaXN0cnlJZD4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGY5MmM0MjMtYzI2Ny00NjU5LWFkZDEtOTFiZDE4YjQ0MmRlIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKExpbnV4KSIKICAgICAgc3RFdnQ6d2hlbj0iKzAxOjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICAgPHBsdXM6SW1hZ2VTdXBwbGllcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlU3VwcGxpZXI+CiAgIDxwbHVzOkltYWdlQ3JlYXRvcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlQ3JlYXRvcj4KICAgPHBsdXM6Q29weXJpZ2h0T3duZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpDb3B5cmlnaHRPd25lcj4KICAgPHBsdXM6TGljZW5zb3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpMaWNlbnNvcj4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pp5dyfsAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflCAUABxjR3pXzAAAAI0lEQVQoz2N08Qj/z8DAwLBnx0pGGJuJgSLAOGrmqJl4zQQALkIvKbxhHpAAAAAASUVORK5CYII=)\n}\n\n[_nghost-%COMP%]     .codeparts-iframe-container:not(.is-dark-mode)[class] .as-vertical[class] > .as-split-gutter[class] > .as-split-gutter-icon[class], [_nghost-%COMP%]     .codeparts-iframe-container:not(.is-dark-mode)[class].as-vertical[class] > .as-split-gutter[class] > .as-split-gutter-icon[class], .as-split-gutter-custom.is-vertical[_ngcontent-%COMP%]    > .as-split-gutter-icon-custom[_ngcontent-%COMP%]{\n    background-image: url(data:image/png;base64,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b20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6NmJiZjZlZGMtN2M3My00ODYzLWJhM2UtNDFlMjE2Mzk0MWE0IgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZkOWY3Yzc3LTdjYjktNGIyOC05NWU5LTM0NTVlMDg3MTRhNiIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjViMDcwNDBmLTkxYmEtNGQ1YS1iMTIwLTg0OWU1MjRmMDA5YSIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iTGludXgiCiAgIEdJTVA6VGltZVN0YW1wPSIxNjI4MTE4NTcyOTc3NjUzIgogICBHSU1QOlZlcnNpb249IjIuMTAuMjIiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCI+CiAgIDxpcHRjRXh0OkxvY2F0aW9uQ3JlYXRlZD4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OkxvY2F0aW9uQ3JlYXRlZD4KICAgPGlwdGNFeHQ6TG9jYXRpb25TaG93bj4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OkxvY2F0aW9uU2hvd24+CiAgIDxpcHRjRXh0OkFydHdvcmtPck9iamVjdD4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OkFydHdvcmtPck9iamVjdD4KICAgPGlwdGNFeHQ6UmVnaXN0cnlJZD4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OlJlZ2lzdHJ5SWQ+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmRiMGMxYjU1LTRkZWItNDA3Mi04NjRhLWMyNDIxYzA3NzVmNCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChMaW51eCkiCiAgICAgIHN0RXZ0OndoZW49IiswMTowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgIDxwbHVzOkltYWdlU3VwcGxpZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZVN1cHBsaWVyPgogICA8cGx1czpJbWFnZUNyZWF0b3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZUNyZWF0b3I+CiAgIDxwbHVzOkNvcHlyaWdodE93bmVyPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6Q29weXJpZ2h0T3duZXI+CiAgIDxwbHVzOkxpY2Vuc29yPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6TGljZW5zb3I+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz7J0IT+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QgEFwkgxorScwAAACRJREFUKM9jdPEI/8/AwMCwZ8dKRgYGBgZ68ZkYRhpgHHFBDQBDlTvLo66BTwAAAABJRU5ErkJggg==)\n}\n\n.as-split-gutter-custom.is-vertical.is-dark-mode[_ngcontent-%COMP%]    > .as-split-gutter-icon-custom[_ngcontent-%COMP%]{\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC\");\n}\n\n.as-split-gutter-custom.is-horizontal.is-dark-mode[_ngcontent-%COMP%]    > .as-split-gutter-icon-custom[_ngcontent-%COMP%]{\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==\");\n}\n\n.iframe-overlay[_ngcontent-%COMP%]{\n    background: rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 35px;\n    z-index: 2;\n}\n\n[hidden][_ngcontent-%COMP%]{\n    display:none;\n}\n\nas-split-area[_ngcontent-%COMP%]    > app-iframe-part[_ngcontent-%COMP%], as-split-area[_ngcontent-%COMP%]    > app-html-part[_ngcontent-%COMP%], as-split-area[_ngcontent-%COMP%]    > app-css-part[_ngcontent-%COMP%], as-split-area[_ngcontent-%COMP%]    > app-js-part[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n}\n\n.code-component-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n\n    overflow: hidden;\n}\n\n[_ngcontent-%COMP%]:where(.codeparts-iframe-container[data-layout='1'], .codeparts-iframe-container[data-layout='3'])[_ngcontent-%COMP%]   .code-component-container[_ngcontent-%COMP%]{\n    height: 0px;\n}\n\n\n.code-part-title[_ngcontent-%COMP%] {\n    transition: width 0.3s;\n}\n\n\n\n\n\n\n\n\n@media screen and (min-width:890px) and (min-height:581px){\n    [_nghost-%COMP%]     app-iframe-part.layout-type-1{\n        align-items: flex-end;\n    }\n    \n    [_nghost-%COMP%]     app-iframe-part.layout-type-3{\n        align-items: flex-start;\n    }\n\n    .main-container-fiddle.full-screen-iframe[_ngcontent-%COMP%]   .iframe-area[class][_ngcontent-%COMP%] {\n        position: fixed;\n        flex: none !important;\n        left: 0;\n        top: 23px;\n        z-index: 99;\n        width: 100%;\n        height: calc(100% - 23px);\n    }\n    \n    .main-container-fiddle.full-screen-iframe[_ngcontent-%COMP%]   .fullscreen-iframe-header[_ngcontent-%COMP%] {\n        position: fixed;\n        height: 22px;\n        width: 100%;\n        z-index: 99;\n        top: 0;\n        left: 0;\n        display:flex;\n        align-items: center;\n    }\n    \n\n    .fiddle-size[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .form-control.fiddle-input[_ngcontent-%COMP%] {\n      flex: 0 0 auto;\n    }\n\n    .fiddle-title[class][_ngcontent-%COMP%]   .fiddle-input[class][_ngcontent-%COMP%]{\n      font-size: 14px;\n    }\n\n    .logo-title-container[_ngcontent-%COMP%] {\n      max-width: calc(50% - 44px);\n      \n\n    }\n\n    .fiddle-title[_ngcontent-%COMP%] {\n      max-width: calc(100% - 60px);\n    }\n\n    .fiddle-size[_ngcontent-%COMP%] {\n      width: 94px;\n    }\n\n    .fullscreen-iframe-btn.btn[_ngcontent-%COMP%] {\n      width: 26px;\n    }\n    \n}\n\n[_nghost-%COMP%]     .monaco-editor .monaco-hover {\n    left: 0px !important;\n    z-index: 102 !important;\n    max-width: 100% !important;\n    overflow: auto;\n}\n\n[_nghost-%COMP%]     .monaco-scrollable-element{\n    min-width: min-content;\n}\n\n[_nghost-%COMP%]     .monaco-editor .parameter-hints-widget{\n    z-index: 103 !important;\n    left: 0px !important;\n}\n\n\n.codeparts-container[_ngcontent-%COMP%] {\n    flex-basis: 300px;\n    display: flex;\n    flex-direction: column;\n\n    overflow: hidden;\n}\n\n.codeparts-iframe-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-grow: 1;\n    height: 100%;\n}\n\n.as-split-area-iframe.is-vertical[_ngcontent-%COMP%] {\n    flex-grow: 1;\n}\n\n\n\n.codeparts-iframe-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-grow: 1;\n    height: 100%;\n}\n\n.as-split-area-iframe.is-vertical[_ngcontent-%COMP%] {\n    flex-grow: 1;\n}\n\n.code-part-gutter[_ngcontent-%COMP%], .main-container-gutter[_ngcontent-%COMP%]{\n    \n\n    flex-basis: 5px;\n    cursor: grab;\n    z-index: 1;\n}\n \n\n.as-split-area-iframe[_ngcontent-%COMP%] {\n    display: flex;\n    flex-grow: 1;\n    flex-basis: 0px;\n    min-height: 0px;\n}\n\n.as-split-area-iframe.is-vertical[_ngcontent-%COMP%] {\n    flex-direction: column;\n}\n\n.codeparts-iframe-container[data-layout='2'][_ngcontent-%COMP%] {\n    flex-direction: column;\n}\n\n\n.codeparts-iframe-container[data-layout='3'][_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n}\n\n.codeparts-iframe-container[data-layout='4'][_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n}\n\n.codeparts-iframe-container[data-layout='2'][_ngcontent-%COMP%]   .codeparts-container[class][_ngcontent-%COMP%] {\n    flex-direction: row;\n}\n\n.codeparts-iframe-container[data-layout='4'][_ngcontent-%COMP%]   .codeparts-container[class][_ngcontent-%COMP%] {\n    flex-direction: row;\n}\n\n.code-component-container[_ngcontent-%COMP%]{\n    display: flex;   \n}\n\n.code-component[_ngcontent-%COMP%]{\n    flex-grow: 1;\n}\n\n[_ngcontent-%COMP%]:where(.codeparts-iframe-container[data-layout='1'], .codeparts-iframe-container[data-layout='3'])[_ngcontent-%COMP%]   .code-component-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n}\n\n[_ngcontent-%COMP%]:where(.codeparts-iframe-container[data-layout='1'], .codeparts-iframe-container[data-layout='3'])[_ngcontent-%COMP%]   .code-component-container[_ngcontent-%COMP%]   .code-component[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    height:0px;\n}\n\n\n@media (min-width:890px) {\n    .code-component-container.fullscreen[_ngcontent-%COMP%] {\n        position: fixed !important;\n        left: 0 !important;\n        top: 0 !important;\n        width: 100% !important;\n        height: 100% !important;\n        z-index: 125 !important;\n        padding:0px;\n    }\n    .code-part-title[_ngcontent-%COMP%]{\n        border-top: 1px solid #b5b5b5;\n    }\n}\n\n@media (max-width:889px), (max-height:580px) {  \n\n        .code-part-gutter.gutter[_ngcontent-%COMP%]{\n            display: none;\n        }\n    \n        .code-component-container[_ngcontent-%COMP%]{\n            flex-basis:auto;\n            flex-grow:1;\n        }\n\n    .hide-mobile[_ngcontent-%COMP%]{\n        display: none !important;\n    }\n\n    .iframe-area[_ngcontent-%COMP%] {\n        flex: none !important;\n        height: 100%;\n        width: 100%;\n    }\n    \n    [_nghost-%COMP%]     as-split[class] > .as-split-gutter[class], .as-split-gutter-custom[_ngcontent-%COMP%]{\n        display:none;\n    }\n\n    #main-header[_ngcontent-%COMP%]{\n        padding-right: 0px;\n        padding-left: 0px;\n        width:100%;\n        justify-content: center;\n        \n        flex-direction: column;\n        height: 62px;\n        padding: 3px 0 5px 0;\n    }\n    \n    #code-parts-title-mobile[_ngcontent-%COMP%]{\n        display:flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #main-resizer[_ngcontent-%COMP%]{\n        display:none;\n    }\n\n    .code-part-title-btn[_ngcontent-%COMP%], .fullscreen-iframe-btn[_ngcontent-%COMP%], .stretch-v-iframe-btn[_ngcontent-%COMP%], .stretch-h-iframe-btn[_ngcontent-%COMP%]{\n        display: none;\n    }\n\n    .layouts-list-container[_ngcontent-%COMP%]{\n        \n\n\n        display:none;\n    }\n\n    .layouts-list[_ngcontent-%COMP%]{\n        display:none;\n    }\n\n    .main-container-fiddle[_ngcontent-%COMP%]{\n        width:100%;\n        height: calc(100vh - 71px);\n        flex-direction:column !important;\n    }\n\n    .fiddle-size[_ngcontent-%COMP%]{\n        display: none;\n    }\n\n    .code-part-title[_ngcontent-%COMP%]{\n        display:none\n    }\n\n    .code-component[_ngcontent-%COMP%] {\n        border-top: 1px solid #b5b5b5;\n    }\n\n    .codeparts-iframe-container[_ngcontent-%COMP%]{\n        display:flex;\n        flex-direction: column !important;\n    }\n\n    .as-split-gutter[_ngcontent-%COMP%] {\n        display: none !important;\n    }\n\n    .as-split-gutter-custom[_ngcontent-%COMP%]{\n        display: none;\n    }\n\n    as-split-area.codeparts-container[_ngcontent-%COMP%] {\n        width:100% !important;\n        height:50% !important;\n        flex:none !important;\n        order:0 !important;\n    }\n\n    as-split-area.as-split-area-iframe[_ngcontent-%COMP%] {\n        width:100% !important;\n        height:50% !important;\n        flex:none !important;\n    }\n\n    .codeparts-iframe-container.no-result-mobile[_ngcontent-%COMP%]    > .codeparts-container[_ngcontent-%COMP%], .codeparts-iframe-container.no-result-mobile[_ngcontent-%COMP%]    > .as-split-area-iframe[_ngcontent-%COMP%]{\n        height:100% !important;\n    }\n\n    .codeparts-iframe-container.no-code-mobile[_ngcontent-%COMP%]    > .codeparts-container[_ngcontent-%COMP%], .codeparts-iframe-container.no-code-mobile[_ngcontent-%COMP%]    > .as-split-area-iframe[_ngcontent-%COMP%]{\n        height:100% !important;\n    }\n\n    as-split-area.code-component-container[_ngcontent-%COMP%]{\n        width:100%;\n        height:100%;\n        flex: none !important;\n    }\n\n    .app-loader[_ngcontent-%COMP%]{\n        transform: none;\n        left: auto;\n        top: 4px;\n        right: 4px;\n    }\n\n    .fiddle-title[_ngcontent-%COMP%]{\n        margin-left: 0px;\n        margin-bottom: 5px;\n    }\n\n    .fiddle-logo[_ngcontent-%COMP%]{\n        left: 4px;\n        top: 0px;\n        transform: none;\n        width: 45px;\n    }\n\n    \n\n    \n    .as-split-area-iframe[_ngcontent-%COMP%]    > .empty-area[_ngcontent-%COMP%]{\n        display: none;\n    }\n    \n    .as-split-gutter-custom[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .main-container-fiddle.full-screen-iframe[_ngcontent-%COMP%]   .fullscreen-iframe-header[_ngcontent-%COMP%]{\n        display: none;\n    }\n\n    .iframe-overlay-for-drop[_ngcontent-%COMP%]{\n        display:none;\n    }\n\n}\n\n@media screen and (max-width:400px){\n    .header-btns-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child){\n        margin-right:3px;\n        margin-left:0px;\n        padding: 1px 2px;\n    }\n\n    .header-btns-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child{\n        margin-left:3px;\n        padding: 1px 2px;\n    }\n\n    .logo-title-container[_ngcontent-%COMP%] {\n        display: flex;\n    }\n    \n    .fiddle-logo[_ngcontent-%COMP%] {\n        position: static;\n        margin-right: 10px;\n    }\n}\n\napp-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    padding: 2px 4px;\n}\napp-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    padding: 2px 4px;\n}\n\napp-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%]{\n    position: static;\n    transform:none;\n}\n\napp-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-validate-btn[_ngcontent-%COMP%]{\n    padding: 4px 10px;\n    height: 33px;\n}\n\n.themes-menu[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n    font-weight: bold;\n    \n\n    \n\n    text-decoration: underline;\n}\n\n.clinging[_ngcontent-%COMP%]{\n    animation-name: cling;\n    animation-duration: 0.5s;\n    animation-iteration-count: infinite;\n    z-index: 1;\n    position: relative;\n}\n\nbutton.history-btn.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    width: 30px;\n}\n\nbutton.history-btn.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    width: 30px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: calc(100% - 4px);\n    height: 100%;\n    display:inline-block;\n}\n\n\n[_nghost-%COMP%]     .code-component-container ngx-codemirror {\n    height: 100%;\n    display: flex !important;\n    flex-direction: column;\n}\n\n[_nghost-%COMP%]     .code-component-container ngx-codemirror .CodeMirror {\n    flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3QkFBZ0I7WUFBaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBaUI7WUFB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Qjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQSxlQUFlO0FBQ2Y7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDRweCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzhweCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNiYmI7ICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbn1cblxuLm1haW4tY29udGFpbmVyLm9mZiB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbn1cblxuI21haW4taGVhZGVye1xuICAgIGhlaWdodDogMzRweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2JiYjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLypiYWNrZ3JvdW5kOiAjZjBmMGYwOyovXG4gICAgLypiYWNrZ3JvdW5kOiAjZjlmOWY5OyovXG59XG5cbi5jb2RlLXBhcnQtdGl0bGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiNWI1YjU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiNWI1YjU7XG4gICAgLypjb2xvcjogIzhiOGI4YjsqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFweCAwIDFweCA1cHg7XG4gICAgLypiYWNrZ3JvdW5kOiAjRkZGRkZGOyovXG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uY29kZS1wYXJ0LXRpdGxlID4gc3BhbiB7XG4gICAgY29sb3I6ICM4MTgxODE7XG4gICAgdXNlci1zZWxlY3Q6bm9uZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29kZS1wYXJ0LXRpdGxlLWJ0bnMtY29udGFpbmVye1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb2RlLXBhcnQtdGl0bGUtYnRue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGM4YzhjO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTRweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgbWluLXdpZHRoOiAxNHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29kZS1wYXJ0LXRpdGxlLWJ0biAuZmEtYmFycy52ZXJ0aWNhbHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5jb2RlLXBhcnQtdGl0bGUtYnRuIC5mYSB7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIC8qd2lkdGg6IDE0cHg7Ki9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZnVsbHNjcmVlbi1pZnJhbWUtYnRuIC5mYSxcbi5zdHJldGNoLXYtaWZyYW1lLWJ0biAuZmEsXG4uc3RyZXRjaC1oLWlmcmFtZS1idG4gLmZhe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mdWxsc2NyZWVuLWlmcmFtZS1idG4sXG4uc3RyZXRjaC12LWlmcmFtZS1idG4sXG4uc3RyZXRjaC1oLWlmcmFtZS1idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDFweCA0cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xufVxuXG4uZnVsbHNjcmVlbi1pZnJhbWUtYnRuLXNlY29uZGFyeXtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgcGFkZGluZzogMHB4IDNweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5mdWxsc2NyZWVuLWlmcmFtZS1idG4gLmZhLFxuLnN0cmV0Y2gtdi1pZnJhbWUtYnRuIC5mYSxcbi5zdHJldGNoLWgtaWZyYW1lLWJ0biAuZmF7XG4gICAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4uYXMtc3BsaXQtYXJlYVtjbGFzc10ge1xuICAgIC8qbWluLWhlaWdodDogMjVweDsqL1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcbn1cblxuLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lcjpub3QoLnZlcnRpY2FsLXRpdGxlLW1vZGUpIC5jb2RlLXBhcnQtdGl0bGUtYnRuOm50aC1sYXN0LWNoaWxkKG4rMil7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjg5MHB4KSBhbmQgKG1pbi1oZWlnaHQ6NTgxcHgpe1xuXG4gICAgLnZlcnRpY2FsLXRpdGxlLW1vZGUgLmNvZGUtcGFydC10aXRsZS1idG46bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5jb2RlLWNvbXBvbmVudC1jb250YWluZXIudmVydGljYWwtdGl0bGUtbW9kZS5mdWxsc2NyZWVuIC5jb2RlLXBhcnQtdGl0bGUtYnRuOm50aC1sYXN0LWNoaWxkKG4rMil7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lci52ZXJ0aWNhbC10aXRsZS1tb2RlOm5vdCguZnVsbHNjcmVlbikgLmNvZGUtcGFydC10aXRsZS1idG57XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbn1cblxuLm1haW4tY29udGFpbmVyLWZpZGRsZS5sYXlvdXQtdHlwZS0zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5tYWluLXJlc2l6ZXItZmxvb3J7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB6LWluZGV4OjEwMDtcbiAgICBsZWZ0OjA7XG4gICAgdG9wOjA7XG59XG4jbWFpbi1yZXNpemVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjViNTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICB6LWluZGV4OjEwMTtcbn1cbiNtYWluLXJlc2l6ZXIubGF5b3V0LXR5cGUtMSxcbiNtYWluLXJlc2l6ZXIubGF5b3V0LXR5cGUtM3tcbiAgICB3aWR0aDogMTJweDtcbiAgICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG5cbiNtYWluLXJlc2l6ZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhZmFmYWY7XG59XG5cbmFwcC1pZnJhbWUtcGFydHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGZsZXgtZ3JvdzoxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKmJveC1zaGFkb3c6IDAgMCAwIDFweCAjYmJiOyovXG59XG5cbi5pZnJhbWUtYXJlYXtcbiAgICBtaW4taGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI2NvZGUtcGFydHMtdGl0bGUtbW9iaWxle1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgICBoZWlnaHQ6IDM1cHg7XG59XG5cbiNjb2RlLXBhcnRzLXRpdGxlLW1vYmlsZSBhIHtcbiAgICBib3JkZXI6MXB4IHNvbGlkICM4YjhiOGI7XG4gICAgYm9yZGVyLXJhZGl1czoycHg7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIHBhZGRpbmc6IDNweCAwcHggM3B4IDBweCAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDo1NHB4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuXG4jY29kZS1wYXJ0cy10aXRsZS1tb2JpbGUgYS5hY3RpdmUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNjb2RlLXBhcnRzLXRpdGxlLW1vYmlsZSBhOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tbGVmdDozcHg7XG59XG5cbiNjb2RlLXBhcnRzLXRpdGxlLW1vYmlsZSBhOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDozcHg7XG59XG5cbi5zaGFyZS1jb2RlLWJ0bixcbi5yZXNzb3VyY2VzLWNvZGUtYnRuLFxuLnRoZW1lcy1idG4sXG4uY29uc29sZS1idG5cbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTE4LCAxMTgsIDExOCk7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY29sb3I6cmdiKDAsMCwwKTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2hhcmUtY29kZS1idG4sXG4ucmVzc291cmNlcy1jb2RlLWJ0bixcbi5jb25zb2xlLWJ0bntcbiAgICBwYWRkaW5nOiAxcHggNnB4O1xufVxuXG4udGhlbWVzLWJ0bntcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZzogMXB4IDNweDtcbn1cblxuLnRoZW1lcy1idG4gaXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLyouc2hhcmUtY29kZS1idG46YWN0aXZlLFxuLnJlc3NvdXJjZXMtY29kZS1idG46YWN0aXZlLFxuLnRoZW1lcy1idG46YWN0aXZlLFxuLmZ1bGxzY3JlZW4taWZyYW1lLWJ0bjpub3QoLmZ1bGxzY3JlZW4taWZyYW1lLWJ0bi1zZWNvbmRhcnkpOmFjdGl2ZSxcbi5jb25zb2xlLWJ0bjphY3RpdmUsXG4uc3RyZXRjaC12LWlmcmFtZS1idG46YWN0aXZlLFxuLnN0cmV0Y2gtaC1pZnJhbWUtYnRuOmFjdGl2ZSovXG4uYnRuOmFjdGl2ZXtcbiAgICBwYWRkaW5nLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG59XG4uc2hhcmUtY29kZS1idG46aG92ZXIsXG4ucmVzc291cmNlcy1jb2RlLWJ0bjpob3Zlcixcbi50aGVtZXMtYnRuOmhvdmVyLFxuLmNvbnNvbGUtYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbi5zaGFyZS1jb2RlLWJ0biBzcGFuLFxuLnJlc3NvdXJjZXMtY29kZS1idG4gc3Bhbixcbi50aGVtZXMtYnRuIHNwYW4sXG4uY29uc29sZS1idG4gc3BhbntcbiAgICBkaXNwbGF5OmJsb2NrO1xufVxuXG4uaGVhZGVyLWJ0bnMtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1idG5zLWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6M3B4O1xuICAgIG1hcmdpbi1yaWdodDozcHg7XG4gICAgcGFkZGluZzogMXB4IDRweDtcbn1cbiAgXG4uaGVhZGVyLWJ0bnMtY29udGFpbmVyID4gYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDowcHg7XG59XG5cbi5oZWFkZXItYnRucy1jb250YWluZXIgPiBidXR0b246Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OjBweDtcbn1cblxuLmhlYWRlci1idG5zLWNvbnRhaW5lciAgPiAucmVzc291cmNlcy1jb2RlLWJ0bixcbi5oZWFkZXItYnRucy1jb250YWluZXIgID4gLmxheW91dHMtbGlzdC1jb250YWluZXIsXG4uaGVhZGVyLWJ0bnMtY29udGFpbmVyICA+IC5zaGFyZS1jb2RlLWJ0bixcbi5oZWFkZXItYnRucy1jb250YWluZXIgPiAudGhlbWVzLWJ0bixcbi5oZWFkZXItYnRucy1jb250YWluZXIgPiAuY29uc29sZS1idG57XG4gICAgaGVpZ2h0OjMwcHg7XG59XG5cbi5oZWFkZXItYnRucy1jb250YWluZXIgPiAudGhlbWVzLWJ0bntcbiAgICBtYXJnaW4tcmlnaHQ6NnB4O1xuICAgIHBhZGRpbmc6IDAgNnB4O1xufVxuXG4udGhlbWVzLWJ0bi1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGF5cGFsLWJ0bi1jb250YWluZXIge1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLnBheXBhbC1idG4tY29udGFpbmVyIGRpdiNkb25hdGUtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMjhweDtcblxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xufVxuXG46Om5nLWRlZXAgZGl2I2RvbmF0ZS1idXR0b24gaW1ne1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbmkuZmEuZmEtc29ydC1kZXNjIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDJweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICByaWdodDoxcHg7XG59XG5cbmkuZmEuZmEtc29ydC1hc2Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDBweDtcbn1cblxuOjpuZy1kZWVwIC5wYXlwYWwtYnRuLWNvbnRhaW5lciAjZG9uYXRlLWJ1dHRvbiBpbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMDtcbn1cblxuLnBheXBhbC1idG4tY29udGFpbmVyIC5idG4ucGF5cGFsLWJ0biBidXR0b24ubGF5b3V0cy1idG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBheXBhbC1idG4tY29udGFpbmVyIHVsLmRvbmF0aW9ucy1tZW51LFxuLnRoZW1lcy1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDEwMCUgKyA3cHgpO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxNDNweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGhlaWdodDogMTU5cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3BhY2l0eTowO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4udGhlbWVzLW1lbnV7XG4gICAgd2lkdGg6MjAwcHg7XG59XG5cbi50aGVtZXMtbWVudSBsaSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ucGF5cGFsLWJ0bi1jb250YWluZXIgdWwuZG9uYXRpb25zLW1lbnUuc2hvd24sXG4udGhlbWVzLW1lbnUuc2hvd24ge1xuICAgIGhlaWdodDoxNTlweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMnB4ICM4YjhiOGI7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIG92ZXJmbG93OmF1dG87XG59XG5cbi5wYXlwYWwtYnRuLWNvbnRhaW5lciB1bC5kb25hdGlvbnMtbWVudSA+IGxpOmZpcnN0LWNoaWxkIH4gbGksXG4udGhlbWVzLW1lbnUgPiBsaTpmaXJzdC1jaGlsZCB+IGxpIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzhiOGI4YjVlO1xufVxuXG4ucGF5cGFsLWJ0bi1jb250YWluZXIgdWwuZG9uYXRpb25zLW1lbnUgPiBsaSxcbi50aGVtZXMtbWVudSA+IGxpIHtcbiAgICBwYWRkaW5nOiA4cHggNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBheXBhbC1idG4tY29udGFpbmVyIHVsLmRvbmF0aW9ucy1tZW51ID4gbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjhiOGIyNjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubGF5b3V0cy1saXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6MXB4IDZweDtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxcHggMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmxheW91dHMtbGlzdC1jb250YWluZXIgPiBzcGFue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1yaWdodDogMTRweDsgICBcbn1cblxuLmxheW91dHMtbGlzdC1jb250YWluZXIgPiBzcGFuIGkuZmF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogN3B4O1xufVxuXG4uc2hvd24gaS5mYS1zb3J0LWFzY3tcbiAgICBib3R0b206IDBweDtcbn1cblxuLmxheW91dHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sYXlvdXQ6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzksMTM5LDEzOSwwLjIpO1xufVxuXG4ubGF5b3V0LmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojOGI4YjhiO1xuICAgIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDFweCAjOGI4YjhiO1xufVxuXG4ubGF5b3V0LmFjdGl2ZSA+IGRpdjpmaXJzdC1jaGlsZHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgI0ZGRkZGRjtcbn1cblxuLmxheW91dC5hY3RpdmUgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXZ7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNGRkZGRkY7XG59XG4vKioqKi9cbi5sYXlvdXQtMSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzhiOGI4YjtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQxcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5sYXlvdXQtMSA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDI3JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkICM4YjhiOGI7XG59XG5cbi5sYXlvdXQtMSA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMy41JTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgIzhiOGI4Yjtcbn1cblxuLmxheW91dC0xID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4vKioqKi9cbi5sYXlvdXQtMiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzhiOGI4YjtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQxcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubGF5b3V0LTIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIGhlaWdodDogMzUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCAjOGI4YjhiO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sYXlvdXQtMiA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAzMy41JTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgIzhiOGI4Yjtcbn1cblxuLmxheW91dC0yID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cbi8qKioqL1xuLmxheW91dC0zIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOGI4YjhiO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmxheW91dC0zID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogMjclO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdXRsaW5lOiAycHggc29saWQgIzhiOGI4Yjtcbn1cblxuLmxheW91dC0zID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMzLjUlO1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjOGI4YjhiO1xufVxuXG4ubGF5b3V0LTMgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi8qKioqL1xuLmxheW91dC00IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOGI4YjhiO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlO1xufVxuXG4ubGF5b3V0LTQgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIGhlaWdodDogMzUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCAjOGI4YjhiO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sYXlvdXQtNCA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAzMy41JTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgIzhiOGI4Yjtcbn1cblxuLmxheW91dC00ID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cbi8qKioqL1xuXG4ubGF5b3V0cy1saXN0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgcGFkZGluZzo4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0b3A6IGNhbGMoMTAwJSArIDhweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAycHggIzhiOGI4YjtcbiAgICB6LWluZGV4OiAxMDI7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICByaWdodDowcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ODkwcHgpIGFuZCAobWluLWhlaWdodDo1ODFweCl7XG4gICAgLnByZXR0aWZ5LW1vYmlsZS1jb2Rle1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuXG4gICAgLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lci52ZXJ0aWNhbC10aXRsZS1tb2RlOm5vdCguZnVsbHNjcmVlbikge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBib3JkZXItdG9wOjJweCBzb2xpZCAjYjViNWI1O1xuICAgIH1cblxuICAgIC5jb2RlLWNvbXBvbmVudC1jb250YWluZXIudmVydGljYWwtdGl0bGUtbW9kZTpub3QoLmZ1bGxzY3JlZW4pID4gLmNvZGUtcGFydC10aXRsZSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMXB4IDJweCAwIDJweDtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I1YjViNTtcbiAgICB9XG5cbiAgICAuY29kZS1jb21wb25lbnQtY29udGFpbmVyLnZlcnRpY2FsLXRpdGxlLW1vZGU6bm90KC5mdWxsc2NyZWVuKSA+IGFwcC1odG1sLXBhcnQuY29kZS1jb21wb25lbnQge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gICAgfVxuXG4gICAgLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lci52ZXJ0aWNhbC10aXRsZS1tb2RlOm5vdCguZnVsbHNjcmVlbikgPiAuY29kZS1wYXJ0LXRpdGxlID4gLmNvZGUtcGFydC10aXRsZS1idG5zLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgfVxuXG4gICAgLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lci52ZXJ0aWNhbC10aXRsZS1tb2RlOm5vdCguZnVsbHNjcmVlbikgPiAuY29kZS1wYXJ0LXRpdGxlID4gc3BhbiB7XG4gICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuXG5cbiAgICAuY29kZS1wYXJ0LXRpdGxlLWJ0biAuZmEtYXJyb3dzLWgtdmVydGljYWwge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLmNvZGUtcGFydC10aXRsZS1idG4gLmZhLWFycm93cy12IHNwYW4sXG4gICAgLmNvZGUtcGFydC10aXRsZS1idG4gLmZhLWFycm93cy1oIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgXG4gICAgLmNvZGUtcGFydC10aXRsZS1idG4udmVydGljYWwtdGl0bGUtbW9kZSB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gICAgXG4gICAgLmNvZGUtcGFydC10aXRsZS1idG4gLmZhLWFycm93cy1oLXZlcnRpY2FsID4gc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmZpZGRsZS10aXRsZSAuZmlkZGxlLWlucHV0e1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgLypib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDsqL1xufVxuXG4uYXBwLWxvYWRlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ucGFzdGViaW4tY29tcG9uZW50LWNvbnRhaW5lcntcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5maWRkbGUtdGl0bGV7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZpZGRsZS10aXRsZSA+IHNwYW57XG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcbn1cblxuLmZpZGRsZS1zaXple1xuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG5cbi5maWRkbGUtc2l6ZSBzcGFuLnh7XG4gICAgbWFyZ2luOiAwIDNweDtcbn1cblxuLmZpZGRsZS1zaXplLWhhY2suZmlkZGxlLXNpemV7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGNvbG9yOiAjYzljOWM5O1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCA0cHggIzAwMDAwMDtcbiAgICB3aWR0aDphdXRvO1xufVxuXG4uZmlkZGxlLXNpemUtaGFjayBzcGFue1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZmlkZGxlLXRpdGxlIC5maWRkbGUtc2l6ZSAud2lkdGgsXG4uZmlkZGxlLXRpdGxlIC5maWRkbGUtc2l6ZSAuaGVpZ2h0IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIC1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5maWRkbGUtdGl0bGUgLmZpZGRsZS1zaXplIGlucHV0LndpZHRoOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuLmZpZGRsZS10aXRsZSAuZmlkZGxlLXNpemUgaW5wdXQud2lkdGg6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4uZmlkZGxlLXRpdGxlIC5maWRkbGUtc2l6ZSBpbnB1dC5oZWlnaHQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4uZmlkZGxlLXRpdGxlIC5maWRkbGUtc2l6ZSBpbnB1dC5oZWlnaHQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmZpZGRsZS1sb2dve1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlkZGxlLWxvZ28gaW1ne1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU1MHB4KXtcbiAgICAubGF5b3V0cy1saXN0IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmxheW91dHMtbGlzdFtjbGFzc10gLmxheW91dHtcbiAgICAgICAgbWFyZ2luOjBweDtcbiAgICB9XG4gICAgXG4gICAgLmxheW91dHMtbGlzdFtjbGFzc10gLmxheW91dDpudGgtY2hpbGQoMm4rMSl7XG4gICAgICAgIG1hcmdpbi1yaWdodDoxMHB4O1xuICAgIH1cblxuICAgIC5wYXlwYWwtYnRuLWNvbnRhaW5lciAuYnRuLnBheXBhbC1idG4gYnV0dG9uLmxheW91dHMtYnRue1xuICAgICAgICBmb250LXNpemU6IDBweDtcbiAgICAgICAgcG9zaXRpb246c3RhdGljO1xuICAgIH1cbiAgICBcbiAgICAucGF5cGFsLWJ0bi1jb250YWluZXIgLmJ0bi5wYXlwYWwtYnRuIGJ1dHRvbi5sYXlvdXRzLWJ0biBpLmZhe1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLnBheXBhbC1idG4tY29udGFpbmVyIC5idG4ucGF5cGFsLWJ0biB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMThweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xuICAgIH1cbn1cblxuLmxheW91dHMtbGlzdC1jb250YWluZXIuc2hvd24gLmxheW91dHMtbGlzdCB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLmhpZGRlbiAuZmEuZmEtc29ydC1hc2N7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3duICAuZmEuZmEtc29ydC1kZXNje1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hcy1zcGxpdC1ndXR0ZXItY3VzdG9te1xuICAgIGZsZXg6MCAwIDVweDtcbn1cblxuLmFzLXNwbGl0LWd1dHRlci1jdXN0b20uaXMtaG9yaXpvbnRhbHtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBjdXJzb3I6Y29sLXJlc2l6ZTtcbn1cblxuLmFzLXNwbGl0LWd1dHRlci1jdXN0b20uaXMtdmVydGljYWx7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBjdXJzb3I6cm93LXJlc2l6ZTtcbn1cblxuLmlmcmFtZS1vdmVybGF5LWZvci1kcm9wIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5pZnJhbWUtYXJlYTpob3ZlciAuaWZyYW1lLW92ZXJsYXktZm9yLWRyb3B7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmVtcHR5LWFyZWFbY2xhc3NdIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNDVkZWcsICB0cmFuc3BhcmVudCAxNXB4LCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMzgpIDMwcHgpIHJlcGVhdCBzY3JvbGwgMCUgMCU7XG59XG5cbi5lbXB0eS1hcmVhLmlzLWRhcmstbW9kZVtjbGFzc117XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAgdHJhbnNwYXJlbnQgMTVweCxyZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMikgMzBweCkgcmVwZWF0IHNjcm9sbCAwJSAwJTtcbn1cblxuLmFzLXNwbGl0LWd1dHRlci1jdXN0b20gPiAuYXMtc3BsaXQtZ3V0dGVyLWljb24tY3VzdG9te1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jb2RlcGFydHMtaWZyYW1lLWNvbnRhaW5lcltjbGFzc10gPiAuYXMtc3BsaXQtZ3V0dGVyW2NsYXNzXSxcbjpob3N0IDo6bmctZGVlcCAuY29kZXBhcnRzLWlmcmFtZS1jb250YWluZXJbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlcltjbGFzc10sXG4uYXMtc3BsaXQtZ3V0dGVyLWN1c3RvbXtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvZGVwYXJ0cy1pZnJhbWUtY29udGFpbmVyOm5vdCguaXMtZGFyay1tb2RlKVtjbGFzc10gPiAuYXMtc3BsaXQtZ3V0dGVyW2NsYXNzXSxcbjpob3N0IDo6bmctZGVlcCAuY29kZXBhcnRzLWlmcmFtZS1jb250YWluZXI6bm90KC5pcy1kYXJrLW1vZGUpW2NsYXNzXSA+IC5hcy1zcGxpdC1ndXR0ZXJbY2xhc3NdLFxuLmFzLXNwbGl0LWd1dHRlci1jdXN0b217XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMXB4ICMwMDAwMDAyNDtcbn1cblxuXG46aG9zdCA6Om5nLWRlZXAgLmNvZGVwYXJ0cy1pZnJhbWUtY29udGFpbmVyLmlzLWRhcmstbW9kZVtjbGFzc10gPiAuYXMtc3BsaXQtZ3V0dGVyW2NsYXNzXSxcbjpob3N0IDo6bmctZGVlcCAuY29kZXBhcnRzLWlmcmFtZS1jb250YWluZXIuaXMtZGFyay1tb2RlW2NsYXNzXSA+IC5hcy1zcGxpdC1ndXR0ZXJbY2xhc3NdLFxuLmFzLXNwbGl0LWd1dHRlci1jdXN0b20uaXMtZGFyay1tb2Rle1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDFweCAjRkZGRkZGMjQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY29kZXBhcnRzLWlmcmFtZS1jb250YWluZXI6bm90KC5pcy1kYXJrLW1vZGUpW2NsYXNzXSAuYXMtaG9yaXpvbnRhbFtjbGFzc10gPiAuYXMtc3BsaXQtZ3V0dGVyW2NsYXNzXSA+IC5hcy1zcGxpdC1ndXR0ZXItaWNvbltjbGFzc10sXG46aG9zdCA6Om5nLWRlZXAgLmNvZGVwYXJ0cy1pZnJhbWUtY29udGFpbmVyOm5vdCguaXMtZGFyay1tb2RlKVtjbGFzc10uYXMtaG9yaXpvbnRhbFtjbGFzc10gPiAuYXMtc3BsaXQtZ3V0dGVyW2NsYXNzXSA+IC5hcy1zcGxpdC1ndXR0ZXItaWNvbltjbGFzc10sXG4uYXMtc3BsaXQtZ3V0dGVyLWN1c3RvbS5pcy1ob3Jpem9udGFsID4gLmFzLXNwbGl0LWd1dHRlci1pY29uLWN1c3RvbXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBVUFBQUFlQ0FZQUFBRGtmdFM5QUFBS0MzcFVXSFJTWVhjZ2NISnZabWxzWlNCMGVYQmxJR1Y0YVdZQUFIamFyWmhibHVNNERrVC91WXBaZ3ZnRXVCdyt6NWtkelBMbmdwS3puVm1aM2RVemJWZGFLcGtpUVVRZ0VMSmIvL24zZHYvaUZhK2tMbVhSVWt1NWVLV2FhbWljNkhXLzJ2bjBWenFmOXlzL1IvLzV1dlByK1NKd0tYS005MysxUE9OZjEvM0hCUGVoY1piZkp0THhmTkUvZjFIVE03OSttU2pjaDJnUjJmbDhKcXJQUkRIY1gvaG5nblp2NnlwVjVYMEwvZG5CYy8rZEJ2NmNmU1Q5SFBZdi94ZXlOelByeEJCVzlQSGlNOFJ3QnhEdHo3dllPTkh6bVJsSXlPZGMrTHlIK2pzaDMrWHBlb3ZLZlVVbHRPOVIrVGo3QWtvczkzWEhoYy9KTEIvSGI2LzcvT1g2TTZFN0tYNWJPWTZQbFQ5ZGIvbHFYN2Z6K3R0N3F0dDczYnRycVpEUzhtenF0WlZ6eHNCT3l1TzVyZkFXL2pMbmN0NlZ0enJXR1VBK3IzRjEzc05YSDRCbCsrU25iMzc3ZFk3REQwSk1ZUVhoR01JQUtMdW1VVUlOSTE0T2xKSzkvUTRTYTV3Z0dPSUEzc2pWOEJHTFArdldzOXp3eXNMVE16SjRKdk9HcjdPUGYrTDk0MFI3RytXOXYvVE9FN1Fncm1ETUlneER6ajRaQlNCK3YzaVVUNEpmNzY4dnd4V2xZSlNsV2RsZ3UvbzlSYy8rNFpieEtCNmdJd016eDd2V3ZNeG5BbExFMnBsZ2ZBU0JxL2lZZmZHWGhDRGVrMGNGbjhaRUdtSUtIUWg4em1FU1pVZ3hGc0RSWUd0emovZ3pOdVJ3WDBhekFDTEhRaUVwQURXd1NnZ2IvSkdrY0tqbG1GUE91V1RKbW10dUpaWlVjaWxGaW9sZmt5aEpzaFFSVWFuU05HclNyRVZGMVduVlZrT05pR091cFVyVldtdHJMTnFZdVhGM1kwQnJQZlRZVTgrOWRPbmFhMjhEK293MDhpaERocnBSUjV0aHhvbE96REpsNnF5ekxiK2cwa29ycjdKazZhcXJiYWkyNDA0Nzc3Smw2NjY3ZmFEbTNTazcvOHY3OTFIekw5VENRY29HeWdkcTNDcnltc0tibkdURERNUkM4aUF1aGdDRURvYlpwVDZsNEF3NncreXFnYXJJZ1NpemdUTzlJUWFDYWZtUXQvL0E3Zy9rUHVIbVV2cS9jQXN2NUp4QjkwOGc1d3k2SDVEN0ZiZHZVSnNtZCtPSzdpQmtaV2hKdlNMbHQwTFF4cjg1Tks2NnQ4bWpmUTdsemlCN2lpSTZuTTdTbDhqMldUWThXcjVOR3piNW54MTNpNzcxcGJwLzUvWS83blp2dDdjUWUwMWpuSGhDRy9VRXhMZUtRUmdSNmtDTkdjNTRBbytjdExnWFJicXY1YzU4N0NuMXN6NDk3aHhEejB2SjVjcDZKbDZYUWlVdE1la0tPbE5vU05NSVRmM3AxRXNkUURSbW5FVmpIR1BITktGSzdTRjFWTmxnN2ptRk1kSU9PSlVrb2ZSTXZMYmx6N0c2bjRQOTAxakR1bVNzazU4TFRnQS9DVXhlenBDS0h1eXRldVlpR0IyYzZMMU1EZk02K1dLUlViUFBQZE51WkthKy9PNlF6RzFDazVibm5DT3VYWmYwcEMxVlhNNVZWaW5VSG42RjVkblRLREpBamlJYlJ2NFZvRjJBZnp1bldSMUNLaEtHK0xablhlQkdoUXpGWUdRSm9qNnZRV2ZMRmt2MXNESFpXZHVYa29hVTIyUi9ld1dJNG16QWlMbmZBL1loNEU2Rm1rdTV0RmlvaGswaHJPM1o5N3pPbER0a1d1YzI1cEtLWE9laVFaNEpURjVXNmltZVhJRkVzTnFkZE9KRFJrTFNiVEVzOVV4UWtZbVRWVThGczBwSDJPVGhVVGhUQk1wOG55Slp2VUVEaXJRSDFVSWVpcmVLVlV2SlJCR1FxSUw0bEY2RGxOYndqODdYT09xNnNzUU84UUdkRmFRTHpadjBvd1RVUTEycHdLR3llMG9OQmFMcjEwalhob3kxTFN1RExQVCtHbXlmSmE0YjNvYlJZNXRqSEk2TVRJTTZaWXRLK0R0LzE4MG5sSWFFYUcrckYyM2lCQjNXY2xOdEZWTkNxczlFYVc5WkxWbEsxMG5wbUNUM29MZURjWGp0bWVxem1OVHBwcy9vREdXeFpHYVVkQzdpaFpxeFNkNXBOTzFoanRrVE82TDhsVzVjazQ4Nk5penJnMEdOcUdMYmpycHEyM0NPMTJ5bHRtbWtIY042ck9nY0hlbW1YUXo0U3ovS3EvWWZXT1UrMCtyUFdCVUtyWEIxWXdQU3JkcjNrdEh2U3V6YlpYaXlIMEw4bEtNK0ZuWGFGenJRcTAxMTBtK2d0R0xPeHZDQzJXdldNMDA5cUxTcVoyQ3dwVHJ0cEUxMld6ZWdUK3NBR1c1dStLYWI3dUpYa1ZvNTYrSlF5N203K040TEtsV0hFSDRnQkdydWtCbTYwa1JHdmlXREZHK0NMYTFyRFdVeVIwSk1KbnJsTUl0OTEwRk5JWHRXOXhRS0ZEVWxTYXc5RTFxQ2lKd0V6eDV1T2N0M0pXUk1LNXl6Tk5DTzJzNjloUk03VVp2YUhjNzQrZUpNam9jejhvbWdOTFdqakhIbDFxam03ZHBad3hpSzNpTDV1d0s0Y2FvM2dWTUNwNm8xeEhrMStpR1ZSSllIeFZHOFdlNUx4MksrbUljcnhjeDBFV3gxbEJ4NjZ4NHlZUUxvMEJCTENBOHJyNWttaklFWUplOG1Qa050elZaS2FVOElCYTR1WEdmM0hsRzNmWUV5WHd2TmdOMGJVKzV2RmRaNzh1ZDdrYnVUSGJLWXNCdFpXb1dRc0NWK3FxZ2ZzME5Od2dSYVBNSEVlN3BUN1pieTVsN0Z6bVJQSnEzUXkwbnBLWFRLL0dhV3BaR2FoRXhMU2lRRDAzUS8xemJJdXpoMHYrVUIvUkVsMC8xWVBVOGJhNWFjTEpWMHhoM0NTL2ROcm5KR280N3VMN2lWK3R4WDJpSXVERHFHZ0Zmd0hWTkR0V0xjYUk0YTgxb1VZbW9JRFdJYSs2T3F0M1lia1JCVS81RVU5OXJrbTZURlYwNEFCT2xHTzVscDFLY0pYT3p6clFtVXB3bTR1d3U4MVBGcEF2UFZCT0IveXJna3E5YU5pU01SS1FyUVhYVEMzdGRXZXRZc1NhZnJ5UGlpL0d4TGdvWjQyRmhNVkJpUkM3d1B0TXdPL0VnKzJkRHBCd0pDclNiTEkrMGdCbTkzT2dReUhxMTZLZFhUL2NEc1hhaGVNblZyMW9uL3lCUzV4OS8xT04zb1Q2TS9ONTlXYjBNeGdxWlRQdjFaWnVnd2hhcnFWbFVPNVlVcmR2R1dkaHlMRWRWNFE4UEhLbWFqbEtMTUpvazh2Rm1Ocm92a1c5L2NWaUtwb3o2dThJeEgxUENmYnBKeHlZcG8wWU1ybkF0SzRGYWZGZlBNekpRVFQwVzRuaFdPcGVveldrMWxxVHhtQVhIR2Z2UFBkQSsvelhWc0h6b1I3RTZ4V05WMEp0U3NtSTB4dm8vUW5SQlBKcDdkdmZiMjJwbXdyRkZBZUN6R0YrSGMyTXl1VjBCckN1UmdjUk1DOTZZRUpnVGZ5Z0FnM0VKd1pBQWZ6NlQxcE9lZTE0eVFnd1M0aGR0UDd3OUxhQVY3UE9FK1ZqUGVmZVBORmI0ODRlMEllZjUzQzVsU0h2UzVDQWNYcm5xVFR0QW1NM1RST3ExTStTNnFPYVY5Q0hBTXppaUlnWmk1aDVVK09VVXpKOE40MkxrYWp5WFJmb0tTOHl0SlExRldKY1RjTHZ4dUhCZ2FyUTJoQ0R4MlVGbHp6WXdWeFFyVzRMQ0wxdXdSMlF1RkhyMm5rOTdqY3cwYmtSdWJ2QTk3NUEwYVUwQ0R4cnFJdWt1OEtTTTFqaitIR1Q0L2l2SHU5cXhoSHJkM1A2bmMybmdjbjAxMWN1b2V4MGVwQi94VU5EUU1oMXYrNkt5LzYzcmRYOW5ldjNLOThKUStJTjM5NzV2NVl5L015Zk1hRldkTy9rakk0MUIvTUtqNjBUZXUrNG5xelNVT2x5ZnN0OTgwMnZ3dFkvNlRnM0lHZHFTcjltdWE5bnRPc1dWV3NESHJvaGRYUzR2OVpFYWZRU1BSWERUV2FNRzZmWGF1OG9xSkhPMDRJQzRQVWRHYVNhYVpWRjJHUlFHT2hCM0J1ZXRFUjBtNFNVSDkxZ1c3MzdmQjdVN0J0SGE3dk8zTkxFbTZpMmE1Ykp5ZHU5WDRkTlA0dlVkOExHS09WSWRJblBqZHh1UDhod3QyZjljRy8rU0MzYmMybUlTVnMyNmx1QkhWdnpMcy9walJqNjJhKzdvdDNyMVQ5bW0vTGxDR3g5WGFUd0hwZnZJMjRMODh4elBSdDQveTk4OEFoc3I3endCZmJuNi8xLzEwODY4L0FqQ2dVdVgvQlRVUVhQaVVaYXlqQUFBQmhHbERRMUJKUTBNZ2NISnZabWxzWlFBQWVKeDlrVDFJdzBBY3hWOC94Q0lWQnl1SUtBU3BUaFpFUlJ5MUNrV29FR3FGVmgxTUx2MkNKZzFKaW91ajRGcHc4R094NnVEaXJLdURxeUFJZm9DNHVUa3B1a2lKLzBzS0xXSThPTzdIdTN1UHUzZUF2MTVtcWhrY0IxVE5NbEtKdUpESnJncWRyd2doaUQ0TVkwaGlwajRuaWtsNGpxOTcrUGg2RitOWjN1ZitITjFLem1TQVR5Q2VaYnBoRVc4UVQyOWFPdWQ5NGdnclNncnhPZkdZUVJja2Z1UzY3UEliNTRMRGZwNFpNZEtwZWVJSXNWQm9ZN21OV2RGUWlhZUlvNHFxVWI0LzQ3TENlWXV6V3E2eTVqMzVDOE01YldXWjZ6UUhrY0FpbGlCQ2dJd3FTaWpEUW94V2pSUVRLZHFQZS9nSEhMOUlMcGxjSlRCeUxLQUNGWkxqQi8rRDM5MmErY2tKTnlrY0J6cGViUHRqQk9qY0JSbzEyLzQrdHUzR0NSQjRCcTYwbHI5U0IyWStTYSsxdE9nUjBMTU5YRnkzTkhrUHVOd0IrcDkweVpBY0tVRFRuODhENzJmMFRWbWc5eGJvV25ON2ErN2o5QUZJVTFmSkcrRGdFQmd0VVBhNng3dEQ3YjM5ZTZiWjN3OWNkbktlUFdVMzVBQUFENHRwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtDang0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJbGhOVUNCRGIzSmxJRFF1TkM0d0xVVjRhWFl5SWo0S0lEeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5SStDaUFnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJS0lDQWdJSGh0Ykc1ek9tbHdkR05GZUhROUltaDBkSEE2THk5cGNIUmpMbTl5Wnk5emRHUXZTWEIwWXpSNGJYQkZlSFF2TWpBd09DMHdNaTB5T1M4aUNpQWdJQ0I0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlLSUNBZ0lIaHRiRzV6T25OMFJYWjBQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVkZkbVZ1ZENNaUNpQWdJQ0I0Yld4dWN6cHdiSFZ6UFNKb2RIUndPaTh2Ym5NdWRYTmxjR3gxY3k1dmNtY3ZiR1JtTDNodGNDOHhMakF2SWdvZ0lDQWdlRzFzYm5NNlIwbE5VRDBpYUhSMGNEb3ZMM2QzZHk1bmFXMXdMbTl5Wnk5NGJYQXZJZ29nSUNBZ2VHMXNibk02WkdNOUltaDBkSEE2THk5d2RYSnNMbTl5Wnk5a1l5OWxiR1Z0Wlc1MGN5OHhMakV2SWdvZ0lDQWdlRzFzYm5NNmRHbG1aajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5MGFXWm1MekV1TUM4aUNpQWdJQ0I0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUNpQWdJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbWRwYlhBNlpHOWphV1E2WjJsdGNEbzJNbUl5TUdRMll5MWxOVEEzTFRSak56RXRPREpoTWkwME0yRmhaVEpoTUdKbE1qa2lDaUFnSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2WmprMVpEbGtNRFF0T1RGallpMDBNR1JrTFRrNU5UTXRaRGRtWlRZM05qbGhNREV4SWdvZ0lDQjRiWEJOVFRwUGNtbG5hVzVoYkVSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk5qQmxNV1ZrWXpNdE5XVTNaUzAwWXpFM0xUZ3hPREF0TlRJM056a3pNMlZrWm1KaElnb2dJQ0JIU1UxUU9rRlFTVDBpTWk0d0lnb2dJQ0JIU1UxUU9sQnNZWFJtYjNKdFBTSk1hVzUxZUNJS0lDQWdSMGxOVURwVWFXMWxVM1JoYlhBOUlqRTJNamd4TWpJd05EUTRNamcyTWpJaUNpQWdJRWRKVFZBNlZtVnljMmx2YmowaU1pNHhNQzR5TWlJS0lDQWdaR002Um05eWJXRjBQU0pwYldGblpTOXdibWNpQ2lBZ0lIUnBabVk2VDNKcFpXNTBZWFJwYjI0OUlqRWlDaUFnSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUjBsTlVDQXlMakV3SWo0S0lDQWdQR2x3ZEdORmVIUTZURzlqWVhScGIyNURjbVZoZEdWa1Bnb2dJQ0FnUEhKa1pqcENZV2N2UGdvZ0lDQThMMmx3ZEdORmVIUTZURzlqWVhScGIyNURjbVZoZEdWa1Bnb2dJQ0E4YVhCMFkwVjRkRHBNYjJOaGRHbHZibE5vYjNkdVBnb2dJQ0FnUEhKa1pqcENZV2N2UGdvZ0lDQThMMmx3ZEdORmVIUTZURzlqWVhScGIyNVRhRzkzYmo0S0lDQWdQR2x3ZEdORmVIUTZRWEowZDI5eWEwOXlUMkpxWldOMFBnb2dJQ0FnUEhKa1pqcENZV2N2UGdvZ0lDQThMMmx3ZEdORmVIUTZRWEowZDI5eWEwOXlUMkpxWldOMFBnb2dJQ0E4YVhCMFkwVjRkRHBTWldkcGMzUnllVWxrUGdvZ0lDQWdQSEprWmpwQ1lXY3ZQZ29nSUNBOEwybHdkR05GZUhRNlVtVm5hWE4wY25sSlpENEtJQ0FnUEhodGNFMU5Pa2hwYzNSdmNuaytDaUFnSUNBOGNtUm1PbE5sY1Q0S0lDQWdJQ0E4Y21SbU9teHBDaUFnSUNBZ0lITjBSWFowT21GamRHbHZiajBpYzJGMlpXUWlDaUFnSUNBZ0lITjBSWFowT21Ob1lXNW5aV1E5SWk4aUNpQWdJQ0FnSUhOMFJYWjBPbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2T0dZNU1tTTBNak10WXpJMk55MDBOalU1TFdGa1pERXRPVEZpWkRFNFlqUTBNbVJsSWdvZ0lDQWdJQ0J6ZEVWMmREcHpiMlowZDJGeVpVRm5aVzUwUFNKSGFXMXdJREl1TVRBZ0tFeHBiblY0S1NJS0lDQWdJQ0FnYzNSRmRuUTZkMmhsYmowaUt6QXhPakF3SWk4K0NpQWdJQ0E4TDNKa1pqcFRaWEUrQ2lBZ0lEd3ZlRzF3VFUwNlNHbHpkRzl5ZVQ0S0lDQWdQSEJzZFhNNlNXMWhaMlZUZFhCd2JHbGxjajRLSUNBZ0lEeHlaR1k2VTJWeEx6NEtJQ0FnUEM5d2JIVnpPa2x0WVdkbFUzVndjR3hwWlhJK0NpQWdJRHh3YkhWek9rbHRZV2RsUTNKbFlYUnZjajRLSUNBZ0lEeHlaR1k2VTJWeEx6NEtJQ0FnUEM5d2JIVnpPa2x0WVdkbFEzSmxZWFJ2Y2o0S0lDQWdQSEJzZFhNNlEyOXdlWEpwWjJoMFQzZHVaWEkrQ2lBZ0lDQThjbVJtT2xObGNTOCtDaUFnSUR3dmNHeDFjenBEYjNCNWNtbG5hSFJQZDI1bGNqNEtJQ0FnUEhCc2RYTTZUR2xqWlc1emIzSStDaUFnSUNBOGNtUm1PbE5sY1M4K0NpQWdJRHd2Y0d4MWN6cE1hV05sYm5OdmNqNEtJQ0E4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRLSUR3dmNtUm1PbEpFUmo0S1BDOTRPbmh0Y0cxbGRHRStDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS1BEOTRjR0ZqYTJWMElHVnVaRDBpZHlJL1BwNWR5ZnNBQUFBR1lrdEhSQUQvQVA4QS82QzlwNU1BQUFBSmNFaFpjd0FBQ3hNQUFBc1RBUUNhbkJnQUFBQUhkRWxOUlFmbENBVUFCeGpSM3BYekFBQUFJMGxFUVZRb3oyTjA4UWovejhEQXdMQm54MHBHR0p1SmdTTEFPR3JtcUpsNHpRUUFMa0l2S2J4aEhwQUFBQUFBU1VWT1JLNUNZSUk9KVxufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvZGVwYXJ0cy1pZnJhbWUtY29udGFpbmVyOm5vdCguaXMtZGFyay1tb2RlKVtjbGFzc10gLmFzLXZlcnRpY2FsW2NsYXNzXSA+IC5hcy1zcGxpdC1ndXR0ZXJbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlci1pY29uW2NsYXNzXSxcbjpob3N0IDo6bmctZGVlcCAuY29kZXBhcnRzLWlmcmFtZS1jb250YWluZXI6bm90KC5pcy1kYXJrLW1vZGUpW2NsYXNzXS5hcy12ZXJ0aWNhbFtjbGFzc10gPiAuYXMtc3BsaXQtZ3V0dGVyW2NsYXNzXSA+IC5hcy1zcGxpdC1ndXR0ZXItaWNvbltjbGFzc10sXG4uYXMtc3BsaXQtZ3V0dGVyLWN1c3RvbS5pcy12ZXJ0aWNhbCA+IC5hcy1zcGxpdC1ndXR0ZXItaWNvbi1jdXN0b217XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjRBQUFBRkNBWUFBQUJTSVZ6NkFBQUl3bnBVV0hSU1lYY2djSEp2Wm1sc1pTQjBlWEJsSUdWNGFXWUFBSGphclpmcHNlUTREb1QvMDRveGdSZDRtTU16WWoxWTgrY0RxYXArNThSRzdMenFMcWxFaVNTUWlVVEtyUC8rWjV1LytQTlNyWW1TUzZvcFdmNWlqZFUzVG9xOWYrMThPeHZQOS8yeG5qSDMrYnF4OGd4NExnV080ZjRzNmJuL2RkMjlKN2lIeHBsOG1LaU1aNkIvSHFqeG1iOThtY2pmUTlBZDZmbDhKcXJQUk1IZkFmZE0wRzVZTnRXU1A0YlFuOUNlNTI4YWlvYkdWeXlmdC8zdGR5WjdVMWduZUwrQ0M1WnZIL3pkUU5EL3pvVEdTVG5md28zNjBmUEtkemkzdXB1UW4vSmtQK3pLZkVYbGZmWUZGZDkrQmlXa2U0Zmh3dWRrcHZmeHgrdE92bHdQTC9nMXhSOVdEdU01ODUrdnovNW0xNmNrNi8rOVp6RjdyeHRkaTRtVXBpZW9WNGpuakJzN0tRL25zY1FuODE4NHorZFQrUlFEZXdlUVR6dHM1ek5jZFI1WXRvdHV1dWEyVytjNDNHQ0wwUytmT1hvL0FFcXZsWkI5OVNOWUE1aFJQMjc3REZZVEJIMFl3QnU0NnQ5N2NXZmRlcFlicnJEd2ROenBIWk01cFlMUnIzL2o4K3RFZXl2bG5kTmsrblp5eGI2OE1vdHRLSEw2elYwQTR2YUxSM0lTL1BwOC9WTmNBd2pLU1hNaHdHYjduYUtMZTdobERwa1Y2TUNOd3ZIV21zdnptWUFVc2Jhd0dSZEF3Q1lYeENWbnMvZlpPZkpZd0tjeFVmRWgrZzRFVHNSUGR1bGpDQWx3aXRlMWVTYTdjNjhYZnkraldRQWhJWVVNTkJRVFdFV0VEZjdrV09CUWt5QlJSSkprS1ZLbHBaQmlrcFJTVGlwK0xZY2NzK1NVY3k2NTVsWkNpVVZLS3JrVVUycHAxZGVBT0VwTk5kZFNhMjJOUlJzek41NXUzTkJhOXozMDJLV25ubnZwdGJjQmZVWWNNdExJbzVoUlI1dCtob2xPekRUekxMUE90dHlDU2lzdVdXbmxWVlpkYlVPMUhYYmNzdFBPdSt5NjJ4czFaeTZzM3o3L08ycnVoWm8vU09tTitZMGFqK2I4bXNLcG5JaGlCbUkrT2hEUGlnQ0U5b3FaTFM1R2J4UTZ4Y3hXVDFXSVo1ZWk0RXluaUlGZ1hNN0xkbS9zL2lEM0NUY1Q0LytGbTM4aFp4UzZmd001bzlEOWd0eDMzSDVBYmFvRUR4dk1RVWpMVUpOcUErVzN2QytOZjNPVU1QWVdLaE1CbVhNek5vbnFIRzJaa2xvUHJRQmZpV3NadmJ4NkQrZFlJb09TN0NBRWlpM3NGVzFOVzhlc2YwMlFLa2xieGVsdklPL01YRncyVzUvdXNmVWszV2taTnIyQlZkSmFUTVJrdTluU3h0VGd6MjVXRERtZmFheTdrMGRtTmpQRkRaNXNhbmgyNysyb1BOODc5MHdycWFmVlhUaER1djZmUVozZ0RrdFpJM1lUS3R3bjhOR3JhdGtKSTBranc3M0YzMFpDVFN2RU5IZVJUdmd3aTlCbWRycDl4OFpseWlnZkJyK01aVHRMSEdOcWhKcThFOS9aZVpGc2tLSFpWOSt2MUlGQ1lYVXk1M3VCUFhYcDJqVTl5WFg5U1M1MytNUVBXQklpRDFDMDFjNnBOYWlGcUhJWW1KbG1rb2FIMHpQeVNIUTE4N2dNT1VEb0xTdHZBVGxGSHhyUlQ4eGlkVmk2N3dwanJ4cEhLcjVQL1RXYkhuRStqczNYdlJxQlVyMzlMTm5XT0hFMFJUclNJR0hyWFplSzEzVm52ZXV5NVRnaXhOVFlOYktITkxUYkV4bXNJZlkxdDBaV2tSRTU4NS9JOUdIRWdBcHBJb003ejVTYW1CT0NKazlwNi8yVG5CdXE1bVlZNExVc1E2ZUlLM2RiWGUweXFlMERuYXNIdW5SNDMyeWJtWWQvSGpVNkhFZklyZ2Q0ZjJvczFuQ2o3ekZ0bnNqYks4bkpKYVZLbjVrdDVFUFFzQThGeUh2ZlppaUdlNDJsZEswNzNDejBIWm5Ca2JxRU1wM1FkMVZzNTI0YVR5c0wwWkt4ckVOeFp1a0JFNUZVODloRjlYRjZFUkFVaVRPbWhjSkYzMHFWY1gyV3EwRUVXbk1jT2ZkTTA4UnVycFZTak01TWxEWFMwUnVJcFRMWkp4U1FRZkI3VXZldXJicGpSTktrSW83RnJkaFRrVG5XUWlLd1V4UmZjRzFhODRvS1l0NjRucWhRR3o4RVNTYWxNYk9yUGlqT3RUSWk1S2pkaUJ6WXFTVlhLTnM2RFlBTE8rc1paMDJqejZPaHA2czVaSk96M2lzOW9pa1lmcVFHc0xaUVprUHpkNmd3WFYrYTIyRXVRL3B1YzYrZ3FFSWFkazg4aTU2Qk9CYzhvZlBRSXRPcUZwWmpJaDVoSTQ3RXYvS0FrU0RLamloQmtWWTBjZ0tKRmFLaDdDUFhHWGpGU1hQVlBrc2RlWkZjeWRIcGNDNElGRWxhRU1lTkRPN0w1S1MrQkdrbkRaUUtRcHNDemhFQWh4M1NYSldGTndHcG1MeUZUcmJWdm44Z21FSEVpVzB5Yzl5dERCZ1IyWWpYSGpXUWRycG1kYWpnZkZQcUlSUUtlU2tGNE9BeVRYUFF5clhZWjI5VmJJczEwM0diV3cyUmhpaVRIajBMdVVKVHVrc0ZhRWRPMDdaUVppOUplTHZ5WVNWbm9BeEswWVl0MEFRL1M0ZGVJZE42Y2NVMUxuUWZNZml4Vm9qQUkza2U5bURPakNwQnlheEgyOFVqOHhhRVE5ZzBTSzNGc1BKdFJubFZtT3FyZ21JblFYZlpjd1Zpb01McXJCRi9oTWVJZUF5bjdGZUZ3N2JEdHRBVzNYdDZPZ1cybzlvWTlkMEV4OTlMWmlNYWdXK1U5cnNZeko5cTBMY3BWRXcxN05rUTlYMjJoT1k4VzJML3ZZUlF5djVEeGN0RTg2SWl3bmpMK0hNVnEyYitPaTI3ZTFlNCthSEV3VjhLTnFxVFR6ZlhuREVXNTBObkphTEQ5dkFPb3lZZTBRN3ZlamEvRmpTellUT1hWc09QbUdIZXl2WWRFK1RZOGpCYnFWeTFSYTNmNUkwMDhqQlRTeHVuQW4yRFg1M0s0dTBtTEtFTWhrQklqeC9ER2NHN09ZWnR3TlJMVGJoQUxUMWVxdWphS0dMcTlEQlV2a21IUUJpOFNZa1A0ZFVZN0VkdmRCRTFoNnRURjVpRFd0NlMvQWd5SEZKSnB0ZTlnRkxsT2xDOWNOS0tTZWEzK3ZrdUZGY25TQXV4a2tzaUl1MysxVGVOOXZQVE9rL2pCRnB0bk5DSkNyMjZlYzNhdFdxUFVlTTFFM2VLYjRJRDRIazZpbGxXOW5sNHd0VDVUeTV0ZE56eTdZcjdPb2J4TkVWMURNWUpIUkhyK3B0UEc5Z1JjYiszekRRbi9DMWl2b3kreHJwREZsUEdkbmdpUmxwdXp6ODZQYnFvU1lyMTQ1ajVOSmh3L09CRDRtM1B4NjNHNnp2OERjQmoySHJyMVgwZk54OXU0SjJJNWwveDRmdTZIdWRmY2FwNTBmdlZQYndzNldQWkhrdHFqbTlEUkVJNGUvRTMzU0YvVHJlcTFGWi9jdXpOdFcwdmUzT05tN25Hc00wLzN1dWI5ZXBNZm0xN2tzZTJ1L3hlb01Ld1dxYXhrcHYrN09jWUtKNS9zbDZxVm1yN1hzdGkrWFZaL1A0MTdMelZWQ2V0ZjdMN1BLcVJLWTN5dGF4ZjNmNTV0c2JqaVF5ZXY1UnJlQjlEZnd4dmxDY3BqOSs5cHUzNlhlL3IySFJmWHNaN1d3K0FKdmg0eXVPNE5zQ0xId2EvakZYb0doSXNvOHIwcDNJQytRU3h2d0Y4elZwT1V0L09nZ0FBQVlScFEwTlFTVU5ESUhCeWIyWnBiR1VBQUhpY2ZaRTlTTU5BSE1WZlA4UWlGUWNyaUNnRXFVNFdSRVVjdFFwRnFCQnFoVllkVEM3OWdpWU5TWXFMbytCYWNQQmpzZXJnNHF5cmc2c2dDSDZBdUxrNUticElpZjlMQ2kxaVBEanV4N3Q3ajd0M2dMOWVacW9aSEFkVXpUSlNpYmlReWE0S25hOElJWWcrREdOSVlxWStKNHBKZUk2dmUvajRlaGZqV2Q3bi9oemRTczVrZ0U4Z25tVzZZUkZ2RUU5dldqcm5mZUlJSzBvSzhUbnhtRUVYSkg3a3V1enlHK2VDdzM2ZUdUSFNxWG5pQ0xGUWFHTzVqVm5SVUltbmlLT0txbEcrUCtPeXdubUxzMXF1c3VZOStRdkRPVzFsbWVzMEI1SEFJcFlnUW9DTUtrb293MEtNVm8wVUV5bmFqM3Y0Qnh5L1NDNlpYQ1V3Y2l5Z0FoV1M0d2YvZzkvZG12bkpDVGNwSEFjNlhtejdZd1RvM0FVYU5kditQcmJ0eGdrUWVBYXV0SmEvVWdkbVBrbXZ0YlRvRWRDekRWeGN0elI1RDdqY0FmcWZkTW1RSENsQTA1L1BBKzluOUUxWm9QY1c2RnB6ZTJ2dTQvUUJTRk5YeVJ2ZzRCQVlMVkQydXNlN1ErMjkvWHVtMmQ4UFhIWnluajFsTitRQUFBK0xhVlJZZEZoTlREcGpiMjB1WVdSdlltVXVlRzF3QUFBQUFBQThQM2h3WVdOclpYUWdZbVZuYVc0OUl1Kzd2eUlnYVdROUlsYzFUVEJOY0VObGFHbEllbkpsVTNwT1ZHTjZhMk01WkNJL1BnbzhlRHA0YlhCdFpYUmhJSGh0Ykc1ek9uZzlJbUZrYjJKbE9tNXpPbTFsZEdFdklpQjRPbmh0Y0hSclBTSllUVkFnUTI5eVpTQTBMalF1TUMxRmVHbDJNaUkrQ2lBOGNtUm1PbEpFUmlCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaVBnb2dJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU0lpQ2lBZ0lDQjRiV3h1Y3pwcGNIUmpSWGgwUFNKb2RIUndPaTh2YVhCMFl5NXZjbWN2YzNSa0wwbHdkR00wZUcxd1JYaDBMekl3TURndE1ESXRNamt2SWdvZ0lDQWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlDaUFnSUNCNGJXeHVjenB6ZEVWMmREMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMM05VZVhCbEwxSmxjMjkxY21ObFJYWmxiblFqSWdvZ0lDQWdlRzFzYm5NNmNHeDFjejBpYUhSMGNEb3ZMMjV6TG5WelpYQnNkWE11YjNKbkwyeGtaaTk0YlhBdk1TNHdMeUlLSUNBZ0lIaHRiRzV6T2tkSlRWQTlJbWgwZEhBNkx5OTNkM2N1WjJsdGNDNXZjbWN2ZUcxd0x5SUtJQ0FnSUhodGJHNXpPbVJqUFNKb2RIUndPaTh2Y0hWeWJDNXZjbWN2WkdNdlpXeGxiV1Z1ZEhNdk1TNHhMeUlLSUNBZ0lIaHRiRzV6T25ScFptWTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZEdsbVppOHhMakF2SWdvZ0lDQWdlRzFzYm5NNmVHMXdQU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2SWdvZ0lDQjRiWEJOVFRwRWIyTjFiV1Z1ZEVsRVBTSm5hVzF3T21SdlkybGtPbWRwYlhBNk5tSmlaalpsWkdNdE4yTTNNeTAwT0RZekxXSmhNMlV0TkRGbE1qRTJNemswTVdFMElnb2dJQ0I0YlhCTlRUcEpibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPalprT1dZM1l6YzNMVGRqWWprdE5HSXlPQzA1TldVNUxUTTBOVFZsTURnM01UUmhOaUlLSUNBZ2VHMXdUVTA2VDNKcFoybHVZV3hFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pWaU1EY3dOREJtTFRreFltRXROR1ExWVMxaU1USXdMVGcwT1dVMU1qUm1NREE1WVNJS0lDQWdSMGxOVURwQlVFazlJakl1TUNJS0lDQWdSMGxOVURwUWJHRjBabTl5YlQwaVRHbHVkWGdpQ2lBZ0lFZEpUVkE2VkdsdFpWTjBZVzF3UFNJeE5qSTRNVEU0TlRjeU9UYzNOalV6SWdvZ0lDQkhTVTFRT2xabGNuTnBiMjQ5SWpJdU1UQXVNaklpQ2lBZ0lHUmpPa1p2Y20xaGREMGlhVzFoWjJVdmNHNW5JZ29nSUNCMGFXWm1Pazl5YVdWdWRHRjBhVzl1UFNJeElnb2dJQ0I0YlhBNlEzSmxZWFJ2Y2xSdmIydzlJa2RKVFZBZ01pNHhNQ0krQ2lBZ0lEeHBjSFJqUlhoME9reHZZMkYwYVc5dVEzSmxZWFJsWkQ0S0lDQWdJRHh5WkdZNlFtRm5MejRLSUNBZ1BDOXBjSFJqUlhoME9reHZZMkYwYVc5dVEzSmxZWFJsWkQ0S0lDQWdQR2x3ZEdORmVIUTZURzlqWVhScGIyNVRhRzkzYmo0S0lDQWdJRHh5WkdZNlFtRm5MejRLSUNBZ1BDOXBjSFJqUlhoME9reHZZMkYwYVc5dVUyaHZkMjQrQ2lBZ0lEeHBjSFJqUlhoME9rRnlkSGR2Y210UGNrOWlhbVZqZEQ0S0lDQWdJRHh5WkdZNlFtRm5MejRLSUNBZ1BDOXBjSFJqUlhoME9rRnlkSGR2Y210UGNrOWlhbVZqZEQ0S0lDQWdQR2x3ZEdORmVIUTZVbVZuYVhOMGNubEpaRDRLSUNBZ0lEeHlaR1k2UW1Gbkx6NEtJQ0FnUEM5cGNIUmpSWGgwT2xKbFoybHpkSEo1U1dRK0NpQWdJRHg0YlhCTlRUcElhWE4wYjNKNVBnb2dJQ0FnUEhKa1pqcFRaWEUrQ2lBZ0lDQWdQSEprWmpwc2FRb2dJQ0FnSUNCemRFVjJkRHBoWTNScGIyNDlJbk5oZG1Wa0lnb2dJQ0FnSUNCemRFVjJkRHBqYUdGdVoyVmtQU0l2SWdvZ0lDQWdJQ0J6ZEVWMmREcHBibk4wWVc1alpVbEVQU0o0YlhBdWFXbGtPbVJpTUdNeFlqVTFMVFJrWldJdE5EQTNNaTA0TmpSaExXTXlOREl4WXpBM056Vm1OQ0lLSUNBZ0lDQWdjM1JGZG5RNmMyOW1kSGRoY21WQloyVnVkRDBpUjJsdGNDQXlMakV3SUNoTWFXNTFlQ2tpQ2lBZ0lDQWdJSE4wUlhaME9uZG9aVzQ5SWlzd01Ub3dNQ0l2UGdvZ0lDQWdQQzl5WkdZNlUyVnhQZ29nSUNBOEwzaHRjRTFOT2tocGMzUnZjbmsrQ2lBZ0lEeHdiSFZ6T2tsdFlXZGxVM1Z3Y0d4cFpYSStDaUFnSUNBOGNtUm1PbE5sY1M4K0NpQWdJRHd2Y0d4MWN6cEpiV0ZuWlZOMWNIQnNhV1Z5UGdvZ0lDQThjR3gxY3pwSmJXRm5aVU55WldGMGIzSStDaUFnSUNBOGNtUm1PbE5sY1M4K0NpQWdJRHd2Y0d4MWN6cEpiV0ZuWlVOeVpXRjBiM0krQ2lBZ0lEeHdiSFZ6T2tOdmNIbHlhV2RvZEU5M2JtVnlQZ29nSUNBZ1BISmtaanBUWlhFdlBnb2dJQ0E4TDNCc2RYTTZRMjl3ZVhKcFoyaDBUM2R1WlhJK0NpQWdJRHh3YkhWek9reHBZMlZ1YzI5eVBnb2dJQ0FnUEhKa1pqcFRaWEV2UGdvZ0lDQThMM0JzZFhNNlRHbGpaVzV6YjNJK0NpQWdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtDaUE4TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2p3L2VIQmhZMnRsZENCbGJtUTlJbmNpUHo3SjBJVCtBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINVFnRUZ3a2d4b3JTY3dBQUFDUkpSRUZVS005amRQRUkvOC9Bd01Dd1o4ZEtSZ1lHQmdaNjhaa1lSaHBnSEhGQkRRQkRsVHZMbzY2QlR3QUFBQUJKUlU1RXJrSmdnZz09KVxufVxuXG4uYXMtc3BsaXQtZ3V0dGVyLWN1c3RvbS5pcy12ZXJ0aWNhbC5pcy1kYXJrLW1vZGUgPiAuYXMtc3BsaXQtZ3V0dGVyLWljb24tY3VzdG9te1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjRBQUFBRkNBTUFBQUJsLzZ6SUFBQUFCbEJNVkVVQUFBRE16TXpJVDhBeUFBQUFBWFJTVGxNQVFPYllaZ0FBQUJSSlJFRlVlQUZqWUdSa3dJTUpTZU1IbEJrT0FCUDdBRUd6U3VQS0FBQUFBRWxGVGtTdVFtQ0NcIik7XG59XG5cbi5hcy1zcGxpdC1ndXR0ZXItY3VzdG9tLmlzLWhvcml6b250YWwuaXMtZGFyay1tb2RlID4gLmFzLXNwbGl0LWd1dHRlci1pY29uLWN1c3RvbXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFVQUFBQWVDQVlBQUFEa2Z0UzlBQUFBSWtsRVFWUW9VMk00YytiTWZ4QUdBZ1lZbXdHcklJaURqckVManBvNWFpWmVNd0YreU5uT3M1S1N2Z0FBQUFCSlJVNUVya0pnZ2c9PVwiKTtcbn1cblxuLmlmcmFtZS1vdmVybGF5e1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgei1pbmRleDogMjtcbn1cblxuW2hpZGRlbl17XG4gICAgZGlzcGxheTpub25lO1xufVxuXG5hcy1zcGxpdC1hcmVhID4gIGFwcC1pZnJhbWUtcGFydCxcbmFzLXNwbGl0LWFyZWEgPiAgYXBwLWh0bWwtcGFydCxcbmFzLXNwbGl0LWFyZWEgPiAgYXBwLWNzcy1wYXJ0LFxuYXMtc3BsaXQtYXJlYSA+ICBhcHAtanMtcGFydHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb2RlLWNvbXBvbmVudC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbjp3aGVyZSguY29kZXBhcnRzLWlmcmFtZS1jb250YWluZXJbZGF0YS1sYXlvdXQ9JzEnXSwgLmNvZGVwYXJ0cy1pZnJhbWUtY29udGFpbmVyW2RhdGEtbGF5b3V0PSczJ10pIC5jb2RlLWNvbXBvbmVudC1jb250YWluZXJ7XG4gICAgaGVpZ2h0OiAwcHg7XG59XG5cblxuLmNvZGUtcGFydC10aXRsZSB7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbn1cblxuLyphcy1zcGxpdC1hcmVhLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lciA+IGFwcC1jc3MtcGFydCxcbmFzLXNwbGl0LWFyZWEuY29kZS1jb21wb25lbnQtY29udGFpbmVyID4gYXBwLWpzLXBhcnQsXG5hcy1zcGxpdC1hcmVhLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lciA+IGFwcC1odG1sLXBhcnR7XG4gICAgXG59Ki9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4OTBweCkgYW5kIChtaW4taGVpZ2h0OjU4MXB4KXtcbiAgICA6aG9zdCA6Om5nLWRlZXAgYXBwLWlmcmFtZS1wYXJ0LmxheW91dC10eXBlLTF7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG4gICAgXG4gICAgOmhvc3QgOjpuZy1kZWVwIGFwcC1pZnJhbWUtcGFydC5sYXlvdXQtdHlwZS0ze1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAubWFpbi1jb250YWluZXItZmlkZGxlLmZ1bGwtc2NyZWVuLWlmcmFtZSAuaWZyYW1lLWFyZWFbY2xhc3NdIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBmbGV4OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMjNweDtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIzcHgpO1xuICAgIH1cbiAgICBcbiAgICAubWFpbi1jb250YWluZXItZmlkZGxlLmZ1bGwtc2NyZWVuLWlmcmFtZSAuZnVsbHNjcmVlbi1pZnJhbWUtaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC8qKioqKioqKioqKioqKiovXG4gICAgLmZpZGRsZS1zaXplIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbC5maWRkbGUtaW5wdXQge1xuICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgfVxuXG4gICAgLmZpZGRsZS10aXRsZVtjbGFzc10gLmZpZGRsZS1pbnB1dFtjbGFzc117XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmxvZ28tdGl0bGUtY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSA0NHB4KTtcbiAgICAgIC8qISB3aWR0aDogYXV0bzsgKi9cbiAgICB9XG5cbiAgICAuZmlkZGxlLXRpdGxlIHtcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gICAgfVxuXG4gICAgLmZpZGRsZS1zaXplIHtcbiAgICAgIHdpZHRoOiA5NHB4O1xuICAgIH1cblxuICAgIC5mdWxsc2NyZWVuLWlmcmFtZS1idG4uYnRuIHtcbiAgICAgIHdpZHRoOiAyNnB4O1xuICAgIH1cbiAgICBcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tb25hY28tZWRpdG9yIC5tb25hY28taG92ZXIge1xuICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDEwMiAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1vbmFjby1zY3JvbGxhYmxlLWVsZW1lbnR7XG4gICAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tb25hY28tZWRpdG9yIC5wYXJhbWV0ZXItaGludHMtd2lkZ2V0e1xuICAgIHotaW5kZXg6IDEwMyAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuLyoqKioqKi9cbi5jb2RlcGFydHMtY29udGFpbmVyIHtcbiAgICBmbGV4LWJhc2lzOiAzMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29kZXBhcnRzLWlmcmFtZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmFzLXNwbGl0LWFyZWEtaWZyYW1lLmlzLXZlcnRpY2FsIHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG4vKioqKi9cblxuLmNvZGVwYXJ0cy1pZnJhbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hcy1zcGxpdC1hcmVhLWlmcmFtZS5pcy12ZXJ0aWNhbCB7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4uY29kZS1wYXJ0LWd1dHRlcixcbi5tYWluLWNvbnRhaW5lci1ndXR0ZXJ7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7Ki9cbiAgICBmbGV4LWJhc2lzOiA1cHg7XG4gICAgY3Vyc29yOiBncmFiO1xuICAgIHotaW5kZXg6IDE7XG59XG4gXG5cbi5hcy1zcGxpdC1hcmVhLWlmcmFtZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZmxleC1iYXNpczogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDBweDtcbn1cblxuLmFzLXNwbGl0LWFyZWEtaWZyYW1lLmlzLXZlcnRpY2FsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29kZXBhcnRzLWlmcmFtZS1jb250YWluZXJbZGF0YS1sYXlvdXQ9JzInXSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuXG4uY29kZXBhcnRzLWlmcmFtZS1jb250YWluZXJbZGF0YS1sYXlvdXQ9JzMnXSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4uY29kZXBhcnRzLWlmcmFtZS1jb250YWluZXJbZGF0YS1sYXlvdXQ9JzQnXSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xufVxuXG4uY29kZXBhcnRzLWlmcmFtZS1jb250YWluZXJbZGF0YS1sYXlvdXQ9JzInXSAuY29kZXBhcnRzLWNvbnRhaW5lcltjbGFzc10ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jb2RlcGFydHMtaWZyYW1lLWNvbnRhaW5lcltkYXRhLWxheW91dD0nNCddIC5jb2RlcGFydHMtY29udGFpbmVyW2NsYXNzXSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4OyAgIFxufVxuXG4uY29kZS1jb21wb25lbnR7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG46d2hlcmUoLmNvZGVwYXJ0cy1pZnJhbWUtY29udGFpbmVyW2RhdGEtbGF5b3V0PScxJ10sIC5jb2RlcGFydHMtaWZyYW1lLWNvbnRhaW5lcltkYXRhLWxheW91dD0nMyddKSAuY29kZS1jb21wb25lbnQtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG46d2hlcmUoLmNvZGVwYXJ0cy1pZnJhbWUtY29udGFpbmVyW2RhdGEtbGF5b3V0PScxJ10sIC5jb2RlcGFydHMtaWZyYW1lLWNvbnRhaW5lcltkYXRhLWxheW91dD0nMyddKSAuY29kZS1jb21wb25lbnQtY29udGFpbmVyIC5jb2RlLWNvbXBvbmVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDowcHg7XG59XG4vKioqKioqL1xuQG1lZGlhIChtaW4td2lkdGg6ODkwcHgpIHtcbiAgICAuY29kZS1jb21wb25lbnQtY29udGFpbmVyLmZ1bGxzY3JlZW4ge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDEyNSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOjBweDtcbiAgICB9XG4gICAgLmNvZGUtcGFydC10aXRsZXtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiNWI1YjU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo4ODlweCksIChtYXgtaGVpZ2h0OjU4MHB4KSB7ICBcblxuICAgICAgICAuY29kZS1wYXJ0LWd1dHRlci5ndXR0ZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5jb2RlLWNvbXBvbmVudC1jb250YWluZXJ7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOmF1dG87XG4gICAgICAgICAgICBmbGV4LWdyb3c6MTtcbiAgICAgICAgfVxuXG4gICAgLmhpZGUtbW9iaWxle1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlmcmFtZS1hcmVhIHtcbiAgICAgICAgZmxleDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICA6aG9zdCA6Om5nLWRlZXAgYXMtc3BsaXRbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlcltjbGFzc10sXG4gICAgLmFzLXNwbGl0LWd1dHRlci1jdXN0b217XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG5cbiAgICAjbWFpbi1oZWFkZXJ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICBwYWRkaW5nOiAzcHggMCA1cHggMDtcbiAgICB9XG4gICAgXG4gICAgI2NvZGUtcGFydHMtdGl0bGUtbW9iaWxle1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICNtYWluLXJlc2l6ZXJ7XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG5cbiAgICAuY29kZS1wYXJ0LXRpdGxlLWJ0bixcbiAgICAuZnVsbHNjcmVlbi1pZnJhbWUtYnRuLFxuICAgIC5zdHJldGNoLXYtaWZyYW1lLWJ0bixcbiAgICAuc3RyZXRjaC1oLWlmcmFtZS1idG57XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmxheW91dHMtbGlzdC1jb250YWluZXJ7XG4gICAgICAgIC8qb3BhY2l0eTogMC41O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsqL1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuXG4gICAgLmxheW91dHMtbGlzdHtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRhaW5lci1maWRkbGV7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcxcHgpO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW4gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZmlkZGxlLXNpemV7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmNvZGUtcGFydC10aXRsZXtcbiAgICAgICAgZGlzcGxheTpub25lXG4gICAgfVxuXG4gICAgLmNvZGUtY29tcG9uZW50IHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiNWI1YjU7XG4gICAgfVxuXG4gICAgLmNvZGVwYXJ0cy1pZnJhbWUtY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYXMtc3BsaXQtZ3V0dGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5hcy1zcGxpdC1ndXR0ZXItY3VzdG9te1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIGFzLXNwbGl0LWFyZWEuY29kZXBhcnRzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OjUwJSAhaW1wb3J0YW50O1xuICAgICAgICBmbGV4Om5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgb3JkZXI6MCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGFzLXNwbGl0LWFyZWEuYXMtc3BsaXQtYXJlYS1pZnJhbWUge1xuICAgICAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDo1MCUgIWltcG9ydGFudDtcbiAgICAgICAgZmxleDpub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNvZGVwYXJ0cy1pZnJhbWUtY29udGFpbmVyLm5vLXJlc3VsdC1tb2JpbGUgPiAuY29kZXBhcnRzLWNvbnRhaW5lcixcbiAgICAuY29kZXBhcnRzLWlmcmFtZS1jb250YWluZXIubm8tcmVzdWx0LW1vYmlsZSA+IC5hcy1zcGxpdC1hcmVhLWlmcmFtZXtcbiAgICAgICAgaGVpZ2h0OjEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY29kZXBhcnRzLWlmcmFtZS1jb250YWluZXIubm8tY29kZS1tb2JpbGUgPiAuY29kZXBhcnRzLWNvbnRhaW5lcixcbiAgICAuY29kZXBhcnRzLWlmcmFtZS1jb250YWluZXIubm8tY29kZS1tb2JpbGUgPiAuYXMtc3BsaXQtYXJlYS1pZnJhbWV7XG4gICAgICAgIGhlaWdodDoxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgYXMtc3BsaXQtYXJlYS5jb2RlLWNvbXBvbmVudC1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICBmbGV4OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFwcC1sb2FkZXJ7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgdG9wOiA0cHg7XG4gICAgICAgIHJpZ2h0OiA0cHg7XG4gICAgfVxuXG4gICAgLmZpZGRsZS10aXRsZXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIC5maWRkbGUtbG9nb3tcbiAgICAgICAgbGVmdDogNHB4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB3aWR0aDogNDVweDtcbiAgICB9XG5cbiAgICAvKmhpZGUgaWZyYW1lIHJlc2l6aW5nIGVtcHR5IGFyZWEgZm9yIG1vYmlsZSBkZXZpY2VzKi9cbiAgICBcbiAgICAuYXMtc3BsaXQtYXJlYS1pZnJhbWUgPiAuZW1wdHktYXJlYXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmFzLXNwbGl0LWd1dHRlci1jdXN0b20ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRhaW5lci1maWRkbGUuZnVsbC1zY3JlZW4taWZyYW1lIC5mdWxsc2NyZWVuLWlmcmFtZS1oZWFkZXJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmlmcmFtZS1vdmVybGF5LWZvci1kcm9we1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDAwcHgpe1xuICAgIC5oZWFkZXItYnRucy1jb250YWluZXIgID4gKjpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICBtYXJnaW4tcmlnaHQ6M3B4O1xuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XG4gICAgICAgIHBhZGRpbmc6IDFweCAycHg7XG4gICAgfVxuXG4gICAgLmhlYWRlci1idG5zLWNvbnRhaW5lciAgPiAqOmxhc3QtY2hpbGR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjNweDtcbiAgICAgICAgcGFkZGluZzogMXB4IDJweDtcbiAgICB9XG5cbiAgICAubG9nby10aXRsZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICBcbiAgICAuZmlkZGxlLWxvZ28ge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxufVxuXG5hcHAtbW9kYWwgLm1vZGFsLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAycHggNHB4O1xufVxuYXBwLW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAycHggNHB4O1xufVxuXG5hcHAtbW9kYWwgLm1vZGFsLWhlYWRlciAubW9kYWwtY2xvc2UtYnRue1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgdHJhbnNmb3JtOm5vbmU7XG59XG5cbmFwcC1tb2RhbCAubW9kYWwtaGVhZGVyIC5tb2RhbC12YWxpZGF0ZS1idG57XG4gICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuXG4udGhlbWVzLW1lbnUgbGkuc2VsZWN0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTsqL1xuICAgIC8qY29sb3I6ICNGRkZGRkY7Ki9cbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmNsaW5naW5ne1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjbGluZztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmJ1dHRvbi5oaXN0b3J5LWJ0bi5idG4gaXtcbiAgICB3aWR0aDogMzBweDtcbn1cblxuYnV0dG9uLmhpc3RvcnktYnRuLmJ0biBpe1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY2FsYygxMDAlIC0gNHB4KTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG4vKioqKioqKioqKioqKiovXG46aG9zdCA6Om5nLWRlZXAgLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lciBuZ3gtY29kZW1pcnJvciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lciBuZ3gtY29kZW1pcnJvciAuQ29kZU1pcnJvciB7XG4gICAgZmxleC1ncm93OiAxO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6388:
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalComponent: () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



const _c0 = ["*"];
const _c1 = a0 => ({
  "shown": a0
});
class ModalComponent {
  constructor() {
    this.isVisible = false;
    this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  show() {
    this.isVisible = true;
  }
  hide() {
    this.isVisible = false;
    this.onHide.emit();
  }
  isShown() {
    return this.isVisible;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalComponent,
      selectors: [["app-modal"]],
      outputs: {
        onHide: "onHide"
      },
      ngContentSelectors: _c0,
      decls: 3,
      vars: 3,
      consts: [[1, "modal-container", 3, "ngClass"], [1, "modal"]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx.isShown()));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
      styles: [".modal-container .modal-header{\n  text-align: center;\n  position:relative;\n  padding:4px;\n}\n\n  .modal-container .modal-header h3{\n  margin: 0px;\n}\n\n  .modal-footer{\n  display: flex;\n  justify-content: center;\n  padding: 4px;\n}\n\n  .modal-body{\n  padding: 4px;\n  overflow: auto;\n  flex-grow: 1;\n}\n\n  .modal-close-btn{\n  position: absolute;\n  top:50%;\n  transform: translateY(-50%);\n  right:3px;\n  font-size: 16px;\n  cursor: pointer;\n  display: block;\n  text-align: center;\n  border-width: 1px;\n  border-style: solid;\n  -webkit-user-select: none;\n          user-select: none;\n  outline: none;\n  padding: 4px 12px;\n  height: 33px;\n}\n\n  .modal-close-btn:active{\n    padding: 6px 12px 4px 12px;\n}\n  .modal-close-btn:hover{\n    background-color: #FFFFFF;\n}\n\n.modal-container[_ngcontent-%COMP%]{\n  top: 0px;\n  left: 0px;\n  pointer-events: none;\n  opacity: 0;\n  position: fixed;\n  z-index: -1;\n  width:100%;\n  height:100%;\n  transition: 0.2s all;\n}\n.modal[_ngcontent-%COMP%]{\n  top: 1px;\n  transform:translateY(0px) translateX(-50%);\n  position: absolute;\n  left: 50%;\n  width: 50%;\n  min-width: 750px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  transition: 0.2s all;\n  height: calc(100% - 2px);\n  overflow: auto;\n}\n\n.modal-container.shown[_ngcontent-%COMP%]{\n  pointer-events: all;\n  opacity: 1;\n  z-index:9999;\n}\n\n@media screen and (max-width:767px){\n  .modal[_ngcontent-%COMP%]{\n    min-width: auto;\n    width: calc(100% - 2px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsUUFBUTtFQUNSLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7RUFDekI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1oZWFkZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHBhZGRpbmc6NHB4O1xufVxuXG46Om5nLWRlZXAgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtaGVhZGVyIGgze1xuICBtYXJnaW46IDBweDtcbn1cblxuOjpuZy1kZWVwIC5tb2RhbC1mb290ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbjo6bmctZGVlcCAubW9kYWwtYm9keXtcbiAgcGFkZGluZzogNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgZmxleC1ncm93OiAxO1xufVxuXG46Om5nLWRlZXAgLm1vZGFsLWNsb3NlLWJ0bntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6NTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHJpZ2h0OjNweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGhlaWdodDogMzNweDtcbn1cblxuOjpuZy1kZWVwIC5tb2RhbC1jbG9zZS1idG46YWN0aXZle1xuICAgIHBhZGRpbmc6IDZweCAxMnB4IDRweCAxMnB4O1xufVxuOjpuZy1kZWVwIC5tb2RhbC1jbG9zZS1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuLm1vZGFsLWNvbnRhaW5lcntcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cbi5tb2RhbHtcbiAgdG9wOiAxcHg7XG4gIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDBweCkgdHJhbnNsYXRlWCgtNTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIG1pbi13aWR0aDogNzUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMnB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tb2RhbC1jb250YWluZXIuc2hvd257XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6OTk5OTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XG4gIC5tb2RhbHtcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1806:
/*!************************************************!*\
  !*** ./src/app/pastebin/pastebin.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PastebinComponent: () => (/* binding */ PastebinComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.service */ 6592);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ 261);





const _c0 = ["codeMirrorEditor"];
class PastebinComponent {
  constructor(mainService) {
    this.mainService = mainService;
    this.theme = "xq-light";
    this.text = "";
    this.savecodemsg = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.codeMirrorOptions = {
      mode: "htmlmixed",
      lineNumbers: true,
      theme: 'xq-light',
      spellcheck: true,
      autocorrect: true
    };
  }
  ngOnInit() {
    this.text = this.mainService.pastebinText;
    ////console.log("JsPartComponent ngOnInit");
  }
  ngAfterViewInit() {}
  onCodeChanged(value) {
    //////console.log('CODE', value);
    this.mainService.pastebinText = value;
    this.mainService.setCheckBeforeUnloadListener();
  }
  static {
    this.ɵfac = function PastebinComponent_Factory(t) {
      return new (t || PastebinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PastebinComponent,
      selectors: [["app-pastebin"]],
      viewQuery: function PastebinComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.codeMirrorEditor = _t.first);
        }
      },
      outputs: {
        savecodemsg: "savecodemsg"
      },
      decls: 2,
      vars: 2,
      consts: [["codeMirrorEditor", ""], [3, "ngModelChange", "ngModel", "options"]],
      template: function PastebinComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-codemirror", 1, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function PastebinComponent_Template_ngx_codemirror_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.text, $event) || (ctx.text = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PastebinComponent_Template_ngx_codemirror_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onCodeChanged($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.text);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.codeMirrorOptions);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_3__.CodemirrorComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6865:
/*!***************************************!*\
  !*** ./src/app/ressources.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RessourcesService: () => (/* binding */ RessourcesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);




class RessourcesService {
  constructor(http) {
    this.http = http;
    this.isDataCached = false;
    this.cachedRessourcesData = {
      results: []
    };
    this.cacheTimedOut = false;
    this.cachedCdnjsMetaData = [];
    setInterval(() => {
      this.cacheTimedOut = true;
      this.cachedRessourcesData = {
        results: []
      };
      this.cachedCdnjsMetaData = [];
    }, 3600000 * 6);
  }
  searForString(srcStr, searchStr) {
    if (srcStr.toUpperCase() == searchStr.toUpperCase()) {
      return true;
    }
    if (srcStr.toUpperCase().includes(searchStr.toUpperCase())) {
      return true;
    } else {
      let strsArr = searchStr.split(" ");
      let counter = 0;
      for (var ind = 0; ind < strsArr.length; ind++) {
        let str = strsArr[ind];
        if (srcStr.toUpperCase().includes(str.toUpperCase())) {
          counter++;
        }
      }
      if (counter == strsArr.length) {
        return true;
      }
    }
    return false;
  }
  getRessourcesBySearch(searchString) {
    let newRessources = this.http.get("https://api.cdnjs.com/libraries?search=" + searchString + "&fields=name,description,version&limit=20").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => {
      let res2 = res;
      res2.results = res2.results.filter(libraryData => {
        return this.searForString(libraryData.name, searchString);
      });
      res2.results.sort((a, b) => {
        if (a.name.length > b.name.length) {
          return 1;
        } else if (a.name.length < b.name.length) {
          return -1;
        } else {
          if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1;
          } else {
            return -1;
          }
        }
      });
      //console.log("network res2.results = ", res2.results);
      //console.log("------------------------");
      res2.results.forEach(libraryData => {
        let ind = this.cachedRessourcesData.results.findIndex(cachedLibraryData => {
          return cachedLibraryData.name.toUpperCase() == libraryData.name.toUpperCase();
        });
        if (ind === -1) {
          //retrieved library/ressource is NOT present in the cached search result ? cache it
          this.cachedRessourcesData.results.push(libraryData);
        }
      });
      return res2;
    }));
    return newRessources;
  }
  getRessources() {
    let newRessources = this.http.get("https://api.cdnjs.com/libraries?fields=name,description,version").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(res => {
      if (!this.isDataCached) {
        this.isDataCached = true;
        this.cacheTimedOut = false;
        this.cachedRessourcesData = res;
      }
      return res;
    }));
    if (this.cacheTimedOut) {
      return newRessources;
    } else {
      if (this.isDataCached) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.cachedRessourcesData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(res => {
          this.cacheTimedOut = false;
          return res;
        }));
      } else {
        return newRessources;
      }
    }
  }
  getRessourceMetaData(ressourceName) {
    let newRessourceMetaData = this.http.get("https://api.cdnjs.com/libraries/" + ressourceName + "?fields=assets,description,latest,name,versions").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(res => {
      let ind = this.cachedCdnjsMetaData.findIndex(cachedLibraryMetaData => {
        return cachedLibraryMetaData.name.toUpperCase() == res.name.toUpperCase();
      });
      if (ind === -1) {
        //retrieved library/ressource metaData is NOT present in the cached libraries metaDatas ?
        this.cachedCdnjsMetaData.push({
          name: ressourceName,
          cachedMetaData: res
        });
      }
    }));
    return newRessourceMetaData;
    /*
    let ind = this.cachedCdnjsMetaData.findIndex((cachedLibraryMetaData)=>{
      return cachedLibraryMetaData.name.toUpperCase().indexOf(ressourceName.trim().toUpperCase()) > -1
    });
         console.log("this.cachedCdnjsMetaData = ", this.cachedCdnjsMetaData);
    console.log("------------------------");
         if(ind > -1){//searched library/ressource i"s present in the cached search result ?
      return of(this.cachedCdnjsMetaData[ind]);
    }
    else{
      return newRessourceMetaData;
    }
    */
  }
  getRessourceAssets(ressourceName, ressourceVersion) {
    let libraryAssets = this.http.get("https://api.cdnjs.com/libraries/" + ressourceName + "/" + ressourceVersion);
    return libraryAssets;
  }
  static {
    this.ɵfac = function RessourcesService_Factory(t) {
      return new (t || RessourcesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: RessourcesService,
      factory: RessourcesService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1514:
/*!****************************************************!*\
  !*** ./src/app/ressources/ressources.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RessourcesComponent: () => (/* binding */ RessourcesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3119);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9803);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6109);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1963);
/* harmony import */ var _ressources_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ressources.service */ 6865);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader/loader.component */ 7220);








const _c0 = ["loader"];
const _c1 = (a0, a1) => ({
  "browse-mode": a0,
  "select-mode": a1
});
const _c2 = a0 => ({
  "selected": a0
});
const _c3 = a0 => ({
  "is-reduced": a0
});
const _c4 = () => ({
  "margin-right": "15px"
});
const _c5 = a0 => ({
  "current-choice": a0
});
const _c6 = (a0, a1) => ({
  "is-stretched": a0,
  "loading": a1
});
const _c7 = a0 => ({
  "is-stretched": a0
});
const _c8 = a0 => ({
  "placeholder": a0
});
function RessourcesComponent_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RessourcesComponent_label_5_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.ressoucesMobileTab, $event) || (ctx_r2.ressoucesMobileTab = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c2, ctx_r2.ressoucesMobileTab == "select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.ressoucesMobileTab);
  }
}
function RessourcesComponent_div_12_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const version_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", version_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](version_r5);
  }
}
function RessourcesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Choose version: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RessourcesComponent_div_12_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.currentRessourceVersion, $event) || (ctx_r2.currentRessourceVersion = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RessourcesComponent_div_12_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onCurrentRessourceChoiceVersionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RessourcesComponent_div_12_option_4_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.currentRessourceVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.currentRessourceVersions);
  }
}
function RessourcesComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RessourcesComponent_div_15_div_1_Template_div_click_0_listener() {
      const ressource_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onRessourcesChoiceClick(ressource_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 26)(4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Version:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ressource_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c5, ctx_r2.currentRessourceChoice.name == ressource_r7.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ressource_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ressource_r7.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ressource_r7.description);
  }
}
function RessourcesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RessourcesComponent_div_15_div_1_Template, 10, 6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.availableRessources);
  }
}
function RessourcesComponent_div_17_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RessourcesComponent_div_17_div_9_Template_div_click_0_listener() {
      const file_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onSelectRessourceAsset(file_r10, ctx_r2.currentRessourceChoice));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c2, ctx_r2.isRessourceAssetSelected(file_r10, ctx_r2.currentRessourceChoice)))("title", "(click to toggle)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](file_r10);
  }
}
function RessourcesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Search for files: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RessourcesComponent_div_17_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onRessourcesChoiceFilesSearchStringChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RessourcesComponent_div_17_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.ressourcesChoiceFilesSearchString, $event) || (ctx_r2.ressourcesChoiceFilesSearchString = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RessourcesComponent_div_17_div_9_Template, 3, 5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const loader_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c6, ctx_r2.selectedRessourceAssets.length == 0, loader_r11.isLoaderShow()));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r2.currentRessourceChoice.name, " ", ctx_r2.currentRessourceVersion, " ressources (click to toggle)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.ressourcesChoiceFilesSearchString);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.getFilteredcurrentRessourceAssetsByVersion(ctx_r2.currentRessourceAssetsByVersion, ctx_r2.ressourcesChoiceFilesSearchString));
  }
}
function RessourcesComponent_hr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "hr");
  }
}
function RessourcesComponent_div_19_h3_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Seleted ressources (drag to reorder)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RessourcesComponent_div_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44)(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("drop", function RessourcesComponent_div_19_div_3_Template_div_drop_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.ressourceChoiceSelectedAssetDrop($event));
    })("dragover", function RessourcesComponent_div_19_div_3_Template_div_dragover_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.ressourceChoiceSelectedAssetDragover($event));
    })("dragstart", function RessourcesComponent_div_19_div_3_Template_div_dragstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.ressourceChoiceSelectedAssetDragstart($event));
    })("dragenter", function RessourcesComponent_div_19_div_3_Template_div_dragenter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.ressourceChoiceSelectedAssetDragenter($event));
    })("dragleave", function RessourcesComponent_div_19_div_3_Template_div_dragleave_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.ressourceChoiceSelectedAssetDragleave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 46)(5, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RessourcesComponent_div_19_div_3_Template_button_click_5_listener() {
      const selectedFile_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.removeSelectedRessourceAsset(selectedFile_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const selectedFile_r13 = ctx.$implicit;
    const ind_r14 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Grab to reorder")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c8, selectedFile_r13.placeholderMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c8, selectedFile_r13.placeholderMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-index", ind_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.getFullAssetUrl(selectedFile_r13));
  }
}
function RessourcesComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RessourcesComponent_div_19_h3_1_Template, 2, 0, "h3", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RessourcesComponent_div_19_div_3_Template, 8, 9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c7, ctx_r2.selectedRessourceAssets.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.selectedRessourceAssets.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.selectedRessourceAssets);
  }
}
class RessourcesComponent {
  constructor(ressourcesService) {
    this.ressourcesService = ressourcesService;
    this.availableRessources = [];
    this.currentRessourceChoice = {
      name: "",
      version: "",
      latest: "",
      description: ""
    };
    this.currentRessourceAssetsByVersion = [];
    this.selectedRessourceAssets = [];
    this.hidemodal = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.validate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.ressoucesMobileTab = "browse";
    this.ressourceSearchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  onRessourcesQueryStringChange(str) {
    let searchString = str.trim().toUpperCase();
    if (searchString.length) {
      this.loader.showLoader();
      this.ressourceSearchTerm.next(searchString);
    }
  }
  onRessourcesChoiceClick(ressource) {
    let currentRessourceName = this.currentRessourceChoice.version;
    if (currentRessourceName != ressource.name) {
      this.loader.showLoader();
      this.currentRessourceAssetsByVersion = [];
      this.ressourcesChoiceFilesSearchString = "";
      this.currentRessourceChoice = ressource;
      this.ressourcesService.getRessourceMetaData(ressource.name).subscribe(res => {
        //console.log("getRessourceMetaData res = ", res);
        //console.log("currentRessourceChoice = ", this.currentRessourceChoice);
        this.currentRessourceMetaData = res;
        this.currentRessourceVersions = this.currentRessourceMetaData.versions;
        this.currentRessourceVersion = ressource.version; //main latest version of the clicked ressource of course.
        this.setCurrentRessourceAssetsByVersion(ressource.version);
        this.loader.hideLoader();
      });
    }
  }
  setCurrentRessourceAssetsByVersion(ressourceVersion) {
    let assetsPerVersion = this.currentRessourceMetaData.assets.filter(assetData => {
      return assetData.version == ressourceVersion;
    });
    if (assetsPerVersion.length) {
      this.currentRessourceAssetsByVersion = assetsPerVersion[0].files;
    } else {
      //this.currentRessourceAssetsByVersion =  this.currentRessourceMetaData.assets[this.currentRessourceMetaData.assets.length - 1].files;
      //this.currentRessourceVersion = this.currentRessourceMetaData.assets[this.currentRessourceMetaData.assets.length - 1].version;
      this.loader.showLoader();
      this.ressourcesService.getRessourceAssets(this.currentRessourceChoice.name, ressourceVersion).subscribe(res => {
        this.currentRessourceAssetsByVersion = res.files;
        this.loader.hideLoader();
      });
    }
  }
  onCurrentRessourceChoiceVersionChange(ressourceVersion) {
    //console.log("onCurrentRessourceChoiceVersionChange ressourceVersion = ", ressourceVersion);
    this.setCurrentRessourceAssetsByVersion(ressourceVersion);
  }
  onComponentKeyup(event) {
    //console.log("keyup event = ", event);
    if (event.key == "Escape") {
      this.hidemodal.emit();
    }
  }
  resetCurrentRessourceChoice() {
    this.currentRessourceChoice = {
      name: "",
      version: "",
      latest: "",
      description: ""
    };
    this.ressourcesQueryString = "";
    this.ressourcesChoiceFilesSearchString = "";
    this.availableRessources = [];
    this.currentRessourceAssetsByVersion = [];
  }
  emptySelectedRessourceAssets() {
    this.selectedRessourceAssets = [];
  }
  onRessourcesChoiceFilesSearchStringChange(str) {
    //console.log("ressourcesChoiceFilesSearchString = ", this.ressourcesChoiceFilesSearchString);
    //console.log("str = ", str);
  }
  getFilteredcurrentRessourceAssetsByVersion(datasetArr, searchStr) {
    return datasetArr.filter(srcStr => {
      if (srcStr.length >= 4) {
        if (srcStr.substring(srcStr.length - 4) == ".css" || srcStr.substring(srcStr.length - 3) == ".js") {
          return true;
        }
      }
      return false;
    }).filter(srcStr => {
      return this.ressourcesService.searForString(srcStr, searchStr);
    });
  }
  onSelectRessourceAsset(asset, ressource) {
    //console.log("onSelectRessourceAsset data = ", asset);
    let assetIndex = undefined;
    for (let ind = 0; ind < this.selectedRessourceAssets.length; ind++) {
      //see if selected-asset's index is already selected
      let assetData = this.selectedRessourceAssets[ind];
      if (assetData.asset == asset && assetData.ressourceName == ressource.name && assetData.version == this.currentRessourceVersion) {
        assetIndex = ind;
        break;
      }
    }
    if (assetIndex === undefined) {
      //selected asset doesn't exist in selected assets array? push it
      this.selectedRessourceAssets.push({
        ressourceName: ressource.name,
        asset: asset,
        version: this.currentRessourceVersion,
        latest: ressource.latest,
        latestVersion: ressource.version,
        placeholderMode: false
      });
    } else {
      //remove it otherwise
      this.selectedRessourceAssets.splice(assetIndex, 1);
    }
  }
  isRessourceAssetSelected(asset, ressource) {
    return this.selectedRessourceAssets.filter(el => {
      return el.asset == asset && el.ressourceName == ressource.name && el.version == this.currentRessourceVersion;
    }).length > 0;
  }
  ressourceChoiceSelectedAssetDrop(event) {
    //console.log("ressourceChoiceSelectedAssetDrop event.target = ", event.target);
    let evTarget = event.target;
    //evTarget.style.backgroundColor = "red";
    let assetIndex = parseInt(evTarget.dataset.index);
    //console.log("assetIndex = ", assetIndex);
    let temp = this.selectedRessourceAssets[this.assetIndexDragstart];
    this.selectedRessourceAssets[this.assetIndexDragstart] = this.selectedRessourceAssets[assetIndex];
    this.selectedRessourceAssets[assetIndex] = temp;
    this.selectedRessourceAssets.filter(el => {
      return el.placeholderMode;
    }).forEach(el => {
      el.placeholderMode = false;
    });
  }
  ressourceChoiceSelectedAssetDragover(event) {
    event.preventDefault();
  }
  ressourceChoiceSelectedAssetDragstart(event) {
    event.dataTransfer.setData('text', "");
    //console.log("ressourceChoiceSelectedAssetDragstart event = ", event.target);
    let evTarget = event.target;
    this.assetIndexDragstart = parseInt(evTarget.dataset.index);
  }
  ressourceChoiceSelectedAssetDragenter(event) {
    //console.log("ressourceChoiceSelectedAssetDragenter target = ", event.target);
    let evTarget = event.target;
    //evTarget.classList.add("placeholder");
    let index = parseInt(evTarget.dataset.index);
    this.selectedRessourceAssets[index].placeholderMode = true;
  }
  ressourceChoiceSelectedAssetDragleave(event) {
    //console.log("ressourceChoiceSelectedAssetDragleave target = ", event.target);
    let evTarget = event.target;
    //evTarget.classList.remove("placeholder");
    let index = parseInt(evTarget.dataset.index);
    this.selectedRessourceAssets[index].placeholderMode = false;
  }
  getFullAssetUrl(selectedRessourceAsset) {
    let latest = selectedRessourceAsset.latest;
    let version = selectedRessourceAsset.version;
    let asset = selectedRessourceAsset.asset;
    let arr = latest.split(selectedRessourceAsset.latestVersion);
    let url = "";
    if (arr.length) {
      url = arr[0];
      url += version + "/" + asset;
    }
    return url;
  }
  removeSelectedRessourceAsset(selectedRessourceAsset) {
    let assetIndex = this.selectedRessourceAssets.findIndex(el => {
      return el.ressourceName == selectedRessourceAsset.ressourceName && el.version == selectedRessourceAsset.version && el.asset == selectedRessourceAsset.asset;
    });
    if (assetIndex !== -1) {
      this.selectedRessourceAssets.splice(assetIndex, 1);
    }
  }
  validateRessources() {
    //validate ressources here
    let maxLength = 0;
    let selectedRessourceAssets = this.selectedRessourceAssets.map(el => {
      let srcStr = el.asset;
      let result = "";
      if (srcStr.substr(srcStr.length - 4) == ".css") {
        result = "<link rel='stylesheet' href='" + this.getFullAssetUrl(el) + "'>" + "\n";
      } else if (srcStr.substr(srcStr.length - 3) == ".js") {
        result = "<script src='" + this.getFullAssetUrl(el) + "'></script>" + "\n";
      }
      return result;
    }).filter(el => {
      return el != "";
    });
    if (selectedRessourceAssets.length) {
      selectedRessourceAssets.push("\n");
    }
    this.validate.emit(selectedRessourceAssets);
  }
  ngOnInit() {
    this.ressourceSearchOperation = this.ressourceSearchTerm.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(searchString => {
      return this.ressourcesService.getRessourcesBySearch(searchString);
    }));
    this.ressourceSearchOperation.subscribe({
      next: res => {
        this.availableRessources = res.results;
        this.loader.hideLoader();
      },
      error: error => {
        this.loader.hideLoader();
      }
    });
  }
  static {
    this.ɵfac = function RessourcesComponent_Factory(t) {
      return new (t || RessourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ressources_service__WEBPACK_IMPORTED_MODULE_0__.RessourcesService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RessourcesComponent,
      selectors: [["app-ressources"]],
      viewQuery: function RessourcesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.loader = _t.first);
        }
      },
      hostBindings: function RessourcesComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function RessourcesComponent_keyup_HostBindingHandler($event) {
            return ctx.onComponentKeyup($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
        }
      },
      outputs: {
        hidemodal: "hidemodal",
        validate: "validate"
      },
      decls: 20,
      vars: 20,
      consts: [["loader", ""], [1, "ressources-container"], [1, "resources-tabs-mobile", 3, "ngClass"], ["for", "ressources-mobile-tab-browse", 3, "ngClass"], ["type", "radio", "name", "ressources-mobile-tab", "value", "browse", "id", "ressources-mobile-tab-browse", 3, "ngModelChange", "ngModel"], ["for", "ressources-mobile-tab-select", 3, "ngClass", 4, "ngIf"], [1, "ressources-choices-container", 3, "ngClass"], [1, "ressources-query-container"], [1, "ressources-query-parent", 3, "ngStyle"], ["for", "ressources-query-input"], ["type", "text", "id", "ressources-query-input", 1, "form-control", "ressources-query-input", 3, "ngModelChange", "ngModel"], ["class", "ressources-query-version-parent", "style", "margin-right:15px", 4, "ngIf"], ["class", "ressources-choices-parent", 4, "ngIf"], ["class", "ressources-choice-files-container", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], ["class", "ressources-choice-selected-files-container", 3, "ngClass", 4, "ngIf"], ["for", "ressources-mobile-tab-select", 3, "ngClass"], ["type", "radio", "name", "ressources-mobile-tab", "value", "select", "id", "ressources-mobile-tab-select", 3, "ngModelChange", "ngModel"], [1, "ressources-query-version-parent", 2, "margin-right", "15px"], [1, "form-control", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "ressources-choices-parent"], ["class", "ressources-choice", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "ressources-choice", 3, "click", "ngClass"], [1, "ressource-choice-name"], [1, "ressource-choice-version"], [1, "ressource-version-btn"], [1, "ressource-version-number"], [1, "ressource-choice-description"], [1, "ressources-choice-files-container", 3, "ngClass"], [1, "ressources-choice-files-search"], [1, "title", 2, "border-bottom", "none"], ["for", "ressources-choice-files-search-input"], ["type", "text", "id", "ressources-choice-files-search-input", 1, "form-control", "ressources-choice-files-search", 3, "ngModelChange", "ngModel"], [1, "ressources-choice-files-parent"], ["class", "ressources-choice-files", 3, "ngClass", "title", "click", 4, "ngFor", "ngForOf"], [1, "ressources-choice-files", 3, "click", "ngClass", "title"], [1, "ressource-choice-file"], [1, "ressources-choice-selected-files-container", 3, "ngClass"], ["class", "title", 4, "ngIf"], [1, "ressources-choice-selected-file-wrapper-parent"], ["class", "ressources-choice-selected-file-wrapper", 3, "title", "ngClass", 4, "ngFor", "ngForOf"], [1, "title"], [1, "ressources-choice-selected-file-wrapper", 3, "title", "ngClass"], ["draggable", "true", 1, "ressources-choice-selected-file", 3, "drop", "dragover", "dragstart", "dragenter", "dragleave", "ngClass"], [1, "btn-remove-selected-ressource-wrapper"], [1, "btn", "btn-remove-selected-ressource", 3, "click"]],
      template: function RessourcesComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Browse");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RessourcesComponent_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.ressoucesMobileTab, $event) || (ctx.ressoucesMobileTab = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RessourcesComponent_label_5_Template, 3, 4, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Search for libraries: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RessourcesComponent_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onRessourcesQueryStringChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function RessourcesComponent_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.ressourcesQueryString, $event) || (ctx.ressourcesQueryString = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RessourcesComponent_div_12_Template, 5, 2, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-loader", null, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RessourcesComponent_div_15_Template, 2, 1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "hr");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, RessourcesComponent_div_17_Template, 10, 8, "div", 13)(18, RessourcesComponent_hr_18_Template, 1, 0, "hr", 14)(19, RessourcesComponent_div_19_Template, 4, 5, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](12, _c1, ctx.ressoucesMobileTab == "browse", ctx.ressoucesMobileTab == "select"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c2, ctx.ressoucesMobileTab == "browse"));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.ressoucesMobileTab);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentRessourceVersion && ctx.currentRessourceAssetsByVersion);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c3, ctx.selectedRessourceAssets.length > 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.ressourcesQueryString);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentRessourceChoice.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.availableRessources.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentRessourceVersion && ctx.currentRessourceAssetsByVersion.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedRessourceAssets.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedRessourceAssets.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent],
      styles: [".ressources-container[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n\n.ressources-container[_ngcontent-%COMP%]    > hr[_ngcontent-%COMP%]{\n  width: 100%;\n  margin: 0px auto;\n}\n\n.ressources-query-container[_ngcontent-%COMP%]{\n  width:100%;\n  position: relative;\n  display:flex;\n  align-items:center;\n  padding: 3px;\n}\n\n.ressources-choices-parent[_ngcontent-%COMP%]{\n  flex-grow: 1;\n  overflow: auto;\n}\n\n.ressources-query-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n  font-size:14px;\n}\n\n.ressources-choices-container[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 36%;\n  min-height: 36%;\n  margin: 4px auto 0 auto;\n  border-radius: 2px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.ressources-choices-container.is-reduced[_ngcontent-%COMP%]{\n  height: 32%;\n  min-height: 32%;\n}\n\n.ressources-choice[_ngcontent-%COMP%] {\n  padding: 4px 0 4px 5px;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor:pointer;\n}\n\n.ressources-choice[_ngcontent-%COMP%]:first-child    ~ .ressources-choice[_ngcontent-%COMP%]{\n  border-top:1px solid #bbb;\n}\n\n.ressources-choice[_ngcontent-%COMP%]:last-child{\n  border-bottom:1px solid #bbb;\n}\n\n.ressources-choice[_ngcontent-%COMP%]   .ressource-choice-name[_ngcontent-%COMP%], .ressources-choice[_ngcontent-%COMP%]   .ressource-choice-version[_ngcontent-%COMP%]{\n  margin-bottom:4px;\n}\n\n.ressources-choice[_ngcontent-%COMP%]   .ressource-choice-version[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.ressources-choice[_ngcontent-%COMP%]   .ressource-choice-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.ressource-choice-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n}\n\n.ressources-choice-files-container[_ngcontent-%COMP%]{\n  overflow:hidden;\n  width:100%;\n  margin: auto;\n  min-height: 31%;\n  height: 31%;\n  display: flex;\n  flex-direction: column;\n}\n\n.ressources-choice-files-parent[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow: auto;\n}\n\n.ressources-choice-files[_ngcontent-%COMP%] {\n  padding: 7px 5px;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor:pointer;\n  font-size: 14px;\n}\n\n.ressources-choice-files-container.is-stretched[_ngcontent-%COMP%]{\n  min-height: auto;\n  flex-grow: 1;\n  height: auto;\n}\n\n\n.ressources-choice-selected-files-container[_ngcontent-%COMP%]{\n  margin: auto;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.ressources-choice-selected-files-container.is-stretched[_ngcontent-%COMP%]{\n  flex-grow: 1;\n}\n\n.ressources-choice-selected-file-wrapper-parent[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow: auto;\n}\n\n.ressources-choice-files[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  pointer-events: none;\n  word-break: break-word;\n}\n\n.ressources-choice-files-search[_ngcontent-%COMP%]{\n  margin: 1px auto 1px auto;\n  text-align: center;\n  width: 100%;\n}\n\n.ressources-choice-files-search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 3px;\n}\n\n.ressources-choice-files-search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  margin-right: 3px;\n  font-size: 14px;\n}\n\n.ressources-choice-selected-file[_ngcontent-%COMP%] {\n  padding: 5px;\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: grab;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-grow: 1;\n  font-size:14px\n}\n\n.ressources-choice-selected-file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  pointer-events: none;\n  word-break: break-word;\n}\n\ninput[type][_ngcontent-%COMP%]{\n  text-align:left;\n}\n\n.ressources-choice-selected-file-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 2px 0;\n}\n\n.btn-remove-selected-ressource-wrapper[_ngcontent-%COMP%]{\n  padding: 4px 0;\n  display: flex;\n  align-items: center;\n}\n\n.resources-tabs-mobile[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin-bottom: 4px;\n}\n\n.resources-tabs-mobile[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding:5px;\n  cursor: pointer;\n  border-bottom:none;\n  min-width: 70px;\n  text-align: center;\n}\n\n.resources-tabs-mobile[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position:absolute;\n  opacity:0;\n  width:100%;\n  height:100%;\n}\n\n.title[_ngcontent-%COMP%]{\n  text-align: center;\n  margin:1px 0px;\n}\n\n.ressources-choice-files-container.loading[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n@media (min-height:701px) and (min-width:768px){\n  .resources-tabs-mobile[_ngcontent-%COMP%]{\n      display:none;\n  }\n}\n\n@media (max-height:700px),(max-width:767px){\n  .resources-tabs-mobile[_ngcontent-%COMP%]    ~ hr[_ngcontent-%COMP%]{\n      display:none;\n  }\n  \n  .resources-tabs-mobile.browse-mode[_ngcontent-%COMP%]    ~ .ressources-choice-files-search[_ngcontent-%COMP%], .resources-tabs-mobile.browse-mode[_ngcontent-%COMP%]    ~ .ressources-choice-files-container[_ngcontent-%COMP%], .resources-tabs-mobile.browse-mode[_ngcontent-%COMP%]    ~ .ressources-choice-selected-files-container[_ngcontent-%COMP%], .resources-tabs-mobile.browse-mode[_ngcontent-%COMP%]    ~ h3[_ngcontent-%COMP%]{\n      display:none\n  }\n  .resources-tabs-mobile.browse-mode[_ngcontent-%COMP%]    ~ .ressources-choices-container[_ngcontent-%COMP%]{\n      height: 100%;\n  }\n  \n  .resources-tabs-mobile.select-mode[_ngcontent-%COMP%]    ~ .ressources-choices-container[_ngcontent-%COMP%], .resources-tabs-mobile.select-mode[_ngcontent-%COMP%]    ~ .ressources-query-container[_ngcontent-%COMP%]{\n      display:none;\n  }\n\n  .ressources-choice-files-container[class][_ngcontent-%COMP%] {\n    height: 50%;\n    min-height: auto;\n  }\n\n  .ressources-choice-selected-files-container[_ngcontent-%COMP%] {\n    height: 50%;\n    min-height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzc291cmNlcy9yZXNzb3VyY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO01BQ0ksWUFBWTtFQUNoQjtBQUNGOztBQUVBO0VBQ0U7TUFDSSxZQUFZO0VBQ2hCOztFQUVBOzs7O01BSUk7RUFDSjtFQUNBO01BQ0ksWUFBWTtFQUNoQjs7RUFFQTs7TUFFSSxZQUFZO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNzb3VyY2VzLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmVzc291cmNlcy1jb250YWluZXIgPiBocntcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5yZXNzb3VyY2VzLXF1ZXJ5LWNvbnRhaW5lcntcbiAgd2lkdGg6MTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2VzLXBhcmVudHtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnJlc3NvdXJjZXMtcXVlcnktY29udGFpbmVyIGxhYmVse1xuICBmb250LXNpemU6MTRweDtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlcy1jb250YWluZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2JTtcbiAgbWluLWhlaWdodDogMzYlO1xuICBtYXJnaW46IDRweCBhdXRvIDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2VzLWNvbnRhaW5lci5pcy1yZWR1Y2Vke1xuICBoZWlnaHQ6IDMyJTtcbiAgbWluLWhlaWdodDogMzIlO1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2Uge1xuICBwYWRkaW5nOiA0cHggMCA0cHggNXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZTpmaXJzdC1jaGlsZCB+IC5yZXNzb3VyY2VzLWNob2ljZXtcbiAgYm9yZGVyLXRvcDoxcHggc29saWQgI2JiYjtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlOmxhc3QtY2hpbGR7XG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNiYmI7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZSAgLnJlc3NvdXJjZS1jaG9pY2UtbmFtZSxcbi5yZXNzb3VyY2VzLWNob2ljZSAgLnJlc3NvdXJjZS1jaG9pY2UtdmVyc2lvbntcbiAgbWFyZ2luLWJvdHRvbTo0cHg7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZSAgLnJlc3NvdXJjZS1jaG9pY2UtdmVyc2lvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlICAucmVzc291cmNlLWNob2ljZS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJlc3NvdXJjZS1jaG9pY2UtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlLWZpbGVzLWNvbnRhaW5lcntcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICB3aWR0aDoxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDMxJTtcbiAgaGVpZ2h0OiAzMSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZS1maWxlcy1wYXJlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2UtZmlsZXMge1xuICBwYWRkaW5nOiA3cHggNXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlLWZpbGVzLWNvbnRhaW5lci5pcy1zdHJldGNoZWR7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5cbi5yZXNzb3VyY2VzLWNob2ljZS1zZWxlY3RlZC1maWxlcy1jb250YWluZXJ7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZS1zZWxlY3RlZC1maWxlcy1jb250YWluZXIuaXMtc3RyZXRjaGVke1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZS1zZWxlY3RlZC1maWxlLXdyYXBwZXItcGFyZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlLWZpbGVzIHNwYW57XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2UtZmlsZXMtc2VhcmNoe1xuICBtYXJnaW46IDFweCBhdXRvIDFweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2UtZmlsZXMtc2VhcmNoID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2UtZmlsZXMtc2VhcmNoID4gZGl2ID4gbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2Utc2VsZWN0ZWQtZmlsZSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogZ3JhYjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtc2l6ZToxNHB4XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZS1zZWxlY3RlZC1maWxlIHNwYW57XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG5pbnB1dFt0eXBlXXtcbiAgdGV4dC1hbGlnbjpsZWZ0O1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2Utc2VsZWN0ZWQtZmlsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAycHggMDtcbn1cblxuLmJ0bi1yZW1vdmUtc2VsZWN0ZWQtcmVzc291cmNlLXdyYXBwZXJ7XG4gIHBhZGRpbmc6IDRweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmVzb3VyY2VzLXRhYnMtbW9iaWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnJlc291cmNlcy10YWJzLW1vYmlsZSBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6NXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206bm9uZTtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXNvdXJjZXMtdGFicy1tb2JpbGUgaW5wdXQge1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgb3BhY2l0eTowO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbn1cblxuLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjoxcHggMHB4O1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2UtZmlsZXMtY29udGFpbmVyLmxvYWRpbmcge1xuICBvcGFjaXR5OiAwLjM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6NzAxcHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcbiAgLnJlc291cmNlcy10YWJzLW1vYmlsZXtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC1oZWlnaHQ6NzAwcHgpLChtYXgtd2lkdGg6NzY3cHgpe1xuICAucmVzb3VyY2VzLXRhYnMtbW9iaWxlIH4gaHJ7XG4gICAgICBkaXNwbGF5Om5vbmU7XG4gIH1cbiAgXG4gIC5yZXNvdXJjZXMtdGFicy1tb2JpbGUuYnJvd3NlLW1vZGUgfiAucmVzc291cmNlcy1jaG9pY2UtZmlsZXMtc2VhcmNoLFxuICAucmVzb3VyY2VzLXRhYnMtbW9iaWxlLmJyb3dzZS1tb2RlIH4gLnJlc3NvdXJjZXMtY2hvaWNlLWZpbGVzLWNvbnRhaW5lcixcbiAgLnJlc291cmNlcy10YWJzLW1vYmlsZS5icm93c2UtbW9kZSB+IC5yZXNzb3VyY2VzLWNob2ljZS1zZWxlY3RlZC1maWxlcy1jb250YWluZXIsXG4gIC5yZXNvdXJjZXMtdGFicy1tb2JpbGUuYnJvd3NlLW1vZGUgfiBoM3tcbiAgICAgIGRpc3BsYXk6bm9uZVxuICB9XG4gIC5yZXNvdXJjZXMtdGFicy1tb2JpbGUuYnJvd3NlLW1vZGUgfiAucmVzc291cmNlcy1jaG9pY2VzLWNvbnRhaW5lcntcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLnJlc291cmNlcy10YWJzLW1vYmlsZS5zZWxlY3QtbW9kZSB+IC5yZXNzb3VyY2VzLWNob2ljZXMtY29udGFpbmVyLFxuICAucmVzb3VyY2VzLXRhYnMtbW9iaWxlLnNlbGVjdC1tb2RlIH4gLnJlc3NvdXJjZXMtcXVlcnktY29udGFpbmVye1xuICAgICAgZGlzcGxheTpub25lO1xuICB9XG5cbiAgLnJlc3NvdXJjZXMtY2hvaWNlLWZpbGVzLWNvbnRhaW5lcltjbGFzc10ge1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cblxuICAucmVzc291cmNlcy1jaG9pY2Utc2VsZWN0ZWQtZmlsZXMtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6175:
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafePipe: () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);


class SafePipe {
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
  }
  transform(value, type) {
    if (type == "url") {
      return this._sanitizer.bypassSecurityTrustResourceUrl(value);
    }
    return "";
  }
  static {
    this.ɵfac = function SafePipe_Factory(t) {
      return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safe",
      type: SafePipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  url: "http://localhost/myfiddlepreview/index.html",
  appName: "",
  homeUrl: "http://localhost:4200",
  fiddleIframeOrigin: "http://localhost"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map