import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public userForm = this.fb.group({
    email     : ['carlos@gmail.com',[Validators.required]],
    password  : ['123456',[Validators.required]]
  })

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ){}

  public login = () => {
    if (this.userForm.invalid) return;

    this.authService.login(this.userForm.value)
      .subscribe({
        error: (err:any) => {
          console.log(err);
        },
        next: (resp:any) => {
          if (resp.user.type === 'client')
            this.router.navigateByUrl('/dashboard/branch-office');
            else
            this.router.navigateByUrl('/dashboard/manage/products');
        }
      })
  }
  
}
