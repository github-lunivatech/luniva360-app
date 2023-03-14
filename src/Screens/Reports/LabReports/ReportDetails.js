import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {appBlue, responsiveWidth} from '../../../utils/StylesConstants';
import CommonBtn from '../../../Common/CommonBtn';

const ReportDetails = ({route}) => {
  const item = route.params.item;
  console.log(route);
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View key={item.id} style={styles.eachcontainer}>
          <View>
            <Image
              source={require('../../../Assets/Images/crystal.jpg')}
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
                borderRadius: 6,
                borderColor: appBlue,
                borderWidth: 1.5,
              }}
            />
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.name}>{item.test}</Text>
            <Text style={[styles.name, {color: 'green'}]}>Rs.1650</Text>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Image
                source={require('../../../Assets/Icons/calendar.png')}
                style={styles.iconStyle}
              />
              <Text style={{alignSelf: 'center', color: appBlue}}>
                {item.date}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Image
                source={require('../../../Assets/Icons/clock.png')}
                style={styles.iconStyle}
              />
              <Text style={{color: appBlue}}>3:30 AM</Text>
            </View>
          </View>
        </View>
        <View style={styles.appInfoContainer}>
          <View style={styles.smContainer}>
            <Text style={styles.title}>Sample of:</Text>
            <Text style={styles.value}>MySelf</Text>
          </View>
          <View style={styles.smContainer}>
            <Text style={styles.title}>Age:</Text>
            <Text style={styles.value}>32 Years</Text>
          </View>
          <View style={styles.smContainer}>
            <Text style={styles.title}>Gender:</Text>
            <Text style={styles.value}>Male</Text>
          </View>
          <View style={styles.smContainer}>
            <Text style={styles.title}>Status:</Text>
            <Text style={styles.value}>Report Completed</Text>
          </View>
          <View style={styles.smContainer}>
            <Text style={styles.title}>Test Performed:</Text>
            <Text style={styles.value}>TFT, TFT T3, TFT T4</Text>
          </View>
          <View style={styles.smContainer}>
            <Text style={styles.title}>Refered Doctor:</Text>
            <Text style={[styles.value, {color: appBlue}]}>
              Dr. Brijesh Bhakta Mathema
            </Text>
          </View>

          <View>
            <Text style={[styles.title, {marginTop: 20, marginBottom: 15}]}>
              Remarks:
            </Text>
            <Text style={{color: 'grey', lineHeight: 25, textAlign: 'justify'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30}}>
          <CommonBtn title={'Download Report'} />
        </View>
      </View>
    </>
  );
};

export default ReportDetails;

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
    marginVertical: 5,
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
    marginBottom: 0,
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
