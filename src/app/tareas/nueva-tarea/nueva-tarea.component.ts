import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TareaIf, Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'psn-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.css']
})
export class NuevaTareaComponent implements OnInit {

  @Output() evTarea: EventEmitter<TareaIf>;
  tarea: TareaIf;
  constructor() {
    this.evTarea = new EventEmitter();
   }

  ngOnInit() {
    this.tarea = new Tarea();
  }

  sendAddTarea() {
    console.log('Desde el hijo');
    console.log(this.tarea);
    this.evTarea.next(this.tarea);
  }
}
