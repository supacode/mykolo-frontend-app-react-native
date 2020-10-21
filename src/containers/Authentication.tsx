import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';

import { colors } from '../assets/globals';
import AppHeader from '../components/AppHeader';

const AuthWrap: React.FC<{ pageTitle?: string; pageSubTitle?: string }> = ({
  children,
  pageSubTitle,
  pageTitle,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.backgroundImage}
        >
          <AppHeader />
          <View style={styles.content}>
            <View style={styles.contentHeader}>
              {pageTitle && <Text style={styles.pageTitle}>{pageTitle}</Text>}

              {pageSubTitle && (
                <Text style={styles.pageSubTitle}>{pageSubTitle}</Text>
              )}
            </View>
            <View style={styles.appContent}>{children}</View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContent: {
    marginVertical: 20,
  },
  container: {
    display: 'flex',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  backgroundImage: {
    flex: 1,
    overflow: 'scroll',
    minHeight: Dimensions.get('window').height,
  },
  content: {
    padding: 23,
  },
  contentHeader: {
    paddingBottom: 20,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.accent,
    lineHeight: 50,
  },
  pageSubTitle: {
    fontSize: 18,
    color: colors.accent,
    lineHeight: 40,
  },
});

export default AuthWrap;
