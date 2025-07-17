import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const tabs = ['Home', 'My posts', 'Search', 'Profile'];

interface BottomNavProps {
  activeTab: string;
  onTabPress?: (tab: string) => void;
}

const BottomNav = ({ activeTab, onTabPress }: BottomNavProps) => {
  const handlePress = (tab: string) => {
    if (onTabPress) onTabPress(tab);
  };
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeArea}>
      <View style={styles.container}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => handlePress(tab)}
          >
            <Text style={[styles.text, activeTab === tab && styles.activeText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    zIndex: 100,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#fff',
  },
  tab: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#f5f5f5',
  },
  activeTab: {
    backgroundColor: '#007AFF22',
  },
  text: {
    color: '#222',
    fontWeight: '500',
  },
  activeText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default BottomNav; 