import { Receta } from '../receta';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  receta: Receta = {
    id: 1,
    nombre: 'Azucar',
    descripcion: 'Azucar!!!'
  };

  constructor() {}

  ngOnInit() {
  }

}
