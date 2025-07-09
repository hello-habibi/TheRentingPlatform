import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

const CreatePost = () => {
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
      <Header title="Create Post" />
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} placeholder="Enter post title" placeholderTextColor="#888" />
        <Text style={styles.label}>Description</Text>
        <TextInput style={styles.input} placeholder="Enter post description" placeholderTextColor="#888" multiline numberOfLines={4} />
        <Button title="Submit" onPress={() => alert('Post created!')} />
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

export default CreatePost; 