"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var product_routing_module_1 = require("./product-routing.module");
var shared_module_1 = require("../shared/shared.module");
var product_container_component_1 = require("./components/product-container/product-container.component");
var common_1 = require("@angular/common");
var group_item_component_1 = require("./components/group-item/group-item.component");
var group_short_list_component_1 = require("./components/group-short-list/group-short-list.component");
var components_1 = require("./components");
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            declarations: [
                product_container_component_1.ProductContainerComponent,
                group_item_component_1.GroupItemComponent,
                group_short_list_component_1.GroupShortListComponent,
                components_1.ProductVariantDialogComponent,
                components_1.ProductAmountComponent,
                components_1.PaymentComponent,
                components_1.ConfirmOrderComponent
            ],
            imports: [
                shared_module_1.SharedModule,
                product_routing_module_1.ProductRoutingModule,
                common_1.CommonModule
            ],
            entryComponents: [components_1.ProductVariantDialogComponent]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
