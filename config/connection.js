//Require mysql npm package
var mysql = require("mysql");

//Require dotenv package.
require("dotenv").config();

//use a remote db like db in Heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}

else {
  //else use local db.
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PWD,
    database: "burger_db"
  });
}

connection.connect(function(err) {
  //If there is an error when connecting to the database, log the error to the console.
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  //If a database connection is established, log the database thread number.
  console.log("connected as id " + connection.threadId);
});

//Export the connection properties so that we can use them in other files.
module.exports = connection;