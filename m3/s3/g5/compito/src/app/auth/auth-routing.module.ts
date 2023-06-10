import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LogInComponent } from './forms/log-in/log-in.component';
import { SignUpComponent } from './forms/sign-up/sign-up.component';

const routes: Routes = [
  {
    path : '',
    component: AuthComponent
  },
  {
    path : 'login',
    component: LogInComponent
  },
  {
    path : 'signup',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
