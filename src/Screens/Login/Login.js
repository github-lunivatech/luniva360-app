import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BackBtn from '../../Common/BackBtn';
import {primaryColor, responsiveWidth} from '../../utils/StylesConstants';
import CommonBtn from '../../Common/CommonBtn';

const Login = () => {
  return (
    <>
      <BackBtn />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={[
            {
              marginTop: 100,
              marginRight: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              // alignItems: "center",
            },
          ]}>
          {/* <StarOfLife />
        <StarOfLife /> */}
        </View>
        <Text
          style={[
            {
              color: '#205072',
              textAlign: 'center',
              marginTop: 10,
              fontSize: 30,
            },
          ]}>
          Login
        </Text>
        <Text
          style={[
            {
              color: 'black',
              textAlign: 'center',
              marginTop: 10,
              marginBottom: 30,
              fontSize: 12,
            },
          ]}>
          Enter Your Login Details To Access Your Account
        </Text>
        <View
          style={[
            {marginLeft: 'auto', marginRight: 'auto', marginBottom: 10},
            styles.inputSection,
          ]}>
          <Icon
            name="phone-alt"
            size={22}
            color={primaryColor}
            style={[styles.inputIcon]}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="lightgrey"
            keyboardType="numeric"
          />
        </View>
        <View
          style={[
            {marginLeft: 'auto', marginRight: 'auto'},
            styles.inputSection,
          ]}>
          <Icon
            name="user-lock"
            size={21}
            color={primaryColor}
            style={[styles.inputIcon]}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="lightgrey"
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <CommonBtn title={'Login'} navigateTo={'DashboardLayout'} />
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputSection: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: 'black',

    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 2,
    backgroundColor: 'white',
    width: responsiveWidth * 0.89,
    marginBottom: 40,
    borderRadius: 2,
  },
  inputIcon: {
    padding: 14,
    borderWidth: 2,
    borderColor: 'white',
  },
  input: {
    flex: 1,
    width: responsiveWidth * 0.8,
    borderRadius: 6,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
