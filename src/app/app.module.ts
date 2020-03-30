import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { RecommendModule } from './recommend';
import { CategoryModule } from './category';
import { ChatModule } from './chat';
import { MyModule } from './my';
import { registerLocaleData, CommonModule } from '@angular/common';

import localeZh from '@angular/common/locales/zh-Hans';
import { ProductModule } from './product/product.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    RecommendModule,
    CategoryModule,
    ChatModule,
    MyModule,
    CommonModule,
    ProductModule
    
  ],
  providers: [
    {
      // 系统提供的 LOCALE_ID 就是一个 InjectionToken
      provide: LOCALE_ID,
      useValue: 'zh-Hans'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localeZh, 'zh');
  }
 }
