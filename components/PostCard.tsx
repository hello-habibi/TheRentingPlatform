import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PostCard = () => (
  <View style={styles.card}>
    <Text>Post</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default PostCard; 