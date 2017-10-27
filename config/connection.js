//Setting up mySQL connection
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
	console.log("Using jawsdb");
	connection = mysql.createConnection(process.env.JAWSDB_URL); 
	} else {
		connection = mysql.createConnection({
		//port: 3306,
		host: "localhost", 
		user: "root",
		password: "alttimtal",
		database: "burgers_db"
	});
	};

//Making connection
connection.connect(function(err) {
if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//Exporting connection for the ORM to use
module.exports = connection;