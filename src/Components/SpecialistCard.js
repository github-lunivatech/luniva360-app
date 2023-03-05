import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';

const cardData = [
  {
    img: require('../Assets/Icons/heart.png'),
    title: 'Cardiologist',
    Doctors: 10,
    themeColor: '#856dff',
  },
  {
    img: require('../Assets/Icons/lungs.png'),
    title: 'Pulmonologist',
    Doctors: 27,
    themeColor: '#fe6f6f',
  },
  {
    img: require('../Assets/Icons/skull.png'),
    title: 'Orthopedist',
    Doctors: 30,
    themeColor: '#fea17a',
  },
  {
    img: require('../Assets/Icons/tooth.png'),
    title: 'Dentists',
    Doctors: 17,
    themeColor: '#4688b3',
  },
  {
    img: require('../Assets/Icons/weelchair.png'),
    title: 'Geriatrician',
    Doctors: 20,
    themeColor: '#7db360',
  },
  {
    img: require('../Assets/Icons/brain.png'),
    title: 'Neurologists',
    Doctors: 5,
    themeColor: '#cc6d45',
  },
];

const WIDTH = Dimensions.get('window').width;

const SpecialistCard = () => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: WIDTH * 0.98,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 10,
        },
      ]}>
      {cardData.map(item => {
        return (
          <TouchableOpacity
            style={{
              width: WIDTH * 0.29,
              padding: 10,
              backgroundColor: item.themeColor,
              margin: 5,
              borderRadius: 8,
              height: 130,
            }}
            key={item.title}>
            <Image
              source={item.img}
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                // tintColor: 'white',
                margin: 10,
                width: 50,
                height: 50,
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: '600',
                fontSize: 13,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: '600',
                fontSize: 13,
              }}>
              {item.Doctors} Doctors
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SpecialistCard;
