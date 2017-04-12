import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PopoverModule } from 'ng2-bootstrap/popover';
import { UserService } from '../_services/index';

@Component({
  templateUrl: 'edit-user.component.html'
})
export class EditUserComponent implements OnInit{
  user: any;
  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService){ }

  ngOnInit(){
    let id = this.route.snapshot.params['id'];
    this.userService.getById(id).subscribe(user => this.user = user);

  }

}