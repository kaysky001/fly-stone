import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ResumeEditConf extends Component {
  //送信された情報をstateに格納
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.location.state.startDate,
      endDate: this.props.location.state.endDate,
      workPlace: this.props.location.state.workPlace,
      customer: this.props.location.state.customer,
      position: this.props.location.state.position,
      project: this.props.location.state.project,
      nearStation: this.props.location.state.nearStation,
      remarks: this.props.location.state.remarks,
      createDate: this.props.location.state.createDate,
    };
  }
  // //セッションタイムアウト設定
  // timer = null;
  // componentDidMount() {
  //   timer = setTimeout(() => this.props.history.push('/error/system'), 60000);
  // }
  // componentWillUnmount() {
  //   clearTimeout(timer);
  // }

  backClick = () => {
    this.props.history.goBack();
  };
  registClick = () => {
    const data = {
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      workPlace: this.state.workPlace,
      customer: this.state.customer,
      position: this.state.position,
      project: this.state.project,
      nearStation: this.state.nearStation,
      remarks: this.state.remarks,
      createDate: this.state.createDate,
    };
    axios
      .put('http://localhost:8888/api/v1/resume/111111111111', data)
      .then((response) => {
        this.props.history.push('/resume/write/comp');
      })
      .catch((error) => {
        this.props.history.push('/error/system');
      });
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
              <Link to="/logout">
                <button type="button" className="btn btn-warning btn-sm rounded-pill" id="logout">
                  ログアウト
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <label htmlFor="retire_date">開始年月日:{this.state.startDate}</label>
              </div>
              <div className="col-lg-6">
                <label htmlFor="retire_reason">終了年月:{this.state.endDate}</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="retire_date">勤務先:{this.state.workPlace}</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="retire_date">プロジェクト名:{this.state.project}</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="retire_date">役割:{this.state.position}</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="retire_date">取引先:{this.state.customer}</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="retire_date">最寄駅:{this.state.nearStation}</label>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="retire_date">備考:{this.state.remarks}</label>
              </div>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="mr-3 btn btn-success btn-sm rounded-pill"
                id="resumeEditDone"
                onClick={this.registClick}
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
export default withRouter(ResumeEditConf);
