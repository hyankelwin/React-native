/* eslint-disable linebreak-style */
import { Container } from 'native-base';
import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Theme from '../../theme/theme';
import StatusBarMat from '../../components/status-bar';

const pub = require('../../imgs/bar.jpg');

export default class About extends PureComponent {
  constructor(...props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const title = ' O Papo do Universitário Com uma nova opção de entreterimento em Franca, '
      + 'o Papitos é um local construido pensando em reunir tudo em um só lugar.'
      + 'Qualidade nas bebidas,nas porções e no atendimento. Ambiente agradável para'
      + "você reunir a família os amigos.O Papito's Bar é um tradicional ponto de encontro"
      + 'dos universitários, pelo o fato da gastronomia e uma otima qualidade em nossos pratos.'
      + 'Afinal, Bons amigos merecem esse cuidado';
    return (
      <Container style={styles.container}>
        <Image
          style={styles.img}
          source={pub}
        />
        <StatusBarMat background="#111111" bar="light-content" />
        <View>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()
            }
          >
            <Text style={styles.buttonText}>Obrigado!</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contact}>
          <View style={{ marginRight: 10 }}>
            <Text style={styles.text_primary}>Contato</Text>
            <Text style={styles.text_secontary}>(xx) xxxx-xxxx</Text>
            <Text style={styles.text_secontary}>papitsobar@hotmail.com</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text_primary}>Endereço</Text>
            <Text style={styles.text_secontary}>Avenida Certrem, 5255</Text>
            <Text style={styles.text_secontary}>Franca, SP</Text>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  img: {
    height: 150,
    width: '100%',
  },
  buttonContainer: {
    width: '50%'
  },
  button: {
    borderWidth: 2,
    borderRadius: 100,
    paddingVertical: 15,
    borderColor: Theme.TERNARY_COLOR,
  },
  buttonText: {
    textAlign: 'center',
    color: Theme.TERNARY_COLOR,
  },
  title: {
    padding: 20,
    fontSize: 16,
    color: '#FFF',
    fontWeight: '100',
    textAlign: 'justify'
  },
  contact: {
    padding: 20,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  text_primary: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: '700'
  },
  text_secontary: {
    color: '#FFF'
  }
});
