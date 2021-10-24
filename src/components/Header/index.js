import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ThemeContext} from '../../../App';
import {useTheme} from '@react-navigation/native';
import {light, dark} from '../../themes';
import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Header() {
  const {setTheme, theme} = React.useContext(ThemeContext);
  const {colors} = useTheme();

  const storeData = async value => {
    try {
      let setLocal;
      theme === light ? (setLocal = 'dark') : (setLocal = 'light');
      await AsyncStorage.setItem('theme', setLocal);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={[{backgroundColor: colors.elements}, styles.container]}>
      <Text style={[styles.title, {color: colors.text}]}>
        Where in the world?
      </Text>
      <TouchableOpacity
        style={styles.toggleTheme}
        onPress={() => {
          setTheme(theme === light ? dark : light);
          storeData();
        }}>
        <Icon
          name="moon"
          size={20}
          style={[styles.moon, {color: colors.text}]}
        />
        <Text style={{color: colors.text}}>Dark Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    elevation: 4,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
  },
  toggleTheme: {
    flexDirection: 'row',
  },
  moon: {
    marginRight: 7,
  },
});

export default Header;
