import React, { Fragment } from 'react';

import PasswordPage from './src/screens/Password';
import EmailPage from './src/screens/Email';
import BasicInfoPage from './src/screens/BasicInfo';
import EmergencyContactPage from './src/screens/EmergencyContact';
import EducationPage from './src/screens/Education';
import NextOfKinPage from './src/screens/NextOfKin';
import PasswordRecoveryPage from './src/screens/PasswordRecovery';
import PhoneVerificationPage from './src/screens/PhoneVerification';
import PinPage from './src/screens/Pin';
import OTPsent from './src/screens/OTPsent';
import WelcomeBack from './src/screens/WelcomeBack';
import SaveWith from './src/screens/SaveWith';
import NameInput from './src/screens/NameInput';
import SetAge from './src/screens/SetAge';

const App: React.FC = () => {
  return (
    <Fragment>
      <WelcomeBack />
      {/* <PinPage /> */}
      {/* <SaveWith /> */}
      {/* <PhoneVerificationPage /> */}
      {/* <OTPsent /> */}
      {/* <EmergencyContactPage /> */}
      {/* <NextOfKinPage /> */}
      {/* <EmailPage /> */}
      {/* <BasicInfoPage /> */}
      {/* <EducationPage /> */}
      {/* <NameInput /> */}
      {/* <PasswordRecoveryPage /> */}
      {/* <SetAge /> */}
      {/* <PasswordPage /> */}
    </Fragment>
  );
};

export default App;
