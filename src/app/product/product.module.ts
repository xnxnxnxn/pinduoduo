import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { CommonModule } from '@angular/common';
import { GroupItemComponent } from './components/group-item/group-item.component';
import { GroupShortListComponent } from './components/group-short-list/group-short-list.component';
import { ProductVariantDialogComponent, ProductAmountComponent, PaymentComponent, ConfirmOrderComponent } from './components';


@NgModule({
  declarations: [
    ProductContainerComponent, 
    GroupItemComponent, 
    GroupShortListComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent,
    PaymentComponent,
    ConfirmOrderComponent],
  imports: [
    SharedModule,
    ProductRoutingModule,
    CommonModule
  ],
  entryComponents: [ProductVariantDialogComponent]
})
export class ProductModule { }
