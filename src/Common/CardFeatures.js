import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {buttonColor, responsiveWidth} from '../utils/StylesConstants';

const CardFeatures = () => {
  const featureCardData = [
    {
      id: 1,
      img: require('../Assets/Icons/microscope.png'),
      text: `Book Lab Tests`,
      color: '#d8ecfd',
    },
    {
      id: 2,
      img: require('../Assets/Icons/doctor1.png'),
      text: "Doctor's Appointment",
      color: '#d1f0de',
    },
    {
      id: 3,
      img: require('../Assets/Icons/medicine.png'),
      text: 'Request Medicine',
      color: '#FBD6E7',
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
            backgroundColor: '#f5f5f5',
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
                style={[
                  {
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10,
                    width: responsiveWidth * 0.28,
                    height: 80,
                    backgroundColor: item.color,
                    borderRadius: 6,
                    elevation: 2,
                  },
                ]}>
                <View>
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                      // marginTop: 30,
                      tintColor: buttonColor,
                      alignSelf: 'center',
                    }}
                    source={item.img}
                    resizeMode={'cover'}
                  />
                </View>
              </TouchableOpacity>
              <Text
                style={[
                  {
                    color: '#205072',
                    textAlign: 'center',
                    fontSize: 12,
                    marginTop: 10,
                    fontWeight: '600',
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
