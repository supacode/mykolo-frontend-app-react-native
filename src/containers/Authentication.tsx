import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';

import AppHeader from '../components/AppHeader';

const AuthWrap: React.FC = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.backgroundImage}
        >
          <AppHeader />
          <View style={styles.content}>{children}</View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    height: '100vh',
    width: '100vw',
  },
  content: {
    padding: '2rem',
  },
});

export default AuthWrap;
