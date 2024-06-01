import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'src/dataTypes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  popularProd:undefined|product[] 
  trendyProduct:undefined|product[] 

  constructor(private productService:ProductService){}

  

  ngOnInit():void{
    this.productService.popularProducts().subscribe((data)=>{
      console.log(data);      
        this.popularProd=data
    })
    this.productService.trendyProducts().subscribe((data)=>{
      console.log(data);      
        this.trendyProduct=data
    })
  }
}
