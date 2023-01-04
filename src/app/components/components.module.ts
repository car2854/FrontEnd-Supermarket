import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './input-search/input-search.component';
import { GoogleMapComponent } from './google-map/google-map.component';

import { HttpClientJsonpModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    InputSearchComponent,
    GoogleMapComponent
  ],
  imports: [
    CommonModule,
    HttpClientJsonpModule,
    GoogleMapsModule
  ],
  exports: [
    InputSearchComponent,
    GoogleMapComponent,
  ]
})
export class ComponentsModule { }
