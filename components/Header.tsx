import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title }: { title: string }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 16,
    backgroundColor: '#222',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header; 