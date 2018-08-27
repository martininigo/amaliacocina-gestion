import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {RecetasComponent} from './recetas/recetas.component';
import {RecetaComponent} from './recetas/receta/receta.component';
import {MessagesComponent} from './messages/messages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './shared/in-memory-data.service';
import {RecetaSearchComponent} from './recetas/receta-search/receta-search.component';
import { InsumosComponent } from './insumos/insumos.component';
import { InsumoComponent } from './insumos/insumo/insumo.component';
import { InsumoListComponent } from './insumos/insumo-list/insumo-list.component';
import { InsumosTableComponent } from './insumos/insumos-table/insumos-table.component';
import { RecetasTableComponent } from './recetas/recetas-table/recetas-table.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    RecetaComponent,
    MessagesComponent,
    DashboardComponent,
    RecetaSearchComponent,
    InsumosComponent,
    InsumoComponent,
    InsumoListComponent,
    InsumosTableComponent,
    RecetasTableComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    FormsModule,
    AppRoutingModule,
    HttpClientModule
//    ,HttpClientInMemoryWebApiModule.forRoot(
//      InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
