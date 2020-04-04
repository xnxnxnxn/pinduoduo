import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent } from './components';
import { GridItemTitleDirective, GridItemImageDirective } from './directives';
import { GridItemDirective } from './directives/grid-item.directive';
import { AgoPipe } from './pipes';
import { CountDownComponent } from './components/count-down/count-down.component';
import { FooterComponent } from './components/footer/footer.component';
import { VerticalGridComponent } from './components/vertical-grid/vertical-grid.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TagDirective } from './directives/tag.directive';
import { AvatarDirective } from './directives/avatar.directive';
import { ProductTileComponent } from './components/product-tile/product-tile.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { DialogModule } from '../dialog';



@NgModule({
  declarations: [
    AppScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemTitleDirective,
    GridItemDirective,
    GridItemImageDirective,
    AgoPipe,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    TagDirective,
    AvatarDirective,
    ProductTileComponent,
    BackButtonComponent

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
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    TagDirective,
    AvatarDirective,
    ProductTileComponent,
    BackButtonComponent,
    DialogModule
  ]
})
export class SharedModule { }
