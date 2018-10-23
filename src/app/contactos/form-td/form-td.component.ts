import { Component, OnInit } from '@angular/core';
import { ContactoIf, Contacto } from 'src/app/models/contacto.modelo';

@Component({
  selector: 'psn-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css']
})
export class FormTdComponent implements OnInit {

  contacto: ContactoIf;
  constructor() { }

  ngOnInit() {
    this.contacto = new Contacto();
  }

}
