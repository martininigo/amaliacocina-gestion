import { Component, OnInit } from '@angular/core';
import {Receta} from '../shared/receta.model';
import {RecetaService} from '../shared/receta.service';

@Component({
  selector: 'app-recetas-table',
  templateUrl: './recetas-table.component.html',
  styleUrls: ['./recetas-table.component.css']
})
export class RecetasTableComponent implements OnInit {

	  constructor(private recetaService: RecetaService) {}
  
  columnDefs = [
      {headerName: 'Id', field: 'id',checkboxSelection: true  },
      {headerName: 'Nombre', field: 'nombre' },
      {headerName: 'Descripción', field: 'descripcion'}
      {headerName: 'Tiempo de Horno', field: 'tiempoHorno' },
  ];

  rowData: any;  

  ngOnInit() {
	  this.rowData = this.recetaService.getAll();
  }

}
