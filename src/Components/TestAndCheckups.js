import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LargeBtn from '../Common/LargeBtn';
import {buttonColor, responsiveWidth} from '../utils/StylesConstants';
import TestAndCheckupCard from './TestAndCheckupCard';

const TestAndCheckups = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test And Checkups</Text>
      <Text style={styles.desc}>
        Your target for today is to keep positive mindset and smile to everyone
        you meet.
      </Text>
      <TestAndCheckupCard />
      <LargeBtn title={'See More'} />
    </View>
  );
};

export default TestAndCheckups;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth * 0.95,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: buttonColor,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 4,
    fontWeight: '600',
  },
  desc: {
    color: buttonColor,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 2,
  },
});
