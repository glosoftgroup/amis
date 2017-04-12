import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalModule, ModalDirective } from 'ng2-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { PopoverModule } from 'ng2-bootstrap/popover';

import { User } from '../_models/index';
import { UserService, NotificationService} from '../_services/index'; 

@Component({
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit{
  currentUser: User;
  users: User[] = [];
  model: any = {};
  /*-- status variable --*/
  error:string;
  /*-- ladda variable --*/
  loading = false;
  selectedUser: User;
  user_id: number;


@ViewChild('createModal') public createModal:ModalDirective;
@ViewChild('updateModal') public updateModal:ModalDirective;

constructor(private toastrService: ToastrService, 
            private userService: UserService, private router:Router, 
            private notificationService: NotificationService) { 
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
}

goToAddUser(){
  this.router.navigate(['/users/add-user']);
}

goToUserDetails(id:number) {
  this.router.navigate(['/users/user-details', id]);
}

/* -- update user function -- */
// updateUser( editedUser?:User){
//         this.editedUser = editedUser;
//         this.updateModel = this.editUser;

//         this.loading = true;
//         this.userService.update(this.updateModel)
//             .subscribe(
//                 data => {
//                     /* -- update user -- */;
//                     this.editedUser.username = this.updateModel.username;
//                     this.editedUser.email = this.updateModel.email;
//                     this.editedUser.password = this.updateModel.password;

//                     this.toastrService.success('Updated successfully', 'Sucsess!');
//                     this.router.navigate(['/users/users']);
//                     this.loading = false;
//                     /* -- clear model -- */
//                     this.model={};

//                 },
//                 error => {
//                     this.error = error;
//                     this.toastrService.error(this.error, 'Error Updating!');
//                     this.router.navigate(['/users/users']);
//                     this.loading = false;
//                     /* -- clear model -- */
//                     this.model={};
//                 });
//         this.updateModal.hide();
// }
show(id:number){
   alert(id);
   this.router.navigate(['/users/edit-user']);
}
/* -- add user function -- */
createUser(){

    this.loading = true;
    this.userService.create(this.model)
        .subscribe(
            data => {
                /* -- add user to model -- */
                this.users.push(this.model);
                this.toastrService.success('Added '+ this.model.username+' successfully', 'Sucsess!');
                this.router.navigate(['/users/users']);
                this.loading = false;
                /* -- clear model -- */
               //this.model={};

            },
            error => {
                this.error = error;
                this.toastrService.error(this.error, 'Error Adding!');
                this.router.navigate(['/users/users']);
                this.loading = false;
                /* -- clear model -- */
               //this.model={};
            });

            this.createModal.hide();
}

/* -- delete user -- */
deleteUser(user:User): void{
    this.selectedUser = user;
    this.notificationService.openConfirmationDialog('Are you sure you want to delete '+ this.selectedUser.username +'?',
            () => {
                this.userService.delete(this.selectedUser.id)
                    .subscribe(
                      data => {
                        this.toastrService.success('Deleted '+ this.selectedUser.username+' successfully', 'Sucsess!');
                        this.user_id = this.users.indexOf(this.selectedUser);
                        this.users.splice(this.user_id, 1);
                        this.router.navigate(['/users/users']);
                      },
                      error => {
                        this.error = error;
                        this.toastrService.error(this.error, 'Error!');
                      });
    });
    
}

  
  ngOnInit() {
    this.loadAllUsers();
    }


  private loadAllUsers() {
    this.userService.getAll().subscribe(users =>  this.users = users.results);
  }
  
}
