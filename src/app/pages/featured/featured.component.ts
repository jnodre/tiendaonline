import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../product-api.service';
import { ActivatedRoute } from "@angular/router";
import { merge } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  show: any = [];
  busquedaSave: any;

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
    // this.busqueda = "";
  }

}
