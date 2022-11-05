import { ComponentsModule } from './../../component/components.module';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,ComponentsModule
  ],
  providers: [],
  exports: [],
})
export class MainModule {}
 