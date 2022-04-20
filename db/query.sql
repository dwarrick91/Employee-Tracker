SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, concat(manager.first_name, ' ' ,manager.last_name) AS manager
FROM department 
JOIN role ON department.id = role.department_id
JOIN employee ON role.id = employee.role_id
LEFT JOIN employee AS manager ON manager.id = employee.manager_id;

-- SELECT role.id, role.title, department.name AS department, role.salary
-- FROM department
-- JOIN role on department.id = role.department_id;
