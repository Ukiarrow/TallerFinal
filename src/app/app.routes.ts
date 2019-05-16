import { Routes } from '@angular/router';

import { DirectivaComponent } from './components/directiva/directiva.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServicioComponent } from './components/servicio/servicio.component';

export const ROUTES: Routes = [
  { path: 'directiva', component: DirectivaComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'servicio', component: ServicioComponent},
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];
