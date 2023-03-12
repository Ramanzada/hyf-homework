-- Create a new database named 'my_database'
CREATE DATABASE my_database;

-- Switch to the 'my_database' database
USE my_database;

-- Create the 'class' table
CREATE TABLE class (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  begins DATE,
  ends DATE,
  status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started'
);

-- Create the 'student' table
CREATE TABLE student (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone VARCHAR(20),
  class_id INT,
  FOREIGN KEY (class_id) REFERENCES class(id)
);

-- Create an index on the 'name' column of the 'student' table
CREATE INDEX idx_student_name ON student(name);

-- Add a new column named 'status' to the 'class' table with allowed values 'not-started', 'ongoing', 'finished'
ALTER TABLE class ADD COLUMN status ENUM('not-started', 'ongoing', 'finished') NOT NULL DEFAULT 'not-started';
