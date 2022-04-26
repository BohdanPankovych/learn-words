import React from 'react';
import { StyleSheet, FlatList, Pressable } from 'react-native';
import { View } from '../../components/Themed';
import ListItem from '../../components/List/ListItem';
import WordsMock from '../../data/mock/WordsMock';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  });

const WordListScreen = ({navigation}) => {
    const renderItem = ({ item, ...props }) => (
          <ListItem id={item.id} firstSection={item.wordName} secondSection={item.wordTranslate} {...props} />
        );
    return (
      <View style={styles.container}>
          <FlatList data={WordsMock}  renderItem={renderItem} keyExtractor={item => item.id}/>
      </View>
    );
}

export default React.memo(WordListScreen);