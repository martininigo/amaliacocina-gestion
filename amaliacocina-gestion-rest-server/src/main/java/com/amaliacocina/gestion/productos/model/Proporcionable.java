package com.amaliacocina.gestion.productos.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@MappedSuperclass
public class Proporcionable<T extends BaseModel, T2 extends BaseModel> implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -289253491837738922L;

	@Id
	@Column(name="fk_contenedor")
    @JsonManagedReference
	private T contenedor;
	
//	@Id
//	@Column(name="fk_elemento")
//	private T elemento;

	@Column(name="proporcion")
	private float proporcion;

	public T getContenedor() {
		return contenedor;
	}

	public void setContenedor(T contenedor) {
		this.contenedor = contenedor;
	}

//	public T getElemento() {
//		return elemento;
//	}
//
//	public void setElemento(T elemento) {
//		this.elemento = elemento;
//	}

	public float getProporcion() {
		return proporcion;
	}

	public void setProporcion(float proporcion) {
		this.proporcion = proporcion;
	}
}
