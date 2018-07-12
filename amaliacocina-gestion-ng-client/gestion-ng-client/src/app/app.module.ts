import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {RecetasComponent} from './recetas/recetas.component';
import {RecetaDetalleComponent} from './receta-detalle/receta-detalle.component';
import {MessagesComponent} from './messages/messages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {RecetaSearchComponent} from './receta-search/receta-search.component';
import { InsumosComponent } from './insumos/insumos.component';
import { InsumoComponent } from './insumos/insumo/insumo.component';
import { InsumoListComponent } from './insumos/insumo-list/insumo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    RecetaDetalleComponent,
    MessagesComponent,
    DashboardComponent,
    RecetaSearchComponent,
    InsumosComponent,
    InsumoComponent,
    InsumoListComponent
  ],
  imports: [
    BrowserModule,
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
