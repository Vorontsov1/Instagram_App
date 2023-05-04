import {useEffect, useState, useRef} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import colors from '../../theme/colors.ts';
import {Camera} from 'expo-camera';
import {FlashMode} from 'expo-camera/build/Camera.types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const flashModeToIcon = {
    [FlashMode.off]: 'flash-off',
    [FlashMode.on]: 'flash-on',
    [FlashMode.auto]: 'flash-auto',
    [FlashMode.torch]: 'highlight',
};

const PostUploadScreen = () => {
  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(FlashMode.off);
    const [isCameraReady, setIsCameraReady] = useState(false);

const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    const getPermissions = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();

      setHasPermissions(
        cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted',
      );
    };
    getPermissions();
  }, []);

  const flipFlash = () => {
    const currentIndex = flashModes.indexOf(flash);
      const nextIndex = currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1; 
      setFlash(flashModes[nextIndex]);
  };
 
    const takePicture = async () => { 
        const result = await cameraRef.current?.takePictureAsync();
        console.log(result);
     }

  const flipCameraType = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    );
  };
  if (hasPermissions === null) {
    return <Text style={{marginTop: 50}}>Loading...</Text>;
  }
  if (hasPermissions === false) {
    return <Text style={{marginTop: 50}}>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.page}>
          <Camera
              ref={cameraRef}
        style={styles.camera}
        type={cameraType}
        ratio="4:3"
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
      />

      <View style={[styles.buttonContainer, {top: 45}]}>
        <MaterialIcons name="close" size={30} color={colors.white} />

        <Pressable onPress={flipFlash}>
          <MaterialIcons
            name={flashModeToIcon[flash]}
            size={30}
            color={colors.white}
          />
        </Pressable>

        <MaterialIcons name="settings" size={30} color={colors.white} />
      </View>
      <View style={[styles.buttonContainer, {bottom: 35}]}>
        <MaterialIcons name="photo-library" size={30} color={colors.white} />
        {isCameraReady && (
          <Pressable onPress={takePicture}>
            <View style={styles.circle} />
          </Pressable>
        )}
        <Pressable onPress={flipCameraType}>
          <MaterialIcons
            name="flip-camera-ios"
            size={30}
            color={colors.white}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.orange,
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4.4,
  },
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  circle: {
    width: 75,
    aspectRatio: 1,
    backgroundColor: colors.white,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostUploadScreen;
