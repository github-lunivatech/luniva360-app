import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {
  Select,
  CheckIcon,
  Box,
  FormControl,
  Input,
  Checkbox,
  TextArea,
  Modal,
} from 'native-base';
import React, {useState} from 'react';
import {responsiveWidth} from '../../utils/StylesConstants';
import CommonBtn from '../../Common/CommonBtn';

const Vitals = () => {
  const [service, setService] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAvoidingView style={styles.formConatainer}>
        <Box maxW="800" style={styles.box}>
          <FormControl.Label style={styles.label}>Patient:</FormControl.Label>
          <View style={styles.content}>
            <Select
              variant="outline"
              selectedValue={service}
              minWidth="100"
              accessibilityLabel="Choose Patient"
              placeholder="Choose Patient"
              onValueChange={itemValue => console.log(itemValue)}>
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
          </View>
        </Box>
        <Box maxW="400" style={styles.box}>
          <FormControl.Label style={styles.label}>Name:</FormControl.Label>
          <View style={styles.content}>
            <Input placeholder="Name" w="100%" style={styles.entryBox} />
          </View>
        </Box>
        <Box maxW="300" style={[styles.box, {justifyContent: 'flex-start'}]}>
          <FormControl.Label style={styles.label}>
            Blood Pressure:
          </FormControl.Label>
          <View
            style={[
              styles.content,
              {flexDirection: 'row', justifyContent: 'space-between'},
            ]}>
            <Input
              placeholder="Sys"
              w="45%"
              style={styles.entryBox}
              keyboardType="numeric"></Input>
            <Input
              placeholder="Dys"
              w="45%"
              style={styles.entryBox}
              keyboardType="numeric"></Input>
          </View>
        </Box>
        <Box maxW="400" style={styles.box}>
          <FormControl.Label style={styles.label}>
            Oxygen Level:
          </FormControl.Label>
          <View style={styles.content}>
            <Input
              placeholder=" Oxygen Level"
              w="100%"
              style={styles.entryBox}
            />
          </View>
        </Box>
        <Box maxW="400" style={styles.box}>
          <FormControl.Label style={styles.label}>
            Temperature:
          </FormControl.Label>
          <View style={styles.content}>
            <Input placeholder="Temperature" w="100%" style={styles.entryBox} />
          </View>
        </Box>
        <Box maxW="400" style={styles.box}>
          <FormControl.Label style={styles.label}>
            Pulse Rate:
          </FormControl.Label>
          <View style={styles.content}>
            <Input placeholder=" Pulse Rate" w="100%" style={styles.entryBox} />
          </View>
        </Box>
        <Box maxW="400" style={styles.box}>
          <FormControl.Label style={styles.label}>
            Respiration Rate:
          </FormControl.Label>
          <View style={styles.content}>
            <Input
              //   mx="3"
              placeholder=" Respiration Rate"
              w="100%"
              style={styles.entryBox}
            />
          </View>
        </Box>
        <Box maxW="400" style={styles.box}>
          <FormControl.Label style={[styles.label, {alignSelf: 'flex-start'}]}>
            Clinical Symptoms:
          </FormControl.Label>
          <View style={styles.content}>
            <TextArea
              h={20}
              placeholder="Clinical Symptoms"
              w="100%"
              maxW="300"
            />
          </View>
        </Box>
      </KeyboardAvoidingView>
      <CommonBtn title={'Submit'} />
    </View>
  );
};

export default Vitals;

const styles = StyleSheet.create({
  formConatainer: {
    width: responsiveWidth * 0.95,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },
  label: {
    alignSelf: 'center',
    width: responsiveWidth * 0.25,
  },
  content: {
    width: responsiveWidth * 0.7,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
