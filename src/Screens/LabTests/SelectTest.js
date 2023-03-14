import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  appBlue,
  primaryColor,
  responsiveWidth,
} from '../../utils/StylesConstants';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SelectTest = () => {
  const data = [
    {id: 1, name: 'Complete blood count', price: 850},
    {id: 1, name: 'Complete blood count', price: 850},
    {id: 1, name: 'Complete blood count', price: 850},
    {id: 1, name: 'Complete blood count', price: 850},
    {id: 1, name: 'Complete blood count', price: 850},
    {id: 1, name: 'Complete blood count', price: 850},
    {id: 1, name: 'Complete blood count', price: 850},
    {id: 1, name: 'Complete blood count', price: 850},
    {id: 1, name: 'Complete blood count', price: 850},
    {id: 1, name: 'Complete blood count', price: 850},
    {id: 1, name: 'Complete blood count', price: 850},
    {id: 1, name: 'Complete blood count', price: 850},
    {id: 1, name: 'Complete blood count', price: 850},
    {id: 1, name: 'Complete blood count', price: 850},
  ];

  return (
    <View style={{flex: 1}}>
      <View
        style={[
          {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 10,
            marginTop: 20,
          },
          styles.inputSection,
        ]}>
        <Icon
          name="search"
          size={22}
          color={primaryColor}
          style={[styles.inputIcon]}
        />
        <TextInput
          style={styles.input}
          placeholder="Find Test You Want To Perform"
          placeholderTextColor="lightgrey"
        />
      </View>
      <View style={{flexDirection: 'column'}}>
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              color: appBlue,
              padding: 10,
              paddingHorizontal: 25,
              fontWeight: '500',
            }}>
            All Test Type
          </Text>
          {data.map(item => {
            return (
              <View style={styles.eachContainer} key={item.id}>
                <View style={{flexDirection: 'column', marginLeft: 10}}>
                  <Text
                    style={{color: 'black', fontSize: 16, fontWeight: '400'}}>
                    {item.name}
                  </Text>
                  <Text style={{color: primaryColor}}>Rs.{item.price}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    borderColor: appBlue,
                    borderWidth: 1.5,
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    justifyContent: 'center',
                    height: 30,
                  }}>
                  <Text
                    style={{
                      color: appBlue,
                      textAlign: 'center',
                      alignSelf: 'center',
                    }}>
                    Select
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default SelectTest;

const styles = StyleSheet.create({
  inputSection: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: 'black',

    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 1,
    backgroundColor: 'white',
    width: responsiveWidth * 0.95,
    marginBottom: 20,
    borderRadius: 8,
  },
  inputIcon: {
    padding: 14,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
  },
  input: {
    flex: 1,
    width: responsiveWidth * 0.95,
    borderRadius: 6,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    borderRadius: 8,
  },
  eachContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth * 0.95,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 8,
    padding: 10,
  },
});
