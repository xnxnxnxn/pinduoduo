import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent } from './components';
import { GridItemTitleDirective, GridItemImageDirective } from './directives';
import { GridItemDirective } from './directives/grid-item.directive';
import { AgoPipe } from './pipes';
import { CountDownComponent } from './components/count-down/count-down.component';



@NgModule({
  declarations: [
    AppScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemTitleDirective,
    GridItemDirective,
    GridItemImageDirective,
    AgoPipe,
    CountDownComponent

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
    AgoPipe,
    CountDownComponent
  ]
})
export class SharedModule { }
