import { Component, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent {
  @ViewChild('refInput') refInput!: ElementRef

  @Input() placeholder: string = '';
  @Input() icon: string = '';
  @Input() isPassword: boolean = false;
  
  constructor(){
    
  }

  public getClassIcon = () : string => {
    return this.icon + ' m-auto px-3'
  }

  public change = ():void => {
    
  }
}
