import { Injectable } from '@angular/core';
import { listHeader } from 'src/app/components/template-simple/template-list-header.type';
@Injectable({ providedIn: 'root' })
export class WhoAmIService {
  constructor() {}

  getListHeader() {
    return listHeader;
  }
}
