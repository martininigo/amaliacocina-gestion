import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular/main";
import {GenericService} from '../generic.service'
import {GenericModel} from '../generic.model'

@Component({
    selector: 'buttons-actions-cell',
    templateUrl: './buttons-render.component.html',
    styleUrls: ['./buttons-render.component.css']
})
export class ButtonsRenderComponent<T extends GenericModel, T2 extends GenericService<T>> implements ICellRendererAngularComp {
    public params: any;
	public isEditMode = false;
	public isAddMode = false;
	private gridApi;

    agInit(params: any): void {
        this.params = params;
        this.gridApi = params.api;
    }
    
    constructor(private service: GenericService<GenericModel>) {}

    public invokeParentMethod() {
        this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
    }

    refresh(): boolean {
        return false;
    }
    
    onBtAddRow(){
    	this.isAddMode = true;
    	this.onBtEditRow();
    }
    
    onBtEditRow(){
    	this.isEditMode = true;
    	this.gridApi.startEditingCell({
            rowIndex: this.params.node.rowIndex, 
            colKey: this.params.column.columnApi.columnController.allDisplayedColumns[1].colDef.field
          });
    }
    
    onBtOkEditRow(){
    	this.isEditMode = false;
    	this.gridApi.stopEditing();
    	if (this.isAddMode) {
    		this.isAddMode = false;
	    	this.service.add(this.params.data)
            .subscribe(
                savedElemento => {
                    console.log('Elemento Agregado');
                },
                error => console.log(error)
            )
    	} else {
	    	this.service.update(this.params.data)
	            .subscribe(
	                savedElemento => {
	                    console.log('Elemento Guardado');
	                },
	                error => console.log(error)
	            )
    	}
    }
    
    onBtCancelEditRow(){
    	this.isEditMode = false;
    	this.gridApi.stopEditing(true);
    }
    
    onBtDeleteRow(){
        var selectedData = new Array(this.params.data); 
        if(confirm("¿Está seguro de eliminar el elemento " + this.params.data.nombre + "?")) {
        	var res = this.gridApi.updateRowData({ remove: selectedData });
        	this.service.delete(this.params.data)
            .subscribe(
                deletedElemento => {
                    console.log('Elemento eliminado');
                },
                error => console.log(error)
            )
          }
        
    }
}