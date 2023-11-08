import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../theme/colors';
import {files} from '../../assets';
import {ItemSpace, SCREEN_WIDTH} from '../utils/constants';
import MyButton from '../components/MyButton';
import TrackPlayer from 'react-native-track-player';

const HomeScreen = props => {
  useEffect(() => {
    (async function () {
      await TrackPlayer.setupPlayer();
    })();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.meditationView}>
          <Image
            source={files.img_meditation}
            style={styles.imgMeditation}
            resizeMode={'cover'}
          />
        </View>
      </View>
      <View style={styles.centerView}>
        <Text style={styles.txtTitle}>{'Time to meditate'}</Text>
        <Text style={styles.txtSubTitle}>
          {'Take breath and easy your hand'}
        </Text>
      </View>
      <View style={styles.bottomView}>
        <MyButton
          onPress={() => props.navigation.navigate('SongLibrary')}
          buttonText={'Lets get Started'}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pink_ede0f3,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topView: {
    flex: 2,
  },
  centerView: {
    flex: 1,
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 1,
  },
  meditationView: {
    width: SCREEN_WIDTH - ItemSpace * 2,
    height: SCREEN_WIDTH - ItemSpace * 2,
    backgroundColor: '#fffbf4',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  imgMeditation: {
    height: '80%',
    width: '80%',
  },
  txtTitle: {
    color: colors.title_161517,
    fontWeight: '600',
    fontSize: 18,
  },
  txtSubTitle: {
    color: colors.sub_title_161517,
    fontWeight: '400',
    fontSize: 16,
  },
});
