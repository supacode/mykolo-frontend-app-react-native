import React from 'react';
import { TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { colors, globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import AppInputGroup from '../components/AppInputGroup';
import Authentication from '../containers/Authentication';

const PasswordRecoveryPage: React.FC = () => {
  return (
    <Authentication
      pageTitle="Forgot Password"
      pageSubTitle="Require information for account creations"
    >
      <AppInputGroup
        icon={<AntDesign name="mail" size={30} color={colors.accent} />}
      >
        <TextInput
          style={globalStyles.appTextInput}
          placeholder="E-mail"
          keyboardType="email-address"
        />
      </AppInputGroup>

      <AppButton text="Send Link" />
    </Authentication>
  );
};

export default PasswordRecoveryPage;
