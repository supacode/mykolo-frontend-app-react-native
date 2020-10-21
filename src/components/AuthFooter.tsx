import React from 'react';
import { StyleSheet, View } from 'react-native';

const AuthFooter: React.FC = ({ children }) => {
  return <View style={styles.authFooterWrap}>{children}</View>;
};

const styles = StyleSheet.create({
  authFooterWrap: {
    marginTop: 50,
  },
});

export default AuthFooter;
