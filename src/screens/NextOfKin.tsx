import React from 'react';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors, globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import AppInputGroup from '../components/AppInputGroup';
import Authentication from '../containers/Authentication';
import AppTextInput from '../components/AppTextInput';

const NextOfKinPage: React.FC = () => {
  return (
    <Authentication
      pageTitle="Next of Kin"
      pageSubTitle="Fill in the details below"
    >
      <AppTextInput placeholder="Name" keyboardType="default" />
      <AppTextInput placeholder="Address" keyboardType="default" multiline />
      <AppTextInput
        placeholder="+234 000 000 000"
        keyboardType="default"
        flagIcon
        icon={<Feather name="smartphone" size={30} color={colors.accent} />}
      />

      <AppTextInput placeholder="Relationship" keyboardType="default" />

      <AppButton text="Continue" />
    </Authentication>
  );
};

export default NextOfKinPage;
