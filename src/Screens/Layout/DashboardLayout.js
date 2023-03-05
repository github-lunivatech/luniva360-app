import {View, Text} from 'react-native';
import React from 'react';
import BottomNavigation from '../../Navigation/BottomTabNavigation';
import Header from '../../Common/Header';

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <BottomNavigation />
    </>
  );
};

export default DashboardLayout;
