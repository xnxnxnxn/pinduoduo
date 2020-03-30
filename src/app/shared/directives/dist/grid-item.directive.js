"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var GridItemDirective = /** @class */ (function () {
    function GridItemDirective() {
        this.display = 'grid';
        this.template = "'image' 'title'";
        this.align = 'center';
        this.width = '4rem';
    }
    __decorate([
        core_1.HostBinding('style.display')
    ], GridItemDirective.prototype, "display");
    __decorate([
        core_1.HostBinding('style.grid-template-areas')
    ], GridItemDirective.prototype, "template");
    __decorate([
        core_1.HostBinding('style.place-items')
    ], GridItemDirective.prototype, "align");
    __decorate([
        core_1.HostBinding('style.width')
    ], GridItemDirective.prototype, "width");
    GridItemDirective = __decorate([
        core_1.Directive({
            // tslint:disable-next-line: directive-selector
            selector: '[gridItem]'
        })
    ], GridItemDirective);
    return GridItemDirective;
}());
exports.GridItemDirective = GridItemDirective;
