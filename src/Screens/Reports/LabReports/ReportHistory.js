import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {appBlue, responsiveWidth} from '../../../utils/StylesConstants';
import CommonBtn from '../../../Common/CommonBtn';

const ReportHistory = ({navigation}) => {
  const data = [
    {
      id: 1,
      title: 'Record of Myself',
      reportsNumber: 5,
      image: require('../../../Assets/Icons/me.png'),
    },
    {
      id: 2,
      title: 'Record of Father',
      reportsNumber: 5,
      image: require('../../../Assets/Icons/dad.png'),
    },
    {
      id: 3,
      title: 'Record of Mother',
      reportsNumber: 5,
      image: require('../../../Assets/Icons/mother.png'),
    },
    {
      id: 4,
      title: 'Record of Grand Father',
      reportsNumber: 5,
      image: require('../../../Assets/Icons/grandfather.png'),
    },
    {
      id: 5,
      title: 'Record of Grand Mother',
      reportsNumber: 5,
      image: require('../../../Assets/Icons/grandmother.png'),
    },
    {
      id: 6,
      title: 'Record of Daughter',
      reportsNumber: 5,
      image: require('../../../Assets/Icons/daughter.png'),
    },
  ];

  return (
    <View style={styles.mainContainer}>
      {data.map(item => {
        return (
          <TouchableOpacity
            style={styles.eachContainer}
            key={item.id}
            onPress={() =>
              navigation.navigate('ReportHistoryList', {
                person: item.title.split('of')[1],
              })
            }>
            <Image source={item.image} style={styles.imageStyle} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.records}>{item.reportsNumber} Reports</Text>
          </TouchableOpacity>
        );
      })}
      <View style={{marginTop: 30}}>
        <CommonBtn title={'Upload Report'} />
      </View>
    </View>
  );
};

export default ReportHistory;

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 12,
    width: responsiveWidth * 0.35,
    textAlign: 'center',
    marginTop: 6,
  },
  records: {
    color: appBlue,
  },
  imageStyle: {
    width: 80,
    height: 80,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    width: responsiveWidth * 0.95,
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
  },
  eachContainer: {
    width: responsiveWidth * 0.42,
    backgroundColor: 'white',
    flexDirection: 'column',
    margin: 10,
    alignItems: 'center',
    padding: 5,
    paddingVertical: 12,
    borderRadius: 8,
    elevation: 2,
  },
});
