import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/views/Home';
import Country from './src/views/Country';
import {light, dark} from './src/themes';
export const ThemeContext = React.createContext();

const Stack = createStackNavigator();

export default function App() {
  const [theme, setTheme] = useState(light);

  const themeData = {theme, setTheme};
  return (
    <ThemeContext.Provider value={themeData}>
      <NavigationContainer theme={theme === light ? dark : light}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Country"
            component={Country}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
