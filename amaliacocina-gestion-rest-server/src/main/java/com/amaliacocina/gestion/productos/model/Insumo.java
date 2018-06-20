package com.amaliacocina.gestion.productos.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import com.amaliacocina.gestion.productos.model.Constantes.UnidadMedida;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="INSUMOS")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Insumo extends DescribibleModel{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2711384505356806912L;
	
	@Enumerated
	@Column(name="unidad")
	private UnidadMedida unidad;
	
	@Column(name="cantidad")
	private float cantidad;
	
	@Column(name="precio")
	private float precio;
	
	@Column(name="es_ingrediente")
	private boolean esIngrediente;

	public UnidadMedida getUnidad() {
		return unidad;
	}

	public void setUnidad(UnidadMedida unidad) {
		this.unidad = unidad;
	}

	public float getCantidad() {
		return cantidad;
	}

	public void setCantidad(float cantidad) {
		this.cantidad = cantidad;
	}

	public float getPrecio() {
		return precio;
	}

	public void setPrecio(float precio) {
		this.precio = precio;
	}

	public boolean isEsIngrediente() {
		return esIngrediente;
	}

	public void setEsIngrediente(boolean esIngrediente) {
		this.esIngrediente = esIngrediente;
	}
}
