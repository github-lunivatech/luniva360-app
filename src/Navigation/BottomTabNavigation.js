import {Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../Screens/Dashboard/Dashboard';
import Reports from '../Screens/Reports/Reports';
import Appointments from '../Screens/Appointments/Appointments';
import Profile from '../Screens/Profile/Profile';
import {black, grey, primaryColor} from '../utils/StylesConstants';
import BookAppointments from '../Screens/Appointments/BookAppointments';
import Scan from '../Screens/Scanner/Scan';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Reports') {
            iconName = 'reader';
          } else if (route.name === 'Appointment') {
            iconName = 'md-today';
          } else if (route.name === 'Profile') {
            return (
              <>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekVjnKVnxqRLrzfkM8O1rk9GVHrrHLHd5jQ&usqp=CAU',
                  }}
                  resizeMode="contain"
                  style={[
                    {
                      width: 33,
                      height: 33,
                      backgroundColor: '#b7b9b8',
                      borderRadius: 30,
                    },
                  ]}
                />
                <Text
                  style={{
                    color: focused ? primaryColor : grey,
                    fontSize: 12,
                    marginBottom: 8,
                  }}>
                  {route.name}
                </Text>
              </>
            );
          }

          // You can return any component that you like here!
          return (
            <>
              <Ionicons name={iconName} size={size} color={color} />
              <Text
                style={{
                  color: focused ? primaryColor : grey,
                  fontSize: 12,
                  marginBottom: 8,
                }}>
                {route.name}
              </Text>
            </>
          );
        },
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveTintColor: grey,
        headerShown: false,
        tabBarLabelStyle: {fontSize: 12, paddingBottom: 5},
        tabBarStyle: {padding: 10, height: 60},
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{tabBarBadge: 3}}
      />
      <Tab.Screen name="Reports" component={Reports} />
      {/* <Tab.Screen
        name="Scan"
        component={QrCodeScanner}
        options={{ tabBarStyle: { display: "none" } }}
      /> */}
      <Tab.Screen name="Appointment" component={BookAppointments} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
