import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import CreatePostButton from '../components/CreatePostButton';
import Header from '../components/Header';
import PostList from '../components/PostList';

const Home = () => {
  const router = useRouter();
  const handleCreatePost = () => {
    router.push('/create-post');
  };
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
      <Header title="Home Page" />
      <PostList />
      <CreatePostButton onPress={handleCreatePost} />
      <BottomNav activeTab="Home" onTabPress={handleTabPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // lighter background for contrast
    justifyContent: 'flex-start',
    paddingHorizontal: 12,
    paddingTop: 0,
    paddingBottom: 70, // space for bottom nav
  },
});

export default Home;
