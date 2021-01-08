const ProductController = require("../api/controllers/ProductController");

module.exports.routes = {

    //Ruta Principal
    '/': 'DashboardController.renderIndex',
    '/explore': {
        view: 'pages/explore'
    },

    '/statistics': {
        view: 'statistics/statistics'
    },

    //Authentication
    'get /login': {
        view: 'user/login'
    },
    'get /register': {
        view: 'user/register'
    },

    'get /product/add': {
        view: 'product/add'
    },

    'get /provider/add': {
        view: 'provider/add'
    },

    'get /category/add': {
        view: 'category/add'
    },

    'get /client/add': {
        view: 'client/add'
    },

    'get /sale/add': {
        view: 'sale/add'
    },

    'get /store/add': {
        view: 'store/add'
    },

    'post /login': 'AuthController.login',
    'post /register': 'AuthController.register',
    '/logout': 'AuthController.logout',

    //Rutas de Usuario
    'GET /user': 'UserController.list',
    'GET /user/edit/:id': 'UserController.edit',
    'GET /user/delete/:id': 'UserController.delete',
    'POST /user/update/:id': 'UserController.update',

    //Rutas de Producto
    'GET /product': 'ProductController.list',
    'post /product/add': 'ProductController.add',
    'get /product/add': 'ProductController.listRelationships',
    'GET /product/edit/:id': 'ProductController.edit',
    'GET /product/delete/:id': 'ProductController.delete',
    'POST /product/update/:id': 'ProductController.update',

    //Rutas de Proveedor
    'GET /provider': 'ProviderController.list',
    'post /provider/add': 'ProviderController.add',
    'GET /provider/edit/:id': 'ProviderController.edit',
    'GET /provider/delete/:id': 'ProviderController.delete',
    'POST /provider/update/:id': 'ProviderController.update',

    //Rutas de Categoria
    'GET /category': 'CategoryController.list',
    'post /category/add': 'CategoryController.add',
    'GET /category/edit/:id': 'CategoryController.edit',
    'GET /category/delete/:id': 'CategoryController.delete',
    'POST /category/update/:id': 'CategoryController.update',

    //Rutas de Cliente
    'GET /client': 'ClientController.list',
    'POST /client/add': 'ClientController.add',
    'GET /client/edit/:id': 'ClientController.edit',
    'GET /client/delete/:id': 'ClientController.delete',
    'POST /client/update/:id': 'ClientController.update',

    //Rutas de Ventas
    'GET /sale': 'SaleController.list',
    'post /sale/add': 'SaleController.add',
    'get /sale/add': 'SaleController.listRelationships',
    'GET /sale/edit/:id': 'SaleController.edit',
    'GET /sale/delete/:id': 'SaleController.delete',
    'POST /sale/update/:id': 'SaleController.update',

    //Rutas de la Tienda
    'GET /store': 'StoreController.list',
    'POST /store/add': 'StoreController.add',
    'GET /store/edit/:id': 'StoreController.edit',
    'GET /store/delete/:id': 'StoreController.delete',
    'POST /store/update/:id': 'StoreController.update',

    //Rutas de Estadisticas
    'GET /statistics': 'StatisticsController.findAll'
};