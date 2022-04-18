db = require("../server")
const cTable = require('console.table');
const inquirer = require("inquirer");




const viewAllEmployees = () => {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
    return
    
  });
};
const addEmployee = () => {
    // db.query("SELECT * FROM employee", function (err, results) {
    //   console.table(results);
    //   return
    // });
  };
  const updateRole = () => {
    // db.query("SELECT * FROM employee", function (err, results) {
    //   console.table(results);
    //   return
    // });
  };
  const viewAllRoles = () => {
    db.query("SELECT * FROM role", function (err, results) {
      console.table(results);
      return
    });
  };
  const addRole = () => {
    // db.query("SELECT * FROM employee", function (err, results) {
    //   console.table(results);
    //   return
    // });
  };
  const viewAllDepartments = () => {
    db.query("SELECT * FROM department", function (err, results) {
      console.table(results);
      
    });
  };
  const addDepartment = () => {
      return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the new department's name?",
        name: "name",
      },
    ])
    .then((answers) => {
    db.query(`INSERT INTO department(name) VALUES (?)`, answers.name , function (err, results) {
      if (err) {
        console.log(err);
      }
      console.table(results)
    })
     
  });
  

  }







module.exports = {
    viewAllEmployees: viewAllEmployees, 
    addEmployee: addEmployee, 
    updateRole: updateRole, 
    viewAllRoles: viewAllRoles, 
    addRole: addRole, 
    viewAllDepartments: viewAllDepartments, 
    addDepartment: addDepartment}