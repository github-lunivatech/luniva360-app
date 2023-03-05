import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsiveWidth} from '../utils/StylesConstants';

const LargeBtn = ({title}) => {
  return (
    <TouchableOpacity
      style={[
        {
          marginLeft: 'auto',
          marginRight: 'auto',
          borderColor: '#205072',
          width: responsiveWidth * 0.95,
          borderWidth: 2,
          padding: 12,
          //   marginTop: 20,
          borderRadius: 6,
        },
      ]}>
      <Text
        style={{
          color: '#205072',
          textAlign: 'center',
          fontSize: 14,
          fontWeight: '600',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default LargeBtn;
