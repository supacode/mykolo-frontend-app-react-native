import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors, globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import AppInputGroup from '../components/AppInputGroup';
import Authentication from '../containers/Authentication';

const PinPage: React.FC = () => {
  const [currentIcon, setCurrentIcon] = useState(
    <Feather name="eye-off" size={30} color={colors.accent} />,
  );

  return (
    <Authentication
      pageTitle="Set PIN"
      pageSubTitle="Require information for account creations"
    >
      <AppInputGroup icon={currentIcon}>
        <TextInput
          style={globalStyles.appTextInput}
          placeholder="PIN"
          keyboardType="number-pad"
        />
      </AppInputGroup>
      <AppInputGroup icon={currentIcon}>
        <TextInput
          style={globalStyles.appTextInput}
          placeholder="Repeat PIN"
          keyboardType="number-pad"
        />
      </AppInputGroup>

      <AppButton text="Continue" />
    </Authentication>
  );
};

export default PinPage;
