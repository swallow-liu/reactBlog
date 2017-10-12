import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import './App.css';

class App extends Component {
    click(){
        Toast.info('success',1000)
    }
  render() {
    return (
      <div className="App">
          <div onClick={this.click.bind(this)}>test</div>
      </div>
    );
  }
}

export default App;
