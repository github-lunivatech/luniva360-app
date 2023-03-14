import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  appBlue,
  buttonColor,
  lightgrey,
  responsiveWidth,
} from '../../utils/StylesConstants';

const MyAppointments = ({navigation}) => {
  const data = [
    {
      id: 1,
      date: `19 December`,
      name: 'Dr.Richa Amatya',
      type: 'Dermatologist',
      time: '3:30 PM',
      color: '#FED36F',
    },
    {
      id: 2,
      date: `12 Janauary`,
      name: 'Dr.Ashim Prasad Kandel',
      type: 'Gynocologist',
      time: '5:30 PM',
      color: '#FCBDBD',
    },
    {
      id: 3,
      date: `14 Janauary`,
      name: 'Dr.Rejina Upreti',
      type: 'Gynocologist ',
      time: '1:30 PM',
      color: '#B2F9C1',
    },
  ];

  return (
    <>
      {data.map(item => {
        return (
          <TouchableOpacity
            style={styles.eachcontainer}
            key={item.id}
            onPress={() =>
              navigation.navigate('AppointmentDetails', {
                item: item,
              })
            }>
            <View style={[styles.dateCard, {backgroundColor: item.color}]}>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.dateNumber}>{item.date.split(' ')[0]}</Text>
                <Text style={styles.dateTxt}>{item.date.split(' ')[1]}</Text>
              </View>
            </View>
            <View style={styles.descContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default MyAppointments;

const styles = StyleSheet.create({
  eachcontainer: {
    backgroundColor: 'white',
    width: responsiveWidth * 0.93,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 8,
    flexDirection: 'row',
    padding: 6,
    elevation: 1,
  },

  dateCard: {
    backgroundColor: 'red',
    margin: 5,
    borderRadius: 8,
    padding: 1,
    paddingHorizontal: 15,
  },
  dateNumber: {
    fontSize: 40,
    textAlign: 'center',
    color: appBlue,
  },
  dateTxt: {
    textAlign: 'center',
    color: appBlue,
    fontWeight: '500',
    marginTop: -10,
    marginBottom: 7,
  },
  descContainer: {
    marginLeft: 8,
    alignSelf: 'flex-start',
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
  time: {
    fontSize: 14,
    color: appBlue,
  },
});
