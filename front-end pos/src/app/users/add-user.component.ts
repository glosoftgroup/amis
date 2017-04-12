import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverModule } from 'ng2-bootstrap/popover';
import { UserService } from '../_services/index';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'add-user.component.html'
})
export class AddUserComponent implements OnInit{

 modules = [
  {name:'User Management', submodules:['users','usertrail']},
  {name:'Sales', submodules:['pos','invoice']}
 ];
 roles = ['Admin', 'Staff'];
 model: any = {};
 loading = false;

constructor(private router: Router, 
            private toastrService: ToastrService, 
            private userService: UserService) { 
  
}
addUser() {
      // this.userService.create(this.model)
      //     .subscribe(
      //         data => {
      //             this.toastrService.success('Hello world!', 'Toastr fun!');
      //             this.router.navigate(['/users']);
      //         },
      //         error => {
      //             this.toastrService.error('error', 'Toastr fun!');
      //             this.loading = false;
      //         });

      console.log(this.model);
  } 
  goBack(){
      this.router.navigate(['/users/users']);
  }
  ngOnInit(){
    

  }

}
