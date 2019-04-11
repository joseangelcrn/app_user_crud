import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { routing, appRoutingProviders } from './app.routing';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { BorrarUsuarioComponent } from './borrar-usuario/borrar-usuario.component';
import { RouterModule } from '@angular/router';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';

// toaster messages
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { ToastrModule } from 'ngx-toastr';
import { AngularMaterialModule } from './materials-module';

//angular material


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ListarUsuariosComponent,
    CrearUsuarioComponent,
    BorrarUsuarioComponent,
    BuscarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularMaterialModule
    
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
