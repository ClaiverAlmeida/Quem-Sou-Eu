import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CaInputComponent } from './ca-input/ca-input.component';
import { CaButtonComponent } from './ca-button/ca-button.component';

@NgModule({
  declarations: [HeaderComponent, CaButtonComponent, CaInputComponent],
  imports: [FormsModule, RouterModule, CommonModule, ReactiveFormsModule],
  providers: [],
  exports: [CaButtonComponent, CaInputComponent, HeaderComponent],
})
export class ComponentsModule {}
