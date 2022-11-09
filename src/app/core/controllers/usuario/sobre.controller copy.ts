import { Injectable } from '@angular/core';
import { SobreService } from '../../services/sobre.service';
@Injectable({ providedIn: 'root' })
export class SobreController {
  constructor(private sobreService: SobreService) {}

  getDadosSobre = () => this.sobreService.getDadosSobre();

  getdadosWhoAmI = () => this.sobreService.getDadosWhoAmI();
}
