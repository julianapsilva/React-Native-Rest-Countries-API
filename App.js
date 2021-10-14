import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Header from './src/components/Header';
import CountriesList from './src/components/CountriesList';
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <CountriesList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
