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
// getting info to work and page to split
import {ImageModule} from 'primeng/image';
import {DividerModule} from 'primeng/divider';
import {SplitterModule} from 'primeng/splitter';
import { AdoptComponent } from './homepage/adopt/adopt.component';
import { InvolvedComponent } from './homepage/involved/involved.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    HappytailsComponent,
    AdoptComponent,
    InvolvedComponent,
    HomepageComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    TabViewModule,
    ButtonModule,
    // RouterModule.forRoot([{ path: '',
    //                 component: AppComponent }]),
    AppRoutingModule,
    ImageModule,
    DividerModule,
    SplitterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
