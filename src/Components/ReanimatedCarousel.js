import * as React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {primaryColor} from '../utils/StylesConstants';
import FastImage from 'react-native-fast-image';

const width = Dimensions.get('window').width;
function ReanimatedCarousel() {
  const images = [
    {
      id: 1,
      uri: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'hello',
    },
    {
      id: 2,
      uri: 'https://www.gannett-cdn.com/-mm-/1e13d64b87a0e5d73e18fdea2ef9545c6bf86634/c=0-59-2118-1256/local/-/media/2017/04/24/Phoenix/Phoenix/636286706793942165-GettyImages-598249418.jpg',
      title: 'hello',
    },
    {
      id: 3,
      uri: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'hello',
    },
    {
      id: 4,
      uri: 'https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'hello',
    },
  ];
  return (
    <View style={{marginBottom: 10}}>
      <Carousel
        loop
        width={width}
        height={width / 1.9}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={6000}
        // onSnapToItem={(index,) => console.log('current index:', index)}
        renderItem={({index, item}) => (
          <View
            style={{
              flex: 1,
              // borderWidth: 0.5,
              justifyContent: 'center',
              // bordercolor: 'black',
              marginTop: 1.5,
              // borderRadius: 10,
            }}>
            {/* <Image
              source={item.source}
              style={{width: width * 0.99, height: width / 1.5}}
            /> */}
            <FastImage
              source={{
                uri: item.uri,
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.contain}
              style={{width: width * 0.99, height: width / 1.5}}
            />
            {/* <TouchableOpacity style={styles.btn}>
              <Text style={styles.txt}>Learn More</Text>
            </TouchableOpacity> */}

            {/* <Text style={{ color: 'black' }}>hello</Text> */}
          </View>
        )}
      />
    </View>
  );
}

export default ReanimatedCarousel;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: 'white',
    top: -70,
    width: width * 0.33,
    alignSelf: 'center',
    borderRadius: 6,
    backgroundColor: primaryColor,
    padding: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  txt: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
