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
  busquedaSave: string;
  products: any = [];
  show: any = [];
  showCopy: any = [];
  showFiltered: any = [];
  searching: boolean = false;
  productsCategory: any []; 
  category : boolean = false;
  categorias : string[] =[];
  selectedCategory: string = "";

  constructor ( private ProductService: ProductApiService, public router: Router){
    this.getProducts();
    this.getCategory();
  }
  
  async getProducts (){
    this.products = await this.ProductService.getApiProducts();
    this.searching = false;
    this.category = false;
    
  }

  getCategory(){
    this.products.forEach(product => {
      if(this.categorias.includes(product.category) == false)
        this.categorias.push(product.category);
      })
  }

  // searchItem (){
  //   this.show = [];
  //   this.searching = true;
  //   // this.products.forEach(product => {
  //   //   if (product.title.toLowerCase().includes(this.busqueda.toLocaleLowerCase()) === true){
  //   //     this.show.push(product);
  //   //   }
      
  //   // });
  //   this.ProductService.getApiProductsSearch(this.busqueda, null, null)
  //     .then (data => {
  //       this.show =data;
  //       console.log(this.show)
  //     })
  //   this.busquedaSave = JSON.parse(JSON.stringify(this.busqueda));
  //   this.busqueda = "";
  // }

}
