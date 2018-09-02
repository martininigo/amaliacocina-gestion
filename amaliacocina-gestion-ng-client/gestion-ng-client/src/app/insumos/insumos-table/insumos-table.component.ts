import { Component, OnInit } from '@angular/core';
import {Insumo} from '../shared/insumo.model';
import {InsumoService} from '../shared/insumo.service';
import {ActivatedRoute} from '@angular/router';
import {CheckboxEditorComponent} from "../../shared/components/checkbox-editor.component";
import {CheckboxRendererComponent} from "../../shared/components/checkbox-renderer.component";
import {ButtonsRenderComponent} from "../../shared/components/buttons-render.component";

enum UnidadMedida {
    GR ='gr' ,
    ML = 'ml',
    U = 'u'
}

@Component({
  selector: 'app-insumos-table',
  templateUrl: './insumos-table.component.html',
  styleUrls: ['./insumos-table.component.css']
})
export class InsumosTableComponent implements OnInit {
	
	insumo: Insumo;

	public isParentEditMode = false;


	  constructor(private route: ActivatedRoute,
			  private insumoService: InsumoService) {}
	  
	  columnDefs = [
	      {headerName: 'Acciones', editable: false, 
              cellRendererFramework: ButtonsRenderComponent},
	      {headerName: 'Nombre', field: 'nombre', editable: true },
	      {headerName: 'Descripción', field: 'descripcion', editable: true },
	      {headerName: 'Unidad', field: 'unidad', editable: true, cellEditor: "agSelectCellEditor",
	    	  cellEditorParams: {values: Object.values(UnidadMedida)}},
	      {headerName: 'Cantidad', field: 'cantidad', editable: true },
	      {headerName: 'Precio', field: 'precio', editable: true },
	      {headerName: 'Es Ingrediente', field: 'esIngrediente', editable: true, 
              cellRendererFramework: CheckboxRendererComponent,
              cellEditorFramework: CheckboxEditorComponent}
	  ];

	  editType = "fullRow"
	  rowData: any;  
	  ngOnInit() {
		  this.rowData = this.insumoService.getAll();
	  }

	  onRowEditingStopped(event) {
	  
		    this.insumoService.update(event.data)
            .subscribe(
                savedInsumo => {
                    console.log('Insumo Saved');
                },
                error => console.log(error)
            )
	  }
	  
	  onGridReady(params) {
		    this.gridApi = params.api;
		    this.gridColumnApi = params.columnApi;

		    params.api.sizeColumnsToFit();
		  }
	}
