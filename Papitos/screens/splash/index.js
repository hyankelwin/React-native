/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';
import Theme from '../../theme/theme';
import StatusBarMat from '../../components/status-bar';

const mark = require('../../imgs/logo.png');

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'O Papo do Universitário!',
      message: 'Com uma nova opção de entreterimento em Franca!',
    };
  }

  render() {
    const { title } = this.state;
    const { message } = this.state;
    return (
      <View style={styles.container}>
        <StatusBarMat background={Theme.BAR} bar="light-content" />
        <Image
          style={styles.img}
          source={mark}
        />
        <View style={styles.containerText}>
          <Text style={styles.textDecorate}>
            {title}
          </Text>
          <Text style={styles.text}>
            {message}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.PRIMARY_COLOR,
  },
  text: {
    padding: 30,
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
  containerText: {
    bottom: 0,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDecorate: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: '700',
    textAlign: 'center',
  }
});
