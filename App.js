import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/data/hooks/useCachedResources';
import useColorScheme from './src/data/hooks/useColorScheme';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import RootContainer from './src/navigation/containers/RootContainer';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/data/redux/store'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ReduxProvider store={store}>
        <SafeAreaProvider>
        <NavigationContainer
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <RootContainer/>
            <StatusBar />
          </NavigationContainer>
        </SafeAreaProvider>
      </ReduxProvider>
    );
  }
}
