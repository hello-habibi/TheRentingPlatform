import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

const Profile = () => {
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
      <Header title="Profile" />
      <Text style={styles.text}>Profile Screen</Text>
      <View style={styles.buttonRow}>
        <Button title="Login" onPress={() => router.push('/login')} />
        <Button title="Sign Up" onPress={() => router.push('/signup')} />
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
  text: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 32,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 24,
  },
});

export default Profile; 