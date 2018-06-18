import {RECETAS} from '../mock-recetas';
import {Receta} from '../receta';
import {RecetaService} from '../receta.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetas: Receta[];
  selectedReceta: Receta;

  constructor(private recetaService: RecetaService) {}

  ngOnInit() {
    this.getRecetas();
  }

  onSelect(receta: Receta): void {
    this.selectedReceta = receta;
  }

  getRecetas(): void {
    this.recetaService.getRecetas().subscribe(recetas => this.recetas = recetas);
  }
}
