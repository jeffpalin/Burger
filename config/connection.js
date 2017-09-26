// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 8080,
    host: "localhost",
    user: "root",
    password: "R2Qeph2thavU",
    database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Server status

app.listen(port, function() {
    console.log("Listening on PORT " + port);
});

// Export connection for our ORM to use.
module.exports = connection;