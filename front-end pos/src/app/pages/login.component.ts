import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';
import { moveIn, fallIn } from '../router.animations';

@Component({
  templateUrl: 'login.component.html',
  animations:[fallIn(), moveIn()],
  host:{'[@moveIn]':''}
})
export class LoginComponent implements OnInit{
  model: any = {};
  returnUrl: string;
  loading = false;
  error:string;
  state:string = '';

  constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
  ) { }
 
  ngOnInit(){
  // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] 
  }

  loginSubmit(){
    this.loading = true;
    // alert('submitted ' + this.model.username + ' and '+ this.model.password);
    // console.log('submitted ' + this.model.username + ' and '+ this.model.password);

    this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    //this.alertService.error(error);
                    this.error = error;
                    this.loading = false;
                });
                
  }

}
