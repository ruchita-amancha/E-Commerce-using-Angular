import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/dataTypes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchResult:undefined|product[];
constructor(private product:ProductService,private activatedRoute:ActivatedRoute){}

ngOnInit():void{
  let query=this.activatedRoute.snapshot.paramMap.get("query")
  query&& this.product.searchProduct(query).subscribe((result)=>{
    this.searchResult=result;
  })
}

}
