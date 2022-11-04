import { ComponentsModule } from './../component/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [FormsModule, CommonModule, ReactiveFormsModule, ComponentsModule],
  providers: [],
  exports: [],
})
export class ScreensModule {}
