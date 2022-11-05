import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  @Input() atual = ""
  listHeader: any[] = [];
  fullScreen: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.getListHeader();
   this.onResize(event  )
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (window.innerWidth <= 600) {
      this.fullScreen = false;
    } else {
      this.fullScreen = true;
    }
  }
  getListHeader = () => {
    this.listHeader = [
      { title: 'SOBRE', rota: '/sobre',ordem: "inicio" },
      { title: 'PROJETOS', rota: '/projetos',ordem: "meio" },
      { title: 'CURRÍCULO', rota: '/corriculo' ,ordem: "meio" },
      { title: 'CONTATO', rota: '/who-am-I',ordem: "fim" },
    ];
  };
}
