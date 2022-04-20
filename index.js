const inquirer = require("inquirer");
// const { allowedNodeEnvironmentFlags } = require("process");
const query = require("./lib/query");



const employeeTracker = async () => {
   const userChoice = await inquirer
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
    ]);
  
  if (userChoice.menu === "View All Employees") {
    query.viewAllEmployees();
    console.log('\b');
    // employeeTracker();

  } else if (userChoice.menu === "Add Employee") {
    await query.addEmployee();
    console.log('\b');
    // employeeTracker();
  } else if (userChoice.menu === "Update Employee Role") {
    await query.updateRole();
    console.log('\b');
    // employeeTracker();
  } else if (userChoice.menu === "View All Roles") {
    query.viewAllRoles();
    console.log('\b');
    // employeeTracker();
    
  } else if (userChoice.menu === "Add Role") {
    await query.addRole();
    // employeeTracker();
  } else if (userChoice.menu === "View All Departments") {
    query.viewAllDepartments();
    // employeeTracker();
  } else if (userChoice.menu === "Add Department") {
    await query.addDepartment();
    // employeeTracker();

  } else {
    return console.log("Have a nice day!");;
  }
 await employeeTracker()
};

async function  init() {
  employeeTracker();
}

// Function call to initialize app
 init();

