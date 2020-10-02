/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import FormLogin from './components/FormLogin';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <>
        <View style={{flex: 1}}>
          <FormLogin />
        </View>
      </>
    );
  }
}
