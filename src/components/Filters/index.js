//import liraries
import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';
import {useTheme} from '@react-navigation/native';

// create a component
class FiltersClass extends Component {
  state = {
    region: '',
  };
  render() {
    const {elements, text, input} = this.props.colors;
    return (
      <View style={styles.container}>
        <TextInput
          style={[
            styles.input,
            styles.boxShadow,
            {backgroundColor: elements, color: text},
          ]}
          onChangeText={value => this.props.updateFilterSearch(value)}
          placeholder="Search for a country..."
          placeholderTextColor={input}
        />
        <Icon name="search" size={17} style={[styles.icon, {color: input}]} />

        <Picker
          selectedValue={this.state.region}
          onValueChange={value => {
            this.setState({region: value});
            this.props.updateFilterSelect(value);
          }}
          mode="dropdown" // Android only
          style={[
            styles.picker,
            styles.boxShadow,
            {backgroundColor: elements, color: text},
          ]}>
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

function Filters(props) {
  const {colors} = useTheme();
  return <FiltersClass {...props} colors={colors} />;
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
    alignSelf: 'flex-start',
  },
  input: {
    width: 360,
    position: 'relative',
    paddingLeft: 60,
    marginTop: 60,
    borderRadius: 8,
  },
  icon: {
    position: 'absolute',
    top: 39,
    left: 22,
    elevation: 2,
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 1,
    borderColor: '#000',
  },
});

//make this component available to the app
export default Filters;
