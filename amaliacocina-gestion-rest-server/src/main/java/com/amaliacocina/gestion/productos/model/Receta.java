package com.amaliacocina.gestion.productos.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "RECETAS")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Receta extends DescribibleModel {

	private static final long serialVersionUID = -310499372439340523L;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "contenedor", cascade = CascadeType.ALL, orphanRemoval = true)
	@JsonIgnoreProperties("contenedor")
	private Set<InsumoReceta> insumos;

	@Column(name = "pasos")
	private String pasos;

	@Column(name = "tiempo_horno")
	private Integer tiempoHorno;

	@Column(name = "temperatura_horno")
	private Integer temperaturaHorno;

	@Column(name = "tecnica")
	private String tecnica;

	public Set<InsumoReceta> getInsumos() {
		return insumos;
	}

	public void setInsumos(Set<InsumoReceta> insumos) {
		this.insumos = insumos;
	}

	public String getPasos() {
		return pasos;
	}

	public void setPasos(String pasos) {
		this.pasos = pasos;
	}

	public Integer getTiempoHorno() {
		return tiempoHorno;
	}

	public void setTiempoHorno(Integer tiempoHorno) {
		this.tiempoHorno = tiempoHorno;
	}

	public Integer getTemperaturaHorno() {
		return temperaturaHorno;
	}

	public void setTemperaturaHorno(Integer temperaturaHorno) {
		this.temperaturaHorno = temperaturaHorno;
	}

	public String getTecnica() {
		return tecnica;
	}

	public void setTecnica(String tecnica) {
		this.tecnica = tecnica;
	}
}
