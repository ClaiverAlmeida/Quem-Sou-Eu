import { WhoAmIController } from 'src/app/core/controllers/usuario/who-am-i.controller';
import { ScreenService } from './../../core/services/screen.service';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() atual = '';
  listHeader: any[] = [];
  mobile: boolean = false;
  hdResolution: boolean = false;
  constructor(
    private screenService: ScreenService,
    private whoAmIController: WhoAmIController
  ) {}

  ngOnInit(): void {
    this.getListHeader();
    this.onResize(event);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.mobile = this.screenService.mobileScreen();
    this.hdResolution = this.screenService.hdResolution();
  }
  getListHeader = () => {
    this.listHeader = this.whoAmIController.getListHeader();
  };
}
