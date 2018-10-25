import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'psn-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  user: any;
  aUsuarios: Array<any>;
  idUser: number;

  constructor(public usuariosSrv: UsuariosService) { }

  ngOnInit() {
    this.aUsuarios = [];
    this.user = {name: '', email: ''};
  }

  onMostrar () {
    this.aUsuarios = [];
    if (this.idUser) {
      this.usuariosSrv.getUser(this.idUser).then(
        (data) => { this.aUsuarios.push(data); }
      );
    } else {
      this.usuariosSrv.getUsers().then(
        (data: any) => {this.aUsuarios = data; }
      );
    }
  }

  onAdd() {
    this.usuariosSrv.postUser(this.user).then(
      (data) => {
        console.log(data);
        this.idUser = null;
        this.onMostrar();
      }
    );
  }

  onModificar() {
    if (!this.user) { return; }
    this.usuariosSrv.patchUser(this.idUser, this.user).then(
      (data) => {
        console.log(data);
        this.idUser = null;
        this.onMostrar();
      }
    );
  }

  onBorrar() {
    if (!this.user) { return; }
    this.usuariosSrv.deleteUser(this.idUser).then(
      (data) => {
        console.log(data);
        this.idUser = null;
        this.onMostrar();
      }
    );
  }

}
