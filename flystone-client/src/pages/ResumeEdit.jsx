import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResumeEdit extends Component {
  //入力情報を保持するstate
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.location.state.resume.start_date,
      endDate: this.props.location.state.resume.end_date,
      workPlace: this.props.location.state.resume.work_place,
      customer: this.props.location.state.resume.customer,
      position: this.props.location.state.resume.job_role,
      project: this.props.location.state.resume.project,
      nearStation: this.props.location.state.resume.near_station,
      remarks: this.props.location.state.resume.remarks,
      createDate: this.props.location.state.resume.create_date,
    };
    this.startChange = this.startChange.bind(this);
    this.endChange = this.endChange.bind(this);
    this.placeChange = this.placeChange.bind(this);
    this.customerChange = this.customerChange.bind(this);
    this.positionChange = this.positionChange.bind(this);
    this.projectChange = this.projectChange.bind(this);
    this.nearChange = this.nearChange.bind(this);
    this.remarkChange = this.remarkChange.bind(this);
  }
  //各情報をstateに格納するメソッド
  startChange(e) {
    this.setState({
      startDate: e.target.value,
    });
  }
  endChange(e) {
    this.setState({
      endDate: e.target.value,
    });
  }
  placeChange(e) {
    this.setState({
      workPlace: e.target.value,
    });
  }
  positionChange(e) {
    this.setState({
      position: e.target.value,
    });
  }
  customerChange(e) {
    this.setState({
      customer: e.target.value,
    });
  }
  projectChange(e) {
    this.setState({
      project: e.target.value,
    });
  }
  nearChange(e) {
    this.setState({
      nearStation: e.target.value,
    });
  }
  remarkChange(e) {
    this.setState({
      remarks: e.target.value,
    });
  }
  //確認画面にstateを送信する。
  handleClick = () => {
    let startDate = this.state.startDate;
    let endDate = this.state.endDate;
    const reg = new RegExp('^[0-9]{4}/(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])$');
    if (startDate === null || startDate === '') {
      this.setState({
        error: '開始年月日は入力必須',
      });
    } else if (!reg.test(startDate)) {
      this.setState({
        error: '開始年月日と終了年月日はyyyy/MM/ddで入力してください。',
      });
    } else if (!(endDate === null || endDate === '')) {
      if (!(reg.test(startDate) && reg.test(endDate))) {
        this.setState({
          error: '開始年月日と終了年月日はyyyy/MM/ddで入力してください。',
        });
      } else {
        this.props.history.push({
          pathname: '/resume/edit/conf',
          state: {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            workPlace: this.state.workPlace,
            customer: this.state.customer,
            position: this.state.position,
            project: this.state.project,
            nearStation: this.state.nearStation,
            remarks: this.state.remarks,
            createDate: this.state.createDate,
          },
        });
      }
    } else if (endDate === null || endDate === '') {
      this.props.history.push({
        pathname: '/resume/edit/conf',
        state: {
          startDate: this.state.startDate,
          endDate: '2099/12/31',
          workPlace: this.state.workPlace,
          customer: this.state.customer,
          position: this.state.position,
          project: this.state.project,
          nearStation: this.state.nearStation,
          remarks: this.state.remarks,
          createDate: this.state.createDate,
        },
      });
    } else {
      this.props.history.push({
        pathname: '/resume/edit/conf',
        state: {
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          workPlace: this.state.workPlace,
          customer: this.state.customer,
          position: this.state.position,
          project: this.state.project,
          nearStation: this.state.nearStation,
          remarks: this.state.remarks,
          createDate: this.state.createDate,
        },
      });
    }
  };
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
              <Link to="/logout">
                <button type="button" className="btn btn-warning btn-sm rounded-pill" id="logout">
                  ログアウト
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <form>
              <div className="form-group row">
                <div className="col-lg-6">
                  <label htmlFor="startDate">開始年月:</label>
                  <input
                    type="text"
                    id="startDate"
                    className="form-control"
                    value={this.state.startDate}
                    onChange={this.startChange}
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="endDate">終了年月:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="endDate"
                    value={this.state.endDate}
                    onChange={this.endChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-6">
                  <label htmlFor="workPlace">勤務先:</label>
                  <input
                    type="text"
                    id="workPlace"
                    className="form-control"
                    value={this.state.workPlace}
                    onChange={this.placeChange}
                  />
                </div>
                <div className="col-lg-6">
                  <label htmlFor="customer">取引先:</label>
                  <input
                    type="text"
                    id="customer"
                    className="form-control"
                    value={this.state.customer}
                    onChange={this.customerChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-4">
                  <label htmlFor="position">役割:</label>
                  <input
                    type="text"
                    id="position"
                    className="form-control"
                    value={this.state.position}
                    onChange={this.positionChange}
                  />
                </div>
                <div className="col-lg-8">
                  <label htmlFor="project">プロジェクト名:</label>
                  <input
                    type="text"
                    id="project"
                    className="form-control"
                    value={this.state.project}
                    onChange={this.projectChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-lg-12">
                  <label htmlFor="nearestStation">最寄駅:</label>
                  <input
                    type="text"
                    id="nearestStation"
                    className="form-control"
                    value={this.state.nearStation}
                    onChange={this.nearChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-lg-12">
                  <label htmlFor="remarks">備考:</label>
                  <input
                    type="text"
                    id="remarks"
                    className="form-control"
                    value={this.state.remarks}
                    onChange={this.remarkChange}
                  />
                </div>
              </div>
              <p style={{ color: 'red' }}>{this.state.error}</p>
              <div className="text-center">
                <button
                  type="button"
                  className="mr-3 btn btn-success btn-sm rounded-pill"
                  id="resumeEditConf"
                  onClick={this.handleClick}
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
