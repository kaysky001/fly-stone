import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter((employee) => employee.id !== id),
      });
    });
  }
  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }
  editEmployee(id) {
    this.props.history.push(`/add-employee/${id}`);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      console.log(res.data);
      this.setState({ employees: res.data });
    });
  }

  addEmployee() {
    this.props.history.push('/add-employee/_add');
  }

  logout() {
    this.props.history.push('/logout');
  }

  render() {
    return (
      <div>
        <div className="alert-info row">
          <div className="col-10">
            <h5>職員情報一覧</h5>
          </div>
          <div className="col-2 text-right">
            <button className="btn btn-warning btn-sm rounded-pill" onClick={this.logout.bind(this)}>
              ログアウト
            </button>
          </div>
        </div>
        <div style={{ padding: '5px' }}></div>
        <div className="row">
          <table className="table text-nowrap table-bordered table-hover">
            <thead>
              <tr className="table-secondary text-center">
                <th> id</th>
                <th> 姓</th>
                <th> 名</th>
                <th> メールアドレス</th>
                <th> アクション</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td className="text-center"> {employee.id} </td>
                  <td> {employee.first_name} </td>
                  <td> {employee.last_name}</td>
                  <td> {employee.email_id}</td>
                  <td>
                    <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info btn-sm">
                      修正{' '}
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-danger btn-sm"
                    >
                      削除{' '}
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => this.viewEmployee(employee.id)}
                      className="btn btn-success btn-sm"
                    >
                      詳細{' '}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row">
          <button className="btn btn-primary btn-sm rounded-pill" onClick={this.addEmployee}>
            新規採用
          </button>
        </div>
      </div>
    );
  }
}

export default ListEmployeeComponent;
