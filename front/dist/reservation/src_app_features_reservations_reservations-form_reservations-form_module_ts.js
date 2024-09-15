"use strict";
(self["webpackChunkreservation"] = self["webpackChunkreservation"] || []).push([["src_app_features_reservations_reservations-form_reservations-form_module_ts"],{

/***/ 2438:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/reservations/reservations-form/reservations-form-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservationsFormRoutingModule: () => (/* binding */ ReservationsFormRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _reservations_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservations-form.component */ 6000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _reservations_form_component__WEBPACK_IMPORTED_MODULE_0__.ReservationsFormComponent
}];
class ReservationsFormRoutingModule {
  static #_ = this.ɵfac = function ReservationsFormRoutingModule_Factory(t) {
    return new (t || ReservationsFormRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ReservationsFormRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ReservationsFormRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6000:
/*!****************************************************************************************!*\
  !*** ./src/app/features/reservations/reservations-form/reservations-form.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservationsFormComponent: () => (/* binding */ ReservationsFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_services_bus_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/bus.service */ 6092);
/* harmony import */ var src_app_shared_services_reservation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/reservation.service */ 2508);
/* harmony import */ var src_app_shared_components_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/snackbar/snackbar.service */ 9833);











function ReservationsFormComponent_h2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Modification de la r\u00E9servation N\u00B0: ", ctx_r0.reservationId, "");
  }
}
function ReservationsFormComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Cr\u00E9ation d'une nouvelle r\u00E9servation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservationsFormComponent_div_14_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const bus_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", bus_r6.busNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](bus_r6.busNumber);
  }
}
function ReservationsFormComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Bus:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ReservationsFormComponent_div_14_option_6_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 20)(9, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Nbr Places:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 20)(13, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Date de d\u00E9part:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 25)(17, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReservationsFormComponent_div_14_Template_button_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const i_r4 = restoredCtx.index;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.deleteTrajet(i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Supprimer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 2, ctx_r2.buses));
  }
}
class ReservationsFormComponent {
  constructor(fb, busService, reservationService, snackbarService, router, route, cdRef) {
    this.fb = fb;
    this.busService = busService;
    this.reservationService = reservationService;
    this.snackbarService = snackbarService;
    this.router = router;
    this.route = route;
    this.cdRef = cdRef;
    this.editing = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnInit() {
    this.initForm();
    this.getBuses();
    this.route.queryParams.subscribe(params => this.reservationId = params["reservationId"]);
    if (this.reservationId) {
      this.editing = true;
      this.loadReservation();
    }
  }
  getBuses() {
    this.buses = this.busService.getAllBuses();
  }
  loadReservation() {
    this.reservationService.getReservationById(this.reservationId).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: reservation => {
        this.reservationToEdit = reservation;
        this.reservationForm.patchValue(this.reservationToEdit);
        const trajetsArray = this.reservationForm.get("trajets");
        while (trajetsArray.length !== 0) {
          trajetsArray.removeAt(0);
        }
        this.reservationToEdit.trajets?.forEach(trajet => {
          const trajetGroup = this.fb.group({
            id: trajet.id,
            nbrPlaces: trajet.nbrPlaces,
            departureTime: trajet.departureTime,
            bus: this.fb.group({
              id: trajet.bus.id,
              busNumber: trajet.bus.busNumber,
              unitTrajetPrice: trajet.bus.unitTrajetPrice
            })
          });
          trajetsArray.push(trajetGroup);
        });
        trajetsArray.markAsDirty();
        this.cdRef.detectChanges();
      },
      error: error => console.log("Error while getting reservation with id" + this.reservationId, error)
    });
  }
  initForm() {
    this.reservationForm = this.fb.group({
      id: [''],
      reservationDate: [''],
      client: this.fb.group({
        id: [1],
        name: [{
          value: "userTest",
          disabled: true
        }, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        email: [{
          value: "test@gmail.com",
          disabled: true
        }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]]
      }),
      trajets: this.fb.array([])
    });
  }
  get trajets() {
    return this.reservationForm.get("trajets");
  }
  addTrajet() {
    this.trajets.push(this.fb.group({
      nbrPlaces: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      departureTime: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      unitTrajetPrice: [""],
      bus: this.fb.group({
        busNumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
        unitTrajetPrice: [0.0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      })
    }));
  }
  deleteTrajet(index) {
    this.trajets.removeAt(index);
  }
  submit() {
    const reservation = {
      ...this.reservationForm?.value
    };
    console.log("reservation to save:", this.reservationForm.value);
    if (this.reservationForm.value.trajets.length > 0 && this.reservationForm.valid) {
      if (this.editing) {
        this.updateReservation(reservation);
      } else {
        this.createReservation(reservation);
      }
    } else {
      this.snackbarService.showError();
    }
  }
  createReservation(reservation) {
    this.reservationService.createReservation(reservation).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.snackbarService.showSuccess();
        this.router.navigateByUrl("reservations");
      }
    });
  }
  updateReservation(reservation) {
    this.reservationService.updateReservation(this.reservationId, reservation).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.snackbarService.showSuccess();
        this.router.navigateByUrl("reservations");
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  static #_ = this.ɵfac = function ReservationsFormComponent_Factory(t) {
    return new (t || ReservationsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_bus_service__WEBPACK_IMPORTED_MODULE_0__.BusService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_reservation_service__WEBPACK_IMPORTED_MODULE_1__.ReservationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_components_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_2__.SnackbarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ReservationsFormComponent,
    selectors: [["app-reservations-form"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 19,
    vars: 5,
    consts: [[1, "container", "mt-4"], ["class", "mb-5", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["formGroupName", "client", 1, "row"], [1, "form-group", "col-3"], ["for", "client-name"], ["id", "client-name", "formControlName", "name", 1, "form-control"], ["for", "client-email"], ["id", "client-email", "formControlName", "email", "type", "email", 1, "form-control"], ["formArrayName", "trajets"], ["class", "mt-3", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", "mt-3", 3, "click"], ["type", "submit", 1, "btn", "btn-success", "mt-3", 3, "disabled"], [1, "mb-5"], [1, "mt-3"], [1, "row", 3, "formGroupName"], ["formGroupName", "bus", 1, "col"], ["for", "busNumber"], ["id", "busNumber", "formControlName", "busNumber", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col"], ["for", "nbrPlaces"], ["id", "nbrPlaces", "formControlName", "nbrPlaces", 1, "form-control"], ["for", "departureTime"], ["id", "departureTime", "formControlName", "departureTime", "type", "datetime-local", 1, "form-control"], [1, "col", "mt-4"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [3, "value"]],
    template: function ReservationsFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReservationsFormComponent_h2_1_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ReservationsFormComponent_h2_2_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ReservationsFormComponent_Template_form_ngSubmit_3_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4)(10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ReservationsFormComponent_div_14_Template, 19, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReservationsFormComponent_Template_button_click_15_listener() {
          return ctx.addTrajet();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Ajouter un trajet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Sauvegarder sans payer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editing);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.editing);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.reservationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.trajets.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.trajets.controls.length);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName],
    encapsulation: 2,
    changeDetection: 0
  });
}

/***/ }),

/***/ 3167:
/*!*************************************************************************************!*\
  !*** ./src/app/features/reservations/reservations-form/reservations-form.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservationsFormModule: () => (/* binding */ ReservationsFormModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _reservations_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservations-form-routing.module */ 2438);
/* harmony import */ var _reservations_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservations-form.component */ 6000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class ReservationsFormModule {
  static #_ = this.ɵfac = function ReservationsFormModule_Factory(t) {
    return new (t || ReservationsFormModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ReservationsFormModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _reservations_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReservationsFormRoutingModule, _reservations_form_component__WEBPACK_IMPORTED_MODULE_1__.ReservationsFormComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReservationsFormModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _reservations_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReservationsFormRoutingModule, _reservations_form_component__WEBPACK_IMPORTED_MODULE_1__.ReservationsFormComponent],
    exports: [_reservations_form_component__WEBPACK_IMPORTED_MODULE_1__.ReservationsFormComponent]
  });
})();

/***/ }),

/***/ 6092:
/*!************************************************!*\
  !*** ./src/app/shared/services/bus.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusService: () => (/* binding */ BusService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class BusService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getAllBuses() {
    return this.http.get(`${this.apiUrl}/buses`);
  }
  static #_ = this.ɵfac = function BusService_Factory(t) {
    return new (t || BusService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: BusService,
    factory: BusService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_reservations_reservations-form_reservations-form_module_ts.js.map