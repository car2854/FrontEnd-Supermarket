import { DATE_PIPE_DEFAULT_OPTIONS, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    RouterModule,
    AuthModule,
    NgOptimizedImage,
    HttpClientModule
  ],
  providers: [{
    provide: DATE_PIPE_DEFAULT_OPTIONS,
    useValue: { dateFormat: 'shortDate' }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
