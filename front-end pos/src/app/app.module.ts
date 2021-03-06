import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { PopoverModule } from 'ng2-bootstrap/popover';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { LaddaModule } from 'angular2-ladda';
import { ToastrModule } from 'ngx-toastr';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';

// import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, NotificationService} from './_services/index';

@NgModule({
  imports: [ BrowserModule,BrowserAnimationsModule, HttpModule, FormsModule,AppRoutingModule,
    DropdownModule.forRoot(), TabsModule.forRoot(), ChartsModule, ToastrModule.forRoot(),
    PopoverModule.forRoot(),
    LaddaModule.forRoot({
            style: "expand-right",
            spinnerSize: 40,
            spinnerColor: "white",
            spinnerLines: 12
        })
  ],
  declarations: [
    AppComponent,
    FullLayoutComponent,
    SimpleLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective/*,
    AlertComponent*/
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },  AuthGuard, AlertService, AuthenticationService, UserService, NotificationService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
