import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }

  cancel() {
    this.props.history.push('/employees');
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }

  render() {
    return (
      <div>
        <div className="alert-info ">
          <h5>&nbsp;&nbsp;職員基本情報</h5>
        </div>
        <div style={{ padding: '5px' }}></div>
        <div className="card col-md-6 offset-md-3">
          <div className="card-body">
            <div className="row">
              <label>姓（First Name）：</label>&nbsp;&nbsp;&nbsp;
              <div> {this.state.employee.first_name}</div>
            </div>
            <div className="row">
              <label>名（Last Name）：</label>&nbsp;&nbsp;&nbsp;
              <div> {this.state.employee.last_name}</div>
            </div>
            <div className="row">
              <label>メールアドレス：</label>&nbsp;&nbsp;
              <div> {this.state.employee.email_id}</div>
            </div>
          </div>
        </div>
        <div>
          <br></br>
          <button
            className="btn btn-danger"
            onClick={this.cancel.bind(this)}
            style={{ marginLeft: '10px' }}
          >
            戻る
          </button>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeComponent;
