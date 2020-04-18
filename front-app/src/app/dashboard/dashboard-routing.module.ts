import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ViewMembersComponent } from './view-members/view-members.component';

const routes: Routes = [
  { path: '',
    component: DashboardComponent,
    children: [
      { path: 'log-in', component: LoginComponent },
      { path: 'view-members', component: ViewMembersComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'view-members', component: ViewMembersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
