export class Usuario {
  constructor(
    _id = '', nombre = '', apel_1 = '', apel_2 = '', email = '', fecha_nacimiento : Date
  ) {
    this._id =  _id,
    this.nombre =  nombre,
    this.apel_1 =  apel_1,
    this.apel_2 =  apel_2,
    this.email = email,
    fecha_nacimiento = fecha_nacimiento
  }


  _id: string;
  nombre: string;
  apel_1: string;
  apel_2: string;
  email:string;
  fecha_nacimiento: Date;
}
