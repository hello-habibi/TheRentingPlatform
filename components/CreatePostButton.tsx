import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CreatePostButton = ({ onPress }: { onPress?: () => void }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>Create post</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CreatePostButton; 