import {DashboardComponent} from './dashboard/dashboard.component';
import {RecetaComponent} from './recetas/receta/receta.component';
import {RecetasComponent} from './recetas/recetas.component';
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'recetas', component: RecetasComponent},
  {path: 'detail/:id', component: RecetaComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
