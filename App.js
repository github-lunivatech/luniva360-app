import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, Text} from 'react-native';
import MainStackNavigation from './src/Navigation/MainStackNavigation';
import {primaryColor, white} from './src/utils/StylesConstants';
import {NativeBaseProvider} from 'native-base';

function App() {
  return (
    <>
      <StatusBar backgroundColor={primaryColor} />
      <NativeBaseProvider>
        <NavigationContainer>
          <MainStackNavigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </>
  );
}

export default App;
