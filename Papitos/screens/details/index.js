/* eslint-disable class-methods-use-this *//* eslint-disable linebreak-style */
// eslint-disable-next-line class-methods-use-this
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import React, { Component } from 'react';
import {
  Icon,
  List,
  Body,
  Content,
  ListItem,
  Container,
  Accordion
} from 'native-base';
import 'rxjs/add/operator/map';
import Theme from '../../theme/theme';
import Api from '../../services/api/api';
import StatusBarMat from '../../components/status-bar';

export default class DetailDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    const { navigation } = this.props;
    const item = navigation.state.params.params.idDrink;
    const api = new Api();
    api.detailDrink(item)
      .then((res) => {
        this.setState({
          detail: res.data.drinks[0],
          dataArray: [
            { title: 'Instructions', content: res.data.drinks[0].strInstructions },
          ]
        });
      }, (err) => {
        console.log(err);
      });
  }

  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF'
      }}
      >
        <Text style={{ fontWeight: '600' }}>
          {' '}
          {item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="ios-add-circle" />}
      </View>
    );
  }

  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: '#e3f1f1',
          padding: 10,
          fontStyle: 'italic',
        }}
      >
        {item.content}
      </Text>
    );
  }

  render() {
    const { detail } = this.state;
    const { dataArray } = this.state;
    return (
      <Container style={styles.container}>
        {detail
          ? (
            <Content style={{ flex: 1 }}>
              <StatusBarMat background={Theme.BAR} bar="light-content" />
              <View>
                <Image
                  style={styles.img}
                  source={{ uri: detail.strDrinkThumb }}
                />
              </View>
              <List>
                <ListItem>
                  <Body style={styles.body}>
                    <Text style={styles.title}>Bebida: </Text>
                    <Text style={styles.sub_title} note numberOfLines={1}>{detail.strDrink}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <Body style={styles.body}>
                    <Text style={styles.title}>Categoria: </Text>
                    <Text style={styles.sub_title}>{detail.strCategory}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <Body style={styles.body}>
                    <Text style={styles.title}>Tipo: </Text>
                    <Text style={styles.sub_title}>{detail.strAlcoholic}</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <Body style={styles.body}>
                    <Text style={styles.title}>Copo: </Text>
                    <Text style={styles.sub_title} note numberOfLines={1}>{detail.strGlass}</Text>
                  </Body>
                </ListItem>
              </List>
              {dataArray
                ? (
                  <Content padder>
                    <Accordion
                      dataArray={dataArray}
                      animation
                      expanded
                      renderHeader={this.renderHeader}
                      renderContent={this.renderContent}
                    />
                  </Content>
                )
                : <View />}
            </Content>
          )
          : <View />}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  img: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 20,
    opacity: 0.5
  },
  sub_title: {
    fontSize: 20
  },
  body: {
    flexDirection: 'row'
  },
});
