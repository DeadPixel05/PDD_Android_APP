import React, { Component, useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../components/styles';

// const Login = () => {
//     return (
//         <StyledContainer>
//             <InnerContainer>
//                 <PageLogo resizeMode = 'cover' source = {require('./../assets/splash.png')} />
//                 <PageTitle>Title</PageTitle>
//             </InnerContainer>
//         </StyledContainer>
//     )
// }

// const Login = ({ navigation }) => {
//     return (
//         <View style ={styles.container}>
//             <Image style = {styles.logo_image} source = { require('../assets/dpwh_logo.png')}/>
//             <Text style = { styles.title_style }>PDD App</Text>
//             <TextInput
//                 style = { styles.inputBox }
//                 underlineColorAndroid = 'rgba(0,0,0,0)'
//                 placeholder = 'Email'
//                 placeholderTextColor = '#1c313a'
//                 keyboardType = 'email-address'
//                 />
//             <TextInput
//             style={styles.inputBox}
//             underlineColorAndroid='rgba(0,0,0,0)'
//             placeholder="Password"
//             secureTextEntry={true}
//             placeholderTextColor="#1c313a"
//             // ref={(input) => this.password = input}

//         //   onChangeText={password => this.setState({ UserPassword: password })}
//         />
//             <Button
//                 style = { styles.buttonText }
//                 title = "Login"
//                 onPress={() => navigation.navigate('Home')}
//                 >
//             </Button>
//             <View>
//                 <Text onPress = { () => Alert.alert(title="Forgot Password?", message = "Contact the administrator") }>Forgot Password?</Text>
//             </View>
//         </View>
//     )
// }

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // useEffect(() => {
    // Make an API call to the PHP server to check the login credentials
    fetch('http://192.168.102.245/android_test/test.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const setData = JSON.parse(JSON.stringify(responseJson));
        if (setData.error == false) {
          console.log('success');
          setIsLoggedIn(true);
        } else {
          Alert.alert(setData.message);
          Alert.prompt(setData.message);
          setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.log('error');
        console.error(error);
      });
    // }, []);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo_image}
        source={require('../assets/dpwh_logo.png')}
      />
      <Text style={styles.title_style}>PDD App</Text>

      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Email"
        placeholderTextColor="#1c313a"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#1c313a"
        autoCapitalize="none"
        // ref={(input) => this.password = input}

        onChangeText={setPassword}
      />
      <Button
        style={styles.buttonText}
        title="Login"
        onPress={handleLogin}
      ></Button>
      {isLoggedIn ? (
        navigation.navigate('Home', { paramUsername: username })
      ) : (
        <View style={{ marginTop: 8 }}>
          <Text
            onPress={() =>
              Alert.alert(
                (title = 'Forgot Password?'),
                (message = 'Contact the administrator')
              )
            }
          >
            Forgot Password?
          </Text>
        </View>
      )}
    </View>
  );
};

export default Login;
