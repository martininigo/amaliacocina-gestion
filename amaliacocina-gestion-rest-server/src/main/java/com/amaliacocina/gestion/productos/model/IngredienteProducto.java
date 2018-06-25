package com.amaliacocina.gestion.productos.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "INSUMOS_PRODUCTO")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class IngredienteProducto extends Proporcionable<Producto, Insumo>{

	private static final long serialVersionUID = 4845932107298969716L;
}