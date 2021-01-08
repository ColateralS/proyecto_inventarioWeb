/**
 * StoreController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    list: (req, res) => {
        Store.find().exec(function (err, stores) {
            if (err) {
                res.send(500, { err: err });
            }
            res.view('store/stores', { stores: stores });
        });
    },

    add: (req, res) => {

        const num_store = req.body.num_store;
        const name = req.body.name;
        const address = req.body.address;
        const phone = req.body.phone;
        const city = req.body.city;
        const country = req.body.country;

        Store.create({ num_store: num_store, name: name, address: address, phone: phone, city: city, country: country }).exec(function (err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/store');
        });
    },


    edit: (req, res) => {
        Store.findOne({ _id: req.params.id }).exec(function (err, store) {
            if (err) {
                res.send(500, { err: err });
            }
            res.view('store/edit', { store: store })
        });
    },


    delete: (req, res) => {
        Store.destroy({ id: req.params.id }).exec(function (err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/store');
        });
    },

    update: (req, res) => {

        const num_store = req.body.num_store;
        const name = req.body.name;
        const address = req.body.address;
        const phone = req.body.phone;
        const city = req.body.city;
        const country = req.body.country;

        Store.update({ _id: req.params.id }, { num_store: num_store, name: name, address: address, phone: phone, city: city, country: country }).exec(function (err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/store');
        });
    },
};