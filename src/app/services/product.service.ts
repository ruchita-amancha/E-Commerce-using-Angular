import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'src/dataTypes';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(data:product){
    // console.warn("serive call");
    return this.http.post("http://localhost:3000/products",data)
  }
}
