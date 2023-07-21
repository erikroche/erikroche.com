import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterLink, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {WorkComponent} from "./work/work.component";
import {ContactComponent} from "./contact/contact.component";
import {EarthComponent} from "./earth/earth.component";
import {AngularSvgIconModule} from "angular-svg-icon";
import {HttpClientModule} from "@angular/common/http";
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    ContactComponent,
    EarthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    RouterLink,
    AngularSvgIconModule.forRoot(),
    HttpClientModule,
    NgxGoogleAnalyticsModule.forRoot('G-XCFJ5ZRZMV'),
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
