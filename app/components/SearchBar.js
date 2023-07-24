import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const SearchBar = () => {
  // const [searchText, setSearchText] = useState('');

  // const handleSearch = (text) => {
  //   // You can perform any search logic here
  //   // For example, filter results based on the search text
  //   setSearchText(text);
  // };

  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="What do you want to listen to?"
          placeholderTextColor="#000000"
          textAlign="center"
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 8,
    height: 50,
  },
  searchIcon: {
    height: 30,
    width: 30,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    height: 40,
  },
});

export default SearchBar;
