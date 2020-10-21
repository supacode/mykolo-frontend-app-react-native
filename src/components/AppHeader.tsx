import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { globalStyles } from '../assets/globals';

const AppHeader: React.FC = props => {
  return (
    <View style={styles.header}>
      {/* TODO: Fix go back */}
      <TouchableOpacity>
        <Ionicons name="ios-arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.logoWrap}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../assets/logo.png')}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={globalStyles.defaultText}>Skip Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 23,
  },
  logoWrap: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
    height: 80,
    padding: 20,
  },
});

export default AppHeader;
