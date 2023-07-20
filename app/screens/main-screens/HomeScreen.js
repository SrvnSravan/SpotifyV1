import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AnimatedButton from '../../components/AnimatedButton';
import TopBar from '../../components/TopBar';
import PlaylistButton from '../../components/PlaylistButton';
import ArtistCard from '../../components/ArtistCard';

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <SafeAreaView>
        <ScrollView>
          <View>
            <TopBar />
          </View>
          <View style={{flexDirection: 'row'}}>
            <AnimatedButton name={'Music'} />
            <AnimatedButton name={'Podcast & Shows'} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <PlaylistButton
              imageSource={require('../../assets/images/love.png')}
              title={'Liked Songs'}
              image={true}
            />
            <PlaylistButton
              imageSource={require('../../assets/images/playlist1.jpg')}
              title={'Maroon 5'}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <PlaylistButton
              imageSource={require('../../assets/images/drake.jpg')}
              title={'Drake'}
              image={false}
            />
            <PlaylistButton
              imageSource={require('../../assets/images/billie.jpg')}
              title={'Billie Eilish'}
            />
          </View>
          <Text style={styles.text}>Your Top Artists</Text>
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal={true}>
              <ArtistCard
                imgSource={require('../../assets/images/mm.jpg')}
                title={'The Weekend Songs'}
              />
              <ArtistCard
                imgSource={require('../../assets/images/billie.jpg')}
                title={'Billie Eilish Songs'}
              />
              <ArtistCard
                imgSource={require('../../assets/images/drake.jpg')}
                title={'Drake Songs'}
              />
              <ArtistCard
                imgSource={require('../../assets/images/playlist1.jpg')}
                title={'Maroon 5  Songs'}
              />
            </ScrollView>
          </View>
          <Text style={styles.text}>Recently Played</Text>
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal={true}>
              <ArtistCard
                imgSource={require('../../assets/images/mm.jpg')}
                title={'The Weekend Songs'}
              />
              <ArtistCard
                imgSource={require('../../assets/images/billie.jpg')}
                title={'Billie Eilish Songs'}
              />
              <ArtistCard
                imgSource={require('../../assets/images/drake.jpg')}
                title={'Drake Songs'}
              />
              <ArtistCard
                imgSource={require('../../assets/images/playlist1.jpg')}
                title={'Maroon 5  Songs'}
              />
            </ScrollView>
          </View>
          <Text style={styles.text}>Most Played</Text>
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal={true}>
              <ArtistCard
                imgSource={require('../../assets/images/mm.jpg')}
                title={'The Weekend Songs'}
              />
              <ArtistCard
                imgSource={require('../../assets/images/billie.jpg')}
                title={'Billie Eilish Songs'}
              />
              <ArtistCard
                imgSource={require('../../assets/images/drake.jpg')}
                title={'Drake Songs'}
              />
              <ArtistCard
                imgSource={require('../../assets/images/playlist1.jpg')}
                title={'Maroon 5  Songs'}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
    marginHorizontal: 10,
    marginTop: 10,
  },
});
