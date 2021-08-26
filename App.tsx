import React from "react";
import { theme } from './app/screens/App_style';

import { LoginScreen } from "./app/screens/login/login";
import { RegisterScreen } from './app/screens/cadastro/cadastro';
import { PrincipalScreen } from './app/screens/principal/principal';

import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ImageBackgroundBase } from "react-native";


const imgb1 = './assets/backgroud.png';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="PrincipalScreen" component={PrincipalScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  )
}
