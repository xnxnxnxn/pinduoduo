import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductVariant } from '../../domain';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { OrderService } from '../../services';
import { DialogService } from 'src/app/dialog';
import { ProductVariantDialogComponent } from '../product-variant-dialog';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductContainerComponent implements OnInit, OnDestroy {
  variants$: Observable<ProductVariant[]>;
  selectedIndex = 0;
  subs: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private orderService: OrderService,
              private dialogService: DialogService) { }

  ngOnInit(): void {
    const productId$ = this.route.paramMap.pipe(
      filter(params => params.has('productId')),
      map(params => params.get('productId'))
    );
    this.variants$ = productId$.pipe(
      switchMap(productId => this.orderService.getProductVariantsByProductId(productId))
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
    this.subs = [];
  }


  handleDirectBuy(variants: ProductVariant[]) {}

  handleGroupBuy(variants: ProductVariant[]) {
    const top = 40;
    // 传入 Output，EventEmitter 其实就是一个 Subject
    const formSubmitted = new EventEmitter();
    this.subs.push(
      formSubmitted.subscribe(ev => {
        this.dialogService.saveData(ev);
        this.router.navigate(['/orders', 'confirm']);
      })
    );
    const selected = new EventEmitter<number>();
    this.subs.push(
      selected.subscribe(idx => {
        console.log(idx);
        this.selectedIndex = idx;
      })
    );
    this.dialogService.open(ProductVariantDialogComponent, {
      // 如果 key 和 value 是一个名字，直接写就可以
      inputs: {
        variants,
        selectedVariantIndex: this.selectedIndex
      },
      outputs: { formSubmitted, selected },
      position: {
        top: `${top}%`,
        left: '50%',
        width: '100%',
        height: `${100 - top}%`
      }
    });
  }

}
