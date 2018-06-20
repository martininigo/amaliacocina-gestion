DROP TABLE ingredients IF EXISTS;

CREATE TABLE ingredients (
  id         INTEGER IDENTITY PRIMARY KEY,
  nombre VARCHAR(30),
  descripcion VARCHAR(30)
);
CREATE INDEX ingredients_nombre ON ingredients (nombre);
