import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, SaludoComponent]
})
export class HomeModule { }
