import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ChartJSComponent } from './chartjs.component';
import { ChartJSRoutingModule } from './chartjs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChartJSRoutingModule,
    ChartsModule
  ],
  declarations: [ ChartJSComponent ]
})
export class ChartJSModule { }
