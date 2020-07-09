import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductApiService } from './product-api.service';
import { Router } from '@angular/router'
import * as XLSX from 'xlsx';
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
  categorias : string[] =["Todo"];
  selectedCategory: string = "";
  jsonData: any =  null;


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
  }


  public onFileChange(event){
    let workBook = null;

    const reader = new FileReader();
    const file = event.target.files[0];
    console.log(file)
    reader.readAsBinaryString(file);
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary'});

      this.jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});

      console.log(this.jsonData);
    }
  }

  public actualizarProduct(){
    const itemsToModify = this.jsonData.Sheet1;
    itemsToModify.forEach(product => {
      this.ProductService.updateProduct(product);
    });
  }

  public addProducts(){
    const itemsToModify = this.jsonData.Sheet1;
    itemsToModify.forEach(product => {
      this.ProductService.putProduct(product);
    });
  }


}
