import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const SongsListButton = ({imageSource, title, image, onPress, subTitle}) => {
  const imageContainer = image ? styles.likeImage : styles.image;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.touchableContainer}>
        <LinearGradient colors={['#33006F', '#FFFFFF']}>
          <View style={styles.container}>
            <Image source={imageSource} style={imageContainer} />
          </View>
        </LinearGradient>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.subText}>{subTitle}</Text>
        </View>
        <View style={styles.dotContainer}>
          <Image
            source={require('../assets/images/dot1.jpg')}
            style={styles.dot}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SongsListButton;

const styles = StyleSheet.create({
  container: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  text: {
    color: 'white',
    fontSize: 13,
  },
  subText: {
    color: 'grey',
    fontSize: 11,
  },
  likeImage: {
    width: 20,
    height: 20,
  },
  image: {
    width: 55,
    height: 55,
  },
  dotContainer: {
    marginLeft: 'auto',
  },
  dot: {
    width: 20,
    height: 20,
  },
});
