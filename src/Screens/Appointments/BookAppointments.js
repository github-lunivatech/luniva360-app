import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {
  appBlue,
  primaryColor,
  responsiveWidth,
} from '../../utils/StylesConstants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CommonBtn from '../../Common/CommonBtn';

const BookAppointments = ({navigation}) => {
  const data = [
    {
      id: 1,
      name: 'Dr.Richa Amatya',
      type: 'Dermatologist',
      location: 'Kathmandu',
    },
    {
      id: 2,
      date: `12 Janauary`,
      name: 'Dr.Ashim Prasad Kandel',
      type: 'Gynocologist',
      location: 'Kathmandu',
    },
    {
      id: 3,
      date: `14 Janauary`,
      name: 'Dr.Rejina Upreti',
      type: 'Gynocologist ',
      location: 'Lalitpur',
    },
  ];
  return (
    <View>
      <View
        style={[
          {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 10,
            marginTop: 20,
          },
          styles.inputSection,
        ]}>
        <Icon
          name="search"
          size={22}
          color={primaryColor}
          style={[styles.inputIcon]}
        />
        <TextInput
          style={styles.input}
          placeholder="Doctor, Specialties..."
          placeholderTextColor="lightgrey"
        />
      </View>
      <View
        style={[
          {marginLeft: 'auto', marginRight: 'auto', marginBottom: 10},
          styles.inputSection,
        ]}>
        <Icon
          name="location-arrow"
          size={22}
          color={primaryColor}
          style={[styles.inputIcon]}
        />
        <TextInput
          style={styles.input}
          placeholder="Select Area"
          placeholderTextColor="lightgrey"
        />
      </View>
      <View
        style={[
          {marginLeft: 'auto', marginRight: 'auto', marginBottom: 10},
          styles.inputSection,
        ]}>
        <Icon
          name="calendar-week"
          size={22}
          color={primaryColor}
          style={[styles.inputIcon]}
        />
        <TextInput
          style={styles.input}
          placeholder="Select Date"
          placeholderTextColor="lightgrey"
          keyboardType="numeric"
        />
      </View>
      <CommonBtn title={'Search Doctors'} />
      <View style={styles.doctorsList}>
        <Text style={styles.listTxt}>All Specialities</Text>
        {data.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.eachcontainer}
              onPress={() => navigation.navigate('DoctorProfile')}>
              <View>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekVjnKVnxqRLrzfkM8O1rk9GVHrrHLHd5jQ&usqp=CAU',
                  }}
                  style={{
                    width: 65,
                    height: 65,
                    resizeMode: 'contain',
                    borderRadius: 8,
                  }}
                />
              </View>
              <View style={styles.descContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.type}>{item.type}</Text>
                <Text style={styles.location}>{item.location}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BookAppointments;

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
    elevation: 1,
    backgroundColor: 'white',
    width: responsiveWidth * 0.89,
    marginBottom: 20,
    borderRadius: 8,
  },
  inputIcon: {
    padding: 14,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
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
    borderRadius: 8,
  },
  doctorsList: {
    marginTop: 30,
  },
  eachcontainer: {
    backgroundColor: 'white',
    width: responsiveWidth * 0.93,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 8,
    flexDirection: 'row',
    padding: 8,
    elevation: 1,
  },

  dateCard: {
    backgroundColor: 'red',
    margin: 5,
    borderRadius: 8,
    padding: 1,
    paddingHorizontal: 15,
  },

  listTxt: {
    color: appBlue,
    fontWeight: '500',
    fontSize: 20,
    width: responsiveWidth * 0.9,
    marginLeft: 'auto',
    marginRight: 'auto',
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
  location: {
    fontSize: 14,
    color: appBlue,
  },
});
