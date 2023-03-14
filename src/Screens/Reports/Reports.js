import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

const WIDTH = Dimensions.get('window').width;

const Reports = () => {
  const navigation = useNavigation();

  const data = [
    {
      name: 'Lab Reports',
      id: 1,
      nav: 'LabReports',

      image:
        'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Radiology',
      nav: 'LabReports',
      id: 2,

      image:
        'https://images.pexels.com/photos/7089022/pexels-photo-7089022.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Medical Report',
      nav: 'LabReports',
      id: 3,

      image:
        'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Prescription',
      nav: 'Prescription',
      id: 4,

      image:
        'https://images.pexels.com/photos/3873169/pexels-photo-3873169.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Medical Bill',
      nav: 'MedicalBill',
      id: 5,

      image:
        'https://www.gannett-cdn.com/-mm-/1e13d64b87a0e5d73e18fdea2ef9545c6bf86634/c=0-59-2118-1256/local/-/media/2017/04/24/Phoenix/Phoenix/636286706793942165-GettyImages-598249418.jpg',
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#f1f1f1'}}>
      {/* <Text style={{ marginLeft: 24, marginTop: 20, fontSize: 30 }}>
        Reports
      </Text> */}
      <View
        style={{
          // marginTop: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          width: WIDTH * 0.9,
          marginRight: 'auto',
          marginLeft: 'auto',
        }}>
        {data.map(item => {
          return (
            <TouchableOpacity
              style={{
                // backgroundColor: "white",
                // padding: 30,

                width: WIDTH * 0.43,
                marginTop: 40,
              }}
              onPress={() => navigation.navigate(item.nav)}
              key={item.id}>
              <FastImage
                source={{
                  uri: item.image,
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
                style={{height: 120, borderRadius: 10}}
              />
              {/* <BlurView
                  blurType="light"
                  blurAmount={100}
                  reducedTransparencyFallbackColor="white"
                  style={{
                    position: 'absolute',
                    top: 90,
                    // left: 25,
                    width: WIDTH * 0.4,
                    height: 30,
                    borderBottomEndRadius: 15,
                    borderBottomLeftRadius: 15,
                  }}></BlurView> */}
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                  color: '#205072',
                  fontWeight: '600',
                  position: 'absolute',
                  backgroundColor: 'rgba(245, 235, 215, 0.9)',
                  borderBottomRightRadius: 9,
                  borderBottomLeftRadius: 9,
                  paddingTop: 8,

                  width: '100%',

                  bottom: 0,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Reports;
