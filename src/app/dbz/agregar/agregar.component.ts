import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../dbz.interfaces';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input() personajes:Personaje[] = [];
  @Input() nuevo: Personaje = {
    nombre: 'Trunks',
    poder : 12000
  }
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  agregar(){
    console.log(this.nuevo);
    this.onNuevoPersonaje.emit(this.nuevo)
  }
}
