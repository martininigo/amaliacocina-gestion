package com.amaliacocina.gestion.productos.model;

import com.fasterxml.jackson.annotation.JsonFormat;

public final class Constantes {

	@JsonFormat(shape = JsonFormat.Shape.OBJECT)
	public enum UnidadMedida {
		UNIDAD("Unidad", "u"), MILILITROS("Mililitros", "ml"), GRAMOS("Gramos", "gr");

		private final String nombre;
		private final String acronimo;

		UnidadMedida(String nombre, String acronimo) {
			this.nombre = nombre;
			this.acronimo = acronimo;
		}

		public String getNombre() {
			return nombre;
		}

		public String getAcronimo() {
			return acronimo;
		}
	}
}