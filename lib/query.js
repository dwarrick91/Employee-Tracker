db = require("../server")
const viewAllEmployees = () => {
  db.query("SELECT * FROM employee", function (err, results) {
    console.table(results);
  });
};








module.exports = (viewAllEmployees)