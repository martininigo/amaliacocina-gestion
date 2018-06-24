package com.amaliacocina.gestion.productos.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class Proporcionable<T extends BaseModel, T2 extends BaseModel> implements Serializable {

	private static final long serialVersionUID = -289253491837738922L;

	@Id
	@ManyToOne
	@JoinColumn(name = "fk_contenedor")
	private T contenedor;

	@Id
	@ManyToOne
	@JoinColumn(name = "fk_elemento")
	private T2 elemento;

	@Column(name = "proporcion")
	private float proporcion;

	public T getContenedor() {
		return contenedor;
	}

	public void setContenedor(T contenedor) {
		this.contenedor = contenedor;
	}

	public T2 getElemento() {
		return elemento;
	}

	public void setElemento(T2 elemento) {
		this.elemento = elemento;
	}

	public float getProporcion() {
		return proporcion;
	}

	public void setProporcion(float proporcion) {
		this.proporcion = proporcion;
	}
}
