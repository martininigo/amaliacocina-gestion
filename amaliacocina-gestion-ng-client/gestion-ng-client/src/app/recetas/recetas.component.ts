import {Receta} from './shared/receta.model';
import {RecetaService} from './shared/receta.service';
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

  getRecetas(): void {
    this.recetaService.getAll().subscribe(recetas => this.recetas = recetas);
  }

  add(nombre: string): void {
    nombre = nombre.trim();
    if (!nombre) {return; }
    this.recetaService.add({nombre} as Receta).subscribe(receta => {this.recetas.push(receta); });
  }

  delete(receta: Receta): void {
    this.recetas = this.recetas.filter(h => h !== receta);
    this.recetaService.delete(receta).subscribe();
  }
}
