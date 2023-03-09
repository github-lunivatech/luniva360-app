import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import React from 'react';
import {
  appBlue,
  primaryColor,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/StylesConstants';

const NewCarousel = () => {
  const data = [
    {id: 3, color: '#BBE2F1', img: require('../../Assets/Images/d-p.png')},
    {id: 2, color: '#FF8585', img: require('../../Assets/Images/group.png')},
    {
      id: 1,
      color: '#9985FF',
      img: require('../../Assets/Images/d-p.png'),
    },
  ];
  const cardData = [
    {id: 1, title: 'Whole Body Checkup', Price: 'Rs.4500', Button: 'Book Test'},
    {id: 2, title: 'Blood Sugar Count', Price: 'Rs.4500', Button: 'Book Test'},
    {id: 3, title: 'Urine Sample Test', Price: 'Rs.4500', Button: 'Book Test'},
  ];

  return (
    <ScrollView horizontal={true}>
      {data.map(item => {
        return (
          <View style={[styles.container, {backgroundColor: item.color}]}>
            <Image source={item.img} style={styles.image} />
            <View>
              <View
                style={{
                  backgroundColor: appBlue,
                  padding: 6,
                  width: responsiveWidth * 0.2,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: 6,
                  marginTop: 25,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: '500',
                    fontSize: 16,
                  }}>
                  40% Off
                </Text>
              </View>
              <Text
                style={{
                  color: appBlue,
                  textAlign: 'center',
                  fontSize: 24,
                  marginTop: 5,
                }}>
                Whole Body Checkup
              </Text>
              <Text
                style={{
                  color: appBlue,
                  textAlign: 'center',
                  fontSize: 14,
                  marginTop: 5,
                }}>
                Take full advantage of discount offer and perform a {'\n'} whole
                body checkup
              </Text>

              <View style={{alignSelf: 'center', marginTop: 6}}>
                {cardData.map(item => {
                  return (
                    <View style={{flexDirection: 'row'}} key={item.id}>
                      <Icon
                        name="ios-checkmark-sharp"
                        size={20}
                        style={{
                          color: 'green',
                          marginRight: 5,
                          alignSelf: 'center',
                        }}
                      />
                      <Text style={{color: appBlue, lineHeight: 27}}>
                        {item.title}
                      </Text>
                    </View>
                  );
                })}
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  padding: 6,
                  width: responsiveWidth * 0.4,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: 6,
                  marginTop: 15,
                  elevation: 4,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: primaryColor,
                    fontWeight: '500',
                    fontSize: 16,
                  }}>
                  Try Out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default NewCarousel;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight * 0.6,
    width: responsiveWidth * 0.85,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#BBE2F1',
    marginTop: 8,
    borderRadius: 15,
    marginLeft: 10,
  },
  image: {
    width: responsiveWidth * 0.85,
    height: responsiveHeight * 0.25,
    // backgroundColor: 'black',
    resizeMode: 'stretch',
    position: 'relative',
    // top: -60,
  },
});
