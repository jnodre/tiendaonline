import { Component, OnInit, Input } from '@angular/core';
import { ProductApiService } from '../../product-api.service';
import { ActivatedRoute } from "@angular/router";
import { merge } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { Options } from 'ng5-slider';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selectedCategory: any;
  show: any = [];
  productsCategory: any[] = [];
  category: boolean = false;
  value: number = 0;
  highValue: number = 3000;
  value2: number ;
  highValue2: number ;
  options: Options = {
    floor: 0,
    ceil: 3000
  };

  listaPaginas: number[] = [1, 2, 3, 4];
  seleccionadoPage: number;
  

 
  // FUTURE : Detectar si estoy en una url con subcategoría puesta
  constructor(private ProductService: ProductApiService, private route : ActivatedRoute) {
    // Detectar si estoy en una url con categoria puesta
    // Detectar si estoy con queryParams de filtrado puestos  
    // Buscar los productos que toquen en base a lo de arriba
    // No hay nada en la url y estoy en localhost:4200 a pelo 
  }

  getProductByCategory(opcion) {
    this.selectedCategory = opcion;
    console.log(this.selectedCategory);
    const minPrice = parseInt(this.selectedCategory.minPrice, 10);
    const maxPrice = parseInt(this.selectedCategory.maxPrice, 10);
    console.log(minPrice);
    console.log(maxPrice)

    if(this.selectedCategory.categoria == "Todo"){
      this.ProductService.getApiProducts()
        .then(response => {
          this.productsCategory = response;
        })
      } else {
        console.log("hola")
        this.ProductService.getApiProductsCategory(this.selectedCategory.categoria, minPrice, maxPrice)

          .then(data => {
            this.productsCategory = data;
          })
    }
    // if(this.selectedCategory == "Todo"){
    //   this.productsCategory= this.products;
    // }else{
    //   this.products.filter(product => product.category == this.selectedCategory).forEach(item => this.productsCategory.push(item));
    //   this.productsCategory = JSON.parse(JSON.stringify(this.products));
    // }
  }

  async categoryFilter(){
    this.inFiltering = true;
    this.filtering = [];
    this.filtering = await this.ProductService.getApiProductsCategory(this.selectedCategory.categoria, this.value, this.highValue);
    console.log(this.inFiltering);
    console.log(this.filtering);
    console.log(this.value);
    console.log(this.highValue);
    console.log(this.selectedCategory);
  }

  ngOnInit(): void {
    console.log('Esto solo una vez')

    // Esto de aquí solo nos funcionaría al 100% si no se va a volver a navegar
    // desde un categoria/:categoria a otro igual categoria/:categoria
    // en ese caso, el ngOnInit solo se nos ejecutó la primera vez, así que ahora
    // vamos a poner la opción del .subscribe() que aunque el ngOnInit igualmente
    // se ejcuta una sola vez, el subscribe se quedará atento a los cambios
    // en los params o en los queryParams 💥 🤯
    // const opcion = this.route.snapshot.paramMap.get('categoria');
    // this.getProductByCategory(opcion)

    // este subscribe se reejecutará si navegamos por ejemplo de
    // categoria/Televisiones a => categoria/SmartPhones
    // y recibimos en params['categoria'] el valor de SmartPhones


    // Esto sería para quedarme atento tanto de los params como de los
    // queryparams a la vez
    combineLatest([
      this.route.params,
      this.route.queryParams
    ])
      .subscribe(results => {
        const params = results[0]; // esto es el resultado de this.route.params
        const queryParams = results[1];  // esto es el resultado de this.route.queryParams
        const categoria = params['categoria'];
        this.value2 = this.value
        this.value2 = queryParams['minPrice'];
        this.highValue2 = this.highValue
        console.log(this.value)
        this.highValue2 = queryParams['maxPrice'];
        // this.getProductByCategory(this.categoriaFilter, { minPrice: minPrice })
        this.getProductByCategory(
          {
            categoria: categoria,
            minPrice: this.value2,
            maxPrice: this.highValue2
          })
      })



    // Esto de aquí abajo funciona, pero quizás haya bugs al interactuar el usuario
    // ya que se tuvo que ejecutar el subscribe del categoria antes que el otro, si no
    // el método que llama el subscribe de queryPramas no sabrá en que categoría estamos
    // this.route.params
    //   .subscribe(params => {
    //     console.log('Esto significa que cambió la categoría')
    //     this.categoriaFilter = params['categoria'];
    //     this.getProductByCategory(this.categoriaFilter)
    //   });
    // this.route.queryParams
    //   .subscribe(queryParams => {
    //     console.log('Esto significa que cambiaron los queryParams')
    //     const minPrice = queryParams['minPrice'];
    //     console.log({ categoria: this.categoriaFilter });
    //     this.getProductByCategory(this.categoriaFilter, { minPrice: minPrice })
    // });


    // Lo que falta es usar un merge para unir ambos subscribe() en uno solo
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


  

}
