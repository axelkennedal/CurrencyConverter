import React, { Component } from 'react';

import Navigator from "./app/config/routes";
import { Provider } from "react-redux";

import store from "./app/config/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>  
    );
  }
}