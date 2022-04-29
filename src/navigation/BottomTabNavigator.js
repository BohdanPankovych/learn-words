import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '../data/constants/Colors';
import useColorScheme from '../data/hooks/useColorScheme';
import LessonsPage from '../screens/LessonsPage/LessonsPage';
import TabTwoScreen from '../screens/TabTwoScreen';
import DictionaryListContainer from '../screens/containers/DictionaryListContainer';

import AddItemContainer from '../components/AddButton/containers/AddItemContainer';
import Menu from '../components/menu/Menu';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({...params}) {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabThree"
        component={DictionaryListContainer}
        options={({ navigation }) => ({
          title: 'List',
          tabBarIcon: ({ color }) => <TabBarIcon name="database" color={color} />,
          headerRight: () => (<AddItemContainer/>),
        })}
      />
      <BottomTab.Screen
        name="TabOne"
        component={LessonsPage}
        options={({ navigation }) => ({
          title: 'Learn',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (<Menu/>)
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Statistics',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props) {
    return <AntDesign size={30} style={{ marginBottom: -3 }} {...props} />;
  }