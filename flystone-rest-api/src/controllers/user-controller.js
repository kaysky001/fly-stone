const userSrv = require('../services/user-service');
function mainGet(req, res) {
  let { screenCode, userId } = req.query;

  let errMsgList = [];
  if (!screenCode) {
    errMsgList.push('画面区分が未設定、値を入力してください！');
  }
  if (screenCode == '02' && !userId) {
    errMsgList.push('ユーザIDが未設定、値を入力してください！');
  }
  if (errMsgList.length > 0) {
    res.status(400).send({ errorCode: 400, errorMessage: errMsgList });
  } else {
    userSrv.findUserById(req, res);
  }
}

function mainPost(req, res) {
  let { kubunCode, userId, userInfo } = req.body;

  let errMsgList = [];
  if (!kubunCode) {
    errMsgList.push('登録区分が未設定、値を入力してください！');
  }
  if (!userId) {
    errMsgList.push('登録者IDが未設定、値を入力してください！');
  }
  if (!userInfo) {
    errMsgList.push('ユーザ情報が未設定、値を入力してください！');
  }
  if (errMsgList.length > 0) {
    res.status(400).send({ errorCode: 400, errorMessage: errMsgList });
  } else {
    userSrv.userManage(req, res);
  }
}
module.exports = { mainGet, mainPost };
