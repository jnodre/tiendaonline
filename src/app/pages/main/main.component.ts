import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../product-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products: any = [];

  constructor(private ProductService: ProductApiService) { }

  ngOnInit(): void {
    this.getProducts(30);
  }

  async getProducts (limit : number){
    this.products = await this.ProductService.getApiProducts(9);
  }
}
