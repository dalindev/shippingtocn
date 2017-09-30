// config/database.js
var config = require('../config_key/conf.json');

module.exports = {
    'connection': {
        'host': config.dbHost,
        'user': config.dbUser,
        'password': config.dbPassword,
        'database': config.dbDatabase
    },
	'database': 'shipping_ca',
    'users_table': 'users',
    'addresses_table': 'addresses'
};
