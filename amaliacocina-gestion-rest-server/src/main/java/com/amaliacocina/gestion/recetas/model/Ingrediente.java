package com.amaliacocina.gestion.recetas.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="ingredients")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Ingrediente extends BaseModel{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2711384505356806912L;

	@Column(name="name")
	private String name;

	@Column(name="description")
	private String description;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
