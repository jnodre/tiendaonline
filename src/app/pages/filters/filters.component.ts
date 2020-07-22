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
  sugerencias: any = [];
  imageObject: any[];
  imageShow: any;
  categoriaOtros: string;
  titleExclude : string;
  
  constructor(private ProductService: ProductApiService,  private route : ActivatedRoute) { 
    // this.loadProduct();
  }

  ngOnInit(): void {
    this.route.params
       .subscribe(params => {
         console.log('Esto significa que cambió la categoría')
         const id = params['id'];
         this.loadProduct(id)
       });
  }

  async loadProduct(id) {
    this.product= await this.ProductService.getApiProductById(id);
    this.categoriaOtros = this.product.category;
    this.titleExclude = this.product.title
    this.sugerencias = await this.ProductService.getApiProductsCategory(this.categoriaOtros, null, null, null, null, null, null, null, this.titleExclude);
    console.log(this.sugerencias);
    console.log(this.categoriaOtros);
    this.imageObject = this.product.thumbnailURL;
    this.imageShow= this.product.thumbnailURL[0].image;
    console.log(this.imageObject);
    console.log(this.product);
  }

  showImage(event){
    const index = event;
    this.imageShow = this.imageObject[index].image;
    console.log(this.imageShow)
  
    console.log(event)
  }
}
