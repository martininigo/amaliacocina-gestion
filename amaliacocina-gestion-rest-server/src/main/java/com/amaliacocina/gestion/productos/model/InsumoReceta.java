package com.amaliacocina.gestion.productos.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "INSUMOS_RECETA")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class InsumoReceta implements Serializable {// Proporcionable<Receta, Insumo>{

	private static final long serialVersionUID = 2169424239198155766L;

	@Id
	@ManyToOne
	@JoinColumn(name = "fk_contenedor")
	private Receta receta;

	@Id
	@ManyToOne
	@JoinColumn(name = "fk_elemento")
	private Insumo insumo;

	@Column(name = "proporcion")
	private float proporcion;

	public Receta getReceta() {
		return receta;
	}

	public void setReceta(Receta receta) {
		this.receta = receta;
	}

	public Insumo getInsumo() {
		return insumo;
	}

	public void setInsumo(Insumo insumo) {
		this.insumo = insumo;
	}

	public float getProporcion() {
		return proporcion;
	}

	public void setProporcion(float proporcion) {
		this.proporcion = proporcion;
	}
}