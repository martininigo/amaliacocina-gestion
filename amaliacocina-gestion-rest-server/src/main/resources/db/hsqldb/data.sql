INSERT INTO INSUMOS VALUES (1, 'Azucar', 'Azucar...',2,500,20.5,TRUE);
INSERT INTO INSUMOS VALUES (2, 'Harina', 'Harina...',2,1000,30,TRUE);
INSERT INTO INSUMOS VALUES (3, 'Huevo', 'Huevo...',0,30,40.3,TRUE);
INSERT INTO INSUMOS VALUES (4, 'Manteca', 'Manteca...',2,500,20.5,TRUE);
INSERT INTO INSUMOS VALUES (5, 'Dulce de Leche', 'Dulce de Leche...',2,3000,100,TRUE);
INSERT INTO INSUMOS VALUES (6, 'Cacao', 'Cacao...',2,1000,80,TRUE);
INSERT INTO INSUMOS VALUES (7, 'Leche', 'Leche...',1,1000,80,TRUE);
INSERT INTO INSUMOS VALUES (8, 'Caja 1', 'Caja 1...',0,1,60,FALSE);

INSERT INTO RECETAS VALUES (1, 'Masa 1', 'Masa1...', 'Pasos bla bla bla', 30, 140, 'Tecnica bla bla...');
INSERT INTO RECETAS VALUES (2, 'Masa 2', 'Masa2...', 'Pasos bla bla bla', 30, 140, 'Tecnica bla bla...');

INSERT INTO INSUMOS_RECETA VALUES (1, 1, 500);
INSERT INTO INSUMOS_RECETA VALUES (1, 1, 300);
INSERT INTO INSUMOS_RECETA VALUES (1, 4, 50);
INSERT INTO INSUMOS_RECETA VALUES (2, 1, 450);
INSERT INTO INSUMOS_RECETA VALUES (2, 5, 30);
INSERT INTO INSUMOS_RECETA VALUES (2, 6, 200);