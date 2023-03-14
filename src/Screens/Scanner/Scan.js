// // import React, {useEffect, useState} from 'react';
// // import {StyleSheet, View, Text} from 'react-native';
// // const Scan = () => {
// //   const frameProcessor = useFrameProcessor(frame => {
// //     'worklet';
// //     const isHotdog = detectIsHotdog(frame);
// //     console.log(isHotdog ? 'Hotdog!' : 'Not Hotdog.');
// //   }, []);

// //   return (
// //     <View style={styles.container}>

// //       <Camera {...cameraProps} frameProcessor={frameProcessor} />
// //     </View>
// //   );
// // };

import * as React from 'react';
import {Svg, Rect, Defs, Mask} from 'react-native-svg';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Camera} from 'react-native-vision-camera';
import {useScanBarcodes, BarcodeFormat} from 'vision-camera-code-scanner';
import {
  primaryColor,
  responsiveHeight,
  responsiveWidth,
} from '../../utils/StylesConstants';
import {useCameraDevices} from 'react-native-vision-camera';

import BackBtn from '../../Common/BackBtn';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InAppBrowser from 'react-native-inappbrowser-reborn';

function Scan({navigation}) {
  const [hasPermission, setHasPermission] = React.useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  // React.useEffect(() => {
  //   console.log('hi');
  //   InAppBrowser.open('https://mhealth.lunivacare.com/download', {
  //     // Android Properties

  //     showTitle: false,
  //     toolbarColor: primaryColor,
  //     secondaryToolbarColor: 'black',
  //     navigationBarColor: 'black',
  //     navigationBarDividerColor: 'white',
  //     enableUrlBarHiding: true,
  //     enableDefaultShare: true,
  //     forceCloseOnRedirection: false,
  //     animations: {
  //       startEnter: 'slide_in_right',
  //       startExit: 'slide_out_left',
  //       endEnter: 'slide_in_left',
  //       endExit: 'slide_out_right',
  //     },
  //     headers: {
  //       'my-custom-header': 'my custom header value',
  //     },
  //   });
  // }, []);
  React.useEffect(() => {
    console.log(barcodes[0]?.displayValue);
    if (barcodes[0]?.displayValue) {
      InAppBrowser.open(barcodes[0]?.displayValue, {
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
      }).catch(err => console.log(err));
    }
  }, [barcodes]);

  // Alternatively you can use the underlying function:
  //
  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet';
  //   const detectedBarcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE], { checkInverted: true });
  //   runOnJS(setBarcodes)(detectedBarcodes);
  // }, []);

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  return (
    device != null &&
    hasPermission && (
      <>
        <View
          style={{
            color: 'red',
            paddingBottom: 150,
            backgroundColor: 'orange',
            borderBottomLeftRadius: 100,
            borderBottomRightRadius: 100,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              style={{marginLeft: 20, marginTop: 10}}
              name="arrow-back"
              size={30}
              color="white"
            />
          </TouchableOpacity>
          <Image
            style={{
              height: 40,
              width: responsiveWidth * 0.5,
              alignSelf: 'center',
              position: 'relative',
              // bottom: -30,
            }}
            source={require('../../Assets/Images/logo.webp')}
            resizeMode={'cover'}
          />
        </View>
        <Camera
          style={{
            width: responsiveWidth * 0.9,
            height: responsiveHeight * 0.85,
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'absolute',
            bottom: 20,
            left: '5%',
          }}
          device={device}
          isActive={true}
          frameProcessor={frameProcessor}
          frameProcessorFps={5}
        />

        <Svg
          style={{
            width: responsiveWidth * 0.9,
            height: responsiveHeight * 0.85,
            marginLeft: 'auto',
            marginRight: 'auto',

            position: 'absolute',
            bottom: 20,
            left: '5%',
          }}>
          <Defs>
            <Mask
              id="mask"
              x="0"
              y="0"
              width={responsiveWidth * 0.9}
              height={responsiveHeight * 0.86}>
              <Rect
                height={responsiveHeight * 0.86}
                width={responsiveWidth * 0.9}
                fill="white"
              />
              <Rect x={50} y={121} height="252" width="250" fill="black" />
            </Mask>
          </Defs>
          <Rect
            width={responsiveWidth * 0.9}
            height={responsiveHeight * 0.86}
            fill="rgba(0,0,0,0.6)"
            mask="url(#mask)"
          />
          <Rect
            x={50}
            y={120}
            height="255"
            width="250"
            strokeWidth={2}
            stroke={'white'}
            fill="rgba(0,0,0,0.1)"
          />

          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              marginTop: 70,
            }}>
            Scan QR to View Your Reports
          </Text>
          {/* {barcodes.map((barcode, idx) => (
            <Text key={idx} style={styles.barcodeTextURL}>
              {barcode.displayValue}
            </Text>
          ))} */}
        </Svg>
      </>
    )
  );
}
export default Scan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  qrData: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    zIndex: 2,
  },
  rnCamer: {
    flex: 1,
    position: 'relative',
  },
  barcodeTextURL: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

// import {Camera} from 'react-native-vision-camera';
// import {Linking} from 'react-native';
// import {Text, View} from 'react-native';
// import React, {useEffect, useCallback} from 'react';

// const Scan = () => {
//   const devices = useCameraDevices();
//   const device = devices.back;

//   useEffect(() => {
//     requestCameraPermission();
//   }, []);

//   const requestCameraPermission = useCallback(async () => {
//     const permission = await Camera.requestCameraPermission();
//     if (permission === 'denied') await Linking.openSettings();
//   }, []);

//   const renderCamera = () => {
//     if (device === null) {
//       <View style={{flex: 1}}></View>;
//     } else {
//       return (
//         <View style={{flex: 1}}>
//           <Camera
//             style={{flex: 1}}
//             device={device}
//             isActive={true}
//             enableZoomGesture
//           />
//         </View>
//       );
//     }
//   };

//   return <>{renderCamera()}</>;
// };

// export default Scan;
