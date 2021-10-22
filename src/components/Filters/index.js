//import liraries
import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';

// create a component
class Filters extends Component {
  state = {
    region: '',
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={value => this.props.updateFilterSearch(value)}
          placeholder="Search for a country..."
        />
        <Icon name="search" size={20} style={styles.icon} />

        <Picker
          selectedValue={this.state.region}
          onValueChange={value => {
            this.setState({region: value});
            this.props.updateFilterSelect(value);
          }}
          mode="dropdown" // Android only
          style={styles.picker}>
          <Picker.Item label="Filter by Region" value="Unknown" />
          <Picker.Item label="Africa" value="Africa" />
          <Picker.Item label="Americas" value="Americas" />
          <Picker.Item label="Asia" value="Asia" />
          <Picker.Item label="Europe" value="Europe" />
          <Picker.Item label="Oceania" value="Oceania" />
        </Picker>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 360,
    marginLeft: 20,
  },
  picker: {
    marginVertical: 30,
    width: 200,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
  input: {
    backgroundColor: '#fff',
    width: 360,
    position: 'relative',
    paddingLeft: 60,
    marginTop: 60,
    borderRadius: 8,
  },
  icon: {
    position: 'absolute',
    top: 37,
    left: 17,
  },
});

//make this component available to the app
export default Filters;
