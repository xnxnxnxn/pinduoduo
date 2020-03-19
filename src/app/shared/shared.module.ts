import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent } from './components';
import { GridItemTitleDirective, GridItemImageDirective } from './directives';
import { GridItemDirective } from './directives/grid-item.directive';



@NgModule({
  declarations: [
    AppScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemTitleDirective,
    GridItemDirective,
    GridItemImageDirective

  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemTitleDirective,
    GridItemDirective,
    GridItemImageDirective
  ]
})
export class SharedModule { }
