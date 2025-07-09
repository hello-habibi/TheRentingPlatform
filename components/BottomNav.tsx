import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const tabs = ['Home', 'My posts', 'Search', 'Profile']; // Removed 'Footer'

const BottomNav = ({ onTabPress }: { onTabPress?: (tab: string) => void }) => (
  <SafeAreaView edges={['bottom']} style={styles.safeArea}>
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity key={tab} style={styles.tab} onPress={() => onTabPress && onTabPress(tab)}>
          <Text style={styles.text}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#222',
    zIndex: 100,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#222',
  },
  tab: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#444',
  },
  text: {
    color: '#fff',
  },
});

export default BottomNav; 