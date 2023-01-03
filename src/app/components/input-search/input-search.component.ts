import { Component, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent {
  @ViewChild('refInput') refInput!: ElementRef

  @Input() placeholder: string = '';
  
  constructor(){
    
  }

  public change = ():void => {
    
  }
}
