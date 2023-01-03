import { Injectable } from '@angular/core';
import { enviroment } from '../enviroment/enviroment';
import { HttpClient } from "@angular/common/http";

import { tap, of, catchError } from 'rxjs';
import { UserModel } from '../models/user.model';
import { SidebarModel } from '../models/sidebar.model';

const base_url = enviroment.base_url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userModel!: UserModel;
  public sidebarModel: SidebarModel[] = [];

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

  public login = (data:any) => {
    return this.httpClient.post(`${base_url}/auth`, data)
      .pipe(
        tap((resp:any) => {
          this.sidebarModel = resp.sidebarData;
          this.userModel = resp.user;
          localStorage.setItem('token', resp.token);
        })
      )
  }

  public isValidate = () => {

    return this.httpClient.post(`${base_url}/auth/renew`, '', this.header)
      .pipe(
        tap((resp:any) => {
          this.sidebarModel = resp.sidebarData;
          this.userModel = resp.user;
          localStorage.setItem('token', resp.token);
          return true;
        }),
        catchError(err => of(false))
      )
  }

  public logout = () => {
    localStorage.removeItem('token');
  }
}
