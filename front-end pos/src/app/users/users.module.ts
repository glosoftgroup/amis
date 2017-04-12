import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PopoverModule } from 'ng2-bootstrap/popover';
import { ModalModule } from 'ng2-bootstrap/modal';
import { LaddaModule } from 'angular2-ladda';

import { UsersComponent, UserTrailComponent, AddUserComponent, UserDetailComponent, EditUserComponent } from './index';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    PopoverModule.forRoot(),
    UsersRoutingModule,
    ChartsModule,
     LaddaModule.forRoot({
            style: "expand-right",
            spinnerSize: 40,
            spinnerColor: "white",
            spinnerLines: 12
        })
  ],
  declarations: [ UsersComponent, UserTrailComponent, AddUserComponent, UserDetailComponent, EditUserComponent ]
})
export class UsersModule { }
