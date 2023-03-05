import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {responsiveWidth} from '../utils/StylesConstants';

const CommonBtn = ({title, navigateTo}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: '#316387',
          width: responsiveWidth * 0.94,
          padding: 14,
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: 6,
        },
      ]}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}>
      <Text style={[{textAlign: 'center', color: 'white', fontSize: 16}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CommonBtn;
