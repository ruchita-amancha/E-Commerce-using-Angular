import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from 'src/dataTypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {

  constructor(private route:ActivatedRoute,private router:Router,private product:ProductService){}

  productMessage:undefined|string

  productData:undefined|product

  ngOnInit():void{
    let productId=this.route.snapshot.paramMap.get('id')
    // console.warn(productId);
    productId && this.product.getProduct(productId).subscribe((data)=>{
      console.warn(data);
      this.productData=data
    })
  }

  submit(data:product) {
    if(this.productData){
      data.id=this.productData.id
    }
    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        this.productMessage="Product has Updated"
      }
    })  
    setTimeout(()=>{
      this.productMessage=undefined
      this.router.navigate(['seller-home'])
    },3000)
    
  }

}
