import { NgModule } from '@angular/core';

import { RecommendRoutingModule } from './recommend-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RecommendContainerComponent } from './components';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [RecommendContainerComponent],
  imports: [
    SharedModule,
    RecommendRoutingModule,
    CommonModule

  ]
})
export class RecommendModule { }
