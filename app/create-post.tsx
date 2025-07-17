import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { allDistricts, districtsThanas } from '../assets/districtsThanas';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [owner, setOwner] = useState('');
  const [fare, setFare] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [mapLink, setMapLink] = useState('');
  const [image, setImage] = useState(undefined);
  const [district, setDistrict] = useState('');
  const [thana, setThana] = useState('');
  const router = useRouter();

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access media library is required!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const thanas = district ? districtsThanas[district] || [] : [];

  const handleSubmit = () => {
    // Mock submit logic
    const fullLocation = district && thana ? `${thana}, ${district}` : location;
    alert('Post created! (mock)');
    router.push('/my-posts');
  };

  return (
    <View style={styles.container}>
      <Header title="Create Post" />
      <ScrollView contentContainerStyle={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} placeholder="Enter post title" value={title} onChangeText={setTitle} />
        <Text style={styles.label}>Description</Text>
        <TextInput style={styles.input} placeholder="Enter post description" value={description} onChangeText={setDescription} multiline numberOfLines={4} />
        <Text style={styles.label}>Owner Name</Text>
        <TextInput style={styles.input} placeholder="Enter owner's name" value={owner} onChangeText={setOwner} />
        <Text style={styles.label}>Fare</Text>
        <TextInput style={styles.input} placeholder="Enter fare" value={fare} onChangeText={setFare} />
        <Text style={styles.label}>Location</Text>
        <TextInput style={styles.input} placeholder="Enter location" value={location} onChangeText={setLocation} />
        <Text style={styles.label}>Phone</Text>
        <TextInput style={styles.input} placeholder="Enter phone number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
        <Text style={styles.label}>Map Link (if available)</Text>
        <TextInput style={styles.input} placeholder="Enter map link" value={mapLink} onChangeText={setMapLink} />
        <Text style={styles.label}>District</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={district}
            onValueChange={value => {
              setDistrict(value);
              setThana('');
            }}
            style={styles.picker}
          >
            <Picker.Item label="Select District" value="" />
            {allDistricts.map(d => (
              <Picker.Item key={d} label={d} value={d} />
            ))}
          </Picker>
        </View>
        <Text style={styles.label}>Thana</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            enabled={!!district}
            selectedValue={thana}
            onValueChange={setThana}
            style={styles.picker}
          >
            <Picker.Item label="Select Thana" value="" />
            {thanas.map(t => (
              <Picker.Item key={t} label={t} value={t} />
            ))}
          </Picker>
        </View>
        <Text style={styles.label}>Image of the Post</Text>
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          <Image
            source={image ? { uri: image } : require('../assets/images/partial-react-logo.png')}
            style={styles.postImage}
          />
          <Text style={styles.imagePickerText}>Choose Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomNav activeTab="Home" onTabPress={(tab) => {
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
  form: {
    padding: 24,
    paddingBottom: 80,
  },
  label: {
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 12,
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
  imagePicker: {
    alignItems: 'center',
    marginBottom: 8,
  },
  postImage: {
    width: 120,
    height: 90,
    borderRadius: 8,
    backgroundColor: '#eee',
    marginBottom: 4,
  },
  imagePickerText: {
    color: '#007AFF',
    fontSize: 14,
    marginBottom: 8,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pickerWrapper: {
    flex: 1,
    marginVertical: 4,
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 8,
  },
  picker: {
    color: '#222',
    fontSize: 16,
    backgroundColor: '#f5f5f5',
  },
});

export default CreatePost; 