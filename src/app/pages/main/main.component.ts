import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../product-api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  products: any = [];

  constructor(private ProductService: ProductApiService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts (){
    this.products = await this.ProductService.getApiProducts();
  }
}
