import {Receta} from '../receta';
import {RecetaService} from '../receta.service';
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
    this.recetaService.getRecetas().subscribe(recetas => this.recetas = recetas.slice(1, 5));
  }

}
