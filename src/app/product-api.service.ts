import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor() { }

  getApiProducts(limit = 20) {
    return axios.get(`http://localhost:3000/products?_limit=${limit}`)
      .then (response => {
        return response.data;
      })
      .catch (error => {
        console.log("Se ha producido el error" ,error);
      })
  }

  getSearchFilter(busquedaSave:any, value:number, highValue:number, selectedCategory: any){
    let url = `http://localhost:3000/products/?title_like=${busquedaSave}&price_gte=${value}&price_lte=${highValue}`;
    if (selectedCategory.length > 0){
      for (let i=0; i <= selectedCategory.length; i++){
        url += `&category=${selectedCategory[i]}`
      }
    }
    return axios.get(url)
      .then (response => {
        return response.data;
      })

      .catch (error => {
        console.log("Ha ocurrido el siguiente error: ", error);
      })
  }

  getApiProductsSearch(busqueda:string, value?: number, highValue?: number){
    let url = `http://localhost:3000/products?title_like=${busqueda}`;
  /* if (busqueda) {
      url += 'title_like=' + busqueda;
    }
    if (value) {
      url += '&price_gte=' + value;
    }
    if (highValue) {
      url += '&price_lte=' + highValue;
    }*/
    return axios.get(url)
      .then (response => {
        return response.data;
      })
      .catch (error => {
        console.log("Se ha producido el error", error);
      })
  }



  getApiProductsCategory(selectedCategory:string, filterOptions? : {minPrice? : number}  ){
    let url = 'http://localhost:3000/products?'
    /*if (selectedCategory) {
      url += 'category=' + selectedCategory;
    }
    if (filterOptions?.minPrice) {
      url += '&price_lte=' + filterOptions.minPrice;
    }*/
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

}
