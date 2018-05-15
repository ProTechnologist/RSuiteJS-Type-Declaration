import * as React from 'react';
import { Button } from 'rsuite';
import { Alert } from 'rsuite-notification';
import './App.css';
import logo from './logo.svg';

import 'rsuite/dist/styles/rsuite.min.css';
// import {Button, Notification} from 'rsuite';
// import {Alert, Notify} from 'rsuite-notification';


class App extends React.Component {
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
        <Button appearance="primary" onClick={Alert.info('this is info message')}> Hello world </Button>
      </div>
    );
  }
}

export default App;
