//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SvgUri} from 'react-native-svg';
import api from '../../services/api';

// create a component
class Country extends Component {
  render() {
    const {data} = this.props.route.params;
    const changeRoute = async code => {
      const response = await api.get(`v2/alpha/${code}`);
      this.props.navigation.navigate('Country', {data: response.data});
    };
    const format = pop => {
      return String(pop).replace(/(.)(?=(\d{3})+$)/g, '$1,');
    };

    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <SvgUri
            width={330}
            height={250}
            uri={data.flag}
            style={styles.flag}
          />
          <Text style={styles.name}>{data.name}</Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Native Name: </Text>
            <Text>{data.nativeName}</Text>
          </Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Population: </Text>
            <Text>{format(data.population)}</Text>
          </Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Region: </Text>
            <Text>{data.region}</Text>
          </Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Subregion: </Text>
            <Text>{data.subregion}</Text>
          </Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Capital: </Text>
            <Text>{data.capital}</Text>
          </Text>
          <Text style={{marginTop: 30}}>
            <Text style={{fontWeight: 'bold'}}>Top Level Domain: </Text>
            {data.topLevelDomain.map(domain => (
              <Text>{domain}</Text>
            ))}
          </Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Currencies: </Text>
            {data.currencies.map((currience, index) => (
              <Text>
                {currience.name}
                {index < data.currencies.length - 1 && <Text>, </Text>}
              </Text>
            ))}
          </Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Languages: </Text>
            {data.languages.map((language, index) => (
              <Text>
                {language.name}
                {index < data.languages.length - 1 && <Text>, </Text>}
              </Text>
            ))}
          </Text>

          {data.borders && (
            <View>
              <Text
                style={{fontWeight: 'bold', marginBottom: 10, marginTop: 30}}>
                Border Countries:
              </Text>
              <View style={styles.border}>
                {data.borders.map(border => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() => changeRoute(border)}
                        style={styles.borderButton}>
                        <Text style={styles.borderText}>{border}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </View>
          )}
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    paddingLeft: 30,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 22,
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
export default Country;
