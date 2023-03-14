import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import CommonBtn from '../../Common/CommonBtn';
import {
  primaryColor,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/StylesConstants';

const FirstScreen = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor={'white'} />
      <View
        style={{backgroundColor: 'white', flex: 1, justifyContent: 'center'}}>
        <View style={{marginTop: -100}}>
          <Icon
            style={[{fontSize: 82, textAlign: 'center', marginTop: 10}]}
            name="heartbeat"
            size={30}
            color={primaryColor}
          />

          <Text
            style={[
              {
                color: primaryColor,
                textAlign: 'center',
                marginTop: 10,
                fontSize: 45,
              },
            ]}>
            Luniva<Text style={{color: '#7b7b7b'}}>360</Text>
          </Text>
          <Text
            style={{
              marginTop: 5,
              textAlign: 'center',
              color: 'grey',
              fontSize: 12,
              width: responsiveWidth * 0.7,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
            A health app made with{'\n'}love for seeking online medical help
          </Text>
          <Image
            style={{
              height: responsiveHeight * 0.4,
              width: responsiveWidth * 0.4,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: 20,
              //   marginTop: 10,
            }}
            source={require('../../Assets/Images/Doctor.png')}
            resizeMode={'contain'}
          />
          <CommonBtn title={'Get Started'} navigateTo={'Login'} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SendOtp');
            }}>
            <Text
              style={[
                ,
                {color: primaryColor, textAlign: 'center', marginTop: 10},
              ]}>
              Have an account? Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default FirstScreen;
