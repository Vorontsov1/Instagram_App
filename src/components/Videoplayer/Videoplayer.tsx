import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors.ts';



interface IVideoPlayer {
    uri: string;
    paused: boolean;
}

const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
    const [muted, setMuted] = useState(true);
    // const onProgress = (data: any) => {
    //      console.log('Seekable duration: ', data.seekableDuration);
    //  }

  return (
    <View>
      <Video
        resizeMode="cover"
        source={{uri}}
        style={styles.video}
        repeat
        muted={muted}
        paused={paused}
        // onProgress={onProgress}
      />
      <Pressable style={styles.muteButton}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color="white"
          onPress={() => setMuted(v => !v)}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  muted: {},
    muteButton: {
        backgroundColor: colors.black,
        padding: 5,
        position: 'absolute',
        bottom: 5,
        right: 5,
        borderRadius: 50,
  },
});

export default VideoPlayer;
