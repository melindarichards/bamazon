DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;products

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NULL,
    department_name VARCHAR(50) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT(10) NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Silverware set", "Kitchenware", 40.95, 77);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shower", "Bath", 19.50, 21);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pillow", "Bedding", 12.25, 34);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gloves", "Women's wear", 14.95, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beach umbrella", "Outdoors", 33.50, 27);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("High chair", "Infant", 89.95, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wiper blades", "Automotive", 15.30, 44);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Boots", "Shoes", 48.17, 56);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "Men's Wear", 33.50, 24);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pajamas", "Children's Wear", 18.95, 45);

