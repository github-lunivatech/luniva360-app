import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {appBlue, responsiveWidth} from '../../utils/StylesConstants';
import TestAndCheckups from '../../Components/TestAndCheckups';

const SampleCollection = ({navigation}) => {
  const data = [
    {
      id: 1,
      title: 'Upload RX',
      description: 'Upload image or PDF of your doctors lab test requirements',
      image: require('../../Assets/Icons/labreport.png'),
      color: '#D1F0DE',
    },
    {
      id: 2,
      title: 'Select Test',
      description:
        'Select the test you want to perform available from the list',
      image: require('../../Assets/Icons/labreport.png'),
      color: '#D8ECFD',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'column', marginBottom: 20}}>
        {data.map(item => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('SelectTest')}
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                width: responsiveWidth * 0.95,
                marginLeft: 'auto',
                marginRight: 'auto',
                margin: 8,
                padding: 10,
                borderRadius: 8,
              }}>
              <View
                style={{
                  backgroundColor: item.color,
                  padding: 8,
                  borderRadius: 8,
                }}>
                <Image
                  source={item.image}
                  style={{
                    width: 40,
                    height: 40,
                    resizeMode: 'contain',
                    borderRadius: 10,
                    tintColor: appBlue,
                  }}
                />
              </View>

              <View style={{flexDirection: 'column', marginLeft: 10}}>
                <Text style={{color: 'black', fontSize: 18}}>{item.title}</Text>
                <Text style={{color: 'grey', width: responsiveWidth * 0.75}}>
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <TestAndCheckups />
    </View>
  );
};

export default SampleCollection;
