import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter , Link} from 'react-router-dom';

import Document from './containers/document/index';

export default class App extends Component {
    render() {
        return (
          <Document />
        )
    }
}