import {useEffect, useState} from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import {Camera} from 'expo-camera';

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
    <SafeAreaView>
      <Text>Post Upload Screen</Text>
    </SafeAreaView>
  );
}

export default PostUploadScreen;
