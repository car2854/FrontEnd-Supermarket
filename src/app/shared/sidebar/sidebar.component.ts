import { Component } from '@angular/core';
import { SidebarModel } from 'src/app/models/sidebar.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public sidebarModel: SidebarModel[] = [];

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.sidebarModel = this.authService.sidebarModel;
  }

}
