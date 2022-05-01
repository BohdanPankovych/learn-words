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

const WordListScreen = ({navigation, route, words, setWords, deleteWord}) => {
    const renderItem = ({ item, ...props }) => (
          <ListWordItem 
                dictionaryId={route.params.id}
                id={item.id} 
                firstSection={item.wordName}  
                secondSection={item.wordTranslate} 
                onDelete={deleteWord} 
                isDeleteWord {...props} />
    );

    const getWords = () =>{
      appService.getWordsList(route.params.id, (res) =>{
        setWords(res);
      })
    }

    React.useEffect(() =>{
      getWords();
    }, [])

    return (
      <View style={styles.container}>
          <FlatList data={words}  renderItem={renderItem} keyExtractor={item => item.id}/>
      </View>
    );
}

export default React.memo(WordListScreen);