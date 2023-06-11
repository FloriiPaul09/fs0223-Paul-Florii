import { Component } from '@angular/core';
import { ILogIn } from '../../interfaces/i-log-in';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  constructor(private authSrvc : AuthService, private router:Router) { }

  data:ILogIn = {
    email : '',
    password : ''
  }

  login(){
    this.authSrvc.login(this.data).subscribe(accessData => {
      alert(`Login successful, welcome back ${accessData.user.name}`)
      this.router.navigate(['/board'])
    })
  }
}
