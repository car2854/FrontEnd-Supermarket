import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { BranchOfficeComponent } from './client-page/branch-office/branch-office.component';
import { ListProductsComponent } from './client-page/list-products/list-products.component';
import { ComponentsModule } from '../components/components.module';
import { ManageProductComponent } from './company-page/manage-product/manage-product.component';
import { ManageBranchOfficeComponent } from './company-page/manage-branch-office/manage-branch-office.component';


@NgModule({
  declarations: [
    PagesComponent,
    SidebarComponent,
    NavbarComponent,
    BranchOfficeComponent,
    ListProductsComponent,
    ManageProductComponent,
    ManageBranchOfficeComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
