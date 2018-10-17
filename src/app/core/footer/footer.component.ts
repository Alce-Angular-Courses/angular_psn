import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'psn-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  autor: string;
  lugar: string;
  empresa: string;
  fecha: Date;

  constructor() { }

  ngOnInit() {
    this.autor = 'Alejandro Cerezo';
    this.lugar = 'Madrid';
    this.empresa = 'Arelance';
    this.fecha = new Date();
   }

}
