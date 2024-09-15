"use strict";
(self["webpackChunkreservation"] = self["webpackChunkreservation"] || []).push([["src_app_shared_components_layout_layout_module_ts"],{

/***/ 8287:
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/layout/layout-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutRoutingModule: () => (/* binding */ LayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.component */ 7487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
  children: [{
    path: '',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! src/app/features/home/home.module */ 2829)).then(m => m.HomeModule)
  }, {
    path: 'home',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! src/app/features/home/home.module */ 2829)).then(m => m.HomeModule)
  }, {
    path: 'reservations',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_reservations_reservations-list_reservations_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/features/reservations/reservations-list/reservations.module */ 2784)).then(m => m.ReservationsModule)
  }, {
    path: 'reservation',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_reservations_reservations-form_reservations-form_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/features/reservations/reservations-form/reservations-form.module */ 3167)).then(m => m.ReservationsFormModule)
  }]
}];
class LayoutRoutingModule {
  static #_ = this.ɵfac = function LayoutRoutingModule_Factory(t) {
    return new (t || LayoutRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: LayoutRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LayoutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7487:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/layout/layout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _tool_bar_tool_bar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tool-bar/tool-bar.module */ 7006);
/* harmony import */ var _snackbar_snackbar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../snackbar/snackbar.module */ 2920);
/* harmony import */ var _snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snackbar/snackbar.service */ 9833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tool-bar/tool-bar.component */ 1023);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 7381);








class LayoutComponent {
  static #_ = this.ɵfac = function LayoutComponent_Factory(t) {
    return new (t || LayoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: LayoutComponent,
    selectors: [["app-layout"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 0,
    consts: [[1, "flex-shrink-0"], [1, "container"]],
    template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-tool-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-snackbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "main", 0)(4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _tool_bar_tool_bar_module__WEBPACK_IMPORTED_MODULE_0__.ToolBarModule, _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_3__.ToolBarComponent, _snackbar_snackbar_module__WEBPACK_IMPORTED_MODULE_1__.SnackbarModule, _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__.SnackbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet],
    styles: ["header[_ngcontent-%COMP%] {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIGhlaWdodDogNTBweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 6846:
/*!***********************************************************!*\
  !*** ./src/app/shared/components/layout/layout.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutModule: () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout-routing.module */ 8287);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component */ 7487);
/* harmony import */ var _snackbar_snackbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snackbar/snackbar.module */ 2920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);





class LayoutModule {
  static #_ = this.ɵfac = function LayoutModule_Factory(t) {
    return new (t || LayoutModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: LayoutModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutRoutingModule, _layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, _snackbar_snackbar_module__WEBPACK_IMPORTED_MODULE_2__.SnackbarModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LayoutModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutRoutingModule, _layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, _snackbar_snackbar_module__WEBPACK_IMPORTED_MODULE_2__.SnackbarModule],
    exports: [_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent]
  });
})();

/***/ }),

/***/ 7381:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/snackbar/snackbar.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackbarComponent: () => (/* binding */ SnackbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snackbar.service */ 9833);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8764);







const _c0 = function (a1) {
  return ["snackbar-wrap", a1];
};
function SnackbarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SnackbarComponent_div_0_Template_div_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.show.set(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r0.type()));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.computedIcon().icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.message(), " ");
  }
}
class SnackbarComponent {
  constructor() {
    this.snackbarService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_snackbar_service__WEBPACK_IMPORTED_MODULE_0__.SnackbarService);
    this.destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
    this.show = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false);
    this.message = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('');
    this.type = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null);
    this.computedIcon = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      let icon = '';
      switch (this.type()) {
        case 'success':
          icon = 'icon-checked';
          break;
        case 'error':
          icon = 'icon-cross';
          break;
        case 'info':
          icon = 'icon-info';
          break;
      }
      return {
        icon
      };
    });
  }
  ngOnInit() {
    this.snackbarService.snackbarState.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(state => {
      this.type.set(state.type ?? 'success');
      this.message.set(state.message);
      this.show.set(state.show);
      setTimeout(() => {
        this.show.set(false);
      }, this.type() === 'success' ? 3000 : 10000);
    }), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.takeUntilDestroyed)(this.destroyRef)).subscribe();
  }
  static #_ = this.ɵfac = function SnackbarComponent_Factory(t) {
    return new (t || SnackbarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SnackbarComponent,
    selectors: [["app-snackbar"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [["class", "px-3 d-flex align-items-center justify-content-center", 3, "ngClass", 4, "ngIf"], [1, "px-3", "d-flex", "align-items-center", "justify-content-center", 3, "ngClass"], [1, "h-100", "w-100", "d-flex", "justify-content-between", "pb-2"], [1, "d-flex", "align-items-center", "ps-4"], [1, "icon", "icon-20", 3, "ngClass"], [1, "snackbar-text", "ubuntu-regular", "font-size-12", "ps-3"], ["role", "button", "aria-hidden", "true", 1, "icon", "icon-12", "icon-leave", 3, "click"]],
    template: function SnackbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SnackbarComponent_div_0_Template, 7, 5, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    styles: [".snackbar-wrap[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0.5rem;\n  right: 1rem;\n  border-radius: 0.4rem;\n  min-width: 25rem;\n  min-height: 5rem;\n  z-index: 1031;\n}\n.snackbar-wrap.success[_ngcontent-%COMP%] {\n  background: #30b567;\n}\n.snackbar-wrap.error[_ngcontent-%COMP%] {\n  background: #ef3923;\n}\n.snackbar-wrap.info[_ngcontent-%COMP%] {\n  background: #1b72e7;\n}\n.snackbar-wrap[_ngcontent-%COMP%]   .snackbar-text[_ngcontent-%COMP%] {\n  text-align: center;\n  color: white;\n}\n.snackbar-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 30rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc25hY2tiYXIvc25hY2tiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0Y7QUFBRTtFQUNFLG1CQUFBO0FBRUo7QUFBRTtFQUNFLG1CQUFBO0FBRUo7QUFBRTtFQUNFLG1CQUFBO0FBRUo7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUU7RUFDRSxnQkFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLnNuYWNrYmFyLXdyYXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogLjVyZW07XG4gIHJpZ2h0OiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XG4gIG1pbi13aWR0aDogMjVyZW07XG4gIG1pbi1oZWlnaHQ6IDVyZW07XG4gIHotaW5kZXg6IDEwMzE7XG4gICYuc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZDogIzMwYjU2NztcbiAgfVxuICAmLmVycm9yIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWYzOTIzO1xuICB9XG4gICYuaW5mbyB7XG4gICAgYmFja2dyb3VuZDogIzFiNzJlNztcbiAgfVxuICAuc25hY2tiYXItdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBwe1xuICAgIG1heC13aWR0aDogMzByZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 2920:
/*!***************************************************************!*\
  !*** ./src/app/shared/components/snackbar/snackbar.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackbarModule: () => (/* binding */ SnackbarModule)
/* harmony export */ });
/* harmony import */ var _snackbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snackbar.component */ 7381);
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snackbar.service */ 9833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class SnackbarModule {
  static #_ = this.ɵfac = function SnackbarModule_Factory(t) {
    return new (t || SnackbarModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: SnackbarModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [_snackbar_service__WEBPACK_IMPORTED_MODULE_1__.SnackbarService],
    imports: [_snackbar_component__WEBPACK_IMPORTED_MODULE_0__.SnackbarComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SnackbarModule, {
    imports: [_snackbar_component__WEBPACK_IMPORTED_MODULE_0__.SnackbarComponent],
    exports: [_snackbar_component__WEBPACK_IMPORTED_MODULE_0__.SnackbarComponent]
  });
})();

/***/ }),

/***/ 9833:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/snackbar/snackbar.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnackbarService: () => (/* binding */ SnackbarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class SnackbarService {
  constructor() {
    this.snackbarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      show: false,
      message: '',
      type: null
    });
    this.snackbarState = this.snackbarSubject.asObservable();
    this.MESSAGE_UPDATE = 'Action effectuée avec succès';
    this.MESSAGE_ERROR = 'Une erreur est survenue';
  }
  show(message, type) {
    this.snackbarSubject.next({
      show: true,
      message,
      type
    });
  }
  showError(message = this.MESSAGE_ERROR) {
    this.show(message, 'error');
  }
  showSuccess(message = this.MESSAGE_UPDATE) {
    this.show(message, 'success');
  }
  static #_ = this.ɵfac = function SnackbarService_Factory(t) {
    return new (t || SnackbarService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: SnackbarService,
    factory: SnackbarService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1023:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/tool-bar/tool-bar.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolBarComponent: () => (/* binding */ ToolBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const _c0 = function () {
  return ["/home"];
};
const _c1 = function () {
  return ["/reservations"];
};
class ToolBarComponent {
  static #_ = this.ɵfac = function ToolBarComponent_Factory(t) {
    return new (t || ToolBarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ToolBarComponent,
    selectors: [["app-tool-bar"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 4,
    consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-dark"], [1, "container-fluid"], ["width", "40", "alt", "Angular Logo", "src", "assets/logo.png"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-md-0"], [1, "nav-item"], [1, "ps-1", 3, "routerLink"]],
    template: function ToolBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "ul", 6)(7, "li", 7)(8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7)(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "R\u00E9servations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  text-decoration: none;\n  margin-left: 1.2rem;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #aaaaaa;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9vbC1iYXIvdG9vbC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OztFQUdFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyJcbmEsXG5hOnZpc2l0ZWQsXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDEuMnJlbTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjYWFhYWFhO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 7006:
/*!***************************************************************!*\
  !*** ./src/app/shared/components/tool-bar/tool-bar.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToolBarModule: () => (/* binding */ ToolBarModule)
/* harmony export */ });
/* harmony import */ var _tool_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool-bar.component */ 1023);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class ToolBarModule {
  static #_ = this.ɵfac = function ToolBarModule_Factory(t) {
    return new (t || ToolBarModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ToolBarModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_tool_bar_component__WEBPACK_IMPORTED_MODULE_0__.ToolBarComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ToolBarModule, {
    imports: [_tool_bar_component__WEBPACK_IMPORTED_MODULE_0__.ToolBarComponent],
    exports: [_tool_bar_component__WEBPACK_IMPORTED_MODULE_0__.ToolBarComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_shared_components_layout_layout_module_ts.js.map