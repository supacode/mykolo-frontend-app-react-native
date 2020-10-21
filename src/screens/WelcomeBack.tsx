import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../assets/globals';
import { Feather } from '@expo/vector-icons';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Authentication from '../containers/Authentication';
import AuthFooter from '../components/AuthFooter';

const WelcomeBack: React.FC = () => {
  return (
    <Authentication
      pageTitle="Wecome Back"
      pageSubTitle="Enter your registered phone number to login"
    >
      <AppTextInput
        icon={<Feather name="smartphone" size={30} color="black" />}
        placeholder="+234 000 000 000"
        keyboardType="phone-pad"
        flagIcon
      />

      <AppButton text="Sign In" />

      <AuthFooter>
        <Text style={[globalStyles.defaultText, globalStyles.dangerText]}>
          Help?
        </Text>
      </AuthFooter>
    </Authentication>
  );
};

export default WelcomeBack;
