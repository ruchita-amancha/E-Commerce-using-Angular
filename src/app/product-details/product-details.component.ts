import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from 'src/dataTypes';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productQuantity:number=1;
   productData:undefined|product;
  constructor(private activatedRoute:ActivatedRoute,private product:ProductService){}

  ngOnInit():void{
    let productId=this.activatedRoute.snapshot.paramMap.get("productId");
    productId && this.product.getProduct(productId).subscribe((result)=>{
      this.productData=result;
    })
  }
  handleQuantity(val:string){
    if(this.productQuantity<=20 && val=="plus"){
      this.productQuantity+=1
    }
    else if(this.productQuantity>1 && val=="minus"){
      this.productQuantity-=1
    }
  }
}
