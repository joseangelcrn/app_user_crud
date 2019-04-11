import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule  } from "@angular/router";


//Importar componentes

import { InicioComponent } from "../app/inicio/inicio.component";
import { ListarUsuariosComponent } from "../app/listar-usuarios/listar-usuarios.component";
import { CrearUsuarioComponent } from "../app/crear-usuario/crear-usuario.component";
import { BorrarUsuarioComponent } from "../app/borrar-usuario/borrar-usuario.component";
import { BuscarUsuarioComponent } from "./buscar-usuario/buscar-usuario.component";



const appRoutes : Routes = [

    {path:'',component:InicioComponent},
    {path:'inicio',component:InicioComponent},
    {path:'listar_usuarios',component:ListarUsuariosComponent},
    {path:'buscar_usuario',component:BuscarUsuarioComponent},
    {path:'buscar_usuario/:id',component:BuscarUsuarioComponent},
    {path:'crear_usuario',component:CrearUsuarioComponent},
    {path:'borrar_usuario',component:BorrarUsuarioComponent},
    {path:'**',component:InicioComponent}

];

export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);