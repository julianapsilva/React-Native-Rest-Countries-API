import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Where in the world?</Text>
        <TouchableOpacity>
          <Text>Dark Mode</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Header;
