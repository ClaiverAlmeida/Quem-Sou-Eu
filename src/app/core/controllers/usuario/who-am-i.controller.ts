import { Injectable } from '@angular/core';
import { WhoAmIService } from '../../services/who-am-i.service';
@Injectable({ providedIn: 'root' })
export class WhoAmIController {
  constructor(private whoAmIService: WhoAmIService) {}

  getListHeader = () => this.whoAmIService.getListHeader();

}
