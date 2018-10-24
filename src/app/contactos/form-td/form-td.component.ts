import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactoIf, Contacto } from 'src/app/models/contacto.modelo';

@Component({
  selector: 'psn-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {

  @ViewChild('cForm') cForm: any;
  aCursos: Array<any>;
  contacto: ContactoIf;
  constructor() { }

  ngOnInit() {
    this.contacto = new Contacto();
    this.aCursos = [
      { nombre: 'Angular', codigo: 'ng001'},
      { nombre: 'React', codigo: 're001'},
      { nombre: 'NodeJS', codigo: 'nd001'}];
  }

  onSubmit(ev) {
    ev.preventDefault();
    console.log('Enviado');
    console.log(this.cForm);
  }
}
