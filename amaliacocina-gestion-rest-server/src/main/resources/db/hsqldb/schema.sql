DROP TABLE INSUMOS IF EXISTS;

CREATE TABLE INSUMOS (
  id INTEGER IDENTITY PRIMARY KEY,
  nombre VARCHAR(30),
  descripcion VARCHAR(100),
  unidad INTEGER,
  cantidad FLOAT,
  precio FLOAT,
  es_ingrediente BOOLEAN
);
CREATE INDEX INSUMOS_NOMBRE ON INSUMOS (nombre);

CREATE TABLE RECETAS (
  id INTEGER IDENTITY PRIMARY KEY,
  nombre VARCHAR(30),
  descripcion VARCHAR(100),
  pasos VARCHAR(2000),
  tiempo_horno INTEGER,
  temperatura_horno INTEGER,
  tecnica VARCHAR(100)
);
CREATE INDEX RECETAS_NOMBRE ON RECETAS (nombre);

CREATE TABLE PRODUCTOS (
  id INTEGER IDENTITY PRIMARY KEY,
  nombre VARCHAR(30),
  descripcion VARCHAR(100)
);
CREATE INDEX PRODUCTOS_NOMBRE ON RECETAS (nombre);

CREATE TABLE INSUMOS_RECETA (
  fk_contenedor INTEGER,
  fk_elemento INTEGER,
  proporcion FLOAT
);

CREATE TABLE INSUMOS_PRODUCTO (
  fk_contenedor INTEGER,
  fk_elemento INTEGER,
  proporcion FLOAT
);

CREATE TABLE INGREDIENTES_PRODUCTO (
  fk_contenedor INTEGER,
  fk_elemento INTEGER,
  proporcion FLOAT
);

CREATE TABLE RECETAS_PRODUCTO (
  fk_contenedor INTEGER,
  fk_elemento INTEGER,
  proporcion FLOAT
);