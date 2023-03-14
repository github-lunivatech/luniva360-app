import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import SpecialistCard from './SpecialistCard';
import LargeBtn from '../Common/LargeBtn';
import {buttonColor} from '../utils/StylesConstants';

const WIDTH = Dimensions.get('window').width;
const Specialist = () => {
  return (
    <View>
      <View
        style={[
          {width: WIDTH * 0.94, marginLeft: 'auto', marginRight: 'auto'},
        ]}>
        <Text style={styles.title}>Specialist</Text>
        <Text style={styles.desc}>
          Your target for today is to keep positive mindset and smile to
          everyone you meet.
        </Text>
        <SpecialistCard />
        <LargeBtn title={'See More'} />
      </View>
    </View>
  );
};

export default Specialist;
const styles = StyleSheet.create({
  title: {
    color: buttonColor,
    fontSize: 18,
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
