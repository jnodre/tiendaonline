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
  marcasSelects = [];
   marcas = [{"id":"001","name":"HP"},{"id":"002","name":"ASUS"},{"id":"003","name":"Acer"},{"id":"004","name":"Lenovo"},{"id":"005","name":"Xiaomi"},{"id":"006","name":"Cellularline"},{"id":"007","name":"Startech"},{"id":"008","name":"Samsung"},
   {"id":"009","name":"Apple"},{"id":"010","name":"Sandisk"},{"id":"011","name":"Microsoft"},{"id":"012","name":"Primux"},{"id":"013","name":"Thomson"}, {"id":"014","name":"Sudio"}, {"id":"015","name":"Sony"}, {"id":"016","name":"Fonestar"},
   {"id":"017","name":"Wonderboom"},{"id":"018","name":"Creative"},{"id":"019","name":"LG"},{"id":"020","name":"NVIDIA"},{"id":"021","name":"Engel"}];
   marca1: string = null;
   marca2: any = null;
   marca3: any = null;
   marca4: any = null;
   marca5: any = null;
   marca6: any = null;
   marca7: any = null;
   marca8: any = null;
   marca9: string = null;
   marca10: any = null;
   marca11: any = null;
   filtersOn : boolean = true;
   filtersHideText: string = "Ocultar Filtros"; 
  

 
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
    console.log(maxPrice);
    const marca1 = this.selectedCategory.marca1;
    const marca2 = this.selectedCategory.marca2;
    const marca3 = this.selectedCategory.marca3;
    const marca4 = this.selectedCategory.marca4;
    const marca5 = this.selectedCategory.marca5;

    if(this.selectedCategory.categoria == "Todo"){
      this.ProductService.getApiProducts()
        .then(response => {
          this.productsCategory = response;
        })
      } else {
        console.log("hola")
        this.ProductService.getApiProductsCategory(this.selectedCategory.categoria, minPrice, maxPrice, marca1, marca2, marca3, marca4, marca5)

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
  changeText(){
    if (this.filtersOn){
      return this.filtersHideText = 'Ocultar Filtros';
    } else return this.filtersHideText = 'Mostrar Filtros' 
  }
  isSelected2(s:any) {
    return this.marcasSelects.findIndex((item) => item.id === s.id) > -1 ? true : false;
   }

  selectMarca(s) {
    this.marcasSelects.find((item) => item.id === s.id) ? 
    this.marcasSelects = this.marcasSelects.filter((item) => item.id !== s.id) :
    this.marcasSelects.push(s);
    console.log(this.marcasSelects.length)
    if (this.marcasSelects.length == 0) {
      this.marca1 = null;
    }
    if(this.marcasSelects.length == 1) {
      this.marca1= this.marcasSelects[0].name;
      this.marca2= null;
    } else if (this.marcasSelects.length == 2) {
      this.marca1= this.marcasSelects[0].name;
      this.marca2= this.marcasSelects[1].name;
      this.marca3= null;
    } else if (this.marcasSelects.length == 3) {
      this.marca1= this.marcasSelects[0].name;
      this.marca2= this.marcasSelects[1].name;
      this.marca3= this.marcasSelects[2].name;
      this.marca4= null;
    } else if (this.marcasSelects.length == 4) {
      this.marca1= this.marcasSelects[0].name;
      this.marca2= this.marcasSelects[1].name;
      this.marca3= this.marcasSelects[2].name;
      this.marca4= this.marcasSelects[3].name;
      this.marca5= null;
    } else if (this.marcasSelects.length == 5) {
      this.marca1= this.marcasSelects[0].name;
      this.marca2= this.marcasSelects[1].name;
      this.marca3= this.marcasSelects[2].name;
      this.marca4= this.marcasSelects[3].name;
      this.marca5= this.marcasSelects[4].name;
      this.marca6= null;
    } else if (this.marcasSelects.length == 6) {
      this.marca1= this.marcasSelects[0].name;
      this.marca2= this.marcasSelects[1].name;
      this.marca3= this.marcasSelects[2].name;
      this.marca4= this.marcasSelects[3].name;
      this.marca5= this.marcasSelects[4].name;
      this.marca6= this.marcasSelects[5].name;
      this.marca7= null;
    } else if (this.marcasSelects.length == 7) {
      this.marca1= this.marcasSelects[0].name;
      this.marca2= this.marcasSelects[1].name;
      this.marca3= this.marcasSelects[2].name;
      this.marca4= this.marcasSelects[3].name;
      this.marca5= this.marcasSelects[4].name;
      this.marca6= this.marcasSelects[5].name;
      this.marca7= this.marcasSelects[6].name;
      this.marca8= null;
    } else if (this.marcasSelects.length == 8) {
      this.marca1= this.marcasSelects[0].name;
      this.marca2= this.marcasSelects[1].name;
      this.marca3= this.marcasSelects[2].name;
      this.marca4= this.marcasSelects[3].name;
      this.marca5= this.marcasSelects[4].name;
      this.marca6= this.marcasSelects[5].name;
      this.marca7= this.marcasSelects[6].name;
      this.marca8= this.marcasSelects[7].name;
      this.marca9 = null;
    } else if (this.marcasSelects.length == 9) {
      this.marca1= this.marcasSelects[0].name;
      this.marca2= this.marcasSelects[1].name;
      this.marca3= this.marcasSelects[2].name;
      this.marca4= this.marcasSelects[3].name;
      this.marca5= this.marcasSelects[4].name;
      this.marca6= this.marcasSelects[5].name;
      this.marca7= this.marcasSelects[6].name;
      this.marca8= this.marcasSelects[7].name;
      this.marca9 = this.marcasSelects[8].name;
      this.marca10= null;
    } else if (this.marcasSelects.length == 10) {
      this.marca1= this.marcasSelects[0].name;
      this.marca2= this.marcasSelects[1].name;
      this.marca3= this.marcasSelects[2].name;
      this.marca4= this.marcasSelects[3].name;
      this.marca5= this.marcasSelects[4].name;
      this.marca6= this.marcasSelects[5].name;
      this.marca7= this.marcasSelects[6].name;
      this.marca8= this.marcasSelects[7].name;
      this.marca9 = this.marcasSelects[8].name;
      this.marca10= this.marcasSelects[9].name;
      this.marca11= null;
    } else if (this.marcasSelects.length == 11) {
      this.marca1= this.marcasSelects[0].name;
      this.marca2= this.marcasSelects[1].name;
      this.marca3= this.marcasSelects[2].name;
      this.marca4= this.marcasSelects[3].name;
      this.marca5= this.marcasSelects[4].name;
      this.marca6= this.marcasSelects[5].name;
      this.marca7= this.marcasSelects[6].name;
      this.marca8= this.marcasSelects[7].name;
      this.marca9 = this.marcasSelects[8].name;
      this.marca10= this.marcasSelects[9].name;
      this.marca11= this.marcasSelects[10].name;
    }
    console.log(this.marca9)
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
        this.marca1 = queryParams ['marca1']
        this.marca2 = queryParams ['marca2']
        this.marca3 = queryParams ['marca3']
        this.marca4 = queryParams ['marca4']
        this.marca5 = queryParams ['marca5']
        // this.getProductByCategory(this.categoriaFilter, { minPrice: minPrice })
        this.getProductByCategory(
          {
            categoria: categoria,
            minPrice: this.value2,
            maxPrice: this.highValue2,
            marca1: this.marca1,
            marca2: this.marca2,
            marca3: this.marca3,
            marca4: this.marca4,
            marca5: this.marca5,
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
