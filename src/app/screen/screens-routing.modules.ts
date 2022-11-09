import { MainComponent } from './main/main/main.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  // { path: '', component: MainComponent, pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./main/main.module').then((x) => x.MainModule),
  },
  {
    path: 'sobre',
    loadChildren: () =>
      import('./sobre/sobre.module').then((x) => x.SobreModule),
  },
  {
    path: 'curriculo',
    loadChildren: () =>
      import('./curriculo/curriculo.module').then((x) => x.CurriculoModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class ScreenRoutingModule {}
