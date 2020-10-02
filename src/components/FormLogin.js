/* eslint-disable prettier/prettier */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import logo from '../imgs/logo.png';

export default (props) => (
  <View style={styles.container}>
    <View>
      <Image source={logo} style={styles.image} />
    </View>
    <View>
      <TextInput style={styles.input} placeholder="Login" />
      <TextInput style={styles.input} placeholder="Senha" />
      <Text style={styles.text}>Ainda não tem cadastro?</Text>
      <TouchableOpacity>
        <Text style={styles.cadastre}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
  },
  input: {
    marginTop: 40,
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: 300,
  },
  text: {
    marginTop: 20,
    color: '#FFF',
    alignSelf: 'center',
    fontSize: 15,
  },
  cadastre: {
    color: '#006400',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 18,
  },
});
