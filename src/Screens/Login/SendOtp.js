import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import CommonBtn from '../../Common/CommonBtn';
import BackBtn from '../../Common/BackBtn';
import {
  buttonColor,
  primaryColor,
  responsiveWidth,
} from '../../utils/StylesConstants';
import TwoStars from '../../Components/TwoStars';

const WIDTH = Dimensions.get('window').width;

const SendOtp = () => {
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

      <Image
        style={{
          height: 90,
          width: 100,
          marginTop: 10,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        source={require('../../Assets/Images/Verification.png')}
        resizeMode={'cover'}
      />
      {/* <Text
        style={{
          marginTop: 5,
          textAlign: 'center',
          color: buttonColor,
          fontSize: 28,
        }}>
        Verification
      </Text> */}
      <Text
        style={{
          textAlign: 'center',
          marginTop: 10,
          color: 'black',
          fontSize: 12,
          marginBottom: 20,
        }}>
        Enter your mobile number or Email and we {'\n'}will send you the OTP for
        verification
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Phone number"
        placeholderTextColor="lightgrey"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="lightgrey"
      />
      <CommonBtn title={'Get OTP'} navigateTo={'OtpVerification'} />
      <Text
        style={[
          {
            color: primaryColor,
            textAlign: 'center',
            marginTop: 10,
            fontSize: 10,
          },
        ]}>
        By Registering You Are Accepting Out {'\n'} Terms & Conditions
      </Text>
    </View>
  );
};

export default SendOtp;

const styles = StyleSheet.create({
  input: {
    // borderWidth: 1,
    // borderColor: "black",
    width: WIDTH * 0.89,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 35,
    borderRadius: 6,
    padding: 12,
    //
    shadowColor: 'black',

    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 2,
    backgroundColor: 'white',
  },
});
