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
var OrderService = /** @class */ (function () {
    function OrderService() {
        this.productVariants = [
            { id: 1,
                product: { id: 1,
                    imageUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                    title: 'Tango咔咔脆巧克力',
                    tags: ['food'],
                    price: 100,
                    priceDesc: '不错',
                    buyerAvatars: [
                        'http://pic1.zhimg.com/50/v2-ede9473ddcbd84fe7c1e363953ed7410_hd.jpg',
                        'http://pic1.zhimg.com/50/v2-ede9473ddcbd84fe7c1e363953ed7410_hd.jpg'
                    ]
                },
                name: 'Tango咔咔脆巧克力',
                price: 100,
                listPrice: 9.9,
                productVariantImages: [
                    {
                        imgUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                        link: '',
                        caption: ''
                    },
                    {
                        imgUrl: 'https://img.alicdn.com/imgextra/i2/725677994/O1CN01ZjqCSa28vIdDQa1sC_!!725677994.jpg_430x430q90.jpg',
                        link: '',
                        caption: ''
                    }
                ]
            },
            { id: 1,
                product: { id: 1,
                    imageUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                    title: 'Tango咔咔脆巧克力',
                    tags: ['food'],
                    price: 100,
                    priceDesc: '不错',
                    buyerAvatars: [
                        'http://pic1.zhimg.com/50/v2-ede9473ddcbd84fe7c1e363953ed7410_hd.jpg',
                        'http://pic1.zhimg.com/50/v2-ede9473ddcbd84fe7c1e363953ed7410_hd.jpg'
                    ]
                },
                name: '款式2',
                price: 100,
                listPrice: 9.9,
                productVariantImages: [
                    {
                        imgUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                        link: '',
                        caption: ''
                    },
                    {
                        imgUrl: 'https://img.alicdn.com/imgextra/i2/725677994/O1CN01ZjqCSa28vIdDQa1sC_!!725677994.jpg_430x430q90.jpg',
                        link: '',
                        caption: ''
                    }
                ]
            }
        ];
    }
    OrderService.prototype.getProductVariantsByProductId = function (productId) {
        return rxjs_1.from([this.productVariants]);
    };
    OrderService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
