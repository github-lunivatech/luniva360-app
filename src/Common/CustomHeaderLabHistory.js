import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {responsiveWidth, white} from '../utils/StylesConstants';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const CustomHeaderLabHistory = props => {
  const {title} = props;

  const navigation = useNavigation();
  return (
    <View
      style={{
        elevation: 5,
        backgroundColor: white,
        width: responsiveWidth,
        padding: 10,
        paddingVertical: 14,

        // borderBottomColor: grey,
        // borderBottomWidth: 0.5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          //   justifyContent: 'space-between',
          width: responsiveWidth,
          marginLeft: 'auto',
          marginRight: 'auto',
          //   marginTop: 10,
          backgroundColor: white,
          //   paddingBottom: 6,
        }}>
        <TouchableOpacity
          style={{
            width: responsiveWidth * 0.15,
            backgroundColor: 'white',
            alignSelf: 'center',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            style={{alignSelf: 'center'}}
            name="arrow-back"
            size={30}
            color="black"
          />
        </TouchableOpacity>

        <Text style={{color: 'black', alignSelf: 'center', fontSize: 18}}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default CustomHeaderLabHistory;
