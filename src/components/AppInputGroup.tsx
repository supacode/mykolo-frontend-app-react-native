import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '../assets/globals';

const AppInputGroup: React.FC<{ icon?: JSX.Element }> = ({
  children,
  icon,
}) => {
  const currentIcon = icon;

  return (
    <View style={styles.appInputGroup}>
      <View style={{ width: icon ? '85%' : '100%' }}>{children}</View>
      {icon && currentIcon}
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
});

export default AppInputGroup;
