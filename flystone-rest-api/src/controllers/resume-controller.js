const express = require("express");
const Resume = require("../models/ResumeAPI");

//職歴情報テーブルのAPIコントローラの作成
module.exports = {
    //職務履歴テーブルに登録
    create: async function(req, res, next) {
        try {
            const resume = await Resume.create(req.body);
            //更新成功判断
            if (resume.affectedRows > 0) {
                res.json({
                    statusCode: 200,
                    message: "職務履歴情報を登録しました。",
                });
            } else {
                res.status(400).send({
                    errorCode: 400,
                    errorMessage: "職務履歴情報の登録が失敗しました",
                });
            }
            //エラーcatch
        } catch (error) {
            res.status(500).send("サーバーエラー");
        }
    },
    //職務履歴をすべて取得
    findAll: async function(req, res, next) {
        try {
            //Daoからdata取得
            const allResume = await Resume.findAll();
            //data　null判断
            if (JSON.stringify(allResume) === "[]") {
                res.json({
                    statusCode: 300,
                    message: "データがありません。",
                });
                //data取得判断
            } else if (allResume) {
                res.json({
                    statusCode: 200,
                    message: "職務履歴情報取得が成功しました。",
                    data: JSON.stringify(allResume),
                });
            } else {
                res.status(400).send({
                    errorCode: 400,
                    errorMessage: "職務履歴情報取得が失敗しました",
                });
            }
        } catch (error) {
            res.status(500).send("サーバーエラー");
        }
    },
    //職員の指定の職務履歴を取得
    findOne: async function(req, res, next) {
        try {
            const resume = await Resume.findOne(req.params.id);

            if (JSON.stringify(resume) === "[]") {
                res.json({
                    statusCode: 300,
                    message: "データがありません。",
                });
            } else if (resume) {
                res.json({
                    statusCode: 200,
                    message: "職務履歴情報取得が成功しました。",
                    data: JSON.stringify(resume),
                });
            } else {
                res.status(400).send({
                    errorCode: 400,
                    errorMessage: "職務履歴情報取得が失敗しました",
                });
            }
            //エラーcatch
        } catch (error) {
            res.status(500).send("サーバーエラー");
        }
    },
    //職務履歴を更新
    update: async function(req, res, next) {
        var { staffNumber } = req.params.id;
        //職員番号notnull判断
        if (!staffNumber) {
            res.status(400).send({
                errorCode: 400,
                errorMessage: "職員番号選択していません。",
            });
        }
        try {
            const resume = await Resume.update(req.body, staffNumber);
            //更新成功判断
            if (resume.affectedRows > 0) {
                res.json({
                    statusCode: 200,
                    message: "職務履歴情報が更新しました。",
                });
            } else {
                res.status(400).send({
                    errorCode: 400,
                    errorMessage: "職務履歴情報更新が失敗しました",
                });
            }
            //エラーcatch
        } catch (error) {
            res.status(500).send("サーバーエラー");
        }
    },
    //職務履歴を削除
    delete: async function(req, res, next) {
        var { staffNumber } = req.params.id;
        try {
            const resume = await actDao.delete(req.body, staffNumber);
            //data　null判断
            if (resume.affectedRows === 0) {
                res.json({
                    statusCode: 400,
                    message: "削除データがありません。",
                });
                //データ取得判断
            } else if (resume.affectedRows > 0) {
                res.json({
                    statusCode: 200,
                    message: "職務履歴情報を削除しました。",
                });
            } else {
                res.status(400).send({
                    errorCode: 400,
                    errorMessage: "職務履歴情報の削除が失敗しました",
                });
            }
            //エラーcatch
        } catch (error) {
            res.status(500).send("サーバーエラー");
        }
    },
    //すべての職務履歴を削除する
    deleteAll: async function(req, res, next) {
        try {
            const resume = await Resume.deleteAll();
            //data　null判断
            if (resume.affectedRows === 0) {
                res.json({
                    statusCode: 400,
                    message: "削除データがありません。",
                });
                //データ取得判断
            } else if (resume.affectedRows > 0) {
                res.json({
                    statusCode: 200,
                    message: "アカウント情報が削除しました。",
                });
            } else {
                res.status(400).send({
                    errorCode: 400,
                    errorMessage: "アカウント情報削除が失敗しました",
                });
            }
            //エラーcatch
        } catch (error) {
            res.status(500).send("サーバーエラー");
        }
    },
};