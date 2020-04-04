"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var components_1 = require("./components");
var directives_1 = require("./directives");
var grid_item_directive_1 = require("./directives/grid-item.directive");
var pipes_1 = require("./pipes");
var count_down_component_1 = require("./components/count-down/count-down.component");
var footer_component_1 = require("./components/footer/footer.component");
var vertical_grid_component_1 = require("./components/vertical-grid/vertical-grid.component");
var product_card_component_1 = require("./components/product-card/product-card.component");
var tag_directive_1 = require("./directives/tag.directive");
var avatar_directive_1 = require("./directives/avatar.directive");
var product_tile_component_1 = require("./components/product-tile/product-tile.component");
var back_button_component_1 = require("./components/back-button/back-button.component");
var dialog_1 = require("../dialog");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                components_1.AppScrollableTabComponent,
                components_1.ImageSliderComponent,
                components_1.HorizontalGridComponent,
                directives_1.GridItemTitleDirective,
                grid_item_directive_1.GridItemDirective,
                directives_1.GridItemImageDirective,
                pipes_1.AgoPipe,
                count_down_component_1.CountDownComponent,
                footer_component_1.FooterComponent,
                vertical_grid_component_1.VerticalGridComponent,
                product_card_component_1.ProductCardComponent,
                tag_directive_1.TagDirective,
                avatar_directive_1.AvatarDirective,
                product_tile_component_1.ProductTileComponent,
                back_button_component_1.BackButtonComponent
            ],
            imports: [
                common_1.CommonModule
            ],
            exports: [
                components_1.AppScrollableTabComponent,
                components_1.ImageSliderComponent,
                components_1.HorizontalGridComponent,
                directives_1.GridItemTitleDirective,
                grid_item_directive_1.GridItemDirective,
                directives_1.GridItemImageDirective,
                pipes_1.AgoPipe,
                count_down_component_1.CountDownComponent,
                footer_component_1.FooterComponent,
                vertical_grid_component_1.VerticalGridComponent,
                product_card_component_1.ProductCardComponent,
                tag_directive_1.TagDirective,
                avatar_directive_1.AvatarDirective,
                product_tile_component_1.ProductTileComponent,
                back_button_component_1.BackButtonComponent,
                dialog_1.DialogModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
