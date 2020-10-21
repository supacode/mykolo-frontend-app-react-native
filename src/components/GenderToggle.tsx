import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Foundation } from '@expo/vector-icons';
import { colors } from '../assets/globals';

type IGender = 'male' | 'female';

const GenderToggle: React.FC<{ defaultGender?: IGender }> = ({
  defaultGender,
}) => {
  const [gender, setGender] = useState<IGender>();

  useEffect(() => {
    if (defaultGender) setGender(defaultGender);
  }, []);

  const switchGender = (gender: IGender) => {
    setGender(gender);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 40,
        justifyContent: 'space-evenly',
      }}
    >
      {/* Male */}
      <View style={styles.glowBtnWrap}>
        <TouchableOpacity onPress={() => switchGender('male')}>
          <View
            style={[
              styles.glowBtn,
              gender === 'male' ? styles.glowBtnActive : null,
            ]}
          >
            <Foundation
              name="male-symbol"
              style={styles.icon}
              size={50}
              color={gender === 'male' ? colors.white : colors.accent}
            />
          </View>
          <Text style={styles.glowBtnLabel}>Male</Text>
        </TouchableOpacity>
      </View>

      {/* Female */}
      <View style={styles.glowBtnWrap}>
        <TouchableOpacity onPress={() => switchGender('female')}>
          <View
            style={[
              styles.glowBtn,
              gender === 'female' ? styles.glowBtnActive : null,
            ]}
          >
            <Foundation
              name="female-symbol"
              style={styles.icon}
              size={50}
              color={gender === 'female' ? colors.white : colors.accent}
            />
          </View>
          <Text style={styles.glowBtnLabel}>Female</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  glowBtnWrap: {
    alignItems: 'center',
  },
  glowBtnLabel: {
    marginVertical: 20,
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  glowBtn: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: colors.grey,
  },
  glowBtnActive: {
    backgroundColor: colors.blue,
    elevation: 4,
    shadowColor: colors.blue,
    borderColor: colors.blue,
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 5,
    shadowRadius: 1,
  },
  icon: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
});

export default GenderToggle;
