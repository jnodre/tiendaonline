import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductApiService } from './product-api.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  busqueda: string = "";
  products: any = [];
  show: any = [];
  searching: boolean = false;

  constructor ( private ProductService: ProductApiService, public router: Router){
    this.getProducts();
  }


  async getProducts (){
    this.products = await this.ProductService.getApiProducts();
    this.searching = false;
  }

  searchItem (){
    this.show = [];
    this.searching = true;
    this.products.forEach(product => {
      if (product.title.toLowerCase().includes(this.busqueda.toLocaleLowerCase()) === true){
        this.show.push(product);
      }
    });
    this.busqueda = "";
  }

  
}
