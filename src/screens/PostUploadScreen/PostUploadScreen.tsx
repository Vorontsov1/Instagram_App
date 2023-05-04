import {useEffect, useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import colors from '../../theme/colors.ts';
import { Camera } from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PostUploadScreen = () => {
const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);

    useEffect(() => {
        const getPermissions = async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const microphonePermission = await Camera.requestMicrophonePermissionsAsync();
            setHasPermissions(cameraPermission.status === 'granted' && microphonePermission.status === 'granted');
        };
        getPermissions();
    }, []);
    
    if (hasPermissions === null) {
        return <Text style={{marginTop: 50}}>Loading...</Text>
    }
    if (hasPermissions === false) {
        return <Text style={{marginTop: 50}}>No access to camera</Text>;
    } 

  return (
    <SafeAreaView style={styles.page}>
      <Camera style={styles.camera} />
      <View style={[styles.buttonContainer, {top: 45}]}>
        <MaterialIcons name="close" size={30} color={colors.white} />
        <MaterialIcons name="flash-off" size={30} color={colors.white} />
        <MaterialIcons name="settings" size={30} color={colors.white} />
      </View>
      <View style={[styles.buttonContainer, {bottom: 35}]}>
        <MaterialIcons name="photo-library" size={30} color={colors.white} />
        <View style={styles.circle} />
        <MaterialIcons name="flip-camera-ios" size={30} color={colors.white} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
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
        alignItems: 'center'
  },
});

export default PostUploadScreen;
