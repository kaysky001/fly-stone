import React, { Component } from "react";

class ResumeEditConf extends Component {
  backClick = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 text-center">
            <h2>職務履歴情報修正確認</h2>
          </div>
          <div className="col-lg-4">
            <div className="text-center">
              <button
                type="button"
                className="mr-3 btn btn-secondary btn-sm rounded-pill"
                id="resumeEdit"
                onClick={this.backClick}
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
        <div className="row ">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <label for="retire_date">開始年月日:2019年4月</label>
              </div>
              <div className="col-lg-6">
                <label for="retire_reason">終了年月:2019年6月</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label for="retire_date">勤務先:大和本社</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label for="retire_date">
                  プロジェクト名:証券取引管理システム
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label for="retire_date">役割:SL</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label for="retire_date">取引先:大和証券</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label for="retire_date">最寄駅:茅場町駅</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label for="retire_date">備考:Java Oracle</label>
              </div>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="mr-3 btn btn-success btn-sm rounded-pill"
                id="resumeEditDone"
              >
                修正
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ResumeEditConf;
