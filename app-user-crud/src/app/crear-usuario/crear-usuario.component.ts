import { Component, OnInit } from "@angular/core";
import { Usuario } from "../models/usuario";
import { usuarioService } from "../services/usuario.services";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-crear-usuario",
  templateUrl: "./crear-usuario.component.html",
  styleUrls: ["./crear-usuario.component.css"],
  providers: [usuarioService]
})
export class CrearUsuarioComponent implements OnInit {
  
  usuario_nuevo: Usuario;

  constructor(private usuarioService: usuarioService,private toastr:ToastrService) {
    this.usuario_nuevo = new Usuario("", "", "", "", "",new Date());
  }

  ngOnInit() {}

  guardarUsuario() {
    console.log("USUARIO GUARDADO !!");

    console.log(this.usuario_nuevo);

    this.usuarioService.add(this.usuario_nuevo)
    .subscribe(usuario_nuevo=>{
      if (usuario_nuevo) {

        this.toastr.success('USUARIO GUARDADO CORRECTAMENTE')
    this.usuario_nuevo = new Usuario("", "", "", "", "",new Date());
    
      }
    });


  }
}
