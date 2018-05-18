import * as React from 'react';
import { Alert, Button, Message } from 'rsuite';
// import {Modal} from 'rsuite';
import './App.css';
import logo from './logo.svg';

import 'rsuite/dist/styles/rsuite.min.css';

const msgStyle = {
  margin: '3%'
};
class App extends React.Component {
  public handleClick = () => {
    Alert.info('this is test message');
  };

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h3>Button and Alert plugin: </h3>
        <Button appearance="primary" onClick={this.handleClick}> Hello world </Button>
        <h3>Message plugin: </h3>
        <div style={msgStyle}>
          <Message type="success" title="test success" description="success message here" />        
        </div>
      </div>
    );
  }
}


export default App;
