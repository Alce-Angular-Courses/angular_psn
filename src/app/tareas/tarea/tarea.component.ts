import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TareaIf } from 'src/app/models/tarea.model';

@Component({
  selector: 'psn-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Output() evBorrar: EventEmitter<number>;
  @Output() evCompletar: EventEmitter<number>;

  @Input() tarea: TareaIf;
  @Input() index: number;

  constructor() {
    this.evBorrar = new EventEmitter();
    this.evCompletar = new EventEmitter();
  }

  ngOnInit() {
    this.tarea = Object.assign({}, this.tarea );
  }

  sendBorrar() {
    this.evBorrar.next(this.index);
  }

  sendChange() {
    console.log(this.tarea);
    this.evCompletar.next(this.index);
  }
}
