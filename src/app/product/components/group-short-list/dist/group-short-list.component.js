"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var GroupShortListComponent = /** @class */ (function () {
    function GroupShortListComponent() {
        this.row = 2;
    }
    GroupShortListComponent.prototype.ngOnInit = function () {
        this.groupOrders = [
            {
                id: 1,
                productId: 2,
                startBy: 'zhangsan',
                avatar: 'assets/avatars/avatar001.png',
                startAt: new Date(),
                remainingNumber: 2
            },
            {
                id: 2,
                productId: 2,
                startBy: 'lisi',
                avatar: 'assets/avatars/avatar002.png',
                startAt: new Date(2019, 2, 20, 10, 10, 10),
                remainingNumber: 1
            }
        ];
    };
    __decorate([
        core_1.Input()
    ], GroupShortListComponent.prototype, "groupOrders");
    __decorate([
        core_1.Input()
    ], GroupShortListComponent.prototype, "row");
    GroupShortListComponent = __decorate([
        core_1.Component({
            selector: 'app-group-short-list',
            templateUrl: './group-short-list.component.html',
            styleUrls: ['./group-short-list.component.less'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], GroupShortListComponent);
    return GroupShortListComponent;
}());
exports.GroupShortListComponent = GroupShortListComponent;
