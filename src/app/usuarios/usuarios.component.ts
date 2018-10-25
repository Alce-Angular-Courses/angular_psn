import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'psn-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  aUsuarios: Array<any>;
  url: string;
  idUser: number;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.aUsuarios = [];
  }

  onMostrar () {
    this.aUsuarios = [];
    this.url = environment.apiUsers;
    if (this.idUser) {
      this.url += `/${this.idUser}`;
      console.log(this.url);
    }
    this.http.get(this.url).toPromise().then(
      (data: any) => {
        if (Array.isArray(data)) {
           this.aUsuarios = data;
        } else {
          this.aUsuarios.push(data);
        }
      }
    );
  }
}
