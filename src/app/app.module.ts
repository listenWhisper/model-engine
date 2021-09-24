import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './views/home/home.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzButtonModule} from 'ng-zorro-antd/button';

const VIEWS = [
  HomeComponent
]

const NZ_MODULE = [
  NzLayoutModule,
  NzButtonModule,
]

@NgModule({
  declarations: [
    AppComponent,
    VIEWS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NZ_MODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
