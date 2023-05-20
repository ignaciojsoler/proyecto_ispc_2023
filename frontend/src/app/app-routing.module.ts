import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FrecuentesComponent } from './frecuentes/frecuentes.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { SoporteComponent } from './soporte/soporte.component';
import { DatosPrestadorComponent } from './datos-prestador/datos-prestador.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sobre_nosotros', component: SobreNosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'frecuentes', component: FrecuentesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'pagos', component: PagosComponent },
  { path: 'soporte', component: SoporteComponent},
  { path: 'datos-prestador', component: DatosPrestadorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
