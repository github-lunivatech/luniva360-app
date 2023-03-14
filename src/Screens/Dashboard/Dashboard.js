import {View, Text, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import {primaryColor} from '../../utils/StylesConstants';
import ReanimatedCarousel from '../../Components/ReanimatedCarousel';
import CardFeatures from '../../Common/CardFeatures';
import TestAndCheckups from '../../Components/TestAndCheckups';
import Specialist from '../../Components/Specialist';
import NewCarousel from '../Vitals/NewCarousel';
import MedicalBlog from '../../Components/MedicalBlog';
import CarouselThird from '../../Components/CarouselThird';

const Dashboard = () => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor={primaryColor} />
        <ScrollView>
          <ReanimatedCarousel />
          <CardFeatures />
          {/* <NewCarousel /> */}
          <View style={{backgroundColor: 'white'}}>
            <TestAndCheckups />

            <CarouselThird />
            <Specialist />
            <MedicalBlog />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Dashboard;
