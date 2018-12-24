import { Component, OnInit } from '@angular/core';
import {Insumo} from '../shared/insumo.model';
import {InsumoService} from '../shared/insumo.service';
import {ActivatedRoute} from '@angular/router';
import {CheckboxEditorComponent} from "../../shared/components/checkbox-editor.component";
import {CheckboxRendererComponent} from "../../shared/components/checkbox-renderer.component";
import {InsumosButtonsRenderComponent} from "./insumos-buttons-render.component";

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
	
	private gridApi;
	private gridColumnApi;
	insumo: Insumo;
	public isParentEditMode = false;
	
	constructor(private route: ActivatedRoute, private insumoService: InsumoService) {}
	  
	columnDefs = [
		{headerName: 'Acciones', field: 'acciones', editable: false, 
			cellRendererFramework: InsumosButtonsRenderComponent},
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
		event.api.stopEditing(true);
	}
		  
	onAddRow(){
		this.gridApi.updateRowData({ add: [{}], addIndex: 0 });
//		this.gridApi.startEditingCell({
//			rowIndex: 0,
//			colKey: 'nombre'
//		});
		var firstRowNode = this.gridApi.getDisplayedRowAtIndex(0);
		var params = { columns: ['acciones'], rowNodes: [firstRowNode]};
		var instances = this.gridApi.getCellRendererInstances(params);
		firstRowNode.setSelected(true);
		var framework = instances[0].getFrameworkComponentInstance();
		framework.onBtAddRow();
//	    this.gridApi.updateRowData({ add: [{}], addIndex: 0 });
//		this.gridApi.getRowNode(0).setSelected(true);
	}
	  
	onGridReady(params) {
		this.gridApi = params.api;
		this.gridColumnApi = params.columnApi;
	}	  
}