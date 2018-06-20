package com.amaliacocina.gestion.recetas.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="ingredients")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Ingrediente extends DescribibleModel{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2711384505356806912L;
}
