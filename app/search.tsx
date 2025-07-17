import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { allDistricts, districtsThanas } from '../assets/districtsThanas';
import { posts } from '../assets/dummyPosts';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';
import PostCard from '../components/PostCard';

const Search = () => {
  const [district, setDistrict] = useState('');
  const [thana, setThana] = useState('');
  const router = useRouter();
  const thanas = district ? districtsThanas[district] || [] : [];
  const filtered = posts.filter(
    p =>
      (!district || (p.location && p.location.toLowerCase().includes(district.toLowerCase()))) &&
      (!thana || (p.location && p.location.toLowerCase().includes(thana.toLowerCase())))
  );
  return (
    <View style={styles.container}>
      <Header title="Search" />
      <View style={styles.filters}>
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
      </View>
      <ScrollView style={styles.results}>
        {filtered.length === 0 ? (
          <Text style={styles.noResults}>No results found.</Text>
        ) : (
          filtered.map((post, idx) => (
            <PostCard
              key={idx}
              {...post}
              onDetails={() => router.push({ pathname: '/details', params: { ...post } })}
            />
          ))
        )}
      </ScrollView>
      <BottomNav activeTab="Search" onTabPress={(tab) => {
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
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  pickerWrapper: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
    overflow: 'hidden',
  },
  picker: {
    color: '#222',
    fontSize: 16,
    backgroundColor: '#f5f5f5',
  },
  results: {
    flex: 1,
    paddingHorizontal: 8,
  },
  noResults: {
    color: '#888',
    textAlign: 'center',
    marginTop: 32,
    fontSize: 18,
  },
});

export default Search; 