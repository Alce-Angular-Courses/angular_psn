import { Component, OnInit } from '@angular/core';
import { TareaIf } from 'src/app/models/tarea.model';

@Component({
  selector: 'psn-lista-plus',
  templateUrl: './lista-plus.component.html',
  styleUrls: ['./lista-plus.component.css']
})
export class ListaPlusComponent implements OnInit {

  aTareas: Array<TareaIf>;
  tarea: TareaIf;

  constructor() { }

  ngOnInit() {
    this.aTareas = [];
  }

  addTarea(newTarea: TareaIf) {
    console.log('Desde el padre');
    console.log(newTarea);
    this.aTareas.push(Object.assign({}, newTarea ));
  }

  deleteTarea(i) {
    this.aTareas.splice(i, 1);
  }

  changeState(i) {
    this.aTareas[i].isCompleted = !this.aTareas[i].isCompleted;
    console.log(this.aTareas);
  }

}
