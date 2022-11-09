import {
  dadosSobre,
  dadosWhoAmI,
} from 'src/app/components/template-simple/template-dados-sobre.type';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class SobreService {
  constructor() {}

  getDadosSobre() {
    return dadosSobre;
  }
  getDadosWhoAmI() {
    return dadosWhoAmI;
  }
}
