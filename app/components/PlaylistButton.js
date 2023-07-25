import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const PlaylistButton = ({imageSource, title, image, onPress}) => {
  const imageContainer = image ? styles.likeImage : styles.image;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.touchableContainer}>
        <LinearGradient colors={['#33006F', '#FFFFFF']}>
          <View style={styles.container}>
            <Image source={imageSource} style={imageContainer} />
          </View>
        </LinearGradient>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaylistButton;

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
    gap: 10,
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: '#202020',
    borderRadius: 4,
    elevation: 3,
    width: 175,
  },
  text: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  likeImage: {
    width: 20,
    height: 20,
  },
  image: {
    width: 55,
    height: 55,
  },
});
