/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { StatusBar } from 'react-native';

export default class StatusBarMat extends Component {
  constructor(...props) {
    super(props);
  }

  render() {
    const { background } = this.props;
    const { bar } = this.props;

    return (
      <StatusBar
        backgroundColor={background}
        barStyle={bar}
      />
    );
  }
}
