import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchOfficeComponent } from './client-page/branch-office/branch-office.component';
import { ListProductsComponent } from './client-page/list-products/list-products.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [

      // Client
      { path: 'branch-office', component: BranchOfficeComponent },
      { path: 'list-products', component: ListProductsComponent },

      // company

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
