import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { RecommendModule } from './recommend';
import { CategoryModule } from './category';
import { ChatModule } from './chat';
import { MyModule } from './my';

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
    MyModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
