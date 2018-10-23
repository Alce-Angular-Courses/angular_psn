import { Component, OnInit, Input } from '@angular/core';
import { TareaIf } from 'src/app/models/tarea.model';

@Component({
  selector: 'psn-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: TareaIf;
  constructor() { }

  ngOnInit() {
  }

  onBorrar() {

  }

  onChange() {
    console.log(this.tarea);

  }
}
