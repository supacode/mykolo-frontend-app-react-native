import React from 'react';
import { KeyboardTypeOptions, TextInput, StyleSheet } from 'react-native';

import AppInputGroup from './AppInputGroup';

const AppTextInput: React.FC<{
  icon?: JSX.Element;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  flagIcon?: boolean;
  secureTextEntry?: boolean;
  multiline?: boolean;
}> = ({
  icon,
  placeholder,
  keyboardType,
  flagIcon,
  secureTextEntry,
  multiline,
}) => {
  return (
    <AppInputGroup flagIcon={flagIcon} icon={icon}>
      <TextInput
        keyboardType={keyboardType}
        style={styles.appTextInput}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        blurOnSubmit={true}
      />
    </AppInputGroup>
  );
};

const styles = StyleSheet.create({
  appTextInput: {
    padding: 10,
    borderWidth: 0,
    fontSize: 18,
    width: '100%',
  },
});

export default AppTextInput;
