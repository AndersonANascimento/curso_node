var mysql = require("mysql");

var connMySQL = function () {
	console.log("Conexão com BD foi estabelecida");
	return mysql.createConnection({
		host: "192.168.33.10",
		port: "3306",
		user: "root",
		password: "vagrant",
		database: "portal_noticias"
	});
};

module.exports = function () {
	console.log("O autoload carregou o módulo de conexão com o BD");
	return connMySQL;
};