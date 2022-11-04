
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
  ],
  providers: [],
  exports: [
  ],
})
export class ComponentsModule {}
