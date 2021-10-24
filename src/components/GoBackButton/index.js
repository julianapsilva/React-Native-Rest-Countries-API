//import liraries
import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// create a component
class GoBackButton extends Component {
  render() {
    const {navigation} = this.props;
    const {elements, text} = this.props.colors;
    return (
      <TouchableOpacity
        style={[styles.goBack, {backgroundColor: elements}]}
        onPress={() => navigation.goBack(null)}>
        <Icon
          name="arrow-left"
          size={20}
          style={[styles.icon, {color: text}]}
        />
        <Text style={{color: text}}>Back</Text>
      </TouchableOpacity>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  goBack: {
    flexDirection: 'row',
    width: 110,
    height: 37,
    marginLeft: 30,
    marginTop: 40,
    alignItems: 'center',
    paddingLeft: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 1,
    borderColor: '#000',
  },
  icon: {
    marginRight: 5,
  },
});

//make this component available to the app
export default GoBackButton;
