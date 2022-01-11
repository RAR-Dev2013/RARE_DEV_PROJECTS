import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';

import {TabMenuModule} from 'primeng/tabmenu';
import {ButtonModule} from 'primeng/button';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    TabMenuModule,
    ButtonModule,
    RouterModule.forRoot([{ path: '',
                    component: AppComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
