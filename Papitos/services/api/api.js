/* eslint-disable class-methods-use-this *//* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
import { Component } from 'react';
import axios from 'axios';

export default class Api extends Component {
  listDrinks() {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
      })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  drinks(category) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  detailDrink(idDrink) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
