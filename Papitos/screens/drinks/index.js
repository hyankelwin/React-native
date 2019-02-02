/* eslint-disable linebreak-style */
import {
  View,
  Text,
  ScrollView
} from 'react-native';
import React, { Component } from 'react';
import {
  Icon,
  List,
  Left,
  Body,
  Right,
  Content,
  ListItem,
  Container,
  Thumbnail
} from 'native-base';
import 'rxjs/add/operator/map';
import Theme from '../../theme/theme';
import Api from '../../services/api/api';
import StatusBarMat from '../../components/status-bar';

export default class Drinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    const { navigation } = this.props;
    const category = navigation.state.params.params.strCategory;
    const api = new Api();
    api.drinks(category)
      .then((res) => {
        this.setState({
          drinks: res.data.drinks
        });
      }, (err) => {
        console.log(err);
      });
  }

  render() {
    const { drinks } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        <StatusBarMat background={Theme.BAR} bar="light-content" />
        {drinks
          ? (
            <ScrollView>
              <Content>
                <List>
                  {drinks.map((item, i) => (
                    <ListItem
                      avatar
                      key={i}
                      onPress={() => navigation.navigate('DetailDrink', { params: item })}
                    >
                      <Left>
                        <Thumbnail style={{ position: 'relative', bottom: 5 }} source={{ uri: item.strDrinkThumb }} />
                      </Left>
                      <Body style={{ marginTop: 10 }}>
                        <Text>{item.strDrink}</Text>
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
