import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../theme/colors';
import {useSelector, useDispatch} from 'react-redux';
import TrackPlayer, {Capability} from 'react-native-track-player';
import {SCREEN_WIDTH} from '../utils/constants';
import {files} from '../../assets';

const Player = () => {
  const {playIndex, playList} = useSelector(state => state.songs);

  useEffect(() => {
    TrackPlayer.updateOptions({
      // Media controls capabilities
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],

      // Capabilities that will show up when the notification is in the compact form on Android
      compactCapabilities: [Capability.Play, Capability.Pause],

      // Icons for the notification on Android (if you don't like the default ones)
      playIcon: files.img_play,
      pauseIcon: files.img_pause,
      stopIcon: files.img_stop,
      previousIcon: files.img_previous,
      nextIcon: files.img_next,
      icon: files.img_next,
    });
  }, []);
  useEffect(() => {
    console.log(playIndex);
    console.log(playList);
    changeSong();
  }, [playIndex, playList]);

  const changeSong = async () => {
    await TrackPlayer.add(playList);
    try {
      if (playIndex != null) {
        const indexes = playList.map((item, index) => index);
        await TrackPlayer.remove(indexes);
        await TrackPlayer.removeUpcomingTracks();
      }
    } catch (error) {
    } finally {
      TrackPlayer.play();
    }
  };

  console.log('playList[playIndex]', playList[playIndex]);

  return (
    <View
      style={{
        height: 140,
        width: SCREEN_WIDTH,
        position: 'absolute',
        zIndex: 10,
        backgroundColor: colors.white,
        bottom: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
      }}>
      {playList?.length > 0 && (
        <Text
          style={{fontSize: 17, fontWeight: '600', color: colors.title_161517}}>
          {playList[playIndex]?.title}
        </Text>
      )}
      {playList?.length > 0 && (
        <View style={styles.playButton}>
          <Image source={files.img_play} style={styles.imgPlay} />
        </View>
      )}
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  playButton: {
    height: 60,
    width: 60,
    borderRadius: 2,
    backgroundColor: colors.pink_ede0f3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgPlay: {
    height: 25,
    width: 25,
    tintColor: 'pink',
    left: 3,
  },
});
