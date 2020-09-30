import React from "react";

function StaffEditConf() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 text-center">
          <h2>職員基本情報修正確認</h2>
        </div>
        <div className="col-lg-4">
          <div className="text-center">
            <button
              type="button"
              className="mr-3 btn btn-secondary btn-sm rounded-pill"
              id="staffEdit"
            >
              戻る
            </button>
            <button
              type="button"
              className="btn btn-warning btn-sm rounded-pill"
              id="logout"
            >
              ログアウト
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <p>職員番号:8888888</p>
      </div>
      <div className="row">
        <div className="form-group col-lg-12">
          <label for="name">名前:長嶋　茂雄</label>
        </div>
      </div>
      <div className="row">
        <p>性別:男</p>
      </div>
      <div className="row">
        <p>生年月日:1999/09/09</p>
      </div>
      <div className="row">
        <div className="form-group col-lg-12">
          <label for="zip">〒:1110000</label>
        </div>
        <div className="form-group col-lg-12">
          <label for="adress">住所:東京都架空区</label>
        </div>
      </div>
      <h6>退職</h6>
      <div className="row">
        <div className="col-lg-6">
          <label for="retire_date">採用日:2019/12/21</label>
        </div>
        <div className="col-lg-6">
          <label for="retire_reason">採用事由:試験採用</label>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <label for="retire_date">退職日:2019/12/21</label>
        </div>
        <div className="col-lg-6">
          <label for="retire_reason">退職事由:自己都合</label>
        </div>
      </div>
      <h6>役職</h6>
      <div className="row">
        <div className="col-lg-6">
          <label for="retire_date">異動日:2020/09/11</label>
        </div>
        <div className="col-lg-6">
          <label for="retire_reason">異動事由:部署替え</label>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <label for="retire_date">職級:課級</label>
        </div>
        <div className="col-lg-6">
          <label for="retire_reason">職位:課長</label>
        </div>
      </div>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-success btn-sm rounded-pill"
          id="staffDone"
        >
          更新
        </button>
      </div>
      <div className="col-lg-1"></div>
    </div>
  );
}
export default StaffEditConf;
