//import liraries
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import CountriesList from '../../components/CountriesList';

// create a component
class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <CountriesList />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

//make this component available to the app
export default Home;
