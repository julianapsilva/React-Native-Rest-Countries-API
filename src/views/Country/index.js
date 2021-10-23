//import liraries
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
import Header from '../../components/Header';
import CountryDescription from '../../components/CountryDescription';
import Borders from '../../components/CountryDescription/borders';
import GoBackButton from '../../components/GoBackButton';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

// create a component
class CountryClass extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const {data} = this.props.route.params;
    const {text} = this.props.colors;
    const {navigation} = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Header />
          {/* <GoBackButton navigation={navigation} /> */}
          <TouchableOpacity
            style={styles.goBack}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} style={styles.icon} />
            <Text>Back</Text>
          </TouchableOpacity>

          <View style={styles.info}>
            <SvgUri
              width={330}
              height={250}
              uri={data.flag}
              style={styles.flag}
            />

            <CountryDescription data={data} text={text} />

            {data.borders && (
              <Borders
                navigation={navigation}
                text={text}
                borders={data.borders}
              />
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

function Country(props) {
  const {colors} = useTheme();
  return <CountryClass {...props} colors={colors} />;
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
  bold: {
    fontWeight: 'bold',
  },
  flag: {
    marginTop: 30,
  },
});

//make this component available to the app
export default Country;
