import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor() { }
   
  getApiProducts(){
    return axios.get("http://localhost:3000/products")
      .then (response => {
        return response.data;
      })

      .catch (error => {
        console.log("Se ha producido el error" ,error);
      })
  }
}
