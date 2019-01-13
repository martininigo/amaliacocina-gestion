import {GenericService} from '../../shared/generic.service';
import {MessageService} from '../../shared/message.service';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Insumo} from './insumo.model';

@Injectable({
  providedIn: 'root'
})

export class InsumoService extends GenericService<Insumo>{

    constructor(private http1: HttpClient, private messageService1: MessageService) {
        super(http1, messageService1, 'https://192.168.0.6:8443/insumos');
    }
}
