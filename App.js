import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, Text} from 'react-native';
import MainStackNavigation from './src/Navigation/MainStackNavigation';
import {primaryColor, white} from './src/utils/StylesConstants';

function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor={primaryColor} />
        <MainStackNavigation />
      </NavigationContainer>
    </>
  );
}

export default App;
