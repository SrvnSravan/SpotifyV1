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

const HomeScreen = ({navigation}) => {
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
              onPress={()=>{navigation.navigate('LikedSongsScreen')}}
            />
            <PlaylistButton
              imageSource={require('../../assets/images/playlist1.jpg')}
              title={'Maroon 5'}
              onPress={()=>{navigation.navigate('LikedSongsScreen')}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <PlaylistButton
              imageSource={require('../../assets/images/drake.jpg')}
              title={'Drake'}
              image={false}
              onPress={()=>{navigation.navigate('LikedSongsScreen')}}
            />
            <PlaylistButton
              imageSource={require('../../assets/images/billie.jpg')}
              title={'Billie Eilish'}
              onPress={()=>{navigation.navigate('LikedSongsScreen')}}
            />
          </View>
          <Text style={styles.text}>Your Top Artists</Text>
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal={true}>
              <ArtistCard
                imgSource={require('../../assets/images/mm.jpg')}
                title={'The Weekend Songs'}
                onPress={()=>{navigation.navigate('LikedSongsScreen')}}
              />
              <ArtistCard
                imgSource={require('../../assets/images/billie.jpg')}
                title={'Billie Eilish Songs'}
                onPress={()=>{navigation.navigate('LikedSongsScreen')}}
              />
              <ArtistCard
                imgSource={require('../../assets/images/drake.jpg')}
                title={'Drake Songs'}
                onPress={()=>{navigation.navigate('LikedSongsScreen')}}
              />
              <ArtistCard
                imgSource={require('../../assets/images/playlist1.jpg')}
                title={'Maroon 5  Songs'}
                onPress={()=>{navigation.navigate('LikedSongsScreen')}}
              />
            </ScrollView>
          </View>
          <Text style={styles.text}>Recently Played</Text>
          <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal={true}>
              <ArtistCard
                imgSource={require('../../assets/images/ed.jpg')}
                title={'Ed Sheeran Songs'}
              />
              <ArtistCard
                imgSource={require('../../assets/images/JB.jpeg')}
                title={'Justin Bieber Songs'}
              />
              <ArtistCard
                imgSource={require('../../assets/images/chainsmokers.jpg')}
                title={'ChainSmokers Songs'}
              />
              <ArtistCard
                imgSource={require('../../assets/images/anne.jpg')}
                title={'Anne Marrie  Songs'}
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
