import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes.module';
import { AppComponent } from './app.component';
import { EmptyPage } from './components/empty-route/empty-route.component';
import { MainModule } from './components/main/main.module';

@NgModule({
  declarations: [
    EmptyPage,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [],

})//
export class AppModule { }
