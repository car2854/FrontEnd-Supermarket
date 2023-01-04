import { Component, ElementRef, ViewChild, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent {
  @ViewChild('refInput') refInput!: ElementRef

  @Input() placeholder: string = '';
  @Output() textEvent = new EventEmitter<string>()
  
  constructor(){}

  public change = (e:any):void => {
    this.textEvent.emit(e.target.value);
  }

}
