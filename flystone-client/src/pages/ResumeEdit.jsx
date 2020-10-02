import React, { Component } from "react";

class ResumeEdit extends Component {
  backClick = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div className="container">
        <div className="row ">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 text-center">
            <h2>職務履歴情報修正</h2>
          </div>
          <div className="col-lg-4">
            <div className="text-center">
              <button
                type="button"
                className="mr-3 btn btn-secondary btn-sm rounded-pill"
                id="staffInfo"
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
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <form>
              <div className="form-group row">
                <div className="col-lg-6">
                  <label for="startDate">開始年月:</label>
                  <input
                    type="text"
                    value="2019年4月"
                    id="startDate"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6">
                  <label for="endDate">終了年月:</label>
                  <input
                    type="text"
                    value="2019年6月"
                    className="form-control"
                    id="endDate"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-6">
                  <label for="workPlace">勤務先:</label>
                  <input
                    type="text"
                    value="大和証券"
                    id="workPlace"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6">
                  <label for="customer">取引先:</label>
                  <input
                    type="text"
                    value="大和本社"
                    id="customer"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-4">
                  <label for="position">役割:</label>
                  <input
                    type="text"
                    value="SL"
                    id="position"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-8">
                  <label for="project">プロジェクト名:</label>
                  <input
                    type="text"
                    value="証券取引管理システム"
                    id="project"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-lg-12">
                  <label for="nearestStation">最寄駅:</label>
                  <input
                    type="text"
                    value="茅場町駅"
                    id="nearestStation"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-lg-12">
                  <label for="remarks">備考:</label>
                  <input
                    type="text"
                    value="C# SQL server2008"
                    id="remarks"
                    className="form-control"
                  />
                </div>
              </div>
              <ul id="errorArea"></ul>
              <div className="text-center">
                <button
                  type="button"
                  className="mr-3 btn btn-success btn-sm rounded-pill"
                  id="resumeEditConf"
                >
                  修正確認
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    );
  }
}
export default ResumeEdit;
