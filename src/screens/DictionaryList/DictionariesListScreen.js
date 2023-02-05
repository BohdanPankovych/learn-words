import React from 'react';
import { StyleSheet, FlatList, Pressable } from 'react-native';
import ListDictionaryItem from './ListDictionaryItem';
import { View } from '../../components/Themed';
import SQLService from '../../storage/SQLService';
import EmptyListScreen from '../../components/helpers/EmptyListScreen';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  });

export default function DictionariesListScreen({ navigation, setDictionaries, deleteDictionary, dictionaries }) {
  const renderItem = ({ item, ...props }) => (
    <Pressable onPress={() => navigation.navigate("WordList", {wordsFileName: item.wordsFileName})}>
      <ListDictionaryItem 
          id={item.id} 
          firstSection={item.dictionaryName} 
          secondSection={`Words: ${item.wordCount}`} 
          onDelete={deleteDictionary} 
          dictionaryName={item.wordsFileName}
          {...props} />
    </Pressable>
  );
  
  const getDictionaries = () => {
    SQLService.getDictionariesList(setDictionaries)
  }

  React.useEffect(() => {
    getDictionaries()
  }, [])

  return (
    <View style={styles.container}>
      {dictionaries.length ?
        <FlatList data={dictionaries}  renderItem={renderItem} keyExtractor={(item, index) => (item.id + "_" + index)}/>
        : <EmptyListScreen text={"There are no dictionaries.\n Add one by pressing \"add button\" in top-right corner"}/>
      }    
    </View>
  );
}



