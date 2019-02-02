import React from 'react';
import { SplashRoute, Routes } from './services/routes/router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      splash: true,
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ splash: false });
    }, 2000);
  }

  render() {
    return this.state.splash ? <SplashRoute /> : <Routes />
  }
}
