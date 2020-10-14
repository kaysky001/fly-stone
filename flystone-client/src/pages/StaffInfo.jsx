import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ModalWindow from '../components/ModalWindow';
//時刻取得のため
var DateFormat = require('dateformat');

class StaffInfo extends Component {
  //stateの初期設定
  constructor(props) {
    super(props);
    this.state = {
      staff: [],
      resumes: [],
    };
  }

  //データベースから情報を取得する
  componentDidMount() {
    // axios.get('http://localhost:8888/api/v1/staff').then((res) => {
    //   this.setState({ staff: res.data });
    // });
    axios.get('http://localhost:8888/api/v1/resume').then((res) => {
      this.setState({ resumes: res.data });
    });
  }
  //前の画面に戻る
  backClick = () => {
    this.props.history.goBack();
  };
  //確認画面にstateを送信する。
  handleClick = (resume) => {
    this.createDay(resume, resume.create_date);
    this.props.history.push({
      pathname: '/resume/edit',
      state: {
        resume: resume,
      },
    });
  };
  pdfClick = () => {
    axios
      .get('http://localhost:8888/api/v1/pdf')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  startDay = (resume, day) => {
    resume.start_date = DateFormat(day, 'yyyy/mm/dd');
  };
  endDay = (resume, day) => {
    resume.end_date = DateFormat(day, 'yyyy/mm/dd');
  };
  createDay = (resume, day) => {
    resume.create_date = DateFormat(day, 'yyyy/mm/dd HH:MM:ss');
  };
  const;
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <p> 職員基本情報 </p>
          </div>
          <div className="col-lg-7">
            <div className="text-center">
              <button type="button" className="mr-3 btn btn-warning btn-sm rounded-pill" onClick={this.backClick}>
                戻る
              </button>
              <button type="button" className="mr-3 btn btn-danger btn-sm rounded-pill">
                削除
              </button>
              <ModalWindow></ModalWindow>
              <button
                type="submit"
                className="mr-3 btn btn-sm btn-primary rounded-pill"
                onClick={this.pdfClick}
                id="pdfOutput"
              >
                出力
              </button>
              <Link to="/staff/edit">
                <button type="button" className="mr-3 btn btn-success btn-sm rounded-pill" id="staffEdit">
                  修正
                </button>
              </Link>
              <button type="button" className="btn btn-warning btn-sm rounded-pill " id="logout">
                ログアウト
              </button>
            </div>
          </div>
        </div>
        <form>
          <table className="table table-bordered table-sm">
            <thead>
              <tr className="text-center">
                <th className="bg-info"> 職員番号 </th>
                <th className="bg-info"> 名前 </th>
                <th className="bg-info"> 性別 </th>
                <th className="bg-info"> 出生年月日 </th>
                <th className="bg-info"> 住所 </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td> {this.state.staff.staffNumber} </td>
                <td> {this.state.staff.staffName} </td>
                {(() => {
                  if (this.state.staff.sex === 1) {
                    return <td> 男 </td>;
                  } else {
                    return <td> 女 </td>;
                  }
                })()}
                <td> {this.state.staff.birthday} </td>
                <td>
                  〒{this.state.staff.adressNumber} {this.state.staff.adress}
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <br />
        <form>
          <h5 className="lead"> 採用退職情報 </h5>
          <table className="table table-bordered table-sm">
            <tbody>
              <tr>
                <td style={{ width: '15%' }} className="bg-info text-light">
                  採用年月日
                </td>
                <td style={{ width: '85%' }}> {this.state.staff.hireDate} </td>
              </tr>
              <tr>
                <td style={{ width: '15%' }} className="bg-info text-light">
                  採用事由
                </td>
                <td style={{ width: '85%' }}>{this.state.staff.hireReason} </td>
              </tr>
              <tr>
                <td style={{ width: '15%' }} className="bg-info text-light">
                  退職年月日
                </td>
                <td style={{ width: '85%' }}>{this.state.staff.retireDate} </td>
              </tr>
              <tr>
                <td style={{ width: '15%' }} className="bg-info text-light">
                  退職事由
                </td>
                <td style={{ width: '85%' }}>{this.state.staff.retireReason}</td>
              </tr>
            </tbody>
          </table>
        </form>
        <br />
        <form>
          <h5 className="lead"> 役職情報 </h5>
          <table className="table table-bordered table-sm">
            <tbody>
              <tr>
                <td style={{ width: '15%' }} className="bg-info text-light">
                  本務異動日
                </td>
                <td style={{ width: '85%' }}>{this.state.staff.birthday}</td>
              </tr>
              <tr>
                <td style={{ width: '15%' }} className="bg-info text-light">
                  異動事由
                </td>
                <td style={{ width: '85%' }}>{this.state.staff.birthday}</td>
              </tr>
              <tr>
                <td style={{ width: '15%' }} className="bg-info text-light">
                  職級
                </td>
                <td style={{ width: '88%' }}>{this.state.staff.birthday} </td>
              </tr>
              <tr>
                <td style={{ width: '15%' }} className="bg-info text-light">
                  職位
                </td>
                <td style={{ width: '85%' }}>{this.state.staff.birthday}</td>
              </tr>
            </tbody>
          </table>
        </form>
        <form>
          <div className="row">
            <div className="col-lg-8">
              <h5 className="lead"> 職歴情報 </h5>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <Link to="/resume/write">
                  <button type="button" className="mr-3 btn btn-success btn-sm rounded-pill" id="resumeWrite">
                    登録
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <table className="table text-nowrap table-bordered table-hover">
            <thead>
              <tr className="table-secondary text-center">
                <th> 開始年月 </th>
                <th> 終了年月 </th>
                <th> 勤務先 </th>
                <th> プロジェクト名 </th>
                <th> 役割 </th>
                <th> 取引先 </th>
                <th> 最寄駅 </th>
                <th> 備考 </th>
                <th> 修正 </th>
                <th> 削除 </th>
              </tr>
            </thead>
            <tbody>
              {/* 職歴情報の一覧表示 */}

              {this.state.resumes.map((resume, i) => (
                <tr key={i}>
                  <td>
                    {this.startDay(resume, resume.start_date)}
                    {resume.start_date}
                  </td>
                  <td>
                    {this.endDay(resume, resume.end_date)}
                    {resume.end_date}
                  </td>
                  <td> {resume.work_place}</td>
                  <td> {resume.project}</td>
                  <td> {resume.job_role}</td>
                  <td> {resume.customer}</td>
                  <td> {resume.near_station}</td>
                  <td> {resume.remarks}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success btn-sm rounded-pill"
                      id="resumeEdit"
                      onClick={() => this.handleClick(resume)}
                    >
                      修正
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-danger btn-sm rounded-pill" id="resumeEdit">
                      削除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
export default StaffInfo;
