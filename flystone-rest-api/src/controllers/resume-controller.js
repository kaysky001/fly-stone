const express = require("express");
const Resume = require("../models/ResumeAPI");

//職歴情報テーブルのAPIコントローラの作成
module.exports = {
    create: function(req, res, next) {
        console.log(req.body);
        Resume.create(req.body).then((result) => {
            res.json({ resume: result });
        });
    },
    findAll: function(req, res, next) {
        Resume.findAll().then((result) => {
            res.json({ resumes: result });
        });
    },
    findOne: function(req, res, next) {
        Resume.findOne(req.params.id).then((result) => {
            res.json({ resumes: result });
        });
    },
    update: function(req, res, next) {
        var { staffNumber } = req.params.id;
        Resume.update(req.body, staffNumber).then((result) => {
            res.json({ resume: result });
        });
    },
    delete: function(req, res, next) {
        var { staffNumber } = req.params.id;
        Resume.delete(req.body, staffNumber).then((result) => {
            res.json({ resume: result });
        });
    },
    deleteAll: function(req, res, next) {
        Resume.deleteAll().then((result) => {
            res.json({ resume: result });
        });
    },
    searchById: function(req, res, next) {
        var { staffNumber } = req.query.id;
        Resume.searchById(req.body, staffNumber).then((result) => {
            res.json({ resume: result });
        });
    },
};