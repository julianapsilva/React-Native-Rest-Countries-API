//import liraries
import React, {Component} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import CountryItem from './CountryItem';

// create a component
class CountriesList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          initialNumToRender={5}
          data={this.props.countries}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CountryItem data={item} />}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});

//make this component available to the app
export default CountriesList;
