import React, { useState } from 'react';
import { Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { colors, globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import Authentication from '../containers/Authentication';
import AppTextInput from '../components/AppTextInput';
import AuthFooter from '../components/AuthFooter';

const EmailPage: React.FC = () => {
  const [currentIcon, setCurrentIcon] = useState(
    <AntDesign name="mail" size={30} color={colors.accent} />,
  );

  return (
    <Authentication
      pageTitle="Sign up"
      pageSubTitle="Require information for account creations"
    >
      <AppTextInput
        placeholder="E-mail"
        keyboardType="email-address"
        icon={currentIcon}
      />
      <AppTextInput
        placeholder="Alternate E-mail"
        keyboardType="email-address"
        icon={currentIcon}
      />

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

export default EmailPage;
