/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    //Lista todos los Usuarios
    list: (req, res) => {
        User.find().exec(function(err, users) {
            if (err) {
                res.send(500, { err: err });
            }
            res.view('user/users', { users: users });
        });
    },

    //Agrega un Usuario nuevo
    // add: (req, res) => {

    //     const name = req.body.name;
    //     const lastname = req.body.lastname;
    //     const email = req.body.email;
    //     const password = req.body.password;

    //     Users.create({ name: name, lastname: lastname, email: email, password: password }).exec(function(err) {
    //         if (err) {
    //             res.send(500, { err: err });
    //         }
    //         res.redirect('/users/list');
    //     });
    // },

    //Edita el Usuario
    edit: (req, res) => {
        User.findOne({ _id: req.params.id }).exec(function(err, user) {
            if (err) {
                res.send(500, { err: err });
            }
            res.view('user/edit', { user: user })
        });
    },

    //Elimina el Usuario
    delete: (req, res) => {
        User.destroy({ id: req.params.id }).exec(function(err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/user');
        });
    },

    //Actualiza el Usuario
    update: (req, res) => {

        const username = req.body.username;
        const name = req.body.name;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const role = req.body.role;

        User.update({ _id: req.params.id }, { username: username, name: name, lastname: lastname, email: email, role: role }).exec(function(err) {
            if (err) {
                res.send(500, { err: err });
            }
            res.redirect('/user');
        });
    },
}