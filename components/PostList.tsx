import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { posts } from '../assets/dummyPosts';
import PostCard from './PostCard';

const PostList = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <View>
        {posts.map((post, idx) => (
          <PostCard
            key={idx}
            {...post}
            onDetails={() => router.push({ pathname: '/details', params: { ...post } })}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default PostList; 