import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  appBlue,
  primaryColor,
  responsiveHeight,
  responsiveWidth,
} from '../utils/StylesConstants';
import {Image} from 'react-native';

const CarouselThird = () => {
  const data = [
    {
      id: 1,
      discount: 'UPTO 20% OFF ON CHECKUPS',
      img: require('../Assets/Images/checkupbg.png'),
      color: '#9985FF',
    },
    {
      id: 2,
      discount: 'UPTO 40% OFF ON MEDICINES',
      img: require('../Assets/Images/medicineShop.png'),
      color: '#F8C085',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          padding: 15,
          marginTop: 10,
          fontWeight: '500',
        }}>
        Explore Exclusive Offers
      </Text>
      <ScrollView horizontal={true}>
        {data.map(item => {
          return (
            <View
              style={[styles.eachContainer, {backgroundColor: item.color}]}
              key={item.id}>
              <View style={{width: responsiveWidth * 0.3, marginLeft: 10}}>
                <Text style={{color: appBlue, fontSize: 20}}>
                  {item.discount}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'white',
                    padding: 6,
                    width: responsiveWidth * 0.22,
                    // justifyContent: 'center',
                    // alignSelf: 'center',
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
              <View style={{width: responsiveWidth * 0.5}}>
                <Image source={item.img} style={styles.img} />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CarouselThird;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#205072',
    width: '100%',
    marginTop: 20,
  },
  eachContainer: {
    width: responsiveWidth * 0.88,
    marginHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: '#F8C085',
    height: responsiveHeight * 0.23,
    marginBottom: 40,
    padding: 10,
    borderRadius: 15,
  },
  img: {
    width: '100%',
    height: '130%',
    resizeMode: 'stretch',
    marginTop: -23,
  },
});
