import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  /* { path: 'tareas', component: TareasComponent }, */
  { path: 'tareas', loadChildren: './tareas/tareas.module#TareasModule'},
   /* { path: 'contactos', component: ContactosComponent }, */
  { path: 'contactos', loadChildren: './contactos/contactos.module#ContactosModule' },
  /* { path: 'usuarios', component: UsuariosComponent }, */
  { path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosModule' },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
