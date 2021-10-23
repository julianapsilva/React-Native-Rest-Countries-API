//import liraries
import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import api from '../../services/api';

// create a component
class Borders extends Component {
  render() {
    const {navigation, text, borders} = this.props;
    const changeRoute = async code => {
      const response = await api.get(`v2/alpha/${code}`);
      navigation.navigate('Country', {data: response.data});
    };

    return (
      <View>
        <Text style={[styles.bordercText, {color: text}]}>
          Border Countries:
        </Text>
        <View style={styles.border}>
          {borders.map(border => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => changeRoute(border)}
                  style={styles.borderButton}>
                  <Text style={[styles.borderText, {color: text}]}>
                    {border}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  bordercText: {
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
  },
  border: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  borderButton: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginRight: 10,
    marginBottom: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderText: {
    textAlign: 'center',
  },
});

//make this component available to the app
export default Borders;
