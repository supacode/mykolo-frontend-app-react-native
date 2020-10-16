import React from 'react';
import { TextInput } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

import { colors, globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import AppInputGroup from '../components/AppInputGroup';
import Authentication from '../containers/Authentication';

const EmergencyContactPage: React.FC = () => {
  return (
    <Authentication
      pageTitle="Emergency Contact"
      pageSubTitle="Please fill in the details below"
    >
      <AppInputGroup>
        <TextInput style={globalStyles.appTextInput} placeholder="Name" />
      </AppInputGroup>
      {/* TODO: Create flag  icon */}
      <AppInputGroup
        icon={<Feather name="smartphone" size={30} color="black" />}
      >
        <TextInput
          style={globalStyles.appTextInput}
          placeholder="+234 000 000 000"
        />
      </AppInputGroup>
      <AppInputGroup
        icon={<AntDesign name="mail" size={30} color={colors.accent} />}
      >
        <TextInput
          style={globalStyles.appTextInput}
          placeholder="Email address"
        />
      </AppInputGroup>
      {/* TODO: Create gender buttons */}

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

export default EmergencyContactPage;
