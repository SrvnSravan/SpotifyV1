import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';

const SongsListSearchBar = ({imageSource, placeholder}) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#FFFFFF"
        textAlign="left"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent', // Set the background color to transparent
    borderRadius: 3,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 8,
    height: 40,
    width: Dimensions.get('window').width * 0.7,
    borderWidth: 0.2, // Add a border to see the transparent effect, you can remove this
    borderColor: '#F5F5F5', // Set the border color to match the original background color
  },
  searchIcon: {
    height: 50,
    width: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    height: 40,
    marginRight: 50,
  },
});

export default SongsListSearchBar;
