import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent, UserTrailComponent, UserDetailComponent, AddUserComponent, EditUserComponent } from './index';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'View Users'
        }
      },
      {
        path: 'user-details/:id',
        component: UserDetailComponent,
        data: {
          title: 'User Details'
        }
      },
      {
        path: 'edit-user',
        component: EditUserComponent,
        data: {
          title: 'Update User'
        }
      },
      {
        path: 'add-user',
        component: AddUserComponent,
        data: {
          title: 'User Details'
        }
      },
      {
      path: 'user-trail',
      component: UserTrailComponent,
      data: {
        title: 'User Trail Info'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
