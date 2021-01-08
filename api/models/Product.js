/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        product_provider: {
            type : 'string',
            required: true
        },
        product_category: {
            type : 'string',
            required: true
        },
        name: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        quantity: {
            type: 'number',
            required: true
        },
        price: {
            type: 'number',
            required: true
        }
    },

};