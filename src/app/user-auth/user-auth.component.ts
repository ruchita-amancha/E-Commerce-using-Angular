import { Component } from '@angular/core';
import { SignUp } from 'src/dataTypes';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {

  showLogin=false;

  constructor(private userAuth: UserService) {}

  ngOnInit():void{
    this.userAuth.userAuthReload()
  }


  signUp(data:SignUp){
       this.userAuth.userSignUp(data);    
  }

  login(data:SignUp){
    this.userAuth.login(data)
  }

  openLogin(){
    this.showLogin=true
  }

  openSignUp(){
    this.showLogin=false
  }

}
