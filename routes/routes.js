import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import Login from "../screens/Login";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  // const isLoggedIn = Login();
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: "Login" }}
      />
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
