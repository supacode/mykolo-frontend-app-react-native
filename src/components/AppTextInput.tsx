import React from 'react';
import { KeyboardType, KeyboardTypeOptions, TextInput } from 'react-native';

import { globalStyles } from '../assets/globals';
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
    <>
      <AppInputGroup flagIcon={flagIcon} icon={icon}>
        <TextInput
          keyboardType={keyboardType}
          style={globalStyles.appTextInput}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
        />
      </AppInputGroup>
    </>
  );
};

export default AppTextInput;
