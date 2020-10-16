import React, { Fragment } from 'react';

import PasswordPage from './src/pages/Password';
import EmailPage from './src/pages/Email';

const App: React.FC = () => {
  return (
    <Fragment>
      {/* <EmailPage /> */}
      <PasswordPage />
    </Fragment>
  );
};

export default App;
