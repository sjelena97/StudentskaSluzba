(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jelena\Desktop\Faks 3 godina(2 semestar)\eObrazovanje\studentskaSluzbaGit\StudentskaSluzba\projekat-eo-angular\angularApp\src\main.ts */"zUnb");


/***/ }),

/***/ "21z2":
/*!***********************************************************************!*\
  !*** ./src/app/components/sluzba-profile/sluzba-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: SluzbaProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaProfileComponent", function() { return SluzbaProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sluzba_profile_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sluzba-profile-service.service */ "A3rj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/authentication-service.service */ "4+CV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SluzbaProfileComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cardname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.user ? ctx_r0.user.username : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r0.student ? ctx_r0.student.cardName : "");
} }
function SluzbaProfileComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r1.user ? ctx_r1.user.username : "");
} }
function SluzbaProfileComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SluzbaProfileComponent_small_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Balance: 500RSD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SluzbaProfileComponent {
    constructor(profileService, router, authService) {
        this.profileService = profileService;
        this.router = router;
        this.authService = authService;
        this.subscription = profileService.RegenerateData$.subscribe(() => this.getUser());
    }
    ngOnInit() {
        this.getUser();
    }
    getUser() {
        this.profileService.getUser().subscribe(res => this.user = res.body);
        if (this.authService.isStudent()) {
            this.getStudent();
        }
    }
    getStudent() {
        this.profileService.getStudent().
            subscribe(res => this.student = res.body);
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
    isStudent() {
        return this.authService.isStudent();
    }
    isAdmin() {
        return this.authService.isAdmin();
    }
}
SluzbaProfileComponent.ɵfac = function SluzbaProfileComponent_Factory(t) { return new (t || SluzbaProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_profile_service_service__WEBPACK_IMPORTED_MODULE_1__["SluzbaProfileServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaProfileComponent, selectors: [["app-sluzba-profile"]], decls: 41, vars: 9, consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-8"], [1, "card"], [1, "header"], [1, "title"], [1, "content"], ["class", "row", 4, "ngIf"], [1, "col-md-6"], [1, "form-group"], ["type", "text", "placeholder", "First name", 1, "form-control", 3, "value"], ["type", "text", "placeholder", "Last Name", 1, "form-control", 3, "value"], ["type", "submit", "class", "btn btn-info btn-fill pull-right", 4, "ngIf"], [1, "clearfix"], [1, "col-md-4"], [1, "card", "card-user"], [1, "image"], ["src", "https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400", "alt", "..."], [1, "author"], ["href", "#"], ["src", "assets/img/faces/face-6.jpg", "alt", "...", 1, "avatar", "border-gray"], [4, "ngIf"], ["type", "text", "placeholder", "Username", 1, "form-control", 3, "value"], [1, "col-md-3"], ["type", "text", "placeholder", "Cardname", 1, "form-control", 3, "value"], [1, "col-md-5"], ["for", "exampleInputEmail1"], ["type", "email", "placeholder", "Email", 1, "form-control"], ["type", "submit", 1, "btn", "btn-info", "btn-fill", "pull-right"]], template: function SluzbaProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SluzbaProfileComponent_div_10_Template, 16, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SluzbaProfileComponent_div_11_Template, 11, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SluzbaProfileComponent_button_23_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "BR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, SluzbaProfileComponent_small_39_Template, 2, 0, "small", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isStudent());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isStudent());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.user ? ctx.user.firstName : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.user ? ctx.user.lastName : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user ? ctx.user.firstName : "", " ", ctx.user ? ctx.user.lastName : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user ? ctx.user.username : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isStudent());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbHV6YmEtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-profile',
                templateUrl: './sluzba-profile.component.html',
                styleUrls: ['./sluzba-profile.component.css']
            }]
    }], function () { return [{ type: _sluzba_profile_service_service__WEBPACK_IMPORTED_MODULE_1__["SluzbaProfileServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "4+CV":
/*!*****************************************************************!*\
  !*** ./src/app/services/auth/authentication-service.service.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationServiceService", function() { return AuthenticationServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Rx */ "M6kn");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _jwt_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwt-utils.service */ "nvIh");






class AuthenticationServiceService {
    constructor(http, jwtUtilsService) {
        this.http = http;
        this.jwtUtilsService = jwtUtilsService;
        this.loginPath = '/auth/login';
    }
    login(username, password) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.loginPath, JSON.stringify({ username, password }), { headers })
            .map((res) => {
            let token = res && res['token'];
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({
                    username: username,
                    roles: this.jwtUtilsService.getRoles(token),
                    token: token
                }));
                return true;
            }
            else {
                return false;
            }
        })
            .catch((error) => {
            if (error.status === 400) {
                return rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw('Ilegal login');
            }
            else {
                return rxjs_Rx__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error.json().error || 'Server error');
            }
        });
    }
    getToken() {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    }
    logout() {
        localStorage.removeItem('currentUser');
    }
    isLoggedIn() {
        if (this.getToken() != '')
            return true;
        else
            return false;
    }
    getCurrentUser() {
        if (localStorage.currentUser) {
            return JSON.parse(localStorage.currentUser);
        }
        else {
            return undefined;
        }
    }
    isStudent() {
        if (localStorage.currentUser) {
            var user = JSON.parse(localStorage.currentUser);
            if (user.roles[0].some(t => t.authority === "STUDENT"))
                return true;
            else
                return false;
        }
    }
    isTeacher() {
        if (localStorage.currentUser) {
            var user = JSON.parse(localStorage.currentUser);
            if (user.roles[0].some(t => t.authority === "TEACHER"))
                return true;
            else
                return false;
        }
    }
    isAdmin() {
        if (localStorage.currentUser) {
            var user = JSON.parse(localStorage.currentUser);
            if (user.roles[0].some(t => t.authority === "ADMIN"))
                return true;
            else
                return false;
        }
    }
    getCurrentUserUsername() {
        if (localStorage.currentUser) {
            return JSON.parse(localStorage.currentUser.username);
        }
        else {
            return undefined;
        }
    }
}
AuthenticationServiceService.ɵfac = function AuthenticationServiceService_Factory(t) { return new (t || AuthenticationServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_jwt_utils_service__WEBPACK_IMPORTED_MODULE_3__["JwtUtilsService"])); };
AuthenticationServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationServiceService, factory: AuthenticationServiceService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _jwt_utils_service__WEBPACK_IMPORTED_MODULE_3__["JwtUtilsService"] }]; }, null); })();


/***/ }),

/***/ "5nX+":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sluzba-sidebar/sluzba-sidebar-service.service.ts ***!
  \*****************************************************************************/
/*! exports provided: SluzbaSidebarServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaSidebarServiceService", function() { return SluzbaSidebarServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authentication-service.service */ "4+CV");





class SluzbaSidebarServiceService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.usersUrl = 'users';
        this.RegenerateData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    announceChange() {
        this.RegenerateData.next();
    }
    getUser() {
        let username = this.authService.getCurrentUser().username;
        console.log("username: " + username);
        const url = `${this.usersUrl}/getUserByUsername/${username}`;
        return this.http.get(url, { observe: 'response' });
    }
}
SluzbaSidebarServiceService.ɵfac = function SluzbaSidebarServiceService_Factory(t) { return new (t || SluzbaSidebarServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaSidebarServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SluzbaSidebarServiceService, factory: SluzbaSidebarServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaSidebarServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "6Shf":
/*!*********************************************************************************!*\
  !*** ./src/app/components/sluzba-documents/sluzba-documents-service.service.ts ***!
  \*********************************************************************************/
/*! exports provided: SluzbaDocumentsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaDocumentsServiceService", function() { return SluzbaDocumentsServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authentication-service.service */ "4+CV");





class SluzbaDocumentsServiceService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.documentsUrl = 'documents';
        this.RegenerateData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    announceChange() {
        this.RegenerateData.next();
    }
    getDocuments() {
        let username = this.authService.getCurrentUser().username;
        console.log("username: " + username);
        const url = `${this.documentsUrl}/getAllDocumentsForUser/${username}`;
        return this.http.get(url, { observe: 'response' });
    }
    deleteDocument(documentId) {
        const url = `${this.documentsUrl}/deleteDocument/${documentId}`;
        return this.http.put(url, { observe: 'response' });
    }
}
SluzbaDocumentsServiceService.ɵfac = function SluzbaDocumentsServiceService_Factory(t) { return new (t || SluzbaDocumentsServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaDocumentsServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SluzbaDocumentsServiceService, factory: SluzbaDocumentsServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaDocumentsServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "7Cke":
/*!***************************************************************************!*\
  !*** ./src/app/components/sluzba-teachings/sluzba-teachings.component.ts ***!
  \***************************************************************************/
/*! exports provided: SluzbaTeachingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaTeachingsComponent", function() { return SluzbaTeachingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_teacher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/teacher */ "VxJD");
/* harmony import */ var src_app_model_teaching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/teaching */ "N3km");
/* harmony import */ var src_app_model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/user */ "kl1M");
/* harmony import */ var src_app_model_course__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/course */ "8mcZ");
/* harmony import */ var src_app_model_teaching_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/teaching-type */ "iUF6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sluzba_courses_sluzba_courses_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sluzba-courses/sluzba-courses-service.service */ "NJjv");
/* harmony import */ var _sluzba_teachers_sluzba_teachers_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sluzba-teachers/sluzba-teachers-service.service */ "VoEt");
/* harmony import */ var _sluzba_teachings_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sluzba-teachings-service.service */ "Q89E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");













function SluzbaTeachingsComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", t_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", t_r2.user.firstName, " ", t_r2.user.lastName, "");
} }
function SluzbaTeachingsComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tt_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", tt_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tt_r3.name);
} }
class SluzbaTeachingsComponent {
    constructor(route, courseService, teacherService, teachingService, location) {
        this.route = route;
        this.courseService = courseService;
        this.teacherService = teacherService;
        this.teachingService = teachingService;
        this.location = location;
        this.teaching = new src_app_model_teaching__WEBPACK_IMPORTED_MODULE_2__["Teaching"]({
            startDate: null,
            endDate: null,
            teacher: new src_app_model_teacher__WEBPACK_IMPORTED_MODULE_1__["Teacher"]({
                user: new src_app_model_user__WEBPACK_IMPORTED_MODULE_3__["User"]({
                    username: '',
                    firstName: '',
                    lastName: '',
                    password: ''
                })
            }),
            course: new src_app_model_course__WEBPACK_IMPORTED_MODULE_4__["Course"]({
                name: '',
                code: '',
                espb: 0,
                active: true
            }),
            type: new src_app_model_teaching_type__WEBPACK_IMPORTED_MODULE_5__["TeachingType"]({
                name: '',
                code: ''
            })
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => this.courseService.getCourse(params['courseId'])
            .subscribe(res => this.teaching.course = res.body));
        this.teacherService.getTeachers().subscribe(res => this.teachers = res.body);
        this.teachingService.getTeachingTypes().subscribe(res => this.types = res.body);
    }
    add() {
        this.teachingService.addTeaching(this.teaching, this.teaching.course.id)
            .subscribe(teaching => {
            this.teachingService.announceChange();
            this.goBack();
        });
    }
    goBack() {
        this.location.back();
    }
}
SluzbaTeachingsComponent.ɵfac = function SluzbaTeachingsComponent_Factory(t) { return new (t || SluzbaTeachingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_courses_sluzba_courses_service_service__WEBPACK_IMPORTED_MODULE_7__["SluzbaCoursesServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_teachers_sluzba_teachers_service_service__WEBPACK_IMPORTED_MODULE_8__["SluzbaTeachersServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_teachings_service_service__WEBPACK_IMPORTED_MODULE_9__["SluzbaTeachingsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"])); };
SluzbaTeachingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaTeachingsComponent, selectors: [["app-sluzba-teachings"]], decls: 25, vars: 13, consts: [[1, "form-group"], [1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "input-group"], ["type", "date", "placeholder", "yyyy-mm-dd", "id", "field1c", "name", "dp1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", "placeholder", "yyyy-mm-dd", "id", "field2c", "name", "dp2", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "ngValue"]], template: function SluzbaTeachingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaTeachingsComponent_Template_select_ngModelChange_5_listener($event) { return ctx.teaching.teacher = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SluzbaTeachingsComponent_option_6_Template, 2, 3, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Select teaching type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaTeachingsComponent_Template_select_ngModelChange_10_listener($event) { return ctx.teaching.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SluzbaTeachingsComponent_option_11_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaTeachingsComponent_Template_input_ngModelChange_14_listener($event) { return ctx.teaching.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaTeachingsComponent_Template_input_ngModelChange_18_listener($event) { return ctx.teaching.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaTeachingsComponent_Template_button_click_21_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaTeachingsComponent_Template_button_click_23_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Enroll teachers in course ", ctx.teaching.course.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.teaching.teacher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teachers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.teaching.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 7, ctx.teaching.startDate, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 10, ctx.teaching.endDate, "yyyy-MM-dd"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbHV6YmEtdGVhY2hpbmdzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaTeachingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-teachings',
                templateUrl: './sluzba-teachings.component.html',
                styleUrls: ['./sluzba-teachings.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _sluzba_courses_sluzba_courses_service_service__WEBPACK_IMPORTED_MODULE_7__["SluzbaCoursesServiceService"] }, { type: _sluzba_teachers_sluzba_teachers_service_service__WEBPACK_IMPORTED_MODULE_8__["SluzbaTeachersServiceService"] }, { type: _sluzba_teachings_service_service__WEBPACK_IMPORTED_MODULE_9__["SluzbaTeachingsServiceService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] }]; }, null); })();


/***/ }),

/***/ "8mcZ":
/*!*********************************!*\
  !*** ./src/app/model/course.ts ***!
  \*********************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
class Course {
    constructor(courseCfg) {
        this.id = courseCfg.id;
        this.name = courseCfg.name;
        this.code = courseCfg.code;
        this.espb = courseCfg.espb;
        this.active = courseCfg.active;
    }
}


/***/ }),

/***/ "A3rj":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sluzba-profile/sluzba-profile-service.service.ts ***!
  \*****************************************************************************/
/*! exports provided: SluzbaProfileServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaProfileServiceService", function() { return SluzbaProfileServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authentication-service.service */ "4+CV");





class SluzbaProfileServiceService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.usersUrl = 'users';
        this.studentsUrl = 'students';
        this.RegenerateData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    announceChange() {
        this.RegenerateData.next();
    }
    getUser() {
        let username = this.authService.getCurrentUser().username;
        console.log("username: " + username);
        const url = `${this.usersUrl}/getUserByUsername/${username}`;
        return this.http.get(url, { observe: 'response' });
    }
    getStudent() {
        let username = this.authService.getCurrentUser().username;
        console.log("username: " + username);
        const url = `${this.studentsUrl}/getStudentByUsername/${username}`;
        return this.http.get(url, { observe: 'response' });
    }
}
SluzbaProfileServiceService.ɵfac = function SluzbaProfileServiceService_Factory(t) { return new (t || SluzbaProfileServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaProfileServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SluzbaProfileServiceService, factory: SluzbaProfileServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaProfileServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Fr0C":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/sluzba-document-details/sluzba-document-details-service.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: SluzbaDocumentDetailsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaDocumentDetailsServiceService", function() { return SluzbaDocumentDetailsServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authentication-service.service */ "4+CV");





class SluzbaDocumentDetailsServiceService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.documentUrl = 'documents';
        this.documentTypesUrl = 'documentTypes';
        this.RegenerateData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    announceChange() {
        this.RegenerateData.next();
    }
    getDocument(id) {
        const url = `${this.documentUrl}/getDocumentById/${id}`;
        return this.http.get(url, { observe: 'response' });
    }
    getDocumentTypes() {
        const url = `${this.documentTypesUrl}/getAllDocumentTypes`;
        return this.http.get(url, { observe: 'response' });
    }
    addDocument(document) {
        const urlPost = `${this.documentUrl}/addDocument/${document.student.id}`;
        return this.http.post(urlPost, document, { observe: 'response' });
    }
    editDocument(document) {
        const urlPut = `${this.documentUrl}/updateDocument/${document.id}`;
        return this.http.put(urlPut, document, { observe: 'response' });
    }
}
SluzbaDocumentDetailsServiceService.ɵfac = function SluzbaDocumentDetailsServiceService_Factory(t) { return new (t || SluzbaDocumentDetailsServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaDocumentDetailsServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SluzbaDocumentDetailsServiceService, factory: SluzbaDocumentDetailsServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaDocumentDetailsServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "GOJh":
/*!*****************************************************************!*\
  !*** ./src/app/components/sluzba-home/sluzba-home.component.ts ***!
  \*****************************************************************/
/*! exports provided: SluzbaHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaHomeComponent", function() { return SluzbaHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SluzbaHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
SluzbaHomeComponent.ɵfac = function SluzbaHomeComponent_Factory(t) { return new (t || SluzbaHomeComponent)(); };
SluzbaHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaHomeComponent, selectors: [["app-sluzba-home"]], decls: 2, vars: 0, template: function SluzbaHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbHV6YmEtaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-home',
                templateUrl: './sluzba-home.component.html',
                styleUrls: ['./sluzba-home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GoRH":
/*!*******************************************************************************!*\
  !*** ./src/app/components/sluzba-students/sluzba-students-service.service.ts ***!
  \*******************************************************************************/
/*! exports provided: SluzbaStudentsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaStudentsServiceService", function() { return SluzbaStudentsServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authentication-service.service */ "4+CV");





class SluzbaStudentsServiceService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.studentsUrl = 'students';
        this.documentsUrl = 'documents';
        this.paymentsUrl = 'payments';
        this.RegenerateData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    announceChange() {
        this.RegenerateData.next();
    }
    getStudents() {
        const url = `${this.studentsUrl}/getAllStudents`;
        return this.http.get(url, { observe: 'response' });
    }
    getStudent(id) {
        const url = `${this.studentsUrl}/getStudentById/${id}`;
        return this.http.get(url, { observe: 'response' });
    }
    addStudent(student) {
        const urlPost = `${this.studentsUrl}/addStudent`;
        return this.http.post(urlPost, student, { observe: 'response' });
    }
    editStudent(student) {
        const urlPut = `${this.studentsUrl}/updateStudent/${student.id}`;
        return this.http.put(urlPut, student, { observe: 'response' });
    }
    deleteStudent(studentId) {
        const url = `${this.studentsUrl}/deleteStudent/${studentId}`;
        return this.http.put(url, { observe: 'response' });
    }
    getStudentDocuments(studentId) {
        const url = `${this.documentsUrl}/getAllDocumentsForStudent/${studentId}`;
        return this.http.get(url, { observe: 'response' });
    }
    getAccountPayments(accountId) {
        const url = `${this.paymentsUrl}/getAllPaymentsForAccount/${accountId}`;
        return this.http.get(url, { observe: 'response' });
    }
}
SluzbaStudentsServiceService.ɵfac = function SluzbaStudentsServiceService_Factory(t) { return new (t || SluzbaStudentsServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaStudentsServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SluzbaStudentsServiceService, factory: SluzbaStudentsServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaStudentsServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "HcuR":
/*!*************************************************************************************!*\
  !*** ./src/app/components/sluzba-enrollments/sluzba-enrollments-service.service.ts ***!
  \*************************************************************************************/
/*! exports provided: SluzbaEnrollmentsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaEnrollmentsServiceService", function() { return SluzbaEnrollmentsServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class SluzbaEnrollmentsServiceService {
    constructor(http) {
        this.http = http;
        this.enrollmentsUrl = 'enrollments';
        this.RegenerateData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    announceChange() {
        this.RegenerateData.next();
    }
    addEnrollment(enrollment, courseId) {
        const urlPost = `${this.enrollmentsUrl}/addEnrollment/${courseId}`;
        return this.http.post(urlPost, enrollment, { observe: 'response' });
    }
    deleteEnrollment(enrollmentId) {
        const url = `${this.enrollmentsUrl}/deleteEnrollment/${enrollmentId}`;
        return this.http.put(url, { observe: 'response' });
    }
}
SluzbaEnrollmentsServiceService.ɵfac = function SluzbaEnrollmentsServiceService_Factory(t) { return new (t || SluzbaEnrollmentsServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SluzbaEnrollmentsServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SluzbaEnrollmentsServiceService, factory: SluzbaEnrollmentsServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaEnrollmentsServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "HtOt":
/*!************************************************************!*\
  !*** ./src/app/services/auth/token-interceptor.service.ts ***!
  \************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication-service.service */ "4+CV");



class TokenInterceptorService {
    constructor(inj) {
        this.inj = inj;
    }
    intercept(request, next) {
        let authenticationService = this.inj.get(_authentication_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationServiceService"]);
        request = request.clone({
            setHeaders: {
                'Authorization': `${authenticationService.getToken()}`
            }
        });
        return next.handle(request);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "Lcct":
/*!*******************************************************************!*\
  !*** ./src/app/components/sluzba-login/sluzba-login.component.ts ***!
  \*******************************************************************/
/*! exports provided: SluzbaLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaLoginComponent", function() { return SluzbaLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/authentication-service.service */ "4+CV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SluzbaLoginComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Wrong username or password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SluzbaLoginComponent {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.user = {};
        this.wrongUsernameOrPass = false;
    }
    ngOnInit() {
    }
    login() {
        this.authenticationService.login(this.user.username, this.user.password).subscribe((loggedIn) => {
            if (loggedIn) {
                this.router.navigate(['/dashboard']);
            }
        }, (err) => {
            if (err.toString() === 'Ilegal login') {
                this.wrongUsernameOrPass = true;
                console.log(err);
            }
            else {
                rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(err);
            }
        });
    }
}
SluzbaLoginComponent.ɵfac = function SluzbaLoginComponent_Factory(t) { return new (t || SluzbaLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SluzbaLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaLoginComponent, selectors: [["app-sluzba-login"]], decls: 23, vars: 3, consts: [[1, "container"], [1, "row"], [1, "col-md-3"], [1, "col-md-6"], [1, "text-center"], [3, "ngSubmit"], [1, "input-group"], ["type", "text", "name", "username", "placeholder", "Username", "required", "", "autofocus", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-addon"], [1, "glyphicon", "glyphicon-user"], ["type", "password", "name", "password", "placeholder", "Password", "placeholder", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "glyphicon", "glyphicon-lock"], ["href", "#"], [1, "btn", "btn-default"], ["class", "alert alert-warning box-msg", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-warning", "box-msg"]], template: function SluzbaLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SluzbaLoginComponent_Template_form_ngSubmit_6_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaLoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaLoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Are you forgot your password? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Click here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SluzbaLoginComponent_div_21_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wrongUsernameOrPass);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["/*   #loginContainer {\r\n    margin: auto;\r\n    max-width: 40%;\r\n    background-color: #FAFAFA;\r\n    margin-top: 10%;\r\n    padding-top: 3vw;\r\n    padding-bottom: 3vw;\r\n    max-height: 200vw;\r\n    border-radius: .625rem;\r\n    border:1px solid #ced4da;\r\n} */\r\n\r\n\r\n\r\n/* #forgot{\r\n    padding-left: 0 !important;\r\n    padding-right: 0 !important;\r\n    text-align: right;\r\n} */\r\n\r\n\r\n\r\n/*  .login {\r\n    background-image: url(\"../../../assets/img/website-design-background-1.jpg\"), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 100%;\r\n    width: 100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    display: flex;\r\n    }\r\n    .account-login {\r\n    width: 500px;\r\n    }\r\n    .form-control:focus {\r\n    box-shadow: none;\r\n    }\r\n    p a {\r\n    padding-left: 2px;\r\n    }\r\n    .account-login h1 {\r\n    font-size: 25px;\r\n    text-align: left;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n    border-radius: 5px;\r\n    }\r\n    .login-form input {\r\n    width: 100%;\r\n    position: relative;\r\n    padding: 3px;\r\n    box-shadow: none;\r\n    height: 63px;\r\n    border-radius: 0px;\r\n    }\r\n    .login-form {\r\n    background: #fff;\r\n    float: left;\r\n    width: 100%;\r\n    padding: 40px;\r\n    border-radius: 5px;\r\n   \r\n    }\r\n  \r\n  \r\n    p {\r\n    float: left;\r\n    width: 100%;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    } */\r\n\r\n\r\n\r\n/*   .remember {\r\n    float: left;\r\n    width: 100%;\r\n    margin: 10px 0 0;\r\n    }\r\n    .custom-checkbox {\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 27px;\r\n    margin-bottom: 12px;\r\n    cursor: pointer;\r\n    font-size: 13px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    font-weight: normal;\r\n    padding-top: 2px;\r\n    float: left;\r\n    }\r\n    .custom-checkbox input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n    }\r\n    .custom-checkbox .checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 20px;\r\n    width: 20px;\r\n    background-color: #bfbcbc;\r\n    }\r\n    .custom-checkbox:hover input ~ .checkmark {\r\n    background-color: #747474;\r\n    }\r\n  \r\n    .checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n    }\r\n    .custom-checkbox input:checked ~ .checkmark:after {\r\n    display: block;\r\n    }\r\n    .custom-checkbox .checkmark:after {\r\n    left: 9px;\r\n    top: 5px;\r\n    width: 5px;\r\n    height: 10px;\r\n    border: solid white;\r\n    border-width: 0 3px 3px 0;\r\n    -webkit-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n    }\r\n    @media (max-width: 767px){\r\n    .account-login {\r\n        width: 90%;\r\n      }\r\n    } */\r\n\r\n\r\n\r\n* {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n\r\n\r\n.main-panel {\r\n    width: 100% !important;\r\n}\r\n\r\n\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n.btn {\r\n    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);\r\n    padding: .84rem 2.14rem;\r\n    font-size: 1rem;\r\n    transition: .2s ease-in-out;\r\n    margin: .375rem;\r\n    border: 0;\r\n    border-radius: .125rem;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n    white-space: normal;\r\n    word-wrap: break-word;\r\n    color: inherit;\r\n}\r\n\r\n\r\n\r\n.btn-default {\r\n    background-color: #1DC7EA !important;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.row {\r\n    padding-left: 0 !important;\r\n    padding-right: 0 !important;\r\n    margin: auto;\r\n    margin-top: 7%;\r\n    max-width: 80%;\r\n}\r\n\r\n\r\n\r\nbutton.btn {\r\n    width: 100%;\r\n    font-size: 20px;\r\n    padding: 11px;\r\n    color: #fff;\r\n    border: 0px;\r\n    cursor: pointer;\r\n    margin: 10px 0px 20px;\r\n}\r\n\r\n\r\n\r\nbody {\r\n    background-image: url('website-design-background-1.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n\r\n\r\nh1 {\r\n    color: white;\r\n    margin-top: 30px;\r\n}\r\n\r\n\r\n\r\n.input-group {\r\n    margin-top: 20px;\r\n    \r\n}\r\n\r\n\r\n\r\n.form-control:focus {\r\n    background: transparent !important;\r\n    color: white;\r\n    border: 2px solid gray;\r\n\r\n}\r\n\r\n\r\n\r\n.input-group-addon {\r\n    background: transparent;\r\n    border-bottom: 0;\r\n    border: 0;\r\n    border-bottom: 2px solid gray;\r\n    font-size: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n\r\n.form-control {\r\n    background: transparent;\r\n    border-radius: 0;\r\n    border: 0;\r\n    border-bottom: 2px solid gray;\r\n    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);\r\n    height: 48px;\r\n    padding: 20px;\r\n    font-size: 20px;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\np {\r\n    font-size: 19px;\r\n    margin-top: 20px;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.col-md-6 {\r\n    background: rgba(0, 0, 0, 0.4);\r\n    height: 400px;\r\n    box-shadow: 1px 4px 40px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsdXpiYS1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUc7Ozs7QUFJSDs7OztHQUlHOzs7O0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW1ETzs7OztBQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQThETzs7OztBQUdQO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7Ozs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7OztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOzs7O0FBRUE7SUFDSSx1RUFBdUU7SUFDdkUsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7Ozs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCOzs7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7OztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOzs7O0FBRUE7SUFDSSx3REFBNEU7SUFDNUUsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7Ozs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7Ozs7QUFHQTtJQUNJLGdCQUFnQjs7QUFFcEI7Ozs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osc0JBQXNCOztBQUUxQjs7OztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixhQUFhO0FBQ2pCOzs7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsdUVBQXVFO0lBQ3ZFLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7QUFDaEI7Ozs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7OztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic2x1emJhLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAgICNsb2dpbkNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogM3Z3O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDN2dztcclxuICAgIG1heC1oZWlnaHQ6IDIwMHZ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjYyNXJlbTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NlZDRkYTtcclxufSAqL1xyXG5cclxuXHJcblxyXG4vKiAjZm9yZ290e1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufSAqL1xyXG5cclxuLyogIC5sb2dpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3dlYnNpdGUtZGVzaWduLWJhY2tncm91bmQtMS5qcGdcIiksIGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNSkscmdiYSgwLDAsMCwwLjUpKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLmFjY291bnQtbG9naW4ge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG4gICAgcCBhIHtcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG4gICAgfVxyXG4gICAgLmFjY291bnQtbG9naW4gaDEge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLWZvcm0gaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgaGVpZ2h0OiA2M3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICBcclxuICAgIH1cclxuICBcclxuICBcclxuICAgIHAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH0gKi9cclxuXHJcbi8qICAgLnJlbWVtYmVyIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwO1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbS1jaGVja2JveCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5jdXN0b20tY2hlY2tib3ggaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG4gICAgLmN1c3RvbS1jaGVja2JveCAuY2hlY2ttYXJrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmJjYmM7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWNoZWNrYm94OmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ3NDc0O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jdXN0b20tY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWNoZWNrYm94IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgbGVmdDogOXB4O1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpe1xyXG4gICAgLmFjY291bnQtbG9naW4ge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIH1cclxuICAgIH0gKi9cclxuXHJcbiAgICBcclxuKiB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLm1haW4tcGFuZWwge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2IoMCAwIDAgLyAxNiUpLCAwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuICAgIHBhZGRpbmc6IC44NHJlbSAyLjE0cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgbWFyZ2luOiAuMzc1cmVtO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjEyNXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5idG4tZGVmYXVsdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMURDN0VBICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG59XHJcblxyXG5idXR0b24uYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTFweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDIwcHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy93ZWJzaXRlLWRlc2lnbi1iYWNrZ3JvdW5kLTEuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcblxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIFxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG5cclxufVxyXG5cclxuXHJcbi5pbnB1dC1ncm91cC1hZGRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JheTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2IoMCAwIDAgLyAxNiUpLCAwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMTIlKTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNvbC1tZC02IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggNHB4IDQwcHggYmxhY2s7XHJcbn0iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-login',
                templateUrl: './sluzba-login.component.html',
                styleUrls: ['./sluzba-login.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "N3km":
/*!***********************************!*\
  !*** ./src/app/model/teaching.ts ***!
  \***********************************/
/*! exports provided: Teaching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teaching", function() { return Teaching; });
class Teaching {
    constructor(teachingCfg) {
        this.id = teachingCfg.id;
        this.startDate = teachingCfg.startDate;
        this.endDate = teachingCfg.endDate;
        this.teacher = teachingCfg.teacher;
        this.course = teachingCfg.course;
        this.type = teachingCfg.type;
    }
}


/***/ }),

/***/ "NJjv":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sluzba-courses/sluzba-courses-service.service.ts ***!
  \*****************************************************************************/
/*! exports provided: SluzbaCoursesServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaCoursesServiceService", function() { return SluzbaCoursesServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authentication-service.service */ "4+CV");





class SluzbaCoursesServiceService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.coursesUrl = 'courses';
        this.enrollmentsUrl = 'enrollments';
        this.teachingsUrl = 'teachings';
        this.RegenerateData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    announceChange() {
        this.RegenerateData.next();
    }
    getCourses() {
        let username = this.authService.getCurrentUser().username;
        console.log("username: " + username);
        const url = `${this.coursesUrl}/getAllCoursesForUser/${username}`;
        return this.http.get(url, { observe: 'response' });
    }
    getCourse(id) {
        const url = `${this.coursesUrl}/getCourseById/${id}`;
        return this.http.get(url, { observe: 'response' });
    }
    addCourse(course) {
        const urlPost = `${this.coursesUrl}/addCourse`;
        return this.http.post(urlPost, course, { observe: 'response' });
    }
    editCourse(course) {
        const urlPut = `${this.coursesUrl}/updateCourse/${course.id}`;
        return this.http.put(urlPut, course, { observe: 'response' });
    }
    deleteCourse(courseId) {
        const url = `${this.coursesUrl}/deleteCourse/${courseId}`;
        return this.http.put(url, { observe: 'response' });
    }
    getCourseEnrollments(courseId) {
        const url = `${this.enrollmentsUrl}/getAllEnrollmentsForCourse/${courseId}`;
        return this.http.get(url, { observe: 'response' });
    }
    getCourseTeachings(courseId) {
        const url = `${this.teachingsUrl}/getAllTeachingsForCourse/${courseId}`;
        return this.http.get(url, { observe: 'response' });
    }
}
SluzbaCoursesServiceService.ɵfac = function SluzbaCoursesServiceService_Factory(t) { return new (t || SluzbaCoursesServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaCoursesServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SluzbaCoursesServiceService, factory: SluzbaCoursesServiceService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaCoursesServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "Q89E":
/*!*********************************************************************************!*\
  !*** ./src/app/components/sluzba-teachings/sluzba-teachings-service.service.ts ***!
  \*********************************************************************************/
/*! exports provided: SluzbaTeachingsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaTeachingsServiceService", function() { return SluzbaTeachingsServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class SluzbaTeachingsServiceService {
    constructor(http) {
        this.http = http;
        this.teachingsUrl = 'teachings';
        this.teachingTypesUrl = 'teachingTypes';
        this.RegenerateData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    announceChange() {
        this.RegenerateData.next();
    }
    addTeaching(teaching, courseId) {
        const urlPost = `${this.teachingsUrl}/addTeaching/${courseId}`;
        return this.http.post(urlPost, teaching, { observe: 'response' });
    }
    deleteTeaching(teachingId) {
        const url = `${this.teachingsUrl}/deleteTeaching/${teachingId}`;
        return this.http.put(url, { observe: 'response' });
    }
    getTeachingTypes() {
        const url = `${this.teachingTypesUrl}/getAllTeachingTypes`;
        return this.http.get(url, { observe: 'response' });
    }
}
SluzbaTeachingsServiceService.ɵfac = function SluzbaTeachingsServiceService_Factory(t) { return new (t || SluzbaTeachingsServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SluzbaTeachingsServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SluzbaTeachingsServiceService, factory: SluzbaTeachingsServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaTeachingsServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Qvag":
/*!***************************************************************************!*\
  !*** ./src/app/components/sluzba-navbar/sluzba-navbar-service.service.ts ***!
  \***************************************************************************/
/*! exports provided: SluzbaNavbarServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaNavbarServiceService", function() { return SluzbaNavbarServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authentication-service.service */ "4+CV");





class SluzbaNavbarServiceService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.usersUrl = 'users';
        this.RegenerateData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    announceChange() {
        this.RegenerateData.next();
    }
    getUser() {
        let username = this.authService.getCurrentUser().username;
        console.log("username: " + username);
        const url = `${this.usersUrl}/getUserByUsername/${username}`;
        return this.http.get(url, { observe: 'response' });
    }
}
SluzbaNavbarServiceService.ɵfac = function SluzbaNavbarServiceService_Factory(t) { return new (t || SluzbaNavbarServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaNavbarServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SluzbaNavbarServiceService, factory: SluzbaNavbarServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaNavbarServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "RtIt":
/*!*************************************************************************************!*\
  !*** ./src/app/components/sluzba-course-details/sluzba-course-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SluzbaCourseDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaCourseDetailsComponent", function() { return SluzbaCourseDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_model_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/course */ "8mcZ");
/* harmony import */ var _sluzba_courses_sluzba_courses_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sluzba-courses/sluzba-courses-service.service */ "NJjv");
/* harmony import */ var _sluzba_enrollments_sluzba_enrollments_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sluzba-enrollments/sluzba-enrollments-service.service */ "HcuR");
/* harmony import */ var _sluzba_teachings_sluzba_teachings_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sluzba-teachings/sluzba-teachings-service.service */ "Q89E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth/authentication-service.service */ "4+CV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











function SluzbaCourseDetailsComponent_div_18_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaCourseDetailsComponent_div_18_tr_11_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const teaching_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.deleteTeaching(teaching_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const teaching_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"](" ", teaching_r4.type.name, " ", teaching_r4.teacher.user.firstName, " ", teaching_r4.teacher.user.lastName, " [Since ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, teaching_r4.startDate, "dd.MM.yyyy"), " until ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 8, teaching_r4.endDate, "dd.MM.yyyy"), "] ");
} }
function SluzbaCourseDetailsComponent_div_18_tr_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaCourseDetailsComponent_div_18_tr_21_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const enrollment_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.deleteEnrollment(enrollment_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const enrollment_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"](" ", enrollment_r7.student.user.firstName, " ", enrollment_r7.student.user.lastName, " ", enrollment_r7.student.cardName, " [Since ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, enrollment_r7.startDate, "dd.MM.yyyy"), " until ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 8, enrollment_r7.endDate, "dd.MM.yyyy"), "] ");
} }
function SluzbaCourseDetailsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Teachers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaCourseDetailsComponent_div_18_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.gotoAddTeaching(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SluzbaCourseDetailsComponent_div_18_tr_11_Template, 8, 11, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Students");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaCourseDetailsComponent_div_18_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.gotoAddEnrollment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SluzbaCourseDetailsComponent_div_18_tr_21_Template, 8, 11, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.teachings);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.enrollments);
} }
function SluzbaCourseDetailsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaCourseDetailsComponent_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaCourseDetailsComponent_div_19_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SluzbaCourseDetailsComponent {
    constructor(courseService, enrollmentService, teachingService, route, location, router, authService) {
        this.courseService = courseService;
        this.enrollmentService = enrollmentService;
        this.teachingService = teachingService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.authService = authService;
        this.course = new src_app_model_course__WEBPACK_IMPORTED_MODULE_2__["Course"]({
            name: '',
            code: '',
            espb: 0,
            active: true
        });
        this.mode = 'ADD';
        enrollmentService.RegenerateData$.subscribe(() => this.getEnrollments());
        teachingService.RegenerateData$.subscribe(() => this.getTeachings());
    }
    ngOnInit() {
        if (this.route.snapshot.params['id']) {
            this.mode = 'EDIT';
            // fetch course if we edit the existing course
            this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => this.courseService.getCourse(+params['id'])))
                .subscribe(res => {
                this.course = res.body;
                this.getEnrollments();
                this.getTeachings();
            });
        }
    }
    getEnrollments() {
        this.courseService.getCourseEnrollments(this.course.id).subscribe(res => this.enrollments = res.body);
    }
    getTeachings() {
        this.courseService.getCourseTeachings(this.course.id).subscribe(res => this.teachings = res.body);
    }
    save() {
        this.mode == 'ADD' ? this.add() : this.edit();
    }
    add() {
        this.courseService.addCourse(this.course)
            .subscribe(res => {
            this.courseService.announceChange();
            this.goBack();
        });
    }
    edit() {
        this.courseService.editCourse(this.course)
            .subscribe(course => {
            this.courseService.announceChange();
            this.goBack();
        });
    }
    goBack() {
        this.location.back();
    }
    isAdmin() {
        return this.authService.isAdmin();
    }
    gotoAddEnrollment() {
        this.router.navigate(['/addEnrollment'], { queryParams: { courseId: this.course.id } });
    }
    deleteEnrollment(enrollmentId) {
        this.enrollmentService.deleteEnrollment(enrollmentId).subscribe(() => this.getEnrollments());
    }
    gotoAddTeaching() {
        this.router.navigate(['/addTeaching'], { queryParams: { courseId: this.course.id } });
    }
    deleteTeaching(teachingId) {
        this.teachingService.deleteTeaching(teachingId).subscribe(() => this.getTeachings());
    }
}
SluzbaCourseDetailsComponent.ɵfac = function SluzbaCourseDetailsComponent_Factory(t) { return new (t || SluzbaCourseDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_courses_sluzba_courses_service_service__WEBPACK_IMPORTED_MODULE_3__["SluzbaCoursesServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_enrollments_sluzba_enrollments_service_service__WEBPACK_IMPORTED_MODULE_4__["SluzbaEnrollmentsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_teachings_sluzba_teachings_service_service__WEBPACK_IMPORTED_MODULE_5__["SluzbaTeachingsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationServiceService"])); };
SluzbaCourseDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaCourseDetailsComponent, selectors: [["app-sluzba-course-details"]], decls: 20, vars: 5, consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card", 2, "padding-left", "10px"], [1, "form-group"], ["for", "field1c", 1, "form-control-label"], ["type", "text", "placeholder", "Name", "id", "field1c", "name", "field1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "field3c", 1, "form-control-label"], ["type", "text", "placeholder", "Code", "id", "field3c", "name", "field3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "field2c", 1, "form-control-label"], ["type", "number", "placeholder", "ESPB", "id", "field2c", "name", "field2", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["type", "button", "aria-label", "Add", 1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "content", "table-responsive", "table-full-width", 2, "padding-top", "2%"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Delete", 1, "btn", "btn-danger", "right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function SluzbaCourseDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaCourseDetailsComponent_Template_input_ngModelChange_11_listener($event) { return ctx.course.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaCourseDetailsComponent_Template_input_ngModelChange_14_listener($event) { return ctx.course.code = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ESPB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaCourseDetailsComponent_Template_input_ngModelChange_17_listener($event) { return ctx.course.espb = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SluzbaCourseDetailsComponent_div_18_Template, 22, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SluzbaCourseDetailsComponent_div_19_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.course.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.course.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.course.espb);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbHV6YmEtY291cnNlLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaCourseDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-course-details',
                templateUrl: './sluzba-course-details.component.html',
                styleUrls: ['./sluzba-course-details.component.css']
            }]
    }], function () { return [{ type: _sluzba_courses_sluzba_courses_service_service__WEBPACK_IMPORTED_MODULE_3__["SluzbaCoursesServiceService"] }, { type: _sluzba_enrollments_sluzba_enrollments_service_service__WEBPACK_IMPORTED_MODULE_4__["SluzbaEnrollmentsServiceService"] }, { type: _sluzba_teachings_sluzba_teachings_service_service__WEBPACK_IMPORTED_MODULE_5__["SluzbaTeachingsServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth/authentication-service.service */ "4+CV");
/* harmony import */ var _components_sluzba_navbar_sluzba_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sluzba-navbar/sluzba-navbar.component */ "aTuV");
/* harmony import */ var _components_sluzba_sidebar_sluzba_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sluzba-sidebar/sluzba-sidebar.component */ "xSP5");










function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sluzba-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(location, authService, router) {
        this.location = location;
        this.authService = authService;
        this.router = router;
        this.title = 'angularApp';
        this.yScrollStack = [];
    }
    ngOnInit() {
        console.log(this.router);
        const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        const elemMainPanel = document.querySelector('.main-panel');
        const elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe((ev) => {
            this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (event.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]).subscribe((event) => {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            let ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"](elemSidebar);
        }
    }
    ngAfterViewInit() {
        this.runOnRouteChange();
    }
    runOnRouteChange() {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemMainPanel = document.querySelector('.main-panel');
            const ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["default"](elemMainPanel);
            ps.update();
        }
    }
    isMac() {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 1, consts: [[1, "container"], [1, "wrapper"], ["class", "sidebar", "data-color", "azzure", "data-image", "", 4, "ngIf"], [1, "main-panel"], ["data-color", "azzure", "data-image", "", 1, "sidebar"], [1, "sidebar-background", 2, "background-image", "url(assets/img/sidebar-4.jpg)"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "navbar-cmp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_sluzba_navbar_sluzba_navbar_component__WEBPACK_IMPORTED_MODULE_6__["SluzbaNavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_sluzba_sidebar_sluzba_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SluzbaSidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }, { type: _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "T8hV":
/*!*************************************!*\
  !*** ./src/app/model/enrollment.ts ***!
  \*************************************/
/*! exports provided: Enrollment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enrollment", function() { return Enrollment; });
class Enrollment {
    constructor(enrollmentCfg) {
        this.id = enrollmentCfg.id;
        this.startDate = enrollmentCfg.startDate;
        this.endDate = enrollmentCfg.endDate;
        this.student = enrollmentCfg.student;
        this.course = enrollmentCfg.course;
    }
}


/***/ }),

/***/ "UfuC":
/*!**********************************!*\
  !*** ./src/app/model/payment.ts ***!
  \**********************************/
/*! exports provided: Payment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return Payment; });
class Payment {
    constructor(paymentCfg) {
        this.id = paymentCfg.id;
        this.date = paymentCfg.date;
        this.amount = paymentCfg.amount;
        this.purpose = paymentCfg.purpose;
        this.account = paymentCfg.account;
    }
}


/***/ }),

/***/ "Ui42":
/*!***********************************!*\
  !*** ./src/app/model/document.ts ***!
  \***********************************/
/*! exports provided: Document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
class Document {
    constructor(documentCfg) {
        this.id = documentCfg.id;
        this.title = documentCfg.title;
        this.url = documentCfg.url;
        this.type = documentCfg.type;
        this.student = documentCfg.student;
    }
}


/***/ }),

/***/ "VoEt":
/*!*******************************************************************************!*\
  !*** ./src/app/components/sluzba-teachers/sluzba-teachers-service.service.ts ***!
  \*******************************************************************************/
/*! exports provided: SluzbaTeachersServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaTeachersServiceService", function() { return SluzbaTeachersServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authentication-service.service */ "4+CV");





class SluzbaTeachersServiceService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.teachersUrl = 'teachers';
        this.RegenerateData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    announceChange() {
        this.RegenerateData.next();
    }
    getTeachers() {
        const url = `${this.teachersUrl}/getAllTeachers`;
        return this.http.get(url, { observe: 'response' });
    }
}
SluzbaTeachersServiceService.ɵfac = function SluzbaTeachersServiceService_Factory(t) { return new (t || SluzbaTeachersServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaTeachersServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SluzbaTeachersServiceService, factory: SluzbaTeachersServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaTeachersServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "VxJD":
/*!**********************************!*\
  !*** ./src/app/model/teacher.ts ***!
  \**********************************/
/*! exports provided: Teacher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teacher", function() { return Teacher; });
class Teacher {
    constructor(teacherCfg) {
        this.id = teacherCfg.id;
        this.user = teacherCfg.user;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_sluzba_profile_sluzba_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sluzba-profile/sluzba-profile.component */ "21z2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_sluzba_login_sluzba_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sluzba-login/sluzba-login.component */ "Lcct");
/* harmony import */ var _components_sluzba_not_found_page_sluzba_not_found_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sluzba-not-found-page/sluzba-not-found-page.component */ "mbES");
/* harmony import */ var _components_sluzba_courses_sluzba_courses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sluzba-courses/sluzba-courses.component */ "vefw");
/* harmony import */ var _components_sluzba_courses_sluzba_courses_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sluzba-courses/sluzba-courses-service.service */ "NJjv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_jwt_utils_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth/jwt-utils.service */ "nvIh");
/* harmony import */ var _services_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth/token-interceptor.service */ "HtOt");
/* harmony import */ var _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth/authentication-service.service */ "4+CV");
/* harmony import */ var _services_auth_can_activate_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth/can-activate-auth.guard.service */ "zMJ9");
/* harmony import */ var _components_sluzba_payments_sluzba_payments_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sluzba-payments/sluzba-payments.component */ "dK1G");
/* harmony import */ var _components_sluzba_documents_sluzba_documents_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sluzba-documents/sluzba-documents.component */ "ddin");
/* harmony import */ var _components_sluzba_students_sluzba_students_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/sluzba-students/sluzba-students.component */ "maBI");
/* harmony import */ var _components_sluzba_teachers_sluzba_teachers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/sluzba-teachers/sluzba-teachers.component */ "qUVL");
/* harmony import */ var _components_sluzba_course_details_sluzba_course_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/sluzba-course-details/sluzba-course-details.component */ "RtIt");
/* harmony import */ var _components_sluzba_enrollments_sluzba_enrollments_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/sluzba-enrollments/sluzba-enrollments.component */ "kL20");
/* harmony import */ var _components_sluzba_home_sluzba_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/sluzba-home/sluzba-home.component */ "GOJh");
/* harmony import */ var _components_sluzba_navbar_sluzba_navbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/sluzba-navbar/sluzba-navbar.component */ "aTuV");
/* harmony import */ var _components_sluzba_sidebar_sluzba_sidebar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/sluzba-sidebar/sluzba-sidebar.component */ "xSP5");
/* harmony import */ var _components_sluzba_teachings_sluzba_teachings_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/sluzba-teachings/sluzba-teachings.component */ "7Cke");
/* harmony import */ var _components_sluzba_student_details_sluzba_student_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/sluzba-student-details/sluzba-student-details.component */ "sjrJ");
/* harmony import */ var _components_sluzba_document_details_sluzba_document_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/sluzba-document-details/sluzba-document-details.component */ "maiF");
/* harmony import */ var _components_sluzba_payment_details_sluzba_payment_details_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/sluzba-payment-details/sluzba-payment-details.component */ "c704");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _components_sluzba_courses_sluzba_courses_service_service__WEBPACK_IMPORTED_MODULE_10__["SluzbaCoursesServiceService"],
        _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationServiceService"],
        _services_auth_can_activate_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["CanActivateAuthGuardService"],
        _services_auth_jwt_utils_service__WEBPACK_IMPORTED_MODULE_13__["JwtUtilsService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptorService"],
            multi: true
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_sluzba_profile_sluzba_profile_component__WEBPACK_IMPORTED_MODULE_4__["SluzbaProfileComponent"],
        _components_sluzba_login_sluzba_login_component__WEBPACK_IMPORTED_MODULE_7__["SluzbaLoginComponent"],
        _components_sluzba_not_found_page_sluzba_not_found_page_component__WEBPACK_IMPORTED_MODULE_8__["SluzbaNotFoundPageComponent"],
        _components_sluzba_courses_sluzba_courses_component__WEBPACK_IMPORTED_MODULE_9__["SluzbaCoursesComponent"],
        _components_sluzba_payments_sluzba_payments_component__WEBPACK_IMPORTED_MODULE_17__["SluzbaPaymentsComponent"],
        _components_sluzba_documents_sluzba_documents_component__WEBPACK_IMPORTED_MODULE_18__["SluzbaDocumentsComponent"],
        _components_sluzba_students_sluzba_students_component__WEBPACK_IMPORTED_MODULE_19__["SluzbaStudentsComponent"],
        _components_sluzba_teachers_sluzba_teachers_component__WEBPACK_IMPORTED_MODULE_20__["SluzbaTeachersComponent"],
        _components_sluzba_course_details_sluzba_course_details_component__WEBPACK_IMPORTED_MODULE_21__["SluzbaCourseDetailsComponent"],
        _components_sluzba_enrollments_sluzba_enrollments_component__WEBPACK_IMPORTED_MODULE_22__["SluzbaEnrollmentsComponent"],
        _components_sluzba_home_sluzba_home_component__WEBPACK_IMPORTED_MODULE_23__["SluzbaHomeComponent"],
        _components_sluzba_navbar_sluzba_navbar_component__WEBPACK_IMPORTED_MODULE_24__["SluzbaNavbarComponent"],
        _components_sluzba_sidebar_sluzba_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["SluzbaSidebarComponent"],
        _components_sluzba_teachings_sluzba_teachings_component__WEBPACK_IMPORTED_MODULE_26__["SluzbaTeachingsComponent"],
        _components_sluzba_student_details_sluzba_student_details_component__WEBPACK_IMPORTED_MODULE_27__["SluzbaStudentDetailsComponent"],
        _components_sluzba_document_details_sluzba_document_details_component__WEBPACK_IMPORTED_MODULE_28__["SluzbaDocumentDetailsComponent"],
        _components_sluzba_payment_details_sluzba_payment_details_component__WEBPACK_IMPORTED_MODULE_29__["SluzbaPaymentDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_sluzba_profile_sluzba_profile_component__WEBPACK_IMPORTED_MODULE_4__["SluzbaProfileComponent"],
                    _components_sluzba_login_sluzba_login_component__WEBPACK_IMPORTED_MODULE_7__["SluzbaLoginComponent"],
                    _components_sluzba_not_found_page_sluzba_not_found_page_component__WEBPACK_IMPORTED_MODULE_8__["SluzbaNotFoundPageComponent"],
                    _components_sluzba_courses_sluzba_courses_component__WEBPACK_IMPORTED_MODULE_9__["SluzbaCoursesComponent"],
                    _components_sluzba_payments_sluzba_payments_component__WEBPACK_IMPORTED_MODULE_17__["SluzbaPaymentsComponent"],
                    _components_sluzba_documents_sluzba_documents_component__WEBPACK_IMPORTED_MODULE_18__["SluzbaDocumentsComponent"],
                    _components_sluzba_students_sluzba_students_component__WEBPACK_IMPORTED_MODULE_19__["SluzbaStudentsComponent"],
                    _components_sluzba_teachers_sluzba_teachers_component__WEBPACK_IMPORTED_MODULE_20__["SluzbaTeachersComponent"],
                    _components_sluzba_course_details_sluzba_course_details_component__WEBPACK_IMPORTED_MODULE_21__["SluzbaCourseDetailsComponent"],
                    _components_sluzba_enrollments_sluzba_enrollments_component__WEBPACK_IMPORTED_MODULE_22__["SluzbaEnrollmentsComponent"],
                    _components_sluzba_home_sluzba_home_component__WEBPACK_IMPORTED_MODULE_23__["SluzbaHomeComponent"],
                    _components_sluzba_navbar_sluzba_navbar_component__WEBPACK_IMPORTED_MODULE_24__["SluzbaNavbarComponent"],
                    _components_sluzba_sidebar_sluzba_sidebar_component__WEBPACK_IMPORTED_MODULE_25__["SluzbaSidebarComponent"],
                    _components_sluzba_teachings_sluzba_teachings_component__WEBPACK_IMPORTED_MODULE_26__["SluzbaTeachingsComponent"],
                    _components_sluzba_student_details_sluzba_student_details_component__WEBPACK_IMPORTED_MODULE_27__["SluzbaStudentDetailsComponent"],
                    _components_sluzba_document_details_sluzba_document_details_component__WEBPACK_IMPORTED_MODULE_28__["SluzbaDocumentDetailsComponent"],
                    _components_sluzba_payment_details_sluzba_payment_details_component__WEBPACK_IMPORTED_MODULE_29__["SluzbaPaymentDetailsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
                ],
                providers: [
                    _components_sluzba_courses_sluzba_courses_service_service__WEBPACK_IMPORTED_MODULE_10__["SluzbaCoursesServiceService"],
                    _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationServiceService"],
                    _services_auth_can_activate_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["CanActivateAuthGuardService"],
                    _services_auth_jwt_utils_service__WEBPACK_IMPORTED_MODULE_13__["JwtUtilsService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HTTP_INTERCEPTORS"],
                        useClass: _services_auth_token_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptorService"],
                        multi: true
                    },
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aTuV":
/*!*********************************************************************!*\
  !*** ./src/app/components/sluzba-navbar/sluzba-navbar.component.ts ***!
  \*********************************************************************/
/*! exports provided: SluzbaNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaNavbarComponent", function() { return SluzbaNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sluzba_sidebar_sluzba_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sluzba-sidebar/sluzba-sidebar.component */ "xSP5");
/* harmony import */ var _sluzba_navbar_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sluzba-navbar-service.service */ "Qvag");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth/authentication-service.service */ "4+CV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








function SluzbaNavbarComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaNavbarComponent_nav_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.sidebarToggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Toggle navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaNavbarComponent_nav_0_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Log out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.user ? ctx_r0.user.firstName : "", " ", ctx_r0.user ? ctx_r0.user.lastName : "", " ");
} }
class SluzbaNavbarComponent {
    constructor(navbarService, location, element, authenticationService, router) {
        this.navbarService = navbarService;
        this.element = element;
        this.authenticationService = authenticationService;
        this.router = router;
        this.subscription = navbarService.RegenerateData$.subscribe(() => this.getUser());
        this.location = location;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        this.getUser();
        this.listTitles = _sluzba_sidebar_sluzba_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(listTitle => listTitle);
        const navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }
    getUser() {
        this.navbarService.getUser().subscribe(res => this.user = res.body);
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    ;
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    }
    ;
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
            console.log('opened');
        }
        else {
            this.sidebarClose();
            console.log('closed');
        }
    }
    ;
    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
    isLoggedIn() {
        return this.authenticationService.isLoggedIn();
    }
}
SluzbaNavbarComponent.ɵfac = function SluzbaNavbarComponent_Factory(t) { return new (t || SluzbaNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_navbar_service_service__WEBPACK_IMPORTED_MODULE_2__["SluzbaNavbarServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
SluzbaNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaNavbarComponent, selectors: [["navbar-cmp"]], decls: 1, vars: 1, consts: [["class", "navbar navbar-default", 4, "ngIf"], [1, "navbar", "navbar-default"], [1, "container-fluid"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", 1, "navbar-toggle", 3, "click"], [1, "sr-only"], [1, "icon-bar"], [1, "navbar-brand"], [1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "navbar-left"], ["routerLink", "/dashboard", "data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "fa", "fa-dashboard"], [1, "hidden-lg", "hidden-md"], ["routerLink", "/profile"], [1, "nav", "navbar-nav", "navbar-right"], ["href", "#", 3, "click"], [1, "separator", "hidden-lg", "hidden-md"]], template: function SluzbaNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SluzbaNavbarComponent_nav_0_Template, 26, 4, "nav", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaNavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'navbar-cmp',
                templateUrl: './sluzba-navbar.component.html'
            }]
    }], function () { return [{ type: _sluzba_navbar_service_service__WEBPACK_IMPORTED_MODULE_2__["SluzbaNavbarServiceService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "apym":
/*!****************************************!*\
  !*** ./src/app/model/document-type.ts ***!
  \****************************************/
/*! exports provided: DocumentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return DocumentType; });
class DocumentType {
    constructor(documentTypeCfg) {
        this.id = documentTypeCfg.id;
        this.code = documentTypeCfg.code;
        this.name = documentTypeCfg.name;
    }
}


/***/ }),

/***/ "bj8g":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sluzba-account/sluzba-account-service.service.ts ***!
  \*****************************************************************************/
/*! exports provided: SluzbaAccountServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaAccountServiceService", function() { return SluzbaAccountServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authentication-service.service */ "4+CV");





class SluzbaAccountServiceService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.accountUrl = 'accounts';
        this.RegenerateData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    announceChange() {
        this.RegenerateData.next();
    }
    getAccount(id) {
        const url = `${this.accountUrl}/getAccountById/${id}`;
        return this.http.get(url, { observe: 'response' });
    }
    getAvailableFunds(id) {
        const url = `${this.accountUrl}/getAvailableFundsForAccount/${id}`;
        return this.http.get(url, { observe: 'response' });
    }
}
SluzbaAccountServiceService.ɵfac = function SluzbaAccountServiceService_Factory(t) { return new (t || SluzbaAccountServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaAccountServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SluzbaAccountServiceService, factory: SluzbaAccountServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaAccountServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "c704":
/*!***************************************************************************************!*\
  !*** ./src/app/components/sluzba-payment-details/sluzba-payment-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SluzbaPaymentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaPaymentDetailsComponent", function() { return SluzbaPaymentDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_model_payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/payment */ "UfuC");
/* harmony import */ var src_app_model_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/account */ "gGTi");
/* harmony import */ var _sluzba_account_sluzba_account_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sluzba-account/sluzba-account-service.service */ "bj8g");
/* harmony import */ var _sluzba_payments_sluzba_payments_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sluzba-payments/sluzba-payments-service.service */ "f5gn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth/authentication-service.service */ "4+CV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











function SluzbaPaymentDetailsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaPaymentDetailsComponent_div_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaPaymentDetailsComponent_div_14_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SluzbaPaymentDetailsComponent {
    constructor(accountService, paymentService, route, location, router, authService) {
        this.accountService = accountService;
        this.paymentService = paymentService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.authService = authService;
        this.payment = new src_app_model_payment__WEBPACK_IMPORTED_MODULE_2__["Payment"]({
            date: null,
            purpose: '',
            amount: 0,
            account: new src_app_model_account__WEBPACK_IMPORTED_MODULE_3__["Account"]({
                bankAccount: '',
                model: '',
                personalCallToNumber: ''
            })
        });
        this.mode = 'ADD';
    }
    ngOnInit() {
        if (this.route.snapshot.params['id']) {
            this.mode = 'EDIT';
            // fetch payment if we edit the existing payment
            this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => this.paymentService.getPayment(+params['id'])))
                .subscribe(res => {
                this.payment = res.body;
            });
        }
        else {
            this.route.queryParams.subscribe(params => this.accountService.getAccount(params['accountId'])
                .subscribe(res => this.payment.account = res.body));
        }
    }
    save() {
        this.mode == 'ADD' ? this.add() : this.edit();
    }
    add() {
        this.paymentService.addPayment(this.payment)
            .subscribe(payment => {
            this.paymentService.announceChange();
            this.goBack();
        });
    }
    edit() {
        this.paymentService.editPayment(this.payment)
            .subscribe(payment => {
            this.paymentService.announceChange();
            this.goBack();
        });
    }
    goBack() {
        this.location.back();
    }
    isAdmin() {
        return this.authService.isAdmin();
    }
}
SluzbaPaymentDetailsComponent.ɵfac = function SluzbaPaymentDetailsComponent_Factory(t) { return new (t || SluzbaPaymentDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_account_sluzba_account_service_service__WEBPACK_IMPORTED_MODULE_4__["SluzbaAccountServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_payments_sluzba_payments_service_service__WEBPACK_IMPORTED_MODULE_5__["SluzbaPaymentsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationServiceService"])); };
SluzbaPaymentDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaPaymentDetailsComponent, selectors: [["app-sluzba-payment-details"]], decls: 15, vars: 7, consts: [[1, "form-group"], ["for", "field1c", 1, "form-control-label"], ["type", "date", "id", "field1c", "name", "field1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "field2c", 1, "form-control-label"], ["type", "text", "placeholder", "Purpose", "id", "field2c", "name", "field2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "field3c", 1, "form-control-label"], ["type", "number", "placeholder", "Amount", "id", "field3c", "name", "field3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function SluzbaPaymentDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaPaymentDetailsComponent_Template_input_ngModelChange_4_listener($event) { return ctx.payment.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Purpose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaPaymentDetailsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.payment.purpose = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaPaymentDetailsComponent_Template_input_ngModelChange_13_listener($event) { return ctx.payment.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SluzbaPaymentDetailsComponent_div_14_Template, 5, 0, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, ctx.payment.date, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payment.purpose);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.payment.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbHV6YmEtcGF5bWVudC1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaPaymentDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-payment-details',
                templateUrl: './sluzba-payment-details.component.html',
                styleUrls: ['./sluzba-payment-details.component.css']
            }]
    }], function () { return [{ type: _sluzba_account_sluzba_account_service_service__WEBPACK_IMPORTED_MODULE_4__["SluzbaAccountServiceService"] }, { type: _sluzba_payments_sluzba_payments_service_service__WEBPACK_IMPORTED_MODULE_5__["SluzbaPaymentsServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "c78S":
/*!**********************************!*\
  !*** ./src/app/model/student.ts ***!
  \**********************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
class Student {
    constructor(studentCfg) {
        this.id = studentCfg.id;
        this.cardName = studentCfg.cardName;
        this.account = studentCfg.account;
        this.user = studentCfg.user;
    }
}


/***/ }),

/***/ "dK1G":
/*!*************************************************************************!*\
  !*** ./src/app/components/sluzba-payments/sluzba-payments.component.ts ***!
  \*************************************************************************/
/*! exports provided: SluzbaPaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaPaymentsComponent", function() { return SluzbaPaymentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sluzba_payments_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sluzba-payments-service.service */ "f5gn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/authentication-service.service */ "4+CV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SluzbaPaymentsComponent_div_0_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const payment_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payment_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, payment_r2.date));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, payment_r2.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payment_r2.purpose);
} }
function SluzbaPaymentsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SluzbaPaymentsComponent_div_0_tr_18_Template, 11, 8, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.payments);
} }
class SluzbaPaymentsComponent {
    constructor(paymentService, router, authService) {
        this.paymentService = paymentService;
        this.router = router;
        this.authService = authService;
        this.subscription = paymentService.RegenerateData$.subscribe(() => this.getPayments());
    }
    ngOnInit() {
        this.getPayments();
    }
    getPayments() {
        this.paymentService.getPayments().subscribe(res => this.payments = res.body);
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}
SluzbaPaymentsComponent.ɵfac = function SluzbaPaymentsComponent_Factory(t) { return new (t || SluzbaPaymentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_payments_service_service__WEBPACK_IMPORTED_MODULE_1__["SluzbaPaymentsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaPaymentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaPaymentsComponent, selectors: [["app-sluzba-payments"]], decls: 1, vars: 1, consts: [["class", "main-content", "style", "padding-top: 2%;", 4, "ngIf"], [1, "main-content", 2, "padding-top", "2%"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "content", "table-responsive", "table-full-width", 2, "padding-top", "2%"], [1, "table", "table-hover", 2, "text-align", "center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function SluzbaPaymentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SluzbaPaymentsComponent_div_0_Template, 19, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbHV6YmEtcGF5bWVudHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaPaymentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-payments',
                templateUrl: './sluzba-payments.component.html',
                styleUrls: ['./sluzba-payments.component.css']
            }]
    }], function () { return [{ type: _sluzba_payments_service_service__WEBPACK_IMPORTED_MODULE_1__["SluzbaPaymentsServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "ddin":
/*!***************************************************************************!*\
  !*** ./src/app/components/sluzba-documents/sluzba-documents.component.ts ***!
  \***************************************************************************/
/*! exports provided: SluzbaDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaDocumentsComponent", function() { return SluzbaDocumentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sluzba_documents_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sluzba-documents-service.service */ "6Shf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/authentication-service.service */ "4+CV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SluzbaDocumentsComponent_div_0_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const document_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r2.type.name);
} }
function SluzbaDocumentsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SluzbaDocumentsComponent_div_0_tr_18_Template, 9, 3, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.documents);
} }
class SluzbaDocumentsComponent {
    constructor(documentService, router, authService) {
        this.documentService = documentService;
        this.router = router;
        this.authService = authService;
        this.subscription = documentService.RegenerateData$.subscribe(() => this.getDocuments());
    }
    ngOnInit() {
        this.getDocuments();
    }
    getDocuments() {
        this.documentService.getDocuments().subscribe(res => this.documents = res.body);
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}
SluzbaDocumentsComponent.ɵfac = function SluzbaDocumentsComponent_Factory(t) { return new (t || SluzbaDocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_documents_service_service__WEBPACK_IMPORTED_MODULE_1__["SluzbaDocumentsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaDocumentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaDocumentsComponent, selectors: [["app-sluzba-documents"]], decls: 1, vars: 1, consts: [["class", "main-content", "style", "padding-top: 2%;", 4, "ngIf"], [1, "main-content", 2, "padding-top", "2%"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "content", "table-responsive", "table-full-width", 2, "padding-top", "2%"], [1, "table", "table-hover", 2, "text-align", "center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["href", "#"]], template: function SluzbaDocumentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SluzbaDocumentsComponent_div_0_Template, 19, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbHV6YmEtZG9jdW1lbnRzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaDocumentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-documents',
                templateUrl: './sluzba-documents.component.html',
                styleUrls: ['./sluzba-documents.component.css']
            }]
    }], function () { return [{ type: _sluzba_documents_service_service__WEBPACK_IMPORTED_MODULE_1__["SluzbaDocumentsServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "f5gn":
/*!*******************************************************************************!*\
  !*** ./src/app/components/sluzba-payments/sluzba-payments-service.service.ts ***!
  \*******************************************************************************/
/*! exports provided: SluzbaPaymentsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaPaymentsServiceService", function() { return SluzbaPaymentsServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/authentication-service.service */ "4+CV");





class SluzbaPaymentsServiceService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.paymentsUrl = 'payments';
        this.RegenerateData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.RegenerateData$ = this.RegenerateData.asObservable();
    }
    announceChange() {
        this.RegenerateData.next();
    }
    getPayments() {
        let username = this.authService.getCurrentUser().username;
        console.log("username: " + username);
        const url = `${this.paymentsUrl}/getAllPaymentsForUser/${username}`;
        return this.http.get(url, { observe: 'response' });
    }
    getPayment(id) {
        const url = `${this.paymentsUrl}/getPaymentById/${id}`;
        return this.http.get(url, { observe: 'response' });
    }
    addPayment(payment) {
        const urlPost = `${this.paymentsUrl}/addPayment/${payment.account.id}`;
        return this.http.post(urlPost, payment, { observe: 'response' });
    }
    editPayment(payment) {
        const urlPut = `${this.paymentsUrl}/updatePayment/${payment.id}`;
        return this.http.put(urlPut, payment, { observe: 'response' });
    }
    deletePayment(paymentId) {
        const url = `${this.paymentsUrl}/deletePayment/${paymentId}`;
        return this.http.delete(url, { observe: 'response' });
    }
}
SluzbaPaymentsServiceService.ɵfac = function SluzbaPaymentsServiceService_Factory(t) { return new (t || SluzbaPaymentsServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaPaymentsServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SluzbaPaymentsServiceService, factory: SluzbaPaymentsServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaPaymentsServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "gGTi":
/*!**********************************!*\
  !*** ./src/app/model/account.ts ***!
  \**********************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
class Account {
    constructor(accountCfg) {
        this.id = accountCfg.id;
        this.bankAccount = accountCfg.bankAccount;
        this.model = accountCfg.model;
        this.personalCallToNumber = accountCfg.personalCallToNumber;
    }
}


/***/ }),

/***/ "iUF6":
/*!****************************************!*\
  !*** ./src/app/model/teaching-type.ts ***!
  \****************************************/
/*! exports provided: TeachingType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingType", function() { return TeachingType; });
class TeachingType {
    constructor(teachingTypeCfg) {
        this.id = teachingTypeCfg.id;
        this.code = teachingTypeCfg.code;
        this.name = teachingTypeCfg.name;
    }
}


/***/ }),

/***/ "kL20":
/*!*******************************************************************************!*\
  !*** ./src/app/components/sluzba-enrollments/sluzba-enrollments.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SluzbaEnrollmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaEnrollmentsComponent", function() { return SluzbaEnrollmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_model_enrollment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/enrollment */ "T8hV");
/* harmony import */ var src_app_model_student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/student */ "c78S");
/* harmony import */ var src_app_model_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/account */ "gGTi");
/* harmony import */ var src_app_model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/user */ "kl1M");
/* harmony import */ var src_app_model_course__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/course */ "8mcZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sluzba_courses_sluzba_courses_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sluzba-courses/sluzba-courses-service.service */ "NJjv");
/* harmony import */ var _sluzba_students_sluzba_students_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sluzba-students/sluzba-students-service.service */ "GoRH");
/* harmony import */ var _sluzba_enrollments_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sluzba-enrollments-service.service */ "HcuR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");













function SluzbaEnrollmentsComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", s_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", s_r1.user.firstName, " ", s_r1.user.lastName, " ", s_r1.cardName, "");
} }
class SluzbaEnrollmentsComponent {
    constructor(route, courseService, studentService, enrollmentService, location) {
        this.route = route;
        this.courseService = courseService;
        this.studentService = studentService;
        this.enrollmentService = enrollmentService;
        this.location = location;
        this.enrollment = new src_app_model_enrollment__WEBPACK_IMPORTED_MODULE_1__["Enrollment"]({
            startDate: null,
            endDate: null,
            student: new src_app_model_student__WEBPACK_IMPORTED_MODULE_2__["Student"]({
                cardName: '',
                account: new src_app_model_account__WEBPACK_IMPORTED_MODULE_3__["Account"]({
                    bankAccount: '',
                    model: '',
                    personalCallToNumber: ''
                }),
                user: new src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["User"]({
                    username: '',
                    firstName: '',
                    lastName: '',
                    password: ''
                })
            }),
            course: new src_app_model_course__WEBPACK_IMPORTED_MODULE_5__["Course"]({
                name: '',
                code: '',
                espb: 0,
                active: true
            })
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => this.courseService.getCourse(params['courseId'])
            .subscribe(res => this.enrollment.course = res.body));
        this.studentService.getStudents().subscribe(res => this.students = res.body);
    }
    add() {
        this.enrollmentService.addEnrollment(this.enrollment, this.enrollment.course.id)
            .subscribe(enrollment => {
            this.enrollmentService.announceChange();
            this.goBack();
        });
    }
    goBack() {
        this.location.back();
    }
}
SluzbaEnrollmentsComponent.ɵfac = function SluzbaEnrollmentsComponent_Factory(t) { return new (t || SluzbaEnrollmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_courses_sluzba_courses_service_service__WEBPACK_IMPORTED_MODULE_7__["SluzbaCoursesServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_students_sluzba_students_service_service__WEBPACK_IMPORTED_MODULE_8__["SluzbaStudentsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_enrollments_service_service__WEBPACK_IMPORTED_MODULE_9__["SluzbaEnrollmentsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"])); };
SluzbaEnrollmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaEnrollmentsComponent, selectors: [["app-sluzba-enrollments"]], decls: 20, vars: 11, consts: [[1, "form-group"], [1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "input-group"], ["type", "date", "placeholder", "yyyy-mm-dd", "id", "field1c", "name", "dp1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "date", "placeholder", "yyyy-mm-dd", "id", "field2c", "name", "dp2", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "ngValue"]], template: function SluzbaEnrollmentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaEnrollmentsComponent_Template_select_ngModelChange_5_listener($event) { return ctx.enrollment.student = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SluzbaEnrollmentsComponent_option_6_Template, 2, 4, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaEnrollmentsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.enrollment.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaEnrollmentsComponent_Template_input_ngModelChange_13_listener($event) { return ctx.enrollment.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaEnrollmentsComponent_Template_button_click_16_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaEnrollmentsComponent_Template_button_click_18_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Enroll students in course ", ctx.enrollment.course.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.enrollment.student);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.students);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, ctx.enrollment.startDate, "yyyy-MM-dd"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 8, ctx.enrollment.endDate, "yyyy-MM-dd"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbHV6YmEtZW5yb2xsbWVudHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaEnrollmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-enrollments',
                templateUrl: './sluzba-enrollments.component.html',
                styleUrls: ['./sluzba-enrollments.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _sluzba_courses_sluzba_courses_service_service__WEBPACK_IMPORTED_MODULE_7__["SluzbaCoursesServiceService"] }, { type: _sluzba_students_sluzba_students_service_service__WEBPACK_IMPORTED_MODULE_8__["SluzbaStudentsServiceService"] }, { type: _sluzba_enrollments_service_service__WEBPACK_IMPORTED_MODULE_9__["SluzbaEnrollmentsServiceService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] }]; }, null); })();


/***/ }),

/***/ "kl1M":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(userCfg) {
        this.id = userCfg.id;
        this.username = userCfg.username;
        this.firstName = userCfg.firstName;
        this.lastName = userCfg.lastName;
        this.password = userCfg.password;
    }
}


/***/ }),

/***/ "maBI":
/*!*************************************************************************!*\
  !*** ./src/app/components/sluzba-students/sluzba-students.component.ts ***!
  \*************************************************************************/
/*! exports provided: SluzbaStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaStudentsComponent", function() { return SluzbaStudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sluzba_students_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sluzba-students-service.service */ "GoRH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/authentication-service.service */ "4+CV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SluzbaStudentsComponent_div_0_tr_20_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaStudentsComponent_div_0_tr_20_td_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const student_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.gotoEdit(student_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaStudentsComponent_div_0_tr_20_td_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const student_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.deleteStudent(student_r3.id, student_r3.user.firstName, student_r3.user.lastName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SluzbaStudentsComponent_div_0_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SluzbaStudentsComponent_div_0_tr_20_td_11_Template, 5, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r3.user.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r3.user.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r3.user.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r3.cardName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isAdmin());
} }
function SluzbaStudentsComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaStudentsComponent_div_0_div_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.gotoAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SluzbaStudentsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cardname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SluzbaStudentsComponent_div_0_tr_20_Template, 12, 6, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SluzbaStudentsComponent_div_0_div_21_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.students);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isAdmin());
} }
class SluzbaStudentsComponent {
    constructor(studentService, router, authService) {
        this.studentService = studentService;
        this.router = router;
        this.authService = authService;
        this.subscription = studentService.RegenerateData$.subscribe(() => this.getStudents());
    }
    ngOnInit() {
        this.getStudents();
    }
    getStudents() {
        this.studentService.getStudents().subscribe(res => this.students = res.body);
    }
    gotoAdd() {
        this.router.navigate(['/addStudent']);
    }
    gotoEdit(student) {
        this.router.navigate(['/editStudent', student.id]);
    }
    deleteStudent(studentId, studentFirstName, studentLastName) {
        if (confirm("Are you sure to delete student " + studentFirstName + " " + studentLastName + "?")) {
            this.studentService.deleteStudent(studentId).subscribe(() => this.getStudents());
        }
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
    isAdmin() {
        return this.authService.isAdmin();
    }
}
SluzbaStudentsComponent.ɵfac = function SluzbaStudentsComponent_Factory(t) { return new (t || SluzbaStudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_students_service_service__WEBPACK_IMPORTED_MODULE_1__["SluzbaStudentsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaStudentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaStudentsComponent, selectors: [["app-sluzba-students"]], decls: 1, vars: 1, consts: [["class", "main-content", "style", "padding-top: 2%;", 4, "ngIf"], [1, "main-content", 2, "padding-top", "2%"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "content", "table-responsive", "table-full-width", 2, "padding-top", "2%"], [1, "table", "table-hover", 2, "text-align", "center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "right", 4, "ngIf"], ["scope", "row"], [4, "ngIf"], ["type", "button", "aria-label", "Edit", 1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-edit"], ["type", "button", "aria-label", "Delete", 1, "btn", "btn-danger", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "right"], ["type", "button", "aria-label", "Add", 1, "btn", "btn-success", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"]], template: function SluzbaStudentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SluzbaStudentsComponent_div_0_Template, 22, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn() && ctx.isAdmin());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbHV6YmEtc3R1ZGVudHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaStudentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-students',
                templateUrl: './sluzba-students.component.html',
                styleUrls: ['./sluzba-students.component.css']
            }]
    }], function () { return [{ type: _sluzba_students_service_service__WEBPACK_IMPORTED_MODULE_1__["SluzbaStudentsServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "maiF":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/sluzba-document-details/sluzba-document-details.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SluzbaDocumentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaDocumentDetailsComponent", function() { return SluzbaDocumentDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_model_document_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/document-type */ "apym");
/* harmony import */ var src_app_model_student__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/student */ "c78S");
/* harmony import */ var src_app_model_account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/account */ "gGTi");
/* harmony import */ var src_app_model_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/user */ "kl1M");
/* harmony import */ var src_app_model_document__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/document */ "Ui42");
/* harmony import */ var _sluzba_students_sluzba_students_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sluzba-students/sluzba-students-service.service */ "GoRH");
/* harmony import */ var _sluzba_document_details_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sluzba-document-details-service.service */ "Fr0C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/auth/authentication-service.service */ "4+CV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");














function SluzbaDocumentDetailsComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dt_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", dt_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dt_r2.name);
} }
function SluzbaDocumentDetailsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaDocumentDetailsComponent_div_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaDocumentDetailsComponent_div_14_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SluzbaDocumentDetailsComponent {
    constructor(studentService, documentService, route, location, router, authService) {
        this.studentService = studentService;
        this.documentService = documentService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.authService = authService;
        this.document = new src_app_model_document__WEBPACK_IMPORTED_MODULE_6__["Document"]({
            title: '',
            url: '',
            type: new src_app_model_document_type__WEBPACK_IMPORTED_MODULE_2__["DocumentType"]({
                name: '',
                code: ''
            }),
            student: new src_app_model_student__WEBPACK_IMPORTED_MODULE_3__["Student"]({
                cardName: '',
                account: new src_app_model_account__WEBPACK_IMPORTED_MODULE_4__["Account"]({
                    bankAccount: '',
                    model: '',
                    personalCallToNumber: ''
                }),
                user: new src_app_model_user__WEBPACK_IMPORTED_MODULE_5__["User"]({
                    username: '',
                    firstName: '',
                    lastName: '',
                    password: ''
                })
            })
        });
        this.mode = 'ADD';
    }
    ngOnInit() {
        this.documentService.getDocumentTypes().subscribe(res => this.types = res.body);
        if (this.route.snapshot.params['id']) {
            this.mode = 'EDIT';
            // fetch document if we edit the existing document
            this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => this.documentService.getDocument(+params['id'])))
                .subscribe(res => {
                this.document = res.body;
            });
        }
        else {
            this.route.queryParams.subscribe(params => this.studentService.getStudent(params['studentId'])
                .subscribe(res => this.document.student = res.body));
        }
    }
    save() {
        this.mode == 'ADD' ? this.add() : this.edit();
    }
    add() {
        this.documentService.addDocument(this.document)
            .subscribe(document => {
            this.documentService.announceChange();
            this.goBack();
        });
    }
    edit() {
        this.documentService.editDocument(this.document)
            .subscribe(document => {
            this.documentService.announceChange();
            this.goBack();
        });
    }
    goBack() {
        this.location.back();
    }
    isAdmin() {
        return this.authService.isAdmin();
    }
}
SluzbaDocumentDetailsComponent.ɵfac = function SluzbaDocumentDetailsComponent_Factory(t) { return new (t || SluzbaDocumentDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_students_sluzba_students_service_service__WEBPACK_IMPORTED_MODULE_7__["SluzbaStudentsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_document_details_service_service__WEBPACK_IMPORTED_MODULE_8__["SluzbaDocumentDetailsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationServiceService"])); };
SluzbaDocumentDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaDocumentDetailsComponent, selectors: [["app-sluzba-document-details"]], decls: 15, vars: 5, consts: [[1, "form-group"], [1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "field1c", 1, "form-control-label"], ["type", "text", "placeholder", "Title", "id", "field1c", "name", "field1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "field2c", 1, "form-control-label"], ["type", "text", "placeholder", "URL", "id", "field2c", "name", "field2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "modal-footer", 4, "ngIf"], [3, "ngValue"], [1, "modal-footer"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function SluzbaDocumentDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select document type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaDocumentDetailsComponent_Template_select_ngModelChange_4_listener($event) { return ctx.document.type.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SluzbaDocumentDetailsComponent_option_5_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaDocumentDetailsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.document.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaDocumentDetailsComponent_Template_input_ngModelChange_13_listener($event) { return ctx.document.url = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SluzbaDocumentDetailsComponent_div_14_Template, 5, 0, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.document.type.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.document.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.document.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbHV6YmEtZG9jdW1lbnQtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaDocumentDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-document-details',
                templateUrl: './sluzba-document-details.component.html',
                styleUrls: ['./sluzba-document-details.component.css']
            }]
    }], function () { return [{ type: _sluzba_students_sluzba_students_service_service__WEBPACK_IMPORTED_MODULE_7__["SluzbaStudentsServiceService"] }, { type: _sluzba_document_details_service_service__WEBPACK_IMPORTED_MODULE_8__["SluzbaDocumentDetailsServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "mbES":
/*!*************************************************************************************!*\
  !*** ./src/app/components/sluzba-not-found-page/sluzba-not-found-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SluzbaNotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaNotFoundPageComponent", function() { return SluzbaNotFoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SluzbaNotFoundPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
SluzbaNotFoundPageComponent.ɵfac = function SluzbaNotFoundPageComponent_Factory(t) { return new (t || SluzbaNotFoundPageComponent)(); };
SluzbaNotFoundPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaNotFoundPageComponent, selectors: [["app-sluzba-not-found-page"]], decls: 2, vars: 0, template: function SluzbaNotFoundPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Page not found! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbHV6YmEtbm90LWZvdW5kLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaNotFoundPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-not-found-page',
                templateUrl: './sluzba-not-found-page.component.html',
                styleUrls: ['./sluzba-not-found-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nvIh":
/*!****************************************************!*\
  !*** ./src/app/services/auth/jwt-utils.service.ts ***!
  \****************************************************/
/*! exports provided: JwtUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtUtilsService", function() { return JwtUtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class JwtUtilsService {
    constructor() { }
    getRoles(token) {
        let jwtData = token.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        console.log(decodedJwtData);
        return [decodedJwtData.role];
    }
}
JwtUtilsService.ɵfac = function JwtUtilsService_Factory(t) { return new (t || JwtUtilsService)(); };
JwtUtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtUtilsService, factory: JwtUtilsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtUtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qUVL":
/*!*************************************************************************!*\
  !*** ./src/app/components/sluzba-teachers/sluzba-teachers.component.ts ***!
  \*************************************************************************/
/*! exports provided: SluzbaTeachersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaTeachersComponent", function() { return SluzbaTeachersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sluzba_teachers_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sluzba-teachers-service.service */ "VoEt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/authentication-service.service */ "4+CV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SluzbaTeachersComponent_div_0_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const teacher_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teacher_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teacher_r2.user.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teacher_r2.user.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teacher_r2.user.username);
} }
function SluzbaTeachersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Firstname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lastname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SluzbaTeachersComponent_div_0_tr_18_Template, 9, 4, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.teachers);
} }
class SluzbaTeachersComponent {
    constructor(teacherService, router, authService) {
        this.teacherService = teacherService;
        this.router = router;
        this.authService = authService;
        this.subscription = teacherService.RegenerateData$.subscribe(() => this.getTeachers());
    }
    ngOnInit() {
        this.getTeachers();
    }
    getTeachers() {
        this.teacherService.getTeachers().subscribe(res => this.teachers = res.body);
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
    isAdmin() {
        return this.authService.isAdmin();
    }
}
SluzbaTeachersComponent.ɵfac = function SluzbaTeachersComponent_Factory(t) { return new (t || SluzbaTeachersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_teachers_service_service__WEBPACK_IMPORTED_MODULE_1__["SluzbaTeachersServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaTeachersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaTeachersComponent, selectors: [["app-sluzba-teachers"]], decls: 1, vars: 1, consts: [["class", "main-content", "style", "padding-top: 2%;", 4, "ngIf"], [1, "main-content", 2, "padding-top", "2%"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "content", "table-responsive", "table-full-width", 2, "padding-top", "2%"], [1, "table", "table-hover", 2, "text-align", "center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]], template: function SluzbaTeachersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SluzbaTeachersComponent_div_0_Template, 19, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn() && ctx.isAdmin());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbHV6YmEtdGVhY2hlcnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaTeachersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-teachers',
                templateUrl: './sluzba-teachers.component.html',
                styleUrls: ['./sluzba-teachers.component.css']
            }]
    }], function () { return [{ type: _sluzba_teachers_service_service__WEBPACK_IMPORTED_MODULE_1__["SluzbaTeachersServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "sjrJ":
/*!***************************************************************************************!*\
  !*** ./src/app/components/sluzba-student-details/sluzba-student-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SluzbaStudentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaStudentDetailsComponent", function() { return SluzbaStudentDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_model_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/account */ "gGTi");
/* harmony import */ var src_app_model_student__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/student */ "c78S");
/* harmony import */ var src_app_model_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/user */ "kl1M");
/* harmony import */ var _sluzba_students_sluzba_students_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sluzba-students/sluzba-students-service.service */ "GoRH");
/* harmony import */ var _sluzba_account_sluzba_account_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sluzba-account/sluzba-account-service.service */ "bj8g");
/* harmony import */ var _sluzba_documents_sluzba_documents_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sluzba-documents/sluzba-documents-service.service */ "6Shf");
/* harmony import */ var _sluzba_payments_sluzba_payments_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sluzba-payments/sluzba-payments-service.service */ "f5gn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/auth/authentication-service.service */ "4+CV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");














function SluzbaStudentDetailsComponent_div_24_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaStudentDetailsComponent_div_24_tr_31_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const payment_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.gotoEditPayment(payment_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaStudentDetailsComponent_div_24_tr_31_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const payment_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.deletePayment(payment_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const payment_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, payment_r4.date), " | ", payment_r4.purpose, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, payment_r4.amount), " ");
} }
function SluzbaStudentDetailsComponent_div_24_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaStudentDetailsComponent_div_24_tr_41_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const document_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.gotoEditDocument(document_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaStudentDetailsComponent_div_24_tr_41_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const document_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.deleteDocument(document_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const document_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", document_r8.type.name, " ", document_r8.title, " ");
} }
function SluzbaStudentDetailsComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bank account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaStudentDetailsComponent_div_24_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.student.account.bankAccount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaStudentDetailsComponent_div_24_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.student.account.model = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Personal call to number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaStudentDetailsComponent_div_24_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.student.account.personalCallToNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Available funds");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaStudentDetailsComponent_div_24_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.gotoAddPayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SluzbaStudentDetailsComponent_div_24_tr_31_Template, 10, 7, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaStudentDetailsComponent_div_24_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.gotoAddDocument(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, SluzbaStudentDetailsComponent_div_24_tr_41_Template, 8, 2, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.student.account.bankAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.student.account.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.student.account.personalCallToNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.available);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.payments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.documents);
} }
function SluzbaStudentDetailsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaStudentDetailsComponent_div_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaStudentDetailsComponent_div_25_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SluzbaStudentDetailsComponent {
    constructor(studentService, accountService, documentService, paymentService, route, location, router, authService) {
        this.studentService = studentService;
        this.accountService = accountService;
        this.documentService = documentService;
        this.paymentService = paymentService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.authService = authService;
        this.student = new src_app_model_student__WEBPACK_IMPORTED_MODULE_3__["Student"]({
            cardName: '',
            account: new src_app_model_account__WEBPACK_IMPORTED_MODULE_2__["Account"]({
                bankAccount: '',
                model: '',
                personalCallToNumber: ''
            }),
            user: new src_app_model_user__WEBPACK_IMPORTED_MODULE_4__["User"]({
                username: '',
                firstName: '',
                lastName: '',
                password: ''
            })
        });
        this.mode = 'ADD';
    }
    ngOnInit() {
        if (this.route.snapshot.params['id']) {
            this.mode = 'EDIT';
            // fetch student if we edit the existing student
            this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => this.studentService.getStudent(+params['id'])))
                .subscribe(res => {
                this.student = res.body;
                this.getAvailableFunds();
                this.getDocuments();
                this.getPayments();
            });
        }
    }
    getDocuments() {
        this.studentService.getStudentDocuments(this.student.id).subscribe(res => this.documents = res.body);
    }
    getPayments() {
        this.studentService.getAccountPayments(this.student.account.id).subscribe(res => this.payments = res.body);
    }
    getAvailableFunds() {
        this.accountService.getAvailableFunds(this.student.account.id).subscribe(res => this.available = res.body);
    }
    save() {
        this.mode == 'ADD' ? this.add() : this.edit();
    }
    add() {
        this.studentService.addStudent(this.student)
            .subscribe(res => {
            this.studentService.announceChange();
            this.goBack();
        });
    }
    edit() {
        this.studentService.editStudent(this.student)
            .subscribe(student => {
            this.studentService.announceChange();
            this.goBack();
        });
    }
    gotoAddDocument() {
        this.router.navigate(['/addDocument'], { queryParams: { studentId: this.student.id } });
    }
    gotoEditDocument(document) {
        this.router.navigate(['/editDocument', document.id]);
    }
    deleteDocument(documentId) {
        this.documentService.deleteDocument(documentId).subscribe(() => this.getDocuments());
    }
    gotoAddPayment() {
        this.router.navigate(['/addPayment'], { queryParams: { accountId: this.student.account.id } });
    }
    gotoEditPayment(payment) {
        this.router.navigate(['/editPayment', payment.id]);
    }
    deletePayment(paymentId) {
        this.paymentService.deletePayment(paymentId).subscribe(() => this.getPayments());
    }
    goBack() {
        this.location.back();
    }
    isAdmin() {
        return this.authService.isAdmin();
    }
}
SluzbaStudentDetailsComponent.ɵfac = function SluzbaStudentDetailsComponent_Factory(t) { return new (t || SluzbaStudentDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_students_sluzba_students_service_service__WEBPACK_IMPORTED_MODULE_5__["SluzbaStudentsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_account_sluzba_account_service_service__WEBPACK_IMPORTED_MODULE_6__["SluzbaAccountServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_documents_sluzba_documents_service_service__WEBPACK_IMPORTED_MODULE_7__["SluzbaDocumentsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_payments_sluzba_payments_service_service__WEBPACK_IMPORTED_MODULE_8__["SluzbaPaymentsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationServiceService"])); };
SluzbaStudentDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaStudentDetailsComponent, selectors: [["app-sluzba-student-details"]], decls: 26, vars: 7, consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card", 2, "padding-left", "10px"], [1, "form-group"], ["for", "field1c", 1, "form-control-label"], ["type", "text", "placeholder", "Firstname", "id", "field1c", "name", "field1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "field2c", 1, "form-control-label"], ["type", "text", "placeholder", "Lastname", "id", "field2c", "name", "field2", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "field3c", 1, "form-control-label"], ["type", "text", "placeholder", "Username", "id", "field3c", "name", "field3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "field4c", 1, "form-control-label"], ["type", "password", "placeholder", "Password", "id", "field4c", "name", "field4", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "field5c", 1, "form-control-label"], ["type", "text", "placeholder", "Cardname", "id", "field5c", "name", "field5", 1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["for", "field6c", 1, "form-control-label"], ["type", "text", "placeholder", "Bank account", "id", "field6c", "name", "field6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "field7c", 1, "form-control-label"], ["type", "text", "placeholder", "Model", "id", "field7c", "name", "field7", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "field8c", 1, "form-control-label"], ["type", "text", "placeholder", "Personal call to number", "id", "field8c", "name", "field8", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "field9c", 1, "form-control-label"], ["id", "field9c", "name", "field9", 1, "form-control"], ["type", "button", "aria-label", "Add", 1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "content", "table-responsive", "table-full-width", 2, "padding-top", "2%"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], ["type", "button", "aria-label", "Edit", 1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-edit"], ["type", "button", "aria-label", "Delete", 1, "btn", "btn-danger", "right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function SluzbaStudentDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Firstname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaStudentDetailsComponent_Template_input_ngModelChange_11_listener($event) { return ctx.student.user.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lastname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaStudentDetailsComponent_Template_input_ngModelChange_14_listener($event) { return ctx.student.user.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaStudentDetailsComponent_Template_input_ngModelChange_17_listener($event) { return ctx.student.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaStudentDetailsComponent_Template_input_ngModelChange_20_listener($event) { return ctx.student.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cardname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SluzbaStudentDetailsComponent_Template_input_ngModelChange_23_listener($event) { return ctx.student.cardName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SluzbaStudentDetailsComponent_div_24_Template, 42, 6, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SluzbaStudentDetailsComponent_div_25_Template, 5, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.student.user.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.student.user.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.student.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.student.user.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.student.cardName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.student.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbHV6YmEtc3R1ZGVudC1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaStudentDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-student-details',
                templateUrl: './sluzba-student-details.component.html',
                styleUrls: ['./sluzba-student-details.component.css']
            }]
    }], function () { return [{ type: _sluzba_students_sluzba_students_service_service__WEBPACK_IMPORTED_MODULE_5__["SluzbaStudentsServiceService"] }, { type: _sluzba_account_sluzba_account_service_service__WEBPACK_IMPORTED_MODULE_6__["SluzbaAccountServiceService"] }, { type: _sluzba_documents_sluzba_documents_service_service__WEBPACK_IMPORTED_MODULE_7__["SluzbaDocumentsServiceService"] }, { type: _sluzba_payments_sluzba_payments_service_service__WEBPACK_IMPORTED_MODULE_8__["SluzbaPaymentsServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_sluzba_payments_sluzba_payments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sluzba-payments/sluzba-payments.component */ "dK1G");
/* harmony import */ var _components_sluzba_documents_sluzba_documents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sluzba-documents/sluzba-documents.component */ "ddin");
/* harmony import */ var _components_sluzba_login_sluzba_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sluzba-login/sluzba-login.component */ "Lcct");
/* harmony import */ var _components_sluzba_courses_sluzba_courses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sluzba-courses/sluzba-courses.component */ "vefw");
/* harmony import */ var _components_sluzba_profile_sluzba_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sluzba-profile/sluzba-profile.component */ "21z2");
/* harmony import */ var _components_sluzba_students_sluzba_students_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sluzba-students/sluzba-students.component */ "maBI");
/* harmony import */ var _services_auth_can_activate_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth/can-activate-auth.guard.service */ "zMJ9");
/* harmony import */ var _components_sluzba_not_found_page_sluzba_not_found_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sluzba-not-found-page/sluzba-not-found-page.component */ "mbES");
/* harmony import */ var _components_sluzba_teachers_sluzba_teachers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sluzba-teachers/sluzba-teachers.component */ "qUVL");
/* harmony import */ var _components_sluzba_course_details_sluzba_course_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sluzba-course-details/sluzba-course-details.component */ "RtIt");
/* harmony import */ var _components_sluzba_home_sluzba_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sluzba-home/sluzba-home.component */ "GOJh");
/* harmony import */ var _components_sluzba_enrollments_sluzba_enrollments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sluzba-enrollments/sluzba-enrollments.component */ "kL20");
/* harmony import */ var _components_sluzba_teachings_sluzba_teachings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sluzba-teachings/sluzba-teachings.component */ "7Cke");
/* harmony import */ var _components_sluzba_student_details_sluzba_student_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/sluzba-student-details/sluzba-student-details.component */ "sjrJ");
/* harmony import */ var _components_sluzba_document_details_sluzba_document_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sluzba-document-details/sluzba-document-details.component */ "maiF");
/* harmony import */ var _components_sluzba_payment_details_sluzba_payment_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sluzba-payment-details/sluzba-payment-details.component */ "c704");




















const routes = [
    { path: 'dashboard', component: _components_sluzba_home_sluzba_home_component__WEBPACK_IMPORTED_MODULE_12__["SluzbaHomeComponent"] },
    { path: 'login', component: _components_sluzba_login_sluzba_login_component__WEBPACK_IMPORTED_MODULE_4__["SluzbaLoginComponent"] },
    { path: 'profile', component: _components_sluzba_profile_sluzba_profile_component__WEBPACK_IMPORTED_MODULE_6__["SluzbaProfileComponent"], canActivate: [_services_auth_can_activate_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["CanActivateAuthGuardService"]] },
    { path: 'courses', component: _components_sluzba_courses_sluzba_courses_component__WEBPACK_IMPORTED_MODULE_5__["SluzbaCoursesComponent"], canActivate: [_services_auth_can_activate_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["CanActivateAuthGuardService"]] },
    { path: 'payments', component: _components_sluzba_payments_sluzba_payments_component__WEBPACK_IMPORTED_MODULE_2__["SluzbaPaymentsComponent"], canActivate: [_services_auth_can_activate_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["CanActivateAuthGuardService"]] },
    { path: 'documents', component: _components_sluzba_documents_sluzba_documents_component__WEBPACK_IMPORTED_MODULE_3__["SluzbaDocumentsComponent"], canActivate: [_services_auth_can_activate_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["CanActivateAuthGuardService"]] },
    { path: 'students', component: _components_sluzba_students_sluzba_students_component__WEBPACK_IMPORTED_MODULE_7__["SluzbaStudentsComponent"], canActivate: [_services_auth_can_activate_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["CanActivateAuthGuardService"]] },
    { path: 'teachers', component: _components_sluzba_teachers_sluzba_teachers_component__WEBPACK_IMPORTED_MODULE_10__["SluzbaTeachersComponent"], canActivate: [_services_auth_can_activate_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["CanActivateAuthGuardService"]] },
    { path: 'addCourse', component: _components_sluzba_course_details_sluzba_course_details_component__WEBPACK_IMPORTED_MODULE_11__["SluzbaCourseDetailsComponent"] },
    { path: 'editCourse/:id', component: _components_sluzba_course_details_sluzba_course_details_component__WEBPACK_IMPORTED_MODULE_11__["SluzbaCourseDetailsComponent"] },
    { path: 'addEnrollment', component: _components_sluzba_enrollments_sluzba_enrollments_component__WEBPACK_IMPORTED_MODULE_13__["SluzbaEnrollmentsComponent"] },
    { path: 'addTeaching', component: _components_sluzba_teachings_sluzba_teachings_component__WEBPACK_IMPORTED_MODULE_14__["SluzbaTeachingsComponent"] },
    { path: 'addStudent', component: _components_sluzba_student_details_sluzba_student_details_component__WEBPACK_IMPORTED_MODULE_15__["SluzbaStudentDetailsComponent"] },
    { path: 'editStudent/:id', component: _components_sluzba_student_details_sluzba_student_details_component__WEBPACK_IMPORTED_MODULE_15__["SluzbaStudentDetailsComponent"] },
    { path: 'addDocument', component: _components_sluzba_document_details_sluzba_document_details_component__WEBPACK_IMPORTED_MODULE_16__["SluzbaDocumentDetailsComponent"] },
    { path: 'editDocument/:id', component: _components_sluzba_document_details_sluzba_document_details_component__WEBPACK_IMPORTED_MODULE_16__["SluzbaDocumentDetailsComponent"] },
    { path: 'addPayment', component: _components_sluzba_payment_details_sluzba_payment_details_component__WEBPACK_IMPORTED_MODULE_17__["SluzbaPaymentDetailsComponent"] },
    { path: 'editPayment/:id', component: _components_sluzba_payment_details_sluzba_payment_details_component__WEBPACK_IMPORTED_MODULE_17__["SluzbaPaymentDetailsComponent"] },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: '**', component: _components_sluzba_not_found_page_sluzba_not_found_page_component__WEBPACK_IMPORTED_MODULE_9__["SluzbaNotFoundPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vefw":
/*!***********************************************************************!*\
  !*** ./src/app/components/sluzba-courses/sluzba-courses.component.ts ***!
  \***********************************************************************/
/*! exports provided: SluzbaCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaCoursesComponent", function() { return SluzbaCoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sluzba_courses_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sluzba-courses-service.service */ "NJjv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/authentication-service.service */ "4+CV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SluzbaCoursesComponent_div_5_tr_12_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaCoursesComponent_div_5_tr_12_td_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const course_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.gotoEdit(course_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaCoursesComponent_div_5_tr_12_td_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const course_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.deleteCourse(course_r3.id, course_r3.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SluzbaCoursesComponent_div_5_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SluzbaCoursesComponent_div_5_tr_12_td_8_Template, 5, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, course_r3.espb));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isAdmin());
} }
function SluzbaCoursesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Course name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ECTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SluzbaCoursesComponent_div_5_tr_12_Template, 9, 6, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.courses);
} }
function SluzbaCoursesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaCoursesComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.gotoAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SluzbaCoursesComponent {
    constructor(courseService, router, authService) {
        this.courseService = courseService;
        this.router = router;
        this.authService = authService;
        this.subscription = courseService.RegenerateData$.subscribe(() => this.getCourses());
    }
    ngOnInit() {
        this.getCourses();
    }
    getCourses() {
        this.courseService.getCourses().subscribe(res => this.courses = res.body);
    }
    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
    isAdmin() {
        return this.authService.isAdmin();
    }
    gotoAdd() {
        this.router.navigate(['/addCourse']);
    }
    gotoEdit(course) {
        this.router.navigate(['/editCourse', course.id]);
    }
    deleteCourse(courseId, courseName) {
        if (confirm("Are you sure to delete course " + courseName + "?")) {
            this.courseService.deleteCourse(courseId).subscribe(() => this.getCourses());
        }
    }
}
SluzbaCoursesComponent.ɵfac = function SluzbaCoursesComponent_Factory(t) { return new (t || SluzbaCoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_courses_service_service__WEBPACK_IMPORTED_MODULE_1__["SluzbaCoursesServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"])); };
SluzbaCoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaCoursesComponent, selectors: [["app-sluzba-courses"]], decls: 7, vars: 2, consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], ["class", "content table-responsive table-full-width", "style", "padding-top: 2%;", 4, "ngIf"], ["class", "right", 4, "ngIf"], [1, "content", "table-responsive", "table-full-width", 2, "padding-top", "2%"], [1, "table", "table-hover", 2, "text-align", "center"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [4, "ngIf"], ["type", "button", "aria-label", "Edit", 1, "btn", "btn-primary", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-edit"], ["type", "button", "aria-label", "Delete", 1, "btn", "btn-danger", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "right"], ["type", "button", "aria-label", "Add", 1, "btn", "btn-success", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-plus"]], template: function SluzbaCoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SluzbaCoursesComponent_div_5_Template, 13, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SluzbaCoursesComponent_div_6_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbHV6YmEtY291cnNlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaCoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-courses',
                templateUrl: './sluzba-courses.component.html',
                styleUrls: ['./sluzba-courses.component.css']
            }]
    }], function () { return [{ type: _sluzba_courses_service_service__WEBPACK_IMPORTED_MODULE_1__["SluzbaCoursesServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationServiceService"] }]; }, null); })();


/***/ }),

/***/ "xSP5":
/*!***********************************************************************!*\
  !*** ./src/app/components/sluzba-sidebar/sluzba-sidebar.component.ts ***!
  \***********************************************************************/
/*! exports provided: ROUTES, SluzbaSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SluzbaSidebarComponent", function() { return SluzbaSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sluzba_sidebar_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sluzba-sidebar-service.service */ "5nX+");
/* harmony import */ var _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/authentication-service.service */ "4+CV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SluzbaSidebarComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SluzbaSidebarComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.user ? ctx_r1.user.firstName : "", " ", ctx_r1.user ? ctx_r1.user.lastName : "", "");
} }
function SluzbaSidebarComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SluzbaSidebarComponent_li_9_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SluzbaSidebarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 18);
} }
function SluzbaSidebarComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SluzbaSidebarComponent_li_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SluzbaSidebarComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Students");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SluzbaSidebarComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Teachers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
    { path: '/profile', title: 'User Profile', icon: 'pe-7s-user', class: '' },
    { path: '/courses', title: 'Courses List', icon: 'pe-7s-notebook', class: '' },
    { path: '/payments', title: 'Payments', icon: 'pe-7s-cash paymants', class: '' },
    { path: '/documents', title: 'Documents', icon: 'pe-7s-note2', class: '' },
    { path: '/students', title: 'Students', icon: 'pe-7s-users', class: '' },
    { path: '/teachers', title: 'Teachers', icon: 'pe-7s-users', class: '' },
];
class SluzbaSidebarComponent {
    constructor(sidebarService, authenticationService, router) {
        this.sidebarService = sidebarService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.subscription = sidebarService.RegenerateData$.subscribe(() => this.getUser());
    }
    ngOnInit() {
        this.getUser();
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }
    ;
    getUser() {
        this.sidebarService.getUser().subscribe(res => this.user = res.body);
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
    isLoggedIn() {
        return this.authenticationService.isLoggedIn();
    }
    isStudent() {
        return this.authenticationService.isStudent();
    }
    isAdmin() {
        return this.authenticationService.isAdmin();
    }
}
SluzbaSidebarComponent.ɵfac = function SluzbaSidebarComponent_Factory(t) { return new (t || SluzbaSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sluzba_sidebar_service_service__WEBPACK_IMPORTED_MODULE_1__["SluzbaSidebarServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SluzbaSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SluzbaSidebarComponent, selectors: [["app-sluzba-sidebar"]], decls: 30, vars: 8, consts: [[1, "sidebar-wrapper"], [1, "logo"], ["routerLink", "/dashboard", "href", "#", 1, "simple-text"], [1, "logo-img"], ["src", "../../../assets/img/ftn logo.png"], [1, "nav", "responsive-nav"], [4, "ngIf"], ["class", "separator hidden-lg hidden-md", 4, "ngIf"], ["routerLink", "/dashboard"], [1, "pe-7s-graph"], ["routerLink", "/profile"], [1, "pe-7s-user"], ["routerLink", "/courses"], [1, "pe-7s-notebook"], ["data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "fa", "fa-dashboard"], [1, "hidden-lg", "hidden-md"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "separator", "hidden-lg", "hidden-md"], ["routerLink", "/documents"], [1, "pe-7s-note2"], ["routerLink", "/payments"], [1, "pe-7s-cash", "paymants"], ["routerLink", "/students"], [1, "pe-7s-users"], ["routerLink", "/teachers"]], template: function SluzbaSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Student service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SluzbaSidebarComponent_li_7_Template, 5, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SluzbaSidebarComponent_li_8_Template, 5, 2, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SluzbaSidebarComponent_li_9_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SluzbaSidebarComponent_li_10_Template, 1, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "User profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SluzbaSidebarComponent_li_26_Template, 5, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SluzbaSidebarComponent_li_27_Template, 5, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SluzbaSidebarComponent_li_28_Template, 5, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SluzbaSidebarComponent_li_29_Template, 5, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileMenu());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileMenu());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileMenu());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileMenu());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isStudent());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isStudent());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SluzbaSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sluzba-sidebar',
                templateUrl: './sluzba-sidebar.component.html'
            }]
    }], function () { return [{ type: _sluzba_sidebar_service_service__WEBPACK_IMPORTED_MODULE_1__["SluzbaSidebarServiceService"] }, { type: _services_auth_authentication_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "zMJ9":
/*!******************************************************************!*\
  !*** ./src/app/services/auth/can-activate-auth.guard.service.ts ***!
  \******************************************************************/
/*! exports provided: CanActivateAuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateAuthGuardService", function() { return CanActivateAuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication-service.service */ "4+CV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class CanActivateAuthGuardService {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
CanActivateAuthGuardService.ɵfac = function CanActivateAuthGuardService_Factory(t) { return new (t || CanActivateAuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CanActivateAuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanActivateAuthGuardService, factory: CanActivateAuthGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanActivateAuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _authentication_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map