function NoticiasDAO(connection) {
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query("select * from noticias", callback);
};
NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
	this._connection.query("select * from noticias where id = " + id_noticia.id, callback);
	// ou
	// this._connection.query("select * from noticias where ?", id_noticia, callback);
};
NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
	console.log(noticia);
	this._connection.query("insert into noticias set ?", noticia, callback);
};
NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
	this._connection.query("select * from noticias order by data_criacao desc limit 5", callback);
};

module.exports = function () {
	return NoticiasDAO;
};