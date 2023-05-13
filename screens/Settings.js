import { styles } from '../components/styles';
import { Button, NativeEventEmitter, Text, View } from 'react-native';

function Settings({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>{route.params.paramUsername}</Text>
      <Button
        title="Logout"
        onPress={() => navigation.navigate('Login')}
      ></Button>
    </View>
  );
}
export default Settings;
