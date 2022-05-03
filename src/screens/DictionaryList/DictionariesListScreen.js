import React from 'react';
import { StyleSheet, FlatList, Pressable } from 'react-native';
import { View } from '../../components/Themed';
import ListDictionaryItem from './ListDictionaryItem';
import SQLService from '../../storage/SQLService';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  });

export default function DictionariesListScreen({ navigation, setDictionaries, deleteDictionary, dictionaries }) {
  const renderItem = ({ item, ...props }) => (
    <Pressable onPress={() => navigation.navigate("WordList", {wordsFileName: item.wordsFileName})}>
      <ListDictionaryItem id={item.id} firstSection={item.dictionaryName} secondSection={`Words: ${item.wordCount}`} onDelete={deleteDictionary} {...props} />
    </Pressable>
  );
  
  const getDictionaries = () => {
    SQLService.getDictionariesList((res) => {
      setDictionaries(res)
    })
  }

  React.useEffect(() => {
    getDictionaries()
  }, [])

  return (
    <View style={styles.container}>
        <FlatList data={dictionaries}  renderItem={renderItem} keyExtractor={item => item.id}/>
    </View>
  );
}



