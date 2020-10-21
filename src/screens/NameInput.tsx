import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../assets/globals';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import AuthFooter from '../components/AuthFooter';
import Authentication from '../containers/Authentication';

const NameInput: React.FC = () => {
  return (
    <Authentication
      pageTitle="Sign Up"
      pageSubTitle="Please sign in to continue app"
    >
      <AppTextInput placeholder="E-mail address" />

      <AppButton text="Continue" />

      <AuthFooter>
        <Text style={globalStyles.defaultText}>Already have an account?</Text>
        <Text style={[globalStyles.defaultText, globalStyles.dangerText]}>
          LOGIN
        </Text>
      </AuthFooter>
    </Authentication>
  );
};

export default NameInput;
