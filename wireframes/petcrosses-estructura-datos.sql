DROP DATABASE IF EXISTS petcrossesDB;
CREATE DATABASE IF NOT EXISTS petcrossesDB ;
USE petcrossesDB;


DROP TABLE IF EXISTS products_categories;
CREATE TABLE products_categories (
category_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
category_name VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS products_subcategories;
CREATE TABLE products_subcategories (
subcategory_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
subcategory_name VARCHAR(50) NOT NULL,
categoryID INT NOT NULL,
 FOREIGN KEY(categoryID) REFERENCES products_categories(category_id)	
);


DROP TABLE IF EXISTS users;
CREATE TABLE users (
user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
user_name VARCHAR(50) NOT NULL,
user_surname VARCHAR(50) NOT NULL,
user_email VARCHAR(50) NOT NULL,
user_password TEXT NOT NULL,
user_image VARCHAR(150) NOT NULL,
user_date DATE NOT NULL,
user_gender VARCHAR (20) NOT NULL,
user_esAdmin TINYINT NOT NULL
);

DROP TABLE IF EXISTS products;
CREATE TABLE products (
product_id  INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL ,
product_price DECIMAL(10,2) NOT NULL,
product_description VARCHAR (150) NOT NULL,
product_stock INT NOT NULL,
categoryID INT NOT NULL,
subcategoryID INT NOT NULL,
FOREIGN KEY(subcategoryID) REFERENCES products_subcategories(subcategory_id),
FOREIGN KEY(categoryID) REFERENCES products_categories(category_id)	
);

DROP TABLE IF EXISTS images;
CREATE TABLE images (
image_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
image_url VARCHAR(150),
productID INT NOT NULL,
FOREIGN KEY(productID) REFERENCES products(product_id)	
);

DROP TABLE IF EXISTS breeds_dogs;
CREATE TABLE breeds_dogs (
breed_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
breed_name VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS dogs;
CREATE TABLE dogs (
dog_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
dog_name VARCHAR(50) NOT NULL,
dog_size VARCHAR(50) NOT NULL,
dog_age VARCHAR(50) NOT NULL,
dog_description VARCHAR(150) NOT NULL,
dog_image VARCHAR(150) NOT NULL,
dog_match TINYINT ,
dog_pedegree TINYINT NOT NULL,
breedID INT NOT NULL,
userID INT NOT NULL,
FOREIGN KEY(breedID) REFERENCES breeds_dogs(breed_id),
FOREIGN KEY(userID) REFERENCES users(user_id)
);


/* script carga de datos */

/* CARGAR CATEGORIAS */
INSERT INTO petcrossesDB.products_categories (category_name)
VALUES ("PERROS"), ("GATOS"), ("PECES"), ("AVES");

/* CARGAR SUBCATEGORIAS */
INSERT INTO petcrossesDB.products_categories (subcategory_name, categoryID)
VALUES ("Alimentos", 1), ("Accesorios",1), ("Estètica e Higiene",1), ("Salud",1),
 ("Alimentos", 2), ("Accesorios",2), ("Estètica e Higiene",2), ("Salud",2),
  ("Alimentos", 3), ("Accesorios",3), 
  ("Alimentos",4), ("Salud",4), ("Accesorios",4);
  
  
  
  /* CARGAR PRODUCTOS */
  
  INSERT INTO petcrossesDB.products (product_name,product_price,product_description,product_stock,categoryID, subcategoryID )
  VALUES ("Collar Seresto", 4500, "Seresto Collar contra pulgas y garrapatas", 10, 1,4 )/*,
   Alimento Royal Canin", 13000, "Alimento Royal Canin para perro Medium Adulto 15kg",20, 1,1),
  ("Juguete Puppis", 350, "Juguete Puppis, pato de Vinilo, tamaño único", 5, 1,2),
  ("Shampoo Ospret", 900, "Shampoo Ospret Algas Vitalizador y Abrillantador 250cc",15, 1,3),
  ("Rascador Puppis", 2700, "Rascador Puppis infinito de madera y cartón",5,2,2),
  ("Alimento Excellent", 8400, "Alimento Excellent para gato, 7.5kg, sabor pollo", 15,2,1) */ 
  ;
  
  INSERT INTO petcrossesDB.images (image_url,productID)
  VALUES ("/img/collar-anti.jpg",1);
  
  
    /* CARGAR RAZAS */
    
INSERT INTO petcrossesDB.breeds_dogs (breed_name)
VALUES ("ALUSKY"),("BEAGLE"),("PITBULL"),("CANICHE"),("BULLDOG FRANCES"),("LABRADOR"),("COCKER"),("DOBERMAN");

/* CARGAR PERRO */

INSERT INTO petcrossesDB.dogs (dog_name,dog_size,dog_age,dog_description,dog_image,dog_pedegree,breedID,userID)
VALUES ("Mora","Grande",4,"Mora es una Labradora Joven, de color negro, hiperactiva, no se ha apareado hasta el momento.","/img/golden-retriever-1.jpg",0,6,3);
    
  
  
  


