import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';

import {TabMenuModule} from 'primeng/tabmenu';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    TabMenuModule,
    RouterModule.forRoot([{ path: '',
                    component: AppComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
