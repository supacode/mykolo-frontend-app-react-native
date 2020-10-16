import React from 'react';
import { TextInput } from 'react-native';

import { globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import AppInputGroup from '../components/AppInputGroup';
import Authentication from '../containers/Authentication';

const BasicInfoPage: React.FC = () => {
  return (
    <Authentication
      pageTitle="Basic Information"
      pageSubTitle="Please fill in the details below"
    >
      <AppInputGroup>
        <TextInput style={globalStyles.appTextInput} placeholder="First name" />
      </AppInputGroup>
      <AppInputGroup>
        <TextInput style={globalStyles.appTextInput} placeholder="Last name" />
      </AppInputGroup>
      {/* TODO: Create gender buttons */}
      <AppInputGroup>
        <TextInput style={globalStyles.appTextInput} placeholder="Occupation" />
      </AppInputGroup>
      <AppInputGroup>
        <TextInput style={globalStyles.appTextInput} placeholder="Address" />
      </AppInputGroup>
      <AppInputGroup>
        <TextInput
          style={globalStyles.appTextInput}
          placeholder="Local Government"
        />
      </AppInputGroup>
      <AppInputGroup>
        <TextInput
          style={globalStyles.appTextInput}
          placeholder="Input Address"
        />
      </AppInputGroup>

      <AppButton text="Continue" />
    </Authentication>
  );
};

export default BasicInfoPage;
