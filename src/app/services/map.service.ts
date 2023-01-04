import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../enviroment/enviroment';

const base_url = enviroment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MapService {

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


  public getApiGoogle = () => {
    return this.httpClient.get(`${base_url}/map`, this.header)
  }
}
