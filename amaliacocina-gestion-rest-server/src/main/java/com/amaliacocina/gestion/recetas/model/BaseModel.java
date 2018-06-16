package com.amaliacocina.gestion.recetas.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public class BaseModel implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -7874678818821026884L;
	@Id  
    @GeneratedValue(strategy = GenerationType.IDENTITY)  
    @Basic(optional = false)  
    @Column(name = "id", nullable = false, columnDefinition = "BIGINT")  
    private long id;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}  
	
	
}