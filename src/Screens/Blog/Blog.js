import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {
  appBlue,
  grey,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/StylesConstants';

const Blog = ({route}) => {
  const item = route.params.item;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <Image
          source={require('../../Assets/Images/fruits.jpg')}
          style={styles.img}
        />
        <View style={styles.conatiner}>
          <Text style={{color: appBlue, fontSize: 18}}>{item.info} </Text>
          <View style={{flexDirection: 'row', marginTop: 4}}>
            <View
              style={{
                backgroundColor: appBlue,
                padding: 1,
                width: responsiveWidth * 0.2,
                borderRadius: 4,
                marginVertical: 6,
              }}>
              <Text style={{color: 'white', textAlign: 'center'}}>
                {item.button}
              </Text>
            </View>
            <Image
              source={require('../../Assets/Icons/clock.png')}
              style={{
                width: 15,
                height: 15,
                tintColor: grey,
                alignSelf: 'center',
                marginRight: 4,
                resizeMode: 'contain',
                marginLeft: 15,
              }}
            />
            <Text style={{color: grey, alignSelf: 'center'}}>
              {item.duration} mins read
            </Text>
          </View>
          <View>
            <Text
              style={{color: 'black', textAlign: 'justify', lineHeight: 30}}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance.{'\n'} The first line of Lorem Ipsum,
              "Lorem ipsum dolor sit amet..", comes from a line in section
              1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({
  conatiner: {
    width: responsiveWidth * 0.9,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  img: {
    width: responsiveWidth,
    height: responsiveHeight * 0.3,
    resizeMode: 'cover',
    marginBottom: 10,
  },
});
