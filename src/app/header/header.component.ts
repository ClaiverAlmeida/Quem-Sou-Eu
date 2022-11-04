import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  listHeader: any[] = [];
  fullScreen: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.getListHeader();
   this.onResize(event)
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
      { title: 'SOBRE', href: 'sobre' },
      { title: 'PROJETOS', href: 'projetos' },
      { title: 'SETUP', href: 'setup' },
      { title: 'CONTATO', href: 'contato' },
    ];
  };
}