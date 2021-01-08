/**
 * ClientController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    //Lista todos los Usuarios
    list: (req, res) => {
        Client.find().exec(function (err, clients) {
            if (err) {
                res.send(500, { err: err });
            }
            res.view('client/clients', { clients: clients });
        });
    },

    //Agrega un Cliente Nuevo
    add: (req, res) => {

        const ruc = req.body.ruc;
        const name = req.body.name;
        const email = req.body.email;
        const city = req.body.city;
        const country = req.body.country;

        Client.create({ ruc : ruc, name: name, email: email, city : city, country : country }).exec(function (err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/client');
        });
    },

    //Edita el Cliente
    edit: (req, res) => {
        Client.findOne({ _id: req.params.id }).exec(function (err, client) {
            if (err) {
                res.send(500, { err: err });
            }
            res.view('client/edit', { client : client })
        });
    },

    //Elimina el Cliente
    delete: (req, res) => {
        Client.destroy({ id: req.params.id }).exec(function (err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/client');
        });
    },

    //Actualiza el Usuario
    update: (req, res) => {

        const ruc = req.body.ruc;
        const name = req.body.name;
        const email = req.body.email;
        const city = req.body.city;
        const country = req.body.country;

        Client.update({ _id: req.params.id }, {  ruc : ruc, name: name, email: email, city : city, country : country }).exec(function (err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/client');
        });
    },
}