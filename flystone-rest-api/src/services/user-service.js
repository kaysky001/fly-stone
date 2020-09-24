const userRepo = require('../repositorys/user-repository');

async function findUserById(req, res) {
  let { screenCode, userId } = req.query;
  if (screenCode == '01') {
    const result = await userRepo.findAll();
    writeData(result);
  } else {
    userRepo.findUser(userId, writeData);
  }
  function writeData(res_data) {
    res.json({ totalCount: res_data.length, users: res_data });
  }
}

async function userManage(req, res) {
  try {
    let { kubunCode, userId, userInfo } = req.body;
    let res_data;
    if (kubunCode == '01') {
      res_data = await userRepo.insert(res, userId, userInfo);
    } else if (kubunCode == '02') {
      res_data = await userRepo.update(res, userId, userInfo);
    } else if (kubunCode == '03') {
      res_data = await userRepo.remove(res, userInfo);
    } else {
      res.status(400).send('登録区分が不正、ご確認ください。');
    }
    if (res_data) {
      res.json({
        statusCode: 200,
        message: 'ユーザ情報の操作が成功しました。'
      });
    } else {
      res.status(400).send({
        errorCode: 400,
        errorMessage: 'ユーザ情報の操作が失敗しました'
      });
    }
  } catch (error) {
    res.status(500).send('server is errorr');
  }
}

module.exports.findUserById = findUserById;
module.exports.userManage = userManage;
