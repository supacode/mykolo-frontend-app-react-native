import React from 'react';
import { TextInput } from 'react-native';

import { globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import AppInputGroup from '../components/AppInputGroup';
import AppTextInput from '../components/AppTextInput';
import Authentication from '../containers/Authentication';

const BasicInfoPage: React.FC = () => {
  return (
    <Authentication
      pageTitle="Basic Information"
      pageSubTitle="Please fill in the details below"
    >
      <AppTextInput placeholder="First name" />
      <AppTextInput placeholder="Last name" />
      <AppTextInput placeholder="Occupation" />
      <AppTextInput placeholder="Address" />
      <AppTextInput placeholder="Local Government" />
      <AppTextInput placeholder="Input Address" />

      {/* TODO: Create gender buttons */}

      <AppButton text="Continue" />
    </Authentication>
  );
};

export default BasicInfoPage;
