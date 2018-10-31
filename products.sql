DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
  id INTEGER AUTO_INCREMENT NOT NULL,
  product VARCHAR(30) NOT NULL,
  department VARCHAR(30) NOT NULL,
  price INTEGER,
  instock INTEGER,
  PRIMARY KEY(id)
);

INSERT INTO products (product, department, price, instock)
VALUES ("Persian Palm Elephant Ear", "Exotic Plants", 23.99, 8);
INSERT INTO products (product, department, price, instock)
VALUES ("Amizonica", "Exotic Plants", 15.99, 12);
INSERT INTO products (product, department, price, instock)
VALUES("Bat Flower", "Exotic Plants", 24.99, 5);
INSERT INTO products (product, department, price, instock)
VALUES("Corpse Flower", "Exotic Plants", 79.99, 3);
INSERT INTO products (product, department, price, instock)
VALUES("Bat Guano", "Organic Nutrients", 18.99, 16);
INSERT INTO products (product, department, price, instock)
VALUES("Worm Castings", "Organic Nutrients", 15.99, 16);
INSERT INTO products (product, department, price, instock)
VALUES("Andesite Mineral", "Organic Nutrients", 40.99,8);
INSERT INTO products (product, department, price, instock)
VALUES("Azomite Rock Dust", "Organic Nutrients", 15.99, 7);
INSERT INTO products (product, department, price, instock)
VALUES("Garden Tent", "Plant Shelter", 70.99, 18);
INSERT INTO products (product, department, price, instock)
VALUES("Walk in Green House", "Plant Shelter", 124.99, 16);
INSERT INTO products(product, department, price, instock)
VALUES("Croton", "Exotic Plants", 15.99, 27);
INSERT INTO products(product, department, price, instock)
VALUES("Bouganvilla", "Exotic Plants", 23.99, 17);
INSERT INTO products(product, department, price, instock)
VALUES("Mandavillia", "Exotic Plants", 18.99, 27);
INSERT INTO products(product, department, price, instock)
VALUES("Kelp Meal", "Organic Nutrients", 12.99, 47);
INSERT INTO products(product, department, price, instock)
VALUES("Blood Meal", "Organic Nutrients", 12.99, 47);
INSERT INTO products(product, department, price, instock)
VALUES("Bone Meal", "Organic Nutrients", 12.99, 47);
INSERT INTO products(product, department, price, instock)
VALUES("Seed Starter", "Plant Shelter", 29.99, 17);
INSERT INTO products(product, department, price, instock)
VALUES("100ft Poly", "Plant Shelter", 79.99, 17);
INSERT INTO products(product, department, price, instock)
VALUES("Frost Cover", "Plant Shelter", 39.99, 107);
SELECT * FROM products