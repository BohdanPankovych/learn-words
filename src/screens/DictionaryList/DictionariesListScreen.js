import { StyleSheet, FlatList, Button } from 'react-native';
import { View } from '../../components/Themed';
import ListItemContainer from '../containers/ListItemContainer';

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

export default function DictionariesListScreen({ navigation, dictionaries }) {
    const renderItem = ({ item, ...props }) => (
        <ListItemContainer title = {item} {...props} />
      );
  return (
    <View style={styles.container}>
        <FlatList data={dictionaries}  renderItem={renderItem} keyExtractor={item => item}/>
    </View>
  );
}



