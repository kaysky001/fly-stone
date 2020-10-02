import React from "react";
import { Component } from "react";

class StaffEdit extends Component {
  state = { staff: [] };
  componentDidMount() {
    fetch("/staff")
      .then((res) => res.json())
      .then((staff) => this.setState({ staff }));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 text-center">
            <h2>職員基本情報修正</h2>
          </div>
          <div className="col-lg-4">
            <div className="text-center">
              <button
                type="button"
                className="mr-3 btn btn-secondary btn-sm rounded-pill"
                id="staffInfo"
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
              <h6>職員基本情報</h6>
              <div className="row">
                <p>職員番号:8888888</p>
              </div>
              <div className="row">
                <div className="form-group col-lg-12">
                  <label for="name">名前:</label>
                  <input
                    type="text"
                    value="長嶋　茂雄"
                    id="name"
                    className="form-control"
                  />
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
                  <label for="zip">〒</label>
                  <input
                    type="text"
                    value="1110000"
                    name="zip"
                    onKeyUp="AjaxZip3.zip2addr('zip', '', 'address', 'address');"
                    className="form-control"
                  />
                </div>
                <div className="form-group col-lg-12">
                  <label for="adress">住所</label>
                  <input
                    type="text"
                    value="東京都架空区"
                    name="address"
                    className="form-control"
                  />
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
              <div className="form-group row">
                <div className="col-lg-6">
                  <label for="retire_date">退職日:</label>
                  <input
                    type="text"
                    id="retire_date"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6">
                  <label for="retire_reason">退職事由:</label>
                  <input
                    type="text"
                    id="retire_reason"
                    className="form-control"
                  />
                </div>
              </div>
              <h6>役職</h6>
              <div className="form-group row">
                <div className="col-lg-6">
                  <label for="transfer_date">異動日:</label>
                  <input
                    type="text"
                    value="2020/09/11"
                    id="transfer_date"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6">
                  <label for="transfer_reason">異動事由:</label>
                  <input
                    type="text"
                    value="部署替え"
                    id="transfer_reason"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-6">
                  <label for="job_className">職級:</label>
                  <input
                    type="text"
                    value="課級"
                    id="job_className"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6">
                  <label for="job_title">職位:</label>
                  <input
                    type="text"
                    value="課長"
                    id="job_title"
                    className="form-control"
                  />
                </div>
              </div>
              <ul id="errorArea"></ul>
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-center">
                    <button
                      type="button"
                      className="p-2 btn btn-success btn-sm rounded-pill"
                      id="staffConf"
                    >
                      確認
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    );
  }
}
export default StaffEdit;
