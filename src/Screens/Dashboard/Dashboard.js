import {View, Text, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import {primaryColor} from '../../utils/StylesConstants';
import ReanimatedCarousel from '../../Components/ReanimatedCarousel';
import CardFeatures from '../../Common/CardFeatures';
import TestAndCheckups from '../../Components/TestAndCheckups';
import Specialist from '../../Components/Specialist';

const Dashboard = () => {
  return (
    <>
      <StatusBar backgroundColor={primaryColor} />
      <ScrollView>
        <ReanimatedCarousel />
        <CardFeatures />
        <View style={{backgroundColor: 'white'}}>
          <TestAndCheckups />

          <Specialist />
        </View>
      </ScrollView>
    </>
  );
};

export default Dashboard;
