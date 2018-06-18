import { Receta } from '../receta';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.css']
})
export class RecetaDetalleComponent implements OnInit {

  @Input() receta: Receta;
  constructor() { }

  ngOnInit() {
  }

}
