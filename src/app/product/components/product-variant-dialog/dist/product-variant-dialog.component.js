"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ProductVariantDialogComponent = /** @class */ (function () {
    function ProductVariantDialogComponent(dialogService) {
        this.dialogService = dialogService;
        this.variants = [];
        this.formSubmitted = new core_1.EventEmitter();
        this.selected = new core_1.EventEmitter();
        this.selectedVariantIndex = -1;
        this.count = 1;
    }
    ProductVariantDialogComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ProductVariantDialogComponent.prototype, "price", {
        get: function () {
            if (this.variants.length === 0 || this.selectedVariantIndex < 0) {
                return 0;
            }
            return this.variants[this.selectedVariantIndex].price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductVariantDialogComponent.prototype, "productImage", {
        get: function () {
            return this.selectedVariantIndex < 0
                ? this.variants[0].product.imageUrl
                : this.variants[this.selectedVariantIndex].product.imageUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductVariantDialogComponent.prototype, "selectedVariantName", {
        get: function () {
            return this.selectedVariantIndex < 0
                ? ''
                : this.variants[this.selectedVariantIndex].name;
        },
        enumerable: true,
        configurable: true
    });
    ProductVariantDialogComponent.prototype.handleSelection = function (idx) {
        this.selectedVariantIndex = idx;
        this.selected.emit(this.selectedVariantIndex);
    };
    ProductVariantDialogComponent.prototype.handleConfirm = function () {
        if (this.selectedVariantIndex < 0 || this.count === 0) {
            return;
        }
        this.formSubmitted.emit({
            variant: this.variants[this.selectedVariantIndex],
            count: this.count
        });
        this.dialogService.close();
    };
    ProductVariantDialogComponent.prototype.handleAmountChange = function (count) {
        this.count = count;
    };
    __decorate([
        core_1.Input()
    ], ProductVariantDialogComponent.prototype, "variants");
    __decorate([
        core_1.Output()
    ], ProductVariantDialogComponent.prototype, "formSubmitted");
    __decorate([
        core_1.Output()
    ], ProductVariantDialogComponent.prototype, "selected");
    __decorate([
        core_1.Input()
    ], ProductVariantDialogComponent.prototype, "selectedVariantIndex");
    ProductVariantDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-product-variant-dialog',
            templateUrl: './product-variant-dialog.component.html',
            styleUrls: ['./product-variant-dialog.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], ProductVariantDialogComponent);
    return ProductVariantDialogComponent;
}());
exports.ProductVariantDialogComponent = ProductVariantDialogComponent;
