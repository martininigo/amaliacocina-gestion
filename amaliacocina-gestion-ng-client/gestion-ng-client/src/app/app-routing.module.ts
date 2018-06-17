import { RecetasComponent } from './recetas/recetas.component';
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {path: 'recetas', component: RecetasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}