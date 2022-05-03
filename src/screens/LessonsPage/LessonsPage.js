import { StyleSheet, Text, View } from 'react-native';

import LessonItem from './LessonItem';
import Lessons from '../../data/constants/Lessons';

export default function LessonsPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.dataGrid}>
        {Lessons?.map((val, index) => <LessonItem key={val.id} img={val.img} name={val.name} taskType={val.taskType}/>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "white"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
