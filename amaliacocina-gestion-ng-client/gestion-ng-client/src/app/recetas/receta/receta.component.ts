import {Receta} from '../shared/receta.model';
import {RecetaService} from '../shared/receta.service';
import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  @Input() receta: Receta;
  constructor(private route: ActivatedRoute,
    private recetaService: RecetaService,
    private location: Location) {}

  ngOnInit() {
    this.getReceta();
  }

  getReceta(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recetaService.get(id)
      .subscribe(receta => this.receta = receta);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.recetaService.update(this.receta).subscribe(() => this.goBack());
  }
}
