import { ComponentsModule } from './../component/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [],
  imports: [FormsModule, CommonModule, ReactiveFormsModule, ComponentsModule, MainModule],
  providers: [],
  exports: [],
})
export class ScreensModule {}
