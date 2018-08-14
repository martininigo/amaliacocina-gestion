import {Receta} from '../recetas/shared/receta.model';
import {RecetaService} from '../recetas/shared/receta.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  recetas: Receta[];

  constructor(private recetaService: RecetaService) {}

  ngOnInit() {
    this.getRecetas();
  }

  getRecetas(): void {
    this.recetaService.getAll().subscribe(recetas => this.recetas = recetas.slice(1, 5));
  }

}
