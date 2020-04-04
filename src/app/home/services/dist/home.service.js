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
var HomeService = /** @class */ (function () {
    function HomeService() {
        this.menus = [
            { id: 1, title: '热门', link: 'hot' },
            { id: 2, title: '男装', link: 'men' },
            { id: 3, title: '女装', link: 'women' },
            { id: 4, title: '零食', link: 'food' },
            { id: 5, title: '生鲜', link: 'shenxian' },
            { id: 6, title: '家具', link: 'jiaju' },
            { id: 7, title: '美妆', link: 'meizhuang' },
            { id: 8, title: '运动', link: 'sports' },
            { id: 9, title: '游戏', link: 'game' },
            { id: 10, title: '生活', link: 'life' },
            { id: 11, title: '赤膊', link: 'chibo' },
        ];
        this.imageSliders = [
            {
                // tslint:disable-next-line: max-line-length
                imgUrl: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1584452624&di=368e1cac0d22a072a9b0340099899fca&src=http://ku.90sjimg.com/back_pic/05/08/96/8459812f3c05b43.jpg!/watermark/text/OTDorr7orqE=/font/simkai/align/southeast/opacity/20/size/50',
                link: '',
                caption: ''
            },
            {
                // tslint:disable-next-line: max-line-length
                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584462824646&di=945f604ee1cd042d12b489f68ebf2d45&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F00%2F11%2F04%2F435636e9b087038.jpg',
                link: '',
                caption: ''
            },
            {
                // tslint:disable-next-line: max-line-length
                imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=179686573,1659965489&fm=26&gp=0.jpg',
                link: '',
                caption: ''
            },
            {
                // tslint:disable-next-line: max-line-length
                imgUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2987675329,2171331638&fm=26&gp=0.jpg',
                link: '',
                caption: ''
            },
            {
                // tslint:disable-next-line: max-line-length
                imgUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1235618197,1651519349&fm=26&gp=0.jpg',
                link: '',
                caption: ''
            }
        ];
        this.channels = [
            { id: 1, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png' },
            { id: 2, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png' },
            { id: 3, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png' },
            { id: 4, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png' },
            { id: 5, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png' },
            { id: 6, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png' },
            { id: 7, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png' },
            { id: 8, title: '商城首页', link: '', icon: '../../../../assets/icon/alipay.png' },
        ];
        this.ads = [
            { imageUrl: 'http://ngassets.twigcodes.com/ad003.jpg', link: '' },
            { imageUrl: 'http://ngassets.twigcodes.com/ad003.jpg', link: '' }
        ];
        this.products = [
            { id: 1,
                imageUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                title: 'Tango咔咔脆巧克力',
                tags: ['food'],
                price: 100,
                priceDesc: '不错',
                buyerAvatars: ['http://pic1.zhimg.com/50/v2-ede9473ddcbd84fe7c1e363953ed7410_hd.jpg', 'http://pic1.zhimg.com/50/v2-ede9473ddcbd84fe7c1e363953ed7410_hd.jpg']
            },
            { id: 1,
                imageUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                title: 'Tango咔咔脆巧克力',
                tags: ['food'],
                price: 100,
                priceDesc: '不错',
                buyerAvatars: []
            },
            { id: 1,
                imageUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                title: 'Tango咔咔脆巧克力',
                tags: ['food'],
                price: 100,
                priceDesc: '不错',
                buyerAvatars: []
            },
            { id: 1,
                imageUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                title: 'Tango咔咔脆巧克力',
                tags: ['food'],
                price: 100,
                priceDesc: '不错',
                buyerAvatars: []
            },
            { id: 1,
                imageUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                title: 'Tango咔咔脆巧克力',
                tags: ['food'],
                price: 100,
                priceDesc: '不错',
                buyerAvatars: []
            },
            { id: 1,
                imageUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                title: 'Tango咔咔脆巧克力',
                tags: ['food'],
                price: 100,
                priceDesc: '不错',
                buyerAvatars: []
            },
            { id: 1,
                imageUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                title: 'Tango咔咔脆巧克力',
                tags: ['food'],
                price: 100,
                priceDesc: '不错',
                buyerAvatars: []
            },
            { id: 1,
                imageUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                title: 'Tango咔咔脆巧克力',
                tags: ['food'],
                price: 100,
                priceDesc: '不错',
                buyerAvatars: []
            },
            { id: 1,
                imageUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                title: 'Tango咔咔脆巧克力',
                tags: ['food'],
                price: 100,
                priceDesc: '不错',
                buyerAvatars: []
            },
            { id: 1,
                imageUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                title: 'Tango咔咔脆巧克力',
                tags: ['food'],
                price: 100,
                priceDesc: '不错',
                buyerAvatars: []
            },
            { id: 1,
                imageUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                title: 'Tango咔咔脆巧克力',
                tags: ['food'],
                price: 100,
                priceDesc: '不错',
                buyerAvatars: []
            },
            { id: 1,
                imageUrl: 'https://img.alicdn.com/imgextra/i1/725677994/O1CN01Evw0Z928vIjdnDOOo_!!725677994.jpg_430x430q90.jpg',
                title: 'Tango咔咔脆巧克力',
                tags: ['food'],
                price: 100,
                priceDesc: '不错',
                buyerAvatars: []
            }
        ];
    }
    HomeService.prototype.getMenus = function () {
        return this.menus;
    };
    ;
    HomeService.prototype.getImageSlider = function () {
        return this.imageSliders;
    };
    HomeService.prototype.getChannels = function () {
        return this.channels;
    };
    HomeService.prototype.getAds = function () {
        return this.ads;
    };
    HomeService.prototype.getAdByTab = function (tab) {
        // tslint:disable-next-line: no-unused-expression
        return rxjs_1.from([this.ads]);
    };
    HomeService.prototype.getProductsByTab = function (tab) {
        return rxjs_1.from([this.products]);
    };
    HomeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
