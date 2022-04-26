import { StyleSheet, FlatList, Pressable } from 'react-native';
import { View } from '../../components/Themed';
import ListItem from '../../components/List/ListItem';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  });

export default function DictionariesListScreen({ navigation, dictionaries }) {
    const renderItem = ({ item, ...props }) => (
      <Pressable onPress={() => navigation.navigate("WordList")}>
        <ListItem id={item.id} firstSection={item.dictionaryName} secondSection={`Words: ${item.wordCount}`} {...props} />
      </Pressable>
      );
  return (
    <View style={styles.container}>
        <FlatList data={dictionaries}  renderItem={renderItem} keyExtractor={item => item.id}/>
    </View>
  );
}



