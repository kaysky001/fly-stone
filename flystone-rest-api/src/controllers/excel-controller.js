const xlsx = require('xlsx');
const userRepo = require('../repositorys/user-repository');
const path = require('path');

/**
 * DBバックアップ
 * DBからユーザ情報を取得し、EXCELを作成し、クライアントへ返却する。
 */
async function getDbExcel(req, res) {
  const Workbook = xlsx.utils.book_new();
  // ユーザテーブル
  const result = await userRepo.findAll();
  let ws_user = xlsx.utils.json_to_sheet(result);
  xlsx.utils.book_append_sheet(Workbook, ws_user, 't_user');

  // 自定義データ
  let wsData = [
    ['ヘッダ１', 'ヘッダ２'],
    ['値１', '値２']
  ];
  let ws = xlsx.utils.aoa_to_sheet(wsData);
  xlsx.utils.book_append_sheet(Workbook, ws, 'testData');

  const ts = new Date().getTime();
  const fileName = 'db_' + ts + '.xlsx';
  const resFile = path.join(__dirname, fileName);
  xlsx.writeFile(Workbook, resFile);

  res.sendfile(resFile);
}

/**
 * クライアントからアップロードされたファイルを読み取り、
 * 中身内容をクライアントへ返却する。
 */
async function postExcel(req, res) {
  const filename = req.file.filename;
  const filepath = req.file.path;
  const extname = path.extname(filepath);

  console.log('extname' + extname);

  if (extname == '.xlsx' || extname == '.xls') {
    //EXCELを読み取り
    const workbook = xlsx.readFile(filepath);
    const sheetNames = workbook.SheetNames;

    let data = [];
    sheetNames.forEach(function(y) {
      /* iterate through sheets */
      var worksheet = workbook.Sheets[y];
      var wsdata = xlsx.utils.sheet_to_json(worksheet, {
        header: 1,
        raw: true
      });
      data.push({ [y]: wsdata });
    });

    res.json({ [filename]: data });
  } else {
    // txtファイルを読み取り
    const fs = require('fs');
    const content = fs.readFileSync(filepath, 'utf-8');
    res.send([filename] + ': \n' + content);
  }
}

module.exports.getDbExcel = getDbExcel;
module.exports.postExcel = postExcel;
