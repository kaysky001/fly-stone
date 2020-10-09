import React, { Component } from 'react';

class SystemError extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onClose() {
    window.open('about:blank', '_self').close();
  }

  render() {
    return (
      <div>
        <div className="alert-info ">
          <h5>&nbsp;&nbsp;システムエラー</h5>
        </div>
        <div style={{ padding: '5px' }}></div>
        <div className="alert alert-success" role="alert">
          <strong>システムエラーです。</strong>
          <br></br>
          この利用サービスの場合は、<a href="/">&nbsp;こちら&nbsp;</a>をクリックしてください。
        </div>
        <button className="btn btn-danger btn-block" onClick={this.onClose.bind(this)}>
          ブラウザを閉じる
        </button>
      </div>
    );
  }
}

export default SystemError;
