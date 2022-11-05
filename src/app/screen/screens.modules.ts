import { SobreModule } from './sobre/sobre.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainModule } from './main/main.module';
import { ScreenRoutingModule } from './screens-routing.modules';
import { ComponentsModule } from '../component/components.module';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ScreenRoutingModule,
    ComponentsModule,
    MainModule,
    SobreModule
  ],
  providers: [],
  exports: [],
})
export class ScreensModule {}
