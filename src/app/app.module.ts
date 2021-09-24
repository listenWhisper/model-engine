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

]

@NgModule({
  declarations: [
    AppComponent,
    VIEWS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzLayoutModule,
    NzButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
