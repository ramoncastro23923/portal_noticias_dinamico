var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var postSchema = new Schema({
    titulo: req.body.titulo_noticia,
    imagem: req.body.url_imagem,
    categoria: 'Nenhuma',
    conteudo: req.body.noticia,
    slug: req.body.slug,
    autor: "Admin",
    views: 0
},{collection:'posts'})

var Posts = mongoose.model("Posts",postSchema);

module.exports = Posts;