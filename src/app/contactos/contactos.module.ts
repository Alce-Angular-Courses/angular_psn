import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos.component';
import { FormTdComponent } from './form-td/form-td.component';

@NgModule({
  imports: [
    CommonModule,
    ContactosRoutingModule
  ],
  declarations: [ContactosComponent, FormTdComponent]
})
export class ContactosModule { }
