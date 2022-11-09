import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-input',
  templateUrl: './ca-input.component.html',
})
export class CaInputComponent implements OnInit {

  @Input() title:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
