import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { colors, globalStyles } from '../assets/globals';
import AppButton from '../components/AppButton';
import AppInputGroup from '../components/AppInputGroup';
import Authentication from '../containers/Authentication';

const EmailPage: React.FC = () => {
  const [currentIcon, setCurrentIcon] = useState(
    <AntDesign name="mail" size={30} color={colors.accent} />,
  );

  return (
    <Authentication
      pageTitle="Sign up"
      pageSubTitle="Require information for account creations"
    >
      <View style={styles.appContent}>
        <AppInputGroup icon={currentIcon}>
          <TextInput
            style={globalStyles.appTextInput}
            placeholder="E-mail"
            keyboardType="email-address"
          />
        </AppInputGroup>
        <AppInputGroup icon={currentIcon}>
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

export default EmailPage;
