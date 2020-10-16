import React, { Fragment } from 'react';

import PasswordPage from './src/pages/Password';
import EmailPage from './src/pages/Email';
import BasicInfoPage from './src/pages/BasicInfo';
import EmergencyContactPage from './src/pages/EmergencyContact';

const App: React.FC = () => {
  return (
    <Fragment>
      {/* <EmailPage /> */}
      {/* <PasswordPage /> */}
      {/* <BasicInfoPage /> */}
      <EmergencyContactPage />
    </Fragment>
  );
};

export default App;
