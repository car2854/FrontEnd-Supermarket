import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {

  apiLoaded!: Observable<boolean>

  center: google.maps.LatLngLiteral = {lat: -17.7746443, lng: -63.1709362};
  zoom = 12;

  constructor(
    private httpClient: HttpClient,
    private mapService: MapService
  ){}

  ngOnInit(): void {
    this.mapService.getApiGoogle()
    .subscribe({
      error: (err:any) => {
        console.log(err);
      },
      next: (resp:any) => {
        this.apiLoaded = this.httpClient.jsonp(`https://maps.googleapis.com/maps/api/js?key=${resp.apiToken}`, 'callback')
          .pipe(
            map(() => true),
            catchError((err:any) => {
              console.log(err);
              return of(false)
            }),
          );

      }
    })
  }
}
