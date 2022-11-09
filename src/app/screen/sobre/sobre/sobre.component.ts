import { SobreController } from 'src/app/core/controllers/usuario/sobre.controller copy';
import { Component, HostListener, OnInit } from '@angular/core';
import { dadosSobre } from 'src/app/components/template-simple/template-dados-sobre.type';
import { ScreenService } from 'src/app/core/services/screen.service';
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['../../../../assets/styles/screens/_sobre.css'],
})
export class SobreComponent implements OnInit {
  sobreMim: any = dadosSobre;
  mobile: boolean = false;
  hdResolution: boolean = false;

  constructor(
    private screenService: ScreenService,
    private sobreController: SobreController
  ) {}

  ngOnInit(): void {
    this.onResize(event);
  }

  getSobreMim = () => (this.sobreMim = this.sobreController.getDadosSobre());

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.mobile = this.screenService.mobileScreen();
    this.hdResolution = this.screenService.hdResolution();
  }
}
