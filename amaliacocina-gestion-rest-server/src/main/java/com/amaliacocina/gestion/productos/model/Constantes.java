package com.amaliacocina.gestion.productos.model;

import com.fasterxml.jackson.annotation.JsonValue;

public final class Constantes {

	public enum UnidadMedida {
		UNIDAD("u"), MILILITROS("ml"), GRAMOS("gr");

		private final String acronimo;

		UnidadMedida(String acronimo) {
			this.acronimo = acronimo;
		}

		@JsonValue
		public String getAcronimo() {
			return acronimo;
		}

		public static UnidadMedida fromValue(String acronimo) {
			for (UnidadMedida unidadMedida : values()) {
				if (unidadMedida.acronimo.equalsIgnoreCase(acronimo)) {
					return unidadMedida;
				}
			}
			throw new IllegalArgumentException("La unidad de medida " + acronimo + " no existe");
		}
	}
}