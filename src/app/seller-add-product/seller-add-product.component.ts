import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'src/dataTypes';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {

  addProductMessage:string|undefined;
  constructor(private product:ProductService){}
// Add Product
  addProd(data:product){
    // console.warn(data);
    this.product.addProduct(data).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.addProductMessage="Product is sucessfully added"
      }
      setTimeout(()=>(this.addProductMessage=undefined),3000)
    })
    
  }
}
