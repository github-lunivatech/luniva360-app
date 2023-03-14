import {View, Text, TextInput} from 'react-native';
import React from 'react';
import CommonBtn from '../../Common/CommonBtn';
import BackBtn from '../../Common/BackBtn';
import {
  buttonColor,
  primaryColor,
  responsiveWidth,
} from '../../utils/StylesConstants';
import TwoStars from '../../Components/TwoStars';

const OtpVerification = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <BackBtn />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        {/* <StarOfLife />
        <StarOfLife /> */}
      </View>
      <TwoStars />
      <Text
        style={{
          textAlign: 'center',
          marginTop: 10,
          color: buttonColor,
          fontSize: 30,
        }}>
        Verify OTP
      </Text>

      <Text
        style={[
          {color: 'black', textAlign: 'center', marginTop: 10, fontSize: 12},
        ]}>
        You will get an OTP via SMS or Email
      </Text>
      <TextInput
        style={[
          {
            borderBottomColor: 'grey',
            borderBottomWidth: 0.5,
            width: responsiveWidth * 0.88,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 40,
            marginTop: 40,
          },
        ]}
        placeholder="Enter 6 digit code"
        placeholderTextColor="lightgrey"
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <CommonBtn title={'Verify'} navigateTo={'Login'} />
      <Text
        style={{
          color: 'grey',
          textAlign: 'center',
          marginTop: 18,
          fontSize: 12,
        }}>
        Didn't Receive the verification OTP?
        <Text
          style={[
            {
              color: primaryColor,
              textDecorationLine: 'underline',
              // backgroundColor: "black",
            },
          ]}
          onPress={() => console.log('hello world')}>
          {'  '}
          Resend Code?
        </Text>
      </Text>
    </View>
  );
};

export default OtpVerification;
