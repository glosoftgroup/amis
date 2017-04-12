import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    ChartsModule
  ],
  declarations: [ WidgetsComponent ]
})
export class WidgetsModule { }
