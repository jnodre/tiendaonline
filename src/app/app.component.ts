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
  showCopy: any = [];
  showFiltered: any = [];
  searching: boolean = false;
  productsCategory: any []; 
  category : boolean = false;
  categorias : string[] =["Todo"];
  selectedCategory: string = "";
  filtro: {
    value: number,
    highValue: number,
    searching: boolean,
    filtering: boolean,
    showCategoria: boolean,
    showNewCategoria: boolean,
    showPrecio: boolean,
    checkSobremesas: boolean,
    checkPortatiles: boolean,
    checkTelevisores: boolean,
    seleccionado: string
  };
  filtering: boolean = false;
  categoriaFilter = []

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
        this.categorias.push(product.category)
      })
      console.log(this.categorias)
  }
  getProductByCategory(){
    this.show =[];
    this.productsCategory =[];
    this.category = true;
    if(this.selectedCategory == "Todo"){
      this.productsCategory= this.products;
    }else{
      this.products.filter(product => product.category == this.selectedCategory).forEach(item => this.productsCategory.push(item))
    }
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

  filtrarPrecioPadre(data) {
    this.filtro = data;
    if(data.showPrecio == true) {
      this.showCopy = this.show.filter(i => i.price >= this.filtro.value && i.price <= this.filtro.highValue)
    } else {
      this.showCopy = JSON.parse(JSON.stringify(this.show));
    }
    
    if(data.showCategoria == true) {
      if (data.checkSobremesas == true) {
        this.showCopy = this.showCopy.filter(i => i.category == "Sobremesas");
        console.log(this.showCopy)   
      }
      if (data.checkPortatiles == true) {
        this.showCopy = this.showCopy.filter(i => i.category == "Portátiles");     
      } 
      if (data.checkTelevisores == true) {
        this.showCopy = this.showCopy.filter(i => i.category == "Televisores");      
      } 
    } 
    if(data.showNewCategoria == true) {
      this.showCopy = this.showCopy.filter(i => i.category == data.seleccionado )
    } 
    console.log(this.filtro);
    this.searching = this.filtro.searching;
    this.filtering = this.filtro.filtering;
  }

}
