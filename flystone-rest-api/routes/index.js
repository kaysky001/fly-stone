const express = require('express');
const router = express.Router();
const path = require('path');
var resumeController = require("../controllers/resume-controller");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'flystone-rest-api!' });
});

/**
 * 雇員情報の登録、取得、更新、削除処理
 * Employees
 */
const empCtr = require('../src/controllers/employee-controller');
// Create a new Employee
router.post('/employees', empCtr.create);
// Retrieve all Employees
router.get('/employees', empCtr.findAll);
// Retrieve a single Employee with employeeId
router.get('/employees/:employeeId', empCtr.findOne);
// Update a Employee with employeeId
router.put('/employees/:employeeId', empCtr.update);
// Delete a Employee with employeeId
router.delete('/employees/:employeeId', empCtr.delete);
// Delete all Employees
router.delete('/employees', empCtr.deleteAll);

/**
 * ユーザ情報の登録、取得、更新、削除処理
 * users
 */
const userCtr = require('../src/controllers/user-controller');
/* GET users listing. */
router.get('/users', userCtr.mainGet);
router.post('/users/request', userCtr.mainPost);

// DBからEXCEL作成し返却
const excelCtr = require('../src/controllers/excel-controller');
router.get('/dbExcel', excelCtr.getDbExcel);

// ファイルをアップロード
router.get('/upload', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views/upload.html'));
});

const multer = require('multer');
var storage = multer.diskStorage({
    //保存先を変更
    destination: function(req, file, cb) {
        var dir = path.join(__dirname, '../src/uploads/');
        cb(null, dir);
    },
    //ファイル名を変更
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: storage,
});
router.post('/upload', upload.single('file'), excelCtr.postExcel);

// 追加
// 複数ファイルアップロード
router.post('/multiple', upload.array('files'), function(req, res, next) {
    console.log(req.files);
    console.log(req.body);
    res.send('multiple upload success');
});

/* 職歴作成 */
router.post("/resume", resumeController.create);
/* 職歴全検索 */
router.get("/resume", resumeController.findAll);
/* 職歴検索（職員ごと） */
router.get("/resume/:id", resumeController.findOne);
/* 職歴修正 */
router.put("/resume/:id", resumeController.update);
/* 職歴削除 */
router.delete("/resume/:id", resumeController.delete);
/* 職歴全削除 */
router.delete("/resume", resumeController.deleteAll);
/* 職歴検索（一件） */
router.get("/resume/?id", resumeController.searchById);

module.exports = router;