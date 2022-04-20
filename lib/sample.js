// const cTable = require("console.table");
// const inquirer = require("inquirer");
// const db = require("../server");

// const viewAllEmployees = () => {
//   db.query(
//     `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, concat(manager.first_name, ' ' ,manager.last_name) AS manager
//     FROM department 
//     JOIN role ON department.id = role.department_id
//     JOIN employee ON role.id = employee.role_id
//     JOIN employee AS manager ON manager.id = employee.manager_id`,
//     function (err, results) {
//       if (err) {
//         throw results;
//       }console.log('\n');
//       console.table(results);
//       return;
//     }
//   );
// };
// const addEmployee = async () => {
//   const answers = await inquirer.prompt([
//     {
//       type: "input",
//       message: "What is the employee's first name?",
//       name: "firstName",
//     },
//     {
//       type: "input",
//       message: "What is the employee's last name?",
//       name: "lastName",
//     },
//     {
//       type: "list",
//       message: "Who is the employee's manager?",
//       name: "manager",
//       choices: ["NULL", 1, 3, 5, 7],
//     },
//     {
//       type: "list",
//       message: "What is the employee's role?",
//       name: "role",
//       choices: [
//         "Sales Lead",
//         "Salesperson",
//         "Lead Engineer",
//         "Software Engineer",
//         "Account Manager",
//         "Accountant",
//         "Legal Team Lead",
//         "Lawyer",
//       ],
//     },
//     {
//       type: "input",
//       message: "What is the role's salary?",
//       name: "salary",
//     },
//     {
//       type: "list",
//       message: "What is the employee's department?",
//       name: "department",
//       choices: ["Sales", "Engineering", "Finance", "Legal"],
//     },
//   ]);
//   db.query(
//     `INSERT INTO employee(first_name, last_name, manager_id) VALUES (?,?,?)`,
//     [answers.firstName, answers.lastName, answers.manager],
//     function (err, res) {
//       if (err) {
//         console.log(err);
//       }
//       console.log("added employee to database");
//     }
//   );
//   db.query(`INSERT INTO role(title, salary) VALUES(?,?)`, [
//     answers.role,
//     answers.salary,
//   ]);
//   `INSERT INTO department(name) VALUES(?)`, answers.department;
// };
// const updateRole = () => {
//   // db.query("SELECT * FROM employee", function (err, results) {
//   //   console.table(results);
//   //   return
//   // });
// };
// const viewAllRoles = () => {
//   db.query(
//     `SELECT role.id, role.title, department.name AS department, role.salary
//   FROM department
//   JOIN role on department.id = role.department_id`,
//     function (err, results) {
//       console.table(results);
//       return;
//     }
//   );
// };
// const addRole = async () => {
//   db.promise().query("SELECT id,name FROM department;")
//   .then(([results]) => { console.table(results)
//     const departments = results;
//     // console.log(departments);
//     return departmentList = departments.map(({id,name})=> ({name:name,value:id}));
//   })
//   .then(async function (departmentList) {
//       const answers = await inquirer.prompt([
//         {
//           type: "list",
//           message: "What is the department is the role in?",
//           name: "department_id",
//           choices: departmentList
//         },
//         {
//           type: "input",
//           message: "What is the new role's title?",
//           name: "title",
//         },
//         {
//           type: "input",
//           message: "What is the new role's salary?",
//           name: "salary",
//         },
//       ]);
//       db.query(
//         `INSERT INTO role(title,salary,department_id) VALUES (?,?,?)`,
//         [answers.title, answers.salary, answers.department_id],
//         function (err, results) {
//           if (err) {
//             console.log(err);
//           }
//           console.table(results);
//         }
//       );
//     })
   
//  }
  
// const viewAllDepartments = () => {
//   db.query("SELECT * FROM department", function (err, results) {
//     console.table(results);
//   });
// };
// const addDepartment = async () => {
//   const answers = await inquirer.prompt([
//     {
//       type: "input",
//       message: "What is the new department's name?",
//       name: "name",
//     },
//   ]);
//   db.query(
//     `INSERT INTO department(name) VALUES (?)`,
//     answers.name,
//     function (err, results) {
//       if (err) {
//         console.log(err);
//       }
//       console.table(results);
//     }
//   );
// };

// module.exports = {
//   viewAllEmployees: viewAllEmployees,
//   addEmployee: addEmployee,
//   updateRole: updateRole,
//   viewAllRoles: viewAllRoles,
//   addRole: addRole,
//   viewAllDepartments: viewAllDepartments,
//   addDepartment: addDepartment,
// };