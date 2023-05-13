import { styles } from '../components/styles';
import { Button, NativeEventEmitter, Text, View } from 'react-native';

function Home({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Welcome, {route.params.paramUsername}</Text>
      {/* <Button title="Logout" onPress={() => navigation.goBack()}></Button> */}
      <Button
        title="Settings"
        onPress={() =>
          navigation.navigate('Settings', {
            paramUsername: route.params.paramUsername,
          })
        }
      ></Button>
    </View>
  );
}
export default Home;
