import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';

const Details = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  // Mock authenticated and comments
  const authenticated = true;
  const comments = [
    { user: 'Alice', text: 'Great post!' },
    { user: 'Bob', text: 'Is this still available?' },
  ];
  return (
    <View style={styles.container}>
      <Header title="Details" hideLogo />
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={params.image ? { uri: params.image as string } : require('../assets/images/partial-react-logo.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.fare}>{params.fare}</Text>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.text}>{params.description}</Text>
        <Text style={styles.label}>Owner</Text>
        <Text style={styles.text}>{params.owner}</Text>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.text}>{params.location}</Text>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.text}>{params.phone}</Text>
        <Text style={styles.label}>Authenticated</Text>
        <Text style={styles.text}>{authenticated ? 'Yes' : 'No'}</Text>
        {params.mapLink ? (
          <TouchableOpacity onPress={() => Linking.openURL(params.mapLink as string)}>
            <Text style={styles.mapLink}>View on Map</Text>
          </TouchableOpacity>
        ) : null}
        <Text style={styles.label}>Comments</Text>
        <View style={styles.commentsSection}>
          {comments.map((c, idx) => (
            <Text key={idx} style={styles.comment}><Text style={styles.commentUser}>{c.user}:</Text> {c.text}</Text>
          ))}
        </View>
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
    alignItems: 'center',
    padding: 24,
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 16,
    backgroundColor: '#eee',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
    textAlign: 'center',
  },
  fare: {
    fontSize: 22,
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  label: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 12,
    marginBottom: 2,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#222',
    fontSize: 16,
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
  mapLink: {
    color: '#007AFF',
    fontSize: 16,
    marginBottom: 8,
    textDecorationLine: 'underline',
    alignSelf: 'flex-start',
  },
  commentsSection: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  comment: {
    color: '#333',
    fontSize: 15,
    marginBottom: 4,
  },
  commentUser: {
    fontWeight: 'bold',
    color: '#007AFF',
  },
  backButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 16,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Details; 