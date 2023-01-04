import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from '../guards/token.guard';
import { BranchOfficeComponent } from './client-page/branch-office/branch-office.component';
import { ListProductsComponent } from './client-page/list-products/list-products.component';
import { ManageBranchOfficeComponent } from './company-page/manage-branch-office/manage-branch-office.component';
import { ManageProductComponent } from './company-page/manage-product/manage-product.component';
import { NewBranchOfficeComponent } from './company-page/new-branch-office/new-branch-office.component';
import { NewProductComponent } from './company-page/new-product/new-product.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [TokenGuard],
    canLoad: [TokenGuard],
    children: [

      // Client
      { path: 'branch-office', component: BranchOfficeComponent },
      { path: 'list-products', component: ListProductsComponent },

      // Company
      { path: 'manage/products', component: ManageProductComponent },
      { path: 'manage/new-product', component: NewProductComponent },
      { path: 'manage/branch-office', component: ManageBranchOfficeComponent },
      { path: 'manage/new-branch-office', component: NewBranchOfficeComponent },

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
