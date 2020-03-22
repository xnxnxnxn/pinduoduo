import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent } from './components';
import { GridItemTitleDirective, GridItemImageDirective } from './directives';
import { GridItemDirective } from './directives/grid-item.directive';
import { AgoPipe } from './pipes';



@NgModule({
  declarations: [
    AppScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemTitleDirective,
    GridItemDirective,
    GridItemImageDirective,
    AgoPipe

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
    GridItemImageDirective,
    AgoPipe
  ]
})
export class SharedModule { }
