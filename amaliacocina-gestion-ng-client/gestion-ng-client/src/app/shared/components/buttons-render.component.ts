import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular/main";

@Component({
    selector: 'buttons-actions-cell',
    templateUrl: './buttons-render.component.html',
    styleUrls: ['./buttons-render.component.css']
})
export class ButtonsRenderComponent implements ICellRendererAngularComp {
    public params: any;

	public isEditMode = false;

    agInit(params: any): void {
        this.params = params;
    }

    public invokeParentMethod() {
        this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
    }

    refresh(): boolean {
        return false;
    }
    
    onBtEditRow(){
    	this.isEditMode = true;
    	this.params.api.startEditingCell({
            rowIndex: this.params.node.rowIndex, 
            colKey: this.params.column.columnApi.columnController.allDisplayedColumns[1].colDef.field
          });
    }
    onBtOkEditRow(){
    	this.isEditMode = false;
    	this.params.api.stopEditing();
    }
    onBtCancelEditRow(){
    	this.isEditMode = false;
    	this.params.api.stopEditing(true);
    }
}