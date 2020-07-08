import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() showCopyChild: any;
  @Input() productsChild: any;
  @Input() searchingChild: any;
  @Input() showChild: any;
  @Input() categoryChild: any;
  @Input() selectedCategoryChild: string;
  @Input() productsCategoryChild: any []; 
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
  

 
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  filtrarPrecioPadre(data) {
    this.filtro = data;
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
    this.lengthShowCopy = this.showCopyChild.length;
    this.searchingChild = this.filtro.searching;
    this.filteringChild = this.filtro.filtering;
  }  

  

}
