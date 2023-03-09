import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomHeaderLabHistory from '../../../Common/CustomHeaderLabHistory';
import {
  appBlue,
  grey,
  responsiveWidth,
  white,
} from '../../../utils/StylesConstants';
import {ScrollView} from 'react-native-gesture-handler';

const ReportHistoryList = props => {
  const person = props.route.params?.person;

  const data = [
    {
      id: 1,
      test: 'Thyroid Function Test',
      report: 'Report of Radiology',
      date: new Date(),
    },
    {
      id: 2,
      test: 'Medical History',
      report: 'Report of Medical History',
      date: new Date(),
    },
    {
      id: 3,
      test: 'Haemoglobin Test',
      report: 'Report of Pathology Lab',
      date: new Date(),
    },
    {
      id: 4,
      test: 'Thyroid Function Test',
      report: 'Report of Radiology',
      date: new Date(),
    },
    {
      id: 5,
      test: 'Medical History',
      report: 'Report of Medical History',
      date: new Date(),
    },
  ];

  return (
    <View style={{flex: 1}}>
      <CustomHeaderLabHistory title={`Report History:${person}`} />
      <ScrollView>
        <View style={styles.listConatiner}>
          {data.map(item => {
            return (
              <TouchableOpacity style={styles.eachConatiner} key={item.id}>
                <Text style={{color: 'black', fontSize: 16, marginBottom: 5}}>
                  {item.test}
                </Text>
                <Text style={{color: grey, marginBottom: 5}}>
                  {item.report}
                </Text>
                <Text style={{color: appBlue, marginBottom: 5}}>
                  {item.date.toDateString()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ReportHistoryList;

const styles = StyleSheet.create({
  listConatiner: {
    width: responsiveWidth * 0.95,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  eachConatiner: {
    backgroundColor: white,
    borderRadius: 8,
    elevation: 2,
    margin: 10,
    padding: 8,
  },
});
