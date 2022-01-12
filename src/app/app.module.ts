import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';

import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import { InfoComponent } from './homepage/info/info.component';
import { HappytailsComponent } from './homepage/happytails/happytails.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    HappytailsComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    TabViewModule,
    ButtonModule,
    // RouterModule.forRoot([{ path: '',
    //                 component: AppComponent }]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
