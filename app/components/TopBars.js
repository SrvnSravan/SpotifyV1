import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const TopBars = () => {
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Image
          source={require('../assets/images/th.jpg')}
          style={styles.logo}
        />
        <Text style={styles.textContainer}>Your Library</Text>

        <TouchableOpacity>
          <View style={{paddingRight: 25}}>
            <Image
              source={require('../assets/images/search1.jpg')}
              style={styles.searchIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{paddingRight: 25}}>
            <Image
              source={require('../assets/images/plus.png')}
              style={styles.addIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TopBars;

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    color: 'white',
  },
  searchIcon: {
    height: 30,
    width: 35,
  },
  addIcon: {
    height: 30,
    width: 25,
  },
});
