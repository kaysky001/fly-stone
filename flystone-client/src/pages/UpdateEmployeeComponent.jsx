import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      first_name: '',
      last_name: '',
      email_id: '',
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        first_name: employee.first_name,
        last_name: employee.last_name,
        email_id: employee.email_id,
      });
    });
  }

  updateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email_id: this.state.email_id,
    };
    console.log('employee => ' + JSON.stringify(employee));
    console.log('id => ' + JSON.stringify(this.state.id));
    EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
      this.props.history.push('/employees');
    });
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

  render() {
    return (
      <div>
        <br></br>
        <div className="alert-info ">
          <h5>職員基本情報更新</h5>
        </div>
        <div style={{ padding: '5px' }}></div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> 姓（First Name）： </label>
                    <input
                      placeholder="First Name"
                      name="first_name"
                      className="form-control"
                      value={this.state.first_name}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> 名（Last Name）： </label>
                    <input
                      placeholder="Last Name"
                      name="last_name"
                      className="form-control"
                      value={this.state.last_name}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> メールアドレス： </label>
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
                    onClick={this.updateEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: '10px' }}
                  >
                    Cancel
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

export default UpdateEmployeeComponent;
