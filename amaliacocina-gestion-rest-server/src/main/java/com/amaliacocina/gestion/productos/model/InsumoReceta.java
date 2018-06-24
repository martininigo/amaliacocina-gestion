package com.amaliacocina.gestion.productos.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "INSUMOS_RECETA")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class InsumoReceta extends Proporcionable<Receta, Insumo>{

	private static final long serialVersionUID = 2169424239198155766L;

}