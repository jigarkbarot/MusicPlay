import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../theme/colors';
import {files} from '../../assets';
import {ItemSpace, SCREEN_WIDTH} from '../utils/constants';
import TrackPlayer from 'react-native-track-player';
import {changeSong, changeSongToPlayList} from '../store/slices/SongSlice';
import {useDispatch, useSelector} from 'react-redux';
import Player from '../components/Player';

const allSongList = [
  {
    track: {
      url: files.song1, // Load media from the app bundle
      title: 'Song 1',
      artist: 'jack1',
    },
  },
  {
    track: {
      url: files.song2, // Load media from the app bundle
      title: 'Song 2',
      artist: 'jack2',
    },
  },
  {
    track: {
      url: files.song3, // Load media from the app bundle
      title: 'Song 3',
      artist: 'jack3',
    },
  },
  {
    track: {
      url: files.song4, // Load media from the app bundle
      title: 'Song 4',
      artist: 'jack4',
    },
  },
];

const SongLibrary = () => {
  const {playIndex, playList} = useSelector(state => state.songs);
  const dispatch = useDispatch();
  const playSong = async index => {
    try {
      const newPlayList = JSON.parse(JSON.stringify(playList));
      let newIndex = newPlayList.length;
      console.log('newIndex', newIndex);
      try {
        await TrackPlayer.remove(newIndex);
        // await TrackPlayer.removeUpcomingTracks();
      } catch (error) {
      } finally {
        newPlayList.push(allSongList[index].track);
        dispatch(changeSongToPlayList(newPlayList));
        dispatch(changeSong(newIndex));
      }
    } catch (error) {
      console.log('err', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.txtListHeader}>Play your songs</Text>

        <FlatList
          data={allSongList}
          keyExtractor={(item, index) => 'song_' + index}
          contentContainerStyle={styles.flatListContainer}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.songCard}
                onPress={() => playSong(index)}>
                <View style={styles.playView}>
                  <Image source={files.img_play} style={styles.imgPlay} />
                </View>
                <Text style={styles.txtSongName}>{item?.track?.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      {playList.length > 0 ? <Player /> : null}
    </SafeAreaView>
  );
};

export default SongLibrary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pink_ede0f3,
  },
  txtListHeader: {
    color: colors.title_161517,
    fontSize: 25,
    fontWeight: '600',
    marginLeft: ItemSpace,
  },
  songCard: {
    width: (SCREEN_WIDTH - ItemSpace * 3) / 2,
    height: (SCREEN_WIDTH - ItemSpace * 3) / 2,
    marginLeft: ItemSpace,
    marginTop: ItemSpace,
    borderRadius: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imgPlay: {
    height: 25,
    width: 25,
    tintColor: 'pink',
    left: 3,
  },
  txtSongName: {
    marginTop: 20,
    fontWeight: '600',
    fontSize: 16,
  },
  playView: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: colors.pink_ede0f3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
