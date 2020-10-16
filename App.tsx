import React, { Fragment } from 'react';

import PasswordPage from './src/screens/Password';
import EmailPage from './src/screens/Email';
import BasicInfoPage from './src/screens/BasicInfo';
import EmergencyContactPage from './src/screens/EmergencyContact';
import EducationPage from './src/screens/Education';

const App: React.FC = () => {
  return (
    <Fragment>
      {/* <EmailPage /> */}
      {/* <PasswordPage /> */}
      {/* <BasicInfoPage /> */}
      {/* <EmergencyContactPage /> */}
      <EducationPage />
    </Fragment>
  );
};

export default App;
