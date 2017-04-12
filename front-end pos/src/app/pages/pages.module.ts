import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { PagesRoutingModule } from './pages-routing.module';

import { LaddaModule } from 'angular2-ladda';

@NgModule({
  imports: [ CommonModule, PagesRoutingModule, FormsModule, LaddaModule.forRoot({
            style: "expand-right",
            spinnerSize: 40,
            spinnerColor: "white",
            spinnerLines: 12
        }) ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ]
})
export class PagesModule { }
