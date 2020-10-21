import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '../assets/globals';
import AppButton from '../components/AppButton';
import Authentication from '../containers/Authentication';
import AppTextInput from '../components/AppTextInput';

const PasswordRecoveryPage: React.FC = () => {
  return (
    <Authentication
      pageTitle="Forgot Password"
      pageSubTitle="Require information for account creations"
    >
      <AppTextInput
        placeholder="E-mail address"
        keyboardType="default"
        icon={<AntDesign name="mail" size={30} color={colors.accent} />}
      />
      <AppButton text="Send Link" />
    </Authentication>
  );
};

export default PasswordRecoveryPage;
