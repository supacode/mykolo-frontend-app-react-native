import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import AppInputGroup from '../components/AppInputGroup';
import Authentication from '../containers/Authentication';

const EducationPage: React.FC = () => {
  return (
    <Authentication
      pageTitle="Education"
      pageSubTitle="Fill in the details below"
    >
      <AppInputGroup>
        <TextInput
          style={globalStyles.appTextInput}
          placeholder="Bachelor's Degree"
        />
      </AppInputGroup>
      <AppInputGroup>
        <TextInput
          style={globalStyles.appTextInput}
          placeholder="Master's Degree"
        />
      </AppInputGroup>
      <AppInputGroup>
        <TextInput style={globalStyles.appTextInput} placeholder="Ph. D." />
      </AppInputGroup>
      <AppInputGroup>
        <TextInput style={globalStyles.appTextInput} placeholder="Others" />
      </AppInputGroup>

      <AppButton text="Continue" />
    </Authentication>
  );
};

export default EducationPage;
