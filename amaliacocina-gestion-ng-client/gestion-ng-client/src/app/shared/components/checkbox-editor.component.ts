import {AfterViewInit, Component, ViewChild, ViewContainerRef} from "@angular/core";

import {ICellEditorAngularComp} from "ag-grid-angular/main";

@Component({
    selector: 'checkbox-editor-cell',
    template: `<input type="checkbox" #input [(ngModel)]="value">`
    
})
export class CheckboxEditorComponent implements ICellEditorAngularComp, AfterViewInit {
    private params: any;
    public value: boolean;
    private cancelBeforeStart: boolean = false;

    @ViewChild('input', {read: ViewContainerRef}) public input;


    agInit(params: any): void {
        this.params = params;
        this.value = this.params.node.data.esIngrediente;
    }

    getValue(): any {
        return this.value;
    }

    setValue(check: boolean) {
    	this.value = check;
    }
    
    // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
    ngAfterViewInit() {
        this.input.element.nativeElement.focus();
    }

    onClick(check: boolean) {
        this.setValue(check);
    }
}