import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../product-api.service';
import { ActivatedRoute } from "@angular/router";
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products: any = [];
  pages: number[] = [1, 2, 3, 4];
  seleccionadoPage: number = 1;

  constructor(private ProductService: ProductApiService,  private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
       .subscribe(queryParams => {
         console.log('Esto significa que cambiaron los queryParams')
         this.seleccionadoPage = queryParams['Page'];
         this.getProducts(this.seleccionadoPage);
     });

  }

  async getProducts (seleccionadoPage: number){
    this.products = await this.ProductService.getApiProducts(this.seleccionadoPage);
  }
  
}
