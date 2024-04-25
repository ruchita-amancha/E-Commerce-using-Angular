import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from 'src/dataTypes';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {

  constructor(private route:ActivatedRoute,private product:ProductService){}

  productData:undefined|product

  ngOnInit():void{
    let productId=this.route.snapshot.paramMap.get('id')
    // console.warn(productId);
    productId && this.product.getProduct(productId).subscribe((data)=>{
      console.warn(data);
      this.productData=data
    })
  }

  submit(data:any) {

  }

}
