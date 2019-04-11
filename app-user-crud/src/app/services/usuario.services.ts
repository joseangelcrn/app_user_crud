import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { Observable, of } from "rxjs";
// import { map, catchError, tap } from "rxjs/operators";
import { Usuario } from "../models/usuario";

import { Observable, of } from "rxjs";

@Injectable()
export class usuarioService {
  public url: string;
  public port = 5000;

  constructor(private http: HttpClient) {
    this.url = `http://localhost:${this.port}/user`;
  }

  // getPrueba() {
  //   return "Esto es una prueba";
  // }
  // getById(id: String) {}

  // deleteById(id: String) {}

  // actualizar(user_actualizado: Usuario) {}

  /*

*/
  add(usuario:Usuario) {
     return this.http.post(this.url + "/add",usuario);
  }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url + "/all");
  }

  delete(usuario:Usuario){
    return this.http.delete(this.url+"/delete/"+usuario._id);
  }

  get(_id:String){
    return this.http.get(this.url+"/"+_id);
  }

  update(usuario:Usuario){
    return this.http.put(this.url+"/update",usuario)
  }
}
