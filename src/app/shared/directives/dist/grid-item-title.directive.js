"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var GridItemTitleDirective = /** @class */ (function () {
    function GridItemTitleDirective() {
        this.gridItemTitle = '0.5rem';
        this.area = 'title';
        this.wrap = 'nowrap';
    }
    __decorate([
        core_1.HostBinding('style.font-size'), core_1.Input()
    ], GridItemTitleDirective.prototype, "gridItemTitle");
    __decorate([
        core_1.HostBinding('style.grid-area')
    ], GridItemTitleDirective.prototype, "area");
    __decorate([
        core_1.HostBinding('style.white-space')
    ], GridItemTitleDirective.prototype, "wrap");
    GridItemTitleDirective = __decorate([
        core_1.Directive({
            // tslint:disable-next-line: directive-selector
            selector: '[gridItemTitle]'
        })
    ], GridItemTitleDirective);
    return GridItemTitleDirective;
}());
exports.GridItemTitleDirective = GridItemTitleDirective;
