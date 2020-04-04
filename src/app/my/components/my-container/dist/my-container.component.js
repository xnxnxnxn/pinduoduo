"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var MyContainerComponent = /** @class */ (function () {
    function MyContainerComponent(router, route, service) {
        this.router = router;
        this.route = route;
        this.service = service;
        this.orderItems = [
            {
                title: '待付款',
                icon: '/assets/icons/to_pay.png'
            },
            {
                title: '待分享',
                icon: '/assets/icons/to_share.png'
            },
            {
                title: '待发货',
                icon: '/assets/icons/to_ship.png'
            },
            {
                title: '待收货',
                icon: '/assets/icons/to_deliver.png'
            },
            {
                title: '待评价',
                icon: '/assets/icons/to_review.png'
            }
        ];
        this.toolsItems = [
            {
                title: '优惠券',
                icon: '/assets/icons/coupon.png'
            },
            {
                title: '商品收藏',
                icon: '/assets/icons/fav_product.png'
            },
            {
                title: '店铺收藏',
                icon: '/assets/icons/fav_store.png'
            },
            {
                title: '历史浏览',
                icon: '/assets/icons/history.png'
            },
            {
                title: '退款售后',
                icon: '/assets/icons/refund.png'
            }
        ];
    }
    MyContainerComponent.prototype.ngOnInit = function () {
        this.profile$ = this.service.getProfile();
    };
    MyContainerComponent.prototype.showProfile = function () {
        this.router.navigate(['profile'], { relativeTo: this.route });
    };
    MyContainerComponent = __decorate([
        core_1.Component({
            selector: 'app-my-container',
            templateUrl: './my-container.component.html',
            styleUrls: ['./my-container.component.less'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], MyContainerComponent);
    return MyContainerComponent;
}());
exports.MyContainerComponent = MyContainerComponent;
