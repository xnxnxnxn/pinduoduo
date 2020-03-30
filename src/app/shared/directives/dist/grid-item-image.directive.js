"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var GridItemImageDirective = /** @class */ (function () {
    function GridItemImageDirective(elr, renderer) {
        this.elr = elr;
        this.renderer = renderer;
        this.appGridItemImage = '2rem';
    }
    GridItemImageDirective.prototype.ngOnInit = function () {
        // 声明自己占据模版中的 image 区块
        this.setStyle('grid-area', 'image');
        this.setStyle('width', this.appGridItemImage);
        this.setStyle('height', this.appGridItemImage);
        this.setStyle('object-fit', 'cover');
    };
    GridItemImageDirective.prototype.setStyle = function (styleName, styleValue) {
        this.renderer.setStyle(this.elr.nativeElement, styleName, styleValue);
    };
    GridItemImageDirective.prototype.handleClick = function (ev) {
        console.log(ev);
    };
    __decorate([
        core_1.Input()
    ], GridItemImageDirective.prototype, "appGridItemImage");
    __decorate([
        core_1.HostListener('click', ['$event.target'])
    ], GridItemImageDirective.prototype, "handleClick");
    GridItemImageDirective = __decorate([
        core_1.Directive({
            // tslint:disable-next-line: directive-selector
            selector: '[gridItemImage]'
        })
    ], GridItemImageDirective);
    return GridItemImageDirective;
}());
exports.GridItemImageDirective = GridItemImageDirective;
