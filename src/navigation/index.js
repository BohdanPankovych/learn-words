import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import WordsListContainer from '../screens/containers/WordsListContainer';
import QuestionPage from '../screens/questionPage/QuestionPage';
import BottomTabNavigator from './BottomTabNavigator';
import Drawer from '../components/Drawer/Drawer';

import AddItemContainer from '../components/AddButton/containers/AddItemContainer';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <React.Fragment>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="WordList" component={WordsListContainer} 
          options={({ navigation, route }) => ({
            title: 'Words',
            headerRight: () => (<AddItemContainer id={route.params.id} isWordAdd/>),
          })}/>
        <Stack.Screen name="QuestionPage" component={QuestionPage}/>
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </React.Fragment>
  );
}