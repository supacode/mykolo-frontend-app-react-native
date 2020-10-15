import React from 'react';

import { Button } from 'react-native';

const AppButton: React.FC<{ text: string }> = ({ text }) => {
  return <Button title={text} onPress={() => {}}></Button>;
};

export default AppButton;
