import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import SearchBar from './SearchBar';
import SongsListSearchBar from './SongsListSearchBar';
import SortButton from './SortButton';


const SongsListTopBar = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View>
      <LinearGradient colors={['#647DEE', '#7F53AC']}>
        <View style={styles.container}>
          <Image
            source={require('../assets/images/back.png')}
            style={styles.backButton}
          />
          <View style={{flexDirection: 'row'}}>
            <SongsListSearchBar
              imageSource={require('../assets/images/searchNew.jpg')}
              placeholder={'Find in playlist'}
            />
            <SortButton title={'Sort'} />
          </View>
          <View style={styles.textContainer}>
            <Image
              source={require('../assets/images/artists.jpg')}
              style={styles.image}
            />
          </View>
          <Text style={styles.text}>LIKED SONGS</Text>
          <View style={{flexDirection: "row"}}>
          <Image source={require('../assets/images/billie.jpg')}
          style={styles.artistDp}/>
          <Text style={styles.artistName}>Billie Eilish</Text>
          </View>
          <Text style={styles.subHeading}>EP . 2019</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SongsListTopBar;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height * 0.6,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 10,
    fontSize: 25,
  },
  backButton: {
    height: 20,
    width: 20,
    margin: 10,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: "row"
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 3,
    marginTop: 20,
  },
  artistDp: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 10
  },
  artistName: {
    color: "white",
    fontWeight: "bold",
    marginTop: 13,
    marginLeft: 10
  },
  subHeading: {
    color: "white",
    marginLeft: 10
  }
});
