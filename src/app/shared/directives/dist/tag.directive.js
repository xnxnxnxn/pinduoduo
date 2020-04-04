"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var TagDirective = /** @class */ (function () {
    function TagDirective() {
        this.tagBgColor = '#faefe3';
        this.tagColor = '#ca516a';
        this.tagSize = '0.8rem';
        this.tagPadding = '3px';
        this.tagRadius = '0';
    }
    __decorate([
        core_1.Input(), core_1.HostBinding('style.background-color')
    ], TagDirective.prototype, "tagBgColor");
    __decorate([
        core_1.Input(), core_1.HostBinding('style.color')
    ], TagDirective.prototype, "tagColor");
    __decorate([
        core_1.Input(), core_1.HostBinding('style.font-size')
    ], TagDirective.prototype, "tagSize");
    __decorate([
        core_1.Input(), core_1.HostBinding('style.padding')
    ], TagDirective.prototype, "tagPadding");
    __decorate([
        core_1.Input(), core_1.HostBinding('style.border-radius')
    ], TagDirective.prototype, "tagRadius");
    TagDirective = __decorate([
        core_1.Directive({
            selector: '[appTag]'
        })
    ], TagDirective);
    return TagDirective;
}());
exports.TagDirective = TagDirective;
