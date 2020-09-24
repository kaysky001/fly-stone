const { db } = require('../utils/utils');
const mysql = require('mysql');
const mysqlPromise = require('../utils/mysqlPromise');

/**
 * ユーザ情報の取得
 */
function findAll() {
  return new Promise(async (resolve, reject) => {
    try {
      let sql = 'select * from t_user';
      console.log('sql:' + sql);
      res = await mysqlPromise.query(db, sql);
      if (res.length > 0) {
        resolve(res);
      } else {
        resolve(null);
      }
    } catch (error) {
      reject(error);
    }
  });
}

async function findUser(userId, callback) {
  let sql = 'select * from t_user where user_id = ?';
  let params = [userId];
  sql = mysql.format(sql, params);
  console.log('sql:' + sql);
  const result = await mysqlPromise.query(db, sql);
  callback(result);
}

/**
 * ユーザ情報の登録
 */
function insert(res, userId, userInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      let sql = `insert t_user set ?`;
      let params = {
        name: userInfo.name,
        sex: userInfo.sex,
        branch: userInfo.branch,
        age: userInfo.age,
        created_date: new Date(),
        created_id: userId,
        updated_date: new Date(),
        updated_id: userId,
      };
      sql = mysql.format(sql, params);
      console.log('sql:' + sql);
      await mysqlPromise.beginTransaction(db);
      res = await mysqlPromise.query(db, sql);
      await mysqlPromise.commit(db);
      if (res.affectedRows > 0) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      await mysqlPromise.rollback(db);
    }
  });
}

/**
 * ユーザ情報の更新
 */
function update(res, userId, userInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      let sql = `update t_user set ? where user_id = ${userInfo.user_id}`;
      let params = {
        name: userInfo.name,
        sex: userInfo.sex,
        branch: userInfo.branch,
        age: userInfo.age,
        created_date: new Date(),
        created_id: userId,
        updated_date: new Date(),
        updated_id: userId,
      };
      sql = mysql.format(sql, params);
      console.log('sql:' + sql);
      await mysqlPromise.beginTransaction(db);
      res = await mysqlPromise.query(db, sql);
      await mysqlPromise.commit(db);
      if (res.affectedRows > 0) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      await mysqlPromise.rollback(db);
    }
  });
}

/**
 * ユーザ情報の削除
 */
function remove(res, userInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      let sql = `delete from t_user where user_id = ${userInfo.user_id}`;
      console.log('sql:' + sql);
      await mysqlPromise.beginTransaction(db);
      res = await mysqlPromise.query(db, sql);
      await mysqlPromise.commit(db);
      if (res.affectedRows > 0) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      await mysqlPromise.rollback(db);
    }
  });
}
module.exports = { findAll, findUser, insert, update, remove };
