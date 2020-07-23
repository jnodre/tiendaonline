import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductApiService } from './product-api.service';
import { Router } from '@angular/router';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faEnvelope= faEnvelope;
  faPhone = faPhone;
  faHome = faHome;
  faHeart = faHeart;
  faTwitterSquare = faTwitterSquare;
  faInstagram = faInstagram;
  faSearch = faSearch;
  faFacebookSquare = faFacebookSquare;
  faShoppingCart = faShoppingCart;
  busqueda: string = "";
  busquedaSave: string;
  products2: any = [];
  show: any = [];
  showCopy: any = [];
  showFiltered: any = [];
  searching: boolean = false;
  productsCategory: any []; 
  category : boolean = false;
  categorias : string[] =[];
  selectedCategory: string = "";
  excelUpdated: boolean = false;
  constructor ( private ProductService: ProductApiService, public router: Router){
    this.getProducts2();
    this.getCategory();
  }
  
  async getProducts2 (){
    this.products2 = await this.ProductService.getApiProducts2();
    this.searching = false;
    this.category = false;
    
  }

  getCategory(){
    this.products2.forEach(product => {
      if(this.categorias.includes(product.category) == false)
        this.categorias.push(product.category);
      })
  }
  refresh(): void {
    window.location.reload();
}
  public onFileChange(event){
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = event.target.files[0];
    console.log(file)
    reader.readAsBinaryString(file);
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary'});
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
    console.log(jsonData);
    const itemsToModify = jsonData.Sheet1;
    itemsToModify.forEach(product => {
      this.ProductService.updateProduct(product);
    });
      console.log("its updated")
      return this.excelUpdated = true;
    }
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
