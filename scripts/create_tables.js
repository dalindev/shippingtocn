/**
 *
 */

var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.addresses_table + '` ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `uuid` VARCHAR(36) NOT NULL DEFAULT 0, \
    `user_id` INT NOT NULL, \
    `primary_address` BOOLEAN NOT NULL DEFAULT 0, \
    `address_name` VARCHAR(60) NOT NULL, \
    `country` VARCHAR(80) DEFAULT NULL, \
    `address` VARCHAR(255) DEFAULT NULL, \
    `address2` VARCHAR(255) DEFAULT NULL, \
    `city` VARCHAR(80) DEFAULT NULL, \
    `prov` VARCHAR(80) DEFAULT NULL, \
    `postal_code` VARCHAR(80) DEFAULT NULL, \
    `phone` VARCHAR(16) DEFAULT NULL, \
    `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, \
    `deleted` TIMESTAMP NULL DEFAULT NULL, \
    `suspended` TIMESTAMP NULL DEFAULT NULL, \
    `modified` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) \
)');

console.log('Success: Table '+dbconfig.addresses_table+' Created!');

connection.end();
