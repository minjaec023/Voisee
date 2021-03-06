"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
const env = process.env.NODE_ENV || 'development';
const config = require('./db_info.json')[env];
export const mysql_dbc = {
    init: function () {
        return mysql.createConnection({
            host: config.host,
            port: config.port,
            user: config.user,
            password: config.password,
            database: config.database
        });
    },
    test_open: function (con) {
        con.connect(function (err) {
            if (err) {
                console.error('mysql connection error :' + err);
            }
            else {
                console.info('mysql is connected successfuly.');
            }
        });
    },
};