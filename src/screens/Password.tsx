import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors, globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import AppInputGroup from '../components/AppInputGroup';
import Authentication from '../containers/Authentication';
import AppTextInput from '../components/AppTextInput';

const PasswordPage: React.FC = () => {
  const [currentIcon, setCurrentIcon] = useState(
    <Feather name="eye-off" size={30} color={colors.accent} />,
  );

  return (
    <Authentication
      pageTitle="Set Password"
      pageSubTitle="Require information for account creations"
    >
      <AppTextInput placeholder="Password" icon={currentIcon} secureTextEntry />

      <AppTextInput
        placeholder="Repeat Password"
        icon={currentIcon}
        secureTextEntry
      />

      <AppButton text="Continue" />
    </Authentication>
  );
};

export default PasswordPage;
