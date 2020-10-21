import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../assets/globals';

import AppButton from '../components/AppButton';
import Authentication from '../containers/Authentication';

const OTPsent: React.FC = () => {
  return (
    <Authentication pageTitle="OTP Sent">
      <View>
        <Text style={globalStyles.defaultText}>
          <Text>Enter the 4-digit code sent to you at +234 804 993 2493.</Text>{' '}
          <Text style={globalStyles.dangerText}>
            Did you enter the current number?
          </Text>
        </Text>
        <View style={styles.otpTextWrap}>
          <Text style={styles.otpText}>5</Text>
          <Text style={styles.otpText}>4</Text>
          <Text style={styles.otpText}>5</Text>
          <Text style={styles.otpText}>2</Text>
        </View>
      </View>
      <AppButton text="Resent OTP" />

      <Text style={[globalStyles.defaultText, globalStyles.dangerText]}>
        I didn't receive code.
      </Text>
    </Authentication>
  );
};

const styles = StyleSheet.create({
  otpText: {
    ...globalStyles.defaultText,
    paddingVertical: 50,
  },
  otpTextWrap: { flexDirection: 'row', justifyContent: 'space-evenly' },
});

export default OTPsent;
