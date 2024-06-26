import { JsonPipe, LowerCasePipe } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from 'src/dataTypes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  sellerName: string = '';
  userName: string = '';
  menuType: string = 'default';
  searchResult: undefined | product[];
  constructor(private router: Router, private product: ProductService) {}

  ngOnInit(): void {
    this.router.events.subscribe((value: any) => {
      console.warn(value.url);
      if (value.url) {
        if (localStorage.getItem('seller') && value.url.includes('seller')) {
          // console.warn("inside sellde");
          this.menuType = 'seller';
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName = sellerData.name;
        } else if (localStorage.getItem('user')) {
          this.menuType = 'user';
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          console.log(this.userName);
          console.log(userData);
        } else {
          // console.warn("outside seller");
          this.menuType = 'default';
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

  userLogout(){
    localStorage.removeItem('user')
    this.router.navigate(['/'])
  }

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      console.warn(element.value);
      this.product.searchProduct(element.value).subscribe((data) => {
        console.warn(data);
        if (data.length > 5) {
          data.length = 5;
        }
        this.searchResult = data;
      });
    }
  }

  hideSearch() {
    this.searchResult = undefined;
  }
  submitSearch(val: string) {
    this.router.navigate([`search/${val}`]);
  }
  redirectToDetails(id: number) {
    this.router.navigate([`/details/` + id]);
  }
}
