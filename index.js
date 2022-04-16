const inquirer = require("inquirer");

const db = require("./server")
db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
  });

  const employeeTracker = () => {
    return inquirer
      .prompt([
        {
          type: "list",
          message: "What would you like to do?",
          name: "menu",
          choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"],
        },
        
      ])
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