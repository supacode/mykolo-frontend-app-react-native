import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { colors, globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import AppInputGroup from '../components/AppInputGroup';
import Authentication from '../containers/Authentication';

const EmailPage: React.FC = () => {
  const [currentIcon, setCurrentIcon] = useState(
    <AntDesign name="mail" size={30} color={colors.accent} />,
  );

  return (
    <Authentication
      pageTitle="Sign up"
      pageSubTitle="Require information for account creations"
    >
      <AppInputGroup icon={currentIcon}>
        <TextInput
          style={globalStyles.appTextInput}
          placeholder="E-mail"
          keyboardType="email-address"
        />
      </AppInputGroup>
      <AppInputGroup icon={currentIcon}>
        <TextInput
          style={globalStyles.appTextInput}
          placeholder="Alternate E-mail"
          keyboardType="email-address"
        />
      </AppInputGroup>

      <AppButton text="Continue" />
    </Authentication>
  );
};

export default EmailPage;
