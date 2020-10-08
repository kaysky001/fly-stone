const express = require("express");
const Resume = require("../models/ResumeAPI");

//職歴情報テーブルのAPIコントローラの作成
module.exports = {
    //職務履歴テーブルに登録
    create: (req, res, next) => {
        if (!Object.keys(req.body).length) {
            res.status(400).send({
                message: "登録情報なし！",
            });
        }
        Resume.create(req.body)
            .then((result) => {
                res.send(result);
            })
            .catch((error) => {
                res.status(500).send({
                    message: "何らかのエラーです。",
                });
            });
    },
    //職務履歴をすべて取得
    findAll: (req, res, next) => {
        Resume.findAll()
            .then((result) => {
                res.send(result);
            })
            .catch((error) => {
                res.status(500).send({
                    message: error.message || "何らかのエラーです。",
                });
            });
    },
    //職員の指定の職務履歴を取得
    findOne: (req, res) => {
        var staffNumber = req.params.id;
        Resume.findOne(staffNumber)
            .then((result) => {
                if (result.length === 0) {
                    res.status(404).send({
                        message: `該当職員番号は見つかりませんでした。 ${staffNumber}.`,
                    });
                } else {
                    res.send(result);
                }
            })
            .catch((err) => {
                res.status(500).send({
                    message: " 取得エラーです。" + req.params.id,
                });
            });
    },
    //職務履歴を更新
    update: (req, res, next) => {
        var staffNumber = req.params.id;
        if (!Object.keys(req.body).length) {
            res.status(400).send({
                message: "更新情報なし",
            });
        }
        Resume.update(req.body, staffNumber)
            .then((result) => {
                if (result.changedRows === 0) {
                    res.status(404).send({
                        message: `対象は見つかりませんでした。 ${staffNumber}.`,
                    });
                } else {
                    res.send(result);
                }
            })
            .catch((err) => {
                res.status(500).send({
                    message: "更新エラーです。 " + staffNumber,
                });
            });
    },
    //職務履歴を削除
    delete: (req, res, next) => {
        var staffNumber = req.params.id;
        Resume.delete(req.body, staffNumber)
            .then((result) => {
                if (result.affectedRows === 0) {
                    res.status(404).send({
                        message: `該当職員番号は見つかりませんでした。 ${staffNumber}.`,
                    });
                } else {
                    res.send(result);
                }
            })
            .catch((err) => {
                res.status(500).send({
                    message: "削除エラーです。 " + staffNumber,
                });
            });
    },
    //すべての職務履歴を削除する
    deleteAll: (req, res, next) => {
        Resume.deleteAll()
            .then((result) => {
                res.send({ message: `全削除成功しました。` });
            })
            .catch((err) => {
                res.status(500).send({
                    message: err.message || "全件削除エラーです。",
                });
            });
    },
};