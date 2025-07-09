import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const handleTabPress = (tab: string) => {
    switch (tab) {
      case 'Home':
        router.push('/');
        break;
      case 'My posts':
        router.push('/my-posts');
        break;
      case 'Search':
        router.push('/search');
        break;
      case 'Profile':
        router.push('/profile');
        break;
      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Sign Up" />
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter email" placeholderTextColor="#888" value={email} onChangeText={setEmail} />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter password" placeholderTextColor="#888" secureTextEntry value={password} onChangeText={setPassword} />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput style={styles.input} placeholder="Confirm password" placeholderTextColor="#888" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
        <Button title="Sign Up" onPress={() => alert('Signed up!')} />
      </View>
      <BottomNav onTabPress={handleTabPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'flex-start',
  },
  form: {
    margin: 24,
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 16,
  },
  label: {
    color: '#fff',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
});

export default SignUp; 