import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {
  appBlue,
  buttonColor,
  grey,
  lightgrey,
  lightprimaryColor,
  primaryColor,
  responsiveWidth,
} from '../../utils/StylesConstants';

const Profile = ({navigation}) => {
  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.profileContainer}>
          <View>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekVjnKVnxqRLrzfkM8O1rk9GVHrrHLHd5jQ&usqp=CAU',
              }}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.userDesc}>
            <Text style={styles.userName}>Shiva Kumar Runiyar</Text>
            <Text style={styles.userNumber}>+977 98438492849</Text>
            <TouchableOpacity style={styles.logOutBtn}>
              <Text style={styles.btnText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.profileContainer,
            {justifyContent: 'space-between', paddingBottom: 20},
          ]}>
          <View style={styles.smContainer}>
            <View>
              <Image
                source={require('../../Assets/Icons/gender.png')}
                style={styles.icon}
              />
            </View>
            <View style={styles.smDesc}>
              <Text style={styles.smTitle}>Gender</Text>
              <Text style={styles.smValue}>Male</Text>
            </View>
          </View>
          <View style={styles.smContainer}>
            <View>
              <Image
                source={require('../../Assets/Icons/location.png')}
                style={styles.icon}
              />
            </View>
            <View style={styles.smDesc}>
              <Text style={styles.smTitle}>Address</Text>
              <Text style={styles.smValue}>Naxal, Ktm</Text>
            </View>
          </View>
          <View style={styles.smContainer}>
            <View>
              <Image
                source={require('../../Assets/Icons/birthday.png')}
                style={styles.icon}
              />
            </View>
            <View style={styles.smDesc}>
              <Text style={styles.smTitle}>Birth Date</Text>
              <Text style={styles.smValue}>1988-05-05</Text>
            </View>
          </View>
        </View>

        {/* {end of profile info} */}
        <View style={styles.reportsContainer}>
          <View style={styles.eachReportContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../Assets/Icons/appointment.png')}
                style={styles.icon}
              />
              <Text
                style={{
                  color: grey,
                  alignSelf: 'center',
                  marginLeft: 10,
                  fontSize: 16,
                }}>
                My Appointments
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{padding: 6}}
                onPress={() => navigation.navigate('MyAppointments')}>
                <Image
                  source={require('../../Assets/Icons/greaterThan.png')}
                  style={[styles.icon, {width: 20, height: 20}]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.eachReportContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../Assets/Icons/labreport.png')}
                style={styles.icon}
              />
              <Text
                style={{
                  color: grey,
                  alignSelf: 'center',
                  marginLeft: 10,
                  fontSize: 16,
                }}>
                My Lab Reports
              </Text>
            </View>
            <View>
              <TouchableOpacity style={{padding: 6}}>
                <Image
                  source={require('../../Assets/Icons/greaterThan.png')}
                  style={[styles.icon, {width: 20, height: 20}]}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.eachReportContainer}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../Assets/Icons/labreport.png')}
                style={styles.icon}
              />
              <Text
                style={{
                  color: grey,
                  alignSelf: 'center',
                  marginLeft: 10,
                  fontSize: 16,
                }}>
                My Report History
              </Text>
            </View>
            <View>
              <TouchableOpacity style={{padding: 6}}>
                <Image
                  source={require('../../Assets/Icons/greaterThan.png')}
                  style={[
                    styles.icon,
                    {
                      width: 20,
                      height: 20,
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* end of appointments and reports */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: '59%',
            // bottom: 20,
          }}>
          <Text style={styles.policyText}>Private Policy</Text>
          <Text style={styles.policyText}>Terms And Condition</Text>
        </View>
        {/* end of footer */}
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  reportsContainer: {
    width: responsiveWidth * 0.93,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 25,
  },
  eachReportContainer: {
    backgroundColor: lightgrey,
    borderRadius: 6,
    elevation: 1,
    padding: 13,

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileContainer: {
    backgroundColor: lightprimaryColor,
    padding: 20,
    flexDirection: 'row',
    paddingTop: 20,
  },
  profileImg: {
    width: 70,
    height: 70,
    backgroundColor: lightgrey,
    padding: 40,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  userDesc: {
    // alignSelf: 'center',
    marginLeft: 15,
  },
  userName: {
    color: 'black',
    fontSize: 19,
    fontWeight: '500',
  },
  userNumber: {
    color: 'black',
    fontSize: 12,
  },
  logOutBtn: {
    borderColor: appBlue,
    borderWidth: 1.5,
    width: responsiveWidth * 0.2,
    marginTop: 6,
    borderRadius: 4,
    padding: 2,
  },
  btnText: {
    textAlign: 'center',
    color: appBlue,
    fontWeight: 'bold',
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: primaryColor,
    alignSelf: 'center',
    marginTop: 4,
  },
  smContainer: {
    flexDirection: 'row',
  },
  smDesc: {
    // alignSelf: 'center',
    // height: 18,
    marginLeft: 6,
  },
  smTitle: {
    color: 'grey',
    fontSize: 12,
  },
  smValue: {
    color: appBlue,
    fontSize: 10,
    fontWeight: '600',
  },
  policyText: {
    color: appBlue,
    fontSize: 16,
  },
});
