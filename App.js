import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/data/hooks/useCachedResources';
import useColorScheme from './src/data/hooks/useColorScheme';
import NavigationContainer from './src/navigation/container/NavigationContainer';
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
          <NavigationContainer colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ReduxProvider>
    );
  }
}
