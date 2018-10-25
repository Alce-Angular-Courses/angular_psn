import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { TareasModule } from './tareas/tareas.module';
import { AboutModule } from './about/about.module';
import { ContactosModule } from './contactos/contactos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosComponent } from './usuarios/usuarios.component';

// the second parameter 'es' is optional
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    TareasModule,
    AboutModule,
    ContactosModule,
    UsuariosModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
