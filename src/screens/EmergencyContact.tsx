import React from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';

import { colors } from '../assets/globals';
import AppButton from '../components/AppButton';
import Authentication from '../containers/Authentication';
import AppTextInput from '../components/AppTextInput';
import AppGlowButton from '../components/GenderToggle';

const EmergencyContactPage: React.FC = () => {
  return (
    <Authentication
      pageTitle="Emergency Contact"
      pageSubTitle="Please fill in the details below"
    >
      <AppTextInput placeholder="Name" />
      <AppTextInput
        icon={<Feather name="smartphone" size={30} color="black" />}
        placeholder="+234 000 000 000"
        keyboardType="phone-pad"
        flagIcon
      />

      <AppTextInput
        icon={<AntDesign name="mail" size={30} color={colors.accent} />}
        placeholder="Email address"
        keyboardType="email-address"
      />

      <AppGlowButton />

      <AppTextInput placeholder="Relationship" />

      <AppButton text="Continue" />
    </Authentication>
  );
};

export default EmergencyContactPage;
