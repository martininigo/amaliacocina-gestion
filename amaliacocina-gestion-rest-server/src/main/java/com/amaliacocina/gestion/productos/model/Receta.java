package com.amaliacocina.gestion.productos.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "RECETAS")
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Receta extends DescribibleModel {

	/**
	 * 
	 */
	private static final long serialVersionUID = -310499372439340523L;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "receta", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties ( "receta" )
	private Set<InsumoReceta> insumosReceta;

	public Set<InsumoReceta> getInsumosReceta() {
		return insumosReceta;
	}

	public void setInsumosReceta(Set<InsumoReceta> insumosReceta) {
		this.insumosReceta = insumosReceta;
	}
}
