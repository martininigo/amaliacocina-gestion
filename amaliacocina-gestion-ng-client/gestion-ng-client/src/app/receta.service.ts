import {MessageService} from './message.service';
import {RECETAS} from './mock-recetas';
import {Receta} from './receta';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor(private messageService: MessageService) {}

  getRecetas(): Observable<Receta[]> {
    this.messageService.add('RecetaService: obteniendo Heroes');
    return of(RECETAS);
  }
}
