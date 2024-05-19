import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleLogin = async () => {
    // Handle login logic, e.g., authenticate with your server
    // For demonstration, we'll just save the email in AsyncStorage
    await AsyncStorage.setItem('userToken', 'dummy-auth-token');
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/favicon.png')} style={styles.logo} />
      <Text style={styles.title}>Hi, Welcome Back!</Text>
      <Text style={styles.subtitle}>Enter your credentials to access your account</Text>

      <Text style={styles.inputLabel}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Please Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.inputLabel}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Please Enter Your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Feather name={isPasswordVisible ? "eye" : "eye-off"} size={20} style={styles.eyeIcon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.signupLinkContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <Text style={styles.signupLink}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#fff',
  },
  logo: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#7d7d7d',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
    color: '#2ECC71',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 13,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    fontSize: 13,
  },
  eyeIcon: {
    marginLeft: 10,
    color: '#7d7d7d',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#2ECC71',
    padding: 10,
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    padding: 2,
  },
  signupLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  signupText: {
    color: '#7d7d7d',
  },
  signupLink: {
    color: '#2ECC71',
    marginLeft: 5,
  },
});

export default Login;
