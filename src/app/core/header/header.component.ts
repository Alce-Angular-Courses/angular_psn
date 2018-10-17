import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'psn-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  logo: string ;

  constructor() {
  }

  ngOnInit() {
    this.title = 'Angular PSN';
    this.logo = '../assets/logo.svg';
  }

}
