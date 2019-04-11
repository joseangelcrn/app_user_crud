import { Component, OnInit, OnChanges, ɵConsole } from '@angular/core';
import { Usuario } from '../models/usuario';
import { usuarioService } from '../services/usuario.services';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css'],
  providers:[usuarioService]
})
export class BuscarUsuarioComponent implements OnInit,OnChanges {


  user: Usuario;

  public id_a_buscar = null;

  public encontrado = false;
  public editable = false;
  public fecha_aux;

  constructor(private usuarioService:usuarioService,private toastr:ToastrService,private activatedRoute: ActivatedRoute) {
    this.user = new Usuario("", "", "", "", "", new Date());
    
  }

  ngOnInit() {
    
    this.checkParameter();
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {

    console.log(changes);
    console.log('ALGO HA CAMBIADOO !!')
  }
  buscarUsuario() { 
    if (!this.id_a_buscar) {
      this.toastr.warning('NO HAS INTRODUCIDO NINGUN ID')
      this.encontrado = false;
      this.editable = false;
    }
    else{
      this.usuarioService.get(this.id_a_buscar).subscribe(
        data =>{
         if (data["status"] == 200) {
            this.user = data['usuario'];
            this.encontrado = true;
            this.editable = false;

            console.log('FECHA NACIMIENTO RAL => '+this.user.fecha_nacimiento.toString().split('T')[0])
            console.log(
            Date.parse( this.user.fecha_nacimiento.toString().split('T')[0])

            )


           
         }
  
         if (data["status"] != 200){
          
        this.toastr.warning(data['message'])
          
          this.user = {_id:"",nombre:"",apel_1:"",apel_2:"",email:"",fecha_nacimiento:new Date};
          this.encontrado = false;
          this.editable = false;
         }
  
        }
      );
    }
  


  }


  actualizarDatos(){

    this.usuarioService.update(this.user)
    .subscribe(data=>{
      if (data["status"] == 200) {
        this.toastr.info(data["message"]);
        this.editable = false;
      }
      else{
        this.toastr.warning('Algo ha saido mal!!')
      }
    },
    err=>{
      console.log('Error al actualizar = '+err)
    })
    
  }

  checkParameter(){
    this.activatedRoute.queryParams.subscribe(params => {
      let id = params['id'];
      console.log('ID = '+id); // Print the parameter to the console. 

      if (id) {
        this.id_a_buscar = id;
        this.buscarUsuario();
      }
    });
  }


}
