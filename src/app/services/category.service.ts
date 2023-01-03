import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../enviroment/enviroment';

const base_url = enviroment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

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

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCategories = () => {
    return this.httpClient.get(`${base_url}/category`);
  }

}
