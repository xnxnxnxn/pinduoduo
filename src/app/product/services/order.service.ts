import { Injectable } from '@angular/core';
import { ProductVariant } from '../domain';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  productVariants: ProductVariant[] = [
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

  constructor() {}
  getProductVariantsByProductId(productId: string): Observable<ProductVariant[]> {
    return from([this.productVariants]);
  }
}
