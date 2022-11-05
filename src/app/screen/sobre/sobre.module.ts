import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './../../component/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre/sobre.component';
import { SobreRoutingModule } from './sobre-routing.module';

@NgModule({
  declarations: [SobreComponent],
  imports: [FormsModule, CommonModule, ReactiveFormsModule, SobreRoutingModule,ComponentsModule],
  providers: [],
  exports: [],

})
export class SobreModule {}
