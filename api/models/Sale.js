/**
 * Sale.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        date: {
            type: 'string',
            columnType: 'date',
            required: true
        },
        client_ruc:{
            type: 'number',
            required: true
        },
        employee_username:{
            type: 'string',
            required: true
        },
        product_name:{
            type: 'string',
            required: true
        },
        quantity:{
            type: 'number',
            required: true
        },
    },

};