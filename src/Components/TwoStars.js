import {View, Text, Image} from 'react-native';
import React from 'react';

const TwoStars = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Image
        source={require('../Assets/Icons/star.png')}
        style={{height: 45, width: 45}}
      />
      <Image
        source={require('../Assets/Icons/star.png')}
        style={{height: 45, width: 45}}
      />
    </View>
  );
};

export default TwoStars;
