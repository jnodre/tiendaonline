import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../product-api.service';
import { ActivatedRoute } from "@angular/router";
import { merge } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  show: any = [];
  busquedaSave: any;
  value: number = 0;
  highValue: number = 3000;
  options: Options = {
    floor: 0,
    ceil: 3000
  };
  filtering: any = [];
  inFiltering: boolean = false;
  checkboxSobremesa :boolean = false;
  checkboxPortatil  :boolean = false;
  checkboxTelevisor :boolean = false;
  checkboxComponente  :boolean = false;
  checkboxSmartphone  :boolean = false;
  checkboxAccesorio :boolean = false;
  selectedCategory: any = [];
  constructor(private ProductService: ProductApiService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    combineLatest([
      this.route.params,
      this.route.queryParams
    ])
      .subscribe(results => {
        const params = results[0]; // esto es el resultado de this.route.params
        const queryParams = results[1];  // esto es el resultado de this.route.queryParams
        const search = params['search'];
        const minPrice = queryParams['minPrice'];
        const maxPrice = queryParams['maxPrice'];
        // this.getProductByCategory(this.categoriaFilter, { minPrice: minPrice })
        this.searchItem(
          {
            busqueda: search,
          })
      })
  }

  searchItem (busqueda){
    this.inFiltering = false;
    this.busquedaSave = JSON.parse(JSON.stringify(busqueda));
    console.log(busqueda)
    console.log(busqueda.busqueda)
    console.log(this.busquedaSave)
    // this.products.forEach(product => {
    //   if (product.title.toLowerCase().includes(this.busqueda.toLocaleLowerCase()) === true){
    //     this.show.push(product);
    //   }
      
    // });
    this.ProductService.getApiProductsSearch(this.busquedaSave.busqueda)
      .then (data => {
        this.show =data;
        console.log(this.show)
      })
    busqueda.busqueda = "";
    console.log(busqueda.busqueda)
  }

  async searchFilter(){
    this.inFiltering = true;
    if (this.checkboxAccesorio == true){
      this.selectedCategory.push("Accesorios Smartphones");
    } 
    if (this.checkboxSobremesa == true){
      this.selectedCategory.push("Sobremesas");
    } 
    if (this.checkboxTelevisor == true){
      this.selectedCategory.push("Televisores");
    } 
    if (this.checkboxPortatil == true){
      this.selectedCategory.push("Portátiles");
    } 
    if (this.checkboxSmartphone == true){
      this.selectedCategory.push("Smartphones");
    } 
    if (this.checkboxComponente == true){
      this.selectedCategory.push("Componentes");
    }
    this.filtering = await this.ProductService.getSearchFilter(this.busquedaSave.busqueda, this.value, this.highValue, this.selectedCategory);
    //this.selectedCategory=[];
  }

}
