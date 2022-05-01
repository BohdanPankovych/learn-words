import React from 'react';
import { StyleSheet, FlatList, Pressable } from 'react-native';
import { View } from '../../components/Themed';
import ListDictionaryItem from './ListDictionaryItem';
import appService from '../../storage/appService';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  });

export default function DictionariesListScreen({ navigation, setDictionaries, deleteDictionary, dictionaries }) {
  const renderItem = ({ item, ...props }) => (
    <Pressable onPress={() => navigation.navigate("WordList", {id: item.id})}>
      <ListDictionaryItem id={item.id} firstSection={item.dictionaryName} secondSection={`Words: ${item.wordCount}`} onDelete={deleteDictionary} {...props} />
    </Pressable>
  );
  
  const getDictionaries = () => {
    appService.getDictionariesList((res) => {
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



