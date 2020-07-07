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

  getApiProductsSearch(busqueda:string, value: number, highValue: number){
    let url = 'http://localhost:3000/products?'
    if (busqueda) {
      url += 'title_like=' + busqueda;
    }
    if (value) {
      url += '&price_gte=' + value;
    }
    if (highValue) {
      url += '&price_lte=' + highValue;
    }
    return axios.get(url)
      .then (response => {
        return response.data;
      })
      .catch (error => {
        console.log("Se ha producido el error", error);
      })
  }

  getApiProductsCategory(selectedCategory:string){
    let url = 'http://localhost:3000/products?'
    if (selectedCategory) {
      url += 'category=' + selectedCategory;
    }
    return axios.get(url)
      .then (response => {
        return response.data;
      })
      .catch (error => {
        console.log("Se ha producido el error", error);
      })
  }
}
