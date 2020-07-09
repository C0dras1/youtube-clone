import React, { Component } from 'react';
import {AppLayout} from './components/AppLayout/AppLayout';
import {Home} from './containers/Home/Home';
import './containers/Home/Home.scss';


class App extends Component {
  render() {
    return (
      <AppLayout>
        <Home />
      </AppLayout>
    )
  }
}

export default App;
