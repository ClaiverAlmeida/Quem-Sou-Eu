import { ScreensModule } from './screen/screens.modules';
import { HeaderComponent } from './header/header.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScreensModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
