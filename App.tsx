import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import AppNavigator from './src/presentation/navigation/AppNavigator';
import { SafeAreaProvider, SafeAreaView, NavigationContainer } from './src/core/plugins';

function App() {
  useEffect(() => {
    BootSplash.hide({ fade: true });
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
