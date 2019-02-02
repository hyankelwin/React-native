/* eslint-disable import/no-extraneous-dependencies *//* eslint-disable linebreak-style */
import { createStackNavigator } from 'react-navigation';
import Splash from '../../screens/splash/index';
import ModeAccount from '../../screens/mode-account/index';
import Categories from '../../screens/categories/index';
import Drinks from '../../screens/drinks/index';
import DetailDrink from '../../screens/details/index';
import About from '../../screens/about/index';
import Theme from '../../theme/theme';

export const SplashRoute = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null,
    }
  },
});
export const Routes = createStackNavigator({
  ModeAccount: {
    screen: ModeAccount,
    navigationOptions: {
      header: null
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      header: null
    }
  },
  Categories: {
    screen: Categories,
    navigationOptions: {
      title: 'Categorias',
      headerStyle: {
        backgroundColor: Theme.PRIMARY_COLOR,
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white'
    }
  },
  Drinks: {
    screen: Drinks,
    navigationOptions: {
      title: 'Drinks',
      headerStyle: {
        backgroundColor: Theme.PRIMARY_COLOR,
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white'
    }
  },
  DetailDrink: {
    screen: DetailDrink,
    navigationOptions: {
      title: 'Detalhes',
      headerStyle: {
        backgroundColor: Theme.PRIMARY_COLOR,
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white'
    }
  },
});
