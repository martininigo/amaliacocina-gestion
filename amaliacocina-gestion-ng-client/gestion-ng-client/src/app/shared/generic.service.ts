import {GenericModel} from './generic.model';
import {MessageService} from './message.service';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

export class GenericService<T extends GenericModel> {

  constructor(private http: HttpClient, private messageService: MessageService, private url: string) {}

  private log(message: string) {
    this.messageService.add('Service: ' + message);
  }

  private handleError<T1>(operation = 'operation', result?: T1) {
    return (error: any): Observable<T1> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T1);
    };
  }

  getAll(): Observable<T[]> {
    this.log('obteniendo entidades');
    return this.http.get<T[]>(
      this.url).pipe(tap(entity => this.log('Obteniendo entidades')), catchError(this.handleError('getAll', [])));
  }

  get(id: number): Observable<T> {
    const url = `${this.url}/${id}`;
    return this.http.get<T>(url).pipe(
      tap(_ => this.log(`obteniendo entidad id=${id}`)),
      catchError(this.handleError<T>(`ge id=${id}`))
    );
  }

  update(entity: T): Observable<any> {
    const id = typeof entity === 'number' ? entity : entity.id;
    const url = `${this.url}/${id}`;
    return this.http.post(url, entity, httpOptions).pipe(
      tap(_ => this.log('actualizando entidad id= ${entity.id}')),
      catchError(this.handleError<any>('update')));
  }

  add(entity: T): Observable<T> {
    return this.http.post<T>(this.url, entity, httpOptions).pipe(
      tap((entity: T) => this.log(`se agregó la entidad w/ id=${entity.id}`)),
      catchError(this.handleError<T>('add')));
  }

  delete(entity: T | number): Observable<T> {
    const id = typeof entity === 'number' ? entity : entity.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<T>(url, httpOptions).pipe(
      tap(_ => this.log(`eliminando la entidad id=${id}`)),
      catchError(this.handleError<T>('delete'))
    );
  }

  search(term: string): Observable<T[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<T[]>(`${this.url}/?nombre=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<T[]>('search', []))
    );
  }
}
