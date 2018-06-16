DROP TABLE ingredients IF EXISTS;

CREATE TABLE ingredients (
  id         INTEGER IDENTITY PRIMARY KEY,
  name VARCHAR(30),
  description  VARCHAR(30)
);
CREATE INDEX ingredients_name ON ingredients (name);
