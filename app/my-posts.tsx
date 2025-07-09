import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

const MyPosts = () => {
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
      <Header title="My Posts" />
      <Text style={styles.text}>My Posts Screen</Text>
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
});

export default MyPosts; 