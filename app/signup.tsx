import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

const genders = ['Male', 'Female', 'Other'];

const SignUp = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [profileImage, setProfileImage] = useState(undefined);
  const [nidFront, setNidFront] = useState(undefined);
  const [nidBack, setNidBack] = useState(undefined);
  const [nid, setNid] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const handleSendOtp = () => {
    if (phone.length < 10) {
      alert('Enter a valid phone number');
      return;
    }
    setOtpSent(true);
    alert('OTP sent to your phone! (mock)');
  };

  const handleSignUp = () => {
    if (!otpSent || otp.length < 4) {
      alert('Please enter the OTP sent to your phone.');
      return;
    }
    // Add validation as needed
    alert('Signed up! (mock)');
    router.push('/login');
  };

  const pickImage = async (setter) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access media library is required!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setter(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Sign Up" />
      <ScrollView contentContainerStyle={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter name" value={name} onChangeText={setName} />
        <Text style={styles.label}>Age</Text>
        <TextInput style={styles.input} placeholder="Enter age" value={age} onChangeText={setAge} keyboardType="numeric" />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input} placeholder="Enter phone number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
        <TouchableOpacity style={styles.otpButton} onPress={handleSendOtp}>
          <Text style={styles.otpButtonText}>{otpSent ? 'Resend OTP' : 'Send OTP'}</Text>
        </TouchableOpacity>
        {otpSent && (
          <>
            <Text style={styles.label}>OTP</Text>
            <TextInput style={styles.input} placeholder="Enter OTP" value={otp} onChangeText={setOtp} keyboardType="numeric" />
          </>
        )}
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} placeholder="Enter address" value={address} onChangeText={setAddress} />
        <Text style={styles.label}>Gender</Text>
        <View style={styles.genderRow}>
          {genders.map(g => (
            <TouchableOpacity
              key={g}
              style={[styles.genderButton, gender === g && styles.genderButtonActive]}
              onPress={() => setGender(g)}
            >
              <Text style={[styles.genderButtonText, gender === g && styles.genderButtonTextActive]}>{g}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.label}>Profile Image</Text>
        <TouchableOpacity style={styles.imagePicker} onPress={() => pickImage(setProfileImage)}>
          <Image
            source={profileImage ? { uri: profileImage } : require('../assets/images/partial-react-logo.png')}
            style={styles.profileImage}
          />
          <Text style={styles.imagePickerText}>Choose Profile Image</Text>
        </TouchableOpacity>
        <Text style={styles.label}>NID Number</Text>
        <TextInput style={styles.input} placeholder="Enter NID number" value={nid} onChangeText={setNid} keyboardType="numeric" />
        <Text style={styles.label}>NID Front Image</Text>
        <TouchableOpacity style={styles.imagePicker} onPress={() => pickImage(setNidFront)}>
          <Image
            source={nidFront ? { uri: nidFront } : require('../assets/images/partial-react-logo.png')}
            style={styles.nidImage}
          />
          <Text style={styles.imagePickerText}>Choose NID Front</Text>
        </TouchableOpacity>
        <Text style={styles.label}>NID Back Image</Text>
        <TouchableOpacity style={styles.imagePicker} onPress={() => pickImage(setNidBack)}>
          <Image
            source={nidBack ? { uri: nidBack } : require('../assets/images/partial-react-logo.png')}
            style={styles.nidImage}
          />
          <Text style={styles.imagePickerText}>Choose NID Back</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter password" value={password} onChangeText={setPassword} secureTextEntry />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput style={styles.input} placeholder="Confirm password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomNav onTabPress={(tab) => {
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
  genderRow: {
    flexDirection: 'row',
    marginBottom: 8,
    gap: 8,
  },
  genderButton: {
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginRight: 8,
  },
  genderButtonActive: {
    backgroundColor: '#007AFF',
  },
  genderButtonText: {
    color: '#222',
    fontWeight: 'bold',
  },
  genderButtonTextActive: {
    color: '#fff',
  },
  imagePicker: {
    alignItems: 'center',
    marginBottom: 8,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#eee',
    marginBottom: 4,
  },
  nidImage: {
    width: 120,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#eee',
    marginBottom: 4,
  },
  imagePickerText: {
    color: '#007AFF',
    fontSize: 14,
    marginBottom: 8,
  },
  otpButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 8,
    width: 120,
    alignSelf: 'flex-end',
  },
  otpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignUp; 