import { Component } from '@angular/core';
import { UserModel } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  
  public userModel!: UserModel;

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.userModel = this.authService.userModel;  
  }
}
