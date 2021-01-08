/**
 * ProviderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    //Lista todos los Proveedores
    list: (req, res) => {
        Provider.find().exec(function(err, providers) {
            if (err) {
                res.send(500, { err: err });
            }
            res.view('provider/providers', { providers: providers });
        });
    },

    //Agrega un Proveedor nuevo
    add: (req, res) => {

        const name = req.body.name;
        const address = req.body.address;
        const phone = req.body.phone;
        const city = req.body.city;
        const country = req.body.country;

        Provider.create({ name: name, address: address, phone: phone, city: city, country: country }).exec(function(err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/provider');
        });
    },

    //Edita el Proveedor
    edit: (req, res) => {
        Provider.findOne({ _id: req.params.id }).exec(function(err, provider) {
            if (err) {
                res.send(500, { err: err });
            }
            res.view('provider/edit', { provider: provider })
        });
    },

    //Elimina el Proveedor
    delete: (req, res) => {
        Provider.destroy({ id: req.params.id }).exec(function(err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/provider');
        });
    },

    //Actualiza el Proveedor
    update: (req, res) => {

        const name = req.body.name;
        const address = req.body.address;
        const phone = req.body.phone;
        const city = req.body.city;
        const country = req.body.country;

        Provider.update({ _id: req.params.id }, { name: name, address: address, phone: phone, city: city, country: country }).exec(function(err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/provider');
        });
    },
};