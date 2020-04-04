import { NgModule } from '@angular/core';

import { MyRoutingModule } from './my-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MyContainerComponent } from './components';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [MyContainerComponent],
  imports: [
    SharedModule,
    MyRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class MyModule { }
