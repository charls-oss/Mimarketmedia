const mysql = require ("mysql");
let conexion = mysql.createConnection ({
    host: "localhost",
    database: "mydb",
    user: "root",
    password: "",
    port: "8111"
   
});
conexion.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});
module.exports = conexion;
