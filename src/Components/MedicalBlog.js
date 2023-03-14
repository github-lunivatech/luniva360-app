import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  appBlue,
  black,
  grey,
  responsiveHeight,
  responsiveWidth,
} from '../utils/StylesConstants';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

const MedicalBlog = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: 2,
      button: 'Fitness',
      info: '15 benefits of Vitamin D and its sources of fruits and vegetables',
      duration: 7,
      img: 'https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 1,
      button: 'Health',
      info: 'Precautions To Be Safe From Covid In This Winter',
      duration: 5,
      img: 'https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      button: 'Gym',
      info: 'Exercise can help prevent excess weight gain or help maintain weight loss.',
      duration: 15,
      img: 'https://images.pexels.com/photos/13106586/pexels-photo-13106586.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <View
      style={{
        width: responsiveWidth * 0.95,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 50,
        marginTop: 20,
      }}>
      <Text
        style={{
          color: black,
          fontSize: 18,
          fontWeight: '600',
          marginBottom: 20,
        }}>
        Medical Blog
      </Text>
      <ScrollView horizontal={true}>
        {data.map(item => {
          return (
            <TouchableOpacity
              style={styles.conatiner}
              key={item.id}
              onPress={() =>
                navigation.navigate('Blog', {
                  item: item,
                })
              }>
              {/* <Image source={item.img} style={styles.img} /> */}
              <FastImage
                source={{
                  uri: item.img,
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.img}
              />
              <View
                style={{
                  backgroundColor: appBlue,
                  padding: 4,
                  width: responsiveWidth * 0.2,
                  borderRadius: 4,
                  marginVertical: 10,
                }}>
                <Text style={{color: 'white', textAlign: 'center'}}>
                  {item.button}
                </Text>
              </View>
              <Text style={{color: appBlue, fontSize: 16}}>{item.info} </Text>
              <View style={{flexDirection: 'row', marginTop: 4}}>
                <Image
                  source={require('../Assets/Icons/clock.png')}
                  style={{
                    width: 15,
                    height: 15,
                    tintColor: grey,
                    alignSelf: 'center',
                    marginRight: 4,
                    resizeMode: 'contain',
                  }}
                />
                <Text style={{color: grey}}>{item.duration} mins read</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MedicalBlog;

const styles = StyleSheet.create({
  conatiner: {
    width: responsiveWidth * 0.75,
    marginRight: 30,
  },
  img: {
    width: responsiveWidth * 0.75,
    height: responsiveHeight * 0.2,
    borderRadius: 5,
  },
});
