package com.amaliacocina.gestion.productos.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "RECETAS_PRODUCTO")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class RecetaProducto extends Proporcionable<Producto, Receta>{

	private static final long serialVersionUID = 2169424239198155766L;

}