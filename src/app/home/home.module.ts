import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { CommonModule } from '@angular/common';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';


@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }
