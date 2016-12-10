import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
const styles = StyleSheet.create({
  rowItem: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    margin: 5,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
module.exports = styles;