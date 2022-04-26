import React from 'react';
import { StyleSheet, FlatList, Pressable } from 'react-native';
import { View } from '../../components/Themed';
import ListItem from '../../components/List/ListItem';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  });

const WordListScreen = ({navigation}) => {
    const renderItem = ({ item, ...props }) => (
          <ListItem id={item} firstSection={item} secondSection={item} {...props} />
        );
    return (
      <View style={styles.container}>
          <FlatList data={[1,2,3,4,5,6,7,8,9,10]}  renderItem={renderItem} keyExtractor={item => item}/>
      </View>
    );
}

export default React.memo(WordListScreen);