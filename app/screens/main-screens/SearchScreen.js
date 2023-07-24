import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from '../../components/SearchBar';
import SearchCards from '../../components/SearchCards';

const SearchScreen = () => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <View>
        <Text style={styles.text}>Search</Text>
        <SearchBar />
        <ScrollView>
          <View>
            <Text style={styles.browseText}>Browse all</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SearchCards backgroundColor={'orange'} title={'Podcasts'} />
            <SearchCards backgroundColor={'blue'} title={'Live Events'}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SearchCards backgroundColor={'yellow'} title={'Made for You'} />
            <SearchCards backgroundColor={'purple'} title={'New Releases'}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SearchCards backgroundColor={'green'} title={'Hindhi'}/>
            <SearchCards backgroundColor={'brown'} title={'Punjabi'}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SearchCards backgroundColor={'pink'} title={'Tamil'}/>
            <SearchCards backgroundColor={'grey'} title={'Telugu'}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SearchCards backgroundColor={'orange'} title={'Pop'}/>
            <SearchCards backgroundColor={'blue'} title={'Indie'}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SearchCards backgroundColor={'brown'} title={'Trending'}/>
            <SearchCards backgroundColor={'green'} title={'Love'}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SearchCards backgroundColor={'pink'} title={'Discover'}/>
            <SearchCards backgroundColor={'orange'} title={'Radio'}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SearchCards backgroundColor={'green'} title={'Mood'}/>
            <SearchCards backgroundColor={'grey'} title={'Hip-Hop'}/>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  browseText: {
    color: 'white',
    marginTop: 80,
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
