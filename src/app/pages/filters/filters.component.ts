import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() event = new EventEmitter<any>();
  @Output() sobremesas= new EventEmitter<any>();
  showCategoria: boolean = false;
  showNewCategoria: boolean = false;
  showPrecio: boolean = false;
  filtro: {
    value: number,
    highValue: number,
    searching: boolean,
    filtering: boolean,
    showCategoria: boolean,
    showPrecio: boolean,
    showNewCategoria: boolean,
    checkSobremesas: boolean,
    checkPortatiles: boolean,
    checkTelevisores: boolean,
    seleccionado: string
  }
  value: number = 500;
  highValue: number = 2000;
  options: Options = {
    floor: 0,
    ceil: 3000
  };
  checkSobremesas: boolean = false;
  checkPortatiles: boolean = false;
  checkTelevisores: boolean = false;

  listaCategorias: string[] = ["Sobremesas", "Portátiles", "Televisores", "Smartphones", "Auriculares", "Accesorios Smartphones", "Auriculares", "Altavoces", "Componentes"];
  seleccionado: string;

  constructor() { }

  ngOnInit(): void {
  }


  filtrarPrecio(){
    this.event.emit({value: this.value, 
                    highValue: this.highValue,
                    searching: false, 
                    filtering: true, 
                    showCategoria: this.showCategoria,
                    showNewCategoria: this.showNewCategoria,
                    showPrecio: this.showPrecio,
                    checkSobremesas: this.checkSobremesas,
                    checkPortatiles: this.checkPortatiles,
                    checkTelevisores: this.checkTelevisores,
                    seleccionado: this.seleccionado});
  }

  filtrarSobremesas() {
    this.sobremesas.emit({checkSobremesas: this.checkSobremesas, searching: false, filtering: true, showCategoria: this.showCategoria,
      showPrecio: this.showPrecio})
  }

  MostrarFiltroPrecio() {
    this.showPrecio = !this.showPrecio;
  }

  MostrarFiltroCategoria() {
    this.showCategoria = !this.showCategoria;
  }
  
  MostrarFiltroNewCategoria() {
    this.showNewCategoria = !this.showNewCategoria;
  }

}
