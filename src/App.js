import React, { Component } from 'react';
import {AppLayout} from './components/AppLayout/AppLayout';
import Home from './containers/Home/Home';
import {Route, Switch} from 'react-router-dom';
import { Watch } from './containers/Watch/Watch';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {youtubeLibraryLoaded} from './store/actions/api';

const API_KEY = 'AIzaSyByEligOipcQ6LZynnp9oasJ7sdZlF95Bs';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Switch>
          <Route exact path ="/" component={Home} />
          <Route path="/Watch" component={Watch} />
        </Switch>
      </AppLayout>
    );
  }
  componentDidMount() {
    this.loadYoutubeApi();
  }
  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = 'https://apis.google.com/js/client.js';

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          this.props.youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({youtubeLibraryLoaded}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
