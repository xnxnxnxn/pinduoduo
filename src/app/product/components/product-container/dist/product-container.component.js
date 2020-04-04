"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var product_variant_dialog_1 = require("../product-variant-dialog");
var ProductContainerComponent = /** @class */ (function () {
    function ProductContainerComponent(route, router, orderService, dialogService) {
        this.route = route;
        this.router = router;
        this.orderService = orderService;
        this.dialogService = dialogService;
        this.selectedIndex = 0;
        this.subs = [];
    }
    ProductContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var productId$ = this.route.paramMap.pipe(operators_1.filter(function (params) { return params.has('productId'); }), operators_1.map(function (params) { return params.get('productId'); }));
        this.variants$ = productId$.pipe(operators_1.switchMap(function (productId) { return _this.orderService.getProductVariantsByProductId(productId); }));
    };
    ProductContainerComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
        this.subs = [];
    };
    ProductContainerComponent.prototype.handleDirectBuy = function (variants) { };
    ProductContainerComponent.prototype.handleGroupBuy = function (variants) {
        var _this = this;
        var top = 40;
        // 传入 Output，EventEmitter 其实就是一个 Subject
        var formSubmitted = new core_1.EventEmitter();
        this.subs.push(formSubmitted.subscribe(function (ev) {
            _this.dialogService.saveData(ev);
            _this.router.navigate(['/orders', 'confirm']);
        }));
        var selected = new core_1.EventEmitter();
        this.subs.push(selected.subscribe(function (idx) {
            console.log(idx);
            _this.selectedIndex = idx;
        }));
        this.dialogService.open(product_variant_dialog_1.ProductVariantDialogComponent, {
            // 如果 key 和 value 是一个名字，直接写就可以
            inputs: {
                variants: variants,
                selectedVariantIndex: this.selectedIndex
            },
            outputs: { formSubmitted: formSubmitted, selected: selected },
            position: {
                top: top + "%",
                left: '50%',
                width: '100%',
                height: 100 - top + "%"
            }
        });
    };
    ProductContainerComponent = __decorate([
        core_1.Component({
            selector: 'app-product-container',
            templateUrl: './product-container.component.html',
            styleUrls: ['./product-container.component.less'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], ProductContainerComponent);
    return ProductContainerComponent;
}());
exports.ProductContainerComponent = ProductContainerComponent;
