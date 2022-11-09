import { Component, HostListener, OnInit } from '@angular/core';
import { SobreController } from 'src/app/core/controllers/usuario/sobre.controller copy';
import { ScreenService } from 'src/app/core/services/screen.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../../../../assets/styles/screens/_main.css'],
})
export class MainComponent implements OnInit {
  dados: any;

  constructor(
    private screenService: ScreenService,
    private sobreController: SobreController
  ) {}

  ngOnInit(): void {
    this.onResize(event);

    this.dados = this.sobreController.getdadosWhoAmI();
  }

  mobile: boolean = false;
  hdResolution: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.mobile = this.screenService.mobileScreen();
    this.hdResolution = this.screenService.hdResolution();
  }
}
