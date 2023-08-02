import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PlaylistButton from '../components/PlaylistButton';
import SongsListButton from '../components/SongsListButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import SongsListTopBar from '../components/SongsListTopBar';

const SongsListScreen = () => {
  return (
    <ScrollView>
      <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
        <SafeAreaView>
          <SongsListTopBar />

          <SongsListButton
            imageSource={require('../assets/images/billie.jpg')}
            title={'Everything I want'}
            subTitle={'Billie Eilish'}
          />
          <SongsListButton
            imageSource={require('../assets/images/chainsmokers.jpg')}
            title={'Closer'}
            subTitle={'Chainsmokers'}
          />
          <SongsListButton
            imageSource={require('../assets/images/drake.jpg')}
            title={"God's plan"}
            subTitle={'Drake'}
          />
          <SongsListButton
            imageSource={require('../assets/images/ed.jpg')}
            title={'Shape of you'}
            subTitle={'Ed Sheeran'}
          />
          <SongsListButton
            imageSource={require('../assets/images/JB.jpeg')}
            title={'Company'}
            subTitle={'Justin Bieber'}
          />
          <SongsListButton
            imageSource={require('../assets/images/mm.jpg')}
            title={'Starboy'}
            subTitle={'The Weekend'}
          />
          <SongsListButton
            imageSource={require('../assets/images/playlist1.jpg')}
            title={'Payphone'}
            subTitle={'Maroon 5'}
          />
        </SafeAreaView>
      </LinearGradient>
    </ScrollView>
  );
};

export default SongsListScreen;

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});
