import React, { Fragment } from 'react';

import AppButton from '../components/AppButton';
import Authentication from '../containers/Authentication';

const SignupPage: React.FC = () => {
  return (
    <Fragment>
      <Authentication
        pageTitle="Sign up"
        pageSubTitle="Require information for account creations"
      >
        <AppButton text="Continue" />
      </Authentication>
    </Fragment>
  );
};

export default SignupPage;
