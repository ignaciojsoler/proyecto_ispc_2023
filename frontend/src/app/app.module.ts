import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { RegistroPrestadorComponent } from './pages/registro-prestador/registro-prestador.component';
import { FrecuentesComponent } from './pages/frecuentes/frecuentes.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { DatosPrestadorComponent } from './pages/datos-prestador/datos-prestador.component';

import { ComponentsModule } from './components/components.module';
import { LayoutsModule } from './layouts/layouts.module';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SobreNosotrosComponent,
    RegistroPrestadorComponent,
    FrecuentesComponent,
    SoporteComponent,
    DatosPrestadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    LayoutsModule,
    PagesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
