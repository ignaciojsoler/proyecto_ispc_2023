import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [ ButtonComponent, InputComponent],
  imports: [
    CommonModule
  ]
})

export class ComponentsModule { }