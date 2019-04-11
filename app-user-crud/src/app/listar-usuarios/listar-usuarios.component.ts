import { Component, OnInit } from "@angular/core";
import { Usuario } from "../models/usuario";
import { usuarioService } from "../services/usuario.services";
import { ResourceLoader } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: "app-listar-usuarios",
  templateUrl: "./listar-usuarios.component.html",
  styleUrls: ["./listar-usuarios.component.css"],
  providers: [usuarioService]
})
export class ListarUsuariosComponent implements OnInit {
  public usuarios: Usuario[];
  
  constructor(private usuarioService: usuarioService,private toastr:ToastrService) {

  }

  ngOnInit() {
    this.cargarUsuarios();

    console.log("Lista usuarios (despues de  funcion http): " + this.usuarios);

  }

  cargarUsuarios() {
    console.log("ABAJO");

     this.usuarioService.getAll().subscribe(
      data=>{
        //this.usuarios = data;
      
          let data_usuarios = data['usuarios'];
          this.usuarios = data_usuarios;
          console.log('DATA API = ',data)
        
      },
      error=>{
        console.log('Error al listar los usuarios desde el servidor => '+error)
      }
    );
  }


  borrar(id:string){
 
    var confirmacion = confirm("Estas seguro que quieres borrar el usuario con ID = "+id);
    if (confirmacion) {
      let user_para_borrar = new Usuario(id,'','','','',new Date());
      this.usuarioService.delete(user_para_borrar).subscribe(
        data=>{
          if (data["status"]=200) {
            this.toastr.warning(data['message'])
            this.cargarUsuarios();
          }
          else{
            this.toastr.warning('No se ha podido borrar el Usuario')
          }
        },
        error=>{
          this.toastr.warning("ERROR = "+error)
        }
      )
    }

  }


  redirectToUpdate(){
    console.log('REDIRECCIONANDO')
  }
}
