import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {buttonColor, responsiveWidth} from '../utils/StylesConstants';
import {useNavigation} from '@react-navigation/native';

const CardFeatures = () => {
  const navigation = useNavigation();

  const featureCardData = [
    {
      id: 1,
      img: require('../Assets/Icons/microscope2.png'),
      text: `Book Lab Tests`,
      nav: 'SearchLabs',
      color: '#2C8CF4',
    },
    {
      id: 2,
      img: require('../Assets/Icons/doctor3.png'),
      text: "Doctor's Appointment",
      nav: 'SearchLabs',

      color: '#12B885',
    },
    {
      id: 3,
      img: require('../Assets/Icons/medicine2.png'),
      nav: 'SearchLabs',

      text: 'Request Medicine',
      color: '#6335BC',
    },
    // {
    //   id: 3,
    //   img: require('../Assets/Icons/medicine.png'),
    //   text: 'Request Medicine',
    //   color: '#FBD6E7',
    // },
  ];

  return (
    <>
      <View
        style={[
          {
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            marginBottom: 20,
          },
        ]}>
        {featureCardData.map(item => {
          return (
            <View key={item.id}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SearchLabs')}
                style={[
                  {
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    width: responsiveWidth * 0.28,
                    height: 100,
                    backgroundColor: item.color,
                    borderRadius: 10,
                    elevation: 20,
                  },
                ]}>
                <View>
                  <Image
                    style={{
                      height: 80,
                      width: 80,
                      // marginTop: 30,
                      // tintColor: 'white',
                      alignSelf: 'center',
                    }}
                    source={item.img}
                    resizeMode={'contain'}
                  />
                </View>
              </TouchableOpacity>
              <Text
                style={[
                  {
                    color: '#205072',
                    textAlign: 'center',
                    fontSize: 12,
                    width: responsiveWidth * 0.3,
                    marginTop: 10,
                    fontWeight: '500',
                  },
                ]}>
                {item.text}
              </Text>
            </View>
          );
        })}
      </View>
    </>
  );
};

export default CardFeatures;
