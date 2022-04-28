import React from 'react';
import { StyleSheet, FlatList, Pressable } from 'react-native';
import { View } from '../../components/Themed';
import ListWordItem from './ListWordItem';
import { germanMock, englishMock } from '../../data/mock/WordsMock';
import appService from '../../storage/appService';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  });

const WordListScreen = ({navigation, route}) => {
    const renderItem = ({ item, ...props }) => (
          <ListWordItem id={item.id} firstSection={item.wordName} secondSection={item.wordTranslate} isDeleteWord {...props} />
    );

    const getWords = () =>{
      appService.getWordsList(route.params.id)
      .then((res)=>{
        console.log(res);
      }).catch(err => console.error(err))
    }

    React.useEffect(() =>{
      getWords();
    }, [])

    return (
      <View style={styles.container}>
          <FlatList data={route.params.id ? germanMock : englishMock }  renderItem={renderItem} keyExtractor={item => item.id}/>
      </View>
    );
}

export default React.memo(WordListScreen);