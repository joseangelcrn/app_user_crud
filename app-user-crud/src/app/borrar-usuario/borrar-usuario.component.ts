import { Component, OnInit } from "@angular/core";
import { Usuario } from "../models/usuario";
import { usuarioService } from '../services/usuario.services';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: "app-borrar-usuario",
  templateUrl: "./borrar-usuario.component.html",
  styleUrls: ["./borrar-usuario.component.css"],
  providers: [usuarioService]
})
export class BorrarUsuarioComponent implements OnInit {
  user: Usuario;

  constructor(private usuarioService: usuarioService, private toastr:ToastrService) {
    this.user = new Usuario("", "", "", "", "", new Date());
    
  }

  ngOnInit() {

   
  }

  borrarUsuario() {
    console.log('USUARIO CON ID = '+this.user._id+" HA SIDO ELIMINADO CON EXITO !!");

    
          var confirmacion = confirm("Estas seguro que quieres borrar el usuario con ID = "+this.user._id);

          if (confirmacion) {
            this.usuarioService.delete(this.user).subscribe(
              data =>{
                if (data["status"]== 200) {
                 //  alert('USUARIO CON ID =  "'+this.user._id+'" ha sido borrado correctamente!');
                  this.toastr.warning(data["message"])
                  
                }
                else{
                  this.toastr.warning(data["message"])
                }

              }
            );
          }

  }
}
