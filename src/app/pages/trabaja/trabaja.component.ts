import { Component, OnInit } from '@angular/core';
import { User,ProductApiService } from '../../product-api.service';

@Component({
  selector: 'app-trabaja',
  templateUrl: './trabaja.component.html',
  styleUrls: ['./trabaja.component.css']
})
export class TrabajaComponent implements OnInit {
  nuevoUser: any = {};
  name: string = "";

  

  constructor(private ProductService: ProductApiService) { }

  crearCV(){
    console.log(this.nuevoUser.name)
    this.ProductService.createWorker(this.nuevoUser)
      .then (newUser => {
        console.log(newUser);
        this.nuevoUser.name = "";
      })
  }

  ngOnInit(): void {
  }

}
