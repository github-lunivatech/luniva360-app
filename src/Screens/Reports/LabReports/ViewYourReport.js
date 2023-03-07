import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import CommonBtn from '../../../Common/CommonBtn';
import {primaryColor, responsiveWidth} from '../../../utils/StylesConstants';

const WIDTH = Dimensions.get('window').width;

const ViewYourReport = () => {
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          width: WIDTH * 0.95,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 13,
            color: 'black',
            marginBottom: 25,
            marginTop: 25,
            width: responsiveWidth * 0.7,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
          Fill the information to get your Lab Report. You can also scan QR code
          which is provided on the bill.
        </Text>
        <TextInput
          style={[
            {
              backgroundColor: 'white',
              width: responsiveWidth * 0.9,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 10,
              borderRadius: 6,
              elevation: 2,
            },
            // { borderBottomColor: "grey", borderBottomWidth: 0.5 },
          ]}
          placeholderTextColor="lightgrey"
          placeholder="Report Code"
          keyboardType="numeric"
        />
        <TextInput
          style={[
            {
              backgroundColor: 'white',
              elevation: 2,

              width: responsiveWidth * 0.9,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 20,
              borderRadius: 6,
            },
            // { borderBottomColor: "grey", borderBottomWidth: 0.5 },
          ]}
          placeholder="Report Password"
          placeholderTextColor="lightgrey"
          secureTextEntry={true}
        />
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            marginRight: 'auto',
            marginLeft: 'auto',
          }}>
          <View
            style={{
              width: responsiveWidth * 0.4,
              height: 0.5,
              backgroundColor: 'grey',
              marginRight: 15,
            }}></View>
          <Text
            style={{
              marginTop: -5,
              marginRight: 15,
              color: '#e95420',
              fontWeight: 'bold',
              fontSize: 10,
            }}>
            OR
          </Text>
          <View
            style={{
              width: responsiveWidth * 0.4,
              height: 0.5,
              backgroundColor: 'grey',
            }}></View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('QrCodeScanner');
          }}>
          <Icon
            name="qr-code-scanner"
            style={{textAlign: 'center', marginTop: 20}}
            size={60}
            color={primaryColor}
          />
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              marginBottom: 20,
              marginTop: 10,
            }}>
            Scan Code
          </Text>
        </TouchableOpacity>
        <CommonBtn title="Find Report" />
      </View>
    </>
  );
};

export default ViewYourReport;
