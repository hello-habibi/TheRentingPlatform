import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

// Example logo from icons8 (replace with your preferred logo)
const LOGO_URL = 'https://img.icons8.com/ios-filled/50/007AFF/home.png';

const Header = ({ title, hideLogo }: { title: string; hideLogo?: boolean }) => (
  <View style={styles.header}>
    <View style={styles.logoTitleRow}>
      {!hideLogo && (
        <Image
          source={{ uri: LOGO_URL }}
          style={styles.logo}
          resizeMode="contain"
        />
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logoTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  title: {
    color: '#222',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header; 