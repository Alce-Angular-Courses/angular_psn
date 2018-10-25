import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    UsuariosRoutingModule
  ],
  declarations: [
    UsuariosComponent
  ]
})
export class UsuariosModule { }
