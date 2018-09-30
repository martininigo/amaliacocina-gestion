import {Component} from "@angular/core";
import {ButtonsRenderComponent} from '../../shared/components/buttons-render.component';
import {InsumoService} from '../shared/insumo.service';
import {Insumo} from '../shared/insumo.model';

@Component({
    selector: 'buttons-actions-cell',
    templateUrl: '../../shared/components/buttons-render.component.html',
    styleUrls: ['../../shared/components/buttons-render.component.css']
})
export class InsumosButtonsRenderComponent extends ButtonsRenderComponent<Insumo, InsumoService> {

	  constructor(insumoService: InsumoService) {
		  super(insumoService);
	  }
}