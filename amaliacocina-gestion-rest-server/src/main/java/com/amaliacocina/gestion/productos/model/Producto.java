package com.amaliacocina.gestion.productos.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "PRODUCTOS")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Producto extends Describible{

	private static final long serialVersionUID = 8632424286561540005L;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "contenedor", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnoreProperties("contenedor")
	private Set<InsumoProducto> insumos;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "contenedor", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnoreProperties("contenedor")
	private Set<RecetaProducto> recetas;

	public Set<InsumoProducto> getInsumos() {
		return insumos;
	}

	public void setInsumos(Set<InsumoProducto> insumos) {
		this.insumos = insumos;
	}

	public Set<RecetaProducto> getRecetas() {
		return recetas;
	}

	public void setRecetas(Set<RecetaProducto> recetas) {
		this.recetas = recetas;
	}
}