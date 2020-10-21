import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles } from '../assets/globals';

import AppButton from '../components/AppButton';
import AuthFooter from '../components/AuthFooter';
import Authentication from '../containers/Authentication';

const SetAge: React.FC = () => {
  return (
    <Authentication>
      <View style={styles.imageWrap}>
        <Image
          style={styles.avatarImg}
          source={require('../assets/female.png')}
        />
        <Image
          style={styles.avatarImg}
          source={require('../assets/male.png')}
        />
      </View>
      <AppButton text="Age" />

      <AuthFooter>
        <Text style={globalStyles.defaultText}>Already have an account?</Text>
        <Text style={[globalStyles.defaultText, globalStyles.dangerText]}>
          LOGIN
        </Text>
      </AuthFooter>
    </Authentication>
  );
};

const styles = StyleSheet.create({
  imageWrap: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
  avatarImg: { height: 120, resizeMode: 'contain' },
});

export default SetAge;
