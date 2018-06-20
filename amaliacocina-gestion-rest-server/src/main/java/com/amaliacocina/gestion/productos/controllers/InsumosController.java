package com.amaliacocina.gestion.productos.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amaliacocina.gestion.productos.model.Insumo;
import com.amaliacocina.gestion.productos.repositories.BaseRepository;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/insumos")
public class InsumosController extends BaseController<Insumo> {


	public InsumosController(BaseRepository<Insumo> repository) {
		super(repository);
	}
}
