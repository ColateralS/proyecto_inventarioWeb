/**
 * StatisticsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {

    findAll: (req, res) => {
        User.find().exec(function (err, users) {
            Product.find().exec(function (err, products) {
                Provider.find().exec(function (err, providers) {
                    Client.find().exec(function (err, clients) {
                        Sale.find().exec(function (err, sales) {
                            if (err) {
                                res.send(500, { err: err });
                            }
                            res.view('statistics/statistics', {
                                users: users, products: products,
                                providers: providers, clients: clients, sales: sales
                            });
                        });
                    });
                });
            });
        });
    },

}