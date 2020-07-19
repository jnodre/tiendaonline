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
  imageObject: any[];
  imageShow: any
  
  constructor(private ProductService: ProductApiService,  private route : ActivatedRoute) { 
    this.loadProduct();
  }

  ngOnInit(): void {
  }

  async loadProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.product= await this.ProductService.getApiProductById(id);
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

    //   // this.products.forEach(product => {
  //   //   if (product.title.toLowerCase().includes(this.busqueda.toLocaleLowerCase()) === true){
  //   //     this.show.push(product);
  //   //   }
      
  //   // });

}
