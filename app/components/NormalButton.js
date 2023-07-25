import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const NormalButton = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.pressable} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NormalButton;

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  normalButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
  },
});
