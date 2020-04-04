"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var ConfirmOrderComponent = /** @class */ (function () {
    function ConfirmOrderComponent(dialogService) {
        this.dialogService = dialogService;
        this.count$ = new rxjs_1.Subject();
    }
    ConfirmOrderComponent.prototype.ngOnInit = function () {
        this.payments = this.payments = [
            {
                id: 1,
                name: '微信支付',
                icon: 'assets/icons/wechat_pay.png',
                desc: '50元以内可免密支付'
            },
            {
                id: 2,
                name: '支付宝',
                icon: 'assets/icons/alipay.png'
            },
            {
                id: 3,
                name: '找微信好友支付',
                icon: 'assets/icons/friends.png'
            }
        ];
        this.item$ = this.dialogService.getData().pipe(operators_1.tap(function (val) { return console.log(val); }), operators_1.share());
        var unitPrice$ = this.item$.pipe(operators_1.map(function (item) { return item.variant.price; }));
        var amount$ = this.item$.pipe(operators_1.map(function (item) { return item.count; }));
        var mergedCount$ = rxjs_1.merge(amount$, this.count$);
        this.totalPrice$ = rxjs_1.combineLatest([unitPrice$, mergedCount$]).pipe(operators_1.map(function (_a) {
            var price = _a[0], amount = _a[1];
            return price * amount;
        }));
    };
    ConfirmOrderComponent.prototype.handleAmountChange = function (count) {
        this.count$.next(count);
    };
    ConfirmOrderComponent.prototype.handlePay = function () { };
    ConfirmOrderComponent = __decorate([
        core_1.Component({
            selector: 'app-confirm-order',
            templateUrl: './confirm-order.component.html',
            styleUrls: ['./confirm-order.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], ConfirmOrderComponent);
    return ConfirmOrderComponent;
}());
exports.ConfirmOrderComponent = ConfirmOrderComponent;
