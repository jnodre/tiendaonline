import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor() { }

  getApiProducts(limit = 20) {
    return axios.get(`http://localhost:3000/products`)
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

  getApiProductsCategory(selectedCategory:string, value? : number, highValue?: number ){
    let url = `http://localhost:3000/products?`;
    if (selectedCategory) {
      url += `category=${selectedCategory}`;
    }
    if (value) {
      url += `&price_gte=${value}`;
    }
    if (highValue) {
      url += `&price_lte=${highValue}`;
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

}
