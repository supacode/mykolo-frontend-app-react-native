import React from 'react';
import { TextInput, View, Image, StyleSheet } from 'react-native';

import { globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import AppInputGroup from '../components/AppInputGroup';
import Authentication from '../containers/Authentication';

const SignupPage: React.FC = () => {
  return (
    <Authentication
      pageTitle="Sign up"
      pageSubTitle="Require information for account creations"
    >
      <View style={styles.appContent}>
        <AppInputGroup iconName="mail">
          <TextInput
            style={globalStyles.appTextInput}
            placeholder="E-mail"
            keyboardType="email-address"
          />
        </AppInputGroup>
        <AppInputGroup iconName="mail">
          <TextInput
            style={globalStyles.appTextInput}
            placeholder="Alternate E-mail"
            keyboardType="email-address"
          />
        </AppInputGroup>
      </View>

      <AppButton text="Continue" />
    </Authentication>
  );
};

const styles = StyleSheet.create({
  appContent: {
    marginVertical: 20,
  },
});

export default SignupPage;
