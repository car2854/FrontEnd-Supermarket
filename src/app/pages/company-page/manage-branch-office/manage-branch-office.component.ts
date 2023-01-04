import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { tailwindClass } from 'src/app/helpers/tailwind-class';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-manage-branch-office',
  templateUrl: './manage-branch-office.component.html',
  styleUrls: ['./manage-branch-office.component.css']
})
export class ManageBranchOfficeComponent {

  public dataClass = tailwindClass;

  constructor(){
    
  }

  
  ngOnInit(): void {

  }
}
