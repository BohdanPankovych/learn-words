import { StyleSheet, Button } from 'react-native';
import { Text, View } from '../../components/Themed';

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    item:{
      backgroundColor: 'green',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    content: {
      flexDirection: "row",
      justifyContent: "space-between",
    }
  });

const ListItem = ({ title }) => (
    <View style={styles.item}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{title}</Text>
        <Button title='Delete' onPress={()=>console.log("s")}/>
      </View>
    </View>
);

export default ListItem;