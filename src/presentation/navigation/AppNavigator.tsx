import { React, createNativeStackNavigator } from '../../core';
import HelloWorldScreen from '../features/hello_world/Screen/HelloWorldScreen';

import type { RootStackParamList } from './types';


const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HelloWorldScreen">
      <Stack.Screen
        name="HelloWorldScreen"
        component={HelloWorldScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
