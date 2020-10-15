import React from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';

const AppHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <Button title="<" onPress={() => {}}></Button>
      <View style={styles.logoWrap}>
        <Image style={styles.logoImg} source={require('../assets/logo.png')} />
      </View>
      <View>
        <Text>Skip Here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 23,
  },
  logoWrap: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    margin: 2,
    height: '50px',
  },
  logoImg: {
    flex: 1,
    height: '50%',
    width: '50%',
  },
});

export default AppHeader;
