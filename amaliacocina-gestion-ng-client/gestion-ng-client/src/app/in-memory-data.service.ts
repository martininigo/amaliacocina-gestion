import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recetas = [
      {id: 1, nombre: 'Azucar', descripcion: 'Azucar'},
      {id: 2, nombre: 'Harina', descripcion: 'Harina'},
      {id: 3, nombre: 'Cacao', descripcion: 'Cacao'},
      {id: 4, nombre: 'Leche', descripcion: 'Leche'},
      {id: 5, nombre: 'Manteca', descripcion: 'Manteca'},
      {id: 6, nombre: 'Coco', descripcion: 'Coco'}
    ];
    return {recetas};
  }
}