import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardLayout from '../Screens/Layout/DashboardLayout';
import LabReports from '../Screens/Reports/LabReports/LabReports';
import ViewYourReport from '../Screens/Reports/LabReports/ViewYourReport';
import FirstScreen from '../Screens/Login/FirstScreen';
import OtpVerification from '../Screens/Login/OtpVerification';
import SendOtp from '../Screens/Login/SendOtp';
import Login from '../Screens/Login/Login';
import Profile from '../Screens/Profile/Profile';
import MyAppointments from '../Screens/Appointments/MyAppointments';
import BookAppointments from '../Screens/Appointments/BookAppointments';
import DoctorProfile from '../Screens/Appointments/DoctorProfile';
import AppointmentDetails from '../Screens/Appointments/AppointmentDetails';
import ReportHistory from '../Screens/Reports/LabReports/ReportHistory';
import ReportHistoryList from '../Screens/Reports/LabReports/ReportHistoryList';
import Scan from '../Screens/Scanner/Scan';
import Vitals from '../Screens/Vitals/Vitals';
import NewCarousel from '../Screens/Vitals/NewCarousel';
import Blog from '../Screens/Blog/Blog';
import SearchLabs from '../Screens/LabTests/SearchLabs';
import {appBlue} from '../utils/StylesConstants';
import SampleCollection from '../Screens/LabTests/SampleCollection';
import SelectTest from '../Screens/LabTests/SelectTest';
import ReportDetails from '../Screens/Reports/LabReports/ReportDetails';

const LoginNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="SendOtp" component={SendOtp} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
const Father = 'Father';

const MainStackNavigation = ({props}) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: appBlue,
      }}>
      <Stack.Screen name="LoginNavigation" component={LoginNavigation} />
      <Stack.Screen name="DashboardLayout" component={DashboardLayout} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: true, title: 'My Profile'}}
      />
      <Stack.Screen
        name="LabReports"
        component={LabReports}
        options={{headerShown: true, title: 'Lab Reports'}}
      />
      <Stack.Screen
        name="ViewYourReport"
        component={ViewYourReport}
        options={{headerShown: true, title: 'Your Reports'}}
      />
      <Stack.Screen
        name="MyAppointments"
        component={MyAppointments}
        options={{headerShown: true, title: 'My Appointments'}}
      />
      <Stack.Screen
        name="BookAppointments"
        component={BookAppointments}
        options={{headerShown: true, title: 'Book Appointments'}}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={{headerShown: true, title: 'Doctor Profile'}}
      />
      <Stack.Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
        options={{headerShown: true, title: 'Appointment Details'}}
      />
      <Stack.Screen
        name="ReportHistory"
        component={ReportHistory}
        options={{headerShown: true, title: 'Report History'}}
      />
      <Stack.Screen name="ReportHistoryList" component={ReportHistoryList} />
      <Stack.Screen
        name="Scan"
        component={Scan}
        // options={{headerShown: true, title: 'Scan'}}
      />
      <Stack.Screen
        name="Vitals"
        component={Vitals}
        options={{headerShown: true, title: 'Vitals'}}
      />
      <Stack.Screen
        name="NewCarousel"
        component={NewCarousel}
        options={{headerShown: true, title: 'NewCarousel'}}
      />
      <Stack.Screen
        name="Blog"
        component={Blog}
        options={{headerShown: true, title: 'Blog'}}
      />
      <Stack.Screen
        name="SearchLabs"
        component={SearchLabs}
        options={{headerShown: true, title: 'Search Labs'}}
      />
      <Stack.Screen
        name="SampleCollection"
        component={SampleCollection}
        options={{headerShown: true, title: 'Sample Collection'}}
      />
      <Stack.Screen
        name="SelectTest"
        component={SelectTest}
        options={{headerShown: true, title: 'Select Test'}}
      />
      <Stack.Screen
        name="ReportDetails"
        component={ReportDetails}
        options={{headerShown: true, title: 'Report Details'}}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
