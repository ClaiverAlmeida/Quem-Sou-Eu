import { MainComponent } from './main/main/main.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  // { path: '', component: MainComponent, pathMatch: 'full' },
  {
    path: 'who-am-I',
    loadChildren: () => import('./main/main.module').then((x) => x.MainModule),
  },
  {
    path: 'sobre',
    loadChildren: () =>
      import('./sobre/sobre.module').then((x) => x.SobreModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class ScreenRoutingModule {}
