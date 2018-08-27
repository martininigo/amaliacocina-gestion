package com.amaliacocina.gestion.productos.model;

import java.beans.PropertyEditorSupport;

import com.amaliacocina.gestion.productos.model.Constantes.UnidadMedida;

public class UnidadMedidaConverter extends PropertyEditorSupport {

	public void setAsText(final String text) throws IllegalArgumentException {
		setValue(UnidadMedida.fromValue(text));
	}
}
