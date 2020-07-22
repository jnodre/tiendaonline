import { Injectable } from '@angular/core';
import axios from "axios";
export type User = {
  name: string,
  lastname: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor() { }

  getApiProducts(seleccionadoPage: number = 1) {
    let url = 'http://localhost:3000/products?'
    if (seleccionadoPage) {
      url += '_page=' + seleccionadoPage + '&_limit=12';
    }
    return axios.get(url)
      .then (response => {
        return response.data;
      })
      .catch (error => {
        console.log("Se ha producido el error" ,error);
      })
  }

  getApiProductById(id: string) {
    let url = 'http://localhost:3000/products/' + id;
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

  getApiProductsSearch(busqueda:string, minPrice?: number, maxPrice?: number, category1?:string, category2?:string, category3?:string, category4?:string, category5?:string, marca1?: string, marca2?: string, marca3?: string, marca4?: string, marca5?: string ){
    let url = `http://localhost:3000/products?`;
    if (busqueda) {
      url += `title_like=` + busqueda;
    }
    if (minPrice) {
      url += '&price_gte=' + minPrice;
    }
    if (maxPrice) {
      url += '&price_lte=' + maxPrice;
    }
    if (category1) {
      url += `&category=` + category1;
    }
    if (category2) {
      url += `&category=` + category2;
    }
    if (category3) {
      url += `&category=` + category3;
    }
    if (category4) {
      url += `&category=` + category4;
    }
    if (category5) {
      url += `&category=` + category5;
    }
    if (marca1) {
      url += `&marca=` + marca1;
    }
    if (marca2) {
      url += `&marca=` + marca2;
    }
    if (marca3) {
      url += `&marca=` + marca3;
    }
    if (marca4) {
      url += `&marca=` + marca4;
    }
    if (marca5) {
      url += `&marca=` + marca5;
    }
    return axios.get(url)
      .then (response => {
        return response.data;
      })
      .catch (error => {
        console.log("Se ha producido el error", error);
      })
  }

  getApiProductsCategory(selectedCategory:string, minPrice : number= 0, maxPrice: number = 2500, marca1?: string, marca2?: string, marca3?: string, marca4?: string, marca5?: string, exclude?: string ){
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
    if (marca1) {
      url += `&marca=` + marca1;
    }
    if (marca2) {
      url += `&marca=` + marca2;
    }
    if (marca3) {
      url += `&marca=` + marca3;
    }
    if (marca4) {
      url += `&marca=` + marca4;
    }
    if (marca5) {
      url += `&marca=` + marca5;
    }
    if (exclude) {
      url += `&title_ne=` + exclude;
    }
    return axios.get(url)
      .then (response => {
        return response.data;
      })
      .catch (error => {
        console.log("Se ha producido el error", error);
      })
  }

  createWorker(user: User) {
    console.log(user)
    return axios.post('http://localhost:3000/workers', user)
      .then (res=> res.data)
      .catch (error => {
        console.log("Se ha producido el error", error);
      })
  }

  // getApiProductsSearch(busqueda:string, value?: number, highValue?: number, selectedCategory?: any){
  //   console.log(busqueda);
  //   let url = `http://localhost:3000/products?`;
  //   if (busqueda) {
  //     url += `title_like=${busqueda}`;
  //   }
  //   if (value) {
  //     url += `&price_gte=${value}`;
  //   }
  //   if (highValue) {
  //     url += `&price_lte=${highValue}`;
  //   }
  //   if (selectedCategory){
  //   if (selectedCategory.length > 0){
  //     for (let i=0; i <= selectedCategory.length; i++){
  //       url += `&category=${selectedCategory[i]}`
  //     }
  //   }
  //   }
  //   return axios.get(url)
  //     .then (response => {
  //       return response.data;
  //     })
  //     .catch (error => {
  //       console.log("Se ha producido el error", error);
  //     })
  // }

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
