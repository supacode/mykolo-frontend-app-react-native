import React from 'react';
import { TextInput } from 'react-native';

import { globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import AppInputGroup from '../components/AppInputGroup';
import AppTextInput from '../components/AppTextInput';
import Authentication from '../containers/Authentication';

const EducationPage: React.FC = () => {
  return (
    <Authentication
      pageTitle="Education"
      pageSubTitle="Fill in the details below"
    >
      <AppTextInput placeholder="Bachelor's Degree" />
      <AppTextInput placeholder="Master's Degree" />
      <AppTextInput placeholder="Ph. D." />
      <AppTextInput placeholder="Others" />

      <AppButton text="Continue" />
    </Authentication>
  );
};

export default EducationPage;
