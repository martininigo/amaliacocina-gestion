package com.amaliacocina.gestion.productos.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class InsumoRecetaId implements Serializable {

	private static final long serialVersionUID = -1566782761752389625L;

	@Column(name = "fk_contenedor")
	private long recetaId;

	@Column(name = "fk_elemento")
	private long insumoId;

	private InsumoRecetaId() {

	}

	public InsumoRecetaId(long recetaId, long insumoId) {
		this.recetaId = recetaId;
		this.insumoId = insumoId;
	}

	public long getRecetaId() {
		return recetaId;
	}

	public void setRecetaId(long recetaId) {
		this.recetaId = recetaId;
	}

	public long getInsumoId() {
		return insumoId;
	}

	public void setInsumoId(long insumoId) {
		this.insumoId = insumoId;
	}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
 
        if (o == null || getClass() != o.getClass()) 
            return false;
 
        InsumoRecetaId that = (InsumoRecetaId) o;
        return Objects.equals(recetaId, that.recetaId) && 
               Objects.equals(insumoId, that.insumoId);
    }
 
    @Override
    public int hashCode() {
        return Objects.hash(recetaId, insumoId);
    }
}
