import {Receta} from '../receta';
import {RecetaService} from '../receta.service';
import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-receta-search',
  templateUrl: './receta-search.component.html',
  styleUrls: ['./receta-search.component.css']
})
export class RecetaSearchComponent implements OnInit {

  recetas$: Observable<Receta[]>;
  private searchTerms = new Subject<string>();

  constructor(private recetaService: RecetaService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.recetas$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.recetaService.search(term)),
    );
  }
}