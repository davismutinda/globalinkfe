import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './common-component/layout/layout.component';
import { Layers } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';


const icons = {
  Layers
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
