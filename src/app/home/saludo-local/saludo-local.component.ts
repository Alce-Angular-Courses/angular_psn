import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'psn-saludo-local',
  templateUrl: './saludo-local.component.html',
  styleUrls: ['./saludo-local.component.css'],
})
export class SaludoLocalComponent implements OnInit {

  @ViewChild('locName') name: ElementRef;

  constructor() {}

  ngOnInit() {
    console.dir(this.name);
  }

}
