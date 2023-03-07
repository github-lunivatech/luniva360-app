import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {appBlue, responsiveWidth} from '../../utils/StylesConstants';
import CommonBtn from '../../Common/CommonBtn';

const AppointmentDetails = ({route}) => {
  const item = route.params.item;
  console.log(item);
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View key={item.id} style={styles.eachcontainer}>
          <View>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekVjnKVnxqRLrzfkM8O1rk9GVHrrHLHd5jQ&usqp=CAU',
              }}
              style={{
                width: 115,
                height: 115,
                resizeMode: 'contain',
                borderRadius: 8,
              }}
            />
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.type}>{item.type}</Text>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Image
                source={require('../../Assets/Icons/calendar.png')}
                style={styles.iconStyle}
              />
              <Text style={{alignSelf: 'center', color: appBlue}}>
                {item.date}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Image
                source={require('../../Assets/Icons/clock.png')}
                style={styles.iconStyle}
              />
              <Text style={{color: appBlue}}>{item.time}</Text>
            </View>
          </View>
        </View>
        <View style={styles.appInfoContainer}>
          <View style={styles.smContainer}>
            <Text style={styles.title}>Appointment For:</Text>
            <Text style={styles.value}>MySelf</Text>
          </View>
          <View style={styles.smContainer}>
            <Text style={styles.title}>Age:</Text>
            <Text style={styles.value}>32 Years</Text>
          </View>
          <View style={styles.smContainer}>
            <Text style={styles.title}>Appointment Reason:</Text>
            <Text style={styles.value}>Skin Checkup</Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <CommonBtn title={'Cancel Appointment'} />
        </View>
      </View>
    </>
  );
};

export default AppointmentDetails;

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 16,
  },
  value: {
    color: 'grey',
    marginRight: '20%',
    alignSelf: 'center',
    position: 'absolute',
    left: '50%',
  },
  smContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  appInfoContainer: {
    width: responsiveWidth * 0.93,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 15,
    marginBottom: 15,
  },
  iconStyle: {
    tintColor: appBlue,
    width: 15,
    height: 15,
    marginRight: 6,
    alignSelf: 'center',
  },
  eachcontainer: {
    // backgroundColor: 'white',
    width: responsiveWidth * 0.93,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 8,
    flexDirection: 'row',
    padding: 8,
  },

  descContainer: {
    marginLeft: 12,
    alignSelf: 'center',
    marginTop: 3,
  },
  name: {
    fontSize: 16,
    color: 'black',
  },
  type: {
    fontSize: 16,
    color: 'grey',
  },
  location: {
    fontSize: 14,
    color: appBlue,
  },
});
