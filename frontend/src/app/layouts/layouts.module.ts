import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ HeaderComponent, FooterComponent ],
  imports: [
    AppRoutingModule
  ],
  exports: [ HeaderComponent, FooterComponent ],
})
export class LayoutsModule { }
