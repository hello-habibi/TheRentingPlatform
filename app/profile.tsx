import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

const mockUser = {
  name: 'Habib Rahman',
  phone: '017XXXXXXXX',
  address: 'Dhaka, Bangladesh',
  nid: '1234567890',
  image: undefined, // You can use a local image or a placeholder
};

const Profile = () => {
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState(mockUser);
  const [form, setForm] = useState(mockUser);

  const handleSave = () => {
    setUser(form);
    setEdit(false);
    alert('Profile updated!');
  };

  return (
    <View style={styles.container}>
      <Header title="Profile" />
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={user.image ? { uri: user.image } : require('../assets/images/partial-react-logo.png')}
          style={styles.avatar}
        />
        {edit ? (
          <>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={form.name}
              onChangeText={v => setForm({ ...form, name: v })}
            />
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              value={form.phone}
              onChangeText={v => setForm({ ...form, phone: v })}
            />
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              value={form.address}
              onChangeText={v => setForm({ ...form, address: v })}
            />
            <Text style={styles.label}>NID</Text>
            <TextInput
              style={styles.input}
              value={form.nid}
              onChangeText={v => setForm({ ...form, nid: v })}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setEdit(false)}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.info}><Text style={styles.label}>Name:</Text> {user.name}</Text>
            <Text style={styles.info}><Text style={styles.label}>Phone:</Text> {user.phone}</Text>
            <Text style={styles.info}><Text style={styles.label}>Address:</Text> {user.address}</Text>
            <Text style={styles.info}><Text style={styles.label}>NID:</Text> {user.nid}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => setEdit(true)}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </>
        )}
        <View style={styles.authButtons}>
          <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/login')}>
            <Text style={styles.authButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton} onPress={() => router.push('/signup')}>
            <Text style={styles.authButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomNav activeTab="Profile" onTabPress={(tab) => {
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
  content: {
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#eee',
    marginBottom: 24,
  },
  label: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 12,
    marginBottom: 4,
  },
  info: {
    color: '#222',
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
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
    width: 260,
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
    width: 120,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
    width: 120,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#888',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
    width: 120,
  },
  cancelButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  authButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 8,
    gap: 16,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: 120,
    marginHorizontal: 8,
  },
  signupButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: 120,
    marginHorizontal: 8,
  },
  authButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Profile; 