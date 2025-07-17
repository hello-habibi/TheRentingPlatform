import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';

const EditPost = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [title, setTitle] = useState(params.title as string || '');
  const [location, setLocation] = useState(params.location as string || '');
  const [fare, setFare] = useState(params.fare as string || '');

  const handleSave = () => {
    // Mock save logic
    alert('Post updated!');
    router.back();
  };

  return (
    <View style={styles.container}>
      <Header title="Edit Post" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
        />
        <Text style={styles.label}>Fare</Text>
        <TextInput
          style={styles.input}
          value={fare}
          onChangeText={setFare}
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 24,
  },
  label: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 16,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fff',
    color: '#222',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    backgroundColor: '#888',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EditPost; 