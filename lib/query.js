const cTable = require("console.table");
const inquirer = require("inquirer");
const db = require("../server");

db.promise()
  .query("SELECT * FROM department;")
  .then(([results]) => {
    const departments = results;
    // console.log(departments);
    return (departmentList = departments.map(({ id, name }) => ({
      name: name,
      value: id,
    })));
  });

db.promise()
  .query("SELECT id,title FROM role;")
  .then(([data]) => {
    const roles = data;
    return (roleList = roles.map(({ id, title}) => ({
     name: title, value: id 
    })));
  });

db.promise()
  .query("SELECT id, first_name, last_name FROM employee;")
  .then(([info]) => {
    const managers = info;
    return (managerList = managers.map(({ id, first_name, last_name }) => ({
      
        name: first_name + " " + last_name,
        value: id
      })));
    
  });

const viewAllEmployees = async () => {
  db.query(
    `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, concat(manager.first_name, ' ' ,manager.last_name) AS manager
FROM department 
JOIN role ON department.id = role.department_id
JOIN employee ON role.id = employee.role_id
LEFT JOIN employee AS manager ON manager.id = employee.manager_id;`,
    function (err, results) {
      if (err) {
        throw results;
      }
      console.log("\n");
      console.table(results);
    }
  );
};
const addEmployee = async () => {
  const questions = await inquirer.prompt([
    {
      type: "input",
      message: "What is the employee's first name?",
      name: "firstName",
    },
    {
      type: "input",
      message: "What is the employee's last name?",
      name: "lastName",
    },
    {
      type: "list",
      message: "What is the employee's role?",
      name: "role",
      choices: roleList,
    },
    {
      type: "list",
      message: "Who is the employee's manager?",
      name: "manager",
      choices: managerList,
    },
  ]);
  db.query(
    `INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUES (?,?,?,?)`,
    [
      questions.firstName,
      questions.lastName,
      questions.role,
      questions.manager,
    ],
    function (err, results) {
      if (err) {
        console.log(err);
      }
      console.log("\b");
      // console.table(results);
    }
  );
};

const updateRole = async () => {
  const questions = await inquirer.prompt([
    {
      type: "list",
      message: "Who do you want to update?",
      name: "employee",
      choices: managerList,
    },
    {
      type: "list",
      message: "What role do you want to give them?",
      name: "role",
      choices: roleList,
    },
   
  ])
  db.query(
    `UPDATE employee SET role_id = "?" Where id = ?`,
    [questions.role, questions.employee],
    function (err, results) {
      if (err) {
        console.log(err);
      }
      console.log("\b");
      // console.table(results);
    }
  );
};
const viewAllRoles = () => {
  db.query(
    `SELECT role.id, role.title, department.name AS department, role.salary
  FROM department
  JOIN role on department.id = role.department_id`,
    function (err, results) {
      console.log("\b");
      console.table(results);
    }
  );
};
async function addRole() {

  const answers = await inquirer.prompt([
    {
      type: "list",
      message: "What is the department is the role in?",
      name: "department_id",
      choices: departmentList,
    },
    {
      type: "input",
      message: "What is the new role's title?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the new role's salary?",
      name: "salary",
    },
  ]);
  db.query(
    `INSERT INTO role(title,salary,department_id) VALUES (?,?,?)`,
    [answers.title, answers.salary, answers.department_id],
    function (err, results) {
      if (err) {
        console.log(err);
      }
      console.log("\b");
      // console.table(results);
    }
  );
}

// }

const viewAllDepartments = () => {
  db.query("SELECT * FROM department", function (err, results) {
    console.log("\b");
    console.table(results);
  });
};
const addDepartment = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      message: "What is the new department's name?",
      name: "name",
    },
  ]);
  db.query(
    `INSERT INTO department(name) VALUES (?)`,
    answers.name,
    function (err, results) {
      if (err) {
        console.log(err);
      }
      console.table(results);
    }
  );
};

module.exports = {
  viewAllEmployees: viewAllEmployees,
  addEmployee: addEmployee,
  updateRole: updateRole,
  viewAllRoles: viewAllRoles,
  addRole: addRole,
  viewAllDepartments: viewAllDepartments,
  addDepartment: addDepartment,
};
