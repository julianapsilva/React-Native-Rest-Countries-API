//import liraries
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import Filters from '../../components/Filters';
import CountriesList from '../../components/CountriesList';
import api from '../../services/api';

// create a component
class Home extends Component {
  async componentDidMount() {
    api.get('v2/all').then(response => {
      this.setState({
        allCountries: response.data,
        countries: response.data,
      });
    });
  }

  state = {
    allCountries: [],
    countries: [],
  };

  handleFilterSelect = filterValue => {
    if (filterValue === 'undefined') {
      this.setState({countries: this.state.allCountries});
    } else {
      const filterBy = this.state.allCountries.filter(
        country => country.region === filterValue,
      );
      this.setState({countries: filterBy});
    }
  };

  handleFilterSearch = filterValue => {
    const filterBy = this.state.allCountries.filter(({name}) => {
      return (
        name.toString().toLowerCase().indexOf(filterValue.toLowerCase()) >= 0
      );
    });
    this.setState({countries: filterBy});
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Filters
          updateFilterSelect={this.handleFilterSelect}
          updateFilterSearch={this.handleFilterSearch}
        />
        <CountriesList countries={this.state.countries} />
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
