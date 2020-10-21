import React from 'react';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors, globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import Authentication from '../containers/Authentication';
import AppTextInput from '../components/AppTextInput';

const PhoneVerificationPage: React.FC = () => {
  return (
    <Authentication
      pageTitle="Enter Phone Number"
      pageSubTitle="Please add your phone to verify OTP"
    >
      <AppTextInput
        placeholder="+234 000 000 000"
        keyboardType="phone-pad"
        flagIcon
        icon={<Feather name="smartphone" size={30} color={colors.accent} />}
      />

      <AppButton text="Verify Phone Number" />
      <Text style={[globalStyles.defaultText, globalStyles.dangerText]}>
        I didn't receive code.
      </Text>
    </Authentication>
  );
};

export default PhoneVerificationPage;
