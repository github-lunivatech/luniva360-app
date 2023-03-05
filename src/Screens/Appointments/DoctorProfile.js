import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  appBlue,
  black,
  grey,
  responsiveWidth,
} from '../../utils/StylesConstants';
import CommonBtn from '../../Common/CommonBtn';

const DoctorProfile = () => {
  const data = [
    {
      id: 1,
      name: 'Dr.Richa Amatya',
      type: 'Dermatologist',
      location: 'Kathmandu',
      year: '3 years',
    },
  ];
  const specialtyData = [
    {id: 1, title: 'Dermatologist'},
    {id: 2, title: 'Leprosy'},
    {id: 3, title: 'Neuro'},
  ];
  const qualificationData = [
    {id: 1, title: 'UCL Cliniques Saint-Luc (1987-1999)-Docteur'},
    {id: 2, title: 'ULG-CHU Start-Tilman(1987-1999)-Recherch'},
  ];
  return (
    <View>
      {data.map(item => {
        return (
          <View
            key={item.id}
            style={styles.eachcontainer}
            onPress={() => navigation.navigate('DoctorProfile')}>
            <View>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekVjnKVnxqRLrzfkM8O1rk9GVHrrHLHd5jQ&usqp=CAU',
                }}
                style={{
                  width: 115,
                  height: 95,
                  resizeMode: 'contain',
                  borderRadius: 8,
                }}
              />
            </View>
            <View style={styles.descContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.location}>{item.location}</Text>
              <Text style={styles.location}>{item.year}</Text>
            </View>
          </View>
        );
      })}

      <Text
        style={[
          styles.type,
          {
            width: responsiveWidth * 0.94,
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'justify',
            lineHeight: 25,
            fontSize: 13,
            marginBottom: 20,
          },
        ]}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
      </Text>
      <View style={styles.specialtyConatiner}>
        <Text style={styles.sptext}>Specialities</Text>
        <View style={{flexDirection: 'row'}}>
          {specialtyData.map(item => {
            return (
              <View style={styles.specialtyCard} key={item.id}>
                <Text style={{color: grey}}>{item.title}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={[styles.specialtyConatiner, {marginBottom: 20}]}>
        <Text style={styles.sptext}>Education</Text>
        {qualificationData.map(item => {
          return (
            <Text
              style={{color: black, marginVertical: 8, fontSize: 12}}
              key={item.id}>
              {item.title}
            </Text>
          );
        })}
      </View>
      <CommonBtn title={'Book Appointment'} />
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  specialtyCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  specialtyConatiner: {
    width: responsiveWidth * 0.94,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sptext: {
    fontSize: 16,
    color: black,
  },
  eachcontainer: {
    width: responsiveWidth,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 8,
    flexDirection: 'row',
    padding: 8,
  },

  descContainer: {
    marginLeft: 15,
    alignSelf: 'flex-start',
  },
  name: {
    fontSize: 18,
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
