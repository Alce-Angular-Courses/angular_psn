import { Component, OnInit } from '@angular/core';
import { TareaIf, Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'psn-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {

  aTareas: Array<TareaIf>;
  tarea: TareaIf;

  constructor() { }

  ngOnInit() {
    this.aTareas = [];
    this.tarea = new Tarea();
  }

  addTarea() {
    // this.aTareas.push(JSON.parse(JSON.stringify(this.tarea)));
    this.aTareas.push(Object.assign({}, this.tarea ));
    this.tarea.nombre = '';
    console.dir(this.aTareas);
    console.table(this.aTareas);
  }

  onBorrar(i) {
    console.log(i);
    this.aTareas.splice(i, 1);
  }
}
