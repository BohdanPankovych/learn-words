import React from 'react';
import { StyleSheet, FlatList, Pressable } from 'react-native';
import { View } from '../../components/Themed';
import ListWordItem from './ListWordItem';
import EmptyListScreen from '../../components/helpers/EmptyListScreen';
import SQLService from '../../storage/SQLService';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  });

const WordListScreen = ({navigation, route, words, setWords, deleteWord}) => {
    const renderItem = ({ item, ...props }) => (
          <ListWordItem 
                wordsFileName={route.params.wordsFileName}
                id={item.id} 
                firstSection={item.wordName}  
                secondSection={item.wordTranslate} 
                onDelete={deleteWord} 
                isDeleteWord {...props} />
    );

    const getWords = () =>{
      SQLService.getWordsList(route.params.wordsFileName, (res) =>{
        setWords(res);
      })
    }

    React.useEffect(() =>{
      getWords();
    }, [])

    return (
      <View style={styles.container}>
        {words.length?
        <FlatList data={words}  renderItem={renderItem} keyExtractor={item => item.id}/>
        : <EmptyListScreen text={"There are no words.\n Add some words by pressing \"add button\" in top-right corner"}/>
        }
          
      </View>
    );
}

export default React.memo(WordListScreen);