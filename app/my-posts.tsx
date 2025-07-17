import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { posts } from '../assets/dummyPosts';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import PostCard from '../components/PostCard';

const MyPosts = () => {
  const router = useRouter();
  const [hidden, setHidden] = useState(Array(posts.length).fill(false));

  const toggleHide = (idx: number) => {
    setHidden(h => h.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <View style={styles.container}>
      <Header title="My Posts" />
      <ScrollView style={styles.list}>
        {posts.map((post, idx) => (
          <View key={idx} style={styles.cardRow}>
            {!hidden[idx] && (
              <PostCard
                {...post}
                onDetails={() => router.push({ pathname: '/details', params: { ...post } })}
              />
            )}
            <TouchableOpacity
              style={[styles.hideButton, hidden[idx] ? styles.showButton : null]}
              onPress={() => toggleHide(idx)}
            >
              <Text style={styles.hideButtonText}>{hidden[idx] ? 'Show' : 'Hide'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => router.push({ pathname: '/edit-post', params: { ...post } })}
            >
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <BottomNav activeTab="My posts" onTabPress={(tab) => {
        if (tab === 'Home') router.push('/');
        if (tab === 'My posts') router.push('/my-posts');
        if (tab === 'Search') router.push('/search');
        if (tab === 'Profile') router.push('/profile');
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  cardRow: {
    marginBottom: 8,
    position: 'relative',
    minHeight: 120,
  },
  hideButton: {
    position: 'absolute',
    top: 20,
    right: 150,
    backgroundColor: '#888',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
    zIndex: 2,
  },
  showButton: {
    backgroundColor: '#007AFF',
  },
  hideButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  editButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#FFA500',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
    zIndex: 2,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default MyPosts; 