//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SvgUri} from 'react-native-svg';

// create a component
class CountryItemClass extends Component {
  render() {
    const {name, population, capital, region, flag} = this.props.data;
    const {navigation} = this.props;
    const knowMore = () => {
      navigation.navigate('Country', {data: this.props.data});
    };
    const format = pop => {
      return String(pop).replace(/(.)(?=(\d{3})+$)/g, '$1,');
    };

    return (
      <TouchableOpacity style={styles.CountryItem} onPress={knowMore}>
        <SvgUri width={298} height={250} uri={flag} style={styles.flag} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.countryInfo}>
            <Text style={{fontWeight: 'bold'}}>Population: </Text>
            <Text>{format(population)}</Text>
          </Text>
          <Text style={styles.countryInfo}>
            <Text style={{fontWeight: 'bold'}}>Region: </Text>
            <Text>{region}</Text>
          </Text>
          <Text style={styles.countryInfo}>
            <Text style={{fontWeight: 'bold'}}>Capital: </Text>
            <Text>{capital}</Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default function CountryItem({data}) {
  const navigation = useNavigation();
  return <CountryItemClass navigation={navigation} data={data} />;
}

// define your styles
const styles = StyleSheet.create({
  CountryItem: {
    marginBottom: 60,
    width: 300,
    height: 420,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.9,
    shadowRadius: 1,
    elevation: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
    marginTop: 20,
  },
  info: {
    paddingLeft: 30,
  },
  countryInfo: {
    marginTop: 10,
    fontSize: 18,
  },
  flag: {
    marginTop: -30,
  },
});
