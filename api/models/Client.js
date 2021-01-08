/**
 * Client.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        ruc:{
            type: 'number',
            required: true
        },
        name: {
            type: 'string',
            required: true
        },
        email: {
            type: 'string',
            required: true
        },
        city: {
            type: 'string',
            required: true
        },
        country:{
            type: 'string',
            required: true
        },
    },

};