import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen({ navigation }) {

  const list = [1,2,3,4,5,6,7,8];

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One</Text> */}
      <View style={styles.dataGrid}>
        {list.map((val, index) => <View key={index} style={styles.block}></View>)}
      </View>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  block: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  dataGrid:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
