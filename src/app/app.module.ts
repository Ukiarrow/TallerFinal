import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DirectivaComponent } from './components/directiva/directiva.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { VillanosService } from './services/villanos.service';
import { registerLocaleData } from '@angular/common';
import localeEsCL from '@angular/common/locales/es-CL';

//registro local con nombre es-CL.
registerLocaleData(localeEsCL,'es-CL')

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServicioComponent,
    FormularioComponent,
    DirectivaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    VillanosService,
    {provide: LOCALE_ID,useValue: 'es-CL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
