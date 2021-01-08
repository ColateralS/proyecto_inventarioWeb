/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    //Lista todas las Categorias
    list: (req, res) => {
        Category.find().exec(function(err, categories) {
            if (err) {
                res.send(500, { err: err });
            }
            res.view('category/categories', { categories: categories });
        });
    },

    //Agrega una Categoria nueva
    add: (req, res) => {

        const name = req.body.name;

        Category.create({ name: name}).exec(function(err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/category');
        });
    },

    //Edita la Categoria
    edit: (req, res) => {
        Category.findOne({ _id: req.params.id }).exec(function(err, category) {
            if (err) {
                res.send(500, { err: err });
            }
            res.view('category/edit', { category: category })
        });
    },

    //Elimina la Categoria
    delete: (req, res) => {
        Category.destroy({ id: req.params.id }).exec(function(err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/category');
        });
    },

    //Actualiza la Categoria
    update: (req, res) => {

        const name = req.body.name;

        Category.update({ _id: req.params.id }, { name: name}).exec(function(err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/category');
        });
    },
};