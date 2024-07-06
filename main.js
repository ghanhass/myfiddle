"use strict";
(self["webpackChunkfiddle"] = self["webpackChunkfiddle"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: ":id",
  component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
}, {
  path: "**",
  component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRKQUE0SiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "loadConfigs": () => (/* binding */ loadConfigs)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ 2284);
/* harmony import */ var _html_part_html_part_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html-part/html-part.component */ 8374);
/* harmony import */ var _css_part_css_part_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css-part/css-part.component */ 134);
/* harmony import */ var _js_part_js_part_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js-part/js-part.component */ 8530);
/* harmony import */ var _iframe_part_iframe_part_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iframe-part/iframe-part.component */ 8950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader/loader.component */ 5242);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/modal.component */ 9399);
/* harmony import */ var _ressources_ressources_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ressources/ressources.component */ 1833);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-split */ 4462);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main.service */ 9118);
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./safe.pipe */ 3289);
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-ace-editor */ 6901);
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! brace */ 2226);
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var brace_mode_text__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! brace/mode/text */ 8727);
/* harmony import */ var brace_mode_text__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(brace_mode_text__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var brace_mode_html__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! brace/mode/html */ 6307);
/* harmony import */ var brace_mode_html__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(brace_mode_html__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var brace_mode_javascript__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! brace/mode/javascript */ 5150);
/* harmony import */ var brace_mode_javascript__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(brace_mode_javascript__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var brace_mode_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! brace/mode/css */ 5562);
/* harmony import */ var brace_mode_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(brace_mode_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var brace_theme_github__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! brace/theme/github */ 4187);
/* harmony import */ var brace_theme_github__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(brace_theme_github__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var brace_theme_clouds__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! brace/theme/clouds */ 3302);
/* harmony import */ var brace_theme_clouds__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(brace_theme_clouds__WEBPACK_IMPORTED_MODULE_19__);





























//import { AceModule } from 'ngx-ace-wrapper';
function loadConfigs(mainService) {
  return () => {
    return mainService.initConfig();
  };
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_20__.APP_INITIALIZER,
      useFactory: loadConfigs,
      deps: [_main_service__WEBPACK_IMPORTED_MODULE_10__.MainService],
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_25__.ToastrModule.forRoot(), angular_split__WEBPACK_IMPORTED_MODULE_26__.AngularSplitModule, ng2_ace_editor__WEBPACK_IMPORTED_MODULE_12__.AceEditorModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent, _html_part_html_part_component__WEBPACK_IMPORTED_MODULE_3__.HtmlPartComponent, _css_part_css_part_component__WEBPACK_IMPORTED_MODULE_4__.CssPartComponent, _js_part_js_part_component__WEBPACK_IMPORTED_MODULE_5__.JsPartComponent, _iframe_part_iframe_part_component__WEBPACK_IMPORTED_MODULE_6__.IframePartComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_7__.LoaderComponent, _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__.ModalComponent, _ressources_ressources_component__WEBPACK_IMPORTED_MODULE_9__.RessourcesComponent, _safe_pipe__WEBPACK_IMPORTED_MODULE_11__.SafePipe],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_25__.ToastrModule, angular_split__WEBPACK_IMPORTED_MODULE_26__.AngularSplitModule, ng2_ace_editor__WEBPACK_IMPORTED_MODULE_12__.AceEditorModule]
  });
})();

/***/ }),

/***/ 134:
/*!************************************************!*\
  !*** ./src/app/css-part/css-part.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CssPartComponent": () => (/* binding */ CssPartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.service */ 9118);
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-ace-editor */ 6901);




const _c0 = ["aceeditor"];
class CssPartComponent {
  constructor(mainService) {
    this.mainService = mainService;
    this.code = "";
    this.theme = "cloud9_day";
    this.isFullScreenMode = false;
    this.toggleFullScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.runcodemsg = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.savecodemsg = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.canRetrievePositionsAfterLoad = false;
    this.options = {
      language: "css",
      //contextmenu: false,
      minimap: {
        enabled: false
      },
      lineDecorationsWidth: "1px",
      lineNumbersMinChars: 1,
      wordWrap: "on",
      baseUrl: "/",
      theme: 'vs-light'
    };
  }
  ngOnInit() {
    this.canRetrievePositionsAfterLoad = true;
    this.code = this.mainService.cssCode;
    //console.log("CssPartComponent ngOnInit");
  }

  ngAfterViewInit() {
    this.aceEditor = this.aceeditor.getEditor();
    this.aceEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      wrap: true
    });
    this.aceEditor.setFontSize(14);
    this.aceEditor.on("focus", ev => {
      this.mainService.htmlCodePositionData.focus = false;
      this.mainService.cssCodePositionData.focus = true;
      this.mainService.jsCodePositionData.focus = false;
    });
    let self = this;
    this.aceEditor.addEventListener("keydown", event => {
      let evDate = new Date();
      if ((window.navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey) && (event.code == "Enter" || event.code == "NumpadEnter")) {
        this.mainService.canSaveCodeEditorsPostition = false;
        event.preventDefault();
        event.stopPropagation();
        //////console.log("self.runcodemsg.emit()");
        self.runcodemsg.emit();
      } else if ((window.navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey) && event.code == "KeyS") {
        this.mainService.canSaveCodeEditorsPostition = false;
        event.preventDefault();
        event.stopPropagation();
        if (self.mainService.codeSavingDate === undefined || evDate.getTime() - self.mainService.codeSavingDate.getTime() >= 1500) {
          //////console.log("self.savecodemsg.emit()");
          self.mainService.codeSavingDate = evDate;
          self.savecodemsg.emit();
        }
      }
    });
  }
  onCodeChanged(value) {
    ////console.log('CODE', value);
    let self = this;
    this.mainService.cssCode = value;
    this.mainService.setCheckBeforeUnloadListener();
    if (this.canRetrievePositionsAfterLoad) {
      setTimeout(() => {
        //console.log("called retrieveCodePartsCursors() from CssPartComponent !");
        self.mainService.retrieveCodePartsCursors(self);
        self.canRetrievePositionsAfterLoad = false;
      }, 1);
    }
  }
  static #_ = this.ɵfac = function CssPartComponent_Factory(t) {
    return new (t || CssPartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CssPartComponent,
    selectors: [["app-css-part"]],
    viewQuery: function CssPartComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.aceeditor = _t.first);
      }
    },
    outputs: {
      toggleFullScreen: "toggleFullScreen",
      runcodemsg: "runcodemsg",
      savecodemsg: "savecodemsg"
    },
    decls: 2,
    vars: 2,
    consts: [["mode", "css", 2, "height", "100%", "width", "100%", 3, "text", "theme", "textChange", "textChanged"], ["aceeditor", ""]],
    template: function CssPartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ace-editor", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("textChange", function CssPartComponent_Template_ace_editor_textChange_0_listener($event) {
          return ctx.code = $event;
        })("textChanged", function CssPartComponent_Template_ace_editor_textChanged_0_listener($event) {
          return ctx.onCodeChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", ctx.code)("theme", ctx.theme);
      }
    },
    dependencies: [ng2_ace_editor__WEBPACK_IMPORTED_MODULE_1__.AceEditorComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjc3MtcGFydC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3NzLXBhcnQvY3NzLXBhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 8374:
/*!**************************************************!*\
  !*** ./src/app/html-part/html-part.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlPartComponent": () => (/* binding */ HtmlPartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.service */ 9118);
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-ace-editor */ 6901);




const _c0 = ["aceeditor"];
class HtmlPartComponent {
  constructor(mainService) {
    this.mainService = mainService;
    this.code = "";
    this.theme = "cloud9_day";
    this.isFullScreenMode = false;
    this.toggleFullScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.runcodemsg = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.savecodemsg = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.canRetrievePositionsAfterLoad = false;
    this.options = {
      language: "html",
      //contextmenu: false,
      minimap: {
        enabled: false
      },
      lineDecorationsWidth: "1px",
      lineNumbersMinChars: 1,
      wordWrap: "on",
      baseUrl: "/",
      contextmenu: false
    };
  }
  ngOnInit() {
    this.code = this.mainService.htmlCode;
    console.log("HtmlPartComponent ngOnInit");
  }
  ngAfterViewInit() {
    console.log("HtmlPartComponent ngAfterViewInit");
    this.aceEditor = this.aceeditor.getEditor();
    this.aceEditor.on("changeSession", e => {
      console.log("html aceEditor changeSession ev = ", e);
    });
    this.aceEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      wrap: true
    });
    this.aceEditor.setFontSize(14);
    this.aceEditor.on("focus", ev => {
      this.mainService.htmlCodePositionData.focus = true;
      this.mainService.cssCodePositionData.focus = false;
      this.mainService.jsCodePositionData.focus = false;
    });
    let self = this;
    this.aceEditor.addEventListener("keydown", event => {
      let evDate = new Date();
      if ((window.navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey) && (event.code == "Enter" || event.code == "NumpadEnter")) {
        this.mainService.canSaveCodeEditorsPostition = false;
        event.preventDefault();
        event.stopPropagation();
        //////console.log("self.runcodemsg.emit()");
        self.runcodemsg.emit();
      } else if ((window.navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey) && event.code == "KeyS") {
        this.mainService.canSaveCodeEditorsPostition = false;
        event.preventDefault();
        event.stopPropagation();
        if (self.mainService.codeSavingDate === undefined || evDate.getTime() - self.mainService.codeSavingDate.getTime() >= 1500) {
          //////console.log("self.savecodemsg.emit()");
          self.mainService.codeSavingDate = evDate;
          self.savecodemsg.emit();
        }
      }
    });
    //this.mainService.resumeFiddleTheme(this);
  }

  onCodeChanged(value) {
    let self = this;
    console.log('HTML onCodeChanged CODE', value);
    this.mainService.htmlCode = value;
    this.mainService.setCheckBeforeUnloadListener();
    console.log("this.canRetrievePositionsAfterLoad = ", this.canRetrievePositionsAfterLoad);
    if (this.canRetrievePositionsAfterLoad) {
      self.canRetrievePositionsAfterLoad = false;
      setTimeout(() => {
        console.log("called retrieveCodePartsCursors() from HtmlPartComponent !");
        self.mainService.retrieveCodePartsCursors(undefined, self);
      }, 1);
    }
  }
  static #_ = this.ɵfac = function HtmlPartComponent_Factory(t) {
    return new (t || HtmlPartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HtmlPartComponent,
    selectors: [["app-html-part"]],
    viewQuery: function HtmlPartComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.aceeditor = _t.first);
      }
    },
    outputs: {
      toggleFullScreen: "toggleFullScreen",
      runcodemsg: "runcodemsg",
      savecodemsg: "savecodemsg"
    },
    decls: 3,
    vars: 2,
    consts: [[1, "custom-layer-marker"], ["mode", "html", 2, "height", "100%", "width", "100%", 3, "text", "theme", "textChange", "textChanged"], ["aceeditor", ""]],
    template: function HtmlPartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ace-editor", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("textChange", function HtmlPartComponent_Template_ace_editor_textChange_1_listener($event) {
          return ctx.code = $event;
        })("textChanged", function HtmlPartComponent_Template_ace_editor_textChanged_1_listener($event) {
          return ctx.onCodeChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", ctx.code)("theme", ctx.theme);
      }
    },
    dependencies: [ng2_ace_editor__WEBPACK_IMPORTED_MODULE_1__.AceEditorComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJodG1sLXBhcnQuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaHRtbC1wYXJ0L2h0bWwtcGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8950:
/*!******************************************************!*\
  !*** ./src/app/iframe-part/iframe-part.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IframePartComponent": () => (/* binding */ IframePartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ 9118);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../safe.pipe */ 3289);







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
  saveFiddle() {
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
      is_mobile_mode: this.mainService.isMobileMode
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
  static #_ = this.ɵfac = function IframePartComponent_Factory(t) {
    return new (t || IframePartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_1__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
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
    consts: [["type", "text", 1, "copy-input"], ["copyInput", ""], [3, "src", "load"], ["iframe", ""]],
    template: function IframePartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "iframe", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("load", function IframePartComponent_Template_iframe_load_2_listener() {
          return ctx.onFormLoad();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "safe");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 1, ctx.getIframeSrc(), "url"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeResourceUrl"]);
      }
    },
    dependencies: [_safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe],
    styles: ["iframe[_ngcontent-%COMP%]{\n    height:100%;\n    width:100%;\n    border:none;\n    -webkit-user-select: none;\n            user-select: none;\n}\n\n#save-status[_ngcontent-%COMP%]{\n    display:none !important;\n}\n\n.copy-input[_ngcontent-%COMP%]{\n    position:fixed;\n    left:99999px;\n    top:99999px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlmcmFtZS1wYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoiaWZyYW1lLXBhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlmcmFtZXtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJvcmRlcjpub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4jc2F2ZS1zdGF0dXN7XG4gICAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jb3B5LWlucHV0e1xuICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgIGxlZnQ6OTk5OTlweDtcbiAgICB0b3A6OTk5OTlweDtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaWZyYW1lLXBhcnQvaWZyYW1lLXBhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLHlCQUFpQjtZQUFqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBLG9yQkFBb3JCIiwic291cmNlc0NvbnRlbnQiOlsiaWZyYW1le1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbiNzYXZlLXN0YXR1c3tcbiAgICBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcbn1cblxuLmNvcHktaW5wdXR7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgbGVmdDo5OTk5OXB4O1xuICAgIHRvcDo5OTk5OXB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8530:
/*!**********************************************!*\
  !*** ./src/app/js-part/js-part.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsPartComponent": () => (/* binding */ JsPartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.service */ 9118);
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-ace-editor */ 6901);




const _c0 = ["aceeditor"];
class JsPartComponent {
  constructor(mainService) {
    this.mainService = mainService;
    this.code = "";
    this.theme = "cloud9_day";
    this.isFullScreenMode = false;
    this.toggleFullScreen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.runcodemsg = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.savecodemsg = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.canRetrievePositionsAfterLoad = false;
    this.options = {
      language: "javascript",
      //contextmenu: false,
      minimap: {
        enabled: false
      },
      lineDecorationsWidth: "1px",
      lineNumbersMinChars: 1,
      wordWrap: "on",
      baseUrl: "/"
    };
  }
  ngOnInit() {
    this.canRetrievePositionsAfterLoad = true;
    this.code = this.mainService.jsCode;
    ////console.log("JsPartComponent ngOnInit");
  }

  ngAfterViewInit() {
    console.log("JsPartComponent ngAfterViewInit");
    this.aceEditor = this.aceeditor.getEditor();
    this.aceEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      wrap: true
    });
    this.aceEditor.setFontSize(14);
    this.aceEditor.on("focus", ev => {
      this.mainService.htmlCodePositionData.focus = false;
      this.mainService.cssCodePositionData.focus = false;
      this.mainService.jsCodePositionData.focus = true;
    });
    let self = this;
    this.aceEditor.addEventListener("keydown", event => {
      let evDate = new Date();
      if ((window.navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey) && (event.code == "Enter" || event.code == "NumpadEnter")) {
        this.mainService.canSaveCodeEditorsPostition = false;
        event.preventDefault();
        event.stopPropagation();
        //////console.log("self.runcodemsg.emit()");
        self.runcodemsg.emit();
      } else if ((window.navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey) && event.code == "KeyS") {
        this.mainService.canSaveCodeEditorsPostition = false;
        event.preventDefault();
        event.stopPropagation();
        if (self.mainService.codeSavingDate === undefined || evDate.getTime() - self.mainService.codeSavingDate.getTime() >= 1500) {
          //////console.log("self.savecodemsg.emit()");
          self.mainService.codeSavingDate = evDate;
          self.savecodemsg.emit();
        }
      }
    });
    //this.mainService.resumeFiddleTheme(this);
  }

  onCodeChanged(value) {
    //////console.log('CODE', value);
    let self = this;
    this.mainService.jsCode = value;
    this.mainService.setCheckBeforeUnloadListener();
    if (this.canRetrievePositionsAfterLoad) {
      setTimeout(() => {
        //console.log("called retrieveCodePartsCursors() from HtmlPartComponent !");
        self.mainService.retrieveCodePartsCursors(undefined, undefined, self);
        self.canRetrievePositionsAfterLoad = false;
      }, 1);
    }
  }
  static #_ = this.ɵfac = function JsPartComponent_Factory(t) {
    return new (t || JsPartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_0__.MainService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: JsPartComponent,
    selectors: [["app-js-part"]],
    viewQuery: function JsPartComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.aceeditor = _t.first);
      }
    },
    outputs: {
      toggleFullScreen: "toggleFullScreen",
      runcodemsg: "runcodemsg",
      savecodemsg: "savecodemsg"
    },
    decls: 2,
    vars: 2,
    consts: [["mode", "javascript", 2, "height", "100%", "width", "100%", 3, "text", "theme", "textChange", "textChanged"], ["aceeditor", ""]],
    template: function JsPartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ace-editor", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("textChange", function JsPartComponent_Template_ace_editor_textChange_0_listener($event) {
          return ctx.code = $event;
        })("textChanged", function JsPartComponent_Template_ace_editor_textChanged_0_listener($event) {
          return ctx.onCodeChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", ctx.code)("theme", ctx.theme);
      }
    },
    dependencies: [ng2_ace_editor__WEBPACK_IMPORTED_MODULE_1__.AceEditorComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqcy1wYXJ0LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvanMtcGFydC9qcy1wYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5242:
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0) {
  return {
    "global": a0
  };
};
const _c1 = function (a0) {
  return {
    "border-width": a0
  };
};
function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3)(3, "div")(4, "div", 3)(5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.global));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r0.thickness ? ctx_r0.thickness + "px" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r0.thickness ? ctx_r0.thickness + "px" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, ctx_r0.thickness ? ctx_r0.thickness + "px" : ""));
  }
}
class LoaderComponent {
  showLoader() {
    this.show = true;
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
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function LoaderComponent_Factory(t) {
    return new (t || LoaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoaderComponent,
    selectors: [["app-loader"]],
    inputs: {
      global: "global",
      thickness: "thickness"
    },
    decls: 1,
    vars: 1,
    consts: [["class", "wrapper", 3, "ngClass", 4, "ngIf"], [1, "wrapper", 3, "ngClass"], [1, "container"], [3, "ngStyle"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 6, 12, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaderShow());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
    styles: [".wrapper[_ngcontent-%COMP%]{\n  position:relative;\n  height:30px;\n  width:30px;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\n    position:absolute;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    height:30px;\n    width:30px;\n}\n\n.wrapper.global[_ngcontent-%COMP%]{\n  height: 100%;\n  width: 100%;\n  background: #FFFFFF;\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n}\n\n.wrapper.global[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\n  position: fixed;\n  top:50%;\n  left:50%;\n  transform: translate(-50%,-50%);\n  width: 100px;\n  height: 100px;\n}\n\n\n.container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1){\n    border-top:3px solid #62ad4a;\n    border-left:3px solid #62ad4a;\n    border-top-left-radius: 100%;\n}\n\n.container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3){\n    border-bottom:3px solid #62ad4a;\n    border-left:3px solid #62ad4a;\n    border-bottom-left-radius: 100%;\n}\n\n.container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4){\n    border-bottom:3px solid #62ad4a;\n    border-right:3px solid #62ad4a;\n    border-bottom-right-radius: 100%;\n}\n\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\n    animation-name:_ngcontent-%COMP%_rotate-loader;\n    animation-timing-function: linear;\n    animation-iteration-count: infinite;\n    animation-duration: 0.5s;\n}\n\n.wrapper.wrapper.global[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\n  animation-name:_ngcontent-%COMP%_rotate-loader-global;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-duration: 1.2s;\n}\n\n@keyframes _ngcontent-%COMP%_rotate-loader{\n  0%{\n      transform:rotate(0deg)\n  }\n  50%{\n      transform:rotate(180deg)\n  }\n\n  100%{\n      transform:rotate(360deg)\n  }\n}\n\n@keyframes _ngcontent-%COMP%_rotate-loader-global{\n  0%{\n      transform:translate(-50%,-50%) rotate(0deg)\n  }\n  50%{\n      transform:translate(-50%,-50%) rotate(180deg)\n  }\n\n  100%{\n      transform:translate(-50%,-50%) rotate(360deg)\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2IsTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osYUFBYTtBQUNmOzs7QUFHQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLHdCQUF3QjtBQUM1Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsbUNBQW1DO0VBQ25DLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFO01BQ0k7RUFDSjtFQUNBO01BQ0k7RUFDSjs7RUFFQTtNQUNJO0VBQ0o7QUFDRjs7QUFFQTtFQUNFO01BQ0k7RUFDSjtFQUNBO01BQ0k7RUFDSjs7RUFFQTtNQUNJO0VBQ0o7QUFDRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgaGVpZ2h0OjMwcHg7XG4gIHdpZHRoOjMwcHg7XG59XG5cbi53cmFwcGVyIC5jb250YWluZXJ7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICAgIGhlaWdodDozMHB4O1xuICAgIHdpZHRoOjMwcHg7XG59XG5cbi53cmFwcGVyLmdsb2JhbHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi53cmFwcGVyLmdsb2JhbCAuY29udGFpbmVye1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDo1MCU7XG4gIGxlZnQ6NTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cblxuLmNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSl7XG4gICAgYm9yZGVyLXRvcDozcHggc29saWQgIzYyYWQ0YTtcbiAgICBib3JkZXItbGVmdDozcHggc29saWQgIzYyYWQ0YTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMDAlO1xufVxuXG4uY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgzKXtcbiAgICBib3JkZXItYm90dG9tOjNweCBzb2xpZCAjNjJhZDRhO1xuICAgIGJvcmRlci1sZWZ0OjNweCBzb2xpZCAjNjJhZDRhO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwMCU7XG59XG5cbi5jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDQpe1xuICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkICM2MmFkNGE7XG4gICAgYm9yZGVyLXJpZ2h0OjNweCBzb2xpZCAjNjJhZDRhO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMDAlO1xufVxuXG4ud3JhcHBlciAuY29udGFpbmVye1xuICAgIGFuaW1hdGlvbi1uYW1lOnJvdGF0ZS1sb2FkZXI7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbn1cblxuLndyYXBwZXIud3JhcHBlci5nbG9iYWwgLmNvbnRhaW5lcntcbiAgYW5pbWF0aW9uLW5hbWU6cm90YXRlLWxvYWRlci1nbG9iYWw7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4ycztcbn1cblxuQGtleWZyYW1lcyByb3RhdGUtbG9hZGVye1xuICAwJXtcbiAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMGRlZylcbiAgfVxuICA1MCV7XG4gICAgICB0cmFuc2Zvcm06cm90YXRlKDE4MGRlZylcbiAgfVxuXG4gIDEwMCV7XG4gICAgICB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZylcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1sb2FkZXItZ2xvYmFse1xuICAwJXtcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMGRlZylcbiAgfVxuICA1MCV7XG4gICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDE4MGRlZylcbiAgfVxuXG4gIDEwMCV7XG4gICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgcm90YXRlKDM2MGRlZylcbiAgfVxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2IsTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFFQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osYUFBYTtBQUNmOzs7QUFHQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLHdCQUF3QjtBQUM1Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQ0FBaUM7RUFDakMsbUNBQW1DO0VBQ25DLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFO01BQ0k7RUFDSjtFQUNBO01BQ0k7RUFDSjs7RUFFQTtNQUNJO0VBQ0o7QUFDRjs7QUFFQTtFQUNFO01BQ0k7RUFDSjtFQUNBO01BQ0k7RUFDSjs7RUFFQTtNQUNJO0VBQ0o7QUFDRjtBQUNBLG8zR0FBbzNHIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBoZWlnaHQ6MzBweDtcbiAgd2lkdGg6MzBweDtcbn1cblxuLndyYXBwZXIgLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgaGVpZ2h0OjMwcHg7XG4gICAgd2lkdGg6MzBweDtcbn1cblxuLndyYXBwZXIuZ2xvYmFse1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLndyYXBwZXIuZ2xvYmFsIC5jb250YWluZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOjUwJTtcbiAgbGVmdDo1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuXG4uY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKXtcbiAgICBib3JkZXItdG9wOjNweCBzb2xpZCAjNjJhZDRhO1xuICAgIGJvcmRlci1sZWZ0OjNweCBzb2xpZCAjNjJhZDRhO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XG59XG5cbi5jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDMpe1xuICAgIGJvcmRlci1ib3R0b206M3B4IHNvbGlkICM2MmFkNGE7XG4gICAgYm9yZGVyLWxlZnQ6M3B4IHNvbGlkICM2MmFkNGE7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTAwJTtcbn1cblxuLmNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoNCl7XG4gICAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgIzYyYWQ0YTtcbiAgICBib3JkZXItcmlnaHQ6M3B4IHNvbGlkICM2MmFkNGE7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwMCU7XG59XG5cbi53cmFwcGVyIC5jb250YWluZXJ7XG4gICAgYW5pbWF0aW9uLW5hbWU6cm90YXRlLWxvYWRlcjtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xufVxuXG4ud3JhcHBlci53cmFwcGVyLmdsb2JhbCAuY29udGFpbmVye1xuICBhbmltYXRpb24tbmFtZTpyb3RhdGUtbG9hZGVyLWdsb2JhbDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjJzO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1sb2FkZXJ7XG4gIDAle1xuICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKVxuICB9XG4gIDUwJXtcbiAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKVxuICB9XG5cbiAgMTAwJXtcbiAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKVxuICB9XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlLWxvYWRlci1nbG9iYWx7XG4gIDAle1xuICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpIHJvdGF0ZSgwZGVnKVxuICB9XG4gIDUwJXtcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMTgwZGVnKVxuICB9XG5cbiAgMTAwJXtcbiAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKSByb3RhdGUoMzYwZGVnKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9118:
/*!*********************************!*\
  !*** ./src/app/main.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainService": () => (/* binding */ MainService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ace-builds */ 6701);
/* harmony import */ var ace_builds__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ace_builds__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);







let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
headers = headers.set("PRIVATE-TOKEN", window.atob("Z2xwYXQteEVRWHNoaXNheVpHU3pYQVA5S3k="));
headers = headers.set("Content-Type", "application/json");
const gitlabProjectId = "52190204";
const gitlabJsonDbId = "3621546";
class MainService {
  constructor(http) {
    this.http = http;
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        "Content-Type": "application/json"
      }),
      responseType: 'text'
    };
    this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
    this.isFirstTimeFiddle = true;
    this.jsCodeSinceSave = "";
    this.cssCodeSinceSave = "";
    this.htmlCodeSinceSave = "";
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
  registerMonacoCustomTheme(fiddleTheme) {
    let self = this;
    //console.log("A!");
    setTimeout(() => {
      if (window['monaco']) {
        //console.log("fiddleTheme = ", fiddleTheme);
        window['monaco'].editor.defineTheme('myCustomTheme', fiddleTheme.data);
        window['monaco'].editor.setTheme("myCustomTheme");
      }
    }, 1);
  }
  /**
   *
   * @returns boolean: Returns whether the code is changed or not since last save
   */
  isCodeChanged() {
    return this.jsCode !== this.jsCodeSinceSave || this.cssCode !== this.cssCodeSinceSave || this.htmlCode !== this.htmlCodeSinceSave;
  }
  /**
   * Reset code marked since last save to the current code
   */
  resetCodeSinceSave() {
    this.jsCodeSinceSave = this.jsCode;
    this.cssCodeSinceSave = this.cssCode;
    this.htmlCodeSinceSave = this.htmlCode;
  }
  resumeFiddleTheme(htmlPartComp, cssPartComp, jsPartComp) {
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
    this.registerMonacoCustomTheme(this.selectedTheme);
    if (htmlPartComp) {
      htmlPartComp.theme = savedThemeId ? savedThemeId == "vs-default-dark" ? "cloud9_night" : "cloud9_day" : "cloud9_day";
    }
    if (cssPartComp) {
      cssPartComp.theme = savedThemeId ? savedThemeId == "vs-default-dark" ? "cloud9_night" : "cloud9_day" : "cloud9_day";
    }
    if (jsPartComp) {
      jsPartComp.theme = savedThemeId ? savedThemeId == "vs-default-dark" ? "cloud9_night" : "cloud9_day" : "cloud9_day";
    }
  }
  prepareThemeStyleSheet(theme) {
    let str = `.code-part-title {
        background:${theme.data.colors['editor.background']};
        color: ${theme.data.colors['editor.foreground']};
    }
    
    .as-split-outer[class] > .as-split-gutter[class],
    .as-split-gutter-custom,
    #code-parts[id] .as-split-gutter[class]
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
      as-split-area.as-split-area-code-parts{
        border-bottom: 1px solid ${theme.data.colors['editor.foreground']};
      }

      as-split-area.as-split-area-iframe{
        border-top: 1px solid ${theme.data.colors['editor.foreground']};
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
      console.log("called cssPart.aceEditor.focus()");
      let noSelection = this.cssCodePositionData.aceRanges.length == this.cssCodePositionData.aceRanges.filter(el => {
        return el.start.column == el.end.column && el.start.row == el.start.row;
      }).length;
      //cssPart.aceEditor.selection.setRange(this.cssCodePositionData.aceRanges[0]);
      let upMostSelection = this.cssCodePositionData.aceRanges.sort((el1, el2) => {
        return el1.start.row - el2.start.row;
      })[0];
      let upMostRow = upMostSelection.start.row;
      this.cssCodePositionData.aceRanges.forEach(el => {
        cssPart.aceEditor.selection.addRange(new ace_builds__WEBPACK_IMPORTED_MODULE_1__.Range(el.start.row, el.start.column, el.end.row, el.end.column));
      });
      //cssPart.aceEditor.moveCursorTo(upMostSelection.start.row, upMostSelection.start.column);
      if (noSelection) {
        if (this.cssCodePositionData.focus) {
          cssPart.aceEditor.focus();
        }
        cssPart.aceEditor.moveCursorTo(this.cssCodePositionData.row, this.cssCodePositionData.column);
      } else if (blink) {
        document.querySelector("app-css-part .custom-layer-marker").classList.add("show");
        setTimeout(() => {
          document.querySelector("app-css-part .custom-layer-marker").classList.remove("show");
        }, 1500);
      }
      cssPart.aceEditor.scrollToRow(upMostRow);
    }
    if (jsPart) {
      //retrieve js code part focus and cursor position
      console.log("called jsPart.aceEditor.focus()");
      let noSelection = this.jsCodePositionData.aceRanges.length == this.jsCodePositionData.aceRanges.filter(el => {
        return el.start.column == el.end.column && el.start.row == el.start.row;
      }).length;
      //jsPart.aceEditor.selection.setRange(this.jsCodePositionData.aceRanges[0]);
      let upMostSelection = this.jsCodePositionData.aceRanges.sort((el1, el2) => {
        return el1.start.row - el2.start.row;
      })[0];
      let upMostRow = upMostSelection.start.row;
      this.jsCodePositionData.aceRanges.forEach(el => {
        jsPart.aceEditor.selection.addRange(new ace_builds__WEBPACK_IMPORTED_MODULE_1__.Range(el.start.row, el.start.column, el.end.row, el.end.column));
      });
      //jsPart.aceEditor.moveCursorTo(upMostSelection.start.row, upMostSelection.start.column);
      if (noSelection) {
        if (this.jsCodePositionData.focus) {
          jsPart.aceEditor.focus();
        }
        jsPart.aceEditor.moveCursorTo(this.jsCodePositionData.row, this.jsCodePositionData.column);
      } else if (blink) {
        document.querySelector("app-js-part .custom-layer-marker").classList.add("show");
        setTimeout(() => {
          document.querySelector("app-js-part .custom-layer-marker").classList.remove("show");
        }, 1500);
      }
      jsPart.aceEditor.scrollToRow(upMostRow);
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
        htmlPart.aceEditor.selection.addRange(new ace_builds__WEBPACK_IMPORTED_MODULE_1__.Range(el.start.row, el.start.column, el.end.row, el.end.column));
      });
      //htmlPart.aceEditor.moveCursorTo(upMostSelection.start.row, upMostSelection.start.column);
      if (noSelection) {
        console.log("NO SELECTION !");
        if (this.htmlCodePositionData.focus) {
          htmlPart.aceEditor.focus();
        }
        htmlPart.aceEditor.moveCursorTo(this.htmlCodePositionData.row, this.htmlCodePositionData.column);
      } else if (blink) {
        document.querySelector("app-html-part .custom-layer-marker").classList.add("show");
        setTimeout(() => {
          document.querySelector("app-html-part .custom-layer-marker").classList.remove("show");
        }, 1500);
      }
      htmlPart.aceEditor.scrollToRow(upMostRow);
      console.log("htmlCodePositionData = ", this.htmlCodePositionData);
    }
  }
  getFiddle(fiddleId) {
    //console.log("getFiddle fiddleId = ",fiddleId);
    let self = this;
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
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
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(promise);
    } else {
      return this.http.get("http://localhost:3000/gists?id=" + fiddleId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(value => {
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
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
      let timeStamp = new Date().getTime();
      let body = {
        file_name: timeStamp,
        title: timeStamp,
        visibility: "public",
        "content": JSON.stringify(fiddleData),
        "file_path": timeStamp
      };
      let newSnippetRawUrl;
      let body2;
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
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(promise);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(new Promise((resolve, reject) => {
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
  static #_ = this.ɵfac = function MainService_Factory(t) {
    return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: MainService,
    factory: MainService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2284:
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.service */ 9118);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _smartcodelab_ngx_prettify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @smartcodelab/ngx-prettify */ 287);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-split */ 4462);
/* harmony import */ var _html_part_html_part_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../html-part/html-part.component */ 8374);
/* harmony import */ var _css_part_css_part_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css-part/css-part.component */ 134);
/* harmony import */ var _js_part_js_part_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js-part/js-part.component */ 8530);
/* harmony import */ var _iframe_part_iframe_part_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../iframe-part/iframe-part.component */ 8950);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loader/loader.component */ 5242);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal.component */ 9399);
/* harmony import */ var _ressources_ressources_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ressources/ressources.component */ 1833);
















const _c0 = ["splitComponentInner"];
const _c1 = ["splitComponentOuter"];
const _c2 = ["splitComponentIframeResize"];
const _c3 = ["mainContainer"];
const _c4 = ["codeParts"];
const _c5 = ["htmlPart"];
const _c6 = ["cssPart"];
const _c7 = ["jsPart"];
const _c8 = ["iframePart"];
const _c9 = ["layout1"];
const _c10 = ["layout2"];
const _c11 = ["layout3"];
const _c12 = ["layoutsList"];
const _c13 = ["modal"];
const _c14 = ["ressources"];
const _c15 = ["loader"];
const _c16 = ["customGutter1"];
const _c17 = ["customGutter2"];
const _c18 = ["emptyArea1"];
const _c19 = ["emptyArea2"];
function MainComponent_i_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 112);
  }
}
function MainComponent_i_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 113);
  }
}
function MainComponent_i_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 13)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "/2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function MainComponent_i_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 15)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "/2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function MainComponent_span_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function MainComponent_i_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 13);
  }
}
function MainComponent_i_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 15);
  }
}
function MainComponent_i_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 13)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "/2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function MainComponent_i_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 15)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "/2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function MainComponent_span_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function MainComponent_i_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 13);
  }
}
function MainComponent_i_141_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 15);
  }
}
function MainComponent_i_158_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 13)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "/2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function MainComponent_i_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 15)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "/2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function MainComponent_span_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function MainComponent_i_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 13);
  }
}
function MainComponent_i_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "i", 15);
  }
}
const _c20 = function (a0) {
  return {
    display: a0
  };
};
const _c21 = function (a0, a1) {
  return {
    "shown": a0,
    "hidden": a1
  };
};
const _c22 = function (a0) {
  return {
    "active": a0
  };
};
const _c23 = function (a0) {
  return {
    "full-screen-iframe": a0
  };
};
const _c24 = function (a0, a1, a2) {
  return {
    "no-result-mobile": a0,
    "no-code-mobile": a1,
    "is-dark-mode": a2
  };
};
const _c25 = function (a0) {
  return {
    "hide-mobile": a0
  };
};
const _c26 = function (a0, a1, a2) {
  return {
    "hide-mobile": a0,
    "fullscreen": a1,
    "vertical-title-mode": a2
  };
};
const _c27 = function (a0) {
  return {
    "display": a0
  };
};
const _c28 = function (a0) {
  return {
    "vertical": a0
  };
};
const _c29 = function (a0) {
  return {
    "vertical-title-mode": a0
  };
};
const _c30 = function (a0) {
  return {
    "on": a0
  };
};
const _c31 = function (a0, a1, a2) {
  return {
    "hide-mobile": a0,
    "is-vertical": a1,
    "is-horizontal": a2
  };
};
const _c32 = function (a0) {
  return {
    "is-dark-mode": a0
  };
};
const _c33 = function (a0) {
  return {
    "flex": a0
  };
};
const _c34 = function (a0, a1, a2) {
  return {
    "is-dark-mode": a0,
    "is-vertical": a1,
    "is-horizontal": a2
  };
};
const _c35 = function (a0, a1, a2, a3, a4) {
  return {
    "hide-mobile": a0,
    "layout-type-1": a1,
    "layout-type-2": a2,
    "layout-type-3": a3,
    "layout-type-4": a4
  };
};
class MainComponent {
  constructor(mainService, activatedRoute, toastrService, ngxPrettifyService) {
    this.mainService = mainService;
    this.activatedRoute = activatedRoute;
    this.toastrService = toastrService;
    this.ngxPrettifyService = ngxPrettifyService;
    this.showHtml = true;
    this.showCss = false;
    this.showJs = false;
    this.showResult = true;
    this.showConsole = false;
    this.showIframeOverlay = false;
    this.isHtmlFullScreen = false;
    this.isCssFullScreen = false;
    this.isJsFullScreen = false;
    this.canChangeSplitSizes = true;
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
    this.initialHtmlCodePartSize = 0;
    this.initialCssCodePartSize = 0;
    this.initialJsCodePartSize = 0;
    this.initialCodePartSize = 0;
    this.mainContainerWidth = 0;
    this.mainContainerHeight = 0;
    this.newHtmlCodePartSize = 0;
    this.newCssCodePartSize = 0;
    this.newJsCodePartSize = 0;
    this.newCodePartSize = 0;
    this.IsAfterViewInitReached = false;
    this.canCallReAdaptCodePartsSizes = true;
    this.emptyArea_1_Size = 0;
    this.emptyArea_2_Size = 0;
    this.isCustomGutter1_dragging = false;
    this.isCustomGutter2_dragging = false;
    this.isIframeFullScreen = false;
    this.isFiddleWidthInputDisabled = false;
    this.isFiddleHeightInputDisabled = false;
    this.firstCodePartHalfStretch = 0;
    this.isConsoleOn = false;
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
    //////////
    let self = this;
    this.IsAfterViewInitReached = true;
    let mainContainerEl = this.mainContainer.nativeElement;
    this.mainContainerWidth = mainContainerEl.offsetWidth;
    this.mainContainerHeight = mainContainerEl.offsetHeight;
    this.activatedRoute.paramMap.subscribe(params => {
      let currentFiddleId = +params.get("id");
      //data retrieval
      if (currentFiddleId && !isNaN(currentFiddleId)) {
        if (this.mainService.redirectAfterSaveMode) {
          //re-retrieve data after recent save ?
          //console.log("re-retrieve data after recent save ", this.mainService.htmlCode);
          this.htmlPart.code = this.mainService.htmlCode;
          this.cssPart.code = this.mainService.cssCode;
          this.jsPart.code = this.mainService.jsCode;
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
            is_mobile_mode: this.mainService.isMobileMode
          };
          this.changeLayout(this.mainService.layout, obj);
          self.mainService.redirectAfterSaveMode = false;
          setTimeout(() => {
            self.mainService.retrieveCodePartsCursors(self.cssPart, self.htmlPart, self.jsPart);
          }, 1);
          //console.log("after router path change");
          if (this.mainService.scheduledRunFiddle) {
            this.runCode();
          }
          this.mainService.isFirstTimeFiddle = false;
        } else {
          //retrieve data from backend ?
          this.loader.showLoader();
          this.mainService.getFiddle(currentFiddleId).subscribe(res => {
            //console.log("getFiddle res = ", res);
            if (res.status == "ok") {
              let fiddleData = res.fiddleData;
              //console.log("getFiddle obj = ", obj);
              this.htmlPart.code = fiddleData.html;
              this.cssPart.code = fiddleData.css;
              this.jsPart.code = fiddleData.js;
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
              setTimeout(() => {
                self.mainService.retrieveCodePartsCursors(self.cssPart, self.htmlPart, self.jsPart, true);
              }, 1);
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
      this.mainService.resumeFiddleTheme(this.htmlPart, this.cssPart, this.jsPart);
    });
    this.splitComponentInner.dragProgress$.subscribe(res => {
      let sizes = this.splitComponentInner.getVisibleAreaSizes();
      this.newHtmlCodePartSize = sizes[1];
      this.newCssCodePartSize = sizes[2];
      this.newJsCodePartSize = sizes[3];
      this.setMainServiceCodepartSizes();
      //console.log("splitComponentInner sizes = ", sizes);
      this.codePartStretchState.state = false;
      this.codePartStretchState.index = -1;
      this.previousLayout = undefined;
    });
    this.splitComponentOuter.dragProgress$.subscribe(res => {
      let sizes = this.splitComponentOuter.getVisibleAreaSizes();
      if (this.layout == 1 || this.layout == 2) {
        this.newCodePartSize = sizes[0];
      } else if (this.layout == 3 || this.layout == 4) {
        this.newCodePartSize = sizes[1];
      }
      this.setMainServiceCodepartSizes();
      //console.log("splitComponentOuter sizes = ", sizes);
      this.calculateIframeSize(mainContainerEl);
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
    switch (type) {
      case 'html':
        let prettifiedHtml = this.ngxPrettifyService.prettify(this.mainService.htmlCode.trim());
        this.htmlPart.code = prettifiedHtml;
        break;
      case 'css':
        let alteredCss = "<style>" + this.mainService.cssCode + "</style>";
        let prettifiedCss = this.ngxPrettifyService.prettify(alteredCss, "css");
        let indStyle = prettifiedCss.lastIndexOf("</style>");
        prettifiedCss = prettifiedCss.slice(7, indStyle).trim();
        this.cssPart.code = prettifiedCss;
        break;
      case 'js':
        let alternateJs = "<script>" + this.mainService.jsCode + "</script>";
        let prettifiedJs = this.ngxPrettifyService.prettify(alternateJs, "javascript");
        let indScript = prettifiedJs.lastIndexOf("</script>");
        prettifiedJs = prettifiedJs.slice(8, indScript).trim();
        this.jsPart.code = prettifiedJs;
        break;
    }
  }
  selectTheme(theme) {
    if (theme.id != this.mainService.selectedTheme.id) {
      this.mainService.selectedTheme = theme;
      localStorage.setItem("myfiddle-theme", theme.id);
      this.mainService.addThemeStylesheet(theme);
      this.mainService.registerMonacoCustomTheme(theme);
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
    this.mainService.htmlCodePartSize = this.newHtmlCodePartSize;
    this.mainService.cssCodePartSize = this.newCssCodePartSize;
    this.mainService.jsCodePartSize = this.newJsCodePartSize;
    let mainContainerEl = this.mainContainer.nativeElement;
    if (mainContainerEl) {
      this.mainService.mainContainerHeight = mainContainerEl.offsetHeight;
      this.mainService.mainContainerWidth = mainContainerEl.offsetWidth;
    }
    this.mainService.layout = this.layout;
    this.mainService.codePartsSize = this.newCodePartSize;
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
        } else {
          //new fiddle
          self.emptyArea_1_Size = 0;
          self.emptyArea_2_Size = 0;
          self.mainService.iframeResizeValue = parseInt(self.getIframeAreaSize());
          switch (self.layout) {
            case 1:
              self.initialCssCodePartSize = (self.mainContainerHeight - 10) / 3;
              self.initialHtmlCodePartSize = (self.mainContainerHeight - 10) / 3;
              self.initialJsCodePartSize = (self.mainContainerHeight - 10) / 3;
              self.initialCodePartSize = 350;
              //console.log("self.mainContainerHeight = ", self.mainContainerHeight);
              break;
            case 2:
              self.initialCssCodePartSize = (self.mainContainerWidth - 10) / 3;
              self.initialHtmlCodePartSize = (self.mainContainerWidth - 10) / 3;
              self.initialJsCodePartSize = (self.mainContainerWidth - 10) / 3;
              self.initialCodePartSize = 300;
              break;
            case 3:
              self.initialCssCodePartSize = (self.mainContainerHeight - 10) / 3;
              self.initialHtmlCodePartSize = (self.mainContainerHeight - 10) / 3;
              self.initialJsCodePartSize = (self.mainContainerHeight - 10) / 3;
              self.initialCodePartSize = 350;
              break;
            case 4:
              self.initialCssCodePartSize = (self.mainContainerWidth - 10) / 3;
              self.initialHtmlCodePartSize = (self.mainContainerWidth - 10) / 3;
              self.initialJsCodePartSize = (self.mainContainerWidth - 10) / 3;
              self.initialCodePartSize = 300;
              break;
          }
        }
        self.newCssCodePartSize = self.initialCssCodePartSize;
        self.newHtmlCodePartSize = self.initialHtmlCodePartSize;
        self.newJsCodePartSize = self.initialJsCodePartSize;
        self.newCodePartSize = self.initialCodePartSize;
        self.splitComponentInner.setVisibleAreaSizes(["*", self.newHtmlCodePartSize, self.newCssCodePartSize, self.newJsCodePartSize]);
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
      codePartsMinLimit = 300;
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
    let sizes = ['*', savedHtmlCodePartSize, savedCssCodePartSize, savedJsCodePartSize];
    //console.log("param.data = ", param.data);
    this.reAdaptCodePartsSizes(sizes, currentMainContainerSize - 10, "inner", savedMainContainerSize);
    this.initialHtmlCodePartSize = Math.floor(sizes[1]);
    this.initialCssCodePartSize = Math.floor(sizes[2]);
    this.initialJsCodePartSize = Math.floor(sizes[3]);
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
    this.initialCodePartSize = Math.floor(sizes[ind]);
    /*END readapt saved sizes to new window size*/
  }

  getLayoutInfos(name) {
    switch (name) {
      case "htmlAsSplitAreaSize":
        return this.initialHtmlCodePartSize;
      case "cssAsSplitAreaSize":
        return this.initialCssCodePartSize;
      case "jsAsSplitAreaSize":
        return this.initialJsCodePartSize;
      case "codePartsAsSplitAreaSize":
        return this.initialCodePartSize;
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
            return 24;
          case "cssAsSplitAreaMinSize":
            return 24;
          case "jsAsSplitAreaMinSize":
            return 24;
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
            return 300;
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
          //return 300;
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
            return 24;
          case "cssAsSplitAreaMinSize":
            return 24;
          case "jsAsSplitAreaMinSize":
            return 24;
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
            return 300;
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
          //return 300;
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
      this.htmlPart.theme = "cloud9_day";
      this.cssPart.theme = "cloud9_day";
      this.jsPart.theme = "cloud9_day";
    } else {
      this.htmlPart.theme = "cloud9_night";
      this.cssPart.theme = "cloud9_night";
      this.jsPart.theme = "cloud9_night";
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
    } else if (this.layout == 2) {
      this.splitComponentOuter.setVisibleAreaSizes([300, "*"]);
      this.mainService.codePartsSize = 300;
    } else if (this.layout == 4) {
      this.splitComponentOuter.setVisibleAreaSizes(["*", 300]);
      this.mainService.codePartsSize = 300;
    }
    this.calculateIframeSize();
  }
  stretchHorizontally() {
    if (this.layout == 1) {
      this.splitComponentOuter.setVisibleAreaSizes([350, "*"]);
      this.mainService.codePartsSize = 350;
    } else if (this.layout == 3) {
      this.splitComponentOuter.setVisibleAreaSizes(["*", 350]);
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
        this.initialCssCodePartSize = (this.mainContainerHeight - 10) / 3;
        this.initialHtmlCodePartSize = (this.mainContainerHeight - 10) / 3;
        this.initialJsCodePartSize = (this.mainContainerHeight - 10) / 3;
      } else {
        this.initialCssCodePartSize = (this.mainContainerWidth - 10) / 3;
        this.initialHtmlCodePartSize = (this.mainContainerWidth - 10) / 3;
        this.initialJsCodePartSize = (this.mainContainerWidth - 10) / 3;
      }
      this.newCssCodePartSize = this.initialCssCodePartSize;
      this.newHtmlCodePartSize = this.initialHtmlCodePartSize;
      this.newJsCodePartSize = this.initialJsCodePartSize;
      let sizesArr = ["*", this.newHtmlCodePartSize, this.newCssCodePartSize, this.newJsCodePartSize];
      this.splitComponentInner.setVisibleAreaSizes(sizesArr);
    }
  }
  halfStretchCodePart(index, event) {
    let currentCodePartTitle = event.target.closest(".code-part-title");
    document.querySelectorAll(".code-part-title [class*='half-stretch-btn']").forEach(el => {
      el.classList.add("clinging");
    });
    if (!this.firstCodePartHalfStretch) {
      //first marking ? stretch
      this.firstCodePartHalfStretch = index;
      currentCodePartTitle.classList.add("half-stretch-mark");
    } else if (this.firstCodePartHalfStretch == index) {
      //first marked codePart is marked again ? remove stretch
      this.firstCodePartHalfStretch = undefined;
      currentCodePartTitle.classList.remove("half-stretch-mark");
      document.querySelectorAll(".code-part-title [class*='half-stretch-btn']").forEach(el => {
        el.classList.remove("clinging");
      });
    } else {
      //second codePart is the one marked? proceed with resizing the first and second marked codeParts
      let mainContainerSize = this.layout == 1 || this.layout == 3 ? this.mainContainerHeight : this.mainContainerWidth;
      let minCodePartSize = this.layout == 1 || this.layout == 3 ? 24 : 25;
      let arr = ["*", minCodePartSize, minCodePartSize, minCodePartSize];
      arr[this.firstCodePartHalfStretch] = mainContainerSize / 2 - 5 - minCodePartSize / 2;
      arr[index] = mainContainerSize / 2 - 5 - minCodePartSize / 2;
      this.splitComponentInner.setVisibleAreaSizes(arr);
      this.initialHtmlCodePartSize = arr[1];
      this.initialCssCodePartSize = arr[2];
      this.initialJsCodePartSize = arr[3];
      this.newHtmlCodePartSize = arr[1];
      this.newCssCodePartSize = arr[2];
      this.newJsCodePartSize = arr[3];
      this.setMainServiceCodepartSizes();
      //console.log("arr = ", arr);
      this.firstCodePartHalfStretch = undefined; //firstCodePartHalfStretch not needed anymore
      //reset stretched codepart state as well
      this.codePartStretchState.state = false;
      this.codePartStretchState.index = -1;
      let firstMarkedCodePart = this.codeParts.nativeElement.querySelector(".half-stretch-mark");
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
      if (this.codePartStretchState.state && index == this.codePartStretchState.index) {
        //codepart already stretched ? resume last codepart size
        this.codePartStretchState.state = false;
        this.codePartStretchState.index = -1;
        let sizes = ["*", this.previousLayout.htmlSize, this.previousLayout.cssSize, this.previousLayout.jsSize];
        //console.log("sizes before = ", sizes);
        this.reAdaptCodePartsSizes(sizes, mainContainerSize - 10, "inner");
        //console.log("sizes after = ", sizes);
        this.initialHtmlCodePartSize = sizes[1];
        this.initialCssCodePartSize = sizes[2];
        this.initialJsCodePartSize = sizes[3];
        this.newHtmlCodePartSize = sizes[1];
        this.newCssCodePartSize = sizes[2];
        this.newJsCodePartSize = sizes[3];
        this.splitComponentInner.setVisibleAreaSizes(sizes);
      } else {
        //code part not stretched ?
        this.previousLayout = {
          layout: this.layout,
          htmlSize: this.splitComponentInner.getVisibleAreaSizes()[1],
          cssSize: this.splitComponentInner.getVisibleAreaSizes()[2],
          jsSize: this.splitComponentInner.getVisibleAreaSizes()[3],
          mainContainerSize: mainContainerSize
        };
        this.codePartStretchState.state = true;
        this.codePartStretchState.index = index;
        if (this.layout == 1 || this.layout == 3) {
          let totalSize = this.mainContainerHeight - 10;
          //console.log("totalSize = ", totalSize);
          switch (codePartType) {
            case "html":
              this.splitComponentInner.setVisibleAreaSizes(["*", totalSize - 48, 24, 24]);
              break;
            case "css":
              this.splitComponentInner.setVisibleAreaSizes(["*", 24, totalSize - 48, 24]);
              break;
            case "js":
              this.splitComponentInner.setVisibleAreaSizes(["*", 24, 24, totalSize - 48]);
              break;
          }
        } else if (this.layout == 2 || this.layout == 4) {
          let totalSize = this.mainContainerWidth - 10;
          //console.log("totalSize = ", totalSize);
          switch (codePartType) {
            case "html":
              this.splitComponentInner.setVisibleAreaSizes(["*", totalSize - 50, 25, 25]);
              break;
            case "css":
              this.splitComponentInner.setVisibleAreaSizes(["*", 25, totalSize - 50, 25]);
              break;
            case "js":
              this.splitComponentInner.setVisibleAreaSizes(["*", 25, 25, totalSize - 50]);
              break;
          }
        }
        let sizes = this.splitComponentInner.getVisibleAreaSizes();
        this.initialHtmlCodePartSize = sizes[1];
        this.initialCssCodePartSize = sizes[2];
        this.initialJsCodePartSize = sizes[3];
        this.newHtmlCodePartSize = sizes[1];
        this.newCssCodePartSize = sizes[2];
        this.newJsCodePartSize = sizes[3];
      }
      this.setMainServiceCodepartSizes();
    }
  }
  onWindowKeydown(event) {
    //console.log("onWindowKeydown ", event.code);
  }
  onDocumentMouseup(event) {
    if (this.isCustomGutter1_dragging || this.isCustomGutter2_dragging) {
      event.preventDefault();
      this.showIframeOverlay = false;
    }
    if (this.isCustomGutter1_dragging) {
      this.isCustomGutter1_dragging = false;
      //console.log("isCustomGutter1_dragging == FALSE mouseup.type event = " + event.type);
      //console.log("--------------------------");
      this.isFiddleHeightInputDisabled = false;
      this.isFiddleWidthInputDisabled = false;
    } else if (this.isCustomGutter2_dragging) {
      this.isCustomGutter2_dragging = false;
      //console.log("isCustomGutter2_dragging == FALSE mouseup.type event = " + event.type);
      //console.log("--------------------------");
      this.isFiddleHeightInputDisabled = false;
      this.isFiddleWidthInputDisabled = false;
    }
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
    //(new windowHeight or new windowWidth) and canChangeSplitSizes and mainContainerEl is truthy ?
    if (mainContainerEl && this.canChangeSplitSizes && (newWindowHeight !== this.windowHeight || newWindowWidth !== this.windowWidth)) {
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
      let newMainContainerWidthOrHeight2;
      let iframeSize;
      if (this.layout == 1 || this.layout == 3) {
        oldMainContainerWidthOrHeight = this.mainContainerHeight;
        newMainContainerWidthOrHeight = newMainContainerHeight;
        newMainContainerWidthOrHeight2 = newMainContainerWidth;
        iframeSize = this.iframeHeight;
      } else {
        oldMainContainerWidthOrHeight = this.mainContainerWidth;
        newMainContainerWidthOrHeight = newMainContainerWidth;
        newMainContainerWidthOrHeight2 = newMainContainerHeight;
        iframeSize = this.iframeWidth;
      }
      /*START readapt code parts sizes*/
      let sizes = this.splitComponentInner.getVisibleAreaSizes();
      let sizesOuter = this.splitComponentOuter.getVisibleAreaSizes();
      if (newMainContainerWidthOrHeight > oldMainContainerWidthOrHeight) {
        let coef = newMainContainerWidthOrHeight / oldMainContainerWidthOrHeight;
        sizes[1] = sizes[1] * coef;
        sizes[2] = sizes[2] * coef;
        sizes[3] = sizes[3] * coef;
      } else if (newMainContainerWidthOrHeight < oldMainContainerWidthOrHeight) {
        let coef = oldMainContainerWidthOrHeight / newMainContainerWidthOrHeight;
        sizes[1] = sizes[1] / coef > 25 ? sizes[1] / coef : 25;
        sizes[2] = sizes[2] / coef > 25 ? sizes[2] / coef : 25;
        sizes[3] = sizes[3] / coef > 25 ? sizes[3] / coef : 25;
      }
      /*END readapt code parts sizes*/
      //console.log("this.canCallReAdaptCodePartsSizes = ", this.canCallReAdaptCodePartsSizes);
      if (this.canCallReAdaptCodePartsSizes) {
        this.canCallReAdaptCodePartsSizes = false;
        this.codePartsSizesFix = setTimeout(() => {
          self.reAdaptIframeResizeValue(oldMainContainerWidthOrHeight, newMainContainerWidthOrHeight, iframeSize);
          //self.codePartsSizesFix = undefined;
          self.canCallReAdaptCodePartsSizes = true;
        }, 50);
      }
      self.reAdaptCodePartsSizes(sizes, newMainContainerWidthOrHeight - 10, "inner", oldMainContainerWidthOrHeight);
      self.reAdaptCodePartsSizes(sizesOuter, newMainContainerWidthOrHeight2 - 5, "outer", oldMainContainerWidthOrHeight);
      this.mainContainerHeight = newMainContainerHeight;
      this.mainContainerWidth = newMainContainerWidth;
      let newCodePartSize;
      let outerSplitterSizes;
      if (this.layout == 1 || this.layout == 3) {
        if (this.newCodePartSize > this.mainContainerWidth - 5) {
          newCodePartSize = this.mainContainerWidth - 13;
          this.newCodePartSize = newCodePartSize;
        }
        if (this.newCodePartSize < 350) {
          this.newCodePartSize = 350;
        }
      } else if (this.layout == 2 || this.layout == 4) {
        if (this.newCodePartSize > this.mainContainerHeight - 5) {
          newCodePartSize = this.mainContainerHeight - 13;
          this.newCodePartSize = newCodePartSize;
        }
        if (this.newCodePartSize < 300) {
          this.newCodePartSize = 300;
        }
      }
      if (this.layout == 1 || this.layout == 2) {
        outerSplitterSizes = [this.newCodePartSize, "*"];
      } else if (this.layout == 3 || this.layout == 4) {
        outerSplitterSizes = ['*', this.newCodePartSize];
      }
      this.splitComponentOuter.setVisibleAreaSizes(outerSplitterSizes);
      this.setMainServiceCodepartSizes();
      this.calculateIframeSize(mainContainerEl);
    }
  }
  /**
   * Re-adapts the iframeResizeValue on window resize or after fiddle retrieval by id
   * @param mainContainerWidthOrHeight .main-container's width or height depending on the layout
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
   * @param sizes Split Component areas sizes array
   * @param newMainContainerWidthOrHeight offsetWidth or offsetHeight of .main-container
   */
  reAdaptCodePartsSizes(sizes, newMainContainerWidthOrHeight, type, oldMainContainerWidthOrHeight) {
    if (type == "inner") {
      let total = sizes[1] + sizes[2] + sizes[3];
      let coef;
      coef = newMainContainerWidthOrHeight / total;
      sizes[1] = sizes[1] * coef;
      sizes[2] = sizes[2] * coef;
      sizes[3] = sizes[3] * coef;
      //console.log("sizes inner = ", sizes);
      this.splitComponentInner.setVisibleAreaSizes(sizes);
      this.newHtmlCodePartSize = sizes[1];
      this.newCssCodePartSize = sizes[2];
      this.newJsCodePartSize = sizes[3];
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
        minLimit = 300;
      }
      let total = sizes[ind];
      if (total > newMainContainerWidthOrHeight) {
        sizes[ind] = newMainContainerWidthOrHeight;
      } else if (total < minLimit) {
        sizes[ind] = minLimit;
      }
      //console.log("sizes outer = ", sizes);
      this.newCodePartSize = sizes[ind];
      this.splitComponentOuter.setVisibleAreaSizes(sizes);
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
      //END save codePositionData objects in MainService
      this.iframePart.saveFiddle();
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
      if (this.codeParts.nativeElement.querySelector(".code-component-container-css").classList.contains("hide-mobile")) {
        //window.dispatchEvent(new Event("resize", {bubbles: true, cancelable:false }));
        //clearInterval(editorLayoutFixInterval);
      }
    }
    if (!this.showHtml) {
      if (this.codeParts.nativeElement.querySelector(".code-component-container-html").classList.contains("hide-mobile")) {
        //window.dispatchEvent(new Event("resize", {bubbles: true, cancelable:false }));
        //clearInterval(editorLayoutFixInterval);
      }
    }
    if (!this.showJs) {
      if (this.codeParts.nativeElement.querySelector(".code-component-container-js").classList.contains("hide-mobile")) {
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
  onGutterCustomMousedown(event, customGutterNum) {
    event.preventDefault();
    if (customGutterNum == 1) {
      this.isCustomGutter1_dragging = true;
      this.isCustomGutter2_dragging = false;
      this.isFiddleHeightInputDisabled = true;
      this.isFiddleWidthInputDisabled = true;
      //console.log("mousedown event.type = " + event.type);
      //console.log("--------------------------");
    } else if (customGutterNum == 2) {
      this.isCustomGutter2_dragging = true;
      this.isCustomGutter1_dragging = false;
      this.isFiddleHeightInputDisabled = true;
      this.isFiddleWidthInputDisabled = true;
      //console.log("mousedown event.type = " + event.type);
      //console.log("--------------------------");
    }
  }

  onAsSplitAreaIframeMousemove(event) {
    let evTarget = event.target;
    if (this.IsAfterViewInitReached) {
      let eventClientXOrY;
      if (event.type == "touchmove") {
        if (this.layout == 1 || this.layout == 3) {
          eventClientXOrY = event.touches[0].clientY;
        } else if (this.layout == 2 || this.layout == 4) {
          eventClientXOrY = event.touches[0].clientX;
        }
      } else {
        if (this.layout == 1 || this.layout == 3) {
          eventClientXOrY = event.clientY;
        } else if (this.layout == 2 || this.layout == 4) {
          eventClientXOrY = event.clientX;
        }
      }
      let emptyArea1 = this.emptyArea1.nativeElement;
      let emptyArea2 = this.emptyArea2.nativeElement;
      let mainContainer = this.mainContainer.nativeElement;
      if (this.isCustomGutter1_dragging) {
        if (!this.showIframeOverlay) {
          this.showIframeOverlay = true;
        }
        event.preventDefault();
        //console.log("mousemove evTarget = ", evTarget);
        //console.log("isCustomGutter1_dragging is true");
        if (this.layout == 1 || this.layout == 3) {
          let emptyArea1_height = emptyArea1.offsetHeight;
          emptyArea1_height = eventClientXOrY - mainContainer.getBoundingClientRect().top;
          if (emptyArea1_height < 0) {
            emptyArea1_height = 0;
          } else if (emptyArea1_height > mainContainer.offsetHeight / 2 - 5) {
            emptyArea1_height = mainContainer.offsetHeight / 2 - 5;
          }
          this.emptyArea_1_Size = emptyArea1_height;
          this.emptyArea_2_Size = emptyArea1_height;
        } else if (this.layout == 2 || this.layout == 4) {
          let emptyArea1_width = emptyArea1.offsetWidth;
          emptyArea1_width = eventClientXOrY - mainContainer.getBoundingClientRect().left;
          if (emptyArea1_width < 0) {
            emptyArea1_width = 0;
          } else if (emptyArea1_width > mainContainer.offsetWidth / 2 - 5) {
            emptyArea1_width = mainContainer.offsetWidth / 2 - 5;
          }
          this.emptyArea_1_Size = emptyArea1_width;
          this.emptyArea_2_Size = emptyArea1_width;
        }
        this.calculateIframeSize(mainContainer);
        this.mainService.iframeResizeValue = parseInt(this.getIframeAreaSize());
      } else if (this.isCustomGutter2_dragging) {
        if (!this.showIframeOverlay) {
          this.showIframeOverlay = true;
        }
        event.preventDefault();
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
        this.calculateIframeSize(mainContainer);
        this.mainService.iframeResizeValue = parseInt(this.getIframeAreaSize());
      }
    }
  }
  onFiddleWidthChange(data) {
    let newFiddleWidth = parseInt(data);
    switch (this.layout) {
      case 1:
        if (newFiddleWidth <= this.mainContainerWidth - 350 - 5) {
          this.splitComponentOuter.setVisibleAreaSizes([this.mainContainerWidth - newFiddleWidth - 5, "*"]);
          this.newCodePartSize = this.mainContainerWidth - newFiddleWidth - 5;
          this.mainService.codePartsSize = this.newCodePartSize;
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
          this.splitComponentOuter.setVisibleAreaSizes(["*", this.mainContainerWidth - newFiddleWidth - 5]);
          this.newCodePartSize = this.mainContainerWidth - newFiddleWidth - 5;
          this.mainService.codePartsSize = this.newCodePartSize;
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
        if (newFiddleHeight <= this.mainContainerHeight - 300 - 5) {
          this.splitComponentOuter.setVisibleAreaSizes([this.mainContainerHeight - newFiddleHeight - 5, "*"]);
          this.newCodePartSize = this.mainContainerHeight - newFiddleHeight - 5;
          this.mainService.codePartsSize = this.newCodePartSize;
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
        if (newFiddleHeight <= this.mainContainerHeight - 300 - 5) {
          this.splitComponentOuter.setVisibleAreaSizes(["*", this.mainContainerHeight - newFiddleHeight - 5]);
          this.newCodePartSize = this.mainContainerHeight - newFiddleHeight - 5;
          this.mainService.codePartsSize = this.newCodePartSize;
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
  ressouresBtnClick() {
    this.modal.show();
  }
  splitComponentInnerDragEnd(event) {
    //console.log("splitComponentInnerDragEnd event = ", event);
    this.canChangeSplitSizes = true;
  }
  splitComponentInnerDragStart(event) {
    //console.log("splitComponentInnerDragStart event = ", event);
    this.canChangeSplitSizes = false;
  }
  splitComponentOuterDragEnd(event) {
    //console.log("splitComponentOuterDragEnd event = ", event);
    this.showIframeOverlay = false;
    this.isFiddleHeightInputDisabled = false;
    this.isFiddleWidthInputDisabled = false;
  }
  splitComponentOuterDragStart(event) {
    //console.log("splitComponentOuterDragStart event = ", event);
    this.showIframeOverlay = true;
    this.isFiddleHeightInputDisabled = true;
    this.isFiddleWidthInputDisabled = true;
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
          if (this.newHtmlCodePartSize < 230) {
            return true;
          } else {
            return false;
          }
        case "js":
          if (this.newJsCodePartSize < 280) {
            return true;
          } else {
            return false;
          }
        case "css":
          if (this.newCssCodePartSize < 230) {
            return true;
          } else {
            return false;
          }
      }
    } else {
      return false;
    }
  }
  getFiddleInputWidth() {
    let width = 0;
    for (let ind = 0; ind < this.fiddleTitle.length; ind++) {
      width += 10;
    }
    //console.log("width = ", width);
    return width == 0 ? "" : width + "px";
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
  static #_ = this.ɵfac = function MainComponent_Factory(t) {
    return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_main_service__WEBPACK_IMPORTED_MODULE_1__.MainService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_smartcodelab_ngx_prettify__WEBPACK_IMPORTED_MODULE_12__.NgxPrettifyService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: MainComponent,
    selectors: [["app-main"]],
    viewQuery: function MainComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c9, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c10, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c11, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c12, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c13, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c14, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c15, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c16, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c17, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c18, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c19, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.splitComponentInner = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.splitComponentOuter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.splitComponentIframeResize = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.mainContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.codeParts = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.htmlPart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.cssPart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.jsPart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.iframePart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.layout1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.layout2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.layout3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.layoutsList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.ressourcesComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.loader = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.customGutter1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.customGutter2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.emptyArea1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.emptyArea2 = _t.first);
      }
    },
    hostBindings: function MainComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keydown", function MainComponent_keydown_HostBindingHandler($event) {
          return ctx.onWindowKeydown($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveWindow"])("mouseup", function MainComponent_mouseup_HostBindingHandler($event) {
          return ctx.onDocumentMouseup($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveDocument"])("click", function MainComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveDocument"])("touchend", function MainComponent_touchend_HostBindingHandler($event) {
          return ctx.onDocumentTouchend($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveDocument"])("mousemove", function MainComponent_mousemove_HostBindingHandler($event) {
          return ctx.onDocumentMousemove($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveDocument"])("touchmove", function MainComponent_touchmove_HostBindingHandler($event) {
          return ctx.onDocumentTouchmove($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveDocument"])("resize", function MainComponent_resize_HostBindingHandler($event) {
          return ctx.onWindowResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveWindow"]);
      }
    },
    decls: 209,
    vars: 235,
    consts: [["id", "main-header"], [1, "logo-title-container"], ["title", "My Fiddle", 1, "fiddle-logo", 3, "href"], [3, "ngStyle", "src"], [1, "fiddle-title"], ["type", "text", "placeholder", "Title", 1, "form-control", "fiddle-input", 3, "ngModel", "ngModelChange"], [1, "fiddle-size"], ["type", "number", 1, "width", "form-control", 3, "min", "ngModel", "disabled", "ngModelChange", "change"], [1, "x"], ["type", "number", 1, "height", "form-control", 3, "min", "ngModel", "disabled", "ngModelChange", "change"], [1, "fullscreen-iframe-btn", "btn", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-arrows-alt"], [1, "stretch-v-iframe-btn", "btn", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-arrows-v"], [1, "stretch-h-iframe-btn", "btn", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-arrows-h"], [1, "app-loader"], ["loader", ""], [1, "header-btns-container"], [1, "prettify-mobile-code", "btn", 3, "click"], [1, "themes-btn-container"], [1, "themes-btn", "btn", 3, "title", "click"], ["class", "fa fa-sun-o", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-moon-o", "aria-hidden", "true", 4, "ngIf"], [1, "paypal-btn-container"], ["id", "donate-button-container"], ["id", "donate-button", 1, "btn"], [1, "ressources-code-btn", "btn", 3, "click"], [1, "layouts-list-container", 3, "ngClass", "click"], [1, "layouts-btn", "btn"], ["aria-hidden", "true", 1, "fa", "fa-sort-desc"], ["aria-hidden", "true", 1, "fa", "fa-sort-asc"], [1, "layouts-list"], ["layoutsList", ""], [1, "layout-1", "layout", 3, "ngClass", "click"], ["layout1", ""], [1, "layout-2", "layout", 3, "ngClass", "click"], ["layout2", ""], [1, "layout-3", "layout", 3, "ngClass", "click"], ["layout3", ""], [1, "layout-4", "layout", 3, "ngClass", "click"], ["layout4", ""], [1, "share-code-btn", "btn", 3, "click"], [1, "main-container", 3, "ngClass"], ["mainContainer", ""], ["id", "code-parts-title-mobile"], [3, "ngClass", "click"], ["htmlMobileToggle", ""], ["cssMobileToggle", ""], ["jsMobileToggle", ""], ["resultMobileToggle", ""], [1, "as-split-outer", 3, "direction", "unit", "ngClass", "gutterSize", "dragEnd", "dragStart"], ["splitComponentOuter", ""], [1, "as-split-area-code-parts", 3, "order", "minSize", "size", "ngClass"], ["id", "code-parts"], ["codeParts", ""], [3, "direction", "unit", "gutterSize", "dragEnd", "dragStart"], ["splitComponentInner", ""], [2, "display", "none", 3, "minSize", "size", "maxSize"], [1, "code-component-container", "code-component-container-html", 3, "minSize", "size", "ngClass"], [1, "code-part-title"], [1, "code-part-title-btns-container"], [1, "code-part-title-btn", 3, "title", "click"], ["aria-hidden", "true", 1, "fa", "fa-indent"], [1, "code-part-title-btn", 3, "title", "ngStyle", "click"], ["aria-hidden", "true", 1, "fa", "fa-bars", 3, "ngClass"], [1, "html-half-stretch-btn", "code-part-title-btn", 3, "title", "ngStyle", "ngClass", "click"], ["class", "fa fa-arrows-v", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-arrows-h", "aria-hidden", "true", 4, "ngIf"], ["class", "fa fa-arrows-h fa-arrows-h-vertical", "aria-hidden", "true", 4, "ngIf"], [1, "html-stretch-btn", "code-part-title-btn", 3, "title", "ngStyle", "ngClass", "click"], [1, "html-fullscreen-btn", "code-part-title-btn", 3, "ngClass", "title", "click"], [1, "code-component", 3, "runcodemsg", "savecodemsg"], ["htmlPart", ""], [1, "code-component-container", "code-component-container-css", 3, "minSize", "size", "ngClass"], [1, "css-half-stretch-btn", "code-part-title-btn", 3, "title", "ngStyle", "ngClass", "click"], [1, "css-stretch-btn", "code-part-title-btn", 3, "title", "ngStyle", "ngClass", "click"], [1, "css-fullscreen-btn", "code-part-title-btn", 3, "ngClass", "title", "click"], ["cssPart", ""], [1, "code-component-container", "code-component-container-js", 3, "minSize", "size", "ngClass"], [1, "js-half-stretch-btn", "code-part-title-btn", 3, "title", "ngStyle", "ngClass", "click"], [1, "js-stretch-btn", "code-part-title-btn", 3, "title", "ngStyle", "ngClass", "click"], [1, "js-fullscreen-btn", "code-part-title-btn", 3, "ngClass", "title", "click"], ["jsPart", ""], [1, "as-split-area-iframe", 2, "position", "relative", 3, "order", "size", "ngClass"], [1, "empty-area", "empty-area-1", 3, "ngClass", "ngStyle"], ["emptyArea1", ""], [1, "as-split-gutter-custom", 3, "ngClass", "mousedown", "touchstart"], ["customGutter1", ""], [1, "as-split-gutter-icon-custom"], [1, "iframe-overlay", 3, "ngStyle"], [1, "fiddle-size", "fiddle-size-hack"], [1, "width"], [1, "height"], [1, "fullscreen-iframe-header", 3, "ngStyle"], [1, "fullscreen-iframe-btn", "btn", "fullscreen-iframe-btn-secondary", 3, "title", "click"], [1, "iframe-area", 3, "ngStyle"], [1, "iframe-overlay-for-drop", 3, "ngStyle"], [3, "ngClass", "hideloader", "showloader", "isConsoleOnUpdate"], ["iframePart", ""], ["customGutter2", ""], [1, "empty-area", "empty-area-2", 3, "ngClass", "ngStyle"], ["emptyArea2", ""], ["modal", ""], [1, "modal-header"], [1, "modal-validate-btn", "btn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-check"], [1, "modal-close-btn", 3, "click"], [1, "modal-body"], [3, "hidemodal", "validate"], ["ressources", ""], [1, "modal-footer", 2, "padding", "0px"], ["aria-hidden", "true", 1, "fa", "fa-sun-o"], ["aria-hidden", "true", 1, "fa", "fa-moon-o"], ["aria-hidden", "true", 1, "fa", "fa-arrows-h", "fa-arrows-h-vertical"]],
    template: function MainComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 3)(4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 4)(6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_6_listener($event) {
          return ctx.fiddleTitle = $event;
        })("ngModelChange", function MainComponent_Template_input_ngModelChange_6_listener($event) {
          return ctx.onFiddeTitleChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 6)(8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.iframeWidth = $event;
        })("change", function MainComponent_Template_input_change_8_listener($event) {
          return ctx.onFiddleWidthChange($event.target.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function MainComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.iframeHeight = $event;
        })("change", function MainComponent_Template_input_change_11_listener($event) {
          return ctx.onFiddeHeightChange($event.target.value);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_button_click_12_listener() {
          return ctx.toggleIframeFullscreen();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_button_click_15_listener() {
          return ctx.stretchVertically();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_button_click_18_listener() {
          return ctx.stretchHorizontally();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "app-loader", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 18)(24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_button_click_24_listener() {
          return ctx.prettifyMobileCode();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, "Prettify");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "div", 20)(28, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_button_click_28_listener() {
          return ctx.changeTheme();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, MainComponent_i_29_Template, 1, 0, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, MainComponent_i_30_Template, 1, 0, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 24)(32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_button_click_34_listener() {
          return ctx.ressouresBtnClick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_div_click_37_listener() {
          return ctx.toggleLayoutsList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "button", 29)(39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "Layouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](41, "i", 30)(42, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 32, 33)(45, "div", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_div_click_45_listener() {
          return ctx.changeLayout(1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](48, "div")(49, "div")(50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_div_click_52_listener() {
          return ctx.changeLayout(2);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](55, "div")(56, "div")(57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](58, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_div_click_59_listener() {
          return ctx.changeLayout(3);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](62, "div")(63, "div")(64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_div_click_66_listener() {
          return ctx.changeLayout(4);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](69, "div")(70, "div")(71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_button_click_73_listener() {
          return ctx.runCode("save");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_button_click_76_listener() {
          return ctx.runCode();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78, "Run");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "div", 43, 44)(81, "div", 45)(82, "a", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_82_listener() {
          return ctx.toggleCodePart("html");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](84, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](85, "a", 46, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_85_listener() {
          return ctx.toggleCodePart("css");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "a", 46, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_88_listener() {
          return ctx.toggleCodePart("js");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](90, "JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "a", 46, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_91_listener() {
          return ctx.toggleCodePart("result");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](93, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "as-split", 51, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("dragEnd", function MainComponent_Template_as_split_dragEnd_94_listener($event) {
          return ctx.splitComponentOuterDragEnd($event);
        })("dragStart", function MainComponent_Template_as_split_dragStart_94_listener($event) {
          return ctx.splitComponentOuterDragStart($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "as-split-area", 53)(97, "div", 54, 55)(99, "as-split", 56, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("dragEnd", function MainComponent_Template_as_split_dragEnd_99_listener($event) {
          return ctx.splitComponentInnerDragEnd($event);
        })("dragStart", function MainComponent_Template_as_split_dragStart_99_listener($event) {
          return ctx.splitComponentInnerDragStart($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](101, "as-split-area", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "as-split-area", 59)(103, "div", 60)(104, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](105, "HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "div", 61)(107, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_107_listener() {
          return ctx.prettifyCode("html");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](109, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_110_listener() {
          return ctx.resetCodePartsSize();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](112, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](113, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_113_listener($event) {
          return ctx.halfStretchCodePart(1, $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](114, MainComponent_i_114_Template, 3, 0, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](115, MainComponent_i_115_Template, 3, 0, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](116, MainComponent_span_116_Template, 4, 0, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](117, "a", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_117_listener() {
          return ctx.stretchCodePart("html", 1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](118, MainComponent_i_118_Template, 1, 0, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](119, MainComponent_i_119_Template, 1, 0, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](120, "a", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_120_listener() {
          return ctx.toggleFullScreenMode("html");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](121, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](122, "app-html-part", 72, 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("runcodemsg", function MainComponent_Template_app_html_part_runcodemsg_122_listener() {
          return ctx.runCode();
        })("savecodemsg", function MainComponent_Template_app_html_part_savecodemsg_122_listener() {
          return ctx.runCode("save");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](124, "as-split-area", 74)(125, "div", 60)(126, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](127, "CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](128, "div", 61)(129, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_129_listener() {
          return ctx.prettifyCode("css");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](130, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](131, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](132, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_132_listener() {
          return ctx.resetCodePartsSize();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](133, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](134, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_135_listener($event) {
          return ctx.halfStretchCodePart(2, $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](136, MainComponent_i_136_Template, 3, 0, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](137, MainComponent_i_137_Template, 3, 0, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](138, MainComponent_span_138_Template, 4, 0, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "a", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_139_listener() {
          return ctx.stretchCodePart("css", 2);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](140, MainComponent_i_140_Template, 1, 0, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](141, MainComponent_i_141_Template, 1, 0, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](142, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_142_listener() {
          return ctx.toggleFullScreenMode("css");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](143, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "app-css-part", 72, 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("runcodemsg", function MainComponent_Template_app_css_part_runcodemsg_144_listener() {
          return ctx.runCode();
        })("savecodemsg", function MainComponent_Template_app_css_part_savecodemsg_144_listener() {
          return ctx.runCode("save");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](146, "as-split-area", 79)(147, "div", 60)(148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](149, "JAVASCRIPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](150, "div", 61)(151, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_151_listener() {
          return ctx.prettifyCode("js");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](153, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](154, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_154_listener() {
          return ctx.resetCodePartsSize();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](155, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](156, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](157, "a", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_157_listener($event) {
          return ctx.halfStretchCodePart(3, $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](158, MainComponent_i_158_Template, 3, 0, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](159, MainComponent_i_159_Template, 3, 0, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](160, MainComponent_span_160_Template, 4, 0, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](161, "a", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_161_listener() {
          return ctx.stretchCodePart("js", 3);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](162, MainComponent_i_162_Template, 1, 0, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](163, MainComponent_i_163_Template, 1, 0, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](164, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_a_click_164_listener() {
          return ctx.toggleFullScreenMode("js");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](165, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](166, "app-js-part", 72, 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("runcodemsg", function MainComponent_Template_app_js_part_runcodemsg_166_listener() {
          return ctx.runCode();
        })("savecodemsg", function MainComponent_Template_app_js_part_savecodemsg_166_listener() {
          return ctx.runCode("save");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "as-split-area", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](169, "div", 85, 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](171, "div", 87, 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("mousedown", function MainComponent_Template_div_mousedown_171_listener($event) {
          return ctx.onGutterCustomMousedown($event, 1);
        })("touchstart", function MainComponent_Template_div_touchstart_171_listener($event) {
          return ctx.onGutterCustomMousedown($event, 1);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](173, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](174, "div", 90)(175, "div", 91)(176, "span", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](177);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](178, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](179, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](180, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](181);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](182, "div", 94)(183, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_button_click_183_listener() {
          return ctx.toggleIframeFullscreen();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](184, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](185, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](186, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](187, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](188, "app-iframe-part", 98, 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("hideloader", function MainComponent_Template_app_iframe_part_hideloader_188_listener() {
          return ctx.onIframePartHideLoader();
        })("showloader", function MainComponent_Template_app_iframe_part_showloader_188_listener() {
          return ctx.onIframePartShowLoader();
        })("isConsoleOnUpdate", function MainComponent_Template_app_iframe_part_isConsoleOnUpdate_188_listener($event) {
          return ctx.isConsoleOnUpdate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](190, "div", 87, 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("mousedown", function MainComponent_Template_div_mousedown_190_listener($event) {
          return ctx.onGutterCustomMousedown($event, 2);
        })("touchstart", function MainComponent_Template_div_touchstart_190_listener($event) {
          return ctx.onGutterCustomMousedown($event, 2);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](192, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](193, "div", 101, 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](195, "app-modal", null, 103)(197, "div", 104)(198, "button", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_button_click_198_listener() {
          return ctx.validateRessources();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](199, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](200, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](201, "Fiddle resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](202, "button", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MainComponent_Template_button_click_202_listener() {
          return ctx.hideModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](203, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](204, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](205, "div", 108)(206, "app-ressources", 109, 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("hidemodal", function MainComponent_Template_app_ressources_hidemodal_206_listener() {
          return ctx.hideModal();
        })("validate", function MainComponent_Template_app_ressources_validate_206_listener($event) {
          return ctx.onRessourcesValidate($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](208, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("href", ctx.getHomeUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](120, _c20, ctx.isFiddleThemeDark() ? "none" : "block"))("src", "assets/logo.png", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](122, _c20, !ctx.isFiddleThemeDark() ? "none" : "block"))("src", "assets/logo_dark.png", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.fiddleTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("min", 0)("ngModel", ctx.iframeWidth)("disabled", ctx.isFiddleWidthInputDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("min", 0)("ngModel", ctx.iframeHeight)("disabled", ctx.isFiddleHeightInputDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Turn on fullscreen view");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Stretch view vertically");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Stretch view horizontally");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", ctx.isFiddleThemeDark() ? "Daylight theme" : "Night theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isFiddleThemeDark());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isFiddleThemeDark());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](124, _c21, ctx.isLayoutsListShown, !ctx.isLayoutsListShown));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](127, _c22, ctx.layout === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](129, _c22, ctx.layout === 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](131, _c22, ctx.layout === 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](133, _c22, ctx.layout === 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", "layout-type-" + ctx.layout)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](135, _c23, ctx.isIframeFullScreen));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](137, _c22, ctx.showHtml));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](139, _c22, ctx.showCss));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](141, _c22, ctx.showJs));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](143, _c22, ctx.showResult));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("direction", ctx.getLayoutInfos("outerAsSplitDirection"))("unit", ctx.getLayoutInfos("outerAsSplitUnit"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](145, _c24, !ctx.showResult, !ctx.showHtml && !ctx.showCss && !ctx.showJs, ctx.isFiddleThemeDark()))("gutterSize", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("order", ctx.getLayoutInfos("codePartsAsSplitAreaOrder"))("minSize", ctx.getLayoutInfos("codePartsAsSplitAreaMinSize"))("size", ctx.getLayoutInfos("codePartsAsSplitAreaSize"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](149, _c25, !ctx.showHtml && !ctx.showCss && !ctx.showJs));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("direction", ctx.getLayoutInfos("innerAsSplitDirection"))("unit", ctx.getLayoutInfos("innerAsSplitUnit"))("gutterSize", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("minSize", ctx.getLayoutInfos("emptyAsSplitAreaMinSize"))("size", ctx.getLayoutInfos("emptyAsSplitAreaSize"))("maxSize", ctx.getLayoutInfos("emptyAsSplitAreaMaxSize"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("minSize", ctx.getLayoutInfos("htmlAsSplitAreaMinSize"))("size", ctx.getLayoutInfos("htmlAsSplitAreaSize"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](151, _c26, !ctx.showHtml, ctx.isHtmlFullScreen, ctx.getVerticalModeState("html")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Prettify HTML code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Reset sizes")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](155, _c27, ctx.isHtmlFullScreen ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](157, _c28, ctx.layout == 2 || ctx.layout == 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Stretch HTML to half")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](159, _c27, ctx.isHtmlFullScreen ? "none" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](161, _c29, ctx.getVerticalModeState("html")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.layout == 1 || ctx.layout == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.layout == 2 || ctx.layout == 4) && !ctx.getVerticalModeState("html"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.layout == 2 || ctx.layout == 4) && ctx.getVerticalModeState("html"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Stretch HTML")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](163, _c27, ctx.isHtmlFullScreen ? "none" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](165, _c29, ctx.getVerticalModeState("html")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.layout == 1 || ctx.layout == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.layout == 2 || ctx.layout == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](167, _c30, ctx.isHtmlFullScreen))("title", "Full screen HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("minSize", ctx.getLayoutInfos("cssAsSplitAreaMinSize"))("size", ctx.getLayoutInfos("cssAsSplitAreaSize"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](169, _c26, !ctx.showCss, ctx.isCssFullScreen, ctx.getVerticalModeState("css")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Prettify CSS code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Reset sizes")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](173, _c27, ctx.isCssFullScreen ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](175, _c28, ctx.layout == 2 || ctx.layout == 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Stretch CSS to half")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](177, _c27, ctx.isCssFullScreen ? "none" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](179, _c29, ctx.getVerticalModeState("css")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.layout == 1 || ctx.layout == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.layout == 2 || ctx.layout == 4) && !ctx.getVerticalModeState("css"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.layout == 2 || ctx.layout == 4) && ctx.getVerticalModeState("css"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Stretch CSS")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](181, _c27, ctx.isCssFullScreen ? "none" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](183, _c29, ctx.getVerticalModeState("css")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.layout == 1 || ctx.layout == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.layout == 2 || ctx.layout == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](185, _c30, ctx.isCssFullScreen))("title", "Full screen CSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("minSize", ctx.getLayoutInfos("jsAsSplitAreaMinSize"))("size", ctx.getLayoutInfos("jsAsSplitAreaSize"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](187, _c26, !ctx.showJs, ctx.isJsFullScreen, ctx.getVerticalModeState("js")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Prettify JavaScript code");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Reset sizes")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](191, _c27, ctx.isJsFullScreen ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](193, _c28, ctx.layout == 2 || ctx.layout == 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Stretch JS to half")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](195, _c27, ctx.isJsFullScreen ? "none" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](197, _c29, ctx.getVerticalModeState("js")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.layout == 1 || ctx.layout == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.layout == 2 || ctx.layout == 4) && !ctx.getVerticalModeState("js"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.layout == 2 || ctx.layout == 4) && ctx.getVerticalModeState("js"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Stretch JAVASCRIPT")("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](199, _c27, ctx.isJsFullScreen ? "none" : ""))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](201, _c29, ctx.getVerticalModeState("js")));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.layout == 1 || ctx.layout == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.layout == 2 || ctx.layout == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](203, _c30, ctx.isJsFullScreen))("title", "Full screen JS");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("order", ctx.getLayoutInfos("iframeAsSplitAreaOrder"))("size", ctx.getLayoutInfos("iframeAsSplitAreaSize"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](205, _c31, !ctx.showResult, ctx.layout == 1 || ctx.layout == 3, ctx.layout == 2 || ctx.layout == 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](209, _c32, ctx.isFiddleThemeDark()))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](211, _c33, "0 0 " + ctx.getEmptyAreaSize(1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](213, _c34, ctx.isFiddleThemeDark(), ctx.layout == 1 || ctx.layout == 3, ctx.layout == 2 || ctx.layout == 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](217, _c27, ctx.showIframeOverlay ? "" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.iframeWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.iframeHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx.getIframeOrHeaderStyleObject("header"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", "Turn off fullscreen view");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", ctx.getIframeOrHeaderStyleObject("iframe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](219, _c27, ctx.isCustomGutter1_dragging || ctx.isCustomGutter2_dragging ? "block" : ctx.isIframeFullScreen ? "none" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction5"](221, _c35, !ctx.showResult, ctx.layout == 1, ctx.layout == 2, ctx.layout == 3, ctx.layout == 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction3"](227, _c34, ctx.isFiddleThemeDark(), ctx.layout == 1 || ctx.layout == 3, ctx.layout == 2 || ctx.layout == 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](231, _c32, ctx.isFiddleThemeDark()))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](233, _c33, "0 0 " + ctx.getEmptyAreaSize(2)));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, angular_split__WEBPACK_IMPORTED_MODULE_15__.SplitComponent, angular_split__WEBPACK_IMPORTED_MODULE_15__.SplitAreaDirective, _html_part_html_part_component__WEBPACK_IMPORTED_MODULE_2__.HtmlPartComponent, _css_part_css_part_component__WEBPACK_IMPORTED_MODULE_3__.CssPartComponent, _js_part_js_part_component__WEBPACK_IMPORTED_MODULE_4__.JsPartComponent, _iframe_part_iframe_part_component__WEBPACK_IMPORTED_MODULE_5__.IframePartComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _modal_modal_component__WEBPACK_IMPORTED_MODULE_7__.ModalComponent, _ressources_ressources_component__WEBPACK_IMPORTED_MODULE_8__.RessourcesComponent],
    styles: [".main-container[_ngcontent-%COMP%]{\n    display: flex;\n    width: calc(100vw - 4px);\n    height: calc(100vh - 38px);\n    box-shadow: 0 0 0 1px #bbb;    \n}\n\n#main-header[_ngcontent-%COMP%]{\n    height: 34px;\n    width: calc(100% - 10px);\n    display: flex;\n    justify-content: flex-end;\n    padding-right: 5px;\n    padding-left: 5px;\n    box-shadow: 0 0 0 1px #bbb;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n    \n    \n}\n\n.code-part-title[_ngcontent-%COMP%]{\n    width: 100%;\n    border-bottom: 1px solid #b5b5b5;\n    border-top: 1px solid #b5b5b5;\n    \n    text-align: center;\n    height: 20px;\n    display: flex;\n    align-items: center;\n    padding: 1px 0 1px 5px;\n    \n    font-size: 15px;\n}\n\n\n\n.code-part-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    color: #818181;\n    -webkit-user-select:none;\n            user-select:none;\n    pointer-events: none;\n    font-weight: 500;\n}\n\n.code-part-title-btns-container[_ngcontent-%COMP%]{\n  flex-grow: 1;\n  margin-left: 20px;\n  margin-right: 10px;\n  text-align: right;\n  height: 100%;\n}\n\n.code-part-title-btn[_ngcontent-%COMP%]{\n    cursor: pointer;\n    border: 1px solid #8c8c8c;\n    border-radius: 2px;\n    display: inline-flex;\n    align-items: center;\n    height: 14px;\n    padding: 2px;\n    min-width: 14px;\n    justify-content: center;\n}\n\n.code-part-title-btn[_ngcontent-%COMP%]   .fa-bars.vertical[_ngcontent-%COMP%]{\n    transform: rotate(90deg);\n}\n\n.code-part-title-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n    height: 12px;\n    \n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    -webkit-user-select: none;\n            user-select: none;\n}\n\n.fullscreen-iframe-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .stretch-v-iframe-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .stretch-h-iframe-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.fullscreen-iframe-btn[_ngcontent-%COMP%], .stretch-v-iframe-btn[_ngcontent-%COMP%], .stretch-h-iframe-btn[_ngcontent-%COMP%] {\n    margin-left: 3px;\n    margin-right: 3px;\n    font-size: 14px;\n    padding: 1px 4px;\n    height: 28px;\n}\n\n.fullscreen-iframe-btn-secondary[_ngcontent-%COMP%]{\n    height: 21px;\n    padding: 0px 3px;\n    margin: 0;\n}\n\n.fullscreen-iframe-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .stretch-v-iframe-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%], .stretch-h-iframe-btn[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{\n    font-size: 19px;\n}\n\n.as-split-area[class][_ngcontent-%COMP%] {\n    \n    overflow-y: hidden;\n    overflow-x:hidden;\n}\n\n.code-component-container[_ngcontent-%COMP%]:not(.vertical-title-mode)   .code-part-title-btn[_ngcontent-%COMP%]:nth-last-child(n+2){\n    margin-right: 10px;\n}\n\n@media screen and (min-width:818px) and (min-height:581px){\n\n    .vertical-title-mode[_ngcontent-%COMP%]   .code-part-title-btn[_ngcontent-%COMP%]:not(:last-child) {\n        margin-bottom: 10px;\n    }\n    \n    .code-component-container.vertical-title-mode.fullscreen[_ngcontent-%COMP%]   .code-part-title-btn[_ngcontent-%COMP%]:nth-last-child(n+2){\n        margin-right: 10px;\n    }\n    \n    .code-component-container.vertical-title-mode[_ngcontent-%COMP%]:not(.fullscreen)   .code-part-title-btn[_ngcontent-%COMP%]{\n        width: calc(100% - 2px);\n        padding-left: 0;\n        padding-right: 0;\n        justify-content: center;\n    }\n}\n\n#code-parts[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    box-shadow: 0 0 0 1px #bbb;\n    position:relative;\n}\n\n#code-parts[_ngcontent-%COMP%]    > .code-component-container[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 33.3%;\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    background-color: #FFF;\n    min-height: 32px;\n}\n\n#code-parts[_ngcontent-%COMP%]    > .code-component-container.has-resizer[_ngcontent-%COMP%]{\n    padding-top:5px;\n}\n\n#code-parts[_ngcontent-%COMP%]    > .code-component-container[_ngcontent-%COMP%]    > .code-component[_ngcontent-%COMP%]{\n    \n    height:auto;\n    flex-grow: 1;\n    \n    position: relative;\n} \n\n.main-container[_ngcontent-%COMP%]{\n    position: relative;\n}\n\n.main-container.layout-type-3[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n}\n\n.main-resizer-floor[_ngcontent-%COMP%]{\n    position:absolute;\n    width:100%;\n    height:100%;\n    z-index:100;\n    left:0;\n    top:0;\n}\n#main-resizer[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #b5b5b5;\n    border:none;\n    z-index:101;\n}\n#main-resizer.layout-type-1[_ngcontent-%COMP%], #main-resizer.layout-type-3[_ngcontent-%COMP%]{\n    width: 12px;\n    cursor: col-resize;\n    height:100%;\n}\n\n\n\n#main-resizer[_ngcontent-%COMP%]:hover {\n    background-color: #afafaf;\n}\n\n\n#code-parts[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:first-child) {\n    border-top:none;\n}\n\napp-iframe-part[_ngcontent-%COMP%]{\n    display:flex;\n    flex-direction:column;\n    flex-grow:1;\n    height: 100%;\n    width: 100%;\n    \n}\n\nas-split-area.as-split-area-iframe.as-split-area[_ngcontent-%COMP%] {\n    display: flex;\n}\n\nas-split-area.as-split-area-iframe.is-vertical[_ngcontent-%COMP%] {\n    flex-direction: column;\n}\n\nas-split-area.as-split-area-iframe.is-horizontal[_ngcontent-%COMP%] {\n    flex-direction: row;\n}\n\n.iframe-area[_ngcontent-%COMP%]{\n    min-height: 0;\n    position: relative;\n}\n\n#code-parts-title-mobile[_ngcontent-%COMP%]{\n    display:none;\n    height: 35px;\n}\n\n#code-parts-title-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    border:1px solid #8b8b8b;\n    border-radius:2px;\n    font-size: 0.85rem;\n    padding: 3px 0px 3px 0px !important;\n    min-width:54px;\n    text-align:center;\n    cursor:pointer;\n}\n\n#code-parts-title-mobile[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    font-weight: 600;\n}\n\n#code-parts-title-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child) {\n    margin-left:3px;\n}\n\n#code-parts-title-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right:3px;\n}\n\n.share-code-btn[_ngcontent-%COMP%], .ressources-code-btn[_ngcontent-%COMP%], .themes-btn[_ngcontent-%COMP%], .console-btn[_ngcontent-%COMP%]\n{\n    cursor: pointer;\n    display: block;\n    text-align: center;\n    border-width: 1px;\n    border-style: solid;\n    border-color: rgb(118, 118, 118);\n    -webkit-user-select: none;\n            user-select: none;\n    color:rgb(0,0,0);\n    outline: none;\n}\n\n.share-code-btn[_ngcontent-%COMP%], .ressources-code-btn[_ngcontent-%COMP%], .console-btn[_ngcontent-%COMP%]{\n    padding: 1px 6px;\n}\n\n.themes-btn[_ngcontent-%COMP%]{\n    font-size: 24px;\n    padding: 1px 3px;\n}\n\n.themes-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    font-weight: bold;\n}\n\n.share-code-btn[_ngcontent-%COMP%]:active, .ressources-code-btn[_ngcontent-%COMP%]:active, .themes-btn[_ngcontent-%COMP%]:active, .fullscreen-iframe-btn[_ngcontent-%COMP%]:not(.fullscreen-iframe-btn-secondary):active, .console-btn[_ngcontent-%COMP%]:active, .stretch-v-iframe-btn[_ngcontent-%COMP%]:active, .stretch-h-iframe-btn[_ngcontent-%COMP%]:active{\n    padding-top: 4px !important;\n}\n.share-code-btn[_ngcontent-%COMP%]:hover, .ressources-code-btn[_ngcontent-%COMP%]:hover, .themes-btn[_ngcontent-%COMP%]:hover, .console-btn[_ngcontent-%COMP%]:hover{\n    background-color: #FFFFFF;\n}\n\n.share-code-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .ressources-code-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .themes-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .console-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    display:block;\n}\n\n.header-btns-container[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.header-btns-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    margin-left:3px;\n    margin-right:3px;\n    padding: 1px 4px;\n}\n  \n.header-btns-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:last-child {\n    margin-right:0px;\n}\n\n.header-btns-container[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:first-child {\n    margin-left:0px;\n}\n\n.header-btns-container[_ngcontent-%COMP%]    > .ressources-code-btn[_ngcontent-%COMP%], .header-btns-container[_ngcontent-%COMP%]    > .layouts-list-container[_ngcontent-%COMP%], .header-btns-container[_ngcontent-%COMP%]    > .share-code-btn[_ngcontent-%COMP%], .header-btns-container[_ngcontent-%COMP%]    > .themes-btn[_ngcontent-%COMP%], .header-btns-container[_ngcontent-%COMP%]    > .console-btn[_ngcontent-%COMP%]{\n    height:30px;\n}\n\n.header-btns-container[_ngcontent-%COMP%]    > .themes-btn[_ngcontent-%COMP%]{\n    margin-right:6px;\n    padding: 0 6px;\n}\n\n.themes-btn-container[_ngcontent-%COMP%]{\n    margin-right: 3px;\n    position: relative;\n}\n\n.paypal-btn-container[_ngcontent-%COMP%] {\n    height: 30px;\n}\n\n.paypal-btn-container[_ngcontent-%COMP%]   div#donate-button[_ngcontent-%COMP%] {\n    position: relative;\n    font-size: 14px;\n    width: 35px;\n    height: 28px;\n\n    background-image: url(/assets/paypal-icon.png);\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: auto 100%;\n}\n\n  div#donate-button img{\n    opacity: 0;\n}\n\ni.fa.fa-sort-desc[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 2px;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 10px;\n    display: flex;\n    align-items: center;\n    right:1px;\n}\n\ni.fa.fa-sort-asc[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    bottom: 0px;\n}\n\n  .paypal-btn-container #donate-button img {\n    position: absolute;\n    left: 0px;\n    width: 100%;\n    height: 100%;\n    top: 0;\n}\n\n.paypal-btn-container[_ngcontent-%COMP%]   .btn.paypal-btn[_ngcontent-%COMP%]   button.layouts-btn[_ngcontent-%COMP%] {\n    position: relative;\n    padding-right: 13px;\n    display: flex;\n    align-items: center;\n}\n\n.paypal-btn-container[_ngcontent-%COMP%]   ul.donations-menu[_ngcontent-%COMP%], .themes-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    top: calc(100% + 7px);\n    list-style: none;\n    margin: 0;\n    width: 143px;\n    border-radius: 2px;\n    background-color: #FFFFFF;\n    \n    font-size: 20px;\n    \n    overflow: hidden;\n\n    height: 159px;\n    padding: 8px;\n    box-shadow: none;\n    opacity:0;\n    pointer-events: none;\n    z-index: -1;\n}\n\n.themes-menu[_ngcontent-%COMP%]{\n    width:200px;\n}\n\n.themes-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 1rem;\n}\n\n.paypal-btn-container[_ngcontent-%COMP%]   ul.donations-menu.shown[_ngcontent-%COMP%], .themes-menu.shown[_ngcontent-%COMP%] {\n    height:159px;\n    padding: 8px;\n    box-shadow: 0px 0px 4px 2px #8b8b8b;\n    opacity: 1;\n    pointer-events: all;\n    z-index: 99;\n    overflow:auto;\n}\n\n.paypal-btn-container[_ngcontent-%COMP%]   ul.donations-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child    ~ li[_ngcontent-%COMP%], .themes-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-child    ~ li[_ngcontent-%COMP%] {\n    border-top: 1px solid #8b8b8b5e;\n}\n\n.paypal-btn-container[_ngcontent-%COMP%]   ul.donations-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], .themes-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    padding: 8px 4px;\n    cursor: pointer;\n    \n}\n\n.paypal-btn-container[_ngcontent-%COMP%]   ul.donations-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n    background-color: #8b8b8b26;\n    font-weight: 600;\n}\n\n.layouts-list-container[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 16px;\n    box-sizing: border-box;\n    cursor: pointer;\n    -webkit-user-select: none;\n            user-select: none;\n    outline: none;\n    padding:1px 6px;\n\n    position: relative;\n    padding: 1px 0px;\n    border: none;\n}\n\n.layouts-list-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\n    display: flex;\n    align-items: center;\n    position: relative;\n    padding-right: 14px;   \n}\n\n.layouts-list-container[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%]{\n    position: absolute;\n    right: 0;\n    bottom: 7px;\n}\n\n.shown[_ngcontent-%COMP%]   i.fa-sort-asc[_ngcontent-%COMP%]{\n    bottom: 0px;\n}\n\n.layout[_ngcontent-%COMP%]{\n    cursor: pointer;\n}\n\n.layout[_ngcontent-%COMP%]:hover{\n    background-color: rgba(139,139,139,0.2);\n}\n\n.layout.active[_ngcontent-%COMP%] {\n    background-color:#8b8b8b;\n    border-color: #FFFFFF;\n    box-shadow: 0 0 0px 1px #8b8b8b;\n}\n\n.layout.active[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child{\n    outline: 2px solid #FFFFFF;\n}\n\n.layout.active[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%]{\n    outline: 1px solid #FFFFFF;\n}\n\n.layout-1[_ngcontent-%COMP%] {\n    border: 2px solid #8b8b8b;\n    width: 65px;\n    height: 41px;\n    display: flex;\n    margin-right: 10px;\n}\n\n.layout-1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    width: 27%;\n    height: 100%;\n    outline: 2px solid #8b8b8b;\n}\n\n.layout-1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 33.5%;\n    outline: 1px solid #8b8b8b;\n}\n\n.layout-1[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    flex-grow: 1;\n    height: 100%;\n}\n\n.layout-2[_ngcontent-%COMP%] {\n    border: 2px solid #8b8b8b;\n    width: 65px;\n    height: 41px;\n    display: flex;\n    flex-direction:column;\n    margin-right: 10px;\n}\n\n.layout-2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    height: 35%;\n    width: 100%;\n    outline: 2px solid #8b8b8b;\n    display: flex;\n}\n\n.layout-2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 33.5%;\n    outline: 1px solid #8b8b8b;\n}\n\n.layout-2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    flex-grow: 1;\n}\n\n.layout-3[_ngcontent-%COMP%] {\n    border: 2px solid #8b8b8b;\n    width: 65px;\n    height: 41px;\n    display: flex;\n    flex-direction:row-reverse;\n    margin-right: 10px;\n}\n\n.layout-3[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    width: 27%;\n    height: 100%;\n    outline: 2px solid #8b8b8b;\n}\n\n.layout-3[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 33.5%;\n    outline: 1px solid #8b8b8b;\n}\n\n.layout-3[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    flex-grow: 1;\n    height: 100%;\n}\n\n.layout-4[_ngcontent-%COMP%] {\n    border: 2px solid #8b8b8b;\n    width: 65px;\n    height: 41px;\n    display: flex;\n    flex-direction:column-reverse;\n}\n\n.layout-4[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    height: 35%;\n    width: 100%;\n    outline: 2px solid #8b8b8b;\n    display: flex;\n}\n\n.layout-4[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > div[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 33.5%;\n    outline: 1px solid #8b8b8b;\n}\n\n.layout-4[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    flex-grow: 1;\n}\n\n\n.layouts-list[_ngcontent-%COMP%]{\n    position: absolute;\n    height: 44px;\n    padding:8px;\n    overflow: hidden;\n    \n    top: calc(100% + 8px);\n    background-color: #FFFFFF;\n    box-shadow: 0px 0px 4px 2px #8b8b8b;\n    z-index: 102;\n    opacity: 0;\n    pointer-events: none;\n    cursor: default;\n    display: flex;\n    right:0px;\n}\n\n@media screen and (min-width:818px) and (min-height:581px){\n    .prettify-mobile-code[_ngcontent-%COMP%]{\n        display:none;\n    }\n\n    .code-component-container.vertical-title-mode[_ngcontent-%COMP%]:not(.fullscreen) {\n        flex-direction: row;\n        border-top:2px solid #b5b5b5;\n    }\n\n    .code-component-container.vertical-title-mode[_ngcontent-%COMP%]:not(.fullscreen)    > .code-part-title[_ngcontent-%COMP%] {\n        flex-direction: column-reverse;\n        height: 100%;\n        width: 20px;\n        padding: 1px 2px 0 2px;\n        border-top: none;\n        border-bottom: none;\n        border-right: 1px solid #b5b5b5;\n    }\n\n    .code-component-container.vertical-title-mode[_ngcontent-%COMP%]:not(.fullscreen)    > app-html-part.code-component[_ngcontent-%COMP%] {\n        width: calc(100% - 30px);\n    }\n\n    .code-component-container.vertical-title-mode[_ngcontent-%COMP%]:not(.fullscreen)    > .code-part-title[_ngcontent-%COMP%]    > .code-part-title-btns-container[_ngcontent-%COMP%] {\n        margin: 0px;\n        height: auto;\n        flex: none;\n    }\n\n    .code-component-container.vertical-title-mode[_ngcontent-%COMP%]:not(.fullscreen)    > .code-part-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n        writing-mode: vertical-lr;\n        margin-bottom: 10px;\n        flex-grow: 1;\n        text-align: left;\n        padding-top: 10px;\n    }\n\n\n    .code-part-title-btn[_ngcontent-%COMP%]   .fa-arrows-h-vertical[_ngcontent-%COMP%] {\n        flex-direction: column;\n        height: auto;\n    }\n\n    .code-part-title-btn[_ngcontent-%COMP%]   .fa-arrows-v[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .code-part-title-btn[_ngcontent-%COMP%]   .fa-arrows-h[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        font-weight: bold;\n    }\n    \n    .code-part-title-btn.vertical-title-mode[_ngcontent-%COMP%] {\n        height: auto;\n    }\n    \n    .code-part-title-btn[_ngcontent-%COMP%]   .fa-arrows-h-vertical[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n        width: 100%;\n    }\n}\n\n.fiddle-title[_ngcontent-%COMP%]   .fiddle-input[_ngcontent-%COMP%]{\n    min-width: 200px;\n    font-size: 14px;\n\n    \n}\n\n.app-loader[_ngcontent-%COMP%]{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.fiddle-title[_ngcontent-%COMP%]{\n    margin-left: 60px;\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n}\n\n.fiddle-title[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\n    margin-right:5px;\n}\n\n.fiddle-size[_ngcontent-%COMP%]{\n    margin-left: 7px;\n}\n\n.fiddle-size[_ngcontent-%COMP%]   span.x[_ngcontent-%COMP%]{\n    margin: 0 3px;\n}\n\n.fiddle-size-hack.fiddle-size[_ngcontent-%COMP%]{\n    margin: 0px;\n    opacity: 0.9;\n    color: #c9c9c9;\n    background: #000000;\n    padding: 5px;\n    border-radius: 3px;\n    box-shadow: 0 0 15px 4px #000000;\n    width:auto;\n}\n\n.fiddle-size-hack[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    -webkit-user-select: none;\n            user-select: none;\n}\n\n.fiddle-title[_ngcontent-%COMP%]   .fiddle-size[_ngcontent-%COMP%]   .width[_ngcontent-%COMP%], .fiddle-title[_ngcontent-%COMP%]   .fiddle-size[_ngcontent-%COMP%]   .height[_ngcontent-%COMP%] {\n    font-weight: 600;\n    -moz-appearance:textfield;\n    width: 36px;\n    text-align:center;\n}\n\n.fiddle-title[_ngcontent-%COMP%]   .fiddle-size[_ngcontent-%COMP%]   input.width[_ngcontent-%COMP%]::-webkit-outer-spin-button, .fiddle-title[_ngcontent-%COMP%]   .fiddle-size[_ngcontent-%COMP%]   input.width[_ngcontent-%COMP%]::-webkit-inner-spin-button, .fiddle-title[_ngcontent-%COMP%]   .fiddle-size[_ngcontent-%COMP%]   input.height[_ngcontent-%COMP%]::-webkit-outer-spin-button, .fiddle-title[_ngcontent-%COMP%]   .fiddle-size[_ngcontent-%COMP%]   input.height[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n}\n\n.fiddle-logo[_ngcontent-%COMP%]{\n    width: 50px;\n    position: absolute;\n    left: 4px;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 35px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n.fiddle-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    height: calc(100% - 10px);\n    max-width: 100%;\n}\n\n@media screen and (max-width:550px){\n    .layouts-list[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-rows: auto auto;\n        grid-template-columns: auto auto;\n        align-items: center;\n        justify-items: center;\n    }\n\n    .layouts-list[class][_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]{\n        margin:0px;\n    }\n    \n    .layouts-list[class][_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]:nth-child(2n+1){\n        margin-right:10px;\n    }\n\n    .paypal-btn-container[_ngcontent-%COMP%]   .btn.paypal-btn[_ngcontent-%COMP%]   button.layouts-btn[_ngcontent-%COMP%]{\n        font-size: 0px;\n        position:static;\n    }\n    \n    .paypal-btn-container[_ngcontent-%COMP%]   .btn.paypal-btn[_ngcontent-%COMP%]   button.layouts-btn[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%]{\n        font-size: 16px;\n    }\n\n    .paypal-btn-container[_ngcontent-%COMP%]   .btn.paypal-btn[_ngcontent-%COMP%] {\n        padding-left: 18px !important;\n        padding-right: 14px;\n    }\n}\n\n.layouts-list-container.shown[_ngcontent-%COMP%]   .layouts-list[_ngcontent-%COMP%] {\n    padding: 8px;\n    opacity: 1;\n    pointer-events: all;\n}\n\n.hidden[_ngcontent-%COMP%]   .fa.fa-sort-asc[_ngcontent-%COMP%]{\n    display: none;\n}\n\n.shown[_ngcontent-%COMP%]   .fa.fa-sort-desc[_ngcontent-%COMP%]{\n    display: none;\n}\n\n[_nghost-%COMP%]     #code-parts .as-split-gutter:first-of-type:not(:last-of-type){\n    display: none !important;\n}\n\n.as-split-gutter-custom[_ngcontent-%COMP%]{\n    flex:0 0 5px;\n}\n\n.as-split-gutter-custom.is-horizontal[_ngcontent-%COMP%]{\n    height:100%;\n    cursor:col-resize;\n}\n\n.as-split-gutter-custom.is-vertical[_ngcontent-%COMP%]{\n    width:100%;\n    cursor:row-resize;\n}\n\n.iframe-overlay-for-drop[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    background: transparent;\n}\n\n.iframe-area[_ngcontent-%COMP%]:hover   .iframe-overlay-for-drop[_ngcontent-%COMP%]{\n    display: none;\n}\n\n.empty-area[class][_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0) repeating-linear-gradient(45deg,  transparent 15px, rgba(204, 204, 204, 0.38) 30px) repeat scroll 0% 0%;\n}\n\n.empty-area.is-dark-mode[class][_ngcontent-%COMP%]{\n    background: rgba(0, 0, 0, 0) repeating-linear-gradient(45deg,  transparent 15px,rgba(204, 204, 204, 0.2) 30px) repeat scroll 0% 0%;\n}\n\n.as-split-gutter-custom[_ngcontent-%COMP%]    > .as-split-gutter-icon-custom[_ngcontent-%COMP%]{\n    background-position: 50%;\n    background-repeat: no-repeat;\n    height: 100%;\n    width: 100%;\n}\n\n[_nghost-%COMP%]     .as-split-outer[class] > .as-split-gutter[class], [_nghost-%COMP%]     .as-split-outer[class] > .as-split-gutter[class], .as-split-gutter-custom[_ngcontent-%COMP%]{\n    border-radius: 10px;\n}\n\n[_nghost-%COMP%]     .as-split-outer:not(.is-dark-mode)[class] > .as-split-gutter[class], [_nghost-%COMP%]     .as-split-outer:not(.is-dark-mode)[class] > .as-split-gutter[class], .as-split-gutter-custom[_ngcontent-%COMP%]{\n    box-shadow: inset 0px 0px 0px 1px #00000024;\n}\n\n\n[_nghost-%COMP%]     .as-split-outer.is-dark-mode[class] > .as-split-gutter[class], [_nghost-%COMP%]     .as-split-outer.is-dark-mode[class] > .as-split-gutter[class], .as-split-gutter-custom.is-dark-mode[_ngcontent-%COMP%]{\n    box-shadow: inset 0px 0px 0px 1px #FFFFFF24;\n}\n\n[_nghost-%COMP%]     .as-split-outer:not(.is-dark-mode)[class] .as-horizontal[class] > .as-split-gutter[class] > .as-split-gutter-icon[class], [_nghost-%COMP%]     .as-split-outer:not(.is-dark-mode)[class].as-horizontal[class] > .as-split-gutter[class] > .as-split-gutter-icon[class], .as-split-gutter-custom.is-horizontal[_ngcontent-%COMP%]    > .as-split-gutter-icon-custom[_ngcontent-%COMP%]{\n    background-image: url(data:image/png;base64,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dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDo2MmIyMGQ2Yy1lNTA3LTRjNzEtODJhMi00M2FhZTJhMGJlMjkiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Zjk1ZDlkMDQtOTFjYi00MGRkLTk5NTMtZDdmZTY3NjlhMDExIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjBlMWVkYzMtNWU3ZS00YzE3LTgxODAtNTI3NzkzM2VkZmJhIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJMaW51eCIKICAgR0lNUDpUaW1lU3RhbXA9IjE2MjgxMjIwNDQ4Mjg2MjIiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4yMiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIj4KICAgPGlwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICA8aXB0Y0V4dDpMb2NhdGlvblNob3duPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25TaG93bj4KICAgPGlwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICA8aXB0Y0V4dDpSZWdpc3RyeUlkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6UmVnaXN0cnlJZD4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGY5MmM0MjMtYzI2Ny00NjU5LWFkZDEtOTFiZDE4YjQ0MmRlIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKExpbnV4KSIKICAgICAgc3RFdnQ6d2hlbj0iKzAxOjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICAgPHBsdXM6SW1hZ2VTdXBwbGllcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlU3VwcGxpZXI+CiAgIDxwbHVzOkltYWdlQ3JlYXRvcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlQ3JlYXRvcj4KICAgPHBsdXM6Q29weXJpZ2h0T3duZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpDb3B5cmlnaHRPd25lcj4KICAgPHBsdXM6TGljZW5zb3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpMaWNlbnNvcj4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pp5dyfsAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflCAUABxjR3pXzAAAAI0lEQVQoz2N08Qj/z8DAwLBnx0pGGJuJgSLAOGrmqJl4zQQALkIvKbxhHpAAAAAASUVORK5CYII=)\n}\n\n[_nghost-%COMP%]     .as-split-outer:not(.is-dark-mode)[class] .as-vertical[class] > .as-split-gutter[class] > .as-split-gutter-icon[class], [_nghost-%COMP%]     .as-split-outer:not(.is-dark-mode)[class].as-vertical[class] > .as-split-gutter[class] > .as-split-gutter-icon[class], .as-split-gutter-custom.is-vertical[_ngcontent-%COMP%]    > .as-split-gutter-icon-custom[_ngcontent-%COMP%]{\n    background-image: url(data:image/png;base64,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b20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6NmJiZjZlZGMtN2M3My00ODYzLWJhM2UtNDFlMjE2Mzk0MWE0IgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZkOWY3Yzc3LTdjYjktNGIyOC05NWU5LTM0NTVlMDg3MTRhNiIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjViMDcwNDBmLTkxYmEtNGQ1YS1iMTIwLTg0OWU1MjRmMDA5YSIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iTGludXgiCiAgIEdJTVA6VGltZVN0YW1wPSIxNjI4MTE4NTcyOTc3NjUzIgogICBHSU1QOlZlcnNpb249IjIuMTAuMjIiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCI+CiAgIDxpcHRjRXh0OkxvY2F0aW9uQ3JlYXRlZD4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OkxvY2F0aW9uQ3JlYXRlZD4KICAgPGlwdGNFeHQ6TG9jYXRpb25TaG93bj4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OkxvY2F0aW9uU2hvd24+CiAgIDxpcHRjRXh0OkFydHdvcmtPck9iamVjdD4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OkFydHdvcmtPck9iamVjdD4KICAgPGlwdGNFeHQ6UmVnaXN0cnlJZD4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OlJlZ2lzdHJ5SWQ+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmRiMGMxYjU1LTRkZWItNDA3Mi04NjRhLWMyNDIxYzA3NzVmNCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChMaW51eCkiCiAgICAgIHN0RXZ0OndoZW49IiswMTowMCIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgIDxwbHVzOkltYWdlU3VwcGxpZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZVN1cHBsaWVyPgogICA8cGx1czpJbWFnZUNyZWF0b3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZUNyZWF0b3I+CiAgIDxwbHVzOkNvcHlyaWdodE93bmVyPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6Q29weXJpZ2h0T3duZXI+CiAgIDxwbHVzOkxpY2Vuc29yPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6TGljZW5zb3I+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz7J0IT+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QgEFwkgxorScwAAACRJREFUKM9jdPEI/8/AwMCwZ8dKRgYGBgZ68ZkYRhpgHHFBDQBDlTvLo66BTwAAAABJRU5ErkJggg==)\n}\n\n.as-split-gutter-custom.is-vertical.is-dark-mode[_ngcontent-%COMP%]    > .as-split-gutter-icon-custom[_ngcontent-%COMP%]{\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC\");\n}\n\n.as-split-gutter-custom.is-horizontal.is-dark-mode[_ngcontent-%COMP%]    > .as-split-gutter-icon-custom[_ngcontent-%COMP%]{\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==\");\n}\n\n.iframe-overlay[_ngcontent-%COMP%]{\n    background: rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 35px;\n    z-index: 2;\n}\n\n[hidden][_ngcontent-%COMP%]{\n    display:none;\n}\n\nas-split-area[_ngcontent-%COMP%]    > app-iframe-part[_ngcontent-%COMP%], as-split-area[_ngcontent-%COMP%]    > app-html-part[_ngcontent-%COMP%], as-split-area[_ngcontent-%COMP%]    > app-css-part[_ngcontent-%COMP%], as-split-area[_ngcontent-%COMP%]    > app-js-part[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n}\n\n.main-container.layout-type-1[_ngcontent-%COMP%]   #code-parts[_ngcontent-%COMP%] {\n    border-right: 1px solid #bbb;\n}\n\nas-split-area.code-component-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n\n\n@media screen and (min-width:818px) and (min-height:581px){\n    [_nghost-%COMP%]     app-iframe-part.layout-type-1{\n        align-items: flex-end;\n    }\n    \n    [_nghost-%COMP%]     app-iframe-part.layout-type-3{\n        align-items: flex-start;\n    }\n\n    .main-container.full-screen-iframe[_ngcontent-%COMP%]   .iframe-area[class][_ngcontent-%COMP%] {\n        position: fixed;\n        flex: none !important;\n        left: 0;\n        top: 23px;\n        z-index: 99;\n        width: 100%;\n        height: calc(100% - 23px);\n    }\n    \n    .main-container.full-screen-iframe[_ngcontent-%COMP%]   .fullscreen-iframe-header[_ngcontent-%COMP%] {\n        position: fixed;\n        height: 22px;\n        width: 100%;\n        z-index: 99;\n        top: 0;\n        left: 0;\n        display:flex;\n        align-items: center;\n    }\n    \n    .fiddle-size[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .form-control.fiddle-input[_ngcontent-%COMP%] {\n      flex: 0 0 auto;\n    }\n\n    .fiddle-title[class][_ngcontent-%COMP%]   .fiddle-input[class][_ngcontent-%COMP%]{\n      font-size: 14px;\n      min-width: auto;\n      max-width: 200px;\n      max-width: calc(100% - 94px - 24px - 12px - 4px);\n    }\n\n    .logo-title-container[_ngcontent-%COMP%] {\n      max-width: calc(50% - 44px);\n      \n    }\n\n    .fiddle-title[_ngcontent-%COMP%] {\n      max-width: calc(100% - 60px);\n    }\n\n    .fiddle-size[_ngcontent-%COMP%] {\n      width: 94px;\n    }\n\n    .fullscreen-iframe-btn.btn[_ngcontent-%COMP%] {\n      width: 26px;\n    }\n    \n}\n\n[_nghost-%COMP%]     .monaco-editor .monaco-hover {\n    left: 0px !important;\n    z-index: 102 !important;\n    max-width: 100% !important;\n    overflow: auto;\n}\n\n[_nghost-%COMP%]     .monaco-scrollable-element{\n    min-width: min-content;\n}\n\n[_nghost-%COMP%]     .monaco-editor .parameter-hints-widget{\n    z-index: 103 !important;\n    left: 0px !important;\n}\n\n@media (min-width:818px) {\n    #code-parts[_ngcontent-%COMP%]   .code-component-container.fullscreen[_ngcontent-%COMP%] {\n        position: fixed !important;\n        left: 0 !important;\n        top: 0 !important;\n        width: 100% !important;\n        height: 100% !important;\n        z-index: 125 !important;\n        padding:0px;\n    }\n    #code-parts[_ngcontent-%COMP%]    > .code-part-title[_ngcontent-%COMP%]{\n        border-top: 1px solid #b5b5b5;\n    }\n}\n\n@media (max-width:817px), (max-height:580px) {  \n\n    .hide-mobile[_ngcontent-%COMP%]{\n        display: none !important;\n    }\n\n    .iframe-area[_ngcontent-%COMP%] {\n        flex: none !important;\n        height: 100%;\n        width: 100%;\n    }\n    \n    [_nghost-%COMP%]     as-split[class] > .as-split-gutter[class], .as-split-gutter-custom[_ngcontent-%COMP%]{\n        display:none;\n    }\n\n    #main-header[_ngcontent-%COMP%]{\n        padding-right: 0px;\n        padding-left: 0px;\n        width:100%;\n        justify-content: center;\n        \n        flex-direction: column;\n        height: 62px;\n        padding: 3px 0 5px 0;\n    }\n    \n    #code-parts-title-mobile[_ngcontent-%COMP%]{\n        display:flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    #main-resizer[_ngcontent-%COMP%]{\n        display:none;\n    }\n\n    .code-part-title-btn[_ngcontent-%COMP%], .fullscreen-iframe-btn[_ngcontent-%COMP%], .stretch-v-iframe-btn[_ngcontent-%COMP%], .stretch-h-iframe-btn[_ngcontent-%COMP%]{\n        display: none;\n    }\n\n    .layouts-list-container[_ngcontent-%COMP%]{\n        \n        display:none;\n    }\n\n    .layouts-list[_ngcontent-%COMP%]{\n        display:none;\n    }\n\n    .main-container[_ngcontent-%COMP%]{\n        width:100%;\n        height: calc(100vh - 71px);\n        flex-direction:column !important;\n    }\n\n    .fiddle-size[_ngcontent-%COMP%]{\n        display: none;\n    }\n\n    .code-part-title[_ngcontent-%COMP%]{\n        display:none\n    }\n\n    .code-component[_ngcontent-%COMP%] {\n        border-top: 1px solid #b5b5b5;\n    }\n\n    .as-split-outer[_ngcontent-%COMP%]{\n        display:flex;\n        flex-direction: column !important;\n    }\n\n    .as-split-gutter[_ngcontent-%COMP%] {\n        display: none !important;\n    }\n\n    .as-split-gutter-custom[_ngcontent-%COMP%]{\n        display: none;\n    }\n\n    as-split-area.as-split-area-code-parts[_ngcontent-%COMP%] {\n        width:100% !important;\n        height:50% !important;\n        flex:none !important;\n        order:0 !important;\n    }\n\n    as-split-area.as-split-area-iframe[_ngcontent-%COMP%] {\n        width:100% !important;\n        height:50% !important;\n        flex:none !important;\n    }\n\n    .as-split-outer.no-result-mobile[_ngcontent-%COMP%]    > .as-split-area-code-parts[_ngcontent-%COMP%], .as-split-outer.no-result-mobile[_ngcontent-%COMP%]    > .as-split-area-iframe[_ngcontent-%COMP%]{\n        height:100% !important;\n    }\n\n    .as-split-outer.no-code-mobile[_ngcontent-%COMP%]    > .as-split-area-code-parts[_ngcontent-%COMP%], .as-split-outer.no-code-mobile[_ngcontent-%COMP%]    > .as-split-area-iframe[_ngcontent-%COMP%]{\n        height:100% !important;\n    }\n\n    as-split-area.code-component-container[_ngcontent-%COMP%]{\n        width:100%;\n        height:100%;\n        flex: none !important;\n    }\n\n    .app-loader[_ngcontent-%COMP%]{\n        transform: none;\n        left: auto;\n        top: 4px;\n        right: 4px;\n    }\n\n    .fiddle-title[_ngcontent-%COMP%]{\n        margin-left: 0px;\n        margin-bottom: 5px;\n    }\n\n    .fiddle-logo[_ngcontent-%COMP%]{\n        left: 4px;\n        top: 0px;\n        transform: none;\n        width: 45px;\n    }\n\n    \n    \n    .as-split-area-iframe[_ngcontent-%COMP%]    > .empty-area[_ngcontent-%COMP%]{\n        display: none;\n    }\n    \n    .as-split-gutter-custom[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .main-container.full-screen-iframe[_ngcontent-%COMP%]   .fullscreen-iframe-header[_ngcontent-%COMP%]{\n        display: none;\n    }\n\n    .iframe-overlay-for-drop[_ngcontent-%COMP%]{\n        display:none;\n    }\n\n}\n\n@media screen and (max-width:400px){\n    .header-btns-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child){\n        margin-right:3px;\n        margin-left:0px;\n        padding: 1px 2px;\n    }\n\n    .header-btns-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child{\n        margin-left:3px;\n        padding: 1px 2px;\n    }\n\n    .logo-title-container[_ngcontent-%COMP%] {\n        display: flex;\n    }\n    \n    .fiddle-logo[_ngcontent-%COMP%] {\n        position: static;\n        margin-right: 10px;\n    }\n}\n\napp-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    padding: 2px 4px;\n}\napp-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\n    padding: 2px 4px;\n}\n\napp-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-close-btn[_ngcontent-%COMP%]{\n    position: static;\n    transform:none;\n}\n\napp-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .modal-validate-btn[_ngcontent-%COMP%]{\n    padding: 4px 10px;\n    height: 33px;\n}\n\n.themes-menu[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n    font-weight: bold;\n    \n    \n    text-decoration: underline;\n}\n\n.clinging[_ngcontent-%COMP%]{\n    animation-name: cling;\n    animation-duration: 0.5s;\n    animation-iteration-count: infinite;\n    z-index: 1;\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNHB4KTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzOHB4KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2JiYjsgICAgXG59XG5cbiNtYWluLWhlYWRlcntcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNiYmI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qYmFja2dyb3VuZDogI2YwZjBmMDsqL1xuICAgIC8qYmFja2dyb3VuZDogI2Y5ZjlmOTsqL1xufVxuXG4uY29kZS1wYXJ0LXRpdGxle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjViNWI1O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjViNWI1O1xuICAgIC8qY29sb3I6ICM4YjhiOGI7Ki9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxcHggMCAxcHggNXB4O1xuICAgIC8qYmFja2dyb3VuZDogI0ZGRkZGRjsqL1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLyouY29kZS1jb21wb25lbnQtY29udGFpbmVyLWNzcyAuY29kZS1wYXJ0LXRpdGxlLFxuLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lci1qcyAuY29kZS1wYXJ0LXRpdGxle1xuICAgIGN1cnNvcjogcm93LXJlc2l6ZTtcbn0qL1xuXG4uY29kZS1wYXJ0LXRpdGxlID4gc3BhbiB7XG4gICAgY29sb3I6ICM4MTgxODE7XG4gICAgdXNlci1zZWxlY3Q6bm9uZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29kZS1wYXJ0LXRpdGxlLWJ0bnMtY29udGFpbmVye1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb2RlLXBhcnQtdGl0bGUtYnRue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGM4YzhjO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTRweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgbWluLXdpZHRoOiAxNHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29kZS1wYXJ0LXRpdGxlLWJ0biAuZmEtYmFycy52ZXJ0aWNhbHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5jb2RlLXBhcnQtdGl0bGUtYnRuIC5mYSB7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIC8qd2lkdGg6IDE0cHg7Ki9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZnVsbHNjcmVlbi1pZnJhbWUtYnRuIC5mYSxcbi5zdHJldGNoLXYtaWZyYW1lLWJ0biAuZmEsXG4uc3RyZXRjaC1oLWlmcmFtZS1idG4gLmZhe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mdWxsc2NyZWVuLWlmcmFtZS1idG4sXG4uc3RyZXRjaC12LWlmcmFtZS1idG4sXG4uc3RyZXRjaC1oLWlmcmFtZS1idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDFweCA0cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xufVxuXG4uZnVsbHNjcmVlbi1pZnJhbWUtYnRuLXNlY29uZGFyeXtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgcGFkZGluZzogMHB4IDNweDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5mdWxsc2NyZWVuLWlmcmFtZS1idG4gLmZhLFxuLnN0cmV0Y2gtdi1pZnJhbWUtYnRuIC5mYSxcbi5zdHJldGNoLWgtaWZyYW1lLWJ0biAuZmF7XG4gICAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4uYXMtc3BsaXQtYXJlYVtjbGFzc10ge1xuICAgIC8qbWluLWhlaWdodDogMjVweDsqL1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcbn1cblxuLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lcjpub3QoLnZlcnRpY2FsLXRpdGxlLW1vZGUpIC5jb2RlLXBhcnQtdGl0bGUtYnRuOm50aC1sYXN0LWNoaWxkKG4rMil7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjgxOHB4KSBhbmQgKG1pbi1oZWlnaHQ6NTgxcHgpe1xuXG4gICAgLnZlcnRpY2FsLXRpdGxlLW1vZGUgLmNvZGUtcGFydC10aXRsZS1idG46bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5jb2RlLWNvbXBvbmVudC1jb250YWluZXIudmVydGljYWwtdGl0bGUtbW9kZS5mdWxsc2NyZWVuIC5jb2RlLXBhcnQtdGl0bGUtYnRuOm50aC1sYXN0LWNoaWxkKG4rMil7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lci52ZXJ0aWNhbC10aXRsZS1tb2RlOm5vdCguZnVsbHNjcmVlbikgLmNvZGUtcGFydC10aXRsZS1idG57XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbn1cblxuI2NvZGUtcGFydHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjYmJiO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuXG4jY29kZS1wYXJ0cyA+IC5jb2RlLWNvbXBvbmVudC1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMy4zJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgbWluLWhlaWdodDogMzJweDtcbn1cblxuI2NvZGUtcGFydHMgPiAuY29kZS1jb21wb25lbnQtY29udGFpbmVyLmhhcy1yZXNpemVye1xuICAgIHBhZGRpbmctdG9wOjVweDtcbn1cblxuI2NvZGUtcGFydHMgPiAuY29kZS1jb21wb25lbnQtY29udGFpbmVyID4gLmNvZGUtY29tcG9uZW50e1xuICAgIC8qaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTsqL1xuICAgIGhlaWdodDphdXRvO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICAvKmRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0gXG5cbi5tYWluLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tYWluLWNvbnRhaW5lci5sYXlvdXQtdHlwZS0zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5tYWluLXJlc2l6ZXItZmxvb3J7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB6LWluZGV4OjEwMDtcbiAgICBsZWZ0OjA7XG4gICAgdG9wOjA7XG59XG4jbWFpbi1yZXNpemVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjViNTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICB6LWluZGV4OjEwMTtcbn1cbiNtYWluLXJlc2l6ZXIubGF5b3V0LXR5cGUtMSxcbiNtYWluLXJlc2l6ZXIubGF5b3V0LXR5cGUtM3tcbiAgICB3aWR0aDogMTJweDtcbiAgICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG5cbi8qI21haW4tcmVzaXplci5yZXNpemUtbW9kZS5sYXlvdXQtdHlwZS0xLFxuI21haW4tcmVzaXplci5yZXNpemUtbW9kZS5sYXlvdXQtdHlwZS0ze1xuICAgIGJhY2tncm91bmQtaW1hZ2U6cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgjYmJiLCAjYmJiIDE1cHgsICNGRkZGRkYgMTVweCwgI0ZGRkZGRiAyMHB4KTtcbn0qL1xuXG4jbWFpbi1yZXNpemVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZhZmFmO1xufVxuXG5cbiNjb2RlLXBhcnRzID4gOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBib3JkZXItdG9wOm5vbmU7XG59XG5cbmFwcC1pZnJhbWUtcGFydHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGZsZXgtZ3JvdzoxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKmJveC1zaGFkb3c6IDAgMCAwIDFweCAjYmJiOyovXG59XG5cbmFzLXNwbGl0LWFyZWEuYXMtc3BsaXQtYXJlYS1pZnJhbWUuYXMtc3BsaXQtYXJlYSB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuYXMtc3BsaXQtYXJlYS5hcy1zcGxpdC1hcmVhLWlmcmFtZS5pcy12ZXJ0aWNhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuYXMtc3BsaXQtYXJlYS5hcy1zcGxpdC1hcmVhLWlmcmFtZS5pcy1ob3Jpem9udGFsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uaWZyYW1lLWFyZWF7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNjb2RlLXBhcnRzLXRpdGxlLW1vYmlsZXtcbiAgICBkaXNwbGF5Om5vbmU7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG4jY29kZS1wYXJ0cy10aXRsZS1tb2JpbGUgYSB7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjOGI4YjhiO1xuICAgIGJvcmRlci1yYWRpdXM6MnB4O1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICBwYWRkaW5nOiAzcHggMHB4IDNweCAwcHggIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6NTRweDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuI2NvZGUtcGFydHMtdGl0bGUtbW9iaWxlIGEuYWN0aXZlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4jY29kZS1wYXJ0cy10aXRsZS1tb2JpbGUgYTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWxlZnQ6M3B4O1xufVxuXG4jY29kZS1wYXJ0cy10aXRsZS1tb2JpbGUgYTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6M3B4O1xufVxuXG4uc2hhcmUtY29kZS1idG4sXG4ucmVzc291cmNlcy1jb2RlLWJ0bixcbi50aGVtZXMtYnRuLFxuLmNvbnNvbGUtYnRuXG57XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDExOCwgMTE4LCAxMTgpO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGNvbG9yOnJnYigwLDAsMCk7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNoYXJlLWNvZGUtYnRuLFxuLnJlc3NvdXJjZXMtY29kZS1idG4sXG4uY29uc29sZS1idG57XG4gICAgcGFkZGluZzogMXB4IDZweDtcbn1cblxuLnRoZW1lcy1idG57XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmc6IDFweCAzcHg7XG59XG5cbi50aGVtZXMtYnRuIGl7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zaGFyZS1jb2RlLWJ0bjphY3RpdmUsXG4ucmVzc291cmNlcy1jb2RlLWJ0bjphY3RpdmUsXG4udGhlbWVzLWJ0bjphY3RpdmUsXG4uZnVsbHNjcmVlbi1pZnJhbWUtYnRuOm5vdCguZnVsbHNjcmVlbi1pZnJhbWUtYnRuLXNlY29uZGFyeSk6YWN0aXZlLFxuLmNvbnNvbGUtYnRuOmFjdGl2ZSxcbi5zdHJldGNoLXYtaWZyYW1lLWJ0bjphY3RpdmUsXG4uc3RyZXRjaC1oLWlmcmFtZS1idG46YWN0aXZle1xuICAgIHBhZGRpbmctdG9wOiA0cHggIWltcG9ydGFudDtcbn1cbi5zaGFyZS1jb2RlLWJ0bjpob3Zlcixcbi5yZXNzb3VyY2VzLWNvZGUtYnRuOmhvdmVyLFxuLnRoZW1lcy1idG46aG92ZXIsXG4uY29uc29sZS1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuLnNoYXJlLWNvZGUtYnRuIHNwYW4sXG4ucmVzc291cmNlcy1jb2RlLWJ0biBzcGFuLFxuLnRoZW1lcy1idG4gc3Bhbixcbi5jb25zb2xlLWJ0biBzcGFue1xuICAgIGRpc3BsYXk6YmxvY2s7XG59XG5cbi5oZWFkZXItYnRucy1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVhZGVyLWJ0bnMtY29udGFpbmVyID4gYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDozcHg7XG4gICAgbWFyZ2luLXJpZ2h0OjNweDtcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xufVxuICBcbi5oZWFkZXItYnRucy1jb250YWluZXIgPiBidXR0b246bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OjBweDtcbn1cblxuLmhlYWRlci1idG5zLWNvbnRhaW5lciA+IGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6MHB4O1xufVxuXG4uaGVhZGVyLWJ0bnMtY29udGFpbmVyICA+IC5yZXNzb3VyY2VzLWNvZGUtYnRuLFxuLmhlYWRlci1idG5zLWNvbnRhaW5lciAgPiAubGF5b3V0cy1saXN0LWNvbnRhaW5lcixcbi5oZWFkZXItYnRucy1jb250YWluZXIgID4gLnNoYXJlLWNvZGUtYnRuLFxuLmhlYWRlci1idG5zLWNvbnRhaW5lciA+IC50aGVtZXMtYnRuLFxuLmhlYWRlci1idG5zLWNvbnRhaW5lciA+IC5jb25zb2xlLWJ0bntcbiAgICBoZWlnaHQ6MzBweDtcbn1cblxuLmhlYWRlci1idG5zLWNvbnRhaW5lciA+IC50aGVtZXMtYnRue1xuICAgIG1hcmdpbi1yaWdodDo2cHg7XG4gICAgcGFkZGluZzogMCA2cHg7XG59XG5cbi50aGVtZXMtYnRuLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wYXlwYWwtYnRuLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ucGF5cGFsLWJ0bi1jb250YWluZXIgZGl2I2RvbmF0ZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvcGF5cGFsLWljb24ucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcbn1cblxuOjpuZy1kZWVwIGRpdiNkb25hdGUtYnV0dG9uIGltZ3tcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5pLmZhLmZhLXNvcnQtZGVzYyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAycHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcmlnaHQ6MXB4O1xufVxuXG5pLmZhLmZhLXNvcnQtYXNjIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwcHg7XG59XG5cbjo6bmctZGVlcCAucGF5cGFsLWJ0bi1jb250YWluZXIgI2RvbmF0ZS1idXR0b24gaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG59XG5cbi5wYXlwYWwtYnRuLWNvbnRhaW5lciAuYnRuLnBheXBhbC1idG4gYnV0dG9uLmxheW91dHMtYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1yaWdodDogMTNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wYXlwYWwtYnRuLWNvbnRhaW5lciB1bC5kb25hdGlvbnMtbWVudSxcbi50aGVtZXMtbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogY2FsYygxMDAlICsgN3B4KTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTQzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgXG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIC8qdHJhbnNpdGlvbjogMC4ycyBhbGw7Ki9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgaGVpZ2h0OiAxNTlweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvcGFjaXR5OjA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogLTE7XG59XG5cbi50aGVtZXMtbWVudXtcbiAgICB3aWR0aDoyMDBweDtcbn1cblxuLnRoZW1lcy1tZW51IGxpIHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5wYXlwYWwtYnRuLWNvbnRhaW5lciB1bC5kb25hdGlvbnMtbWVudS5zaG93bixcbi50aGVtZXMtbWVudS5zaG93biB7XG4gICAgaGVpZ2h0OjE1OXB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAycHggIzhiOGI4YjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgei1pbmRleDogOTk7XG4gICAgb3ZlcmZsb3c6YXV0bztcbn1cblxuLnBheXBhbC1idG4tY29udGFpbmVyIHVsLmRvbmF0aW9ucy1tZW51ID4gbGk6Zmlyc3QtY2hpbGQgfiBsaSxcbi50aGVtZXMtbWVudSA+IGxpOmZpcnN0LWNoaWxkIH4gbGkge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOGI4YjhiNWU7XG59XG5cbi5wYXlwYWwtYnRuLWNvbnRhaW5lciB1bC5kb25hdGlvbnMtbWVudSA+IGxpLFxuLnRoZW1lcy1tZW51ID4gbGkge1xuICAgIHBhZGRpbmc6IDhweCA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC8qdHJhbnNpdGlvbjogMC4ycyBhbGw7Ki9cbn1cblxuLnBheXBhbC1idG4tY29udGFpbmVyIHVsLmRvbmF0aW9ucy1tZW51ID4gbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4YjhiOGIyNjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubGF5b3V0cy1saXN0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6MXB4IDZweDtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxcHggMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmxheW91dHMtbGlzdC1jb250YWluZXIgPiBzcGFue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1yaWdodDogMTRweDsgICBcbn1cblxuLmxheW91dHMtbGlzdC1jb250YWluZXIgPiBzcGFuIGkuZmF7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogN3B4O1xufVxuXG4uc2hvd24gaS5mYS1zb3J0LWFzY3tcbiAgICBib3R0b206IDBweDtcbn1cblxuLmxheW91dHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sYXlvdXQ6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzksMTM5LDEzOSwwLjIpO1xufVxuXG4ubGF5b3V0LmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojOGI4YjhiO1xuICAgIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IDFweCAjOGI4YjhiO1xufVxuXG4ubGF5b3V0LmFjdGl2ZSA+IGRpdjpmaXJzdC1jaGlsZHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgI0ZGRkZGRjtcbn1cblxuLmxheW91dC5hY3RpdmUgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXZ7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNGRkZGRkY7XG59XG4vKioqKi9cbi5sYXlvdXQtMSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzhiOGI4YjtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQxcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5sYXlvdXQtMSA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDI3JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkICM4YjhiOGI7XG59XG5cbi5sYXlvdXQtMSA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMy41JTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgIzhiOGI4Yjtcbn1cblxuLmxheW91dC0xID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4vKioqKi9cbi5sYXlvdXQtMiB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzhiOGI4YjtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQxcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubGF5b3V0LTIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIGhlaWdodDogMzUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCAjOGI4YjhiO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sYXlvdXQtMiA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAzMy41JTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgIzhiOGI4Yjtcbn1cblxuLmxheW91dC0yID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cbi8qKioqL1xuLmxheW91dC0zIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOGI4YjhiO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmxheW91dC0zID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogMjclO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdXRsaW5lOiAycHggc29saWQgIzhiOGI4Yjtcbn1cblxuLmxheW91dC0zID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMzLjUlO1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjOGI4YjhiO1xufVxuXG4ubGF5b3V0LTMgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi8qKioqL1xuLmxheW91dC00IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOGI4YjhiO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDFweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbi1yZXZlcnNlO1xufVxuXG4ubGF5b3V0LTQgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIGhlaWdodDogMzUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCAjOGI4YjhiO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sYXlvdXQtNCA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAzMy41JTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgIzhiOGI4Yjtcbn1cblxuLmxheW91dC00ID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cbi8qKioqL1xuXG4ubGF5b3V0cy1saXN0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgcGFkZGluZzo4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvKnRyYW5zaXRpb246IGFsbCAwLjJzOyovXG4gICAgdG9wOiBjYWxjKDEwMCUgKyA4cHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMnB4ICM4YjhiOGI7XG4gICAgei1pbmRleDogMTAyO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcmlnaHQ6MHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjgxOHB4KSBhbmQgKG1pbi1oZWlnaHQ6NTgxcHgpe1xuICAgIC5wcmV0dGlmeS1tb2JpbGUtY29kZXtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cblxuICAgIC5jb2RlLWNvbXBvbmVudC1jb250YWluZXIudmVydGljYWwtdGl0bGUtbW9kZTpub3QoLmZ1bGxzY3JlZW4pIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYm9yZGVyLXRvcDoycHggc29saWQgI2I1YjViNTtcbiAgICB9XG5cbiAgICAuY29kZS1jb21wb25lbnQtY29udGFpbmVyLnZlcnRpY2FsLXRpdGxlLW1vZGU6bm90KC5mdWxsc2NyZWVuKSA+IC5jb2RlLXBhcnQtdGl0bGUge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDFweCAycHggMCAycHg7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiNWI1YjU7XG4gICAgfVxuXG4gICAgLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lci52ZXJ0aWNhbC10aXRsZS1tb2RlOm5vdCguZnVsbHNjcmVlbikgPiBhcHAtaHRtbC1wYXJ0LmNvZGUtY29tcG9uZW50IHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgIH1cblxuICAgIC5jb2RlLWNvbXBvbmVudC1jb250YWluZXIudmVydGljYWwtdGl0bGUtbW9kZTpub3QoLmZ1bGxzY3JlZW4pID4gLmNvZGUtcGFydC10aXRsZSA+IC5jb2RlLXBhcnQtdGl0bGUtYnRucy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBmbGV4OiBub25lO1xuICAgIH1cblxuICAgIC5jb2RlLWNvbXBvbmVudC1jb250YWluZXIudmVydGljYWwtdGl0bGUtbW9kZTpub3QoLmZ1bGxzY3JlZW4pID4gLmNvZGUtcGFydC10aXRsZSA+IHNwYW4ge1xuICAgICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cblxuXG4gICAgLmNvZGUtcGFydC10aXRsZS1idG4gLmZhLWFycm93cy1oLXZlcnRpY2FsIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5jb2RlLXBhcnQtdGl0bGUtYnRuIC5mYS1hcnJvd3MtdiBzcGFuLFxuICAgIC5jb2RlLXBhcnQtdGl0bGUtYnRuIC5mYS1hcnJvd3MtaCBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIFxuICAgIC5jb2RlLXBhcnQtdGl0bGUtYnRuLnZlcnRpY2FsLXRpdGxlLW1vZGUge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICAgIFxuICAgIC5jb2RlLXBhcnQtdGl0bGUtYnRuIC5mYS1hcnJvd3MtaC12ZXJ0aWNhbCA+IHNwYW46Zmlyc3QtY2hpbGQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5maWRkbGUtdGl0bGUgLmZpZGRsZS1pbnB1dHtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgIC8qYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5O1xuICAgIGhlaWdodDogMTlweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7Ki9cbn1cblxuLmFwcC1sb2FkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmZpZGRsZS10aXRsZXtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmlkZGxlLXRpdGxlID4gc3BhbntcbiAgICBtYXJnaW4tcmlnaHQ6NXB4O1xufVxuXG4uZmlkZGxlLXNpemV7XG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cblxuLmZpZGRsZS1zaXplIHNwYW4ueHtcbiAgICBtYXJnaW46IDAgM3B4O1xufVxuXG4uZmlkZGxlLXNpemUtaGFjay5maWRkbGUtc2l6ZXtcbiAgICBtYXJnaW46IDBweDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgY29sb3I6ICNjOWM5Yzk7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IDRweCAjMDAwMDAwO1xuICAgIHdpZHRoOmF1dG87XG59XG5cbi5maWRkbGUtc2l6ZS1oYWNrIHNwYW57XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5maWRkbGUtdGl0bGUgLmZpZGRsZS1zaXplIC53aWR0aCxcbi5maWRkbGUtdGl0bGUgLmZpZGRsZS1zaXplIC5oZWlnaHQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDtcbiAgICB3aWR0aDogMzZweDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLmZpZGRsZS10aXRsZSAuZmlkZGxlLXNpemUgaW5wdXQud2lkdGg6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4uZmlkZGxlLXRpdGxlIC5maWRkbGUtc2l6ZSBpbnB1dC53aWR0aDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbi5maWRkbGUtdGl0bGUgLmZpZGRsZS1zaXplIGlucHV0LmhlaWdodDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbi5maWRkbGUtdGl0bGUgLmZpZGRsZS1zaXplIGlucHV0LmhlaWdodDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4uZmlkZGxlLWxvZ297XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDRweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWRkbGUtbG9nbyBpbWd7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTUwcHgpe1xuICAgIC5sYXlvdXRzLWxpc3Qge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubGF5b3V0cy1saXN0W2NsYXNzXSAubGF5b3V0e1xuICAgICAgICBtYXJnaW46MHB4O1xuICAgIH1cbiAgICBcbiAgICAubGF5b3V0cy1saXN0W2NsYXNzXSAubGF5b3V0Om50aC1jaGlsZCgybisxKXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gICAgfVxuXG4gICAgLnBheXBhbC1idG4tY29udGFpbmVyIC5idG4ucGF5cGFsLWJ0biBidXR0b24ubGF5b3V0cy1idG57XG4gICAgICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgICAgICBwb3NpdGlvbjpzdGF0aWM7XG4gICAgfVxuICAgIFxuICAgIC5wYXlwYWwtYnRuLWNvbnRhaW5lciAuYnRuLnBheXBhbC1idG4gYnV0dG9uLmxheW91dHMtYnRuIGkuZmF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAucGF5cGFsLWJ0bi1jb250YWluZXIgLmJ0bi5wYXlwYWwtYnRuIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XG4gICAgfVxufVxuXG4ubGF5b3V0cy1saXN0LWNvbnRhaW5lci5zaG93biAubGF5b3V0cy1saXN0IHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uaGlkZGVuIC5mYS5mYS1zb3J0LWFzY3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvd24gIC5mYS5mYS1zb3J0LWRlc2N7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwICNjb2RlLXBhcnRzIC5hcy1zcGxpdC1ndXR0ZXI6Zmlyc3Qtb2YtdHlwZTpub3QoOmxhc3Qtb2YtdHlwZSl7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYXMtc3BsaXQtZ3V0dGVyLWN1c3RvbXtcbiAgICBmbGV4OjAgMCA1cHg7XG59XG5cbi5hcy1zcGxpdC1ndXR0ZXItY3VzdG9tLmlzLWhvcml6b250YWx7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgY3Vyc29yOmNvbC1yZXNpemU7XG59XG5cbi5hcy1zcGxpdC1ndXR0ZXItY3VzdG9tLmlzLXZlcnRpY2Fse1xuICAgIHdpZHRoOjEwMCU7XG4gICAgY3Vyc29yOnJvdy1yZXNpemU7XG59XG5cbi5pZnJhbWUtb3ZlcmxheS1mb3ItZHJvcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaWZyYW1lLWFyZWE6aG92ZXIgLmlmcmFtZS1vdmVybGF5LWZvci1kcm9we1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5lbXB0eS1hcmVhW2NsYXNzXSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAgdHJhbnNwYXJlbnQgMTVweCwgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjM4KSAzMHB4KSByZXBlYXQgc2Nyb2xsIDAlIDAlO1xufVxuXG4uZW1wdHktYXJlYS5pcy1kYXJrLW1vZGVbY2xhc3Nde1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg0NWRlZywgIHRyYW5zcGFyZW50IDE1cHgscmdiYSgyMDQsIDIwNCwgMjA0LCAwLjIpIDMwcHgpIHJlcGVhdCBzY3JvbGwgMCUgMCU7XG59XG5cbi5hcy1zcGxpdC1ndXR0ZXItY3VzdG9tID4gLmFzLXNwbGl0LWd1dHRlci1pY29uLWN1c3RvbXtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYXMtc3BsaXQtb3V0ZXJbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlcltjbGFzc10sXG46aG9zdCA6Om5nLWRlZXAgLmFzLXNwbGl0LW91dGVyW2NsYXNzXSA+IC5hcy1zcGxpdC1ndXR0ZXJbY2xhc3NdLFxuLmFzLXNwbGl0LWd1dHRlci1jdXN0b217XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hcy1zcGxpdC1vdXRlcjpub3QoLmlzLWRhcmstbW9kZSlbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlcltjbGFzc10sXG46aG9zdCA6Om5nLWRlZXAgLmFzLXNwbGl0LW91dGVyOm5vdCguaXMtZGFyay1tb2RlKVtjbGFzc10gPiAuYXMtc3BsaXQtZ3V0dGVyW2NsYXNzXSxcbi5hcy1zcGxpdC1ndXR0ZXItY3VzdG9te1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDFweCAjMDAwMDAwMjQ7XG59XG5cblxuOmhvc3QgOjpuZy1kZWVwIC5hcy1zcGxpdC1vdXRlci5pcy1kYXJrLW1vZGVbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlcltjbGFzc10sXG46aG9zdCA6Om5nLWRlZXAgLmFzLXNwbGl0LW91dGVyLmlzLWRhcmstbW9kZVtjbGFzc10gPiAuYXMtc3BsaXQtZ3V0dGVyW2NsYXNzXSxcbi5hcy1zcGxpdC1ndXR0ZXItY3VzdG9tLmlzLWRhcmstbW9kZXtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAxcHggI0ZGRkZGRjI0O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFzLXNwbGl0LW91dGVyOm5vdCguaXMtZGFyay1tb2RlKVtjbGFzc10gLmFzLWhvcml6b250YWxbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlcltjbGFzc10gPiAuYXMtc3BsaXQtZ3V0dGVyLWljb25bY2xhc3NdLFxuOmhvc3QgOjpuZy1kZWVwIC5hcy1zcGxpdC1vdXRlcjpub3QoLmlzLWRhcmstbW9kZSlbY2xhc3NdLmFzLWhvcml6b250YWxbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlcltjbGFzc10gPiAuYXMtc3BsaXQtZ3V0dGVyLWljb25bY2xhc3NdLFxuLmFzLXNwbGl0LWd1dHRlci1jdXN0b20uaXMtaG9yaXpvbnRhbCA+IC5hcy1zcGxpdC1ndXR0ZXItaWNvbi1jdXN0b217XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVVBQUFBZUNBWUFBQURrZnRTOUFBQUtDM3BVV0hSU1lYY2djSEp2Wm1sc1pTQjBlWEJsSUdWNGFXWUFBSGphclpoYmx1TTREa1QvdVlwWmd2Z0V1QncrejVrZHpQTG5ncEt6blZtWjNkVXpiVmRhS3BraVFVUWdFTEpiLy9uM2R2L2lGYStrTG1YUlVrdTVlS1dhYW1pYzZIVy8ydm4wVnpxZjl5cy9SLy81dXZQcitTSndLWEtNOTMrMVBPTmYxLzNIQlBlaGNaYmZKdEx4Zk5FL2YxSFRNNzkrbVNqY2gyZ1IyZmw4SnFyUFJESGNYL2huZ25adjZ5cFY1WDBML2RuQmMvK2RCdjZjZlNUOUhQWXYveGV5TnpQcnhCQlc5UEhpTThSd0J4RHR6N3ZZT05Iem1SbEl5T2RjK0x5SCtqc2gzK1hwZW92S2ZVVWx0TzlSK1RqN0Frb3M5M1hIaGMvSkxCL0hiNi83L09YNk02RTdLWDViT1k2UGxUOWRiL2xxWDdmeit0dDdxdHQ3M2J0cnFaRFM4bXpxdFpWenhzQk95dU81cmZBVy9qTG5jdDZWdHpyV0dVQStyM0YxM3NOWEg0QmwrK1NuYjM3N2RZN0REMEpNWVFYaEdNSUFLTHVtVVVJTkkxNE9sSks5L1E0U2E1d2dHT0lBM3NqVjhCR0xQK3ZXczl6d3lzTFRNeko0SnZPR3I3T1BmK0w5NDBSN0crVzl2L1RPRTdRZ3JtRE1JZ3hEemo0WkJTQit2M2lVVDRKZjc2OHZ3eFdsWUpTbFdkbGd1L285UmMvKzRaYnhLQjZnSXdNeng3dld2TXhuQWxMRTJwbGdmQVNCcS9pWWZmR1hoQ0RlazBjRm44WkVHbUlLSFFoOHptRVNaVWd4RnNEUllHdHpqL2d6TnVSd1gwYXpBQ0xIUWlFcEFEV3dTZ2diL0pHa2NLamxtRlBPdVdUSm1tdHVKWlpVY2lsRmlvbGZreWhKc2hRUlVhblNOR3JTckVWRjFXblZWa09OaUdPdXBVclZXbXRyTE5xWXVYRjNZMEJyUGZUWVU4KzlkT25hYTI4RCtvdzA4aWhEaHJwUlI1dGh4b2xPekRKbDZxeXpMYitnMGtvcnI3Sms2YXFyYmFpMjQwNDc3N0psNjY2N2ZhRG0zU2s3Lzh2NzkxSHpMOVRDUWNvR3lnZHEzQ3J5bXNLYm5HVERETVJDOGlBdWhnQ0VEb2JacFQ2bDRBdzZ3K3lxZ2FySWdTaXpnVE85SVFhQ2FmbVF0Ly9BN2cva1B1SG1VdnEvY0FzdjVKeEI5MDhnNXd5Nkg1RDdGYmR2VUpzbWQrT0s3aUJrWldoSnZTTGx0MExReHI4NU5LNjZ0OG1qZlE3bHppQjdpaUk2bk03U2w4ajJXVFk4V3I1Tkd6YjVueDEzaTc3MXBicC81L1kvN25adnQ3Y1FlMDFqbkhoQ0cvVUV4TGVLUVJnUjZrQ05HYzU0QW8rY3RMZ1hSYnF2NWM1ODdDbjFzejQ5N2h4RHowdko1Y3A2Smw2WFFpVXRNZWtLT2xOb1NOTUlUZjNwMUVzZFFEUm1uRVZqSEdQSE5LRks3U0YxVk5sZzdqbUZNZElPT0pVa29mUk12TGJsejdHNm40UDkwMWpEdW1Tc2s1OExUZ0EvQ1V4ZXpwQ0tIdXl0ZXVZaUdCMmM2TDFNRGZNNitXS1JVYlBQUGROdVpLYSsvTzZRekcxQ2s1Ym5uQ091WFpmMHBDMVZYTTVWVmluVUhuNkY1ZG5US0RKQWppSWJSdjRWb0YyQWZ6dW5XUjFDS2hLRytMWm5YZUJHaFF6RllHUUpvajZ2UVdmTEZrdjFzREhaV2R1WGtvYVUyMlIvZXdXSTRtekFpTG5mQS9ZaDRFNkZta3U1dEZpb2hrMGhyTzNaOTd6T2xEdGtXdWMyNXBLS1hPZWlRWjRKVEY1VzZpbWVYSUZFc05xZGRPSkRSa0xTYlRFczlVeFFrWW1UVlU4RnMwcEgyT1RoVVRoVEJNcDhueUpadlVFRGlyUUgxVUllaXJlS1ZVdkpSQkdRcUlMNGxGNkRsTmJ3ajg3WE9PcTZzc1FPOFFHZEZhUUx6WnYwb3dUVVExMnB3S0d5ZTBvTkJhTHIxMGpYaG95MUxTdURMUFQrR215ZkphNGIzb2JSWTV0akhJNk1USU02Wll0SytEdC8xODBubElhRWFHK3JGMjNpQkIzV2NsTnRGVk5DcXM5RWFXOVpMVmxLMTBucG1DVDNvTGVEY1hqdG1lcXptTlRwcHMvb0RHV3haR2FVZEM3aWhacXhTZDVwTk8xaGp0a1RPNkw4bFc1Y2s0ODZOaXpyZzBHTnFHTGJqcnBxMjNDTzEyeWx0bW1rSGNONnJPZ2NIZW1tWFF6NFN6L0txL1lmV09VKzArclBXQlVLclhCMVl3UFNyZHIza3RIdlN1emJaWGl5SDBMOGxLTStGblhhRnpyUXEwMTEwbStndEdMT3h2Q0MyV3ZXTTAwOXFMU3FaMkN3cFRydHBFMTJXemVnVCtzQUdXNXUrS2FiN3VKWGtWbzU2K0pReTdtNytONExLbFdIRUg0Z0JHcnVrQm02MGtSR3ZpV0RGRytDTGExckRXVXlSMEpNSm5ybE1JdDkxMEZOSVh0Vzl4UUtGRFVsU2F3OUUxcUNpSndFeng1dU9jdDNKV1JNSzV5ek5OQ08yczY5aFJNN1VadmFIYzc0K2VKTWpvY3o4b21nTkxXampISGwxcWptN2RwWnd4aUszaUw1dXdLNGNhbzNnVk1DcDZvMXhIazEraUdWUkpZSHhWRzhXZTVMeDJLK21JY3J4Y3gwRVd4MWxCeDY2eDR5WVFMbzBCQkxDQThycjVrbWpJRVlKZThtUGtOdHpWWkthVThJQmE0dVhHZjNIbEczZllFeVh3dk5nTjBiVSs1dkZkWjc4dWQ3a2J1VEhiS1lzQnRaV29XUXNDVitxcWdmczBOTndnUmFQTUhFZTdwVDdaYnk1bDdGem1SUEpxM1F5MG5wS1hUSy9HYVdwWkdhaEV4TFNpUUQwM1EvMXpiSXV6aDB2K1VCL1JFbDAvMVlQVThiYTVhY0xKVjB4aDNDUy9kTnJuSkdvNDd1TDdpVit0eFgyaUl1RERxR2dGZndIVk5EdFdMY2FJNGE4MW9VWW1vSURXSWErNk9xdDNZYmtSQlUvNUVVOTlya202VEZWMDRBQk9sR081bHAxS2NKWE96enJRbVVwd200dXd1ODFQRnBBdlBWQk9CL3lyZ2txOWFOaVNNUktRclFYWFRDM3RkV2V0WXNTYWZyeVBpaS9HeExnb1o0MkZoTVZCaVJDN3dQdE13Ty9FZysyZERwQndKQ3JTYkxJKzBnQm05M09nUXlIcTE2S2RYVC9jRHNYYWhlTW5WcjFvbi95QlM1eDkvMU9OM29UNk0vTjU5V2IwTXhncVpUUHYxWlp1Z3doYXJxVmxVTzVZVXJkdkdXZGh5TEVkVjRROFBIS21hamxLTE1Kb2s4dkZtTnJvdmtXOS9jVmlLcG96NnU4SXhIMVBDZmJwSnh5WXBvMFlNcm5BdEs0RmFmRmZQTXpKUVRUMFc0bmhXT3Blb3pXazFscVR4bUFYSEdmdlBQZEErL3pYVnNIem9SN0U2eFdOVjBKdFNzbUkweHZvL1FuUkJQSnA3ZHZmYjIycG13ckZGQWVDekdGK0hjMk15dVYwQnJDdVJnY1JNQzk2WUVKZ1RmeWdBZzNFSndaQUFmejZUMXBPZWUxNHlRZ3dTNGhkdFA3dzlMYUFWN1BPRStWalBlZmVQTkZiNDg0ZTBJZWY1M0M1bFNIdlM1Q0FjWHJucVRUdEFtTTNUUk9xMU0rUzZxT2FWOUNIQU16aWlJZ1ppNWg1VStPVVV6SjhONDJMa2FqeVhSZm9LUzh5dEpRMUZXSmNUY0x2eHVIQmdhclEyaENEeDJVRmx6ell3VnhRclc0TENMMXV3UjJRdUZIcjJuazk3amN3MGJrUnVidkE5NzVBMGFVMENEeHJxSXVrdThLU00xamorSEdUNC9pdkh1OXF4aEhyZDNQNm5jMm5nY24wMTFjdW9leDBlcEIveFVORFFNaDF2KzZLeS82M3JkWDluZXYzSzk4SlErSU4zOTc1djVZeS9NeWZNYUZXZE8va2pJNDFCL01LajYwVGV1KzRucXpTVU9seWZzdDk4MDJ2d3RZLzZUZzNJR2RxU3I5bXVhOW50T3NXVldzREhyb2hkWFM0djlaRWFmUVNQUlhEVFdhTUc2ZlhhdThvcUpITzA0SUM0UFVkR2FTYWFaVkYyR1JRR09oQjNCdWV0RVIwbTRTVUg5MWdXNzM3ZkI3VTdCdEhhN3ZPM05MRW02aTJhNWJKeWR1OVg0ZE5QNHZVZDhMR0tPVklkSW5QamR4dVA4aHd0MmY5Y0cvK1NDM2JjMm1JU1ZzMjZsdUJIVnZ6THMvcGpSajYyYSs3b3QzcjFUOW1tL0xsQ0d4OVhhVHdIcGZ2STI0TDg4eHpQUnQ0L3k5ODhBaHNyN3p3QmZibjYvMS8xMDg2OC9BakNnVXVYL0JUVVFYUGlVWmF5akFBQUJoR2xEUTFCSlEwTWdjSEp2Wm1sc1pRQUFlSng5a1QxSXcwQWN4VjgveENJVkJ5dUlLQVNwVGhaRVJSeTFDa1dvRUdxRlZoMU1MdjJDSmcxSmlvdWo0RnB3OEdPeDZ1RGlyS3VEcXlBSWZvQzR1VGtwdWtpSi8wc0tMV0k4T083SHUzdVB1M2VBdjE1bXFoa2NCMVROTWxLSnVKREpyZ3FkcndnaGlENE1ZMGhpcGo0bmlrbDRqcTk3K1BoNkYrTlozdWYrSE4xS3ptU0FUeUNlWmJwaEVXOFFUMjlhT3VkOTRnZ3JTZ3J4T2ZHWVFSY2tmdVM2N1BJYjU0TERmcDRaTWRLcGVlSUlzVkJvWTdtTldkRlFpYWVJbzRxcVViNC80N0xDZVl1eldxNnk1ajM1QzhNNWJXV1o2elFIa2NBaWxpQkNnSXdxU2lqRFFveFdqUlFUS2RxUGUvZ0hITDlJTHBsY0pUQnlMS0FDRlpMakIvK0QzOTJhK2NrSk55a2NCenBlYlB0akJPamNCUm8xMi80K3R1M0dDUkI0QnE2MGxyOVNCMlkrU2ErMXRPZ1IwTE1OWEZ5M05Ia1B1TndCK3A5MHlaQWNLVURUbjg4RDcyZjBUVm1nOXhib1duTjdhKzdqOUFGSVUxZkpHK0RnRUJndFVQYTZ4N3REN2IzOWU2YlozdzljZG5LZVBXVTM1QUFBRDR0cFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrQ2p4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWxoTlVDQkRiM0psSURRdU5DNHdMVVY0YVhZeUlqNEtJRHh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeUkrQ2lBZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSUtJQ0FnSUhodGJHNXpPbWx3ZEdORmVIUTlJbWgwZEhBNkx5OXBjSFJqTG05eVp5OXpkR1F2U1hCMFl6UjRiWEJGZUhRdk1qQXdPQzB3TWkweU9TOGlDaUFnSUNCNGJXeHVjenA0YlhCTlRUMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzk0WVhBdk1TNHdMMjF0THlJS0lDQWdJSGh0Ykc1ek9uTjBSWFowUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZGZG1WdWRDTWlDaUFnSUNCNGJXeHVjenB3YkhWelBTSm9kSFJ3T2k4dmJuTXVkWE5sY0d4MWN5NXZjbWN2YkdSbUwzaHRjQzh4TGpBdklnb2dJQ0FnZUcxc2JuTTZSMGxOVUQwaWFIUjBjRG92TDNkM2R5NW5hVzF3TG05eVp5OTRiWEF2SWdvZ0lDQWdlRzFzYm5NNlpHTTlJbWgwZEhBNkx5OXdkWEpzTG05eVp5OWtZeTlsYkdWdFpXNTBjeTh4TGpFdklnb2dJQ0FnZUcxc2JuTTZkR2xtWmowaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTBhV1ptTHpFdU1DOGlDaUFnSUNCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlDaUFnSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW1kcGJYQTZaRzlqYVdRNloybHRjRG8yTW1JeU1HUTJZeTFsTlRBM0xUUmpOekV0T0RKaE1pMDBNMkZoWlRKaE1HSmxNamtpQ2lBZ0lIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlpqazFaRGxrTURRdE9URmpZaTAwTUdSa0xUazVOVE10WkRkbVpUWTNOamxoTURFeElnb2dJQ0I0YlhCTlRUcFBjbWxuYVc1aGJFUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZOakJsTVdWa1l6TXROV1UzWlMwMFl6RTNMVGd4T0RBdE5USTNOemt6TTJWa1ptSmhJZ29nSUNCSFNVMVFPa0ZRU1QwaU1pNHdJZ29nSUNCSFNVMVFPbEJzWVhSbWIzSnRQU0pNYVc1MWVDSUtJQ0FnUjBsTlVEcFVhVzFsVTNSaGJYQTlJakUyTWpneE1qSXdORFE0TWpnMk1qSWlDaUFnSUVkSlRWQTZWbVZ5YzJsdmJqMGlNaTR4TUM0eU1pSUtJQ0FnWkdNNlJtOXliV0YwUFNKcGJXRm5aUzl3Ym1jaUNpQWdJSFJwWm1ZNlQzSnBaVzUwWVhScGIyNDlJakVpQ2lBZ0lIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVIwbE5VQ0F5TGpFd0lqNEtJQ0FnUEdsd2RHTkZlSFE2VEc5allYUnBiMjVEY21WaGRHVmtQZ29nSUNBZ1BISmtaanBDWVdjdlBnb2dJQ0E4TDJsd2RHTkZlSFE2VEc5allYUnBiMjVEY21WaGRHVmtQZ29nSUNBOGFYQjBZMFY0ZERwTWIyTmhkR2x2YmxOb2IzZHVQZ29nSUNBZ1BISmtaanBDWVdjdlBnb2dJQ0E4TDJsd2RHTkZlSFE2VEc5allYUnBiMjVUYUc5M2JqNEtJQ0FnUEdsd2RHTkZlSFE2UVhKMGQyOXlhMDl5VDJKcVpXTjBQZ29nSUNBZ1BISmtaanBDWVdjdlBnb2dJQ0E4TDJsd2RHTkZlSFE2UVhKMGQyOXlhMDl5VDJKcVpXTjBQZ29nSUNBOGFYQjBZMFY0ZERwU1pXZHBjM1J5ZVVsa1Bnb2dJQ0FnUEhKa1pqcENZV2N2UGdvZ0lDQThMMmx3ZEdORmVIUTZVbVZuYVhOMGNubEpaRDRLSUNBZ1BIaHRjRTFOT2tocGMzUnZjbmsrQ2lBZ0lDQThjbVJtT2xObGNUNEtJQ0FnSUNBOGNtUm1PbXhwQ2lBZ0lDQWdJSE4wUlhaME9tRmpkR2x2YmowaWMyRjJaV1FpQ2lBZ0lDQWdJSE4wUlhaME9tTm9ZVzVuWldROUlpOGlDaUFnSUNBZ0lITjBSWFowT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk9HWTVNbU0wTWpNdFl6STJOeTAwTmpVNUxXRmtaREV0T1RGaVpERTRZalEwTW1SbElnb2dJQ0FnSUNCemRFVjJkRHB6YjJaMGQyRnlaVUZuWlc1MFBTSkhhVzF3SURJdU1UQWdLRXhwYm5WNEtTSUtJQ0FnSUNBZ2MzUkZkblE2ZDJobGJqMGlLekF4T2pBd0lpOCtDaUFnSUNBOEwzSmtaanBUWlhFK0NpQWdJRHd2ZUcxd1RVMDZTR2x6ZEc5eWVUNEtJQ0FnUEhCc2RYTTZTVzFoWjJWVGRYQndiR2xsY2o0S0lDQWdJRHh5WkdZNlUyVnhMejRLSUNBZ1BDOXdiSFZ6T2tsdFlXZGxVM1Z3Y0d4cFpYSStDaUFnSUR4d2JIVnpPa2x0WVdkbFEzSmxZWFJ2Y2o0S0lDQWdJRHh5WkdZNlUyVnhMejRLSUNBZ1BDOXdiSFZ6T2tsdFlXZGxRM0psWVhSdmNqNEtJQ0FnUEhCc2RYTTZRMjl3ZVhKcFoyaDBUM2R1WlhJK0NpQWdJQ0E4Y21SbU9sTmxjUzgrQ2lBZ0lEd3ZjR3gxY3pwRGIzQjVjbWxuYUhSUGQyNWxjajRLSUNBZ1BIQnNkWE02VEdsalpXNXpiM0krQ2lBZ0lDQThjbVJtT2xObGNTOCtDaUFnSUR3dmNHeDFjenBNYVdObGJuTnZjajRLSUNBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0S0lEd3ZjbVJtT2xKRVJqNEtQQzk0T25odGNHMWxkR0UrQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtQRDk0Y0dGamEyVjBJR1Z1WkQwaWR5SS9QcDVkeWZzQUFBQUdZa3RIUkFEL0FQOEEvNkM5cDVNQUFBQUpjRWhaY3dBQUN4TUFBQXNUQVFDYW5CZ0FBQUFIZEVsTlJRZmxDQVVBQnhqUjNwWHpBQUFBSTBsRVFWUW96Mk4wOFFqL3o4REF3TEJueDBwR0dKdUpnU0xBT0dybXFKbDR6UVFBTGtJdktieGhIcEFBQUFBQVNVVk9SSzVDWUlJPSlcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hcy1zcGxpdC1vdXRlcjpub3QoLmlzLWRhcmstbW9kZSlbY2xhc3NdIC5hcy12ZXJ0aWNhbFtjbGFzc10gPiAuYXMtc3BsaXQtZ3V0dGVyW2NsYXNzXSA+IC5hcy1zcGxpdC1ndXR0ZXItaWNvbltjbGFzc10sXG46aG9zdCA6Om5nLWRlZXAgLmFzLXNwbGl0LW91dGVyOm5vdCguaXMtZGFyay1tb2RlKVtjbGFzc10uYXMtdmVydGljYWxbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlcltjbGFzc10gPiAuYXMtc3BsaXQtZ3V0dGVyLWljb25bY2xhc3NdLFxuLmFzLXNwbGl0LWd1dHRlci1jdXN0b20uaXMtdmVydGljYWwgPiAuYXMtc3BsaXQtZ3V0dGVyLWljb24tY3VzdG9te1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUI0QUFBQUZDQVlBQUFCU0lWejZBQUFJd25wVVdIUlNZWGNnY0hKdlptbHNaU0IwZVhCbElHVjRhV1lBQUhqYXJaZnBzZVE0RG9ULzA0b3hnUmQ0bU1NellqMVk4K2NEcWFwKzU4Ukc3THpxTHFsRWlTU1FpVVRLclAvK1o1dS8rUE5TclltU1M2b3BXZjVpamRVM1RvcTlmKzE4T3h2UDkvMnhuakgzK2JxeDhneDRMZ1dPNGY0czZibi9kZDI5SjdpSHhwbDhtS2lNWjZCL0hxanhtYjk4bWNqZlE5QWQ2Zmw4SnFyUFJNSGZBZmRNMEc1WU50V1NQNGJRbjlDZTUyOGFpb2JHVnl5ZnQvM3RkeVo3VTFnbmVMK0NDNVp2SC96ZFFORC96b1RHU1RuZndvMzYwZlBLZHppM3VwdVFuL0prUCt6S2ZFWGxmZllGRmQ5K0JpV2tlNGZod3Vka3B2Znh4K3RPdmx3UEwvZzF4UjlXRHVNNTg1K3Z6LzVtMTZjazYvKzlaekY3cnh0ZGk0bVVwaWVvVjRqbmpCczdLUS9uc2NRbjgxODR6K2RUK1JRRGV3ZVFUenRzNXpOY2RSNVl0b3R1dXVhMlcrYzQzR0NMMFMrZk9Yby9BRXF2bFpCOTlTTllBNWhSUDI3N0RGWVRCSDBZd0J1NDZ0OTdjV2ZkZXBZYnJyRHdkTnpwSFpNNXBZTFJyMy9qOCt0RWV5dmxuZE5rK25aeXhiNjhNb3R0S0hMNnpWMEE0dmFMUjNJUy9QcDgvVk5jQXdqS1NYTWh3R2I3bmFLTGU3aGxEcGtWNk1DTnd2SFdtc3Z6bVlBVXNiYXdHUmRBd0NZWHhDVm5zL2ZaT2ZKWXdLY3hVZkVoK2c0RVRzUlBkdWxqQ0Fsd2l0ZTFlU2E3YzY4WGZ5K2pXUUFoSVlVTU5CUVRXRVdFRGY3a1dPQlFreUJSUkpKa0tWS2xwWkJpa3BSU1RpcCtMWWNjcytTVWN5NjU1bFpDaVVWS0tya1VVMnBwMWRlQU9FcE5OZGRTYTIyTlJSc3pONTV1M05CYTl6MzAyS1dubm52cHRiY0JmVVljTXRMSW81aFJSNXQraG9sT3pEVHpMTFBPdHR5Q1Npc3VXV25sVlZaZGJVTzFIWGJjc3RQT3UreTYyeHMxWnk2czN6Ny9PMnJ1aFpvL1NPbU4rWTBhaitiOG1zS3BuSWhpQm1JK09oRFBpZ0NFOW9xWkxTNUdieFE2eGN4V1QxV0laNWVpNEV5bmlJRmdYTTdMZG0vcy9pRDNDVGNUNC8rRm0zOGhaeFM2ZndNNW85RDlndHgzM0g1QWJhb0VEeHZNUVVqTFVKTnFBK1czdkMrTmYzT1VNUFlXS2hNQm1YTXpOb25xSEcyWmtsb1ByUUJmaVdzWnZieDZEK2RZSW9PUzdDQUVpaTNzRlcxTlc4ZXNmMDJRS2tsYnhlbHZJTy9NWEZ3Mlc1L3VzZlVrM1drWk5yMkJWZEphVE1Sa3U5blN4dFRnejI1V0REbWZhYXk3azBkbU5qUEZEWjVzYW5oMjcrMm9QTjg3OTB3cnFhZlZYVGhEdXY2ZlFaM2dEa3RaSTNZVEt0d244TkdyYXRrSkkwa2p3NzNGMzBaQ1RTdkVOSGVSVHZnd2k5Qm1kcnA5eDhabHlpZ2ZCcitNWlR0TEhHTnFoSnE4RTkvWmVaRnNrS0haVjkrdjFJRkNZWFV5NTN1QlBYWHAyalU5eVhYOVNTNTMrTVFQV0JJaUQxQzAxYzZwTmFpRnFISVltSmxta29hSDB6UHlTSFExODdnTU9VRG9MU3R2QVRsRkh4clJUOHhpZFZpNjd3cGpyeHBIS3I1UC9UV2JIbkUranMzWHZScUJVcjM5TE5uV09IRTBSVHJTSUdIclhaZUsxM1ZudmV1eTVUZ2l4TlRZTmJLSE5MVGJFeG1zSWZZMXQwWldrUkU1ODUvSTlHSEVnQXBwSW9NN3o1U2FtQk9DSms5cDYvMlRuQnVxNW1ZWTRMVXNRNmVJSzNkYlhlMHlxZTBEbmFzSHVuUjQzMnlibVlkL0hqVTZIRWZJcmdkNGYyb3MxbkNqN3pGdG5zamJLOG5KSmFWS241a3Q1RVBRc0E4RnlIdmZaaWlHZTQybGRLMDczQ3owSFpuQmticUVNcDNRZDFWczUyNGFUeXNMMFpLeHJFTnhadWtCRTVGVTg5aEY5WEY2RVJBVWlUT21oY0pGMzBxVmNYMldxMEVFV25NY09mZE0wOFJ1cnBWU2pNNU1sRFhTMFJ1SXBUTFpKeFNRUWZCN1V2ZXVyYnBqUk5La0lvN0ZyZGhUa1RuV1FpS3dVeFJmY0cxYTg0b0tZdDY0bnFoUUd6OEVTU2FsTWJPclBpak90VElpNUtqZGlCellxU1ZYS05zNkRZQUxPK3NaWjAyano2T2hwNnM1WkpPejNpczlvaWtZZnFRR3NMWlFaa1B6ZDZnd1hWK2EyMkV1US9wdWM2K2dxRUlhZGs4OGk1NkJPQmM4b2ZQUUl0T3FGcFpqSWg1aEk0N0V2L0tBa1NES2ppaEJrVlkwY2dLSkZhS2g3Q1BYR1hqRlNYUFZQa3NkZVpGY3lkSHBjQzRJRkVsYUVNZU5ETzdMNUtTK0JHa25EWlFLUXBzQ3poRUFoeDNTWEpXRk53R3BtTHlGVHJiVnZuOGdtRUhFaVcweWM5eXREQmdSMllqWEhqV1FkcnBtZGFqZ2ZGUHFJUlFLZVNrRjRPQXlUWFBReXJYWVoyOVZiSXMxMDNHYld3MlJoaWlUSGowTHVVSlR1a3NGYUVkTzA3WlFaaTlKZUx2eVlTVm5vQXhLMFlZdDBBUS9TNGRlSWRONmNjVTFMblFmTWZpeFZvakFJM2tlOW1ET2pDcEJ5YXhIMjhVajh4YUVROWcwU0szRnNQSnRSbmxWbU9xcmdtSW5RWGZaY3dWaW9NTHFyQkYvaE1lSWVBeW43RmVGdzdiRHR0QVczWHQ2T2dXMm85b1k5ZDBFeDk5TFppTWFnVytVOXJzWXpKOXEwTGNwVkV3MTdOa1E5WDIyaE9ZOFcyTC92WVJReXY1RHhjdEU4Nklpd25qTCtITVZxMmIrT2kyN2UxZTQrYUhFd1Y4S05xcVRUemZYbkRFVzUwTm5KYUxEOXZBT295WWUwUTd2ZWphL0ZqU3pZVE9YVnNPUG1HSGV5dllkRStUWThqQmJxVnkxUmEzZjVJMDA4akJUU3h1bkFuMkRYNTNLNHUwbUxLRU1oa0JJangvREdjRzdPWVp0d05STFRiaEFMVDFlcXVqYUtHTHE5REJVdmttSFFCaThTWWtQNGRVWTdFZHZkQkUxaDZ0VEY1aURXdDZTL0FneUhGSkpwdGU5Z0ZMbE9sQzljTktLU2VhMyt2a3VGRmNuU0F1eGtrc2lJdTMrMVRlTjl2UFRPay9qQkZwdG5OQ0pDcjI2ZWMzYXRXcVBVZU0xRTNlS2I0SUQ0SGs2aWxsVzlubDR3dFQ1VHk1dGROenk3WXI3T29ieE5FVjFETVlKSFJIcitwdFBHOWdSY2IrM3pEUW4vQzFpdm95K3hycERGbFBHZG5naVJscHV6ejg2UGJxb1NZcjE0NWo1Tkpody9PQkQ0bTNQeDYzRzZ6djhEY0JqMkhycjFYMGZOeDl1NEoySTVsL3g0ZnU2SHVkZmNhcDUwZnZWUGJ3czZXUFpIa3Rxam05RFJFSTRlL0UzM1NGL1RyZXExRlovY3V6TnRXMHZlM09ObTduR3NNMC8zdXViOWVwTWZtMTdrc2UydS94ZW9NS3dXcWF4a3B2KzdPY1lLSjUvc2w2cVZtcjdYc3RpK1hWWi9QNDE3THpWVkNldGY3TDdQS3FSS1kzeXRheGYzZjU1dHNiamlReWV2NVJyZUI5RGZ3eHZsQ2NwajkrOXB1MzZYZS9yMkhSZlhzWjdXdytBSnZoNHl1TzROc0NMSHdhL2pGWG9HaElzbzhyMHAzSUMrUVN4dndGOHpWcE9VdC9PZ2dBQUFZUnBRME5RU1VORElIQnliMlpwYkdVQUFIaWNmWkU5U01OQUhNVmZQOFFpRlFjcmlDZ0VxVTRXUkVVY3RRcEZxQkJxaFZZZFRDNzlnaVlOU1lxTG8rQmFjUEJqc2VyZzRxeXJnNnNnQ0g2QXVMazVLYnBJaWY5TENpMWlQRGp1eDd0N2o3dDNnTDllWnFvWkhBZFV6VEpTaWJpUXlhNEtuYThJSVlnK0RHTklZcVkrSjRwSmVJNnZlL2o0ZWhmaldkN24vaHpkU3M1a2dFOGdubVc2WVJGdkVFOXZXanJuZmVJSUswb0s4VG54bUVFWEpIN2t1dXp5RytlQ3czNmVHVEhTcVhuaUNMRlFhR081alZuUlVJbW5pS09LcWxHK1ArT3l3bm1MczFxdXN1WTkrUXZET1cxbG1lczBCNUhBSXBZZ1FvQ01La29vdzBLTVZvMFVFeW5hajN2NEJ4eS9TQzZaWENVd2NpeWdBaFdTNHdmL2c5L2Rtdm5KQ1RjcEhBYzZYbXo3WXdUbzNBVWFOZHYrUHJidHhna1FlQWF1dEphL1VnZG1Qa212dGJUb0VkQ3pEVnhjdHpSNUQ3amNBZnFmZE1tUUhDbEEwNS9QQSs5bjlFMVpvUGNXNkZwemUydnU0L1FCU0ZOWHlSdmc0QkFZTFZEMnVzZTdRKzI5L1h1bTJkOFBYSFp5bmoxbE4rUUFBQStMYVZSWWRGaE5URHBqYjIwdVlXUnZZbVV1ZUcxd0FBQUFBQUE4UDNod1lXTnJaWFFnWW1WbmFXNDlJdSs3dnlJZ2FXUTlJbGMxVFRCTmNFTmxhR2xJZW5KbFUzcE9WR042YTJNNVpDSS9QZ284ZURwNGJYQnRaWFJoSUhodGJHNXpPbmc5SW1Ga2IySmxPbTV6T20xbGRHRXZJaUI0T25odGNIUnJQU0pZVFZBZ1EyOXlaU0EwTGpRdU1DMUZlR2wyTWlJK0NpQThjbVJtT2xKRVJpQjRiV3h1Y3pweVpHWTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1Rrdk1ESXZNakl0Y21SbUxYTjViblJoZUMxdWN5TWlQZ29nSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNJaUNpQWdJQ0I0Yld4dWN6cHBjSFJqUlhoMFBTSm9kSFJ3T2k4dmFYQjBZeTV2Y21jdmMzUmtMMGx3ZEdNMGVHMXdSWGgwTHpJd01EZ3RNREl0TWprdklnb2dJQ0FnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpQ2lBZ0lDQjRiV3h1Y3pwemRFVjJkRDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDNOVWVYQmxMMUpsYzI5MWNtTmxSWFpsYm5Raklnb2dJQ0FnZUcxc2JuTTZjR3gxY3owaWFIUjBjRG92TDI1ekxuVnpaWEJzZFhNdWIzSm5MMnhrWmk5NGJYQXZNUzR3THlJS0lDQWdJSGh0Ykc1ek9rZEpUVkE5SW1oMGRIQTZMeTkzZDNjdVoybHRjQzV2Y21jdmVHMXdMeUlLSUNBZ0lIaHRiRzV6T21SalBTSm9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaV3hsYldWdWRITXZNUzR4THlJS0lDQWdJSGh0Ykc1ek9uUnBabVk5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmRHbG1aaTh4TGpBdklnb2dJQ0FnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklnb2dJQ0I0YlhCTlRUcEViMk4xYldWdWRFbEVQU0puYVcxd09tUnZZMmxrT21kcGJYQTZObUppWmpabFpHTXROMk0zTXkwME9EWXpMV0poTTJVdE5ERmxNakUyTXprME1XRTBJZ29nSUNCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2paa09XWTNZemMzTFRkallqa3ROR0l5T0MwNU5XVTVMVE0wTlRWbE1EZzNNVFJoTmlJS0lDQWdlRzF3VFUwNlQzSnBaMmx1WVd4RWIyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qVmlNRGN3TkRCbUxUa3hZbUV0TkdRMVlTMWlNVEl3TFRnME9XVTFNalJtTURBNVlTSUtJQ0FnUjBsTlVEcEJVRWs5SWpJdU1DSUtJQ0FnUjBsTlVEcFFiR0YwWm05eWJUMGlUR2x1ZFhnaUNpQWdJRWRKVFZBNlZHbHRaVk4wWVcxd1BTSXhOakk0TVRFNE5UY3lPVGMzTmpVeklnb2dJQ0JIU1UxUU9sWmxjbk5wYjI0OUlqSXVNVEF1TWpJaUNpQWdJR1JqT2tadmNtMWhkRDBpYVcxaFoyVXZjRzVuSWdvZ0lDQjBhV1ptT2s5eWFXVnVkR0YwYVc5dVBTSXhJZ29nSUNCNGJYQTZRM0psWVhSdmNsUnZiMnc5SWtkSlRWQWdNaTR4TUNJK0NpQWdJRHhwY0hSalJYaDBPa3h2WTJGMGFXOXVRM0psWVhSbFpENEtJQ0FnSUR4eVpHWTZRbUZuTHo0S0lDQWdQQzlwY0hSalJYaDBPa3h2WTJGMGFXOXVRM0psWVhSbFpENEtJQ0FnUEdsd2RHTkZlSFE2VEc5allYUnBiMjVUYUc5M2JqNEtJQ0FnSUR4eVpHWTZRbUZuTHo0S0lDQWdQQzlwY0hSalJYaDBPa3h2WTJGMGFXOXVVMmh2ZDI0K0NpQWdJRHhwY0hSalJYaDBPa0Z5ZEhkdmNtdFBjazlpYW1WamRENEtJQ0FnSUR4eVpHWTZRbUZuTHo0S0lDQWdQQzlwY0hSalJYaDBPa0Z5ZEhkdmNtdFBjazlpYW1WamRENEtJQ0FnUEdsd2RHTkZlSFE2VW1WbmFYTjBjbmxKWkQ0S0lDQWdJRHh5WkdZNlFtRm5MejRLSUNBZ1BDOXBjSFJqUlhoME9sSmxaMmx6ZEhKNVNXUStDaUFnSUR4NGJYQk5UVHBJYVhOMGIzSjVQZ29nSUNBZ1BISmtaanBUWlhFK0NpQWdJQ0FnUEhKa1pqcHNhUW9nSUNBZ0lDQnpkRVYyZERwaFkzUnBiMjQ5SW5OaGRtVmtJZ29nSUNBZ0lDQnpkRVYyZERwamFHRnVaMlZrUFNJdklnb2dJQ0FnSUNCemRFVjJkRHBwYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT21SaU1HTXhZalUxTFRSa1pXSXROREEzTWkwNE5qUmhMV015TkRJeFl6QTNOelZtTkNJS0lDQWdJQ0FnYzNSRmRuUTZjMjltZEhkaGNtVkJaMlZ1ZEQwaVIybHRjQ0F5TGpFd0lDaE1hVzUxZUNraUNpQWdJQ0FnSUhOMFJYWjBPbmRvWlc0OUlpc3dNVG93TUNJdlBnb2dJQ0FnUEM5eVpHWTZVMlZ4UGdvZ0lDQThMM2h0Y0UxTk9raHBjM1J2Y25rK0NpQWdJRHh3YkhWek9rbHRZV2RsVTNWd2NHeHBaWEkrQ2lBZ0lDQThjbVJtT2xObGNTOCtDaUFnSUR3dmNHeDFjenBKYldGblpWTjFjSEJzYVdWeVBnb2dJQ0E4Y0d4MWN6cEpiV0ZuWlVOeVpXRjBiM0krQ2lBZ0lDQThjbVJtT2xObGNTOCtDaUFnSUR3dmNHeDFjenBKYldGblpVTnlaV0YwYjNJK0NpQWdJRHh3YkhWek9rTnZjSGx5YVdkb2RFOTNibVZ5UGdvZ0lDQWdQSEprWmpwVFpYRXZQZ29nSUNBOEwzQnNkWE02UTI5d2VYSnBaMmgwVDNkdVpYSStDaUFnSUR4d2JIVnpPa3hwWTJWdWMyOXlQZ29nSUNBZ1BISmtaanBUWlhFdlBnb2dJQ0E4TDNCc2RYTTZUR2xqWlc1emIzSStDaUFnUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrQ2lBOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0Nqdy9lSEJoWTJ0bGRDQmxibVE5SW5jaVB6N0owSVQrQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDVRZ0VGd2tneG9yU2N3QUFBQ1JKUkVGVUtNOWpkUEVJLzgvQXdNQ3daOGRLUmdZR0JnWjY4WmtZUmhwZ0hIRkJEUUJEbFR2TG82NkJUd0FBQUFCSlJVNUVya0pnZ2c9PSlcbn1cblxuLmFzLXNwbGl0LWd1dHRlci1jdXN0b20uaXMtdmVydGljYWwuaXMtZGFyay1tb2RlID4gLmFzLXNwbGl0LWd1dHRlci1pY29uLWN1c3RvbXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUI0QUFBQUZDQU1BQUFCbC82eklBQUFBQmxCTVZFVUFBQURNek16SVQ4QXlBQUFBQVhSU1RsTUFRT2JZWmdBQUFCUkpSRUZVZUFGallHUmt3SU1KU2VNSGxCa09BQlA3QUVHelN1UEtBQUFBQUVsRlRrU3VRbUNDXCIpO1xufVxuXG4uYXMtc3BsaXQtZ3V0dGVyLWN1c3RvbS5pcy1ob3Jpem9udGFsLmlzLWRhcmstbW9kZSA+IC5hcy1zcGxpdC1ndXR0ZXItaWNvbi1jdXN0b217XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBVUFBQUFlQ0FZQUFBRGtmdFM5QUFBQUlrbEVRVlFvVTJNNGMrYk1meEFHQWdZWW13R3JJSWlEanJFTGpwbzVhaVplTXdGK3lObk9zNUtTdmdBQUFBQkpSVTVFcmtKZ2dnPT1cIik7XG59XG5cbi5pZnJhbWUtb3ZlcmxheXtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIHotaW5kZXg6IDI7XG59XG5cbltoaWRkZW5de1xuICAgIGRpc3BsYXk6bm9uZTtcbn1cblxuYXMtc3BsaXQtYXJlYSA+ICBhcHAtaWZyYW1lLXBhcnQsXG5hcy1zcGxpdC1hcmVhID4gIGFwcC1odG1sLXBhcnQsXG5hcy1zcGxpdC1hcmVhID4gIGFwcC1jc3MtcGFydCxcbmFzLXNwbGl0LWFyZWEgPiAgYXBwLWpzLXBhcnR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFpbi1jb250YWluZXIubGF5b3V0LXR5cGUtMSAjY29kZS1wYXJ0cyB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JiYjtcbn1cblxuYXMtc3BsaXQtYXJlYS5jb2RlLWNvbXBvbmVudC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLyphcy1zcGxpdC1hcmVhLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lciA+IGFwcC1jc3MtcGFydCxcbmFzLXNwbGl0LWFyZWEuY29kZS1jb21wb25lbnQtY29udGFpbmVyID4gYXBwLWpzLXBhcnQsXG5hcy1zcGxpdC1hcmVhLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lciA+IGFwcC1odG1sLXBhcnR7XG4gICAgXG59Ki9cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MThweCkgYW5kIChtaW4taGVpZ2h0OjU4MXB4KXtcbiAgICA6aG9zdCA6Om5nLWRlZXAgYXBwLWlmcmFtZS1wYXJ0LmxheW91dC10eXBlLTF7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB9XG4gICAgXG4gICAgOmhvc3QgOjpuZy1kZWVwIGFwcC1pZnJhbWUtcGFydC5sYXlvdXQtdHlwZS0ze1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG5cbiAgICAubWFpbi1jb250YWluZXIuZnVsbC1zY3JlZW4taWZyYW1lIC5pZnJhbWUtYXJlYVtjbGFzc10ge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGZsZXg6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAyM3B4O1xuICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjNweCk7XG4gICAgfVxuICAgIFxuICAgIC5tYWluLWNvbnRhaW5lci5mdWxsLXNjcmVlbi1pZnJhbWUgLmZ1bGxzY3JlZW4taWZyYW1lLWhlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAvKioqKioqKioqKioqKioqL1xuICAgIC5maWRkbGUtc2l6ZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5mb3JtLWNvbnRyb2wuZmlkZGxlLWlucHV0IHtcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIH1cblxuICAgIC5maWRkbGUtdGl0bGVbY2xhc3NdIC5maWRkbGUtaW5wdXRbY2xhc3Nde1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gOTRweCAtIDI0cHggLSAxMnB4IC0gNHB4KTtcbiAgICB9XG5cbiAgICAubG9nby10aXRsZS1jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDQ0cHgpO1xuICAgICAgLyohIHdpZHRoOiBhdXRvOyAqL1xuICAgIH1cblxuICAgIC5maWRkbGUtdGl0bGUge1xuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgICB9XG5cbiAgICAuZmlkZGxlLXNpemUge1xuICAgICAgd2lkdGg6IDk0cHg7XG4gICAgfVxuXG4gICAgLmZ1bGxzY3JlZW4taWZyYW1lLWJ0bi5idG4ge1xuICAgICAgd2lkdGg6IDI2cHg7XG4gICAgfVxuICAgIFxufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1vbmFjby1lZGl0b3IgLm1vbmFjby1ob3ZlciB7XG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMTAyICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbjpob3N0IDo6bmctZGVlcCAubW9uYWNvLXNjcm9sbGFibGUtZWxlbWVudHtcbiAgICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1vbmFjby1lZGl0b3IgLnBhcmFtZXRlci1oaW50cy13aWRnZXR7XG4gICAgei1pbmRleDogMTAzICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjgxOHB4KSB7XG4gICAgI2NvZGUtcGFydHMgLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lci5mdWxsc2NyZWVuIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAxMjUgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzowcHg7XG4gICAgfVxuICAgICNjb2RlLXBhcnRzICA+IC5jb2RlLXBhcnQtdGl0bGV7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjViNWI1O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6ODE3cHgpLCAobWF4LWhlaWdodDo1ODBweCkgeyAgXG5cbiAgICAuaGlkZS1tb2JpbGV7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuaWZyYW1lLWFyZWEge1xuICAgICAgICBmbGV4OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIDpob3N0IDo6bmctZGVlcCBhcy1zcGxpdFtjbGFzc10gPiAuYXMtc3BsaXQtZ3V0dGVyW2NsYXNzXSxcbiAgICAuYXMtc3BsaXQtZ3V0dGVyLWN1c3RvbXtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cblxuICAgICNtYWluLWhlYWRlcntcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDYycHg7XG4gICAgICAgIHBhZGRpbmc6IDNweCAwIDVweCAwO1xuICAgIH1cbiAgICBcbiAgICAjY29kZS1wYXJ0cy10aXRsZS1tb2JpbGV7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgI21haW4tcmVzaXplcntcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cblxuICAgIC5jb2RlLXBhcnQtdGl0bGUtYnRuLFxuICAgIC5mdWxsc2NyZWVuLWlmcmFtZS1idG4sXG4gICAgLnN0cmV0Y2gtdi1pZnJhbWUtYnRuLFxuICAgIC5zdHJldGNoLWgtaWZyYW1lLWJ0bntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubGF5b3V0cy1saXN0LWNvbnRhaW5lcntcbiAgICAgICAgLypvcGFjaXR5OiAwLjU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyovXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG5cbiAgICAubGF5b3V0cy1saXN0e1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuXG4gICAgLm1haW4tY29udGFpbmVye1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MXB4KTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmZpZGRsZS1zaXple1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5jb2RlLXBhcnQtdGl0bGV7XG4gICAgICAgIGRpc3BsYXk6bm9uZVxuICAgIH1cblxuICAgIC5jb2RlLWNvbXBvbmVudCB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYjViNWI1O1xuICAgIH1cblxuICAgIC5hcy1zcGxpdC1vdXRlcntcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFzLXNwbGl0LWd1dHRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYXMtc3BsaXQtZ3V0dGVyLWN1c3RvbXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICBhcy1zcGxpdC1hcmVhLmFzLXNwbGl0LWFyZWEtY29kZS1wYXJ0cyB7XG4gICAgICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OjUwJSAhaW1wb3J0YW50O1xuICAgICAgICBmbGV4Om5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgb3JkZXI6MCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGFzLXNwbGl0LWFyZWEuYXMtc3BsaXQtYXJlYS1pZnJhbWUge1xuICAgICAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDo1MCUgIWltcG9ydGFudDtcbiAgICAgICAgZmxleDpub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFzLXNwbGl0LW91dGVyLm5vLXJlc3VsdC1tb2JpbGUgPiAuYXMtc3BsaXQtYXJlYS1jb2RlLXBhcnRzLFxuICAgIC5hcy1zcGxpdC1vdXRlci5uby1yZXN1bHQtbW9iaWxlID4gLmFzLXNwbGl0LWFyZWEtaWZyYW1le1xuICAgICAgICBoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5hcy1zcGxpdC1vdXRlci5uby1jb2RlLW1vYmlsZSA+IC5hcy1zcGxpdC1hcmVhLWNvZGUtcGFydHMsXG4gICAgLmFzLXNwbGl0LW91dGVyLm5vLWNvZGUtbW9iaWxlID4gLmFzLXNwbGl0LWFyZWEtaWZyYW1le1xuICAgICAgICBoZWlnaHQ6MTAwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGFzLXNwbGl0LWFyZWEuY29kZS1jb21wb25lbnQtY29udGFpbmVye1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgZmxleDogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5hcHAtbG9hZGVye1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHRvcDogNHB4O1xuICAgICAgICByaWdodDogNHB4O1xuICAgIH1cblxuICAgIC5maWRkbGUtdGl0bGV7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG5cbiAgICAuZmlkZGxlLWxvZ297XG4gICAgICAgIGxlZnQ6IDRweDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgfVxuXG4gICAgLypoaWRlIGlmcmFtZSByZXNpemluZyBlbXB0eSBhcmVhIGZvciBtb2JpbGUgZGV2aWNlcyovXG4gICAgXG4gICAgLmFzLXNwbGl0LWFyZWEtaWZyYW1lID4gLmVtcHR5LWFyZWF7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIC5hcy1zcGxpdC1ndXR0ZXItY3VzdG9tIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubWFpbi1jb250YWluZXIuZnVsbC1zY3JlZW4taWZyYW1lIC5mdWxsc2NyZWVuLWlmcmFtZS1oZWFkZXJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmlmcmFtZS1vdmVybGF5LWZvci1kcm9we1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDAwcHgpe1xuICAgIC5oZWFkZXItYnRucy1jb250YWluZXIgID4gKjpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICBtYXJnaW4tcmlnaHQ6M3B4O1xuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XG4gICAgICAgIHBhZGRpbmc6IDFweCAycHg7XG4gICAgfVxuXG4gICAgLmhlYWRlci1idG5zLWNvbnRhaW5lciAgPiAqOmxhc3QtY2hpbGR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjNweDtcbiAgICAgICAgcGFkZGluZzogMXB4IDJweDtcbiAgICB9XG5cbiAgICAubG9nby10aXRsZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICBcbiAgICAuZmlkZGxlLWxvZ28ge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxufVxuXG5hcHAtbW9kYWwgLm1vZGFsLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAycHggNHB4O1xufVxuYXBwLW1vZGFsIC5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAycHggNHB4O1xufVxuXG5hcHAtbW9kYWwgLm1vZGFsLWhlYWRlciAubW9kYWwtY2xvc2UtYnRue1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgdHJhbnNmb3JtOm5vbmU7XG59XG5cbmFwcC1tb2RhbCAubW9kYWwtaGVhZGVyIC5tb2RhbC12YWxpZGF0ZS1idG57XG4gICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgaGVpZ2h0OiAzM3B4O1xufVxuXG4udGhlbWVzLW1lbnUgbGkuc2VsZWN0ZWQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTsqL1xuICAgIC8qY29sb3I6ICNGRkZGRkY7Ki9cbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmNsaW5naW5ne1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjbGluZztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtJQUNJLGNBQWM7SUFDZCx3QkFBZ0I7WUFBaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5QkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBOzs7SUFHSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFt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SUFDYiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLGtCQUFrQjtBQUN0QjtBQU1BLGc1dkVBQWc1dkUiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDRweCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzhweCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNiYmI7ICAgIFxufVxuXG4jbWFpbi1oZWFkZXJ7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjYmJiO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKmJhY2tncm91bmQ6ICNmMGYwZjA7Ki9cbiAgICAvKmJhY2tncm91bmQ6ICNmOWY5Zjk7Ki9cbn1cblxuLmNvZGUtcGFydC10aXRsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I1YjViNTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2I1YjViNTtcbiAgICAvKmNvbG9yOiAjOGI4YjhiOyovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXB4IDAgMXB4IDVweDtcbiAgICAvKmJhY2tncm91bmQ6ICNGRkZGRkY7Ki9cbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi8qLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lci1jc3MgLmNvZGUtcGFydC10aXRsZSxcbi5jb2RlLWNvbXBvbmVudC1jb250YWluZXItanMgLmNvZGUtcGFydC10aXRsZXtcbiAgICBjdXJzb3I6IHJvdy1yZXNpemU7XG59Ki9cblxuLmNvZGUtcGFydC10aXRsZSA+IHNwYW4ge1xuICAgIGNvbG9yOiAjODE4MTgxO1xuICAgIHVzZXItc2VsZWN0Om5vbmU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNvZGUtcGFydC10aXRsZS1idG5zLWNvbnRhaW5lcntcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29kZS1wYXJ0LXRpdGxlLWJ0bntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhjOGM4YztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIG1pbi13aWR0aDogMTRweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvZGUtcGFydC10aXRsZS1idG4gLmZhLWJhcnMudmVydGljYWx7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uY29kZS1wYXJ0LXRpdGxlLWJ0biAuZmEge1xuICAgIGhlaWdodDogMTJweDtcbiAgICAvKndpZHRoOiAxNHB4OyovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmZ1bGxzY3JlZW4taWZyYW1lLWJ0biAuZmEsXG4uc3RyZXRjaC12LWlmcmFtZS1idG4gLmZhLFxuLnN0cmV0Y2gtaC1pZnJhbWUtYnRuIC5mYXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZnVsbHNjcmVlbi1pZnJhbWUtYnRuLFxuLnN0cmV0Y2gtdi1pZnJhbWUtYnRuLFxuLnN0cmV0Y2gtaC1pZnJhbWUtYnRuIHtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxcHggNHB4O1xuICAgIGhlaWdodDogMjhweDtcbn1cblxuLmZ1bGxzY3JlZW4taWZyYW1lLWJ0bi1zZWNvbmRhcnl7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIHBhZGRpbmc6IDBweCAzcHg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZnVsbHNjcmVlbi1pZnJhbWUtYnRuIC5mYSxcbi5zdHJldGNoLXYtaWZyYW1lLWJ0biAuZmEsXG4uc3RyZXRjaC1oLWlmcmFtZS1idG4gLmZhe1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuLmFzLXNwbGl0LWFyZWFbY2xhc3NdIHtcbiAgICAvKm1pbi1oZWlnaHQ6IDI1cHg7Ki9cbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteDpoaWRkZW47XG59XG5cbi5jb2RlLWNvbXBvbmVudC1jb250YWluZXI6bm90KC52ZXJ0aWNhbC10aXRsZS1tb2RlKSAuY29kZS1wYXJ0LXRpdGxlLWJ0bjpudGgtbGFzdC1jaGlsZChuKzIpe1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MThweCkgYW5kIChtaW4taGVpZ2h0OjU4MXB4KXtcblxuICAgIC52ZXJ0aWNhbC10aXRsZS1tb2RlIC5jb2RlLXBhcnQtdGl0bGUtYnRuOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAuY29kZS1jb21wb25lbnQtY29udGFpbmVyLnZlcnRpY2FsLXRpdGxlLW1vZGUuZnVsbHNjcmVlbiAuY29kZS1wYXJ0LXRpdGxlLWJ0bjpudGgtbGFzdC1jaGlsZChuKzIpe1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5jb2RlLWNvbXBvbmVudC1jb250YWluZXIudmVydGljYWwtdGl0bGUtbW9kZTpub3QoLmZ1bGxzY3JlZW4pIC5jb2RlLXBhcnQtdGl0bGUtYnRue1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG5cbiNjb2RlLXBhcnRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2JiYjtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cblxuI2NvZGUtcGFydHMgPiAuY29kZS1jb21wb25lbnQtY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzMuMyU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIG1pbi1oZWlnaHQ6IDMycHg7XG59XG5cbiNjb2RlLXBhcnRzID4gLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lci5oYXMtcmVzaXplcntcbiAgICBwYWRkaW5nLXRvcDo1cHg7XG59XG5cbiNjb2RlLXBhcnRzID4gLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lciA+IC5jb2RlLWNvbXBvbmVudHtcbiAgICAvKmhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7Ki9cbiAgICBoZWlnaHQ6YXV0bztcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgLypkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Ki9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59IFxuXG4ubWFpbi1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFpbi1jb250YWluZXIubGF5b3V0LXR5cGUtMyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4ubWFpbi1yZXNpemVyLWZsb29ye1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgei1pbmRleDoxMDA7XG4gICAgbGVmdDowO1xuICAgIHRvcDowO1xufVxuI21haW4tcmVzaXplciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNWI1YjU7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgei1pbmRleDoxMDE7XG59XG4jbWFpbi1yZXNpemVyLmxheW91dC10eXBlLTEsXG4jbWFpbi1yZXNpemVyLmxheW91dC10eXBlLTN7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICAgIGhlaWdodDoxMDAlO1xufVxuXG4vKiNtYWluLXJlc2l6ZXIucmVzaXplLW1vZGUubGF5b3V0LXR5cGUtMSxcbiNtYWluLXJlc2l6ZXIucmVzaXplLW1vZGUubGF5b3V0LXR5cGUtM3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoI2JiYiwgI2JiYiAxNXB4LCAjRkZGRkZGIDE1cHgsICNGRkZGRkYgMjBweCk7XG59Ki9cblxuI21haW4tcmVzaXplcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FmYWZhZjtcbn1cblxuXG4jY29kZS1wYXJ0cyA+IDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLXRvcDpub25lO1xufVxuXG5hcHAtaWZyYW1lLXBhcnR7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBmbGV4LWdyb3c6MTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLypib3gtc2hhZG93OiAwIDAgMCAxcHggI2JiYjsqL1xufVxuXG5hcy1zcGxpdC1hcmVhLmFzLXNwbGl0LWFyZWEtaWZyYW1lLmFzLXNwbGl0LWFyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmFzLXNwbGl0LWFyZWEuYXMtc3BsaXQtYXJlYS1pZnJhbWUuaXMtdmVydGljYWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmFzLXNwbGl0LWFyZWEuYXMtc3BsaXQtYXJlYS1pZnJhbWUuaXMtaG9yaXpvbnRhbCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmlmcmFtZS1hcmVhe1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jY29kZS1wYXJ0cy10aXRsZS1tb2JpbGV7XG4gICAgZGlzcGxheTpub25lO1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuI2NvZGUtcGFydHMtdGl0bGUtbW9iaWxlIGEge1xuICAgIGJvcmRlcjoxcHggc29saWQgIzhiOGI4YjtcbiAgICBib3JkZXItcmFkaXVzOjJweDtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgcGFkZGluZzogM3B4IDBweCAzcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOjU0cHg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbiNjb2RlLXBhcnRzLXRpdGxlLW1vYmlsZSBhLmFjdGl2ZSB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI2NvZGUtcGFydHMtdGl0bGUtbW9iaWxlIGE6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1sZWZ0OjNweDtcbn1cblxuI2NvZGUtcGFydHMtdGl0bGUtbW9iaWxlIGE6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OjNweDtcbn1cblxuLnNoYXJlLWNvZGUtYnRuLFxuLnJlc3NvdXJjZXMtY29kZS1idG4sXG4udGhlbWVzLWJ0bixcbi5jb25zb2xlLWJ0blxue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJnYigxMTgsIDExOCwgMTE4KTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjb2xvcjpyZ2IoMCwwLDApO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zaGFyZS1jb2RlLWJ0bixcbi5yZXNzb3VyY2VzLWNvZGUtYnRuLFxuLmNvbnNvbGUtYnRue1xuICAgIHBhZGRpbmc6IDFweCA2cHg7XG59XG5cbi50aGVtZXMtYnRue1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBwYWRkaW5nOiAxcHggM3B4O1xufVxuXG4udGhlbWVzLWJ0biBpe1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2hhcmUtY29kZS1idG46YWN0aXZlLFxuLnJlc3NvdXJjZXMtY29kZS1idG46YWN0aXZlLFxuLnRoZW1lcy1idG46YWN0aXZlLFxuLmZ1bGxzY3JlZW4taWZyYW1lLWJ0bjpub3QoLmZ1bGxzY3JlZW4taWZyYW1lLWJ0bi1zZWNvbmRhcnkpOmFjdGl2ZSxcbi5jb25zb2xlLWJ0bjphY3RpdmUsXG4uc3RyZXRjaC12LWlmcmFtZS1idG46YWN0aXZlLFxuLnN0cmV0Y2gtaC1pZnJhbWUtYnRuOmFjdGl2ZXtcbiAgICBwYWRkaW5nLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG59XG4uc2hhcmUtY29kZS1idG46aG92ZXIsXG4ucmVzc291cmNlcy1jb2RlLWJ0bjpob3Zlcixcbi50aGVtZXMtYnRuOmhvdmVyLFxuLmNvbnNvbGUtYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbi5zaGFyZS1jb2RlLWJ0biBzcGFuLFxuLnJlc3NvdXJjZXMtY29kZS1idG4gc3Bhbixcbi50aGVtZXMtYnRuIHNwYW4sXG4uY29uc29sZS1idG4gc3BhbntcbiAgICBkaXNwbGF5OmJsb2NrO1xufVxuXG4uaGVhZGVyLWJ0bnMtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1idG5zLWNvbnRhaW5lciA+IGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6M3B4O1xuICAgIG1hcmdpbi1yaWdodDozcHg7XG4gICAgcGFkZGluZzogMXB4IDRweDtcbn1cbiAgXG4uaGVhZGVyLWJ0bnMtY29udGFpbmVyID4gYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDowcHg7XG59XG5cbi5oZWFkZXItYnRucy1jb250YWluZXIgPiBidXR0b246Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OjBweDtcbn1cblxuLmhlYWRlci1idG5zLWNvbnRhaW5lciAgPiAucmVzc291cmNlcy1jb2RlLWJ0bixcbi5oZWFkZXItYnRucy1jb250YWluZXIgID4gLmxheW91dHMtbGlzdC1jb250YWluZXIsXG4uaGVhZGVyLWJ0bnMtY29udGFpbmVyICA+IC5zaGFyZS1jb2RlLWJ0bixcbi5oZWFkZXItYnRucy1jb250YWluZXIgPiAudGhlbWVzLWJ0bixcbi5oZWFkZXItYnRucy1jb250YWluZXIgPiAuY29uc29sZS1idG57XG4gICAgaGVpZ2h0OjMwcHg7XG59XG5cbi5oZWFkZXItYnRucy1jb250YWluZXIgPiAudGhlbWVzLWJ0bntcbiAgICBtYXJnaW4tcmlnaHQ6NnB4O1xuICAgIHBhZGRpbmc6IDAgNnB4O1xufVxuXG4udGhlbWVzLWJ0bi1jb250YWluZXJ7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGF5cGFsLWJ0bi1jb250YWluZXIge1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLnBheXBhbC1idG4tY29udGFpbmVyIGRpdiNkb25hdGUtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMjhweDtcblxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL3BheXBhbC1pY29uLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG59XG5cbjo6bmctZGVlcCBkaXYjZG9uYXRlLWJ1dHRvbiBpbWd7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuaS5mYS5mYS1zb3J0LWRlc2Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMnB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHJpZ2h0OjFweDtcbn1cblxuaS5mYS5mYS1zb3J0LWFzYyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMHB4O1xufVxuXG46Om5nLWRlZXAgLnBheXBhbC1idG4tY29udGFpbmVyICNkb25hdGUtYnV0dG9uIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xufVxuXG4ucGF5cGFsLWJ0bi1jb250YWluZXIgLmJ0bi5wYXlwYWwtYnRuIGJ1dHRvbi5sYXlvdXRzLWJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGF5cGFsLWJ0bi1jb250YWluZXIgdWwuZG9uYXRpb25zLW1lbnUsXG4udGhlbWVzLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoMTAwJSArIDdweCk7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDE0M3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIFxuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAvKnRyYW5zaXRpb246IDAuMnMgYWxsOyovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGhlaWdodDogMTU5cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3BhY2l0eTowO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4udGhlbWVzLW1lbnV7XG4gICAgd2lkdGg6MjAwcHg7XG59XG5cbi50aGVtZXMtbWVudSBsaSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ucGF5cGFsLWJ0bi1jb250YWluZXIgdWwuZG9uYXRpb25zLW1lbnUuc2hvd24sXG4udGhlbWVzLW1lbnUuc2hvd24ge1xuICAgIGhlaWdodDoxNTlweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMnB4ICM4YjhiOGI7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIG92ZXJmbG93OmF1dG87XG59XG5cbi5wYXlwYWwtYnRuLWNvbnRhaW5lciB1bC5kb25hdGlvbnMtbWVudSA+IGxpOmZpcnN0LWNoaWxkIH4gbGksXG4udGhlbWVzLW1lbnUgPiBsaTpmaXJzdC1jaGlsZCB+IGxpIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzhiOGI4YjVlO1xufVxuXG4ucGF5cGFsLWJ0bi1jb250YWluZXIgdWwuZG9uYXRpb25zLW1lbnUgPiBsaSxcbi50aGVtZXMtbWVudSA+IGxpIHtcbiAgICBwYWRkaW5nOiA4cHggNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvKnRyYW5zaXRpb246IDAuMnMgYWxsOyovXG59XG5cbi5wYXlwYWwtYnRuLWNvbnRhaW5lciB1bC5kb25hdGlvbnMtbWVudSA+IGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGI4YjhiMjY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmxheW91dHMtbGlzdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOjFweCA2cHg7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMXB4IDBweDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5sYXlvdXRzLWxpc3QtY29udGFpbmVyID4gc3BhbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7ICAgXG59XG5cbi5sYXlvdXRzLWxpc3QtY29udGFpbmVyID4gc3BhbiBpLmZhe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDdweDtcbn1cblxuLnNob3duIGkuZmEtc29ydC1hc2N7XG4gICAgYm90dG9tOiAwcHg7XG59XG5cbi5sYXlvdXR7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGF5b3V0OmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM5LDEzOSwxMzksMC4yKTtcbn1cblxuLmxheW91dC5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzhiOGI4YjtcbiAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMCAwIDBweCAxcHggIzhiOGI4Yjtcbn1cblxuLmxheW91dC5hY3RpdmUgPiBkaXY6Zmlyc3QtY2hpbGR7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkICNGRkZGRkY7XG59XG5cbi5sYXlvdXQuYWN0aXZlID4gZGl2OmZpcnN0LWNoaWxkID4gZGl2e1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjRkZGRkZGO1xufVxuLyoqKiovXG4ubGF5b3V0LTEge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4YjhiOGI7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA0MXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubGF5b3V0LTEgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIHdpZHRoOiAyNyU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCAjOGI4YjhiO1xufVxuXG4ubGF5b3V0LTEgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzMuNSU7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICM4YjhiOGI7XG59XG5cbi5sYXlvdXQtMSA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLyoqKiovXG4ubGF5b3V0LTIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4YjhiOGI7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA0MXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmxheW91dC0yID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICBoZWlnaHQ6IDM1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdXRsaW5lOiAycHggc29saWQgIzhiOGI4YjtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGF5b3V0LTIgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMzMuNSU7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICM4YjhiOGI7XG59XG5cbi5sYXlvdXQtMiA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG4vKioqKi9cbi5sYXlvdXQtMyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzhiOGI4YjtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQxcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5sYXlvdXQtMyA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDI3JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkICM4YjhiOGI7XG59XG5cbi5sYXlvdXQtMyA+IGRpdjpmaXJzdC1jaGlsZCA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMy41JTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgIzhiOGI4Yjtcbn1cblxuLmxheW91dC0zID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4vKioqKi9cbi5sYXlvdXQtNCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzhiOGI4YjtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQxcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW4tcmV2ZXJzZTtcbn1cblxuLmxheW91dC00ID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICBoZWlnaHQ6IDM1JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdXRsaW5lOiAycHggc29saWQgIzhiOGI4YjtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGF5b3V0LTQgPiBkaXY6Zmlyc3QtY2hpbGQgPiBkaXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMzMuNSU7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkICM4YjhiOGI7XG59XG5cbi5sYXlvdXQtNCA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG4vKioqKi9cblxuLmxheW91dHMtbGlzdHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHBhZGRpbmc6OHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLyp0cmFuc2l0aW9uOiBhbGwgMC4yczsqL1xuICAgIHRvcDogY2FsYygxMDAlICsgOHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IDJweCAjOGI4YjhiO1xuICAgIHotaW5kZXg6IDEwMjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHJpZ2h0OjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MThweCkgYW5kIChtaW4taGVpZ2h0OjU4MXB4KXtcbiAgICAucHJldHRpZnktbW9iaWxlLWNvZGV7XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG5cbiAgICAuY29kZS1jb21wb25lbnQtY29udGFpbmVyLnZlcnRpY2FsLXRpdGxlLW1vZGU6bm90KC5mdWxsc2NyZWVuKSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGJvcmRlci10b3A6MnB4IHNvbGlkICNiNWI1YjU7XG4gICAgfVxuXG4gICAgLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lci52ZXJ0aWNhbC10aXRsZS1tb2RlOm5vdCguZnVsbHNjcmVlbikgPiAuY29kZS1wYXJ0LXRpdGxlIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAxcHggMnB4IDAgMnB4O1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjViNWI1O1xuICAgIH1cblxuICAgIC5jb2RlLWNvbXBvbmVudC1jb250YWluZXIudmVydGljYWwtdGl0bGUtbW9kZTpub3QoLmZ1bGxzY3JlZW4pID4gYXBwLWh0bWwtcGFydC5jb2RlLWNvbXBvbmVudCB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICB9XG5cbiAgICAuY29kZS1jb21wb25lbnQtY29udGFpbmVyLnZlcnRpY2FsLXRpdGxlLW1vZGU6bm90KC5mdWxsc2NyZWVuKSA+IC5jb2RlLXBhcnQtdGl0bGUgPiAuY29kZS1wYXJ0LXRpdGxlLWJ0bnMtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgZmxleDogbm9uZTtcbiAgICB9XG5cbiAgICAuY29kZS1jb21wb25lbnQtY29udGFpbmVyLnZlcnRpY2FsLXRpdGxlLW1vZGU6bm90KC5mdWxsc2NyZWVuKSA+IC5jb2RlLXBhcnQtdGl0bGUgPiBzcGFuIHtcbiAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG5cblxuICAgIC5jb2RlLXBhcnQtdGl0bGUtYnRuIC5mYS1hcnJvd3MtaC12ZXJ0aWNhbCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAuY29kZS1wYXJ0LXRpdGxlLWJ0biAuZmEtYXJyb3dzLXYgc3BhbixcbiAgICAuY29kZS1wYXJ0LXRpdGxlLWJ0biAuZmEtYXJyb3dzLWggc3BhbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICBcbiAgICAuY29kZS1wYXJ0LXRpdGxlLWJ0bi52ZXJ0aWNhbC10aXRsZS1tb2RlIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAuY29kZS1wYXJ0LXRpdGxlLWJ0biAuZmEtYXJyb3dzLWgtdmVydGljYWwgPiBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uZmlkZGxlLXRpdGxlIC5maWRkbGUtaW5wdXR7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAvKmJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTtcbiAgICBoZWlnaHQ6IDE5cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4OyovXG59XG5cbi5hcHAtbG9hZGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5maWRkbGUtdGl0bGV7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZpZGRsZS10aXRsZSA+IHNwYW57XG4gICAgbWFyZ2luLXJpZ2h0OjVweDtcbn1cblxuLmZpZGRsZS1zaXple1xuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG5cbi5maWRkbGUtc2l6ZSBzcGFuLnh7XG4gICAgbWFyZ2luOiAwIDNweDtcbn1cblxuLmZpZGRsZS1zaXplLWhhY2suZmlkZGxlLXNpemV7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGNvbG9yOiAjYzljOWM5O1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCA0cHggIzAwMDAwMDtcbiAgICB3aWR0aDphdXRvO1xufVxuXG4uZmlkZGxlLXNpemUtaGFjayBzcGFue1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZmlkZGxlLXRpdGxlIC5maWRkbGUtc2l6ZSAud2lkdGgsXG4uZmlkZGxlLXRpdGxlIC5maWRkbGUtc2l6ZSAuaGVpZ2h0IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIC1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5maWRkbGUtdGl0bGUgLmZpZGRsZS1zaXplIGlucHV0LndpZHRoOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuLmZpZGRsZS10aXRsZSAuZmlkZGxlLXNpemUgaW5wdXQud2lkdGg6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4uZmlkZGxlLXRpdGxlIC5maWRkbGUtc2l6ZSBpbnB1dC5oZWlnaHQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4uZmlkZGxlLXRpdGxlIC5maWRkbGUtc2l6ZSBpbnB1dC5oZWlnaHQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmZpZGRsZS1sb2dve1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmlkZGxlLWxvZ28gaW1ne1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTBweCk7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU1MHB4KXtcbiAgICAubGF5b3V0cy1saXN0IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmxheW91dHMtbGlzdFtjbGFzc10gLmxheW91dHtcbiAgICAgICAgbWFyZ2luOjBweDtcbiAgICB9XG4gICAgXG4gICAgLmxheW91dHMtbGlzdFtjbGFzc10gLmxheW91dDpudGgtY2hpbGQoMm4rMSl7XG4gICAgICAgIG1hcmdpbi1yaWdodDoxMHB4O1xuICAgIH1cblxuICAgIC5wYXlwYWwtYnRuLWNvbnRhaW5lciAuYnRuLnBheXBhbC1idG4gYnV0dG9uLmxheW91dHMtYnRue1xuICAgICAgICBmb250LXNpemU6IDBweDtcbiAgICAgICAgcG9zaXRpb246c3RhdGljO1xuICAgIH1cbiAgICBcbiAgICAucGF5cGFsLWJ0bi1jb250YWluZXIgLmJ0bi5wYXlwYWwtYnRuIGJ1dHRvbi5sYXlvdXRzLWJ0biBpLmZhe1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLnBheXBhbC1idG4tY29udGFpbmVyIC5idG4ucGF5cGFsLWJ0biB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMThweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xuICAgIH1cbn1cblxuLmxheW91dHMtbGlzdC1jb250YWluZXIuc2hvd24gLmxheW91dHMtbGlzdCB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLmhpZGRlbiAuZmEuZmEtc29ydC1hc2N7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3duICAuZmEuZmEtc29ydC1kZXNje1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAjY29kZS1wYXJ0cyAuYXMtc3BsaXQtZ3V0dGVyOmZpcnN0LW9mLXR5cGU6bm90KDpsYXN0LW9mLXR5cGUpe1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmFzLXNwbGl0LWd1dHRlci1jdXN0b217XG4gICAgZmxleDowIDAgNXB4O1xufVxuXG4uYXMtc3BsaXQtZ3V0dGVyLWN1c3RvbS5pcy1ob3Jpem9udGFse1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGN1cnNvcjpjb2wtcmVzaXplO1xufVxuXG4uYXMtc3BsaXQtZ3V0dGVyLWN1c3RvbS5pcy12ZXJ0aWNhbHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGN1cnNvcjpyb3ctcmVzaXplO1xufVxuXG4uaWZyYW1lLW92ZXJsYXktZm9yLWRyb3Age1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmlmcmFtZS1hcmVhOmhvdmVyIC5pZnJhbWUtb3ZlcmxheS1mb3ItZHJvcHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZW1wdHktYXJlYVtjbGFzc10ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCkgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg0NWRlZywgIHRyYW5zcGFyZW50IDE1cHgsIHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4zOCkgMzBweCkgcmVwZWF0IHNjcm9sbCAwJSAwJTtcbn1cblxuLmVtcHR5LWFyZWEuaXMtZGFyay1tb2RlW2NsYXNzXXtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNDVkZWcsICB0cmFuc3BhcmVudCAxNXB4LHJnYmEoMjA0LCAyMDQsIDIwNCwgMC4yKSAzMHB4KSByZXBlYXQgc2Nyb2xsIDAlIDAlO1xufVxuXG4uYXMtc3BsaXQtZ3V0dGVyLWN1c3RvbSA+IC5hcy1zcGxpdC1ndXR0ZXItaWNvbi1jdXN0b217XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFzLXNwbGl0LW91dGVyW2NsYXNzXSA+IC5hcy1zcGxpdC1ndXR0ZXJbY2xhc3NdLFxuOmhvc3QgOjpuZy1kZWVwIC5hcy1zcGxpdC1vdXRlcltjbGFzc10gPiAuYXMtc3BsaXQtZ3V0dGVyW2NsYXNzXSxcbi5hcy1zcGxpdC1ndXR0ZXItY3VzdG9te1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYXMtc3BsaXQtb3V0ZXI6bm90KC5pcy1kYXJrLW1vZGUpW2NsYXNzXSA+IC5hcy1zcGxpdC1ndXR0ZXJbY2xhc3NdLFxuOmhvc3QgOjpuZy1kZWVwIC5hcy1zcGxpdC1vdXRlcjpub3QoLmlzLWRhcmstbW9kZSlbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlcltjbGFzc10sXG4uYXMtc3BsaXQtZ3V0dGVyLWN1c3RvbXtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDBweCAxcHggIzAwMDAwMDI0O1xufVxuXG5cbjpob3N0IDo6bmctZGVlcCAuYXMtc3BsaXQtb3V0ZXIuaXMtZGFyay1tb2RlW2NsYXNzXSA+IC5hcy1zcGxpdC1ndXR0ZXJbY2xhc3NdLFxuOmhvc3QgOjpuZy1kZWVwIC5hcy1zcGxpdC1vdXRlci5pcy1kYXJrLW1vZGVbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlcltjbGFzc10sXG4uYXMtc3BsaXQtZ3V0dGVyLWN1c3RvbS5pcy1kYXJrLW1vZGV7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMXB4ICNGRkZGRkYyNDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hcy1zcGxpdC1vdXRlcjpub3QoLmlzLWRhcmstbW9kZSlbY2xhc3NdIC5hcy1ob3Jpem9udGFsW2NsYXNzXSA+IC5hcy1zcGxpdC1ndXR0ZXJbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlci1pY29uW2NsYXNzXSxcbjpob3N0IDo6bmctZGVlcCAuYXMtc3BsaXQtb3V0ZXI6bm90KC5pcy1kYXJrLW1vZGUpW2NsYXNzXS5hcy1ob3Jpem9udGFsW2NsYXNzXSA+IC5hcy1zcGxpdC1ndXR0ZXJbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlci1pY29uW2NsYXNzXSxcbi5hcy1zcGxpdC1ndXR0ZXItY3VzdG9tLmlzLWhvcml6b250YWwgPiAuYXMtc3BsaXQtZ3V0dGVyLWljb24tY3VzdG9te1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFVQUFBQWVDQVlBQUFEa2Z0UzlBQUFLQzNwVVdIUlNZWGNnY0hKdlptbHNaU0IwZVhCbElHVjRhV1lBQUhqYXJaaGJsdU00RGtUL3VZcFpndmdFdUJ3K3o1a2R6UExuZ3BLem5WbVozZFV6YlZkYUtwa2lRVVFnRUxKYi8vbjNkdi9pRmEra0xtWFJVa3U1ZUtXYWFtaWM2SFcvMnZuMFZ6cWY5eXMvUi8vNXV2UHIrU0p3S1hLTTkzKzFQT05mMS8zSEJQZWhjWmJmSnRMeGZORS9mMUhUTTc5K21TamNoMmdSMmZsOEpxclBSREhjWC9obmduWnY2eXBWNVgwTC9kbkJjLytkQnY2Y2ZTVDlIUFl2L3hleU56UHJ4QkJXOVBIaU04UndCeER0ejd2WU9OSHptUmxJeU9kYytMeUgranNoMytYcGVvdktmVVVsdE85UitUajdBa29zOTNYSGhjL0pMQi9IYjYvNy9PWDZNNkU3S1g1Yk9ZNlBsVDlkYi9scVg3ZnordHQ3cXR0NzNidHJxWkRTOG16cXRaVnp4c0JPeXVPNXJmQVcvakxuY3Q2VnR6cldHVUErcjNGMTNzTlhINEJsKytTbmIzNzdkWTdERDBKTVlRWGhHTUlBS0x1bVVVSU5JMTRPbEpLOS9RNFNhNXdnR09JQTNzalY4QkdMUCt2V3M5end5c0xUTXpKNEp2T0dyN09QZitMOTQwUjdHK1c5di9UT0U3UWdybURNSWd4RHpqNFpCU0IrdjNpVVQ0SmY3Njh2d3hXbFlKU2xXZGxndS9vOVJjLys0WmJ4S0I2Z0l3TXp4N3ZXdk14bkFsTEUycGxnZkFTQnEvaVlmZkdYaENEZWswY0ZuOFpFR21JS0hRaDh6bUVTWlVneEZzRFJZR3R6ai9nek51UndYMGF6QUNMSFFpRXBBRFd3U2dnYi9KR2tjS2psbUZQT3VXVEptbXR1SlpaVWNpbEZpb2xma3loSnNoUVJVYW5TTkdyU3JFVkYxV25WVmtPTmlHT3VwVXJWV210ckxOcVl1WEYzWTBCclBmVFlVOCs5ZE9uYWEyOEQrb3cwOGloRGhycFJSNXRoeG9sT3pESmw2cXl6TGIrZzBrb3JyN0prNmFxcmJhaTI0MDQ3NzdKbDY2NjdmYURtM1NrNy84djc5MUh6TDlUQ1Fjb0d5Z2RxM0NyeW1zS2JuR1RERE1SQzhpQXVoZ0NFRG9iWnBUNmw0QXc2dyt5cWdhcklnU2l6Z1RPOUlRYUNhZm1RdC8vQTdnL2tQdUhtVXZxL2NBc3Y1SnhCOTA4ZzV3eTZINUQ3RmJkdlVKc21kK09LN2lCa1pXaEp2U0xsdDBMUXhyODVOSzY2dDhtamZRN2x6aUI3aWlJNm5NN1NsOGoyV1RZOFdyNU5HemI1bngxM2k3NzFwYnAvNS9ZLzduWnZ0N2NRZTAxam5IaENHL1VFeExlS1FSZ1I2a0NOR2M1NEFvK2N0TGdYUmJxdjVjNTg3Q24xc3o0OTdoeER6MHZKNWNwNkpsNlhRaVV0TWVrS09sTm9TTk1JVGYzcDFFc2RRRFJtbkVWakhHUEhOS0ZLN1NGMVZObGc3am1GTWRJT09KVWtvZlJNdkxibHo3RzZuNFA5MDFqRHVtU3NrNThMVGdBL0NVeGV6cENLSHV5dGV1WWlHQjJjNkwxTURmTTYrV0tSVWJQUFBkTnVaS2ErL082UXpHMUNrNWJubkNPdVhaZjBwQzFWWE01VlZpblVIbjZGNWRuVEtESkFqaUliUnY0Vm9GMkFmenVuV1IxQ0toS0crTFpuWGVCR2hRekZZR1FKb2o2dlFXZkxGa3Yxc0RIWldkdVhrb2FVMjJSL2V3V0k0bXpBaUxuZkEvWWg0RTZGbWt1NXRGaW9oazBock8zWjk3ek9sRHRrV3VjMjVwS0tYT2VpUVo0SlRGNVc2aW1lWElGRXNOcWRkT0pEUmtMU2JURXM5VXhRa1ltVFZVOEZzMHBIMk9UaFVUaFRCTXA4bnlKWnZVRURpclFIMVVJZWlyZUtWVXZKUkJHUXFJTDRsRjZEbE5id2o4N1hPT3E2c3NRTzhRR2RGYVFMelp2MG93VFVRMTJwd0tHeWUwb05CYUxyMTBqWGhveTFMU3VETFBUK0dteWZKYTRiM29iUlk1dGpISTZNVElNNlpZdEsrRHQvMTgwbmxJYUVhRytyRjIzaUJCM1djbE50RlZOQ3FzOUVhVzlaTFZsSzEwbnBtQ1Qzb0xlRGNYanRtZXF6bU5UcHBzL29ER1d4WkdhVWRDN2loWnF4U2Q1cE5PMWhqdGtUTzZMOGxXNWNrNDg2Tml6cmcwR05xR0xianJwcTIzQ08xMnlsdG1ta0hjTjZyT2djSGVtbVhRejRTei9LcS9ZZldPVSswK3JQV0JVS3JYQjFZd1BTcmRyM2t0SHZTdXpiWlhpeUgwTDhsS00rRm5YYUZ6clFxMDExMG0rZ3RHTE94dkNDMld2V00wMDlxTFNxWjJDd3BUcnRwRTEyV3plZ1Qrc0FHVzV1K0thYjd1SlhrVm81NitKUXk3bTcrTjRMS2xXSEVINGdCR3J1a0JtNjBrUkd2aVdERkcrQ0xhMXJEV1V5UjBKTUpucmxNSXQ5MTBGTklYdFc5eFFLRkRVbFNhdzlFMXFDaUp3RXp4NXVPY3QzSldSTUs1eXpOTkNPMnM2OWhSTTdVWnZhSGM3NCtlSk1qb2N6OG9tZ05MV2pqSEhsMXFqbTdkcFp3eGlLM2lMNXV3SzRjYW8zZ1ZNQ3A2bzF4SGsxK2lHVlJKWUh4Vkc4V2U1THgySyttSWNyeGN4MEVXeDFsQng2Nng0eVlRTG8wQkJMQ0E4cnI1a21qSUVZSmU4bVBrTnR6VlpLYVU4SUJhNHVYR2YzSGxHM2ZZRXlYd3ZOZ04wYlUrNXZGZFo3OHVkN2tidVRIYktZc0J0WldvV1FzQ1YrcXFnZnMwTk53Z1JhUE1IRWU3cFQ3WmJ5NWw3RnptUlBKcTNReTBucEtYVEsvR2FXcFpHYWhFeExTaVFEMDNRLzF6Ykl1emgwditVQi9SRWwwLzFZUFU4YmE1YWNMSlYweGgzQ1MvZE5ybkpHbzQ3dUw3aVYrdHhYMmlJdUREcUdnRmZ3SFZORHRXTGNhSTRhODFvVVltb0lEV0lhKzZPcXQzWWJrUkJVLzVFVTk5cmttNlRGVjA0QUJPbEdPNWxwMUtjSlhPenpyUW1VcHdtNHV3dTgxUEZwQXZQVkJPQi95cmdrcTlhTmlTTVJLUXJRWFhUQzN0ZFdldFlzU2FmcnlQaWkvR3hMZ29aNDJGaE1WQmlSQzd3UHRNd08vRWcrMmREcEJ3SkNyU2JMSSswZ0JtOTNPZ1F5SHExNktkWFQvY0RzWGFoZU1uVnIxb24veUJTNXg5LzFPTjNvVDZNL041OVdiME14Z3FaVFB2MVpadWd3aGFycVZsVU81WVVyZHZHV2RoeUxFZFY0UThQSEttYWpsS0xNSm9rOHZGbU5yb3ZrVzkvY1ZpS3BvejZ1OEl4SDFQQ2ZicEp4eVlwbzBZTXJuQXRLNEZhZkZmUE16SlFUVDBXNG5oV09wZW96V2sxbHFUeG1BWEhHZnZQUGRBKy96WFZzSHpvUjdFNnhXTlYwSnRTc21JMHh2by9RblJCUEpwN2R2ZmIyMnBtd3JGRkFlQ3pHRitIYzJNeXVWMEJyQ3VSZ2NSTUM5NllFSmdUZnlnQWczRUp3WkFBZno2VDFwT2VlMTR5UWd3UzRoZHRQN3c5TGFBVjdQT0UrVmpQZWZlUE5GYjQ4NGUwSWVmNTNDNWxTSHZTNUNBY1hybnFUVHRBbU0zVFJPcTFNK1M2cU9hVjlDSEFNemlpSWdaaTVoNVUrT1VVeko4TjQyTGthanlYUmZvS1M4eXRKUTFGV0pjVGNMdnh1SEJnYXJRMmhDRHgyVUZsenpZd1Z4UXJXNExDTDF1d1IyUXVGSHIybms5N2pjdzBia1J1YnZBOTc1QTBhVTBDRHhycUl1a3U4S1NNMWpqK0hHVDQvaXZIdTlxeGhIcmQzUDZuYzJuZ2NuMDExY3VvZXgwZXBCL3hVTkRRTWgxdis2S3kvNjNyZFg5bmV2M0s5OEpRK0lOMzk3NXY1WXkvTXlmTWFGV2RPL2tqSTQxQi9NS2o2MFRldSs0bnF6U1VPbHlmc3Q5ODAydnd0WS82VGczSUdkcVNyOW11YTludE9zV1ZXc0RIcm9oZFhTNHY5WkVhZlFTUFJYRFRXYU1HNmZYYXU4b3FKSE8wNElDNFBVZEdhU2FhWlZGMkdSUUdPaEIzQnVldEVSMG00U1VIOTFnVzczN2ZCN1U3QnRIYTd2TzNOTEVtNmkyYTViSnlkdTlYNGROUDR2VWQ4TEdLT1ZJZEluUGpkeHVQOGh3dDJmOWNHLytTQzNiYzJtSVNWczI2bHVCSFZ2ekxzL3BqUmo2MmErN290M3IxVDltbS9MbENHeDlYYVR3SHBmdkkyNEw4OHh6UFJ0NC95OTg4QWhzcjd6d0JmYm42LzEvMTA4NjgvQWpDZ1V1WC9CVFVRWFBpVVpheWpBQUFCaEdsRFExQkpRME1nY0hKdlptbHNaUUFBZUp4OWtUMUl3MEFjeFY4L3hDSVZCeXVJS0FTcFRoWkVSUnkxQ2tXb0VHcUZWaDFNTHYyQ0pnMUppb3VqNEZwdzhHT3g2dURpckt1RHF5QUlmb0M0dVRrcHVraUovMHNLTFdJOE9PN0h1M3VQdTNlQXYxNW1xaGtjQjFUTk1sS0p1SkRKcmdxZHJ3Z2hpRDRNWTBoaXBqNG5pa2w0anE5NytQaDZGK05aM3VmK0hOMUt6bVNBVHlDZVpicGhFVzhRVDI5YU91ZDk0Z2dyU2dyeE9mR1lRUmNrZnVTNjdQSWI1NExEZnA0Wk1kS3BlZUlJc1ZCb1k3bU5XZEZRaWFlSW80cXFVYjQvNDdMQ2VZdXpXcTZ5NWozNUM4TTViV1daNnpRSGtjQWlsaUJDZ0l3cVNpakRRb3hXalJRVEtkcVBlL2dISEw5SUxwbGNKVEJ5TEtBQ0ZaTGpCLytEMzkyYStja0pOeWtjQnpwZWJQdGpCT2pjQlJvMTIvNCt0dTNHQ1JCNEJxNjBscjlTQjJZK1NhKzF0T2dSMExNTlhGeTNOSGtQdU53QitwOTB5WkFjS1VEVG44OEQ3MmYwVFZtZzl4Ym9Xbk43YSs3ajlBRklVMWZKRytEZ0VCZ3RVUGE2eDd0RDdiMzllNmJaM3c5Y2RuS2VQV1UzNUFBQUQ0dHBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0NqeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlsaE5VQ0JEYjNKbElEUXVOQzR3TFVWNGFYWXlJajRLSUR4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXlJK0NpQWdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlLSUNBZ0lIaHRiRzV6T21sd2RHTkZlSFE5SW1oMGRIQTZMeTlwY0hSakxtOXlaeTl6ZEdRdlNYQjBZelI0YlhCRmVIUXZNakF3T0Mwd01pMHlPUzhpQ2lBZ0lDQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SUtJQ0FnSUhodGJHNXpPbk4wUlhaMFBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWRmRtVnVkQ01pQ2lBZ0lDQjRiV3h1Y3pwd2JIVnpQU0pvZEhSd09pOHZibk11ZFhObGNHeDFjeTV2Y21jdmJHUm1MM2h0Y0M4eExqQXZJZ29nSUNBZ2VHMXNibk02UjBsTlVEMGlhSFIwY0RvdkwzZDNkeTVuYVcxd0xtOXlaeTk0YlhBdklnb2dJQ0FnZUcxc2JuTTZaR005SW1oMGRIQTZMeTl3ZFhKc0xtOXlaeTlrWXk5bGJHVnRaVzUwY3k4eExqRXZJZ29nSUNBZ2VHMXNibk02ZEdsbVpqMGlhSFIwY0RvdkwyNXpMbUZrYjJKbExtTnZiUzkwYVdabUx6RXVNQzhpQ2lBZ0lDQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpQ2lBZ0lIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUltZHBiWEE2Wkc5amFXUTZaMmx0Y0RvMk1tSXlNR1EyWXkxbE5UQTNMVFJqTnpFdE9ESmhNaTAwTTJGaFpUSmhNR0psTWpraUNpQWdJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZaamsxWkRsa01EUXRPVEZqWWkwME1HUmtMVGs1TlRNdFpEZG1aVFkzTmpsaE1ERXhJZ29nSUNCNGJYQk5UVHBQY21sbmFXNWhiRVJ2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TmpCbE1XVmtZek10TldVM1pTMDBZekUzTFRneE9EQXROVEkzTnprek0yVmtabUpoSWdvZ0lDQkhTVTFRT2tGUVNUMGlNaTR3SWdvZ0lDQkhTVTFRT2xCc1lYUm1iM0p0UFNKTWFXNTFlQ0lLSUNBZ1IwbE5VRHBVYVcxbFUzUmhiWEE5SWpFMk1qZ3hNakl3TkRRNE1qZzJNaklpQ2lBZ0lFZEpUVkE2Vm1WeWMybHZiajBpTWk0eE1DNHlNaUlLSUNBZ1pHTTZSbTl5YldGMFBTSnBiV0ZuWlM5d2JtY2lDaUFnSUhScFptWTZUM0pwWlc1MFlYUnBiMjQ5SWpFaUNpQWdJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlSMGxOVUNBeUxqRXdJajRLSUNBZ1BHbHdkR05GZUhRNlRHOWpZWFJwYjI1RGNtVmhkR1ZrUGdvZ0lDQWdQSEprWmpwQ1lXY3ZQZ29nSUNBOEwybHdkR05GZUhRNlRHOWpZWFJwYjI1RGNtVmhkR1ZrUGdvZ0lDQThhWEIwWTBWNGREcE1iMk5oZEdsdmJsTm9iM2R1UGdvZ0lDQWdQSEprWmpwQ1lXY3ZQZ29nSUNBOEwybHdkR05GZUhRNlRHOWpZWFJwYjI1VGFHOTNiajRLSUNBZ1BHbHdkR05GZUhRNlFYSjBkMjl5YTA5eVQySnFaV04wUGdvZ0lDQWdQSEprWmpwQ1lXY3ZQZ29nSUNBOEwybHdkR05GZUhRNlFYSjBkMjl5YTA5eVQySnFaV04wUGdvZ0lDQThhWEIwWTBWNGREcFNaV2RwYzNSeWVVbGtQZ29nSUNBZ1BISmtaanBDWVdjdlBnb2dJQ0E4TDJsd2RHTkZlSFE2VW1WbmFYTjBjbmxKWkQ0S0lDQWdQSGh0Y0UxTk9raHBjM1J2Y25rK0NpQWdJQ0E4Y21SbU9sTmxjVDRLSUNBZ0lDQThjbVJtT214cENpQWdJQ0FnSUhOMFJYWjBPbUZqZEdsdmJqMGljMkYyWldRaUNpQWdJQ0FnSUhOMFJYWjBPbU5vWVc1blpXUTlJaThpQ2lBZ0lDQWdJSE4wUlhaME9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZPR1k1TW1NME1qTXRZekkyTnkwME5qVTVMV0ZrWkRFdE9URmlaREU0WWpRME1tUmxJZ29nSUNBZ0lDQnpkRVYyZERwemIyWjBkMkZ5WlVGblpXNTBQU0pIYVcxd0lESXVNVEFnS0V4cGJuVjRLU0lLSUNBZ0lDQWdjM1JGZG5RNmQyaGxiajBpS3pBeE9qQXdJaTgrQ2lBZ0lDQThMM0prWmpwVFpYRStDaUFnSUR3dmVHMXdUVTA2U0dsemRHOXllVDRLSUNBZ1BIQnNkWE02U1cxaFoyVlRkWEJ3YkdsbGNqNEtJQ0FnSUR4eVpHWTZVMlZ4THo0S0lDQWdQQzl3YkhWek9rbHRZV2RsVTNWd2NHeHBaWEkrQ2lBZ0lEeHdiSFZ6T2tsdFlXZGxRM0psWVhSdmNqNEtJQ0FnSUR4eVpHWTZVMlZ4THo0S0lDQWdQQzl3YkhWek9rbHRZV2RsUTNKbFlYUnZjajRLSUNBZ1BIQnNkWE02UTI5d2VYSnBaMmgwVDNkdVpYSStDaUFnSUNBOGNtUm1PbE5sY1M4K0NpQWdJRHd2Y0d4MWN6cERiM0I1Y21sbmFIUlBkMjVsY2o0S0lDQWdQSEJzZFhNNlRHbGpaVzV6YjNJK0NpQWdJQ0E4Y21SbU9sTmxjUzgrQ2lBZ0lEd3ZjR3gxY3pwTWFXTmxibk52Y2o0S0lDQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNEtJRHd2Y21SbU9sSkVSajRLUEM5NE9uaHRjRzFsZEdFK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLUEQ5NGNHRmphMlYwSUdWdVpEMGlkeUkvUHA1ZHlmc0FBQUFHWWt0SFJBRC9BUDhBLzZDOXA1TUFBQUFKY0VoWmN3QUFDeE1BQUFzVEFRQ2FuQmdBQUFBSGRFbE5SUWZsQ0FVQUJ4alIzcFh6QUFBQUkwbEVRVlFvejJOMDhRai96OERBd0xCbngwcEdHSnVKZ1NMQU9Hcm1xSmw0elFRQUxrSXZLYnhoSHBBQUFBQUFTVVZPUks1Q1lJST0pXG59XG5cbjpob3N0IDo6bmctZGVlcCAuYXMtc3BsaXQtb3V0ZXI6bm90KC5pcy1kYXJrLW1vZGUpW2NsYXNzXSAuYXMtdmVydGljYWxbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlcltjbGFzc10gPiAuYXMtc3BsaXQtZ3V0dGVyLWljb25bY2xhc3NdLFxuOmhvc3QgOjpuZy1kZWVwIC5hcy1zcGxpdC1vdXRlcjpub3QoLmlzLWRhcmstbW9kZSlbY2xhc3NdLmFzLXZlcnRpY2FsW2NsYXNzXSA+IC5hcy1zcGxpdC1ndXR0ZXJbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlci1pY29uW2NsYXNzXSxcbi5hcy1zcGxpdC1ndXR0ZXItY3VzdG9tLmlzLXZlcnRpY2FsID4gLmFzLXNwbGl0LWd1dHRlci1pY29uLWN1c3RvbXtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCNEFBQUFGQ0FZQUFBQlNJVno2QUFBSXducFVXSFJTWVhjZ2NISnZabWxzWlNCMGVYQmxJR1Y0YVdZQUFIamFyWmZwc2VRNERvVC8wNG94Z1JkNG1NTXpZajFZOCtjRHFhcCs1OFJHN0x6cUxxbEVpU1NRaVVUS3JQLytaNXUvK1BOU3JZbVNTNm9wV2Y1aWpkVTNUb3E5ZisxOE94dlA5LzJ4bmpIMyticXg4Z3g0TGdXTzRmNHM2Ym4vZGQyOUo3aUh4cGw4bUtpTVo2Qi9IcWp4bWI5OG1jamZROUFkNmZsOEpxclBSTUhmQWZkTTBHNVlOdFdTUDRiUW45Q2U1MjhhaW9iR1Z5eWZ0LzN0ZHlaN1UxZ25lTCtDQzVadkgvemRRTkQvem9UR1NUbmZ3bzM2MGZQS2R6aTN1cHVRbi9Ka1ArektmRVhsZmZZRkZkOStCaVdrZTRmaHd1ZGtwdmZ4eCt0T3Zsd1BML2cxeFI5V0R1TTU4NSt2ei81bTE2Y2s2Lys5WnpGN3J4dGRpNG1VcGllb1Y0am5qQnM3S1EvbnNjUW44MTg0eitkVCtSUURld2VRVHp0czV6TmNkUjVZdG90dXV1YTJXK2M0M0dDTDBTK2ZPWG8vQUVxdmxaQjk5U05ZQTVoUlAyNzdERllUQkgwWXdCdTQ2dDk3Y1dmZGVwWWJyckR3ZE56cEhaTTVwWUxScjMvajgrdEVleXZsbmROaytuWnl4YjY4TW90dEtITDZ6VjBBNHZhTFIzSVMvUHA4L1ZOY0F3aktTWE1od0diN25hS0xlN2hsRHBrVjZNQ053dkhXbXN2em1ZQVVzYmF3R1JkQXdDWVh4Q1Zucy9mWk9mSll3S2N4VWZFaCtnNEVUc1JQZHVsakNBbHdpdGUxZVNhN2M2OFhmeStqV1FBaElZVU1OQlFUV0VXRURmN2tXT0JRa3lCUlJKSmtLVktscFpCaWtwUlNUaXArTFljY3MrU1VjeTY1NWxaQ2lVVktLcmtVVTJwcDFkZUFPRXBOTmRkU2EyMk5SUnN6TjU1dTNOQmE5ejMwMktXbm5udnB0YmNCZlVZY010TElvNWhSUjV0K2hvbE96RFR6TExQT3R0eUNTaXN1V1dubFZWWmRiVU8xSFhiY3N0UE91K3k2MnhzMVp5NnMzejcvTzJydWhaby9TT21OK1kwYWorYjhtc0twbkloaUJtSStPaERQaWdDRTlvcVpMUzVHYnhRNnhjeFdUMVdJWjVlaTRFeW5pSUZnWE03TGRtL3MvaUQzQ1RjVDQvK0ZtMzhoWnhTNmZ3TTVvOUQ5Z3R4MzNINUFiYW9FRHh2TVFVakxVSk5xQStXM3ZDK05mM09VTVBZV0toTUJtWE16Tm9ucUhHMlprbG9QclFCZmlXc1p2Yng2RCtkWUlvT1M3Q0FFaWkzc0ZXMU5XOGVzZjAyUUtrbGJ4ZWx2SU8vTVhGdzJXNS91c2ZVazNXa1pOcjJCVmRKYVRNUmt1OW5TeHRUZ3oyNVdERG1mYWF5N2swZG1OalBGRFo1c2FuaDI3KzJvUE44Nzkwd3JxYWZWWFRoRHV2NmZRWjNnRGt0WkkzWVRLdHduOE5HcmF0a0pJMGtqdzczRjMwWkNUU3ZFTkhlUlR2Z3dpOUJtZHJwOXg4Wmx5aWdmQnIrTVpUdExIR05xaEpxOEU5L1plWkZza0tIWlY5K3YxSUZDWVhVeTUzdUJQWFhwMmpVOXlYWDlTUzUzK01RUFdCSWlEMUMwMWM2cE5haUZxSElZbUpsbWtvYUgwelB5U0hRMTg3Z01PVURvTFN0dkFUbEZIeHJSVDh4aWRWaTY3d3BqcnhwSEtyNVAvVFdiSG5FK2pzM1h2UnFCVXIzOUxObldPSEUwUlRyU0lHSHJYWmVLMTNWbnZldXk1VGdpeE5UWU5iS0hOTFRiRXhtc0lmWTF0MFpXa1JFNTg1L0k5R0hFZ0FwcElvTTd6NVNhbUJPQ0prOXA2LzJUbkJ1cTVtWVk0TFVzUTZlSUszZGJYZTB5cWUwRG5hc0h1blI0MzJ5Ym1ZZC9IalU2SEVmSXJnZDRmMm9zMW5Dajd6RnRuc2piSzhuSkphVktuNWt0NUVQUXNBOEZ5SHZmWmlpR2U0MmxkSzA3M0N6MEhabkJrYnFFTXAzUWQxVnM1MjRhVHlzTDBaS3hyRU54WnVrQkU1RlU4OWhGOVhGNkVSQVVpVE9taGNKRjMwcVZjWDJXcTBFRVduTWNPZmRNMDhSdXJwVlNqTTVNbERYUzBSdUlwVExaSnhTUVFmQjdVdmV1cmJwalJOS2tJbzdGcmRoVGtUbldRaUt3VXhSZmNHMWE4NG9LWXQ2NG5xaFFHejhFU1NhbE1iT3JQaWpPdFRJaTVLamRpQnpZcVNWWEtOczZEWUFMTytzWlowMmp6Nk9ocDZzNVpKT3ozaXM5b2lrWWZxUUdzTFpRWmtQemQ2Z3dYVithMjJFdVEvcHVjNitncUVJYWRrODhpNTZCT0JjOG9mUFFJdE9xRnBaakloNWhJNDdFdi9LQWtTREtqaWhCa1ZZMGNnS0pGYUtoN0NQWEdYakZTWFBWUGtzZGVaRmN5ZEhwY0M0SUZFbGFFTWVORE83TDVLUytCR2tuRFpRS1Fwc0N6aEVBaHgzU1hKV0ZOd0dwbUx5RlRyYlZ2bjhnbUVIRWlXMHljOXl0REJnUjJZalhIaldRZHJwbWRhamdmRlBxSVJRS2VTa0Y0T0F5VFhQUXlyWFlaMjlWYklzMTAzR2JXdzJSaGlpVEhqMEx1VUpUdWtzRmFFZE8wN1pRWmk5SmVMdnlZU1Zub0F4SzBZWXQwQVEvUzRkZUlkTjZjY1UxTG5RZk1maXhWb2pBSTNrZTltRE9qQ3BCeWF4SDI4VWo4eGFFUTlnMFNLM0ZzUEp0Um5sVm1PcXJnbUluUVhmWmN3VmlvTUxxckJGL2hNZUllQXluN0ZlRnc3YkR0dEFXM1h0Nk9nVzJvOW9ZOWQwRXg5OUxaaU1hZ1crVTlyc1l6SjlxMExjcFZFdzE3TmtROVgyMmhPWThXMkwvdllSUXl2NUR4Y3RFODZJaXduakwrSE1WcTJiK09pMjdlMWU0K2FIRXdWOEtOcXFUVHpmWG5ERVc1ME5uSmFMRDl2QU9veVllMFE3dmVqYS9GalN6WVRPWFZzT1BtR0hleXZZZEUrVFk4akJicVZ5MVJhM2Y1STAwOGpCVFN4dW5BbjJEWDUzSzR1MG1MS0VNaGtCSWp4L0RHY0c3T1ladHdOUkxUYmhBTFQxZXF1amFLR0xxOURCVXZrbUhRQmk4U1lrUDRkVVk3RWR2ZEJFMWg2dFRGNWlEV3Q2Uy9BZ3lIRkpKcHRlOWdGTGxPbEM5Y05LS1NlYTMrdmt1RkZjblNBdXhra3NpSXUzKzFUZU45dlBUT2svakJGcHRuTkNKQ3IyNmVjM2F0V3FQVWVNMUUzZUtiNElENEhrNmlsbFc5bmw0d3RUNVR5NXRkTnp5N1lyN09vYnhORVYxRE1ZSkhSSHIrcHRQRzlnUmNiKzN6RFFuL0MxaXZveSt4cnBERmxQR2RuZ2lSbHB1eno4NlBicW9TWXIxNDVqNU5KaHcvT0JENG0zUHg2M0c2enY4RGNCajJIcnIxWDBmTng5dTRKMkk1bC94NGZ1Nkh1ZGZjYXA1MGZ2VlBid3M2V1BaSGt0cWptOURSRUk0ZS9FMzNTRi9UcmVxMUZaL2N1ek50VzB2ZTNPTm03bkdzTTAvM3V1YjllcE1mbTE3a3NlMnUveGVvTUt3V3FheGtwdis3T2NZS0o1L3NsNnFWbXI3WHN0aStYVlovUDQxN0x6VlZDZXRmN0w3UEtxUktZM3l0YXhmM2Y1NXRzYmppUXlldjVScmVCOURmd3h2bENjcGo5KzlwdTM2WGUvcjJIUmZYc1o3V3crQUp2aDR5dU80TnNDTEh3YS9qRlhvR2hJc284cjBwM0lDK1FTeHZ3Rjh6VnBPVXQvT2dnQUFBWVJwUTBOUVNVTkRJSEJ5YjJacGJHVUFBSGljZlpFOVNNTkFITVZmUDhRaUZRY3JpQ2dFcVU0V1JFVWN0UXBGcUJCcWhWWWRUQzc5Z2lZTlNZcUxvK0JhY1BCanNlcmc0cXlyZzZzZ0NINkF1TGs1S2JwSWlmOUxDaTFpUERqdXg3dDdqN3QzZ0w5ZVpxb1pIQWRVelRKU2liaVF5YTRLbmE4SUlZZytER05JWXFZK0o0cEplSTZ2ZS9qNGVoZmpXZDduL2h6ZFNzNWtnRThnbm1XNllSRnZFRTl2V2pybmZlSUlLMG9LOFRueG1FRVhKSDdrdXV6eUcrZUN3MzZlR1RIU3FYbmlDTEZRYUdPNWpWblJVSW1uaUtPS3FsRytQK095d25tTHMxcXVzdVk5K1F2RE9XMWxtZXMwQjVIQUlwWWdRb0NNS2tvb3cwS01WbzBVRXluYWozdjRCeHkvU0M2WlhDVXdjaXlnQWhXUzR3Zi9nOS9kbXZuSkNUY3BIQWM2WG16N1l3VG8zQVVhTmR2K1ByYnR4Z2tRZUFhdXRKYS9VZ2RtUGttdnRiVG9FZEN6RFZ4Y3R6UjVEN2pjQWZxZmRNbVFIQ2xBMDUvUEErOW45RTFab1BjVzZGcHplMnZ1NC9RQlNGTlh5UnZnNEJBWUxWRDJ1c2U3USsyOS9YdW0yZDhQWEhaeW5qMWxOK1FBQUErTGFWUllkRmhOVERwamIyMHVZV1J2WW1VdWVHMXdBQUFBQUFBOFAzaHdZV05yWlhRZ1ltVm5hVzQ5SXUrN3Z5SWdhV1E5SWxjMVRUQk5jRU5sYUdsSWVuSmxVM3BPVkdONmEyTTVaQ0kvUGdvOGVEcDRiWEJ0WlhSaElIaHRiRzV6T25nOUltRmtiMkpsT201ek9tMWxkR0V2SWlCNE9uaHRjSFJyUFNKWVRWQWdRMjl5WlNBMExqUXVNQzFGZUdsMk1pSStDaUE4Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1pUGdvZ0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTSWlDaUFnSUNCNGJXeHVjenBwY0hSalJYaDBQU0pvZEhSd09pOHZhWEIwWXk1dmNtY3ZjM1JrTDBsd2RHTTBlRzF3UlhoMEx6SXdNRGd0TURJdE1qa3ZJZ29nSUNBZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUNpQWdJQ0I0Yld4dWN6cHpkRVYyZEQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wzTlVlWEJsTDFKbGMyOTFjbU5sUlhabGJuUWpJZ29nSUNBZ2VHMXNibk02Y0d4MWN6MGlhSFIwY0RvdkwyNXpMblZ6WlhCc2RYTXViM0puTDJ4a1ppOTRiWEF2TVM0d0x5SUtJQ0FnSUhodGJHNXpPa2RKVFZBOUltaDBkSEE2THk5M2QzY3VaMmx0Y0M1dmNtY3ZlRzF3THlJS0lDQWdJSGh0Ykc1ek9tUmpQU0pvZEhSd09pOHZjSFZ5YkM1dmNtY3ZaR012Wld4bGJXVnVkSE12TVM0eEx5SUtJQ0FnSUhodGJHNXpPblJwWm1ZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZkR2xtWmk4eExqQXZJZ29nSUNBZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJZ29nSUNCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKbmFXMXdPbVJ2WTJsa09tZHBiWEE2Tm1KaVpqWmxaR010TjJNM015MDBPRFl6TFdKaE0yVXROREZsTWpFMk16azBNV0UwSWdvZ0lDQjRiWEJOVFRwSmJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qWmtPV1kzWXpjM0xUZGpZamt0TkdJeU9DMDVOV1U1TFRNME5UVmxNRGczTVRSaE5pSUtJQ0FnZUcxd1RVMDZUM0pwWjJsdVlXeEViMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPalZpTURjd05EQm1MVGt4WW1FdE5HUTFZUzFpTVRJd0xUZzBPV1UxTWpSbU1EQTVZU0lLSUNBZ1IwbE5VRHBCVUVrOUlqSXVNQ0lLSUNBZ1IwbE5VRHBRYkdGMFptOXliVDBpVEdsdWRYZ2lDaUFnSUVkSlRWQTZWR2x0WlZOMFlXMXdQU0l4TmpJNE1URTROVGN5T1RjM05qVXpJZ29nSUNCSFNVMVFPbFpsY25OcGIyNDlJakl1TVRBdU1qSWlDaUFnSUdSak9rWnZjbTFoZEQwaWFXMWhaMlV2Y0c1bklnb2dJQ0IwYVdabU9rOXlhV1Z1ZEdGMGFXOXVQU0l4SWdvZ0lDQjRiWEE2UTNKbFlYUnZjbFJ2YjJ3OUlrZEpUVkFnTWk0eE1DSStDaUFnSUR4cGNIUmpSWGgwT2t4dlkyRjBhVzl1UTNKbFlYUmxaRDRLSUNBZ0lEeHlaR1k2UW1Gbkx6NEtJQ0FnUEM5cGNIUmpSWGgwT2t4dlkyRjBhVzl1UTNKbFlYUmxaRDRLSUNBZ1BHbHdkR05GZUhRNlRHOWpZWFJwYjI1VGFHOTNiajRLSUNBZ0lEeHlaR1k2UW1Gbkx6NEtJQ0FnUEM5cGNIUmpSWGgwT2t4dlkyRjBhVzl1VTJodmQyNCtDaUFnSUR4cGNIUmpSWGgwT2tGeWRIZHZjbXRQY2s5aWFtVmpkRDRLSUNBZ0lEeHlaR1k2UW1Gbkx6NEtJQ0FnUEM5cGNIUmpSWGgwT2tGeWRIZHZjbXRQY2s5aWFtVmpkRDRLSUNBZ1BHbHdkR05GZUhRNlVtVm5hWE4wY25sSlpENEtJQ0FnSUR4eVpHWTZRbUZuTHo0S0lDQWdQQzlwY0hSalJYaDBPbEpsWjJsemRISjVTV1ErQ2lBZ0lEeDRiWEJOVFRwSWFYTjBiM0o1UGdvZ0lDQWdQSEprWmpwVFpYRStDaUFnSUNBZ1BISmtaanBzYVFvZ0lDQWdJQ0J6ZEVWMmREcGhZM1JwYjI0OUluTmhkbVZrSWdvZ0lDQWdJQ0J6ZEVWMmREcGphR0Z1WjJWa1BTSXZJZ29nSUNBZ0lDQnpkRVYyZERwcGJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09tUmlNR014WWpVMUxUUmtaV0l0TkRBM01pMDROalJoTFdNeU5ESXhZekEzTnpWbU5DSUtJQ0FnSUNBZ2MzUkZkblE2YzI5bWRIZGhjbVZCWjJWdWREMGlSMmx0Y0NBeUxqRXdJQ2hNYVc1MWVDa2lDaUFnSUNBZ0lITjBSWFowT25kb1pXNDlJaXN3TVRvd01DSXZQZ29nSUNBZ1BDOXlaR1k2VTJWeFBnb2dJQ0E4TDNodGNFMU5Pa2hwYzNSdmNuaytDaUFnSUR4d2JIVnpPa2x0WVdkbFUzVndjR3hwWlhJK0NpQWdJQ0E4Y21SbU9sTmxjUzgrQ2lBZ0lEd3ZjR3gxY3pwSmJXRm5aVk4xY0hCc2FXVnlQZ29nSUNBOGNHeDFjenBKYldGblpVTnlaV0YwYjNJK0NpQWdJQ0E4Y21SbU9sTmxjUzgrQ2lBZ0lEd3ZjR3gxY3pwSmJXRm5aVU55WldGMGIzSStDaUFnSUR4d2JIVnpPa052Y0hseWFXZG9kRTkzYm1WeVBnb2dJQ0FnUEhKa1pqcFRaWEV2UGdvZ0lDQThMM0JzZFhNNlEyOXdlWEpwWjJoMFQzZHVaWEkrQ2lBZ0lEeHdiSFZ6T2t4cFkyVnVjMjl5UGdvZ0lDQWdQSEprWmpwVFpYRXZQZ29nSUNBOEwzQnNkWE02VEdsalpXNXpiM0krQ2lBZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0NpQThMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQW9nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnQ2lBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBS0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lBb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUFvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQUtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdDancvZUhCaFkydGxkQ0JsYm1ROUluY2lQejdKMElUK0FBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg1UWdFRndrZ3hvclNjd0FBQUNSSlJFRlVLTTlqZFBFSS84L0F3TUN3WjhkS1JnWUdCZ1o2OFprWVJocGdISEZCRFFCRGxUdkxvNjZCVHdBQUFBQkpSVTVFcmtKZ2dnPT0pXG59XG5cbi5hcy1zcGxpdC1ndXR0ZXItY3VzdG9tLmlzLXZlcnRpY2FsLmlzLWRhcmstbW9kZSA+IC5hcy1zcGxpdC1ndXR0ZXItaWNvbi1jdXN0b217XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCNEFBQUFGQ0FNQUFBQmwvNnpJQUFBQUJsQk1WRVVBQUFETXpNeklUOEF5QUFBQUFYUlNUbE1BUU9iWVpnQUFBQlJKUkVGVWVBRmpZR1Jrd0lNSlNlTUhsQmtPQUJQN0FFR3pTdVBLQUFBQUFFbEZUa1N1UW1DQ1wiKTtcbn1cblxuLmFzLXNwbGl0LWd1dHRlci1jdXN0b20uaXMtaG9yaXpvbnRhbC5pcy1kYXJrLW1vZGUgPiAuYXMtc3BsaXQtZ3V0dGVyLWljb24tY3VzdG9te1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVVBQUFBZUNBWUFBQURrZnRTOUFBQUFJa2xFUVZRb1UyTTRjK2JNZnhBR0FnWVltd0dySUlpRGpyRUxqcG81YWlaZU13Rit5Tm5PczVLU3ZnQUFBQUJKUlU1RXJrSmdnZz09XCIpO1xufVxuXG4uaWZyYW1lLW92ZXJsYXl7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG5baGlkZGVuXXtcbiAgICBkaXNwbGF5Om5vbmU7XG59XG5cbmFzLXNwbGl0LWFyZWEgPiAgYXBwLWlmcmFtZS1wYXJ0LFxuYXMtc3BsaXQtYXJlYSA+ICBhcHAtaHRtbC1wYXJ0LFxuYXMtc3BsaXQtYXJlYSA+ICBhcHAtY3NzLXBhcnQsXG5hcy1zcGxpdC1hcmVhID4gIGFwcC1qcy1wYXJ0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm1haW4tY29udGFpbmVyLmxheW91dC10eXBlLTEgI2NvZGUtcGFydHMge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiYmI7XG59XG5cbmFzLXNwbGl0LWFyZWEuY29kZS1jb21wb25lbnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qYXMtc3BsaXQtYXJlYS5jb2RlLWNvbXBvbmVudC1jb250YWluZXIgPiBhcHAtY3NzLXBhcnQsXG5hcy1zcGxpdC1hcmVhLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lciA+IGFwcC1qcy1wYXJ0LFxuYXMtc3BsaXQtYXJlYS5jb2RlLWNvbXBvbmVudC1jb250YWluZXIgPiBhcHAtaHRtbC1wYXJ0e1xuICAgIFxufSovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ODE4cHgpIGFuZCAobWluLWhlaWdodDo1ODFweCl7XG4gICAgOmhvc3QgOjpuZy1kZWVwIGFwcC1pZnJhbWUtcGFydC5sYXlvdXQtdHlwZS0xe1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgfVxuICAgIFxuICAgIDpob3N0IDo6bmctZGVlcCBhcHAtaWZyYW1lLXBhcnQubGF5b3V0LXR5cGUtM3tcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgfVxuXG4gICAgLm1haW4tY29udGFpbmVyLmZ1bGwtc2NyZWVuLWlmcmFtZSAuaWZyYW1lLWFyZWFbY2xhc3NdIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBmbGV4OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMjNweDtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIzcHgpO1xuICAgIH1cbiAgICBcbiAgICAubWFpbi1jb250YWluZXIuZnVsbC1zY3JlZW4taWZyYW1lIC5mdWxsc2NyZWVuLWlmcmFtZS1oZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgLyoqKioqKioqKioqKioqKi9cbiAgICAuZmlkZGxlLXNpemUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZm9ybS1jb250cm9sLmZpZGRsZS1pbnB1dCB7XG4gICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB9XG5cbiAgICAuZmlkZGxlLXRpdGxlW2NsYXNzXSAuZmlkZGxlLWlucHV0W2NsYXNzXXtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDk0cHggLSAyNHB4IC0gMTJweCAtIDRweCk7XG4gICAgfVxuXG4gICAgLmxvZ28tdGl0bGUtY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogY2FsYyg1MCUgLSA0NHB4KTtcbiAgICAgIC8qISB3aWR0aDogYXV0bzsgKi9cbiAgICB9XG5cbiAgICAuZmlkZGxlLXRpdGxlIHtcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gICAgfVxuXG4gICAgLmZpZGRsZS1zaXplIHtcbiAgICAgIHdpZHRoOiA5NHB4O1xuICAgIH1cblxuICAgIC5mdWxsc2NyZWVuLWlmcmFtZS1idG4uYnRuIHtcbiAgICAgIHdpZHRoOiAyNnB4O1xuICAgIH1cbiAgICBcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tb25hY28tZWRpdG9yIC5tb25hY28taG92ZXIge1xuICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDEwMiAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1vbmFjby1zY3JvbGxhYmxlLWVsZW1lbnR7XG4gICAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tb25hY28tZWRpdG9yIC5wYXJhbWV0ZXItaGludHMtd2lkZ2V0e1xuICAgIHotaW5kZXg6IDEwMyAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo4MThweCkge1xuICAgICNjb2RlLXBhcnRzIC5jb2RlLWNvbXBvbmVudC1jb250YWluZXIuZnVsbHNjcmVlbiB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgei1pbmRleDogMTI1ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6MHB4O1xuICAgIH1cbiAgICAjY29kZS1wYXJ0cyAgPiAuY29kZS1wYXJ0LXRpdGxle1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2I1YjViNTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjgxN3B4KSwgKG1heC1oZWlnaHQ6NTgwcHgpIHsgIFxuXG4gICAgLmhpZGUtbW9iaWxle1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmlmcmFtZS1hcmVhIHtcbiAgICAgICAgZmxleDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICA6aG9zdCA6Om5nLWRlZXAgYXMtc3BsaXRbY2xhc3NdID4gLmFzLXNwbGl0LWd1dHRlcltjbGFzc10sXG4gICAgLmFzLXNwbGl0LWd1dHRlci1jdXN0b217XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG5cbiAgICAjbWFpbi1oZWFkZXJ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICBwYWRkaW5nOiAzcHggMCA1cHggMDtcbiAgICB9XG4gICAgXG4gICAgI2NvZGUtcGFydHMtdGl0bGUtbW9iaWxle1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgICNtYWluLXJlc2l6ZXJ7XG4gICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG5cbiAgICAuY29kZS1wYXJ0LXRpdGxlLWJ0bixcbiAgICAuZnVsbHNjcmVlbi1pZnJhbWUtYnRuLFxuICAgIC5zdHJldGNoLXYtaWZyYW1lLWJ0bixcbiAgICAuc3RyZXRjaC1oLWlmcmFtZS1idG57XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmxheW91dHMtbGlzdC1jb250YWluZXJ7XG4gICAgICAgIC8qb3BhY2l0eTogMC41O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsqL1xuICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuXG4gICAgLmxheW91dHMtbGlzdHtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cblxuICAgIC5tYWluLWNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzFweCk7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5maWRkbGUtc2l6ZXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuY29kZS1wYXJ0LXRpdGxle1xuICAgICAgICBkaXNwbGF5Om5vbmVcbiAgICB9XG5cbiAgICAuY29kZS1jb21wb25lbnQge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2I1YjViNTtcbiAgICB9XG5cbiAgICAuYXMtc3BsaXQtb3V0ZXJ7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5hcy1zcGxpdC1ndXR0ZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFzLXNwbGl0LWd1dHRlci1jdXN0b217XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgYXMtc3BsaXQtYXJlYS5hcy1zcGxpdC1hcmVhLWNvZGUtcGFydHMge1xuICAgICAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDo1MCUgIWltcG9ydGFudDtcbiAgICAgICAgZmxleDpub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIG9yZGVyOjAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBhcy1zcGxpdC1hcmVhLmFzLXNwbGl0LWFyZWEtaWZyYW1lIHtcbiAgICAgICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6NTAlICFpbXBvcnRhbnQ7XG4gICAgICAgIGZsZXg6bm9uZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5hcy1zcGxpdC1vdXRlci5uby1yZXN1bHQtbW9iaWxlID4gLmFzLXNwbGl0LWFyZWEtY29kZS1wYXJ0cyxcbiAgICAuYXMtc3BsaXQtb3V0ZXIubm8tcmVzdWx0LW1vYmlsZSA+IC5hcy1zcGxpdC1hcmVhLWlmcmFtZXtcbiAgICAgICAgaGVpZ2h0OjEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYXMtc3BsaXQtb3V0ZXIubm8tY29kZS1tb2JpbGUgPiAuYXMtc3BsaXQtYXJlYS1jb2RlLXBhcnRzLFxuICAgIC5hcy1zcGxpdC1vdXRlci5uby1jb2RlLW1vYmlsZSA+IC5hcy1zcGxpdC1hcmVhLWlmcmFtZXtcbiAgICAgICAgaGVpZ2h0OjEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBhcy1zcGxpdC1hcmVhLmNvZGUtY29tcG9uZW50LWNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgIGZsZXg6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuYXBwLWxvYWRlcntcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgcmlnaHQ6IDRweDtcbiAgICB9XG5cbiAgICAuZmlkZGxlLXRpdGxle1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgLmZpZGRsZS1sb2dve1xuICAgICAgICBsZWZ0OiA0cHg7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgIH1cblxuICAgIC8qaGlkZSBpZnJhbWUgcmVzaXppbmcgZW1wdHkgYXJlYSBmb3IgbW9iaWxlIGRldmljZXMqL1xuICAgIFxuICAgIC5hcy1zcGxpdC1hcmVhLWlmcmFtZSA+IC5lbXB0eS1hcmVhe1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbiAgICAuYXMtc3BsaXQtZ3V0dGVyLWN1c3RvbSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1haW4tY29udGFpbmVyLmZ1bGwtc2NyZWVuLWlmcmFtZSAuZnVsbHNjcmVlbi1pZnJhbWUtaGVhZGVye1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5pZnJhbWUtb3ZlcmxheS1mb3ItZHJvcHtcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQwMHB4KXtcbiAgICAuaGVhZGVyLWJ0bnMtY29udGFpbmVyICA+ICo6bm90KDpsYXN0LWNoaWxkKXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OjNweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xuICAgICAgICBwYWRkaW5nOiAxcHggMnB4O1xuICAgIH1cblxuICAgIC5oZWFkZXItYnRucy1jb250YWluZXIgID4gKjpsYXN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDozcHg7XG4gICAgICAgIHBhZGRpbmc6IDFweCAycHg7XG4gICAgfVxuXG4gICAgLmxvZ28tdGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgXG4gICAgLmZpZGRsZS1sb2dvIHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbn1cblxuYXBwLW1vZGFsIC5tb2RhbC1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMnB4IDRweDtcbn1cbmFwcC1tb2RhbCAubW9kYWwtYm9keSB7XG4gICAgcGFkZGluZzogMnB4IDRweDtcbn1cblxuYXBwLW1vZGFsIC5tb2RhbC1oZWFkZXIgLm1vZGFsLWNsb3NlLWJ0bntcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHRyYW5zZm9ybTpub25lO1xufVxuXG5hcHAtbW9kYWwgLm1vZGFsLWhlYWRlciAubW9kYWwtdmFsaWRhdGUtYnRue1xuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgIGhlaWdodDogMzNweDtcbn1cblxuLnRoZW1lcy1tZW51IGxpLnNlbGVjdGVkIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNhYWFhYWE7Ki9cbiAgICAvKmNvbG9yOiAjRkZGRkZGOyovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5jbGluZ2luZ3tcbiAgICBhbmltYXRpb24tbmFtZTogY2xpbmc7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9399:
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



const _c0 = function (a0) {
  return {
    "shown": a0
  };
};
const _c1 = ["*"];
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
  static #_ = this.ɵfac = function ModalComponent_Factory(t) {
    return new (t || ModalComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ModalComponent,
    selectors: [["app-modal"]],
    outputs: {
      onHide: "onHide"
    },
    ngContentSelectors: _c1,
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isShown()));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".modal-container .modal-header{\n  text-align: center;\n  position:relative;\n  padding:4px;\n}\n\n  .modal-container .modal-header h3{\n  margin: 0px;\n}\n\n  .modal-footer{\n  display: flex;\n  justify-content: center;\n  padding: 4px;\n}\n\n  .modal-body{\n  padding: 4px;\n  overflow: auto;\n  flex-grow: 1;\n}\n\n  .modal-close-btn{\n  position: absolute;\n  top:50%;\n  transform: translateY(-50%);\n  right:3px;\n  font-size: 16px;\n  cursor: pointer;\n  display: block;\n  text-align: center;\n  border-width: 1px;\n  border-style: solid;\n  -webkit-user-select: none;\n          user-select: none;\n  outline: none;\n  padding: 4px 12px;\n  height: 33px;\n}\n\n  .modal-close-btn:active{\n    padding: 6px 12px 4px 12px;\n}\n  .modal-close-btn:hover{\n    background-color: #FFFFFF;\n}\n\n.modal-container[_ngcontent-%COMP%]{\n  top: 0px;\n  left: 0px;\n  pointer-events: none;\n  opacity: 0;\n  position: fixed;\n  z-index: -1;\n  width:100%;\n  height:100%;\n  transition: 0.2s all;\n}\n.modal[_ngcontent-%COMP%]{\n  top: 1px;\n  transform:translateY(0px) translateX(-50%);\n  position: absolute;\n  left: 50%;\n  width: 50%;\n  min-width: 750px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  transition: 0.2s all;\n  height: calc(100% - 2px);\n  overflow: auto;\n}\n\n.modal-container.shown[_ngcontent-%COMP%]{\n  pointer-events: all;\n  opacity: 1;\n  z-index:9999;\n}\n\n@media screen and (max-width:767px){\n  .modal[_ngcontent-%COMP%]{\n    min-width: auto;\n    width: calc(100% - 2px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFFBQVE7RUFDUiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCO0FBQ0YiLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1oZWFkZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHBhZGRpbmc6NHB4O1xufVxuXG46Om5nLWRlZXAgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtaGVhZGVyIGgze1xuICBtYXJnaW46IDBweDtcbn1cblxuOjpuZy1kZWVwIC5tb2RhbC1mb290ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbjo6bmctZGVlcCAubW9kYWwtYm9keXtcbiAgcGFkZGluZzogNHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgZmxleC1ncm93OiAxO1xufVxuXG46Om5nLWRlZXAgLm1vZGFsLWNsb3NlLWJ0bntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6NTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHJpZ2h0OjNweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGhlaWdodDogMzNweDtcbn1cblxuOjpuZy1kZWVwIC5tb2RhbC1jbG9zZS1idG46YWN0aXZle1xuICAgIHBhZGRpbmc6IDZweCAxMnB4IDRweCAxMnB4O1xufVxuOjpuZy1kZWVwIC5tb2RhbC1jbG9zZS1idG46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuLm1vZGFsLWNvbnRhaW5lcntcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cbi5tb2RhbHtcbiAgdG9wOiAxcHg7XG4gIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDBweCkgdHJhbnNsYXRlWCgtNTAlKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIG1pbi13aWR0aDogNzUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMnB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tb2RhbC1jb250YWluZXIuc2hvd257XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6OTk5OTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XG4gIC5tb2RhbHtcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJweCk7XG4gIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsUUFBUTtFQUNSLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7RUFDekI7QUFDRjtBQUVBLDRsR0FBNGxHIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWhlYWRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgcGFkZGluZzo0cHg7XG59XG5cbjo6bmctZGVlcCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1oZWFkZXIgaDN7XG4gIG1hcmdpbjogMHB4O1xufVxuXG46Om5nLWRlZXAgLm1vZGFsLWZvb3RlcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuOjpuZy1kZWVwIC5tb2RhbC1ib2R5e1xuICBwYWRkaW5nOiA0cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbjo6bmctZGVlcCAubW9kYWwtY2xvc2UtYnRue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDo1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgcmlnaHQ6M3B4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgaGVpZ2h0OiAzM3B4O1xufVxuXG46Om5nLWRlZXAgLm1vZGFsLWNsb3NlLWJ0bjphY3RpdmV7XG4gICAgcGFkZGluZzogNnB4IDEycHggNHB4IDEycHg7XG59XG46Om5nLWRlZXAgLm1vZGFsLWNsb3NlLWJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4ubW9kYWwtY29udGFpbmVye1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xufVxuLm1vZGFse1xuICB0b3A6IDFweDtcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMHB4KSB0cmFuc2xhdGVYKC01MCUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDUwJTtcbiAgbWluLXdpZHRoOiA3NTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycHgpO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1vZGFsLWNvbnRhaW5lci5zaG93bntcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDo5OTk5O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcbiAgLm1vZGFse1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3986:
/*!***************************************!*\
  !*** ./src/app/ressources.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RessourcesService": () => (/* binding */ RessourcesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);




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
  static #_ = this.ɵfac = function RessourcesService_Factory(t) {
    return new (t || RessourcesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: RessourcesService,
    factory: RessourcesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1833:
/*!****************************************************!*\
  !*** ./src/app/ressources/ressources.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RessourcesComponent": () => (/* binding */ RessourcesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _ressources_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ressources.service */ 3986);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader/loader.component */ 5242);








const _c0 = ["loader"];
const _c1 = function (a0) {
  return {
    "selected": a0
  };
};
function RessourcesComponent_label_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RessourcesComponent_label_5_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.ressoucesMobileTab = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, ctx_r0.ressoucesMobileTab == "select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.ressoucesMobileTab);
  }
}
function RessourcesComponent_div_12_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const version_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", version_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](version_r10);
  }
}
function RessourcesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Choose version: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RessourcesComponent_div_12_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.currentRessourceVersion = $event);
    })("ngModelChange", function RessourcesComponent_div_12_Template_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.onCurrentRessourceChoiceVersionChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RessourcesComponent_div_12_option_4_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.currentRessourceVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.currentRessourceVersions);
  }
}
const _c2 = function (a0) {
  return {
    "current-choice": a0
  };
};
function RessourcesComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RessourcesComponent_div_15_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ressource_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.onRessourcesChoiceClick(ressource_r15));
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
    const ressource_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, ctx_r14.currentRessourceChoice.name == ressource_r15.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ressource_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ressource_r15.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ressource_r15.description);
  }
}
function RessourcesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RessourcesComponent_div_15_div_1_Template, 10, 6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.availableRessources);
  }
}
function RessourcesComponent_div_17_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RessourcesComponent_div_17_div_9_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const file_r19 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.onSelectRessourceAsset(file_r19, ctx_r20.currentRessourceChoice));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c1, ctx_r18.isRessourceAssetSelected(file_r19, ctx_r18.currentRessourceChoice)))("title", "(click to toggle)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](file_r19);
  }
}
const _c3 = function (a0, a1) {
  return {
    "is-stretched": a0,
    "loading": a1
  };
};
function RessourcesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Search for files: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RessourcesComponent_div_17_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.onRessourcesChoiceFilesSearchStringChange($event));
    })("ngModelChange", function RessourcesComponent_div_17_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.ressourcesChoiceFilesSearchString = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RessourcesComponent_div_17_div_9_Template, 3, 5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c3, ctx_r4.selectedRessourceAssets.length == 0, _r2.isLoaderShow()));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r4.currentRessourceChoice.name, " ", ctx_r4.currentRessourceVersion, " ressources (click to toggle)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.ressourcesChoiceFilesSearchString);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.getFilteredcurrentRessourceAssetsByVersion(ctx_r4.currentRessourceAssetsByVersion, ctx_r4.ressourcesChoiceFilesSearchString));
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
const _c4 = function (a0) {
  return {
    "placeholder": a0
  };
};
function RessourcesComponent_div_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44)(1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("drop", function RessourcesComponent_div_19_div_3_Template_div_drop_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.ressourceChoiceSelectedAssetDrop($event));
    })("dragover", function RessourcesComponent_div_19_div_3_Template_div_dragover_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.ressourceChoiceSelectedAssetDragover($event));
    })("dragstart", function RessourcesComponent_div_19_div_3_Template_div_dragstart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.ressourceChoiceSelectedAssetDragstart($event));
    })("dragenter", function RessourcesComponent_div_19_div_3_Template_div_dragenter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.ressourceChoiceSelectedAssetDragenter($event));
    })("dragleave", function RessourcesComponent_div_19_div_3_Template_div_dragleave_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.ressourceChoiceSelectedAssetDragleave($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 46)(5, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RessourcesComponent_div_19_div_3_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const selectedFile_r27 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r35.removeSelectedRessourceAsset(selectedFile_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const selectedFile_r27 = ctx.$implicit;
    const ind_r28 = ctx.index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Grab to reorder")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c4, selectedFile_r27.placeholderMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c4, selectedFile_r27.placeholderMode));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-index", ind_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r26.getFullAssetUrl(selectedFile_r27));
  }
}
const _c5 = function (a0) {
  return {
    "is-stretched": a0
  };
};
function RessourcesComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RessourcesComponent_div_19_h3_1_Template, 2, 0, "h3", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RessourcesComponent_div_19_div_3_Template, 8, 9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c5, ctx_r6.selectedRessourceAssets.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.selectedRessourceAssets.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.selectedRessourceAssets);
  }
}
const _c6 = function (a0, a1) {
  return {
    "browse-mode": a0,
    "select-mode": a1
  };
};
const _c7 = function (a0) {
  return {
    "is-reduced": a0
  };
};
const _c8 = function () {
  return {
    "margin-right": "15px"
  };
};
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
  static #_ = this.ɵfac = function RessourcesComponent_Factory(t) {
    return new (t || RessourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ressources_service__WEBPACK_IMPORTED_MODULE_0__.RessourcesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
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
    consts: [[1, "ressources-container"], [1, "resources-tabs-mobile", 3, "ngClass"], ["for", "ressources-mobile-tab-browse", 3, "ngClass"], ["type", "radio", "name", "ressources-mobile-tab", "value", "browse", "id", "ressources-mobile-tab-browse", 3, "ngModel", "ngModelChange"], ["for", "ressources-mobile-tab-select", 3, "ngClass", 4, "ngIf"], [1, "ressources-choices-container", 3, "ngClass"], [1, "ressources-query-container"], [1, "ressources-query-parent", 3, "ngStyle"], ["for", "ressources-query-input"], ["type", "text", "id", "ressources-query-input", 1, "form-control", "ressources-query-input", 3, "ngModel", "ngModelChange"], ["class", "ressources-query-version-parent", "style", "margin-right:15px", 4, "ngIf"], ["loader", ""], ["class", "ressources-choices-parent", 4, "ngIf"], ["class", "ressources-choice-files-container", 3, "ngClass", 4, "ngIf"], [4, "ngIf"], ["class", "ressources-choice-selected-files-container", 3, "ngClass", 4, "ngIf"], ["for", "ressources-mobile-tab-select", 3, "ngClass"], ["type", "radio", "name", "ressources-mobile-tab", "value", "select", "id", "ressources-mobile-tab-select", 3, "ngModel", "ngModelChange"], [1, "ressources-query-version-parent", 2, "margin-right", "15px"], [1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "ressources-choices-parent"], ["class", "ressources-choice", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "ressources-choice", 3, "ngClass", "click"], [1, "ressource-choice-name"], [1, "ressource-choice-version"], [1, "ressource-version-btn"], [1, "ressource-version-number"], [1, "ressource-choice-description"], [1, "ressources-choice-files-container", 3, "ngClass"], [1, "ressources-choice-files-search"], [1, "title", 2, "border-bottom", "none"], ["for", "ressources-choice-files-search-input"], ["type", "text", "id", "ressources-choice-files-search-input", 1, "form-control", "ressources-choice-files-search", 3, "ngModel", "ngModelChange"], [1, "ressources-choice-files-parent"], ["class", "ressources-choice-files", 3, "ngClass", "title", "click", 4, "ngFor", "ngForOf"], [1, "ressources-choice-files", 3, "ngClass", "title", "click"], [1, "ressource-choice-file"], [1, "ressources-choice-selected-files-container", 3, "ngClass"], ["class", "title", 4, "ngIf"], [1, "ressources-choice-selected-file-wrapper-parent"], ["class", "ressources-choice-selected-file-wrapper", 3, "title", "ngClass", 4, "ngFor", "ngForOf"], [1, "title"], [1, "ressources-choice-selected-file-wrapper", 3, "title", "ngClass"], ["draggable", "true", 1, "ressources-choice-selected-file", 3, "ngClass", "drop", "dragover", "dragstart", "dragenter", "dragleave"], [1, "btn-remove-selected-ressource-wrapper"], [1, "btn", "btn-remove-selected-ressource", 3, "click"]],
    template: function RessourcesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Browse");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RessourcesComponent_Template_input_ngModelChange_4_listener($event) {
          return ctx.ressoucesMobileTab = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RessourcesComponent_label_5_Template, 3, 4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Search for libraries: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RessourcesComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.onRessourcesQueryStringChange($event);
        })("ngModelChange", function RessourcesComponent_Template_input_ngModelChange_11_listener($event) {
          return ctx.ressourcesQueryString = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RessourcesComponent_div_12_Template, 5, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-loader", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RessourcesComponent_div_15_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, RessourcesComponent_div_17_Template, 10, 8, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, RessourcesComponent_hr_18_Template, 1, 0, "hr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, RessourcesComponent_div_19_Template, 4, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](12, _c6, ctx.ressoucesMobileTab == "browse", ctx.ressoucesMobileTab == "select"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c1, ctx.ressoucesMobileTab == "browse"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.ressoucesMobileTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentRessourceVersion && ctx.currentRessourceAssetsByVersion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c7, ctx.selectedRessourceAssets.length > 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.ressourcesQueryString);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentRessourceChoice.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.availableRessources.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentRessourceVersion && ctx.currentRessourceAssetsByVersion.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedRessourceAssets.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.selectedRessourceAssets.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent],
    styles: [".ressources-container[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n\n.ressources-container[_ngcontent-%COMP%]    > hr[_ngcontent-%COMP%]{\n  width: 100%;\n  margin: 0px auto;\n}\n\n.ressources-query-container[_ngcontent-%COMP%]{\n  width:100%;\n  position: relative;\n  display:flex;\n  align-items:center;\n  padding: 3px;\n}\n\n.ressources-choices-parent[_ngcontent-%COMP%]{\n  flex-grow: 1;\n  overflow: auto;\n}\n\n.ressources-query-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n  font-size:14px;\n}\n\n.ressources-choices-container[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 36%;\n  min-height: 36%;\n  margin: 4px auto 0 auto;\n  border-radius: 2px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.ressources-choices-container.is-reduced[_ngcontent-%COMP%]{\n  height: 32%;\n  min-height: 32%;\n}\n\n.ressources-choice[_ngcontent-%COMP%] {\n  padding: 4px 0 4px 5px;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor:pointer;\n}\n\n.ressources-choice[_ngcontent-%COMP%]:first-child    ~ .ressources-choice[_ngcontent-%COMP%]{\n  border-top:1px solid #bbb;\n}\n\n.ressources-choice[_ngcontent-%COMP%]:last-child{\n  border-bottom:1px solid #bbb;\n}\n\n.ressources-choice[_ngcontent-%COMP%]   .ressource-choice-name[_ngcontent-%COMP%], .ressources-choice[_ngcontent-%COMP%]   .ressource-choice-version[_ngcontent-%COMP%]{\n  margin-bottom:4px;\n}\n\n.ressources-choice[_ngcontent-%COMP%]   .ressource-choice-version[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.ressources-choice[_ngcontent-%COMP%]   .ressource-choice-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.ressource-choice-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n}\n\n.ressources-choice-files-container[_ngcontent-%COMP%]{\n  overflow:hidden;\n  width:100%;\n  margin: auto;\n  min-height: 31%;\n  height: 31%;\n  display: flex;\n  flex-direction: column;\n}\n\n.ressources-choice-files-parent[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow: auto;\n}\n\n.ressources-choice-files[_ngcontent-%COMP%] {\n  padding: 7px 5px;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor:pointer;\n  font-size: 14px;\n}\n\n.ressources-choice-files-container.is-stretched[_ngcontent-%COMP%]{\n  min-height: auto;\n  flex-grow: 1;\n  height: auto;\n}\n\n\n.ressources-choice-selected-files-container[_ngcontent-%COMP%]{\n  margin: auto;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.ressources-choice-selected-files-container.is-stretched[_ngcontent-%COMP%]{\n  flex-grow: 1;\n}\n\n.ressources-choice-selected-file-wrapper-parent[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow: auto;\n}\n\n.ressources-choice-files[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  pointer-events: none;\n  word-break: break-word;\n}\n\n.ressources-choice-files-search[_ngcontent-%COMP%]{\n  margin: 1px auto 1px auto;\n  text-align: center;\n  width: 100%;\n}\n\n.ressources-choice-files-search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 3px;\n}\n\n.ressources-choice-files-search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  margin-right: 3px;\n  font-size: 14px;\n}\n\n.ressources-choice-selected-file[_ngcontent-%COMP%] {\n  padding: 5px;\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: grab;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-grow: 1;\n  font-size:14px\n}\n\n.ressources-choice-selected-file[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  pointer-events: none;\n  word-break: break-word;\n}\n\ninput[type][_ngcontent-%COMP%]{\n  text-align:left;\n}\n\n.ressources-choice-selected-file-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 2px 0;\n}\n\n.btn-remove-selected-ressource-wrapper[_ngcontent-%COMP%]{\n  padding: 4px 0;\n  display: flex;\n  align-items: center;\n}\n\n.resources-tabs-mobile[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  margin-bottom: 4px;\n}\n\n.resources-tabs-mobile[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding:5px;\n  cursor: pointer;\n  border-bottom:none;\n  min-width: 70px;\n  text-align: center;\n}\n\n.resources-tabs-mobile[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position:absolute;\n  opacity:0;\n  width:100%;\n  height:100%;\n}\n\n.title[_ngcontent-%COMP%]{\n  text-align: center;\n  margin:1px 0px;\n}\n\n.ressources-choice-files-container.loading[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n@media (min-height:701px) and (min-width:768px){\n  .resources-tabs-mobile[_ngcontent-%COMP%]{\n      display:none;\n  }\n}\n\n@media (max-height:700px),(max-width:767px){\n  .resources-tabs-mobile[_ngcontent-%COMP%]    ~ hr[_ngcontent-%COMP%]{\n      display:none;\n  }\n  \n  .resources-tabs-mobile.browse-mode[_ngcontent-%COMP%]    ~ .ressources-choice-files-search[_ngcontent-%COMP%], .resources-tabs-mobile.browse-mode[_ngcontent-%COMP%]    ~ .ressources-choice-files-container[_ngcontent-%COMP%], .resources-tabs-mobile.browse-mode[_ngcontent-%COMP%]    ~ .ressources-choice-selected-files-container[_ngcontent-%COMP%], .resources-tabs-mobile.browse-mode[_ngcontent-%COMP%]    ~ h3[_ngcontent-%COMP%]{\n      display:none\n  }\n  .resources-tabs-mobile.browse-mode[_ngcontent-%COMP%]    ~ .ressources-choices-container[_ngcontent-%COMP%]{\n      height: 100%;\n  }\n  \n  .resources-tabs-mobile.select-mode[_ngcontent-%COMP%]    ~ .ressources-choices-container[_ngcontent-%COMP%], .resources-tabs-mobile.select-mode[_ngcontent-%COMP%]    ~ .ressources-query-container[_ngcontent-%COMP%]{\n      display:none;\n  }\n\n  .ressources-choice-files-container[class][_ngcontent-%COMP%] {\n    height: 50%;\n    min-height: auto;\n  }\n\n  .ressources-choice-selected-files-container[_ngcontent-%COMP%] {\n    height: 50%;\n    min-height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3NvdXJjZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtBQUNkOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWjtBQUNGOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7TUFDSSxZQUFZO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtNQUNJLFlBQVk7RUFDaEI7O0VBRUE7Ozs7TUFJSTtFQUNKO0VBQ0E7TUFDSSxZQUFZO0VBQ2hCOztFQUVBOztNQUVJLFlBQVk7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6InJlc3NvdXJjZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNzb3VyY2VzLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmVzc291cmNlcy1jb250YWluZXIgPiBocntcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5yZXNzb3VyY2VzLXF1ZXJ5LWNvbnRhaW5lcntcbiAgd2lkdGg6MTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2VzLXBhcmVudHtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnJlc3NvdXJjZXMtcXVlcnktY29udGFpbmVyIGxhYmVse1xuICBmb250LXNpemU6MTRweDtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlcy1jb250YWluZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM2JTtcbiAgbWluLWhlaWdodDogMzYlO1xuICBtYXJnaW46IDRweCBhdXRvIDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2VzLWNvbnRhaW5lci5pcy1yZWR1Y2Vke1xuICBoZWlnaHQ6IDMyJTtcbiAgbWluLWhlaWdodDogMzIlO1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2Uge1xuICBwYWRkaW5nOiA0cHggMCA0cHggNXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZTpmaXJzdC1jaGlsZCB+IC5yZXNzb3VyY2VzLWNob2ljZXtcbiAgYm9yZGVyLXRvcDoxcHggc29saWQgI2JiYjtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlOmxhc3QtY2hpbGR7XG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNiYmI7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZSAgLnJlc3NvdXJjZS1jaG9pY2UtbmFtZSxcbi5yZXNzb3VyY2VzLWNob2ljZSAgLnJlc3NvdXJjZS1jaG9pY2UtdmVyc2lvbntcbiAgbWFyZ2luLWJvdHRvbTo0cHg7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZSAgLnJlc3NvdXJjZS1jaG9pY2UtdmVyc2lvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlICAucmVzc291cmNlLWNob2ljZS1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJlc3NvdXJjZS1jaG9pY2UtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlLWZpbGVzLWNvbnRhaW5lcntcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICB3aWR0aDoxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDMxJTtcbiAgaGVpZ2h0OiAzMSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZS1maWxlcy1wYXJlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2UtZmlsZXMge1xuICBwYWRkaW5nOiA3cHggNXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlLWZpbGVzLWNvbnRhaW5lci5pcy1zdHJldGNoZWR7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5cbi5yZXNzb3VyY2VzLWNob2ljZS1zZWxlY3RlZC1maWxlcy1jb250YWluZXJ7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZS1zZWxlY3RlZC1maWxlcy1jb250YWluZXIuaXMtc3RyZXRjaGVke1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZS1zZWxlY3RlZC1maWxlLXdyYXBwZXItcGFyZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlLWZpbGVzIHNwYW57XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2UtZmlsZXMtc2VhcmNoe1xuICBtYXJnaW46IDFweCBhdXRvIDFweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2UtZmlsZXMtc2VhcmNoID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2UtZmlsZXMtc2VhcmNoID4gZGl2ID4gbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2Utc2VsZWN0ZWQtZmlsZSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogZ3JhYjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtc2l6ZToxNHB4XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZS1zZWxlY3RlZC1maWxlIHNwYW57XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG5pbnB1dFt0eXBlXXtcbiAgdGV4dC1hbGlnbjpsZWZ0O1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2Utc2VsZWN0ZWQtZmlsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAycHggMDtcbn1cblxuLmJ0bi1yZW1vdmUtc2VsZWN0ZWQtcmVzc291cmNlLXdyYXBwZXJ7XG4gIHBhZGRpbmc6IDRweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmVzb3VyY2VzLXRhYnMtbW9iaWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnJlc291cmNlcy10YWJzLW1vYmlsZSBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6NXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206bm9uZTtcbiAgbWluLXdpZHRoOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXNvdXJjZXMtdGFicy1tb2JpbGUgaW5wdXQge1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgb3BhY2l0eTowO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbn1cblxuLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjoxcHggMHB4O1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2UtZmlsZXMtY29udGFpbmVyLmxvYWRpbmcge1xuICBvcGFjaXR5OiAwLjM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6NzAxcHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcbiAgLnJlc291cmNlcy10YWJzLW1vYmlsZXtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC1oZWlnaHQ6NzAwcHgpLChtYXgtd2lkdGg6NzY3cHgpe1xuICAucmVzb3VyY2VzLXRhYnMtbW9iaWxlIH4gaHJ7XG4gICAgICBkaXNwbGF5Om5vbmU7XG4gIH1cbiAgXG4gIC5yZXNvdXJjZXMtdGFicy1tb2JpbGUuYnJvd3NlLW1vZGUgfiAucmVzc291cmNlcy1jaG9pY2UtZmlsZXMtc2VhcmNoLFxuICAucmVzb3VyY2VzLXRhYnMtbW9iaWxlLmJyb3dzZS1tb2RlIH4gLnJlc3NvdXJjZXMtY2hvaWNlLWZpbGVzLWNvbnRhaW5lcixcbiAgLnJlc291cmNlcy10YWJzLW1vYmlsZS5icm93c2UtbW9kZSB+IC5yZXNzb3VyY2VzLWNob2ljZS1zZWxlY3RlZC1maWxlcy1jb250YWluZXIsXG4gIC5yZXNvdXJjZXMtdGFicy1tb2JpbGUuYnJvd3NlLW1vZGUgfiBoM3tcbiAgICAgIGRpc3BsYXk6bm9uZVxuICB9XG4gIC5yZXNvdXJjZXMtdGFicy1tb2JpbGUuYnJvd3NlLW1vZGUgfiAucmVzc291cmNlcy1jaG9pY2VzLWNvbnRhaW5lcntcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLnJlc291cmNlcy10YWJzLW1vYmlsZS5zZWxlY3QtbW9kZSB+IC5yZXNzb3VyY2VzLWNob2ljZXMtY29udGFpbmVyLFxuICAucmVzb3VyY2VzLXRhYnMtbW9iaWxlLnNlbGVjdC1tb2RlIH4gLnJlc3NvdXJjZXMtcXVlcnktY29udGFpbmVye1xuICAgICAgZGlzcGxheTpub25lO1xuICB9XG5cbiAgLnJlc3NvdXJjZXMtY2hvaWNlLWZpbGVzLWNvbnRhaW5lcltjbGFzc10ge1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cblxuICAucmVzc291cmNlcy1jaG9pY2Utc2VsZWN0ZWQtZmlsZXMtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICB9XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmVzc291cmNlcy9yZXNzb3VyY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO01BQ0ksWUFBWTtFQUNoQjtBQUNGOztBQUVBO0VBQ0U7TUFDSSxZQUFZO0VBQ2hCOztFQUVBOzs7O01BSUk7RUFDSjtFQUNBO01BQ0ksWUFBWTtFQUNoQjs7RUFFQTs7TUFFSSxZQUFZO0VBQ2hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDRjtBQUdBLG9vUkFBb29SIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3NvdXJjZXMtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yZXNzb3VyY2VzLWNvbnRhaW5lciA+IGhye1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLnJlc3NvdXJjZXMtcXVlcnktY29udGFpbmVye1xuICB3aWR0aDoxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZXMtcGFyZW50e1xuICBmbGV4LWdyb3c6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucmVzc291cmNlcy1xdWVyeS1jb250YWluZXIgbGFiZWx7XG4gIGZvbnQtc2l6ZToxNHB4O1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2VzLWNvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzYlO1xuICBtaW4taGVpZ2h0OiAzNiU7XG4gIG1hcmdpbjogNHB4IGF1dG8gMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZXMtY29udGFpbmVyLmlzLXJlZHVjZWR7XG4gIGhlaWdodDogMzIlO1xuICBtaW4taGVpZ2h0OiAzMiU7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZSB7XG4gIHBhZGRpbmc6IDRweCAwIDRweCA1cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlOmZpcnN0LWNoaWxkIH4gLnJlc3NvdXJjZXMtY2hvaWNle1xuICBib3JkZXItdG9wOjFweCBzb2xpZCAjYmJiO1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2U6bGFzdC1jaGlsZHtcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2JiYjtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlICAucmVzc291cmNlLWNob2ljZS1uYW1lLFxuLnJlc3NvdXJjZXMtY2hvaWNlICAucmVzc291cmNlLWNob2ljZS12ZXJzaW9ue1xuICBtYXJnaW4tYm90dG9tOjRweDtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlICAucmVzc291cmNlLWNob2ljZS12ZXJzaW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2UgIC5yZXNzb3VyY2UtY2hvaWNlLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmVzc291cmNlLWNob2ljZS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2UtZmlsZXMtY29udGFpbmVye1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIHdpZHRoOjEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLWhlaWdodDogMzElO1xuICBoZWlnaHQ6IDMxJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlLWZpbGVzLXBhcmVudCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZS1maWxlcyB7XG4gIHBhZGRpbmc6IDdweCA1cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2UtZmlsZXMtY29udGFpbmVyLmlzLXN0cmV0Y2hlZHtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgZmxleC1ncm93OiAxO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cblxuLnJlc3NvdXJjZXMtY2hvaWNlLXNlbGVjdGVkLWZpbGVzLWNvbnRhaW5lcntcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlLXNlbGVjdGVkLWZpbGVzLWNvbnRhaW5lci5pcy1zdHJldGNoZWR7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlLXNlbGVjdGVkLWZpbGUtd3JhcHBlci1wYXJlbnQge1xuICBmbGV4LWdyb3c6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucmVzc291cmNlcy1jaG9pY2UtZmlsZXMgc3BhbntcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZS1maWxlcy1zZWFyY2h7XG4gIG1hcmdpbjogMXB4IGF1dG8gMXB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZS1maWxlcy1zZWFyY2ggPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZS1maWxlcy1zZWFyY2ggPiBkaXYgPiBsYWJlbCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZS1zZWxlY3RlZC1maWxlIHtcbiAgcGFkZGluZzogNXB4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBncmFiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOjE0cHhcbn1cblxuLnJlc3NvdXJjZXMtY2hvaWNlLXNlbGVjdGVkLWZpbGUgc3BhbntcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG59XG5cbmlucHV0W3R5cGVde1xuICB0ZXh0LWFsaWduOmxlZnQ7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZS1zZWxlY3RlZC1maWxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDJweCAwO1xufVxuXG4uYnRuLXJlbW92ZS1zZWxlY3RlZC1yZXNzb3VyY2Utd3JhcHBlcntcbiAgcGFkZGluZzogNHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yZXNvdXJjZXMtdGFicy1tb2JpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4ucmVzb3VyY2VzLXRhYnMtbW9iaWxlIGxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzo1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTpub25lO1xuICBtaW4td2lkdGg6IDcwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlc291cmNlcy10YWJzLW1vYmlsZSBpbnB1dCB7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBvcGFjaXR5OjA7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxMDAlO1xufVxuXG4udGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOjFweCAwcHg7XG59XG5cbi5yZXNzb3VyY2VzLWNob2ljZS1maWxlcy1jb250YWluZXIubG9hZGluZyB7XG4gIG9wYWNpdHk6IDAuMztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDo3MDFweCkgYW5kIChtaW4td2lkdGg6NzY4cHgpe1xuICAucmVzb3VyY2VzLXRhYnMtbW9iaWxle1xuICAgICAgZGlzcGxheTpub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDo3MDBweCksKG1heC13aWR0aDo3NjdweCl7XG4gIC5yZXNvdXJjZXMtdGFicy1tb2JpbGUgfiBocntcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxuICBcbiAgLnJlc291cmNlcy10YWJzLW1vYmlsZS5icm93c2UtbW9kZSB+IC5yZXNzb3VyY2VzLWNob2ljZS1maWxlcy1zZWFyY2gsXG4gIC5yZXNvdXJjZXMtdGFicy1tb2JpbGUuYnJvd3NlLW1vZGUgfiAucmVzc291cmNlcy1jaG9pY2UtZmlsZXMtY29udGFpbmVyLFxuICAucmVzb3VyY2VzLXRhYnMtbW9iaWxlLmJyb3dzZS1tb2RlIH4gLnJlc3NvdXJjZXMtY2hvaWNlLXNlbGVjdGVkLWZpbGVzLWNvbnRhaW5lcixcbiAgLnJlc291cmNlcy10YWJzLW1vYmlsZS5icm93c2UtbW9kZSB+IGgze1xuICAgICAgZGlzcGxheTpub25lXG4gIH1cbiAgLnJlc291cmNlcy10YWJzLW1vYmlsZS5icm93c2UtbW9kZSB+IC5yZXNzb3VyY2VzLWNob2ljZXMtY29udGFpbmVye1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAucmVzb3VyY2VzLXRhYnMtbW9iaWxlLnNlbGVjdC1tb2RlIH4gLnJlc3NvdXJjZXMtY2hvaWNlcy1jb250YWluZXIsXG4gIC5yZXNvdXJjZXMtdGFicy1tb2JpbGUuc2VsZWN0LW1vZGUgfiAucmVzc291cmNlcy1xdWVyeS1jb250YWluZXJ7XG4gICAgICBkaXNwbGF5Om5vbmU7XG4gIH1cblxuICAucmVzc291cmNlcy1jaG9pY2UtZmlsZXMtY29udGFpbmVyW2NsYXNzXSB7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbWluLWhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5yZXNzb3VyY2VzLWNob2ljZS1zZWxlY3RlZC1maWxlcy1jb250YWluZXIge1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3289:
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


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
  static #_ = this.ɵfac = function SafePipe_Factory(t) {
    return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "safe",
    type: SafePipe,
    pure: true
  });
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map