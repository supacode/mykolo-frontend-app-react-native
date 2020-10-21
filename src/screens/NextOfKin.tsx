import React from 'react';
import { Feather } from '@expo/vector-icons';

import { colors } from '../assets/globals';
import AppButton from '../components/AppButton';
import Authentication from '../containers/Authentication';
import AppTextInput from '../components/AppTextInput';

const NextOfKinPage: React.FC = () => {
  return (
    <Authentication
      pageTitle="Next of Kin"
      pageSubTitle="Fill in the details below"
    >
      <AppTextInput placeholder="Name" />
      <AppTextInput placeholder="Address" multiline />
      <AppTextInput
        placeholder="+234 000 000 000"
        keyboardType="phone-pad"
        flagIcon
        icon={<Feather name="smartphone" size={30} color={colors.accent} />}
      />

      <AppTextInput placeholder="Relationship" />

      <AppButton text="Continue" />
    </Authentication>
  );
};

export default NextOfKinPage;
