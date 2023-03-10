import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../enviroment/enviroment';

const base_url = enviroment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private get token(){
    return localStorage.getItem('token') || ''
  }

  private get header(){
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  public getProducts = (query='') => {
    return this.httpClient.get(`${base_url}/product?data=${query}`);
  }

  public createProduct = (data:any) => {
    return this.httpClient.post(`${base_url}/product`, data, this.header);
  }
  
}
