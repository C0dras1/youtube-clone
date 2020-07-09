import React, { Component } from 'react';
import {AppLayout} from './components/AppLayout/AppLayout';
import {Home} from './containers/Home/Home';
import './containers/Home/Home.scss';
import {Route, Switch} from 'react-router-dom';
import { Watch } from './containers/Watch/Watch';


class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route path="/Watch" component={Watch} />
        </Switch>
      </AppLayout>
    )
  }
}

export default App;
