import { Component } from '@angular/core';
import { SignUp } from 'src/dataTypes';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  constructor(private userAuth: UserService) {}

  ngOnInit():void{
    this.userAuth.userAuthReload()
  }


  signUp(data:SignUp){
       this.userAuth.userSignUp(data);    
  }


}
