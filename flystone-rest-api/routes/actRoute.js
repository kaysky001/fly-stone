/*
作成日：2020/09/25
基本インターフェースのルーター設定
controllerからデータ取得
*/
var express = require('express');
var router = express.Router();
var actController = require('../src/controllers/actController');

//アカウント情報一覧取得処理
router.get('/findAll', (req, res, next)=> {
	actController.findAll(req, res, next);
});
// アカウント情報取得処理
router.get('/findOne', (req, res, next)=> {
	actController.findOne(req, res, next);
});
// アカウント情報更新処理
router.post('/update',(req, res, next)=> {
	const body = req.body
	actController.update(body, res, next);

});
// アカウント情報削除処理
router.get('/delete', (req, res, next)=> {
	actController.delete(req, res, next);
});
// アカウント一括削除処理
router.get('/deleteAll', (req, res, next)=> {
	actController.deleteAll(req, res, next);
});
// アカウント情報検索処理
router.get('/searchById', (req, res, next)=> {
	actController.searchById(req, res, next);
});
// アカウント情報登録処理
router.post('/create', (req, res, next)=> {
	actController.create(req, res, next);
});


module.exports = router;
