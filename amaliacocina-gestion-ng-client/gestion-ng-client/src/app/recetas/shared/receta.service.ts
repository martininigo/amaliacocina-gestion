import {GenericService} from '../../shared/generic.service';
import {MessageService} from '../../shared/message.service';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Receta} from './receta.model';

@Injectable({
    providedIn: 'root'
    })

export class RecetaService extends GenericService<Receta> {

    constructor(private http1: HttpClient, private messageService1: MessageService) {
        super(http1, messageService1, 'http://localhost:8080/recetas');
    }
}
