import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor() { }

  getApiProducts(seleccionadoPage: number = 1) {
    let url = 'http://localhost:3000/products?'
    if (seleccionadoPage) {
      url += '_page=' + seleccionadoPage + '&_limit=10';
    }
    return axios.get(url)
      .then (response => {
        return response.data;
      })
      .catch (error => {
        console.log("Se ha producido el error" ,error);
      })
  }

  getApiProducts2(seleccionadoPage?: number) {
    let url = 'http://localhost:3000/products?'
    if (seleccionadoPage) {
      url += '_page=' + seleccionadoPage + '&_limit=10';
    }
    return axios.get(url)

      .then (response => {
        return response.data;
      })
      .catch (error => {
        console.log("Se ha producido el error" ,error);
      })
  }

  getApiProductsSearch(busqueda:string, value?: number, highValue?: number, selectedCategory?: any){
    console.log(busqueda);
    let url = `http://localhost:3000/products?`;
    if (busqueda) {
      url += `title_like=${busqueda}`;
    }
    if (value) {
      url += `&price_gte=${value}`;
    }
    if (highValue) {
      url += `&price_lte=${highValue}`;
    }
    if (selectedCategory){
    if (selectedCategory.length > 0){
      for (let i=0; i <= selectedCategory.length; i++){
        url += `&category=${selectedCategory[i]}`
      }
    }
    }
    return axios.get(url)
      .then (response => {
        return response.data;
      })
      .catch (error => {
        console.log("Se ha producido el error", error);
      })
  }



  getApiProductsCategory(selectedCategory:string, minPrice : number= 0, maxPrice: number = 2500  ){
    let url = 'http://localhost:3000/products?'

    if (selectedCategory) {
      url += `category=` + selectedCategory;
    }
    if (minPrice) {
      url += '&price_gte=' + minPrice;
    }
    if (maxPrice) {
      url += '&price_lte=' + maxPrice;

    }
    return axios.get(url)
      .then (response => {
        return response.data;
      })
      .catch (error => {
        console.log("Se ha producido el error", error);
      })
  }

  getApiProductsPaginateFirst(){
    let url = 'http://localhost:3000/products?_page=1&_limit=10'
    return axios.get(url)
      .then (response => {
        return response.data;
      })
      .catch (error => {
        console.log("Se ha producido el error", error);
      })
  }

  getApiProductsPaginate(seleccionadoPage: number){
    let url = 'http://localhost:3000/products?'
    if (seleccionadoPage) {
      url += '_page=' + seleccionadoPage + '&_limit=10';
    }
    return axios.get(url)
      .then (response => {
        return response.data;
      })
      .catch (error => {
        console.log("Se ha producido el error", error);
      })
  }
   // This method update the product in the API
   updateProduct(product) {
    if (product && typeof product.id != 'undefined') {
      // No pierdo los atributos que tuviese antes
      return axios
        .patch(
          `http://localhost:3000/products/${product.id}`,
          product
      ).then(res => res.data)
    } else {
      return;
    }
  }
  putProduct(product) {
    // Machaco totalmente el objeto anterior en product.id
    if (product && typeof product.id != 'undefined') {
      return axios
      .put(
        `http://localhost:3000/products/${product.id}`,
        product
        ).then(res => res.data)
    } else {
      return;
    }
  }

}
