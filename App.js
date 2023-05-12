import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { styles } from "./components/styles";

//screens
import Login from "./screens/Login.js";
import AppStack from "./routes/routes";

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
      {/* <Login /> */}
    </NavigationContainer>
  );
}

// export default App;
// export default function App() {
//   // export default class App extends Component {
//     return (
//       <View style = {styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Button title = 'Login' color = 'blue'/>
//         <StatusBar style="auto" />
//       </View>
//     );
//   }
