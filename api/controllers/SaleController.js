/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    //Lista todos los Usuarios
    list: (req, res) => {
        Sale.find().exec(function (err, sales) {
            Product.find().exec(function (err, products) {
                User.find().exec(function (err, users) {
                    if (err) {
                        res.send(500, { err: err });
                    }
                    res.view('sale/sales', { sales: sales, products: products, users: users });
                });
            });
        });
    },

    listRelationships: (req, res) => {
        Sale.find().exec(function (err, sales) {
            Client.find().exec(function (err, clients) {
                User.find().exec(function (err, users) {
                    Product.find().exec(function (err, products) {
                        if (err) {
                            res.send(500, { err: err });
                        }
                        res.view('sale/add', { sales: sales, clients: clients, users: users, products: products });
                    });
                });
            });
        });
    },

    //Agrega un Usuario nuevo
    add: (req, res) => {

        const date = req.body.date;
        const client_ruc = req.body.client_ruc;
        const employee_username = req.body.employee_username;
        const product_name = req.body.product_name;
        const quantity = req.body.quantity;

        Sale.create({ date: date, client_ruc: client_ruc, employee_username: employee_username, product_name: product_name, quantity: quantity}).exec(function (err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/sale');
        });
    },

    //Edita el Usuario
    edit: (req, res) => {
        Sale.findOne({ _id: req.params.id }).exec(function (err, sale) {
            if (err) {
                res.send(500, { err: err });
            }
            res.view('sale/edit', { sale: sale })
        });
    },

    //Elimina el Usuario
    delete: (req, res) => {
        Sale.destroy({ id: req.params.id }).exec(function (err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/sale');
        });
    },

    //Actualiza el Usuario
    update: (req, res) => {

        const date = req.body.date;
        const client_ruc = req.body.client_ruc;
        const employee_username = req.body.employee_username;
        const product_name = req.body.product_name;
        const quantity = req.body.quantity;

        Sale.update({ _id: req.params.id }, { date: date, client_ruc: client_ruc, employee_username: employee_username, product_name: product_name, quantity: quantity}).exec(function (err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/sale');
        });
    }
};