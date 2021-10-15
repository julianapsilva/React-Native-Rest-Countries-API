import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Where in the world?</Text>
        <TouchableOpacity>
          <Text>Dark Mode</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    elevation: 5,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default Header;
