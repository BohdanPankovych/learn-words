import { StyleSheet, FlatList, Button } from 'react-native';
import { View } from '../../components/Themed';
import ListItem from './ListItem';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });

  const tmpArr = [1,2,3,4,5,6,7,8,9,10];

export default function DictionariesListScreen({ navigation, dictionaries }) {
    const renderItem = ({ item }) => (
        <ListItem title={item} />
      );
  return (
    <View style={styles.container}>
        <FlatList data={dictionaries}  renderItem={renderItem}/>
    </View>
  );
}



