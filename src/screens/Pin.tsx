import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { colors } from '../assets/globals';
import AppButton from '../components/AppButton';
import Authentication from '../containers/Authentication';
import AppTextInput from '../components/AppTextInput';

const PinPage: React.FC = () => {
  const [currentIcon, setCurrentIcon] = useState(
    <Feather name="eye-off" size={30} color={colors.accent} />,
  );

  return (
    <Authentication
      pageTitle="Set PIN"
      pageSubTitle="Require information for account creations"
    >
      <AppTextInput
        icon={currentIcon}
        placeholder="PIN"
        keyboardType="number-pad"
      />
      <AppTextInput
        icon={currentIcon}
        placeholder="Repeat PIN"
        keyboardType="number-pad"
      />

      <AppButton text="Continue" />
    </Authentication>
  );
};

export default PinPage;
