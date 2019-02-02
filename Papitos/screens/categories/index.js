/* eslint-disable react/destructuring-assignment *//* eslint-disable linebreak-style */
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import {
  Icon,
  List,
  Left,
  Body,
  Right,
  Content,
  ListItem,
  Thumbnail,
  Container
} from 'native-base';
import 'rxjs/add/operator/map';
import Theme from '../../theme/theme';
import Api from '../../services/api/api';
import StatusBarMat from '../../components/status-bar';

const mark = require('../../imgs/logo.png');

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    const api = new Api();
    api.listDrinks()
      .then((res) => {
        this.setState({
          categories: res.data.drinks
        });
      }, (err) => {
        console.log(err);
      });
  }

  render() {
    const { categories } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        {categories
          ? (
            <ScrollView>
              <StatusBarMat background={Theme.BAR} bar="light-content" />
              <Content>
                <List>
                  {categories.map((item, i) => (
                    <ListItem
                      avatar
                      key={i}
                      onPress={() => navigation.navigate('Drinks', { params: item })}
                    >
                      <Left>
                        <Thumbnail style={{ position: 'relative', bottom: 5 }} source={mark} />
                      </Left>
                      <Body style={{ marginTop: 10 }}>
                        <Text>{item.strCategory}</Text>
                        <Text>Papito´s</Text>
                      </Body>
                      <Right>
                        <Icon style={{ position: 'relative', top: 10, fontSize: 24 }} name="ios-arrow-forward" />
                      </Right>
                    </ListItem>
                  ))}
                </List>
              </Content>
            </ScrollView>
          )
          : <View />}
      </Container>
    );
  }
}
