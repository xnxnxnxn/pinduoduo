"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, dialogService) {
        this.router = router;
        this.dialogService = dialogService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedIndex$ = this.router.events.pipe(operators_1.filter(function (ev) { return ev instanceof router_1.NavigationEnd; }), operators_1.map(function (ev) {
            var arr = ev.url.split('/');
            return arr.length > 1 ? arr[1] : 'home';
        }), operators_1.map(function (tab) { return _this.getSelectedIndex(tab); }));
    };
    AppComponent.prototype.handleTabSelect = function (tab) {
        this.router.navigate([tab.link]);
    };
    AppComponent.prototype.getSelectedIndex = function (tab) {
        return tab === 'recommend'
            ? 1
            : tab === 'category'
                ? 2
                : tab === 'chat'
                    ? 3
                    : tab === 'my'
                        ? 4
                        : 0;
    };
    AppComponent.prototype.removeDialog = function () {
        this.dialogService.close();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.less']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
