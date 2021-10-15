//import liraries
import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import CountryItem from './CountryItem';
import api from '../../services/api';

// create a component
class CountriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('v2/all');
    this.setState({
      countries: response.data,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.countries}
          renderItem={({item}) => <CountryItem data={item} />}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default CountriesList;
