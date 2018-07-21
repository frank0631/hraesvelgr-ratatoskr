import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import styles from './App.style.js';

class App extends React.Component {
  render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);