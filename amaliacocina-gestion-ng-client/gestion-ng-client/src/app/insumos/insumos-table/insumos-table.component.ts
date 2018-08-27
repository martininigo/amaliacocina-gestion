import { Component, OnInit } from '@angular/core';
import {Insumo} from '../shared/insumo.model';
import {InsumoService} from '../shared/insumo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-insumos-table',
  templateUrl: './insumos-table.component.html',
  styleUrls: ['./insumos-table.component.css']
})
export class InsumosTableComponent implements OnInit {

	  constructor(private route: ActivatedRoute,
			  private insumoService: InsumoService) {}
	  
	  columnDefs = [
	      {headerName: 'Nombre', field: 'nombre', editable: true },
	      {headerName: 'Descripción', field: 'descripcion', editable: true },
	      {headerName: 'Unidad', field: 'unidad', editable: true },
	      {headerName: 'Precio', field: 'precio', editable: true },
	      {headerName: 'Es Ingrediente', field: 'esIngrediente', editable: true }
	  ];

	  editType = "fullRow"
	  rowData: any;  
	  ngOnInit() {
		  this.rowData = this.insumoService.getAll();
	  }

	  onRowEditingStopped(event) {
		  var insumo: Insumo = event.data;
		  this.insumoService.update(insumo);
		  window.alert("row ");
		  }

	}
