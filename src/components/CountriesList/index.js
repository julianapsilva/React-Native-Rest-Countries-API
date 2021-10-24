//import liraries
import React, {Component} from 'react';
import {View, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import CountryItem from './CountryItem';

// create a component
class CountriesList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          initialNumToRender={3}
          data={this.props.countries}
          keyExtractor={item => item.name}
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
