/**
 * Provider.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        name: {
            type: 'string',
            required: true
        },
        address: {
            type: 'string',
            required: true
        },
        phone:{
            type: 'number',
            required: true
        },
        city: {
            type: 'string',
            required: true
        },
        country: {
            type: 'string',
            required: true
        }
    },

};