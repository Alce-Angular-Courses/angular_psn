import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'psn-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit() {
    this.name = 'Pepe';
  }

  onBorrar (ev) {
    this.name = '';
    console.dir(ev);
  }

}
