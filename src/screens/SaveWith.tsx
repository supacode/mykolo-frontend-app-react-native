import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../assets/globals';
import { Feather } from '@expo/vector-icons';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Authentication from '../containers/Authentication';
import AuthFooter from '../components/AuthFooter';

const SaveWith: React.FC = () => {
  return (
    <Authentication
      pageTitle="Save With MyKolo"
      pageSubTitle="Please sign in to continue app"
    >
      <AppTextInput
        icon={<Feather name="smartphone" size={30} color="black" />}
        placeholder="E-mail address"
        keyboardType="phone-pad"
      />
      <AppTextInput
        icon={<Feather name="lock" size={30} color="black" />}
        placeholder="•••••••"
        secureTextEntry
      />

      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      <AppButton text="Sign in Account" />

      <AuthFooter>
        <Text style={globalStyles.defaultText}>Don't have an account?</Text>
        <Text style={[globalStyles.defaultText, globalStyles.dangerText]}>
          REGISTER
        </Text>
      </AuthFooter>
    </Authentication>
  );
};

const styles = StyleSheet.create({
  forgotPasswordText: {
    ...globalStyles.defaultText,
    ...globalStyles.dangerText,
    textAlign: 'right',
    marginBottom: 50,
  },
});

export default SaveWith;
