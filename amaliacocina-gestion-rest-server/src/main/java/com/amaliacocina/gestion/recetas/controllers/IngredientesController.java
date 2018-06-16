package com.amaliacocina.gestion.recetas.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amaliacocina.gestion.recetas.model.Ingrediente;
import com.amaliacocina.gestion.recetas.repositories.BaseRepository;

@RestController
@RequestMapping("/ingredients")
public class IngredientesController extends BaseController<Ingrediente> {


	public IngredientesController(BaseRepository<Ingrediente> repository) {
		super(repository);
	}
}
