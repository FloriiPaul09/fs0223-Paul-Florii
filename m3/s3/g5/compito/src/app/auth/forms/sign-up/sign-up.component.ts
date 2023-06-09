import { Component } from '@angular/core';
import { ISignUp } from '../../interfaces/i-sign-up';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private authSrvc : AuthService){  }


  data:ISignUp = {
    name : '',
    surname : '',
    email : '',
    password : ''
  }

  register(){
    this.authSrvc.signUp(this.data).subscribe(accessData => {
      alert(accessData.user.name);
    })
  }
}
