import React from "react";
import {View, Text, Keyboard} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Login from "./Screens/Login.js";
import KeyboardListener from "react-native-keyboard-listener";


const Stack = new createStackNavigator();


const App = () =>{


  return (
    <NavigationContainer>
      <Stack.Navigator headerMode ={false}>
        <Stack.Screen name="login" component = {Login}>
          
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;