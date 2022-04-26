import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../data/constants/Colors';
import useColorScheme from '../data/hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import DictionaryListContainer from '../screens/containers/DictionaryListContainer';
import LinkingConfiguration from './LinkingConfiguration';

import AddItemDialogContainer from '../components/modal/container/AddItemDialogContainer';

import WordListScreen from '../screens/WordListScreen/WordListScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator({createDictionary}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={()=>BottomTabNavigator(createDictionary)} options={{ headerShown: false }} />
      <Stack.Screen name="WordList" component={WordListScreen}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator(createDictionary) {
  const colorScheme = useColorScheme();
  const [open, setOpen] = React.useState(false);

  const handleClose = React.useCallback(() =>{
    setOpen(true);
  }, [])

  const handleSubmit = React.useCallback(() =>{
    setOpen(false);
  }, [])

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
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={handleClose}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="plus"
                size={30}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
              <AddItemDialogContainer open={open} onClose={setOpen} submit={handleSubmit}/>
            </Pressable>
          ),
        })}
        
      />
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
