import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Camera, useFrameProcessor} from 'react-native-vision-camera';
import {Svg, Rect} from 'react-native-svg';
import QRCodeScanner from 'react-native-camera-kit';
const Scan = () => {
  const [camera, setCamera] = useState(null);
  const [qrData, setQRData] = useState(null);

  const frameProcessor = useFrameProcessor(async frame => {
    // Use QRCodeScanner to detect QR codes in the camera frame
    const result = await QRCodeScanner.detectQRCode(frame);

    if (result.length > 0) {
      // If QR code is detected, set the data to the state
      setQRData(result[0].data);
    }
  });

  useEffect(() => {
    // Start the camera preview
    Camera.start();
    return () => {
      // Stop the camera preview
      Camera.stop();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        ref={setCamera}
        frameProcessor={frameProcessor}
      />
      {qrData && (
        <View style={styles.qrData}>
          <Text>{qrData}</Text>
        </View>
      )}
      <Svg style={StyleSheet.absoluteFill}>
        <Rect
          x={100}
          y={100}
          width={200}
          height={200}
          stroke="red"
          strokeWidth={2}
          fill="none"
        />
      </Svg>
    </View>
  );
};
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
});
