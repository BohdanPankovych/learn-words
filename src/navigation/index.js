import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import WordListScreen from '../screens/WordListScreen/WordListScreen';
import BottomTabNavigator from './BottomTabNavigator';

import AddItemContainer from '../components/AddButton/containers/AddItemContainer';

const Stack = createNativeStackNavigator();

export default function RootNavigator({createDictionary}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={()=>BottomTabNavigator(createDictionary)} options={{ headerShown: false }} />
      <Stack.Screen name="WordList" component={WordListScreen} 
      options={({ navigation }) => ({
          title: 'Words',
          headerRight: () => (<AddItemContainer isWordAdd/>),
        })}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}