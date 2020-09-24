import React, { Component } from 'react';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="alert-primary" style={{ padding: '5px' }}>
          <h3 className="text-center">羽石社員管理システム</h3>
        </div>
        <div style={{ padding: '8px' }}></div>
      </div>
    );
  }
}

export default HeaderComponent;
