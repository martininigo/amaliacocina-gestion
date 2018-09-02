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
      {headerName: 'Nombre', field: 'nombre', editable: true },
      {headerName: 'Descripción', field: 'descripcion', editable: true },
      {headerName: 'Tiempo de Horno', field: 'tiempoHorno', editable: true }
  ];

  editType = "fullRow"
  rowData: any;  
  ngOnInit() {
	  this.rowData = this.recetaService.getAll();
  }

  onRowEditingStopped(event) {
	  this.recetaService.update(event.data);
	    window.alert("row ");
	  }

}
