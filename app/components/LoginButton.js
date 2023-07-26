import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  
  const LoginButtons = ({pressable, title, buttonText, onPress}) => {
    const containerStyle = pressable ? styles.pressable : styles.normalPressable;
    const textStyle = buttonText ? styles.buttonText : styles.normalButtonText;
    return (
      <View>
        <TouchableOpacity style={containerStyle}
        onPress={onPress}>
          <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default LoginButtons;
  
  const styles = StyleSheet.create({
    pressable: {
      backgroundColor: '#1DB954',
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
    normalPressable: {
      backgroundColor: '#131624',
      padding: 10,
      marginLeft: 'auto',
      marginRight: 'auto',
     
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      borderColor: '#C0C0C0',
      borderWidth: 0.8,
    },
    buttonText: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 15
    },
    normalButtonText: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 15
    },
  });
  