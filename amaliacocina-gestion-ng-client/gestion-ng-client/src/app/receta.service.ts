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
    this.messageService.add('RecetaService: obteniendo Recetas');
    return of(RECETAS);
  }

  getReceta(id: number): Observable<Receta> {
    this.messageService.add(`RecetaService: fetched receta id=${id}`);
    return of(RECETAS.find(receta => receta.id === id));
  }
}
