import {Component} from "@angular/core";

import {ICellRendererAngularComp} from "ag-grid-angular/main";

@Component({
    selector: 'checkbox-cell',
    template: `<input type="checkbox" #input [(ngModel)]="value" disabled="disabled">`
})

export class CheckboxRendererComponent implements ICellRendererAngularComp {
    private params: any;
    private value: boolean;


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

    refresh(params: any): boolean {
        this.params = params;
        this.setValue(params);
        return true;
    }

}

