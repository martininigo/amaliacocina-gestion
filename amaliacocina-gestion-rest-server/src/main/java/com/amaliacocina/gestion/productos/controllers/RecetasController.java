package com.amaliacocina.gestion.productos.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amaliacocina.gestion.productos.model.Receta;
import com.amaliacocina.gestion.productos.repositories.BaseRepository;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/recetas")
public class RecetasController extends BaseController<Receta> {


	public RecetasController(BaseRepository<Receta> repository) {
		super(repository);
	}
}
