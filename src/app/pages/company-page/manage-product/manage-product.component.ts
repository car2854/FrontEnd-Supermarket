import { Component } from '@angular/core';
import { ProductModel } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent {

  public products: ProductModel[] = [];

  constructor(
    private productService: ProductService
  ){}

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe({
        error: (err:any) => {
          console.log(err);
        },
        next: (resp:any) => {
          this.products = resp.products;
          console.log(this.products);
          
        }
      })
  }
}
