module.exports.noticia = function (application, req, res) {

	let connection = application.config.dbConnection();
	let noticiasModel = new application.app.models.NoticiasDAO(connection);

	console.log(req.query);
	let id = req.query;

	noticiasModel.getNoticia(id, function (error, result) {
		if (error)
			console.log(error);
		res.render("noticias/noticia", {noticia: result});
	});

};

module.exports.noticias = function (application, req, res) {

	let connection = application.config.dbConnection();
	let noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.getNoticias(function (error, result) {
		if (error)
			console.log(error);
		res.render("noticias/noticias", {noticias: result});
	});

};