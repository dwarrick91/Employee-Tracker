DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT FOREIGN KEY,
    -- manager_id is forign key to anther employee that is the manager of the current employee (null if the employee has no manager)
    manager_id INT FOREIGN KEY
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);