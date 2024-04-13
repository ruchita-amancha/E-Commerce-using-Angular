import { LowerCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  sellerName:string=''
  menuType:string='default'
  constructor(private router:Router){}

  ngOnInit():void{
    this.router.events.subscribe((value:any)=>{
      console.warn(value.url);
      if(value.url){
        if(localStorage.getItem('seller') && value.url.includes("seller")){
          // console.warn("inside sellde");
          this.menuType="seller"
          if(localStorage.getItem('seller')){
            let sellerStore=localStorage.getItem('seller');
            let sellerData= sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName=sellerData.name;
          }
        }
        else{
          // console.warn("outside seller");
          this.menuType='default'
        }
      }
    })
  }

  logout(){
    localStorage.removeItem("seller");
    this.router.navigate(["/"])
  }
}
