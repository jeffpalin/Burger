### Schema
DROP DATABASE IF EXISTS burgers_DB;
CREATE DATABASE burgers_DB;

USE burgers_DB;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  date TIMESTAMP,
  PRIMARY KEY (id)
);

SELECT * FROM burgers;