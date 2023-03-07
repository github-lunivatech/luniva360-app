import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  appBlue,
  buttonColor,
  grey,
  primaryColor,
  responsiveWidth,
  white,
} from '../utils/StylesConstants';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        elevation: 5,
        backgroundColor: white,
        width: responsiveWidth,
        // borderBottomColor: grey,
        // borderBottomWidth: 0.5,
      }}
      >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: responsiveWidth * 0.9,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 10,
          backgroundColor: white,
          paddingBottom: 6,
        }}>
        <TouchableOpacity>
          <Image
            style={{height: 30, width: 150}}
            source={require('../Assets/Images/logo.webp')}
            resizeMode={'cover'}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            width: responsiveWidth * 0.2,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Icon name="notifications" size={30} color="#555555" style={{}} />
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Icon name="call" size={30} color="#555555" style={{}} />
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            {/* <Icon name="qr-code-scanner" size={30} color="#555555" style={{}} /> */}
            <Image
              source={require('../../src/Assets/Images/Doctor.png')}
              resizeMode="contain"
              style={[
                {
                  width: 30,
                  height: 30,
                  backgroundColor: appBlue,

                  borderRadius: 30,
                },
              ]}
            />
            {/* <Text
              style={{
                color: focused ? primaryColor : grey,
                fontSize: 12,
                marginBottom: 8,
              }}>
              {route.name}
            </Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
