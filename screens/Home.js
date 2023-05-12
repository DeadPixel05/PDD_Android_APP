import { styles } from "../components/styles";
import { Text, View } from "react-native";

const Home = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>{route.params.paramUsername}</Text>
    </View>
  );
};
export default Home;
