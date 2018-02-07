create database portal_noticias;
show databases;
use portal_noticias;
show tables;
create table noticias (
    id_noticia int not null primary key auto_increment,
    titulo varchar(100),
    noticia text,
    data_criacao timestamp default current_timestamp
);
show tables;
SELECT * FROM noticias;
INSERT INTO noticias(titulo, noticia) VALUES('Titulo da noticia', 'Conteudo da noticia');
ALTER TABLE noticias add COLUMN autor VARCHAR(100);
ALTER TABLE noticias add COLUMN resumo VARCHAR(30);
ALTER TABLE noticias add COLUMN data_noticia date;
update noticias set autor = 'Anderson' where id_noticia = 1;
INSERT INTO noticias(titulo, noticia, resumo, autor) VALUES('Titulo da noticia', 'Conteudo da noticia', 'bla bla bla bla bla ', 'bla bla bla ');