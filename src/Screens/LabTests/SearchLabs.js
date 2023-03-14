import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  appBlue,
  primaryColor,
  responsiveWidth,
} from '../../utils/StylesConstants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const SearchLabs = () => {
  const data = [
    {
      id: 1,
      name: 'Nepal Meds Laboratory',
      addresss: 'Baluwatar, Kathmandu',
      img: require('../../Assets/Images/crystal.jpg'),
    },
    {
      id: 2,
      name: 'Kantipur Path Lab',
      addresss: 'Pulchowk, Lalitpur',
      img: require('../../Assets/Images/crystal.jpg'),
    },
    {
      id: 3,
      name: 'National Reference Laboratory',
      addresss: 'Baluwatar,Kathmandu',
      img: require('../../Assets/Images/crystal.jpg'),
    },
    {
      id: 4,
      name: 'Nepal Meds Laboratory',
      addresss: 'Baluwatar,Kathmandu',
      img: require('../../Assets/Images/crystal.jpg'),
    },
    {
      id: 5,
      name: 'Nepal Meds Laboratory',
      addresss: 'Baluwatar,Kathmandu',
      img: require('../../Assets/Images/crystal.jpg'),
    },
    {
      id: 5,
      name: 'Nepal Meds Laboratory',
      addresss: 'Baluwatar,Kathmandu',
      img: require('../../Assets/Images/crystal.jpg'),
    },
    {
      id: 5,
      name: 'Nepal Meds Laboratory',
      addresss: 'Baluwatar,Kathmandu',
      img: require('../../Assets/Images/crystal.jpg'),
    },
    {
      id: 5,
      name: 'Nepal Meds Laboratory',
      addresss: 'Baluwatar,Kathmandu',
      img: require('../../Assets/Images/crystal.jpg'),
    },
    {
      id: 5,
      name: 'Nepal Meds Laboratory',
      addresss: 'Baluwatar,Kathmandu',
      img: require('../../Assets/Images/crystal.jpg'),
    },
    {
      id: 5,
      name: 'Nepal Meds Laboratory',
      addresss: 'Baluwatar,Kathmandu',
      img: require('../../Assets/Images/crystal.jpg'),
    },
    {
      id: 5,
      name: 'Nepal Meds Laboratory',
      addresss: 'Baluwatar,Kathmandu',
      img: require('../../Assets/Images/crystal.jpg'),
    },
    {
      id: 5,
      name: 'Nepal Meds Laboratory',
      addresss: 'Baluwatar,Kathmandu',
      img: require('../../Assets/Images/crystal.jpg'),
    },
    {
      id: 5,
      name: 'Nepal Meds Laboratory',
      addresss: 'Baluwatar,Kathmandu',
      img: require('../../Assets/Images/crystal.jpg'),
    },
    {
      id: 5,
      name: 'Nepal Meds Laboratory',
      addresss: 'Baluwatar,Kathmandu',
      img: require('../../Assets/Images/crystal.jpg'),
    },
    {
      id: 5,
      name: 'Nepal Meds Laboratory',
      addresss: 'Baluwatar,Kathmandu',
      img: require('../../Assets/Images/crystal.jpg'),
    },
  ];

  const navigation = useNavigation();
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
          placeholder="Search Lab By Name, Location"
          placeholderTextColor="lightgrey"
        />
      </View>
      <View style={{flexDirection: 'column'}}>
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              color: appBlue,
              padding: 10,
              paddingHorizontal: 25,
              fontWeight: '500',
            }}>
            All Clinics
          </Text>
          {data.map(item => {
            return (
              <TouchableOpacity
                style={styles.eachContainer}
                onPress={() => navigation.navigate('SampleCollection')}>
                <View>
                  <Image
                    source={item.img}
                    style={{
                      width: 60,
                      height: 60,
                      resizeMode: 'contain',
                      borderColor: appBlue,
                      borderWidth: 1.5,
                      borderRadius: 10,
                    }}
                  />
                </View>
                <View style={{flexDirection: 'column', marginLeft: 10}}>
                  <Text
                    style={{color: 'black', fontSize: 16, fontWeight: '400'}}>
                    {item.name}
                  </Text>
                  <Text style={{color: 'grey'}}>{item.addresss}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchLabs;

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
    width: responsiveWidth * 0.95,
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
    width: responsiveWidth * 0.95,
    borderRadius: 6,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    borderRadius: 8,
  },
  eachContainer: {
    flexDirection: 'row',
    width: responsiveWidth * 0.95,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 8,
    padding: 10,
  },
});
