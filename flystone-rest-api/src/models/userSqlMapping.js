/*
作成日：2020/09/25
操作用SQL文設定
*/
const account = {
	insert:'INSERT INTO account(staff_number,password,rolas,pw_need_change_flg,fail_attemps,enabled_flg,deleted_flg,session_id) VALUES(0,?,?,?,?,?,?,?)',
	update:'update account set password=?,rolas=?,enabled_flg=? where staff_number=?',
	delete: 'delete from account where staff_number=?',
	searchById: 'select * from account where staff_number=?',
	queryAll: 'select * from account',
	deleteAll:'delete from account',
	findOne:'select * from account where staff_number=?'
};
 
module.exports = account;