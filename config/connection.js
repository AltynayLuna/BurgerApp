//Setting up mySQL connection
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
	connection.mysql.createConnection(process.env.JAWSDB_URL); 
	} else {
		connection = mysql.createConnection({
		port: 3306,
		host: "localhost", 
		user: "root",
		password: "alttimtal",
		database: "burgers_db"
	});
	};

//Making connection
connection.connect(function(err) {
	if(err) {
		console.error("Error connecting: " + err.stack);
		return;
	}
	console.log("Connected as id: " + connection.threadId);
});
//Exporting connection for the ORM to use
module.exports = connection;