import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tailwindClass } from 'src/app/helpers/tailwind-class';
import { CategoryModel } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {

  public dataTailwindClass = tailwindClass;
  public categories: CategoryModel[] = [];

  public productForm = this.fb.group({
    name: [,[Validators.required]],
    description: [,[Validators.required]],
    category_id: ['',[Validators.required, Validators.minLength(1)]],
    price: [0.00,[Validators.required]]
  })

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe({
        error: (err:any) => {
        },
        next: (resp:any) => {
          this.categories = resp.categories;
        }
        
      })
  }

  public createProduct = () => {
    if (this.productForm.invalid) return;
    
    const data = {
      ...this.productForm.value,
      'category_id': parseInt(this.productForm.get('category_id')!.value || '0')
    }

    this.productService.createProduct(data)
      .subscribe({
        error: (err:any) => {
          console.log(err);
        },
        next: (resp:any) => {
          console.log(resp);
          this.router.navigateByUrl('/dashboard/manage/products');
        }
      })
    
  }
}
