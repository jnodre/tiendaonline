import { Component, OnInit, Input } from '@angular/core';
import { ProductApiService } from '../../product-api.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() showCopyChild: any;
  @Input() searchingChild: any;
  @Input() showChild: any;
  @Input() categoryChild: any;
  @Input() selectedCategoryChild: string;
  @Input() productsCategoryChild: any [];
  @Input() busquedaChild: string ; 

  
  selectedCategory: string = "";
  show: any = [];
  productsCategory: any [] = [];
  category : boolean = false;
   

  productsChild: any;
  filteringChild: boolean = false;
  filtro: {
    value: number,
    highValue: number,
    searching: boolean,
    filtering: boolean,
    showCategoria: boolean,
    showNewCategoria: boolean,
    showPrecio: boolean,
    checkSobremesas: boolean,
    checkPortatiles: boolean,
    checkTelevisores: boolean,
    seleccionado: string
  };
  categoriaFilter = [];
  lengthShowCopy: any;
  countPage : number = 1;
  listaPaginas: number[] = [1, 2, 3, 4];
  seleccionadoPage: number;
  

 
  // FUTURE : Detectar si estoy en una url con subcategoría puesta
  constructor(private ProductService: ProductApiService, private route : ActivatedRoute) {
    // Detectar si estoy en una url con categoria puesta
    // Detectar si estoy con queryParams de filtrado puestos  
    // Buscar los productos que toquen en base a lo de arriba
    // No hay nada en la url y estoy en localhost:4200 a pelo 
  }

  getProductByCategory(opcion){
    this.selectedCategory = opcion;
    if(this.selectedCategory == "Todo"){
      this.ProductService.getApiProducts()
        .then(response=> {
          this.productsCategory = response;
        })
    }else {
      this.ProductService.getApiProductsCategory(this.selectedCategory)
      .then (data => {
        this.productsCategory =data;
        console.log(this.productsCategory);
      })
    }
  }

  ngOnInit(): void {
    // this.selectedCategoryChild = this.route.snapshot.paramMap.get("categoria")
    // this.selectedCategoryChild = this.route.snapshot.queryParams.get("price")
    // if (this.selectedCategoryChild) {
    //   alert('Estas filtrando por la categoria ' + this.selectedCategoryChild)
    //   this.getProductsFromThisCategory(this.selectedCategoryChild)
      
    // }else{

    //   // Si quisiera en el home simplemente mostrar sin filtrar la primera pagina
    //   console.log('buscar todos');
    //   this.getProducts();


    // }

  }



  // async getProductsFromThisCategory (category){
  //   this.productsChild = await this.ProductService.getApiProductsCategory(category);
  // }

  // async getProducts (){
  //   this.productsChild = await this.ProductService.getApiProducts();
  // }



  filtrarPrecioPadre(data) {
    // console.log(this.showChild)
     this.filtro = data;
    // if(data.showPrecio == true) {
    //   this.ProductService.getApiProductsSearch(this.busquedaChild, data.value, data.highValue)
    //     .then (response => {
    //       console.log(data.value);
    //       this.showCopyChild =response;
    //       console.log(this.showCopyChild)
    //       this.lengthShowCopy = this.showCopyChild.length;
    //       console.log(this.lengthShowCopy);
    //     })
    // } else {
    //   this.showCopyChild = JSON.parse(JSON.stringify(this.showChild));
    // }    
    
    if(data.showPrecio == true) {
       this.showCopyChild = this.showChild.filter(i => i.price >= this.filtro.value && i.price <= this.filtro.highValue)
     } else {
       this.showCopyChild = JSON.parse(JSON.stringify(this.showChild));
     }
     if(data.showCategoria == true) {
       if (data.checkSobremesas == true) {
         this.showCopyChild = this.showCopyChild.filter(i => i.category == "Sobremesas");
         console.log(this.showCopyChild)   
       }
       if (data.checkPortatiles == true) {
         this.showCopyChild = this.showCopyChild.filter(i => i.category == "Portátiles");     
       } 
       if (data.checkTelevisores == true) {
         this.showCopyChild = this.showCopyChild.filter(i => i.category == "Televisores");      
       } 
     } 
     if(data.showNewCategoria == true) {
       this.showCopyChild = this.showCopyChild.filter(i => i.category == data.seleccionado )
     } 
    console.log(this.filtro);
    this.searchingChild = this.filtro.searching;
    this.filteringChild = this.filtro.filtering;
  }  

  getFirstPage() {
    this.ProductService.getApiProductsPaginateFirst()
         .then (response => {
           this.productsChild = response;
         })   
  }

  getPage() {
    this.ProductService.getApiProductsPaginate(this.seleccionadoPage)
      .then (data => {
        this.productsChild = data;
      })
  }



  

}
