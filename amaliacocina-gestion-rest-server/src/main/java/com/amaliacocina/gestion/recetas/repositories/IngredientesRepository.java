package com.amaliacocina.gestion.recetas.repositories;

import java.util.Collection;

import com.amaliacocina.gestion.recetas.model.Ingrediente;

public interface IngredientesRepository extends BaseRepository<Ingrediente> {

	Collection<Ingrediente> findByName(String name);

}
