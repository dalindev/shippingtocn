/**
 *
 */

var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

connection.query('CREATE DATABASE ' + dbconfig.database);

connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.users_table + '` ( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `username` VARCHAR(60) NOT NULL, \
    `email` VARCHAR(150) DEFAULT NULL, \
    `firstname` VARCHAR(80) DEFAULT NULL, \
    `lastname` VARCHAR(80) DEFAULT NULL, \
    `city` VARCHAR(80) DEFAULT NULL, \
    `prov` VARCHAR(80) DEFAULT NULL, \
    `postal_code` VARCHAR(80) DEFAULT NULL, \
    `country` VARCHAR(80) DEFAULT NULL, \
    `phone` VARCHAR(16) DEFAULT NULL, \
    `phone_other` VARCHAR(16) DEFAULT NULL, \
    `birth_day` DATE DEFAULT NULL, \
    `password` CHAR(64) NOT NULL, \
    `created` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, \
    `deleted` TIMESTAMP, \
    `suspended` TIMESTAMP, \
    `modified` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC), \
    UNIQUE INDEX `username_UNIQUE` (`username` ASC) \
)');

console.log('Success: Database Created!');

connection.end();
