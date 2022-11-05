import { MainComponent } from './screen/main/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'main', component: MainComponent},

  // { path: '', pathMatch: 'full', redirectTo: 'projetos' },
  // {
  //   path: 'signed-in-redirect',
  //   pathMatch: 'full',
  //   redirectTo: 'projetos',
  // },
  // { path: '', redirectTo: 'main', pathMatch: 'full' },
  // {
  //   path: '',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () =>
  //         import('./screen/screens.modules').then((x) => x.ScreensModule),
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
