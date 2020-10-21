import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

import { colors } from '../assets/globals';

const AppInputGroup: React.FC<{
  icon?: JSX.Element;
  flagIcon?: boolean;
}> = ({ children, icon, flagIcon }) => {
  const currentIcon = icon;

  return (
    <View style={styles.appInputGroup}>
      {flagIcon && (
        <Svg height={40} width={40} viewBox="0 0 6 3">
          <Path fill="#008751" d="m0 0h6v3H0z" />
          <Path fill="#fff" d="m2 0h2v3H2z" />
        </Svg>
      )}
      <View style={styles.appTextInput}>{children}</View>
      {icon && (
        <View style={styles.rightIcon}>
          <TouchableOpacity>{currentIcon}</TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  appInputGroup: {
    padding: 10,
    position: 'relative',
    borderWidth: 1,
    borderColor: colors.grey,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  appTextInput: { flex: 1 },
  rightIcon: {
    width: '10%',
    alignItems: 'flex-end',
  },
});

export default AppInputGroup;
