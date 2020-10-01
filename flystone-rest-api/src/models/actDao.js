
/*
作成日：2020/09/25
データベース操作ため、基本インターフェース実現
*/
const {pool} = require('../conf/db');
const sql = require('./userSqlMapping');


module.exports = {
			//アカウント情報一覧取得
			findAll(){
				return new  Promise ((resolve,reject)=>{
					pool.query(sql.queryAll,(error,result,fields)=>{
						if(error){
							reject(error);
						}
						resolve(result);
					})
				})
			},
			//アカウント情報取得
			findOne(staff_number){
				return new  Promise ((resolve,reject)=>{
					pool.query(sql.findOne,staff_number,(error,result,fields)=>{
						if(error){
							reject(error);
						}
						resolve(result);
					})
				})
			},
			//IDでアカウント情報取得
			searchById(staffNumber){
				return new  Promise ((resolve,reject)=>{
					pool.query(sql.findOne,staffNumber,(error,result,fields)=>{
						if(error){
							reject(error);
						}
						resolve(result);
					})
				})
			},
			//IDでアカウント情報削除
			delete(staffNumber){
				return new  Promise ((resolve,reject)=>{
					pool.query(sql.delete,staffNumber,(error,result,fields)=>{
						if(error){
							reject(error);
						}
						resolve(result);
					})
				})
			},
			//アカウント情報削除
			deleteAll(){
				return new  Promise ((resolve,reject)=>{
					pool.query(sql.deleteAll,(error,result,fields)=>{
						if(error){
							reject(error);
						}
						resolve(result);
					})
				})
			},
			//アカウント情報更新
			update(staffData){
				return new  Promise ((resolve,reject)=>{
					pool.query(sql.update,staffData,(error,result,fields)=>{
						if(error){
							reject(error);
						}
						resolve(result);
					})
				})
			},
			//アカウント情報追加
			create(staffData){
				return new  Promise ((resolve,reject)=>{
					pool.query(sql.insert,staffData,(error,result,fields)=>{
						if(error){
							reject(error);
						}
						resolve(result);
					})
				})
			}
}