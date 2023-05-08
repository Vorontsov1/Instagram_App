import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors.ts';



interface IVideoPlayer {
    uri: string;
    paused?: boolean;
}

const VideoPlayer = ({uri, paused}: IVideoPlayer) => {
    const [muted, setMuted] = useState(true);
  
  return (
    <View>
      <Video
        paused={paused}
        muted={muted}
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        repeat
      />
      <Pressable onPress={() => setMuted(v => !v)} style={styles.muteButton}>
        <Ionicons
          name={muted ? 'volume-mute' : 'volume-medium'}
          color="white"
          size={14}
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
