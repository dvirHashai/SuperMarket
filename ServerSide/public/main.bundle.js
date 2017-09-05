webpackJsonp([1,4],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product(serial, name, category, weightable, price, manufacturer, storeID) {
        this.serial = serial;
        this.name = name;
        this.category = category;
        this.weightable = weightable;
        this.price = price;
        this.manufacturer = manufacturer;
        this.storeID = storeID;
    }
    return Product;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/product.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        console.log('the auth service is alive');
    }
    AuthService.prototype.httpPost = function (object, path) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log("in HTTP Post");
        return this.http.post('http://localhost:3000/' + path, object, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Http Get
    /*  httpGet(object,path){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('http://localhost:3000/products/create', object,{headers: headers})
          .map(res => res.json());
    
      }*/
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function (path) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        console.log("auth service get profile!!!", this.authToken);
        return this.http.get('http://localhost:3000/' + path, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.httpGet = function (path) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        console.log('sdfdsf');
        return this.http.get('http://localhost:3000/' + path, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/auth.service.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_shops_map_init_markers__ = __webpack_require__(569);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglMapService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GooglMapService = (function (_super) {
    __extends(GooglMapService, _super);
    function GooglMapService() {
        _super.call(this);
        this.markers = new Array();
        this.marker = {
            name: '',
            lat: Number,
            lng: Number,
            draggable: Boolean
        };
        console.log('MrakerService Initialized...');
        this.load();
    }
    GooglMapService.prototype.getMarkers = function () {
        var markers = JSON.parse(localStorage.getItem('markers'));
        return markers;
    };
    GooglMapService.prototype.addMarker = function (newMarker) {
        // Fetch markers
        var markers = JSON.parse(localStorage.getItem('markers'));
        //push to array
        markers.push(newMarker);
        // Set ls markers again
        localStorage.setItem('markers', JSON.stringify(markers));
    };
    GooglMapService.prototype.updateMarker = function (marker, newLat, newLng) {
        //Fetch markers
        var markers = JSON.parse(localStorage.getItem('markers'));
        for (var i = 0; i < markers.length; i++) {
            if (marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
                markers[i].lat = newLat;
                markers[i].lng = newLng;
            }
        }
        //set ls markers again
        localStorage.setItem('markers', JSON.stringify('markers'));
    };
    GooglMapService.prototype.removeMarker = function (marker) {
        //Fetch markers
        var markers = JSON.parse(localStorage.getItem('markers'));
        console.log(markers);
        for (var i = 0; i < markers.length; i++) {
            if (marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
                markers.splice(i, 1);
            }
        }
        //set ls markers again
        localStorage.setItem('markers', JSON.stringify('markers'));
    };
    GooglMapService.prototype.pasreJasonShopsList = function (shops) {
        console.log(shops);
        for (var _i = 0, _a = shops.callback; _i < _a.length; _i++) {
            var shop = _a[_i];
            console.log(shop);
            var newShopMarker = {
                name: shop.shopBranchName,
                lat: shop.lat,
                lng: shop.lng,
                draggable: false
            };
            console.log(newShopMarker);
            this.markers.push(newShopMarker);
        }
        return this.markers;
    };
    GooglMapService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], GooglMapService);
    return GooglMapService;
}(__WEBPACK_IMPORTED_MODULE_1__app_shops_map_init_markers__["a" /* Init */]));
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/google-map.service.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocketService = (function () {
    function SocketService(authService) {
        this.authService = authService;
        this.host = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
    }
    SocketService.prototype.get = function () {
        var _this = this;
        //this.name = this.authService.user.username;
        var socketUrl = this.host;
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__["connect"](socketUrl);
        this.socket.on("connect", function () { return _this.connect(); });
        this.socket.on("disconnect", function () { return _this.disconnect(); });
        this.socket.on("error", function (error) {
            console.log("ERROR: \"" + error + "\" (" + socketUrl + ")");
        });
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.socket.on("new message", function (msg) { return observer.next({ msg: msg.msg }); });
            return function () { return _this.socket.close(); };
        });
    };
    SocketService.prototype.create = function (msg) {
        this.socket.emit("create", msg);
    };
    SocketService.prototype.connect = function () {
        console.log("connected to server");
    };
    SocketService.prototype.disconnect = function () {
        console.log("disconnected from server");
    };
    SocketService.prototype.sendMessage = function (msg) {
        this.socket.emit('send Message', { msg: msg });
    };
    SocketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], SocketService);
    return SocketService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/socket.service.js.map

/***/ }),

/***/ 432:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 432;


/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(550);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/main.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(757),
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/app.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__body_body_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_register_login_register_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__products_product_list_product_list_component__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_product_list_product_item_component__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_canvas_directive__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__products_crud_create_create_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__products_crud_update_update_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__products_crud_delete_delete_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__products_crud_search_search_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__products_crud_list_list_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__login_page_login_page_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__login_login_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__register_register_component__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__profile_profile_component__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_guards_auth_guards__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_product_service_product_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__messags_messags_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_socket_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shops_map_shops_map_component__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular2_google_maps_core__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_google_maps_google_map_service__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__statistics_statistics_component__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng2_charts__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__aside_aside_component__ = __webpack_require__(551);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





































var productsRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__products_product_list_product_list_component__["a" /* ProductListComponent */] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_17__products_crud_create_create_component__["a" /* CreateComponent */] },
];
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_22__login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */], children: productsRoutes, canActivate: [__WEBPACK_IMPORTED_MODULE_26__services_guards_auth_guards__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_25__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_26__services_guards_auth_guards__["a" /* AuthGuard */]] },
    { path: 'shops-map', component: __WEBPACK_IMPORTED_MODULE_30__shops_map_shops_map_component__["a" /* ShopsMapComponent */] },
    { path: 'products/statistics', component: __WEBPACK_IMPORTED_MODULE_33__statistics_statistics_component__["a" /* StatisticsComponent */] },
    { path: 'home/products', component: __WEBPACK_IMPORTED_MODULE_10__products_product_list_product_list_component__["a" /* ProductListComponent */] },
    { path: 'products/create', component: __WEBPACK_IMPORTED_MODULE_17__products_crud_create_create_component__["a" /* CreateComponent */] },
    { path: 'products/update/:serial', component: __WEBPACK_IMPORTED_MODULE_18__products_crud_update_update_component__["a" /* UpdateComponent */] },
    { path: 'products/search', component: __WEBPACK_IMPORTED_MODULE_20__products_crud_search_search_component__["a" /* SearchComponent */] },
    { path: 'products/delete/:serial', component: __WEBPACK_IMPORTED_MODULE_19__products_crud_delete_delete_component__["a" /* DeleteComponent */] },
    { path: 'products/list', component: __WEBPACK_IMPORTED_MODULE_21__products_crud_list_list_component__["a" /* ListComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__body_body_component__["a" /* BodyComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_register_login_register_component__["a" /* LoginRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__products_product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__products_product_list_product_item_component__["a" /* ProductItemComponent */],
                __WEBPACK_IMPORTED_MODULE_15__directives_canvas_directive__["a" /* CanvasDirective */],
                __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__products_crud_create_create_component__["a" /* CreateComponent */],
                __WEBPACK_IMPORTED_MODULE_18__products_crud_update_update_component__["a" /* UpdateComponent */],
                __WEBPACK_IMPORTED_MODULE_19__products_crud_delete_delete_component__["a" /* DeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_20__products_crud_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_21__products_crud_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_24__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_28__messags_messags_component__["a" /* MessagsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__shops_map_shops_map_component__["a" /* ShopsMapComponent */],
                __WEBPACK_IMPORTED_MODULE_33__statistics_statistics_component__["a" /* StatisticsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__aside_aside_component__["a" /* AsideComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_31_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCbtzigsfExbOQQ2_Tdd4GeQhvdHBoOgGk'
                }),
                __WEBPACK_IMPORTED_MODULE_34_ng2_charts__["ChartsModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_26__services_guards_auth_guards__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_27__services_product_service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_29__services_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_32__services_google_maps_google_map_service__["a" /* GooglMapService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/app.module.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideComponent = (function () {
    function AsideComponent() {
        this.items = new Array;
    }
    AsideComponent.prototype.ngOnInit = function () {
        var item = {
            msg: "hello",
            show: false
        };
        var item1 = {
            msg: "world",
            show: false
        };
        var item2 = {
            msg: "hi",
            show: false
        };
        this.items.push(item);
        this.items.push(item1);
        this.items.push(item2);
    };
    AsideComponent.prototype.push = function (item) {
        item.show = true;
    };
    AsideComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aside',
            template: __webpack_require__(758),
        }), 
        __metadata('design:paramtypes', [])
    ], AsideComponent);
    return AsideComponent;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/aside.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyComponent = (function () {
    function BodyComponent() {
        this.image = './images/body.png';
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(759),
            styles: [".app-body-background-img img {width: 100%;}\n           .multiple-column { column-count: 3} \n           .border-radius { border: 2px solid #a1a1a1; padding: 10px 40px; background: #dddddd; width: 300px; border-radius: 25px;}",
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BodyComponent);
    return BodyComponent;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/body.component.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(760),
            styles: ["button {font-size: 1.8em;} #content {padding: 30px;background: #eeeeee;}   .footer-partners-text h1 {text-align: center;text-shadow: 2px 2px #FF0000;} .footers-partners-logos img {transition: width 2s}"],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('movePanel', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(600, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0, transform: 'translateY(0)', offset: 1 }),
                        ]))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/footer.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_product_service_product_service__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent(flashMessage, authService, router, productService) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.productService = productService;
    }
    HeaderComponent.prototype.onLogOutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['']);
        return false;
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(761),
            styles: [
                " .navbar-brand-logo-img img { height: 50px; width: 70px;}",
                " .navbar { margin: 0}",
                ".navbar.navbar-default a { outline-color: white}"
            ],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_product_service_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_product_service_product_service__["a" /* ProductService */]) === 'function' && _d) || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/header.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(762),
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/home.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginPageComponent = (function () {
    function LoginPageComponent() {
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(763),
        }), 
        __metadata('design:paramtypes', [])
    ], LoginPageComponent);
    return LoginPageComponent;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/login-page.component.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginRegisterComponent = (function () {
    function LoginRegisterComponent(formBuilder, flashMessage, authService, router) {
        this.formBuilder = formBuilder;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.myForm = formBuilder.group({
            'userData': formBuilder.group({
                'username': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, this.exampleValidator]],
                'email': ['', [
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                    ]],
            }),
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
        this.isNotRegister = true;
        this.isLogin = false;
    }
    LoginRegisterComponent.prototype.toggle = function () {
        this.isNotRegister = !this.isNotRegister;
        console.log(this.isNotRegister);
    };
    LoginRegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            username: this.myForm.get(['userData', 'username']).value,
            email: this.myForm.get(['userData', 'email']).value,
            password: this.myForm.get(['password']).value,
        };
        console.log(user);
        console.log("register !!");
        var path = 'users/register';
        // Register user
        this.authService.httpPost(user, path).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                console.log("im here!!");
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    LoginRegisterComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.myForm.get(['userData', 'username']).value,
            password: this.myForm.get(['password']).value,
        };
        console.log(user);
        console.log("login!!");
        var path = "users/authenticate";
        // Authnticate user
        this.authService.httpPost(user, path).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.isLogin = true;
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are logged in successful', { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                console.log("im here!!");
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
    };
    LoginRegisterComponent.prototype.exampleValidator = function (control) {
        if (control.value === 'Example') {
            return { example: true };
        }
        return null;
    };
    LoginRegisterComponent.prototype.errorMessage = function (msg) {
        this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
    };
    LoginRegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-register',
            template: __webpack_require__(764),
            styles: [" .inv {  class: 'hidden'; }"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], LoginRegisterComponent);
    return LoginRegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/login-register.component.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(formBuilder, flashMessage, authService, router) {
        this.formBuilder = formBuilder;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.myForm = formBuilder.group({
            'userData': formBuilder.group({
                'username': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, this.exampleValidator]],
                'email': ['', [
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                    ]],
            }),
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
        this.isNotRegister = true;
    }
    LoginComponent.prototype.toggle = function () {
        this.isNotRegister = !this.isNotRegister;
    };
    LoginComponent.prototype.onRegisterSubmit = function () {
        var user = {
            username: this.myForm.get(['userData', 'username']).value,
            email: this.myForm.get(['userData', 'email']).value,
            password: this.myForm.get(['password']).value,
        };
        console.log(user);
        console.log("im here!!");
        // Register user
        /*this.authService.registerUser(user).subscribe(data => {
         if(data.success){
    
         this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
         //this.router.navigate(['/login']);
         } else {
         console.log("im here!!")
         this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
         //this.router.navigate(['/register']);
         }
    
         });*/
    };
    LoginComponent.prototype.exampleValidator = function (control) {
        if (control.value === 'Example') {
            return { example: true };
        }
        return null;
    };
    LoginComponent.prototype.errorMessage = function (msg) {
        this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(765),
            styles: [" .inv {  class: 'hidden'; }"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/login.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_socket_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessagsComponent = (function () {
    function MessagsComponent(socketService, formBuilder, flashMessage, router) {
        this.socketService = socketService;
        this.formBuilder = formBuilder;
        this.flashMessage = flashMessage;
        this.router = router;
        this.myForm = formBuilder.group({
            'newMessage': ['']
        });
    }
    MessagsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.get().subscribe(function (msg) {
            console.log("in observer");
            console.log(msg.msg);
            if (_this.messages === undefined) {
                _this.messages = msg.msg;
            }
            else {
                _this.messages = _this.messages + ' ' + msg.msg;
            }
        });
    };
    MessagsComponent.prototype.onCreateMessage = function () {
        var newMessage = this.myForm.get('newMessage').value;
        this.socketService.sendMessage(newMessage);
    };
    MessagsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messags',
            template: __webpack_require__(766),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_socket_service__["a" /* SocketService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], MessagsComponent);
    return MessagsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/messags.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateComponent = (function () {
    function CreateComponent(formBuilder, flashMessage, authService, router) {
        this.formBuilder = formBuilder;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.myForm = formBuilder.group({
            'serialNumber': [''],
            'productName': [''],
            'productCategory': [''],
            'weightable': [''],
            'productPrice': [''],
            'productManufacturer': [''],
            'productStoreID': [''],
        });
    }
    CreateComponent.prototype.onCreateProduct = function () {
        var _this = this;
        this.product = new __WEBPACK_IMPORTED_MODULE_5__product__["a" /* Product */](this.myForm.get('serialNumber').value, this.myForm.get('productName').value, this.myForm.get('productCategory').value, this.myForm.get('weightable').value, this.myForm.get('productPrice').value, this.myForm.get('productManufacturer').value, this.myForm.get('productStoreID').value);
        console.log(this.myForm);
        var product = {
            serialNumber: this.myForm.get('serialNumber').value,
            productName: this.myForm.get('productName').value,
            productCategory: this.myForm.get('productCategory').value,
            weightable: this.myForm.get('weightable').value,
            productPrice: this.myForm.get('productPrice').value,
            productManufacturer: this.myForm.get('productManufacturer').value,
            productStoreID: this.myForm.get('productStoreID').value,
        };
        console.log(product);
        console.log("im here!!");
        var path = 'products/create';
        // Register user
        this.authService.httpPost(product, path).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/products/list']);
                _this.flashMessage.show('The product' + product.productName + 'is added', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                console.log("im here!!");
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    CreateComponent.prototype.exampleValidator = function (control) {
        if (control.value === 'Example') {
            return { example: true };
        }
        return null;
    };
    CreateComponent.prototype.errorMessage = function (msg) {
        this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
    };
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(767)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], CreateComponent);
    return CreateComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/create.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service_product_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeleteComponent = (function () {
    function DeleteComponent(router, productService, flashMessage, authService, route) {
        this.router = router;
        this.productService = productService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.route = route;
    }
    DeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.router.params.subscribe(function (params) {
            _this.serial = +params["serial"];
            _this.product = _this.productService.getProductBySerial(_this.serial);
            _this.productService.deleteProduct(_this.product);
            console.log('delete comp ng on init', _this.product);
            _this.deleteProduct(_this.product);
        });
    };
    DeleteComponent.prototype.deleteProduct = function (product) {
        var _this = this;
        var path = 'products/delete';
        var newProduct = {
            serialNumber: product.serial,
            productName: product.name,
            productCategory: product.category,
            weightable: product.weightable,
            productPrice: product.price,
            productManufacturer: product.manufacturer,
            productStoreID: product.storeID,
        };
        this.authService.httpPost(newProduct, path).subscribe(function (data) {
            if (data.success) {
                console.log(data, "product has been deleted");
                _this.route.navigate(['/products/list']);
                _this.flashMessage.show('The product' + newProduct.productName + 'is deleted', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                console.log("didnt  has been deleted ");
            }
        });
    };
    DeleteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete',
            template: __webpack_require__(768)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_product_service_product_service__["a" /* ProductService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], DeleteComponent);
    return DeleteComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/delete.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_product_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = (function () {
    function ListComponent(flashMessage, productService, authService) {
        this.flashMessage = flashMessage;
        this.productService = productService;
        this.authService = authService;
        this.products = new Array;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var path = "products/list";
        console.log('list comp ng oninit');
        this.authService.httpGet(path).subscribe(function (data) {
            if (data.success) {
                _this.products = _this.productService.pasreJasonProductList({ data: data });
                console.log('list comp', _this.products);
                _this.flashMessage.show('Success to bring the products from DB ', { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                console.log("im here!!");
            }
        });
        this.ngOnDestroy();
    };
    ListComponent.prototype.ngOnDestroy = function () {
        this.products = [];
    };
    ListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(769)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_product_service_product_service__["a" /* ProductService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], ListComponent);
    return ListComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/list.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service_product_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchComponent = (function () {
    function SearchComponent(formBuilder, flashMessage, productService, authService, router) {
        this.formBuilder = formBuilder;
        this.flashMessage = flashMessage;
        this.productService = productService;
        this.authService = authService;
        this.router = router;
        this.products = new Array;
        this.myForm = formBuilder.group({
            'productName': [''],
            'productCategory': [''],
            'productPrice': [''],
        });
    }
    SearchComponent.prototype.onSearch = function () {
        var _this = this;
        this.productName = this.myForm.get('productName').value;
        this.productCategory = this.myForm.get('productCategory').value;
        this.productPrice = this.myForm.get('productPrice').value;
        var object = {
            name: this.productName,
            category: this.productCategory,
            price: this.productPrice,
        };
        var path = 'products/search';
        this.authService.httpPost(object, path).subscribe(function (data) {
            if (data.success) {
                _this.products = _this.productService.pasreJasonProductListSearch({ data: data });
                console.log("in In Serach");
                console.log(_this.products);
                _this.flashMessage.show('Success to bring the products from DB ', { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
            }
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        var path = "products/list";
        this.authService.httpGet(path).subscribe(function (data) {
            if (data.success) {
                _this.products = _this.productService.pasreJasonProductListSearch({ data: data });
                console.log('search comp', _this.products);
                _this.flashMessage.show('Success to collect  the products from DB ', { cssClass: 'alert-success', timeout: 5000 });
            }
            else {
                console.log("im here!!");
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 5000 });
            }
        });
        this.ngOnDestroy();
    };
    SearchComponent.prototype.ngOnDestroy = function () {
        this.products = [];
    };
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(770)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_product_service_product_service__["a" /* ProductService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === 'function' && _e) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/search.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service_product_service__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateComponent = (function () {
    function UpdateComponent(route, productService, formBuilder, flashMessage, authService, router) {
        this.route = route;
        this.productService = productService;
        this.formBuilder = formBuilder;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route$ = this.route.params.subscribe(function (params) {
            _this.serial = +params["serial"];
            _this.displayProduct(_this.serial);
            console.log(_this.product);
            _this.myForm = _this.formBuilder.group({
                'serialNumber': [_this.product.serial],
                'productName': [_this.product.name],
                'productCategory': [_this.product.category],
                'weightable': [_this.product.weightable],
                'productPrice': [_this.product.price],
                'productManufacturer': [_this.product.manufacturer],
                'productStoreID': [_this.product.storeID],
            });
        });
    };
    UpdateComponent.prototype.onUpdateProduct = function () {
        var _this = this;
        this.product = new __WEBPACK_IMPORTED_MODULE_2__product__["a" /* Product */](this.myForm.get('serialNumber').value, this.myForm.get('productName').value, this.myForm.get('productCategory').value, this.myForm.get('weightable').value, this.myForm.get('productPrice').value, this.myForm.get('productManufacturer').value, this.myForm.get('productStoreID').value);
        var product = {
            serialNumber: this.myForm.get('serialNumber').value,
            productName: this.myForm.get('productName').value,
            productCategory: this.myForm.get('productCategory').value,
            weightable: this.myForm.get('weightable').value,
            productPrice: this.myForm.get('productPrice').value,
            productManufacturer: this.myForm.get('productManufacturer').value,
            productStoreID: this.myForm.get('productStoreID').value,
        };
        var path = 'products/update';
        // Register user
        this.authService.httpPost(product, path).subscribe(function (data) {
            if (data.success) {
                _this.productService.updateProduct(_this.product);
                _this.router.navigate(['/products/list']);
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    UpdateComponent.prototype.exampleValidator = function (control) {
        if (control.value === 'Example') {
            return { example: true };
        }
        return null;
    };
    UpdateComponent.prototype.errorMessage = function (msg) {
        this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
    };
    UpdateComponent.prototype.displayProduct = function (serial) {
        this.product = this.productService.getProductBySerial(serial);
    };
    UpdateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(771)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_product_service_product_service__["a" /* ProductService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormBuilder */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _f) || Object])
    ], UpdateComponent);
    return UpdateComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/update.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductItemComponent = (function () {
    function ProductItemComponent() {
    }
    ProductItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product__["a" /* Product */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__product__["a" /* Product */]) === 'function' && _a) || Object)
    ], ProductItemComponent.prototype, "product", void 0);
    ProductItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-item',
            template: __webpack_require__(772),
        }), 
        __metadata('design:paramtypes', [])
    ], ProductItemComponent);
    return ProductItemComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/product-item.component.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductListComponent = (function () {
    function ProductListComponent() {
        this.products = new Array;
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(773),
        }), 
        __metadata('design:paramtypes', [])
    ], ProductListComponent);
    return ProductListComponent;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/product-list.component.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var path = 'users/profile';
        this.authService.getProfile(path).subscribe(function (profile) {
            console.log(profile.user);
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(774)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/profile.component.js.map

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, flashMessage, authService, router) {
        this.formBuilder = formBuilder;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.myForm = formBuilder.group({
            'userData': formBuilder.group({
                'username': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required, this.exampleValidator]],
                'email': ['', [
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                    ]],
            }),
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
        });
        this.isNotRegister = true;
    }
    RegisterComponent.prototype.toggle = function () {
        this.isNotRegister = !this.isNotRegister;
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var user = {
            username: this.myForm.get(['userData', 'username']).value,
            email: this.myForm.get(['userData', 'email']).value,
            password: this.myForm.get(['password']).value,
        };
        console.log(user);
        console.log("im here!!");
        // Register user
        /*this.authService.registerUser(user).subscribe(data => {
         if(data.success){
    
         this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
         //this.router.navigate(['/login']);
         } else {
         console.log("im here!!")
         this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
         //this.router.navigate(['/register']);
         }
    
         });*/
    };
    RegisterComponent.prototype.exampleValidator = function (control) {
        if (control.value === 'Example') {
            return { example: true };
        }
        return null;
    };
    RegisterComponent.prototype.errorMessage = function (msg) {
        this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(775),
            styles: [" .inv {  class: 'hidden'; }"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/register.component.js.map

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Init; });
var Init = (function () {
    function Init() {
    }
    Init.prototype.load = function () {
        if (localStorage.getItem('markers') == null || localStorage.getItem('markers') === undefined) {
            console.log('No markers found... creating...');
            var markers = [
                {
                    name: 'Company One',
                    lat: 42.525588,
                    lng: -71.018029,
                    draggable: true
                },
                {
                    name: 'Company Two',
                    lat: 42.868164,
                    lng: -70.889071,
                    draggable: true
                },
                {
                    name: 'Company Three',
                    lat: 42.858279,
                    lng: -71.930498,
                    draggable: false
                }
            ];
            localStorage.setItem('markers', JSON.stringify(markers));
        }
        else {
            console.log('Loading markers...');
        }
    };
    return Init;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/init-markers.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_google_maps_google_map_service__ = __webpack_require__(357);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopsMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShopsMapComponent = (function () {
    function ShopsMapComponent(googleMapService, authService) {
        this.googleMapService = googleMapService;
        this.authService = authService;
        // Zoom level
        this.zoom = 10;
        //Start Position
        this.lat = 31.973001;
        this.lng = 34.792501;
        //Markers
        this.markers = [];
        this.markers = this.googleMapService.getMarkers();
    }
    ShopsMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var path = "shops/list";
        this.authService.httpGet(path).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this.markers = _this.googleMapService.pasreJasonShopsList(data);
            }
            else {
                console.log("im here!!");
            }
        });
    };
    ShopsMapComponent.prototype.clickedMarker = function (marker, index) {
        console.log('Clicked Marker: ' + marker.name + ' at index ' + index);
    };
    ShopsMapComponent.prototype.mapClicked = function ($event) {
        var newMarker = {
            name: 'Untitled',
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: false
        };
        this.markers.push(newMarker);
    };
    ShopsMapComponent.prototype.markerDragEnd = function (marker, $event) {
        console.log('dragEnd', marker, $event);
        var updMarker = {
            name: marker.name,
            lat: parseFloat(marker.lat),
            lng: parseFloat(marker.lng),
            draggable: false
        };
        var newLat = $event.coords.lat;
        var newLng = $event.coords.lng;
        this.googleMapService.updateMarker(updMarker, newLat, newLng);
    };
    ShopsMapComponent.prototype.addMarker = function () {
        console.log('Adding Marker');
        if (this.markerDraggable == 'yes') {
            var isDraggable = true;
        }
        else {
            var isDraggable = false;
        }
        var newMarker = {
            name: this.markerName,
            lat: parseFloat(this.markerLat),
            lng: parseFloat(this.markerLng),
            draggable: isDraggable
        };
        this.markers.push(newMarker);
        this.googleMapService.addMarker(newMarker);
    };
    ShopsMapComponent.prototype.removeMarker = function (marker) {
        console.log('Removing marker...');
        for (var i = 0; i < this.markers.length; i++) {
            if (marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng) {
                this.markers.splice(i, 1);
            }
        }
        this.googleMapService.removeMarker(marker);
    };
    ShopsMapComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shops-map',
            template: __webpack_require__(776)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_google_maps_google_map_service__["a" /* GooglMapService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_google_maps_google_map_service__["a" /* GooglMapService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], ShopsMapComponent);
    return ShopsMapComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/shops-map.component.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StatisticsComponent = (function () {
    function StatisticsComponent(authService) {
        this.authService = authService;
        this.pieChartType = 'pie';
    }
    // events
    StatisticsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    StatisticsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pieChartLabels = ['1', '2'];
        this.pieChartData = [12, 20];
        var path = 'products/statistics';
        console.log('in get statistics');
        this.authService.httpGet(path).subscribe(function (data) {
            if (data.success) {
                var i = 0;
                console.log(data);
                for (i; i < data.callback.length; i++) {
                    _this.pieChartLabels[i] = data.callback[i]._id.toString();
                    _this.pieChartData[i] = data.callback[i].count;
                }
                console.log(_this.pieChartLabels);
                console.log(_this.pieChartData);
            }
            else {
                console.log("im here!!");
            }
        });
    };
    StatisticsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var path = 'products/statistics';
        console.log('in get statistics');
        this.authService.httpGet(path).subscribe(function (data) {
            if (data.success) {
                var i = 0;
                console.log(data);
                for (i; i < data.callback.length; i++) {
                    _this.pieChartLabels[i] = data.callback[i]._id;
                    _this.pieChartData[i] = data.callback[i].count;
                }
                console.log(_this.pieChartLabels);
                console.log(_this.pieChartData);
            }
            else {
                console.log("im here!!");
            }
        });
    };
    StatisticsComponent.prototype.getStatistics = function () {
    };
    StatisticsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(777),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], StatisticsComponent);
    return StatisticsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/statistics.component.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CanvasDirective = (function () {
    function CanvasDirective() {
    }
    CanvasDirective.prototype.onLoad = function (img) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.height = 500;
        canvas.width = 1000;
        context.drawImage(img, 0, 0);
        context.font = "100px impact";
        context.textAlign = 'center';
        context.fillStyle = "#ff0b43";
        context.fillText(this.text, canvas.width / 2, canvas.height * 0.5);
        img.src = canvas.toDataURL();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CanvasDirective.prototype, "text", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('load', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], CanvasDirective.prototype, "onLoad", null);
    CanvasDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appCanvas]'
        }), 
        __metadata('design:paramtypes', [])
    ], CanvasDirective);
    return CanvasDirective;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/canvas.directive.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/environment.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/auth.guards.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.username == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/validate.service.js.map

/***/ }),

/***/ 757:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-messags></app-messags>\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ 758:
/***/ (function(module, exports) {

module.exports = "<aside *ngFor=\"let item of items\">\n  <div class=\"alert alert-success\"  role=\"alert\" [class.hidden]=\"item.show\" (click)=\"push(item)\" >{{item.msg}} {{item.show}}</div>\n</aside>\n"

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <div class = \"app-body-background-img\">\n      <img class=\"img-responsive\" [src]=image [text]=\"'Shopping with friends'\" appCanvas >\n    </div>\n    <div class=\"multiple-column\">\n      <section>\n        <h1> Channel 10 report </h1>\n        A moment before the exit - channel 10 wanted\n          to interview us.....\n      </section>\n      <video width=\"320\" height=\"240\" controls>\n        <source src=\"./videos/video.mp4\" type=\"video/mp4\">\n      </video>\n      <div class=\"border-radius\">Our Mission is .... .</div>\n  </div>\n  <div class=\"app-body-background-title\">\n  </div>\n</div>\n"

/***/ }),

/***/ 760:
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"footer-partners-text\">\n    <h1 id=\"content\" [@movePanel]='state'> Our Partners</h1>\n  </div>\n\n  <br>\n  <div class=\"footers-partners-logos\">\n    <div class=\"container\">\n      <div class=\"col-md-4\">\n        <img src=\"./images/footer1.png\" height=\"200\" width=\"200\" alt=\"\">\n        <img src=\"./images/footer2.png\" height=\"200\" width=\"200\" alt=\"\">\n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"./images/footer3.png\" height=\"200\" width=\"200\" alt=\"\">\n        <img src=\"./images/footer4.png\" height=\"200\" width=\"200\" alt=\"\">\n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"./images/footer5.png\" height=\"200\" width=\"200\" alt=\"\">\n      </div>\n      <div class=\"col-md-4\">\n        <img src=\"./images/footer6.png\" height=\"100\" width=\"100\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 761:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand-logo-img\" ><img src=\"./images/home.png\" alt=\"\"></a>\n      <a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/home']\">Home</a>\n\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div  class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a *ngIf=\"!authService.loggedIn()\" data-target=\"#loginModal\" data-toggle=\"modal\">Login \\ Register</a></li>\n        <li><a *ngIf=\"authService.loggedIn()\" (click)=\"onLogOutClick()\">Logout</a></li>\n        <li><a *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/profile']\" >Profile</a></li>\n        <li class=\"dropdown\">\n          <a *ngIf=\"authService.loggedIn()\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['/products/list']\">Products</a></li>\n            <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['/products/search']\">Search</a></li>\n            <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['/shops-map']\">Google Map</a></li>\n            <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['/products/statistics']\">Statistics</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n\n<app-login-register></app-login-register>\n"

/***/ }),

/***/ 762:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

module.exports = "\n<app-body></app-body>\n\n"

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\">\n        <div class=\"modal-dialog modal-sm\">\n          <div class=\"modal-content\">\n            <div class=\"model-header\">\n              <button class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\"> Login / Register </h4>\n            </div>\n\n            <div class=\"modal-body\">\n              <form >\n\n                <div [formGroup]=\"myForm\">\n                  <div formGroupName=\"userData\">\n                    <div class=\"form-group\">\n                      <label for=\"username\"> User Name</label>\n                      <input type=\"text\"  class=\"form-control\" id=\"username\"\n                             placeholder=\"Enter username\" formControlName=\"username\">\n                    </div>\n                    <div  class=\"form-group\">\n                      <label [class.hidden]=\"isNotRegister\" for=\"email\">Email Address</label>\n                      <input [class.hidden]=\"isNotRegister\" type=\"email\"  class=\"form-control\" id=\"email\"\n                             placeholder=\"Enter Email\" formControlName=\"email\">\n                      <div  *ngIf=\"!myForm.get(['userData', 'email']).valid\" >\n\n\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"password\">password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"password\"\n                           placeholder=\"Enter password\" formControlName=\"password\">\n                  </div>\n                </div>\n\n            <div class=\"modal-footer\">\n              <div class=\"forgetpass\">\n                <a href=\"#\">forget your password? </a>\n              </div>\n              <br>\n              <input type=\"submit\" class=\"btn btn-danger\" [class.hidden]=\"!isNotRegister\" (click)=\"onLoginSubmit()\"value=\"Login\">\n              <button class=\"btn btn-danger\" [class.hidden]=\"!isNotRegister\" (click)=\"toggle()\">Go To Register</button>\n              <input type=\"submit\" class=\"btn btn-danger\" [class.hidden]=\"isNotRegister\" (click)=\"onRegisterSubmit()\" value=\"Register\">\n              <button class=\"btn btn-danger\" [class.hidden]=\"isNotRegister\" (click)=\"toggle()\">GoBack</button>\n            </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ 765:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\">\n        <div class=\"modal-dialog modal-sm\">\n          <div class=\"modal-content\">\n            <div class=\"model-header\">\n              <button class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\"> Login </h4>\n            </div>\n\n            <div class=\"modal-body\">\n              <form (ngSubmit)=\"onRegisterSubmit()\">\n\n                <div [formGroup]=\"myForm\">\n                  <div formGroupName=\"userData\">\n                    <div class=\"form-group\">\n                      <label for=\"username\"> User Name</label>\n                      <input type=\"text\"  class=\"form-control\" id=\"username\"\n                             placeholder=\"Enter username\" formControlName=\"username\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label [class.hidden]=\"isNotRegister\" for=\"email\">Email Address</label>\n                      <input [class.hidden]=\"isNotRegister\" type=\"email\"  class=\"form-control\" id=\"email\"\n                             placeholder=\"Enter Email\" formControlName=\"email\">\n                      <div  *ngIf=\"!myForm.get(['userData', 'email']).valid\" >\n\n\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"password\">password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"password\"\n                           placeholder=\"Enter password\" formControlName=\"password\">\n                  </div>\n\n                </div>\n\n                <div class=\"modal-footer\">\n                  <div class=\"forgetpass\">\n                    <a href=\"#\">forget your password? </a>\n                  </div>\n                  <br>\n                  <button type=\"submit\" class=\"btn btn-danger\" [class.hidden]=\"!isNotRegister\">Login</button>\n                  <button class=\"btn btn-danger\" [class.hidden]=\"!isNotRegister\" (click)=\"toggle()\">Go To Register</button>\n                  <input type=\"submit\" class=\"btn btn-danger\" [class.hidden]=\"isNotRegister\" value=\"Register\">\n                  <button class=\"btn btn-danger\" [class.hidden]=\"isNotRegister\" (click)=\"toggle()\">GoBack</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 766:
/***/ (function(module, exports) {

module.exports = "<marquee  behavior=\"scroll\" direction=\"left\"> {{messages}} </marquee>\n<div class=\"container\">\n  <form (ngSubmit)=\"onCreateMessage()\">\n    <div [formGroup]=\"myForm\">\n      <div class=\"form-group\">\n        <label for=\"newMessage\"> newMessage</label>\n        <input type=\"text\"  class=\"form-control\" id=\"newMessage\"\n               placeholder=\"Enter newMessage\" formControlName=\"newMessage\">\n      </div>\n      <input type=\"submit\" class=\"btn btn-danger\" value=\"Submit\">\n    </div>\n  </form>\n</div>\n\n\n"

/***/ }),

/***/ 767:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form (ngSubmit)=\"onCreateProduct()\">\n\n    <div [formGroup]=\"myForm\">\n\n      <div class=\"form-group\">\n        <label for=\"serialNumber\"> Serial Number</label>\n        <input type=\"text\"  class=\"form-control\" id=\"serialNumber\"\n               placeholder=\"Enter serialNumber\" formControlName=\"serialNumber\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"productName\"> Product Name</label>\n        <input type=\"text\"  class=\"form-control\" id=\"productName\"\n               placeholder=\"Enter productName\" formControlName=\"productName\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"productCategory\">Product Category</label>\n        <input type=\"text\"  class=\"form-control\" id=\"productCategory\"\n               placeholder=\"Enter productCategory\" formControlName=\"productCategory\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"weightable\"> Weightable</label>\n        <input type=\"text\"  class=\"form-control\" id=\"weightable\"\n               placeholder=\"Enter weightable\" formControlName=\"weightable\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"productPrice\">Product Price</label>\n        <input type=\"text\"  class=\"form-control\" id=\"productPrice\"\n               placeholder=\"Enter productPrice\" formControlName=\"productPrice\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"productManufacturer\">Product Manufacturer</label>\n        <input type=\"text\"  class=\"form-control\" id=\"productManufacturer\"\n               placeholder=\"Enter productManufacturer\" formControlName=\"productManufacturer\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"productStoreID\"> Product Store ID</label>\n        <input type=\"text\"  class=\"form-control\" id=\"productStoreID\"\n               placeholder=\"Enter productStoreID\" formControlName=\"productStoreID\">\n      </div>\n\n      <input type=\"submit\" class=\"btn btn-danger\" [class.hidden]=\"isNotRegister\"  value=\"Submit\">\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

module.exports = "<p>\n  delete works!\n</p>\n"

/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div  class=\"col-xs-8\">\n    <ul  class=\"list-group\">\n      <app-product-item  *ngFor=\"let p of products\" [product]=\"p\" >\n\n\n      </app-product-item>\n    </ul>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/products/create']\" class=\"btn btn-success\">Add product</a>\n    </div>\n  </div>\n  <div class=\"col-xs-4\">\n    <app-aside>\n\n    </app-aside>\n  </div>\n</div>\n"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"container\">\n    <form (ngSubmit)=\"onSearch()\">\n      <div [formGroup]=\"myForm\">\n        <div class=\"form-group\">\n          <label for=\"productName\"> Product Name</label>\n          <input type=\"text\"  class=\"form-control\" id=\"productName\" placeholder=\"Enter productName\" formControlName=\"productName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"productCategory\">Product Category</label>\n          <input type=\"text\"  class=\"form-control\" id=\"productCategory\"\n                 placeholder=\"Enter productCategory\" formControlName=\"productCategory\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"productPrice\">Product Price</label>\n          <input type=\"text\"  class=\"form-control\" id=\"productPrice\"\n                 placeholder=\"Enter productPrice\" formControlName=\"productPrice\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-danger\"value=\"Search\">\n      </div>\n    </form>\n  </div>\n  <div  class=\"col-xs-8\">\n    <ul  class=\"list-group\">\n      <app-product-item  *ngFor=\"let p of products\" [product]=\"p\" >\n      </app-product-item>\n    </ul>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/products/create']\" class=\"btn btn-success\">Add product</a>\n    </div>\n  </div>\n  <div class=\"col-xs-4\">\n    <aside>\n\n    </aside>\n  </div>\n</div>\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form (ngSubmit)=\"onUpdateProduct()\">\n\n    <div [formGroup]=\"myForm\">\n\n      <div class=\"form-group\" hidden>\n        <label for=\"serialNumber\"> Serial Number</label>\n        <input type=\"text\"  class=\"form-control\" id=\"serialNumber\"\n               placeholder=\"Enter serialNumber\" formControlName=\"serialNumber\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"productName\"> Product Name</label>\n        <input type=\"text\"  class=\"form-control\" id=\"productName\"\n               placeholder=\"Enter productName\" formControlName=\"productName\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"productCategory\">Product Category</label>\n        <input type=\"text\"  class=\"form-control\" id=\"productCategory\"\n               placeholder=\"Enter productCategory\" formControlName=\"productCategory\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"weightable\"> Weightable</label>\n        <input type=\"text\"  class=\"form-control\" id=\"weightable\"\n               placeholder=\"Enter weightable\" formControlName=\"weightable\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"productPrice\">Product Price</label>\n        <input type=\"text\"  class=\"form-control\" id=\"productPrice\"\n               placeholder=\"Enter productPrice\" formControlName=\"productPrice\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"productManufacturer\">Product Manufacturer</label>\n        <input type=\"text\"  class=\"form-control\" id=\"productManufacturer\"\n               placeholder=\"Enter productManufacturer\" formControlName=\"productManufacturer\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"productStoreID\"> Product Store ID</label>\n        <input type=\"text\"  class=\"form-control\" id=\"productStoreID\"\n               placeholder=\"Enter productStoreID\" formControlName=\"productStoreID\">\n      </div>\n      <input  type=\"submit\" class=\"btn btn-danger\" [class.hidden]=\"isNotRegister\"  value=\"Submit\">\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "<a  class=\"list-group-item clearfix\">\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\"> {{product.name}}</h4>\n    <p class=\"list-group-item-text\"> {{product.category}}</p>\n    <p class=\"list-group-item-text\"> {{product.quantity}}</p>\n  </div>\n  <div  class=\"pull-right\">\n    <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/products/update',product.serial]\" class=\"btn btn-success\" >Edit</a>\n    <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/products/delete',product.serial]\"  class=\"btn btn-success\" >Delete</a>\n  </div>\n</a>\n"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-8\">\n    <ul class=\"list-group\">\n      <app-product-item *ngFor=\"let p of products\" [product]=\"p\" ></app-product-item>\n    </ul>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <a [routerLinkActive]=\"['active']\" [routerLink]=\"['/products/create']\" class=\"btn btn-success\">Add product</a>\n    </div>\n  </div>\n  <div class=\"col-xs-4\">\n    <aside>\n\n    </aside>\n  </div>\n</div>\n"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\">\n        <div class=\"modal-dialog modal-sm\">\n          <div class=\"modal-content\">\n            <div class=\"model-header\">\n              <button class=\"close\" data-dismiss=\"modal\">&times;</button>\n              <h4 class=\"modal-title\"> Login / Register </h4>\n            </div>\n\n            <div class=\"modal-body\">\n              <div  *ngIf=\"(click())\" >\n              <form (ngSubmit)=\"onRegisterSubmit()\">\n\n                <div [formGroup]=\"myForm\">\n                  <div formGroupName=\"userData\">\n                    <div class=\"form-group\">\n                      <label for=\"username\"> User Name</label>\n                      <input type=\"text\"  class=\"form-control\" id=\"username\"\n                             placeholder=\"Enter username\" formControlName=\"username\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"email\">Email Address</label>\n                      <input type=\"email\"  class=\"form-control\" id=\"email\"\n                             placeholder=\"Enter Email\" formControlName=\"email\">\n                      <div  *ngIf=\"!myForm.get(['userData', 'email']).valid\" >\n\n\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <label for=\"password\">password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"password\"\n                           placeholder=\"Enter password\" formControlName=\"password\">\n                  </div>\n                  <input type=\"submit\" class=\"btn btn-danger\" [class.hidden]=\"isNotRegister\"  value=\"Register\">\n                </div>\n              </form>\n              </div>\n            </div>\n            <div class=\"modal-footer\">\n              <div class=\"forgetpass\">\n                <a href=\"#\">forget your password? </a>\n              </div>\n              <br>\n              <button type=\"submit\" class=\"btn btn-danger\" [class.hidden]=\"!isNotRegister\">Login</button>\n              <button class=\"btn btn-danger\" [class.hidden]=\"!isNotRegister\" (click)=\"toggle()\">Go To Register</button>\n              <input type=\"submit\" class=\"btn btn-danger\" [class.hidden]=\"isNotRegister\" value=\"Register\">\n              <button class=\"btn btn-danger\" [class.hidden]=\"isNotRegister\" (click)=\"toggle()\">GoBack</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"map\">\n        <sebm-google-map\n          [latitude]=\"lat\"\n          [longitude]=\"lng\"\n          [zoom]=\"zoom\"\n          [disableDefaultUI]=\"false\"\n          [zoomControl]=\"false\"\n          (mapClick)=\"mapClicked($event)\"\n        >\n\n          <sebm-google-map-marker\n            *ngFor=\"let m of markers;let i = index\"\n            (markerClick)=\"clickedMarker(m, i)\"\n            [latitude]=\"m.lat\"\n            [longitude]=\"m.lng\"\n            [markerDraggable]=\"m.draggable\"\n            (dragEnd)=\"markerDragEnd(m, $event)\"\n\n\n          >\n\n            <sebm-google-map-info-window>\n              <strong>{{m.name}}</strong>\n              <br>\n              <a class=\"delete\" (click)=\"removeMarker(m)\">Delete</a>\n            </sebm-google-map-info-window>\n          </sebm-google-map-marker>\n        </sebm-google-map>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Add New Marker</h3>\n      </div>\n      <div class=\"panel-body\">\n        <form (submit)=\"addMarker()\" >\n          <label>Location Name</label>\n          <input type=\"text\" [(ngModel)]=\"markerName\" name=\"markerName\">\n\n          <label>Latitude</label>\n          <input type=\"text\" [(ngModel)]=\"markerLat\" name=\"markerLat\">\n\n          <label>Longitude</label>\n          <input type=\"text\" [(ngModel)]=\"markerLng\" name=\"markerLng\">\n\n          <label>Draggable</label>\n          <select [(ngModel)]=\"markerDraggable\" name=\"markerDraggable\">\n            <option value=\"no\">No</option>\n            <option value=\"yes\">Yes</option>\n          </select>\n          <input type=\"submit\" value=\"Map it!\">\n        </form>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "<div  style=\"display: block\">\n  <canvas  baseChart\n          [data]=\"pieChartData\"\n          [labels]=\"pieChartLabels\"\n          [chartType]=\"pieChartType\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\"></canvas>\n</div>\n<input class=\"btn btn-success\" type=\"submit\" value=\"get Statistics\" (click)=\"getStatistics()\">\n"

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 805:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(433);


/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_products_product__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = (function () {
    function ProductService() {
        this.newProductList = new Array;
    }
    ProductService.prototype.pasrseJsonSingleProduct = function (product) {
        product = new __WEBPACK_IMPORTED_MODULE_1__app_products_product__["a" /* Product */](product.serialNumber, product.productName, product.productCategory, product.weightable, product.productPrice, product.productManufacturer, product.productStoreID);
        return product;
    };
    ProductService.prototype.pasreJasonProductList = function (productList) {
        var newProduct;
        var i = 0;
        console.log(productList.data.callback);
        for (var _i = 0, _a = productList.data.callback; _i < _a.length; _i++) {
            var product = _a[_i];
            newProduct = this.pasrseJsonSingleProduct(product);
            this.newProductList[i] = newProduct;
            i++;
        }
        return this.newProductList;
    };
    ProductService.prototype.deleteProduct = function (deleteProduct) {
        var i = 0;
        for (var _i = 0, _a = this.newProductList; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.serial == deleteProduct.serial) {
                this.newProductList.splice(i, 1);
            }
            i++;
        }
    };
    ProductService.prototype.updateProduct = function (updateProduct) {
        var i = 0;
        for (var _i = 0, _a = this.newProductList; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.serial == updateProduct.serial) {
                this.newProductList[i] = updateProduct;
            }
            i++;
        }
    };
    ProductService.prototype.getProductBySerial = function (serial) {
        for (var _i = 0, _a = this.newProductList; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.serial == serial) {
                return product;
            }
        }
        return undefined;
    };
    ProductService.prototype.pasreJasonProductListSearch = function (productList) {
        var list = new Array;
        var newProduct;
        var i = 0;
        console.log(productList.data.callback);
        for (var _i = 0, _a = productList.data.callback; _i < _a.length; _i++) {
            var product = _a[_i];
            newProduct = this.pasrseJsonSingleProduct(product);
            list[i] = newProduct;
            i++;
        }
        console.log("in pasreJasonProductListSearch");
        console.log(list);
        return list;
    };
    ProductService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ProductService);
    return ProductService;
}());
//# sourceMappingURL=C:/Users/Dvir/WebstormProjects/angular proj/28.3 - 1228/Super/ClientSide/src/product.service.js.map

/***/ })

},[805]);
//# sourceMappingURL=main.bundle.map