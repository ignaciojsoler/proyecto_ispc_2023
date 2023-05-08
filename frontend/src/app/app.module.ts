import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroPrestadorComponent } from './registro-prestador/registro-prestador.component';
import { FrecuentesComponent } from './frecuentes/frecuentes.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PagosComponent } from './pages/pagos/pagos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    SobreNosotrosComponent,
    ContactoComponent,
    RegistroPrestadorComponent,
    FrecuentesComponent,
    ButtonComponent,
    InputComponent,
    RegistroComponent,
    PagosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
