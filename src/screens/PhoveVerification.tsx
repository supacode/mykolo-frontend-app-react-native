import React from 'react';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors, globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import AppInputGroup from '../components/AppInputGroup';
import Authentication from '../containers/Authentication';

const PhoneVerificationPage: React.FC = () => {
  return (
    <Authentication
      pageTitle="Enter Phone Number"
      pageSubTitle="Please add your phone to verify OTP"
    >
      <AppInputGroup
        icon={<Feather name="smartphone" size={30} color={colors.accent} />}
      >
        <TextInput
          style={globalStyles.appTextInput}
          placeholder="+234 000 000 000"
          keyboardType="phone-pad"
        />
      </AppInputGroup>

      <AppButton text="Verify Phone Number" />
    </Authentication>
  );
};

export default PhoneVerificationPage;
