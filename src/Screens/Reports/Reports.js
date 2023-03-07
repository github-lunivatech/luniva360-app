import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';

const WIDTH = Dimensions.get('window').width;

const Reports = () => {
  const navigation = useNavigation();

  const data = [
    {
      name: 'Lab Reports',
      id: 1,
      nav: 'LabReports',

      image: require('../../Assets/Images/labReports.jpg'),
    },
    {
      name: 'Radiology',
      nav: 'LabReports',
      id: 2,

      image: require('../../Assets/Images/radiology.jpg'),
    },
    {
      name: 'Medical Report',
      nav: 'LabReports',
      id: 3,

      image: require('../../Assets/Images/medicalReport.jpg'),
    },
    {
      name: 'Prescription',
      nav: 'Prescription',
      id: 4,

      image: require('../../Assets/Images/prescription.jpg'),
    },
    {
      name: 'Medical Bill',
      nav: 'MedicalBill',
      id: 5,

      image: require('../../Assets/Images/medicalBills.jpg'),
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
              <ImageBackground
                source={item.image}
                imageStyle={{
                  borderRadius: 10,
                }}
                resizeMode="cover"
                style={{height: 120}}>
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
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Reports;
