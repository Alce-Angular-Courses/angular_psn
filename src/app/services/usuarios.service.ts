import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url: string;
  constructor(public http: HttpClient) {
  this.url = environment.apiUsers;
  }

  getUser(id) {
    const url = `${this.url}/${id}`;
    return this.http.get(url).toPromise();
  }

  getUsers() {
    return this.http.get(this.url).toPromise();
  }

  postUser(user) {
    return this.http.post(this.url, user).toPromise();
  }

  patchUser(id, user) {
    const url = `${this.url}/${id}`;
    return this.http.patch(url, user).toPromise();
  }

  deleteUser(id) {
    const url = `${this.url}/${id}`;
    return this.http.delete(url).toPromise();
  }


}
