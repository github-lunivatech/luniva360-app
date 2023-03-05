import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LabReportsHospitals from './LabReportsHospitals';
import {useNavigation} from '@react-navigation/native';
import {primaryColor} from '../../../utils/StylesConstants';

const WIDTH = Dimensions.get('window').width;

const LabReports = () => {
  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      title: 'View your report',
      img: require('../../../Assets/Images/viewreport.png'),
      desc: 'Scanning QR code/ Credentials Input',
      nav: 'ViewYourReport',
    },
    {
      id: 2,
      title: 'View Report History',
      img: require('../../../Assets/Images/reportHistory.png'),
      desc: 'View Report History',
      nav: 'ReportHistory',
    },
  ];

  return (
    <>
      <View>
        {data.map(item => {
          return (
            <View key={item.id}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  // borderColor: "black",
                  // borderWidth: 2,
                  padding: 20,
                }}
                onPress={() => navigation.navigate(item.nav)}>
                <Image
                  source={item.img}
                  style={{height: 55, width: 55, marginRight: 10}}
                />
                <View style={{margin: 5}}>
                  <Text style={{fontSize: 16, color: 'black'}}>
                    {item.title}
                  </Text>
                  <Text style={{color: 'grey', fontSize: 10, marginLeft: 5}}>
                    {item.desc}
                  </Text>
                </View>

                <Icon
                  name={'chevron-right'}
                  size={40}
                  style={{
                    alignSelf: 'center',
                    position: 'absolute',
                    right: 20,
                    color: primaryColor,
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  width: WIDTH,
                  backgroundColor: 'grey',
                  //   marginLeft: 50,
                  height: 0.4,
                }}></View>
            </View>
          );
        })}
      </View>
      <LabReportsHospitals />
    </>
  );
};

export default LabReports;
