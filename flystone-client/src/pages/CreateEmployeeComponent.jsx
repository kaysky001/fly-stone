import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      first_name: '',
      last_name: '',
      email_id: '',
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === '_add') {
      return;
    } else {
      EmployeeService.getEmployeeById(this.state.id).then((res) => {
        let employee = res.data;
        this.setState({
          first_name: employee.first_name,
          last_name: employee.last_name,
          email_id: employee.email_id,
        });
      });
    }
  }
  saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email_id: this.state.email_id,
    };
    console.log('employee => ' + JSON.stringify(employee));

    // step 5
    if (this.state.id === '_add') {
      EmployeeService.createEmployee(employee).then((res) => {
        this.props.history.push('/employees');
      });
    } else {
      EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
        this.props.history.push('/employees');
      });
    }
  };

  changeFirstNameHandler = (event) => {
    this.setState({ first_name: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ last_name: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email_id: event.target.value });
  };

  cancel() {
    this.props.history.push('/employees');
  }

  getTitle() {
    if (this.state.id === '_add') {
      return <h5>&nbsp;&nbsp;職員基本情報登録</h5>;
    } else {
      return <h5>&nbsp;&nbsp;職員基本情報修正</h5>;
    }
  }
  render() {
    return (
      <div>
        <div className="alert-info row">{this.getTitle()}</div>
        <div style={{ padding: '5px' }}></div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> 姓（First Name）</label>
                    <input
                      placeholder="First Name"
                      name="first_name"
                      className="form-control"
                      value={this.state.first_name}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> 名（Last Name）</label>
                    <input
                      placeholder="Last Name"
                      name="last_name"
                      className="form-control"
                      value={this.state.last_name}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> メールアドレス</label>
                    <input
                      placeholder="Email Address"
                      name="email_id"
                      className="form-control"
                      value={this.state.email_id}
                      onChange={this.changeEmailHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateEmployee}
                  >
                    登録
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: '10px' }}
                  >
                    戻る
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEmployeeComponent;
