import {Receta} from '../receta';
import {RecetaService} from '../receta.service';
import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.css']
})
export class RecetaDetalleComponent implements OnInit {

  @Input() receta: Receta;
  constructor(private route: ActivatedRoute,
    private recetaService: RecetaService,
    private location: Location) {}

  ngOnInit() {
    this.getReceta();
  }

  getReceta(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recetaService.getReceta(id)
      .subscribe(receta => this.receta = receta);
  }

  goBack(): void {
    this.location.back();
  }
}
