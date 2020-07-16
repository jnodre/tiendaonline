import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../product-api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  product: any = {};
  
  constructor(private ProductService: ProductApiService,  private route : ActivatedRoute) { 
    this.loadProduct();
  }

  ngOnInit(): void {
  }

  async loadProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.product= await this.ProductService.getApiProductById(id);
    console.log(this.product)
  }

}
