const inquirer = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");
const viewAllEmployees = require("./lib/query");
const db = require("./server");

const employeeTracker = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "menu",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Quit",
        ],
      },
    ])
    .then((userChoice) => {
      if (userChoice.menu === "View All Employees") {
        viewAllEmployees();
        employeeTracker();
      } else if (userChoice.menu === "Add Employee") {
        addEmployee();
      }else if (userChoice.menu === "Update Employee Role"){
        updateRole();
      }else if (userChoice.menu === "View All Roles"){
        viewAllRoles();
        employeeTracker();
      }else if (userChoice.menu === "Add Role") {
        addRole();
      }else if (userChoice.menu === "View All Departments") {
        viewAllDepartments();
        employeeTracker();
      }else if (userChoice.menu === "Add Department"){
        addDepartment();
      }else {
        return console.log("Have a nice day!");;
      }

      // db.query('SELECT * FROM employee', function (err, results) {
      //   console.table(results);
    });
  //   }else if (userChoice.menu === "Add Employee") {
  //     db.query('INSERT INTO employee')
  //   }
  // });
  // .then((answers) => {
  //   const manager = new Manager(
  //     answers.name,
  //     answers.id,
  //     answers.email,
  //     answers.officeNumber
  //   );
  //   teamMembers.push(manager);
  //   teamMenu();
  // });
};

function init() {
  employeeTracker();
}

// Function call to initialize app
init();
