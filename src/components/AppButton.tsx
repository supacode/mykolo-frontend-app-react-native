import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors } from '../assets/globals';

const AppButton: React.FC<{
  onPress?: Function;
  activeOpacity?: number;
  text: string;
}> = ({ text, onPress, activeOpacity }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onPress}
      activeOpacity={activeOpacity ? activeOpacity : 0.8}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 8,
    backgroundColor: colors.accent,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    shadowColor: `rgba(${colors.accent}, .4)`,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  text: {
    fontSize: 15,
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default AppButton;
