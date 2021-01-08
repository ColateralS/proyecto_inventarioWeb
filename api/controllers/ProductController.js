/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    //Lista todos los Usuarios
    list: (req, res) => {
        Product.find().exec(function (err, products) {
            if (err) {
                res.send(500, { err: err });
            }
            res.view('product/products', { products: products });
        });
    },

    listRelationships: (req, res) => {
        Category.find().exec(function (err, categories) {
            Provider.find().exec(function (err, providers) {
                if (err) {
                    res.send(500, { err: err });
                }
                res.view('product/add', { categories: categories, providers: providers });
            });
        });
    },

    //Agrega un Usuario nuevo
    add: (req, res) => {

        const product_provider = req.body.product_provider;
        const product_category = req.body.product_category;
        const name = req.body.name;
        const description = req.body.description;
        const quantity = req.body.quantity;
        const price = req.body.price;

        Product.create({ product_provider: product_provider, product_category: product_category, name: name, description: description, quantity: quantity, price: price }).exec(function (err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/product');
        });
    },

    //Edita el Usuario
    edit: (req, res) => {
        Product.findOne({ _id: req.params.id }).exec(function (err, product) {
            if (err) {
                res.send(500, { err: err });
            }
            res.view('product/edit', { product: product })
        });
    },

    //Elimina el Usuario
    delete: (req, res) => {
        Product.destroy({ id: req.params.id }).exec(function (err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/product');
        });
    },

    //Actualiza el Usuario
    update: (req, res) => {

        const product_provider = req.body.product_provider;
        const product_category = req.body.product_category;
        const name = req.body.name;
        const description = req.body.description;
        const quantity = req.body.quantity;
        const price = req.body.price;

        Product.update({ _id: req.params.id }, { product_provider: product_provider, product_category: product_category, name: name, description: description, quantity: quantity, price: price }).exec(function (err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/product');
        });
    },
};