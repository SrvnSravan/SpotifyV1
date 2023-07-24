import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import TopBars from '../../components/TopBars';
import AnimatedButton from '../../components/AnimatedButton';
import PlaylistTiles from '../../components/PlaylistTiles';

const LibraryScreen = () => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <TopBars />
      <View style={styles.blank}></View>
      <AnimatedButton name={'Playlists'} />
      <ScrollView>
      <PlaylistTiles
        imageSource={require('../../assets/images/drake.jpg')}
        title={'Drake songs'}
        subTitle={'Playlist . 192 songs'}
      />
      <PlaylistTiles
        imageSource={require('../../assets/images/billie.jpg')}
        title={'Billie Eilish songs'}
        subTitle={'Playlist . 62 songs'}
      />
      <PlaylistTiles
        imageSource={require('../../assets/images/mm.jpg')}
        title={'The Weekend songs'}
        subTitle={'Playlist . 92 songs'}
      />
      </ScrollView>
    </LinearGradient>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  blank: {
    height: 20,
  },
});
