import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ca-button',
  templateUrl: './ca-button.component.html',
  styleUrls: ['./ca-button.component.css']
})
export class CaButtonComponent implements OnInit {

  @Input() title: string = '';
  @Input() ordem: string = "default";
  @Input() rota: string = "";

  constructor() {}

  ngOnInit(): void {}
}
