import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import {primaryColor} from '../../../utils/StylesConstants';
// import {openBrowserAsync} from 'expo-web-browser';

const URL =
  'https://lunivacare.crystaldiagnosticlab.com/crystal/Carelab/Report/Account/Login';
const WIDTH = Dimensions.get('window').width;
const LabReportsHospitals = () => {
  const data = [
    {
      id: 1,
      name: 'NRL',
      img: require('../../../Assets/Images/nrl.jpg'),
      url: 'http://reports.samyakdiagnostic.com/ONLINEREPORTS/forms/fm_patient_report.aspx',
    },
    {
      id: 2,
      name: 'Samjhana Laboratory',
      img: require('../../../Assets/Images/samjhana1.png'),
      url: 'http://reports.samyakdiagnostic.com/ONLINEREPORTS/forms/fm_patient_report.aspx',
    },
    {
      id: 3,
      name: 'Crystal Diagonistic',
      img: require('../../../Assets/Images/crystal.jpg'),
      url: 'https://lunivacare.crystaldiagnosticlab.com/crystal/Carelab/Report/Account/Login',
    },
    {
      id: 4,
      name: 'ManMohan Memorial',
      img: require('../../../Assets/Images/manmohan.jpg'),
      url: 'http://reports.samyakdiagnostic.com/ONLINEREPORTS/forms/fm_patient_report.aspx',
    },
    {
      id: 5,
      name: 'Crystal Diagonistic',
      img: require('../../../Assets/Images/crystal.jpg'),
      url: 'http://103.94.159.220:81/',
    },
    {
      id: 6,
      name: 'Samjhana Laboratory',
      img: require('../../../Assets/Images/samjhana1.png'),
      url: 'https://report.k-lab.com.np/',
    },
  ];

  return (
    <View
      style={{
        marginTop: 15,
        width: WIDTH * 0.9,
        marginRight: 'auto',
        marginLeft: 'auto',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          marginBottom: 10,
          //   marginLeft: 5,
          color: 'black',
        }}>
        Labs
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {data.map(item => {
          return (
            <View
              key={item.id}
              style={{
                width: WIDTH * 0.275,
                marginBottom: 20,
              }}>
              <TouchableOpacity
                style={{
                  padding: 20,
                  paddingTop: 15,
                  paddingBottom: 15,
                  borderRadius: 8,
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 2,
                }}
                onPress={() => {
                  InAppBrowser.open(item.url, {
                    // Android Properties

                    showTitle: false,
                    toolbarColor: primaryColor,
                    secondaryToolbarColor: 'black',
                    navigationBarColor: 'black',
                    navigationBarDividerColor: 'white',
                    enableUrlBarHiding: true,
                    enableDefaultShare: true,
                    forceCloseOnRedirection: false,
                    animations: {
                      startEnter: 'slide_in_right',
                      startExit: 'slide_out_left',
                      endEnter: 'slide_in_left',
                      endExit: 'slide_out_right',
                    },
                    headers: {
                      'my-custom-header': 'my custom header value',
                    },
                  });
                }}>
                <Image
                  source={item.img}
                  style={{height: 70, width: 70}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 8,
                  color: 'black',
                  fontSize: 11,
                }}>
                {item.name}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default LabReportsHospitals;
