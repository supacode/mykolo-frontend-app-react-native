import { StyleSheet } from 'react-native';

export const colors = {
  accent: '#040404',
  white: '#fff',
  grey: '#e6e6e6',
  blue: '#4088e2',
  danger: '#da3021',
};

export const globalStyles = StyleSheet.create({
  defaultText: {
    fontSize: 17,
    lineHeight: 30,
    color: colors.accent,
  },
  dangerText: {
    color: colors.danger,
  },
});
