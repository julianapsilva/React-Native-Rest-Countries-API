//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class CountryDescription extends Component {
  render() {
    const {text, data} = this.props;
    const format = pop => {
      return String(pop).replace(/(.)(?=(\d{3})+$)/g, '$1,');
    };

    return (
      <View>
        <Text style={[styles.name, {color: text}]}>{data.name}</Text>
        <Text style={{color: text}}>
          <Text style={styles.bold}>Native Name: </Text>
          <Text>{data.nativeName}</Text>
        </Text>
        <Text style={{color: text}}>
          <Text style={styles.bold}>Population: </Text>
          <Text>{format(data.population)}</Text>
        </Text>
        <Text style={{color: text}}>
          <Text style={styles.bold}>Region: </Text>
          <Text>{data.region}</Text>
        </Text>
        <Text style={{color: text}}>
          <Text style={styles.bold}>Subregion: </Text>
          <Text>{data.subregion}</Text>
        </Text>
        <Text style={{color: text}}>
          <Text style={styles.bold}>Capital: </Text>
          <Text>{data.capital}</Text>
        </Text>
        <Text style={{marginTop: 30, color: text}}>
          <Text style={styles.bold}>Top Level Domain: </Text>
          {data.topLevelDomain.map(domain => (
            <Text>{domain}</Text>
          ))}
        </Text>
        <Text style={{color: text}}>
          <Text style={styles.bold}>Currencies: </Text>
          {data.currencies.map((currience, index) => (
            <Text>
              {currience.name}
              {index < data.currencies.length - 1 && <Text>, </Text>}
            </Text>
          ))}
        </Text>
        <Text style={{color: text}}>
          <Text style={styles.bold}>Languages: </Text>
          {data.languages.map((language, index) => (
            <Text>
              {language.name}
              {index < data.languages.length - 1 && <Text>, </Text>}
            </Text>
          ))}
        </Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
    marginTop: 30,
  },
  bold: {
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default CountryDescription;
