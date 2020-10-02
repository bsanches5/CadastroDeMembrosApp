/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';

import FormLogin from './components/FormLogin';

const App: () => React$Node = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <FormLogin />
      </View>
    </>
  );
};

export default App;
