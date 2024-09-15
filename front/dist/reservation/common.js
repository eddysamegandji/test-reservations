"use strict";
(self["webpackChunkreservation"] = self["webpackChunkreservation"] || []).push([["common"],{

/***/ 2508:
/*!********************************************************!*\
  !*** ./src/app/shared/services/reservation.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservationService: () => (/* binding */ ReservationService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);



class ReservationService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  createReservation(reservation) {
    console.log("blabla", reservation);
    return this.http.post(`${this.apiUrl}/reservations`, reservation);
  }
  updateReservation(id, reservation) {
    return this.http.put(`${this.apiUrl}/reservations/` + id, reservation);
  }
  getReservationById(id) {
    return this.http.get(`${this.apiUrl}/reservations/` + id);
  }
  getAllReservations() {
    return this.http.get(`${this.apiUrl}/reservations`);
  }
  deleteReservation(id) {
    return this.http.delete(`${this.apiUrl}/reservations/` + id);
  }
  static #_ = this.ɵfac = function ReservationService_Factory(t) {
    return new (t || ReservationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ReservationService,
    factory: ReservationService.ɵfac,
    providedIn: 'root'
  });
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
const environment = {
  production: false,
  apiUrl: 'http://localhost:8080'
};

/***/ })

}]);
//# sourceMappingURL=common.js.map