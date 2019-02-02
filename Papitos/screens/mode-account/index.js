/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Theme from '../../theme/theme';

const mark = require('../../imgs/logo.png');

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: ''
    };
  }

  componentWillMount() {
    const message = {
      data: {
        title: 'O ponto de encontro dos universitários',
        message: 'Que tal reunir a família os amigos em um só lugar!'
      }
    };
    this.setState({ info: message });
  }

  render() {
    const { navigation } = this.props;
    const { info } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#FFF"
          barStyle="dark-content"
        />
        <View style={styles.container_img}>
          <Image
            style={styles.img}
            source={mark}
          />
        </View>
        <View>
          <View style={styles.containerText}>
            <Text style={styles.textHeader}>
              {info.data.title}
            </Text>
            <Text style={styles.text}>
              {info.data.message}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Categories')
              }
            >
              <Text style={styles.buttonText}>Especialidades</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonIcon}
              onPress={() => navigation.navigate('About')
              }
            >
              <Text style={{ color: '#154631' }}>Sobre o Papitos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
  },
  containerText: {
    flex: 1,
    padding: 10,
    marginBottom: 80,
  },
  textHeader: {
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
  },
  buttonContainer: {
    padding: 20,
  },
  button: {
    marginTop: 20,
    borderRadius: 50,
    paddingVertical: 18,
    backgroundColor: Theme.TERNARY_COLOR,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  buttonIcon: {
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 50,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderColor: Theme.TERNARY_COLOR,
  },
  img: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  container_img: {
    alignItems: 'center'
  }
});
