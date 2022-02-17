import { Component, OnInit } from '@angular/core';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { Personaje } from '../dbz.interfaces';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'goku',
      poder: 20000
  },
  {
    nombre: 'vegeta',
    poder: 19500
  }
];
nuevo: Personaje = {
  nombre: "maestro roshi",
  poder: 50000
}
agregarNuevoPersonaje(argumento: Personaje){
  this.personajes.push(argumento)
}
}
