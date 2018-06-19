import {MessageService} from './message.service';
import {RECETAS} from './mock-recetas';
import {Receta} from './receta';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class RecetaService {

  constructor(private http: HttpClient, private messageService: MessageService) {}

  private recetasUrl = 'api/recetas'


  private log(message: string) {
    this.messageService.add('RecetaService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getRecetas(): Observable<Receta[]> {
    this.log('obteniendo Recetas');
    return this.http.get<Receta[]>(
      this.recetasUrl).pipe(tap(recetas => this.log('Obteniendo Recetas')), catchError(this.handleError('getRecetas', [])));
  }

  getReceta(id: number): Observable<Receta> {
    const url = `${this.recetasUrl}/${id}`;
    return this.http.get<Receta>(url).pipe(
      tap(_ => this.log(`obteniendo receta id=${id}`)),
      catchError(this.handleError<Receta>(`getReceta id=${id}`))
    );
  }

  updateReceta(receta: Receta): Observable<any> {
    return this.http.put(this.recetasUrl, receta, httpOptions).pipe(
      tap(_ => this.log('actualizando receta id= ${receta.id}')),
      catchError(this.handleError<any>('updateReceta')));
  }

  addReceta(receta: Receta): Observable<Receta> {
    return this.http.post<Receta>(this.recetasUrl, receta, httpOptions).pipe(
      tap((hero: Receta) => this.log(`se agregó la receta w/ id=${hero.id}`)),
      catchError(this.handleError<Receta>('addReceta')));
  }

  deleteReceta(receta: Receta | number): Observable<Receta> {
    const id = typeof receta === 'number' ? receta : receta.id;
    const url = `${this.recetasUrl}/${id}`;

    return this.http.delete<Receta>(url, httpOptions).pipe(
      tap(_ => this.log(`eliminando la receta id=${id}`)),
      catchError(this.handleError<Receta>('deleteReceta'))
    );
  }

  searchRecetas(term: string): Observable<Receta[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Receta[]>(`${this.recetasUrl}/?nombre=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Receta[]>('searchRecetas', []))
    );
  }
}
