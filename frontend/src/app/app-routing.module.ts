import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FrecuentesComponent } from './pages/frecuentes/frecuentes.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { SoporteComponent } from './pages/soporte/soporte.component';
import { DatosPrestadorComponent } from './pages/datos-prestador/datos-prestador.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sobre_nosotros', component: SobreNosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'frecuentes', component: FrecuentesComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'pagos', component: PagosComponent },
  { path: 'soporte', component: SoporteComponent},
  { path: 'datos-prestador', component: DatosPrestadorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
