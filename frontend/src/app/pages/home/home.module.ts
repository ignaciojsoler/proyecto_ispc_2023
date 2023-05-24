import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, FormsModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {}
