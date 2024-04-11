import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from 'src/dataTypes';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit{

  constructor(private seller:SellerService, private router:Router){}

  ngOnInit():void{
    this.seller.reload()
  }

  signup(data:SignUp):void{
    console.warn(data);
    this.seller.userSignUp(data)
  }

}


