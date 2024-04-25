import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'src/dataTypes';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent {

  productList: undefined | product[];
  productMessage=""
  icon=faTrash;
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.list()
  }

  deleteProduct(id:number){
    // console.warn(id);
    this.product.deleteProduct(id).subscribe((result)=>{
      // console.warn(result);
      if(result){
        this.productMessage="Product is Deleted Successfully";
        this.list()
      }
      setTimeout(()=>(this.productMessage=""),3000)
    })
  }

  list(){
    this.product.productList().subscribe((result) => {
      console.warn(result);
      this.productList=result
    });
  }
}
