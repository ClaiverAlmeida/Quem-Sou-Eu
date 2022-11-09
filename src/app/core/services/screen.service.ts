import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScreenService {
  mobileScreen() {
    return window.innerWidth <= 626 ? true : false;
  }

  hdResolution() {
    return window.innerWidth <= 1330  ? true : false;
  }

}
