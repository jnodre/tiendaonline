import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../product-api.service';
import { ActivatedRoute } from "@angular/router";
import { merge } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  show: any = [];
  busquedaSave: any;
  value: number = 0;
  value2: number = 0;
  highValue: number = 3000;
  highValue2: number = 3000;
  options: Options = {
    floor: 0,
    ceil: 3000
  };
  filtering: any = [""];
  inFiltering: boolean = false;
  // checkboxSobremesa :boolean = false;
  // checkboxSobremesa1 :boolean = false;
  // checkboxPortatil  :boolean = false;
  // checkboxTelevisor :boolean = false;
  // checkboxComponente  :boolean = false;
  // checkboxSmartphone  :boolean = false;
  // checkboxAccesorio :boolean = false;
  // checkboxAuricular :boolean = false;
  // checkboxAltavoz :boolean = false;
  sobremesa : string = null;
  televisor : string;

  selectedCategory: any = [];

  userSelectsString = '';
  userSelects = [];
   suggestions = [{"id":"001","name":"Sobremesas"},{"id":"002","name":"Portátiles"},{"id":"003","name":"Televisores"},{"id":"004","name":"Componentes"},{"id":"005","name":"Smartphones"},{"id":"006","name":"Accesorios Smartphones"},{"id":"007","name":"Auriculares"},{"id":"008","name":"Altavoces"}];
   categoria1: string = null;
   categoria2: any = null;
   categoria3: any = null;
   categoria4: any = null;
   categoria5: any = null;
   categoria6: any = null;
   categoria7: any = null;
   categoria8: any = null;

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
        this.value2 = this.value
        this.value2 = queryParams['minPrice'];
        this.highValue2 = this.highValue
        console.log(this.value)
        this.categoria1 = queryParams ['categoria1']
        this.categoria2 = queryParams ['categoria2']
        this.categoria3 = queryParams ['categoria3']
        this.categoria4 = queryParams ['categoria4']
        this.categoria5 = queryParams ['categoria5']
        this.marca1 = queryParams ['marca1']
        this.marca2 = queryParams ['marca2']
        this.marca3 = queryParams ['marca3']
        this.marca4 = queryParams ['marca4']
        this.marca5 = queryParams ['marca5']
        console.log(this.marca1)
        this.highValue2 = queryParams['maxPrice'];
        this.searchItem(
          {
            busqueda: search,
            minPrice: this.value2,
            maxPrice: this.highValue2,
            categoria1 : this.categoria1,
            categoria2: this.categoria2,
            categoria3: this.categoria3,
            categoria4: this.categoria4,
            categoria5: this.categoria5,
            marca1: this.marca1,
            marca2: this.marca2,
            marca3: this.marca3,
            marca4: this.marca4,
            marca5: this.marca5,
          })
      })
  }


  isSelected(s:any) {
   return this.userSelects.findIndex((item) => item.id === s.id) > -1 ? true : false;
  }
  selectSuggestion(s) {
    this.userSelects.find((item) => item.id === s.id) ? 
    this.userSelects = this.userSelects.filter((item) => item.id !== s.id) :
    this.userSelects.push(s);
    console.log(this.userSelects.length)
    if (this.userSelects.length == 0) {
      this.categoria1 = null;
      // this.categoria2= null;
      // this.categoria3= null;
      // this.categoria4= null;
      // this.categoria5= null;
      // this.categoria6= null;
      // this.categoria7= null;
      // this.categoria8= null;
    }
    if(this.userSelects.length == 1) {
      this.categoria1= this.userSelects[0].name;
      this.categoria2= null;
      // this.categoria3= null;
      // this.categoria4= null;
      // this.categoria5= null;
      // this.categoria6= null;
      // this.categoria7= null;
      // this.categoria8= null;
    } else if (this.userSelects.length == 2) {
      this.categoria1= this.userSelects[0].name;
      this.categoria2= this.userSelects[1].name;
      this.categoria3= null;
      // this.categoria4= null;
      // this.categoria5= null;
      // this.categoria6= null;
      // this.categoria7= null;
      // this.categoria8= null;
    } else if (this.userSelects.length == 3) {
      this.categoria1= this.userSelects[0].name;
      this.categoria2= this.userSelects[1].name;
      this.categoria3= this.userSelects[2].name;
      this.categoria4= null;
      // this.categoria5= null;
      // this.categoria6= null;
      // this.categoria7= null;
      // this.categoria8= null;
    } else if (this.userSelects.length == 4) {
      this.categoria1= this.userSelects[0].name;
      this.categoria2= this.userSelects[1].name;
      this.categoria3= this.userSelects[2].name;
      this.categoria4= this.userSelects[3].name;
      this.categoria5= null;
      // this.categoria6= null;
      // this.categoria7= null;
      // this.categoria8= null;
    } else if (this.userSelects.length == 5) {
      this.categoria1= this.userSelects[0].name;
      this.categoria2= this.userSelects[1].name;
      this.categoria3= this.userSelects[2].name;
      this.categoria4= this.userSelects[3].name;
      this.categoria5= this.userSelects[4].name;
      this.categoria6= null;
      // this.categoria7= null;
      // this.categoria8= null;
    } else if (this.userSelects.length == 6) {
      this.categoria1= this.userSelects[0].name;
      this.categoria2= this.userSelects[1].name;
      this.categoria3= this.userSelects[2].name;
      this.categoria4= this.userSelects[3].name;
      this.categoria5= this.userSelects[4].name;
      this.categoria6= this.userSelects[5].name;
      this.categoria7= null;
      // this.categoria8= null;
    } else if (this.userSelects.length == 7) {
      this.categoria1= this.userSelects[0].name;
      this.categoria2= this.userSelects[1].name;
      this.categoria3= this.userSelects[2].name;
      this.categoria4= this.userSelects[3].name;
      this.categoria5= this.userSelects[4].name;
      this.categoria6= this.userSelects[5].name;
      this.categoria7= this.userSelects[6].name;
      this.categoria8= null;
    } else if (this.userSelects.length == 8) {
      this.categoria1= this.userSelects[0].name;
      this.categoria2= this.userSelects[1].name;
      this.categoria3= this.userSelects[2].name;
      this.categoria4= this.userSelects[3].name;
      this.categoria5= this.userSelects[4].name;
      this.categoria6= this.userSelects[5].name;
      this.categoria7= this.userSelects[6].name;
      this.categoria8= this.userSelects[7].name;
    }
    console.log(this.categoria1)
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

  // checkValueSobremesas(event: any){
  //    this.sobremesa = event;
  //    console.log(this.sobremesa);
  //  }

  //  checkValueTelevisores(event: any){
  //    this.televisor = event;
  //    console.log(this.televisor);
  //  }

  searchItem (busqueda){
    this.busquedaSave = JSON.parse(JSON.stringify(busqueda));
    console.log(this.busquedaSave)
    const minPrice = parseInt(this.busquedaSave.minPrice, 10);
    const maxPrice = parseInt(this.busquedaSave.maxPrice, 10);
    console.log(this.busquedaSave.categoria1)
    const categoria1 = this.busquedaSave.categoria1;
    const categoria2 = this.busquedaSave.categoria2;
    const categoria3 = this.busquedaSave.categoria3;
    const categoria4 = this.busquedaSave.categoria4;
    const categoria5 = this.busquedaSave.categoria5;
    const marca1 = this.busquedaSave.marca1;
    const marca2 = this.busquedaSave.marca2;
    const marca3 = this.busquedaSave.marca3;
    const marca4 = this.busquedaSave.marca4;
    const marca5 = this.busquedaSave.marca5;
    console.log(minPrice);
    console.log(maxPrice);
    console.log(categoria1);
    console.log(categoria2);
    console.log(this.busquedaSave.busqueda)
    this.busquedaSave.busqueda = this.busquedaSave.busqueda.replace("á", "a")
      .replace("É", "E")
      .replace("Í", "I")
      .replace("Ó", "O") 
      .replace("Ú", "U")
      .replace("á", "a")
      .replace("é", "e")
      .replace("í", "i")
      .replace("ó", "o")
      .replace("ú", "u");
    this.ProductService.getApiProductsSearch(this.busquedaSave.busqueda, minPrice, maxPrice, categoria1, categoria2, categoria3, categoria4, categoria5, marca1, marca2, marca3, marca4, marca5)
      .then (data => {
        this.show =data;
        console.log(this.show)
      })
      //   this.busquedaSave = JSON.parse(JSON.stringify(this.busqueda));
    busqueda.busqueda = "";
  }
  
  

  //  changeSobremesa() {
  //    if (this.checkboxSobremesa1 == false) {
  //      this.sobremesa = "Sobremesas";
  //      this.checkboxSobremesa1 = true;
  //    } else {
  //      this.sobremesa = null;
  //      this.checkboxSobremesa1 = false ;
  //    }
  //    console.log(this.sobremesa);
  //    console.log(this.checkboxSobremesa1)

  //  }

  // searchItem (busqueda){
  //   this.inFiltering = false;
  //   this.checkboxSobremesa = false;
  //   this.checkboxPortatil  = false;
  //   this.checkboxTelevisor = false;
  //   this.checkboxComponente  = false;
  //   this.checkboxSmartphone  = false;
  //   this.checkboxAccesorio = false;
  //   this.checkboxAuricular = false;
  //   this.checkboxAltavoz = false;
  //   this.busquedaSave = JSON.parse(JSON.stringify(busqueda));
  //   /*console.log(busqueda)
  //   console.log(busqueda.busqueda)
  //   console.log(this.busquedaSave)*/
  //   // this.products.forEach(product => {
  //   //   if (product.title.toLowerCase().includes(this.busqueda.toLocaleLowerCase()) === true){
  //   //     this.show.push(product);
  //   //   }
      
  //   // });
  //   this.busquedaSave.busqueda = this.busquedaSave.busqueda.replace("á", "a")
  //     .replace("É", "E")
  //     .replace("Í", "I")
  //     .replace("Ó", "O") 
  //     .replace("Ú", "U")
  //     .replace("á", "a")
  //     .replace("é", "e")
  //     .replace("í", "i")
  //     .replace("ó", "o")
  //     .replace("ú", "u");
  //   this.ProductService.getApiProductsSearch(this.busquedaSave.busqueda)
  //     .then (data => {
  //       this.show =data;
  //       console.log(this.show)
  //     })
  //     //   this.busquedaSave = JSON.parse(JSON.stringify(this.busqueda));
  //   busqueda.busqueda = "";
  // }

  // searchItem (busqueda){
  //   this.ProductService.getApiProductsSearch(this.busqueda.save)
  //     .then (data => {
  //       this.show =data;
  //       console.log(this.show)
  //     })
  //   this.busquedaSave = JSON.parse(JSON.stringify(this.busqueda));
  //   this.busqueda = "";
  // }

  // async searchFilter(){
  //   this.inFiltering = true;
  //   this.filtering = [];
  //   this.selectedCategory=[];
  //   if (this.checkboxAccesorio == true){
  //     this.selectedCategory.push("Accesorios Smartphones");
  //   } 
  //   if (this.checkboxSobremesa == true){
  //     this.selectedCategory.push("Sobremesas");
  //   } 
  //   if (this.checkboxTelevisor == true){
  //     this.selectedCategory.push("Televisores");
  //   } 
  //   if (this.checkboxPortatil == true){
  //     this.selectedCategory.push("Portátiles");
  //   } 
  //   if (this.checkboxSmartphone == true){
  //     this.selectedCategory.push("Smartphones");
  //   } 
  //   if (this.checkboxComponente == true){
  //     this.selectedCategory.push("Componentes");
  //   }
  //   if (this.checkboxAuricular == true){
  //     this.selectedCategory.push("Auriculares");
  //   }
  //   if (this.checkboxAltavoz == true){
  //     this.selectedCategory.push("Altavoces");
  //   }
  //   this.filtering = await this.ProductService.getApiProductsSearch(this.busquedaSave.busqueda, this.value, this.highValue, this.selectedCategory);
  // }

}
