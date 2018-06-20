DROP TABLE INSUMOS IF EXISTS;

CREATE TABLE INSUMOS (
  id         INTEGER IDENTITY PRIMARY KEY,
  nombre VARCHAR(30),
  descripcion VARCHAR(100),
  unidad INTEGER,
  cantidad FLOAT,
  precio FLOAT,
  es_ingrediente BOOLEAN
);
CREATE INDEX INSUMOS_NOMBRE ON INSUMOS (nombre);
