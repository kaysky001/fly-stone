const sql = require("../utils/utils.js").connection;
//時刻取得のため
require("date-utils");
//ターブル設定
const table = "job_history";
//職務履歴情報テーブルのAPI
module.exports = {
    create: function(body) {
        //staffNumber、create,updateの一時的な指定
        const exampleStaff = "111111111111";
        //登録更新時間設定
        let createDate = new Date().toFormat("YYYY/MM/DD HH24:MI:SS");
        let updateDate = new Date().toFormat("YYYY/MM/DD HH24:MI:SS");
        return new Promise((resolve, reject) => {
            sql.query(
                `INSERT INTO ${table}(
                staff_number,start_date,end_date,work_place,project,
                job_role,customer,near_station,remarks,create_date,
                update_date,create_id,update_id)
                VALUES(${exampleStaff},"${body.startDate}","${body.endDate}",
                    "${body.workPlace}","${body.project}",
                    "${body.position}","${body.customer}","${body.nearStation}",
                    "${body.remarks}","${createDate}","${updateDate}",
                    ${exampleStaff},${exampleStaff})`,
                (err, result, fields) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
    findAll: function() {
        return new Promise((resolve, reject) => {
            sql.query(`select * from ${table}`, (err, result, fields) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
    findOne: function(staffNumber) {
        return new Promise((resolve, reject) => {
            sql.query(
                `SELECT * FROM ${table} WHERE staff_number="${staffNumber}" ORDER BY start_date,end_date,create_date `,
                (err, result, fields) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
    update: function(body, staffNumber) {
        //登録更新時間設定
        let updateDate = new Date().toFormat("YYYY/MM/DD HH24:MI:SS");
        //staffNumber、create,updateの一時的な指定
        return new Promise((resolve, reject) => {
            sql.query(
                `UPDATE ${table} 
                SET start_date = "${body.startDate}",end_date = "${body.endDate}",work_place = "${body.workPlace}",
                project = "${body.project}",job_role = "${body.jobRole}",customer = "${body.customer}",
                near_station = "${body.nearStation}",remarks = "${body.remarks}",update_date = "${updateDate}",
                update_id = "${body.updateId}" 
                WHERE staff_number = "${staffNumber}" AND create_date = "${body.createDate}"`,
                (err, result, fields) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
    delete: function(body, staffNumber) {
        return new Promise((resolve, reject) => {
            sql.query(
                `DELETE FROM ${table} WHERE staff_number=${staffNumber} AND create_date="${body.createDate}"`,
                (err, result, fields) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                }
            );
        });
    },
    deleteAll: function() {
        return new Promise((resolve, reject) => {
            sql.query(`DELETE FROM ${table}`, (err, result, fields) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    },
};