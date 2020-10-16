import React from 'react';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors, globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import AppInputGroup from '../components/AppInputGroup';
import Authentication from '../containers/Authentication';

const NextOfKinPage: React.FC = () => {
  return (
    <Authentication
      pageTitle="Next of Kin"
      pageSubTitle="Fill in the details below"
    >
      <AppInputGroup>
        <TextInput style={globalStyles.appTextInput} placeholder="Name" />
      </AppInputGroup>
      <AppInputGroup>
        <TextInput style={globalStyles.appTextInput} placeholder="Address" />
      </AppInputGroup>
      <AppInputGroup
        icon={<Feather name="smartphone" size={30} color={colors.accent} />}
      >
        <TextInput
          style={globalStyles.appTextInput}
          placeholder="+234 000 000 000"
          keyboardType="phone-pad"
        />
      </AppInputGroup>
      <AppInputGroup>
        <TextInput
          style={globalStyles.appTextInput}
          placeholder="Relationship"
        />
      </AppInputGroup>

      <AppButton text="Continue" />
    </Authentication>
  );
};

export default NextOfKinPage;
