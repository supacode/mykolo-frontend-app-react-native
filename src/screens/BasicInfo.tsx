import React from 'react';

import AppButton from '../components/AppButton';
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
      <AppTextInput placeholder="Address" multiline />
      <AppTextInput placeholder="Input Address" multiline />
      <AppTextInput placeholder="Local Government" />

      {/* TODO: Create gender buttons */}

      <AppButton text="Continue" />
    </Authentication>
  );
};

export default BasicInfoPage;
