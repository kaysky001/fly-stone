const mysql = require('mysql');
const dbConfig = require('../config/db.config.js');

/**
 * Node.jsでMySQL 8.0へ接続する
 * エラー： ER_NOT_SUPPORTED_AUTH_MODE
 * 解決方法sql:
    ALTER USER 'hailang' IDENTIFIED WITH mysql_native_password BY '110119';
    FLUSH PRIVILEGES;
 */
const db = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

module.exports = {
  db,
  connection,
};
