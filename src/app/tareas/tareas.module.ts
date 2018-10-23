import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { ListaSimpleComponent } from './lista-simple/lista-simple.component';
import { FormsModule } from '@angular/forms';
import { ListaPlusComponent } from './lista-plus/lista-plus.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { TareaComponent } from './tarea/tarea.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TareasRoutingModule
  ],
  declarations: [TareasComponent, ListaSimpleComponent, ListaPlusComponent, NuevaTareaComponent, TareaComponent]
})
export class TareasModule { }
