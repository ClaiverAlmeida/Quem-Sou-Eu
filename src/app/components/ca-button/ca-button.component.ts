import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-button',
  templateUrl: './ca-button.component.html',
})
export class CaButtonComponent implements OnInit {

  @Input() title: string = '';
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() ordem: string = "default";
  @Input() rota: string = "";

  constructor() {}

  ngOnInit(): void {}
}
