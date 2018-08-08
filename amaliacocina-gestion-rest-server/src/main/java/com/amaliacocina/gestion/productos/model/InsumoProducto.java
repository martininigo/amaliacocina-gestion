package com.amaliacocina.gestion.productos.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "INGREDIENTES_PRODUCTO")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class InsumoProducto extends Proporcionable<Producto, Insumo>{

	private static final long serialVersionUID = 4845932107298969716L;

}